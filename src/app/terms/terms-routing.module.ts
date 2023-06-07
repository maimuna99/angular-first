import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../components/success/success.component';
import { MainstoreComponent } from '../components/mainstore/mainstore.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { TestComponent } from '../test/test.component';
import { ProductGridHandlerComponent } from '../product-grid-handler/product-grid-handler.component';
const routes: Routes = [
  {
    path: '',
    component: MainstoreComponent,
    children: [
      {
        path: '',
        component: ProductGridHandlerComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
    ],
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TermsRoutingModule {}
