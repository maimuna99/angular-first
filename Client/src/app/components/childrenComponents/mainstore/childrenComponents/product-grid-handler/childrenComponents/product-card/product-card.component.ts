import { Component, Input } from '@angular/core';
import { Product } from '../../../../../../../interfaces/product.interface';
import { StoreService } from '../../../../../../../services/store.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  data!: Product;

  constructor(private storeService: StoreService) {}

  addToCart(): void {
    this.storeService.addItemToCart(this.data);
  }
}
