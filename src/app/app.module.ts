import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Angular4PaystackModule } from 'angular4-paystack';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from "@angular/material/expansion"
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PAYSTACK_PUBLIC_TEST_KEY } from './core/configs/configs';
import { EmployeeDialogComponent } from './employee/employee-dialog/employee-dialog.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarItemsComponent } from './shared/layout/sidebar-items/sidebar-items.component';
import { LoginComponent } from './auth/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from "@angular/material/table"

import { ChartsModule } from "ng2-charts"

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PaymentTableComponent } from './payment/payment-table/payment-table.component';
import { PaymentPaystackButtonComponent } from './payment/payment-paystack-button/payment-paystack-button.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { AvatarComponent } from './shared/layout/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    SidebarItemsComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeProfileComponent,
    PaymentComponent,
    EmployeeListComponent,
    EmployeeDialogComponent,
    PaymentTableComponent,
    PaymentPaystackButtonComponent,
    LineChartComponent,
    PieChartComponent,
    AvatarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Angular4PaystackModule.forRoot(PAYSTACK_PUBLIC_TEST_KEY),
    ChartsModule,

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule


    //make table work and create profile page and make delete button work



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
