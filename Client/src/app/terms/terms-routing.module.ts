import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../components/childrenComponents/success/success.component';
import { MainstoreComponent } from '../components/childrenComponents/mainstore/mainstore.component';
import { CheckoutComponent } from '../components/childrenComponents/mainstore/childrenComponents/checkout/checkout.component';
import { ProductGridHandlerComponent } from '../components/childrenComponents/mainstore/childrenComponents/product-grid-handler/product-grid-handler.component';
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
