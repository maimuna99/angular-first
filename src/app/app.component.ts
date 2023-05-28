import { Component } from '@angular/core';
import { Product } from '../app/interfaces/product.interface';
import data from '../app/components/product-grid/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw1';
  product: Product[] = data;
}
