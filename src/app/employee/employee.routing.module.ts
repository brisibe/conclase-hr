import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { EmployeeProfileComponent } from "./employee-profile/employee-profile.component";
import { EmployeeComponent } from "./employee.component";


const routes : Routes = [
  {
    path: "",
    component: EmployeeComponent
  },
  {
    path: ":employeeId",
    component: EmployeeProfileComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
