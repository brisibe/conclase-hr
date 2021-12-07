import { EmployeeService } from './../../employee/employee.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {
  employees: any
  displayedColumns = ['name', 'role', 'salary', 'status', 'pay'];


  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {

    this.empService.getAllEmployees().subscribe(data => this.employees = data)

  }


  updateEmployeeList(event: any) {
    this.employees = event
  }


}



