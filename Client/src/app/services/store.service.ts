import { Injectable, Inject } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product.interface';
import { CartItem } from '../interfaces/cart.interface';
import { APP_SETTINGS } from '../settings/app.settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  static getProduct(id: any, number: any) {
    throw new Error('Method not implemented.');
  }

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public search = new BehaviorSubject<string>('');
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();
  public products$: Observable<Product[]>;

  private selectedCategorySubject = new BehaviorSubject<string | null>(null);
  private categoriesSubject = new BehaviorSubject<string[]>([]);
  categories$: Observable<string[]> = this.categoriesSubject.asObservable();
  productsByCategory$: Observable<Product[]>;

  constructor(
    private http: HttpClient,
    @Inject(APP_SETTINGS) private appSettings: any
  ) {
    this.products$ = ajax
      .getJSON<Product[]>(this.appSettings.dataSourceURL)
      .pipe(
        map((products) => {
          const categories = products.map((product) =>
            product.category.toLowerCase()
          );
          const uniqueCategories = Array.from(new Set(categories));
          this.categoriesSubject.next(uniqueCategories);
          return products;
        })
      );

    this.productsByCategory$ = combineLatest([
      this.products$,
      this.selectedCategorySubject.asObservable(),
    ]).pipe(
      map(([products, category]) =>
        products.filter(
          (product) => product.category !== category || category == null
        )
      )
    );
  }

  getProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  total$: Observable<number> = this.cartItems$.pipe(
    map((items) =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    )
  );

  counter$: Observable<number> = this.cartItems$.pipe(
    map((items) => items.reduce((acc, item) => acc + 1 * item.quantity, 0))
  );

  selectCategory(category: string): void {
    this.selectedCategorySubject.next(category);
  }

  addItemToCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndex > -1) {
      const updatedItems = [...currentItems];
      updatedItems[itemIndex].quantity++;
      this.cartItemsSubject.next(updatedItems);
    } else {
      const newItem: CartItem = { product, quantity: 1 };
      const updatedItems = [...currentItems, newItem];
      this.cartItemsSubject.next(updatedItems);
    }
  }

  removeItemFromCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndex > -1) {
      const updatedItems = [...currentItems];
      if (updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity--;
      } else {
        updatedItems.splice(itemIndex, 1);
      }
      this.cartItemsSubject.next(updatedItems);
    }
  }
}
