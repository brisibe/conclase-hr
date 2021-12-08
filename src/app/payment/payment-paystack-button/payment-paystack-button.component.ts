import { RefreshPageService } from './../../core/services/refresh-page.service';
import { EmployeeService } from './../../employee/employee.service';
import { GenerateReceiptService } from './../generate-receipt.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'payment-paystack-button',
  templateUrl: './payment-paystack-button.component.html',
  styleUrls: ['./payment-paystack-button.component.scss']
})
export class PaymentPaystackButtonComponent implements OnInit {

  title = ''
  reference = '';

  @Input() email: string;
  @Input() amount: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() userId: string;
  employeeListData: any;
  @Output() employeeList: EventEmitter<any> = new EventEmitter();





  constructor(private receipt: GenerateReceiptService, private employee: EmployeeService, private refreshPage: RefreshPageService) { }



  paymentDone(ref: any) {
    if (ref.status === 'success') {

      let currentTime = new Date().toISOString()
      let convertKoboToNaira = this.amount / 100

      this.receipt.generate({
        reference: ref.reference,
        amount: convertKoboToNaira,
        timestamp: currentTime,
        beneficiary: {
          id: this.userId,
          firstName: this.firstName,
          lastName: this.lastName
        }
      }).subscribe(res => {
        console.log("receipt generated")
      })

      this.employee.updateEmployee(this.userId, { paymentStatus: 'Paid' }).subscribe(res => this.refreshPage.refresh())

    }
  }

  paymentCancel() {
    console.log('payment failed');
  }

  onRefreshEmployeeList() {
    this.employeeList.emit(this.employeeListData);
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

}
