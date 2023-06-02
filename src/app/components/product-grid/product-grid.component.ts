import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  @Input() gridproducts$: Observable<Product[]> | null = null;

  searchKey: string = '';
}
