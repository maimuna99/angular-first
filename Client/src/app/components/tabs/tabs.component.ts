import { Component, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { map } from 'rxjs';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  StoreService = inject(StoreService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  public filterCategory: any;
  displayCategory$: Observable<boolean>;

  selectedCategory$ = this.activatedRoute.params.pipe(
    map((params) => params['category'])
  );

  syncCategory = this.activatedRoute.snapshot.paramMap.get('category');

  suggestedCategories$ = this.activatedRoute.data.pipe<string[]>(
    map((data) => data['suggestedCategories'])
  );
  constructor(
    private meta: Meta,
    private title: Title,
    private storeService: StoreService
  ) {
    this.displayCategory$ = this.activatedRoute.data.pipe(
      map((data) => Boolean(data['displayCategory']))
    );
    this.activatedRoute.title.subscribe((title) => {
      const _title = title || 'Default title';
      this.title.setTitle(_title);
      this.meta.updateTag({ name: 'og:title', content: _title });
    });
  }

  ngOnInit(): void {
    this.selectedCategory$.subscribe((category) => {
      this.StoreService.selectCategory(category);
    });
  }
}
