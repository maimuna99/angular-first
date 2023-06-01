import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../interfaces/cart.interface';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/interfaces/product.interface';

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
