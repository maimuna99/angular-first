import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../../../../interfaces/product.interface';
import { StoreService } from '../../../../../services/store.service';

@Component({
  selector: 'app-product-grid-handler',
  templateUrl: './product-grid-handler.component.html',
  styleUrls: ['./product-grid-handler.component.css'],
})
export class ProductGridHandlerComponent {
  products$: Observable<Product[]> = of<Product[]>([]);

  constructor(private storeService: StoreService) {
    this.products$ = this.storeService.products$;
  }
}
