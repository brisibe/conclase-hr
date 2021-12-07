import { AuthGuard } from './core/guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/notfount.component'
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "", component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "", redirectTo: '/dashboard', pathMatch: 'full'
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },

      {
        path: 'employees', component: EmployeeComponent
      },
      {
        path: 'employees/:employeeid', component: EmployeeProfileComponent
      }
      ,

      {
        path: 'payments', component: PaymentComponent
      },

      {
        path: '**', component: PageNotFoundComponent
      }

    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
