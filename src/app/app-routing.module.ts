import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfUseComponent } from './terms/terms-of-use/terms-of-use.component';
import { MainstoreComponent } from './components/mainstore/mainstore.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
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
export class AppRoutingModule {}
