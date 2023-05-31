import { Component } from '@angular/core';
import { Product } from '../app/interfaces/product.interface';
import data from '../assets/data.json';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw1';
  product: Product[] = data;

  constructor(private storeService: StoreService){
    
  }
}
