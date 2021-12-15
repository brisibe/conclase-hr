import { ConvertStringToDateService } from './../../core/services/convert-string-to-date.service';
import { ImageUploadService } from './../../core/services/image-upload.service';
import { GenerateReceiptService } from './../../payment/generate-receipt.service';
import { Employee } from './../../core/model/Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import * as Moment from "moment"

@Component({
  selector: 'employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  id: string;
  employee: any;
  empReceipts: any[];
  timeStamp: string;

  constructor(private empService: EmployeeService, private route: ActivatedRoute, private receipts: GenerateReceiptService, private convertToDate: ConvertStringToDateService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId']

    this.empService.getEmployee(this.id).subscribe(res => {
      this.employee = res


      this.receipts.getAllReceipts().subscribe((res: any) => {
        this.empReceipts = res.filter((data: any) => data.value.beneficiary?.id === this.id)
      })
    })
  }

  uploadImage(e: any) {

    // if (e.target.files) {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(e.target.files[0]);

    //   reader.onload = (event: any) => {
    //     this.avatarUrl = event.target.result
    //     console.log(this.avatarUrl)
    //   }

    // }
  }

  convertTimeStamp(timestamp: string) {
    return this.convertToDate.convert(timestamp)
  }

}
