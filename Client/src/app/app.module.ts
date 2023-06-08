import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/childrenComponents/mainstore/childrenComponents/product-grid-handler/childrenComponents/product-card/product-card.component';
import { ProductGridComponent } from './components/childrenComponents/mainstore/childrenComponents/product-grid-handler/childrenComponents/product-grid/product-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './components/tabs/tabs.component';
import { TermsModule } from './terms/terms.module';
import { RouterModule } from '@angular/router';
import { MainstoreComponent } from './components/childrenComponents/mainstore/mainstore.component';
import { SuccessComponent } from './components/childrenComponents/success/success.component';
import { CheckoutComponent } from './components/childrenComponents/mainstore/childrenComponents/checkout/checkout.component';
import { TestComponent } from './test/test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_SETTINGS } from './settings/app.settings';
import { appSettings } from './settings';
import { ProductGridHandlerComponent } from './components/childrenComponents/mainstore/childrenComponents/product-grid-handler/product-grid-handler.component';
import { Observable, of } from 'rxjs';
import { Product } from './interfaces/product.interface';
// import { appInitializerProviders } from './app-initializer';

function initializeAppFactory(
  httpClient: HttpClient
): () => Observable<Product[]> {
  const products$ = httpClient.get<Product[]>(
    'https://fakestoreapi.com/products'
  );
  return () => products$;
}

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductGridComponent,
    ProductCartComponent,
    FilterPipe,
    HeaderComponent,
    TabsComponent,
    MainstoreComponent,
    SuccessComponent,
    CheckoutComponent,
    TestComponent,
    ProductGridHandlerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule,
    RouterModule,
    TermsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_SETTINGS,
      useValue: appSettings,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
