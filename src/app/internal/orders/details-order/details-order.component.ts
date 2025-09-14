import { Component } from '@angular/core';
import { HeaderPageComponent } from '../../../shared/components/header-page/header-page.component';
import { HeaderProfileComponent } from '../../../shared/components/header-profile/header-profile.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-order',
  standalone: true,
  imports: [
    HeaderPageComponent,
    HeaderProfileComponent,
    CommonModule,
    MaterialModule,
  ],
  templateUrl: './details-order.component.html',
  styleUrl: './details-order.component.scss',
})
export class DetailsOrderComponent {
  order: any;
  tabs: string = '';
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  times: string[] = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];
  statusOrder: string[] = [
    'Aguardando Confirmação',
    'Confirmado',
    'Em Separação',
    'Transporte',
    'Avaliação',
    'Entregue',
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.selectedDate = new Date();

    const orders = [
      {
        ID: 1,
        Cod: '12345',
        DataPred: '2023-10-01',
        DataAtu: '2023-10-02',
        ValorTotal: 'R$ 90,00',
        IDCliente: 'C001',
        Status: 'Aguardando Confirmação',
      },
      {
        ID: 2,
        Cod: '12346',
        DataPred: '2023-10-03',
        DataAtu: '2023-10-04',
        ValorTotal: 'R$ 180,00',
        IDCliente: 'C002',
        Status: 'Confirmado',
      },
      {
        ID: 3,
        Cod: '12347',
        DataPred: '2023-10-05',
        DataAtu: '2023-10-06',
        ValorTotal: 'R$ 270,00',
        IDCliente: 'C003',
        Status: 'Em Separação',
      },
      {
        ID: 4,
        Cod: '12348',
        DataPred: '2023-10-07',
        DataAtu: '2023-10-08',
        ValorTotal: 'R$ 360,00',
        IDCliente: 'C004',
        Status: 'Transporte',
      },
      {
        ID: 5,
        Cod: '12349',
        DataPred: '2023-10-09',
        DataAtu: '2023-10-10',
        ValorTotal: 'R$ 450,00',
        IDCliente: 'C005',
        Status: 'Avaliação',
      },
      {
        ID: 6,
        Cod: '12350',
        DataPred: '2023-10-11',
        DataAtu: '2023-10-12',
        ValorTotal: 'R$ 540,00',
        IDCliente: 'C006',
        Status: 'Entregue',
      },
      // Adicione mais pedidos conforme necessário
    ];

    const orderIdParam = this.route.snapshot.paramMap.get('id');
    if (orderIdParam) {
      const orderId = +orderIdParam;
      this.order = orders.find((order) => order.ID === orderId);
    } else {
      console.error('ID do pedido não encontrado na rota');
    }
  }

  onDateChange(date: Date): void {
    console.log(date);

    this.selectedDate = date;
  }

  onTimeSelect(time: string): void {
    this.selectedTime = time;
  }

  getStatusIndex(status: string): number {
    return this.statusOrder.indexOf(status);
  }

  selectTab(tab: string): void {
    this.tabs = tab;
  }

  goToNewBox(): void {
    this.router.navigate(['interno/pedidos/nova-box']);
  }
}
