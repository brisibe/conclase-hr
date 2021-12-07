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
        boxWidth: 2,
        fontSize: 8,
        fontColor: "#6c757d"
      },
      align: "end"
    }
  };

  //mock employee roles
  public pieChartLabels: Label[] = ['Frontend', 'Backend', 'Business Analyst', 'UI/UX' ];
  public pieChartData: SingleDataSet = [5, 2, 3, 2];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [{backgroundColor: ['#633EBB', '#BC6CCA', '#F13C59','#F2B360' ]}]


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
