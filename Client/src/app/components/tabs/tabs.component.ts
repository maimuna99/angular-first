import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  filterCategory: any;
  public productList: any;
  searchKey: string = '';
  p: number = 1;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.products$.subscribe((data: any[]) => {
      this.productList = data.map((a: any) => {
        if (a.category === "men's clothing") {
          a.category = 'men';
        }
        return a;
      });
    });

    this.storeService.getProduct().subscribe((res) => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        if (a.category === "men's clothing") {
          a.category = 'men';
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
