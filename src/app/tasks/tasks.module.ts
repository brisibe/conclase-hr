import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksComponent} from './tasks.component'
import {RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms"


const routes : Routes = [{
  path: '', component: TasksComponent
}]

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class TasksModule { }
