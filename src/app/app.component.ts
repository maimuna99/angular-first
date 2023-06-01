import { Component } from '@angular/core';
import { Product } from '../app/interfaces/product.interface';
import data from '../assets/data.json';
import { StoreService } from './services/store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw1';
  // product: Product[] = data;

  products$: Observable<Product[]>;
  cartItems$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private storeService: StoreService) {
    this.products$ = this.storeService.producst$;
    this.cartItems$ = this.storeService.cartItems$;
    this.total$ = this.storeService.total$;
  }

  addItemToCart(product: Product): void {
    this.storeService.addItemToCart(product);
  }
}
