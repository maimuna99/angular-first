import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Product Card with multiple sections
 */
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],

  // standalone: true,
  // imports: [MatCardModule, MatButtonModule],
})
export class ProductCardComponent {
  @Input() data: any;
}
