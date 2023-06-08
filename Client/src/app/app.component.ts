import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Apiproducts$!: Observable<Product[]>;
  responsePayLoad: any;

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

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const Apiproducts$ = this.httpClient.get<Product[]>(
      'https://fakestoreapi.com/products'
    );
    Apiproducts$.subscribe((responseFromGet) => {
      console.table(responseFromGet);
      this.responsePayLoad = responseFromGet;
    });

    // this.Apiproducts$ = this.httpClient.get<Product[]>(
    //   'https://fakestoreapi.com/products'
    // );
  }
}
