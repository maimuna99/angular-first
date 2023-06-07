import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
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
import { MainstoreComponent } from './components/mainstore/mainstore.component';
import { SuccessComponent } from './components/success/success.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { TestComponent } from './test/test.component';
import { APP_SETTINGS } from './settings/app.settings';
import { appSettings } from './settings';
import { ProductGridHandlerComponent } from './product-grid-handler/product-grid-handler.component';

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
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_SETTINGS,
      useValue: appSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
