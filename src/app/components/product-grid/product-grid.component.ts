import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';
import data from './data.json';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  myData: Product[] = data;
}
