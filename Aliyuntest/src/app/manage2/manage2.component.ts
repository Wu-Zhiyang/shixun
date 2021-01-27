import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage2',
  templateUrl: './manage2.component.html',
  styleUrls: ['./manage2.component.css']
})
export class Manage2Component implements OnInit {
  updateOption = {};
  chartOption = {};
  baseUrl = 'http://192.168.43.72:3000/';

  constructor(private httpClient: HttpClient) {

  }

  public xAxis = [];
  public temps = [];
  public humds = [];

  ngOnInit() {
    this.chartOption = {
      title: {
        text: '温度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['温度', '湿度']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: []
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '温度',
          type: 'line',
          stack: '度',
          areaStyle: { normal: {} },
          data: []
        },
        {
          name: '湿度',
          type: 'line',
          stack: '%',
          areaStyle: { normale: {} },
          data: []
        },
      ]
    };
    timer(2000, 2000).subscribe(
      () => {
        this.httpClient.get(this.baseUrl + 'env/001/10', {}).subscribe(
          (value: any) => {
            console.log(value.data);
            if (value && value.data && value.data.length) {
              let i = value.data.length - 1;
              for (let item of value.data) {
                const d = new Date(Number(item.time));
                //console.log(d)
                this.xAxis[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxis[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxis[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                this.temps[i] = (item.temp);
                this.humds[i] = (item.humd);
                i--;
              }
              this.updateOption = {
                xAxis: [
                  {
                    data: this.xAxis
                  }
                ],
                series: [{
                  data: this.temps
                }, {
                  data: this.humds
                }]
              }
            }
          }
        )
      }
    );
  }


}
