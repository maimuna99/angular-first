import { Component, Input } from '@angular/core';
import { Product } from '../../../../../../../interfaces/product.interface';
import { StoreService } from '../../../../../../../services/store.service';
import { Observable, of } from 'rxjs';
import { Inject } from '@angular/core';
import { APP_SETTINGS } from 'src/app/settings/app.settings';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  @Input() gridproducts$: Observable<Product[]> = of<Product[]>([]);
  itemsPerPage: number = 3;
  p: number = 1;
  searchKey: string = '';

  constructor(
    private storeService: StoreService,
    @Inject(APP_SETTINGS) private appSettings: any
  ) {
    this.itemsPerPage = this.appSettings.pageSize;
  }

  ngOnInit(): void {
    this.storeService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
}
