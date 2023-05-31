import { Component, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  @Input() myData: any;
}
