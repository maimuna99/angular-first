import { Component, InjectionToken, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../interfaces/cart.interface';
import { StoreService } from 'Client/src/app/services/store.service';
import { Product } from 'Client/src/app/interfaces/product.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent {
  @Input()
  data!: Observable<CartItem[]>;
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private storeService: StoreService) {
    this.cartItems$ = this.storeService.cartItems$;
    this.total$ = this.storeService.total$;
  }

  removeItemFromCart(product: Product): void {
    this.storeService.removeItemFromCart(product);
  }
}
