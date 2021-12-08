import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDialogComponent} from "./employee-dialog/employee-dialog.component";
import {EmployeeProfileComponent} from "./employee-profile/employee-profile.component";
import {EmployeeComponent} from "./employee.component";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {EmployeeRoutingModule} from "./employee.routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";




@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, EmployeeProfileComponent, EmployeeDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

   MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule

  ]
})
export class EmployeeModule { }
