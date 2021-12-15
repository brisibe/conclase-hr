import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {


  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        boxWidth: 4,
        fontSize: 10,
        // padding: 2,
        fontColor: "#6c757d"
      },
      align: "end",

    },

  };

  //mock employee roles
  public pieChartLabels: Label[] = ['Frontend', 'Backend', 'Business Analyst', 'Human Resource' ];
  public pieChartData: SingleDataSet = [5, 2, 3, 2];
  public pieChartType: ChartType = 'pie';
  // public pieChartLegend = false;
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [{backgroundColor: ['#24C221', '#C2218B', '#272B8F','#C28221' ]}]


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
