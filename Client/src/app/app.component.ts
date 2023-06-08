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
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const Apiproducts$ = this.httpClient.get<Product[]>(
      'https://fakestoreapi.com/products'
    );
    Apiproducts$.subscribe((responseFromGet) => {
      this.responsePayLoad = responseFromGet;
    });
  }
}
