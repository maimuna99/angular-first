import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm: FormGroup<{ firstName: FormControl<string | null>; lastName: FormControl<string | null>; email: FormControl<string | null>; country: FormControl<string | null>; address: FormControl<string | null>; zipCode: FormControl<string | null>; state: FormControl<string | null>; checkbox: FormControl<string | null>; }>;
  isStateRequired(): string | boolean {
    throw new Error('Method not implemented.');
  }
  onCountryChange(arg0: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor() {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      state: new FormControl(''),
      checkbox: new FormControl('', Validators.required),
    });
  }
  
}
