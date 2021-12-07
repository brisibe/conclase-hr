import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { EmployeeDialogComponent } from './../employee-dialog/employee-dialog.component';
import { Employee } from './../../core/model/Employee';
import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() Id: string;
  @Input() employeelist: Employee[]


  constructor(private employeeService: EmployeeService, private router: Router) {

  }

  ngOnInit(): void {
  }

  trackById(index: number, employee: Employee) {
    return employee.id
  }

  onDelete(id: any) {
    // we do it on the frontend first to give illusion of speed,
    //  this has its downsides because something can go wrong and data wont be deleted on serverside
    this.employeelist = this.employeelist.filter((emp) => emp.id !== id)
    // or we can directly delete from the server like so
    return this.employeeService.deleteEmployee(id).subscribe(res => console.log(res))
  }

  getProfile(id: string) {
    this.router.navigate([`/employees/${id}`])
  }
}
