import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from '../components/success/success.component';
import { MainstoreComponent } from '../components/mainstore/mainstore.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TermsRoutingModule {}
