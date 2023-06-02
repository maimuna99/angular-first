import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/product.interface';
import { StoreService } from '../../services/store.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  @Input() gridproducts$: Observable<Product[]> = of<Product[]>([]);

  p: number = 1;
  searchKey: string = '';

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
}
