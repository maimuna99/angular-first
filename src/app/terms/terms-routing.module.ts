import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../components/success/success.component';
import { MainstoreComponent } from '../components/mainstore/mainstore.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { TestComponent } from '../test/test.component';
const routes: Routes = [
  {
    path: '',
    component: MainstoreComponent,
    children: [
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
