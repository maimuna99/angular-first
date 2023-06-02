import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public searchTerm: string = '';
  

  constructor(private storeService: StoreService){}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.storeService.search.next(this.searchTerm);
  }
}
