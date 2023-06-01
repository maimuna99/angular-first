import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  //never expose subjects directly -> use observable
  cartItems$ = this.cartItemsSubject.asObservable();
  producst$ = ajax.getJSON<Product[]>('/assets/data.json');

  total$ = this.cartItems$.pipe(
    map((products) => products.reduce((acc, product) => acc + product.price, 0))
  );
  addItemToCart(product: Product): void {
    this.cartItemsSubject.next([...this.cartItemsSubject.getValue(), product]);
  }

  removeItemFromCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((item) => item.id !== product.id);
    this.cartItemsSubject.next(updatedItems);
  }
}
