import { ConvertStringToDateService } from './../core/services/convert-string-to-date.service';
import { GenerateReceiptService } from './../payment/generate-receipt.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { totalProjectsCompletedMockData } from "./line-chart/line-chart.component"
import * as moment from 'moment'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  payments: any;
  employeeCount: number;
  totalProjectCount: number;
  date: any;

  constructor(private receipts: GenerateReceiptService, private employeeService: EmployeeService, private convertToDate: ConvertStringToDateService) { }

  ngOnInit() {
    this.date = moment().format('dddd, Do MMMM, YYYY');
    this.getReceipts();
    this.getEmployees();
    this.sumTotalProjectPerMonth();

  }

  getReceipts() {
    return this.receipts.getAllReceipts().subscribe(res => this.payments = res)
  }

  getEmployees() {
    // @ts-ignore
    return this.employeeService.getAllEmployees().subscribe(res => this.employeeCount = res.length);
  }

  sumTotalProjectPerMonth() {
    this.totalProjectCount = totalProjectsCompletedMockData.reduce((a, b: number) => a + b)
  }

  convertToStringDate(timestamp: string) {
    return this.convertToDate.convert(timestamp)
  }
}
