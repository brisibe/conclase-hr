import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPaystackButtonComponent } from './payment-paystack-button.component';

describe('PaymentPaystackButtonComponent', () => {
  let component: PaymentPaystackButtonComponent;
  let fixture: ComponentFixture<PaymentPaystackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPaystackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPaystackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
