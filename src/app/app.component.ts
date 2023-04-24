import { Component } from '@angular/core';
import { MapChart, Chart } from 'angular-highcharts';
// import highmaps from 'highcharts/modules/map.src';
// import * as Highcharts from 'highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myTooltip = undefined;
  chart: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 0,
        events: {
          load: function() {
            // this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
          }
        }
      },
      title: {
        text: 'Sales per employee per weekday'
      },
      xAxis: {
        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
      },
      yAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        title: null
      },
      colorAxis: {
        stops: [
          [0, '#3060cf'],
          [0.599999999999, '#3060cf'],
          [0.6, '#c4463a'],
          [1, '#c4463a']
        ]
      },
      tooltip: {
        formatter: function () {
          console.log(this.point);
          return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
            this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        },
        enabled: true
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        heatmap: {
          pointPadding: 5
        },
        series: {
          stickyTracking: false
        }
      },
      series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 10, { 'id': 'abc' }], [0, 1, 19, { 'id': 'abc' }], [0, 2, 8, { 'id': 'abc' }], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]]
      }]
    });

    this.chart = chart;
  }
}
