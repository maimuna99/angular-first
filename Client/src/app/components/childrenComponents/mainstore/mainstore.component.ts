import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { StoreService } from '../../../services/store.service';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../../interfaces/cart.interface';

@Component({
  selector: 'app-mainstore',
  templateUrl: './mainstore.component.html',
  styleUrls: ['./mainstore.component.css'],
})
export class MainstoreComponent {
  //products$: Observable<Product[]>;
  // products$: Observable<Product[]> = of<Product[]>([]);
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;
  counter$: Observable<number>;

  constructor(private storeService: StoreService) {
    // this.products$ = this.storeService.products$;
    this.cartItems$ = this.storeService.cartItems$;
    this.total$ = this.storeService.total$;
    this.counter$ = this.storeService.counter$;
  }

  addItemToCart(product: Product): void {
    this.storeService.addItemToCart(product);
  }
}
