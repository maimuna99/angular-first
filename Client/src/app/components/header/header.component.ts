import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProductGridComponent } from '../childrenComponents/mainstore/childrenComponents/product-grid-handler/childrenComponents/product-grid/product-grid.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public searchTerm: string = '';
  public catTerm: string | undefined;

  constructor(private storeService: StoreService) {}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.storeService.search.next(this.searchTerm);
  }

  filterCat(event: any) {
    this.catTerm = (event.target as HTMLInputElement).value;
    console.log(this.catTerm);
    this.storeService.search.next(this.catTerm);
  }
}
