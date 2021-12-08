import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {LineChartComponent} from "./line-chart/line-chart.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [DashboardComponent, PieChartComponent, LineChartComponent],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class DashboardModule { }
