import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from "ng2-charts"

export const totalProjectsCompletedMockData = [6, 5, 2, 10, 15, 10, 2, 5, 8, 17, 20, 25]


@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {


  //mock data for completed projects per month.
  public totalProjectsCompletedMock: ChartDataSets[] = [
    { data: totalProjectsCompletedMockData , label: 'Projects' },
  ];
  public lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartOptions: ChartOptions & { annotation?: any } = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      xAxes: [{
        ticks: {
          fontSize: 10,
          fontColor: "gray"

        },
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 10,
          fontColor: "gray",
          maxTicksLimit: 5,


        },
        gridLines: {
          borderDash: [10]
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#0473d8',
      backgroundColor: '#d2e9fe',
      pointRadius : 2


    },
  ];
  public lineChartLegend = false;
  public lineChartType: any = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
