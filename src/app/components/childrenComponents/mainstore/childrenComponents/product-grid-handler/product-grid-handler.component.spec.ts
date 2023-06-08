import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridHandlerComponent } from './product-grid-handler.component';

describe('ProductGridHandlerComponent', () => {
  let component: ProductGridHandlerComponent;
  let fixture: ComponentFixture<ProductGridHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGridHandlerComponent]
    });
    fixture = TestBed.createComponent(ProductGridHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
