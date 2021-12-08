import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './../core/model/Employee';
import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: any

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      data => this.employees = data
    )
  }

  openDialog() {
    let dialogRef = this.dialog.open(EmployeeDialogComponent, { disableClose: true });

    // updates the employee list after dialog has been submitted
    dialogRef.afterClosed().subscribe(res => this.employeeService.getAllEmployees().subscribe((vals) => {
      this.employees = vals
      console.log(vals)
    })
    )

  }


}
