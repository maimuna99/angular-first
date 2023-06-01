import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { CartItem } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();
  products$ = ajax.getJSON<Product[]>('/assets/data.json');

  total$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    )
  );

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
