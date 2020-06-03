import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-data-points',
  templateUrl: './data-points.component.html',
  styleUrls: ['./data-points.component.css']
})
export class DataPointsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Personas'
      },
      subtitle: {
          text: 'Source: COE'
      },
      xAxis: {
          categories: ['5', '10', '15', '20', '30', '45', '60'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Dias'
          },
          labels: {
              formatter: function () {
                  return this.value /100;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Infectados',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Sospechosos',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'En Cuarentena',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'Recuperados',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }
    ]
  }
  }

}
