import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AuthModule} from "./auth/auth.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import { EmployeeModule } from './employee/employee.module';
import { PaymentModule } from './payment/payment.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    AuthModule,
    SharedModule,
    DashboardModule,
    EmployeeModule,
    PaymentModule,

    BrowserAnimationsModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
