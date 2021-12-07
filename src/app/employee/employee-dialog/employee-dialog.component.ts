import { RefreshPageService } from './../../core/services/refresh-page.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './../../core/model/Employee';
import { EmployeeService } from './../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-dialog',
    templateUrl: './employee-dialog.component.html'
})

export class EmployeeDialogComponent implements OnInit {

    isLoading: boolean = false
    formData: FormGroup
    message: string;
    activatedRoute: string;

    updatedEmployeeList: any
    @Output() updatedEmployees = new EventEmitter()



    constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router, public dialog: MatDialog) {
        this.formData = this.fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            gender: [null, Validators.required],
            role: [null, Validators.required],
            salary: [null, Validators.required],
            avatar: ["https://i.pravatar.cc/150"],
        })


    }

    ngOnInit() {

    }

    onAddSubmit() {
        this.isLoading = true;
        this.employeeService.addEmployee(this.formData.value).subscribe((data) => {
            this.isLoading = false
            this.dialog.closeAll()
        })
    }

    updateEmployees() {
        this.updatedEmployees.emit(this.updatedEmployeeList);
    }


}