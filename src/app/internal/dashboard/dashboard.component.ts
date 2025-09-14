import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule
} from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { MaterialModule } from '../../material.module';
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";

/**
 * Interface para as opções do gráfico de colunas.
 */
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  colors: string[];
};

/**
 * Interface para as opções do gráfico de pizza.
 */
export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, HeaderPageComponent, HeaderProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public chartOptions: Partial<ChartOptions>;
  public pieChartOptions1: Partial<PieChartOptions>;
  public pieChartOptions2: Partial<PieChartOptions>;
  items: any[] = [];


  
  constructor(private dialog: MatDialog) {
    this.chartOptions = this.getChartOptions();
    this.pieChartOptions1 = this.getPieChartOptions1();
    this.pieChartOptions2 = this.getPieChartOptions2();
  }

  ngOnInit() {
    this.items = Array(7).fill(0); 
  }

  /**
   * Retorna as opções configuradas para o gráfico de colunas.
   * @returns {Partial<ChartOptions>} As opções do gráfico de colunas.
   */
  private getChartOptions(): Partial<ChartOptions> {
    return {
      series: [
        {
          name: "Vendas",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "Novos usuários",
          data: [23, 12, 54, 61, 32, 56, 81, 19, 97]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: ["#10B69D", "#1098B6"],
      plotOptions: {
        bar: {
          columnWidth: '45%',
        }
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
      dataLabels: {
        enabled: false
      }
    };
  }

  /**
   * Retorna as opções configuradas para o gráfico de pizza de Produto Faturamento.
   * @returns {Partial<PieChartOptions>} As opções do gráfico de pizza.
   */
  private getPieChartOptions1(): Partial<PieChartOptions> {
    return {
      series: [44, 55, 13, 43, 22, 33, 11, 66],
      chart: {
        type: "pie",
        height: 350
      },
      labels: ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E", "Produto F", "Produto G", "Produto H"],
      colors: ["#57CE95", "#1AAA65", "#1AA0AA", "#5255EB", "#5255EB"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  /**
   * Retorna as opções configuradas para o gráfico de pizza de Categorias Quantidade.
   * @returns {Partial<PieChartOptions>} As opções do gráfico de pizza.
   */
  private getPieChartOptions2(): Partial<PieChartOptions> {
    return {
      series: [23, 12, 54, 61, 32, 56, 81, 19],
      chart: {
        type: "pie",
        height: 350
      },
      labels: ["Categoria A", "Categoria B", "Categoria C", "Categoria D", "Categoria E", "Categoria F", "Categoria G", "Categoria H"],
      colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#00E396", "#FEB019"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}