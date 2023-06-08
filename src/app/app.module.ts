import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ProductCardComponent } from '../app/components/childrenComponents/mainstore/childrenComponents/product-grid-handler/childrenComponents/product-card/product-card.component';
import { ProductGridComponent } from '../app/components/childrenComponents/mainstore/childrenComponents/product-grid-handler/childrenComponents/product-grid/product-grid.component';
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
import { MainstoreComponent } from '../app/components/childrenComponents/mainstore/mainstore.component';
import { SuccessComponent } from '../app/components/childrenComponents/success/success.component';
import { CheckoutComponent } from '../app/components/childrenComponents/mainstore/childrenComponents/checkout/checkout.component';
import { TestComponent } from './test/test.component';
import { APP_SETTINGS } from './settings/app.settings';
import { appSettings } from './settings';
import { ProductGridHandlerComponent } from '../app/components/childrenComponents/mainstore/childrenComponents/product-grid-handler/product-grid-handler.component';

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
