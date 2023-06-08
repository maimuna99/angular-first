import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfUseComponent } from './terms/terms-of-use/terms-of-use.component';
import { MainstoreComponent } from './components/childrenComponents/mainstore/mainstore.component';
import { CheckoutComponent } from './components/childrenComponents/mainstore/childrenComponents/checkout/checkout.component';
import { SuccessComponent } from './components/childrenComponents/success/success.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
