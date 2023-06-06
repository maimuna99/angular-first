import { Component } from '@angular/core';
import { Product } from '../app/interfaces/product.interface';
import { StoreService } from './services/store.service';
import { Observable, of } from 'rxjs';
import { CartItem } from './interfaces/cart.interface';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw1';

  // products$: Observable<Product[]>;
  // products$: Observable<Product[]> = of<Product[]>([]);
  // cartItems$: Observable<CartItem[]>;
  // total$: Observable<number>;

  // constructor(private storeService: StoreService) {
  //   this.products$ = this.storeService.products$;
  //   this.cartItems$ = this.storeService.cartItems$;
  //   this.total$ = this.storeService.total$;
  // }

  // addItemToCart(product: Product): void {
  //   this.storeService.addItemToCart(product);
  // }
}
