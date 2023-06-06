import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstoreComponent } from './mainstore.component';

describe('MainstoreComponent', () => {
  let component: MainstoreComponent;
  let fixture: ComponentFixture<MainstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainstoreComponent]
    });
    fixture = TestBed.createComponent(MainstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
