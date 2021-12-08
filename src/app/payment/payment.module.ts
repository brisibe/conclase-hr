import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment.routing.module';
import {Angular4PaystackModule} from "angular4-paystack";
import {PAYSTACK_PUBLIC_TEST_KEY} from "../core/configs/configs";
import {PaymentPaystackButtonComponent} from "./payment-paystack-button/payment-paystack-button.component";
import {PaymentTableComponent} from "./payment-table/payment-table.component";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ PaymentComponent,PaymentTableComponent, PaymentPaystackButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PaymentRoutingModule,
    Angular4PaystackModule.forRoot(PAYSTACK_PUBLIC_TEST_KEY),

    MatTableModule,
    MatToolbarModule,
    MatDividerModule


  ]
})
export class PaymentModule { }
