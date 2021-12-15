import { AuthGuard } from './core/guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/notfount.component'
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import {getMatScrollStrategyAlreadyAttachedError} from "@angular/cdk/overlay/scroll/scroll-strategy";

const routes: Routes = [
  {
    path: "login", component: LoginComponent
    // loadChildren : () => import('./auth/auth.module').then((m)=> m.AuthModule)
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
        path: 'employees', loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'payments', loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule)
      },
      {
        path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule)
      },
      {
        path: 'clients', loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule)
      },

      {
        path: '**', component: PageNotFoundComponent
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
