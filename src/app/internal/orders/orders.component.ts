import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { CommonTableComponent } from "../../shared/components/common-table/common-table.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, CommonTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  /** Rota base para navegação */
  baseRoute: string = 'interno/pedidos';

  columns: string[] = [
    'Data Pred.',
    'Data Atual',
    'Cod.',
    'ID Cliente',
    'Subtotal',
    'Desconto',
    'Valor Total',
    'Status',
    'Ações'
  ];

  /** Dados da tabela */
  data: any[] = [
    { ID: 1, 'Data Pred.': '2023-10-01', 'Data Atual': '2023-10-02', 'Cod.': '12345', 'ID Cliente': 'C001', Subtotal: 'R$ 100,00', Desconto: 'R$ 10,00', 'Valor Total': 'R$ 90,00', Status: 'Aguardando Confirmação' },
    { ID: 2, 'Data Pred.': '2023-10-03', 'Data Atual': '2023-10-04', 'Cod.': '12346', 'ID Cliente': 'C002', Subtotal: 'R$ 200,00', Desconto: 'R$ 20,00', 'Valor Total': 'R$ 180,00', Status: 'Confirmado' },
    { ID: 3, 'Data Pred.': '2023-10-05', 'Data Atual': '2023-10-06', 'Cod.': '12347', 'ID Cliente': 'C003', Subtotal: 'R$ 300,00', Desconto: 'R$ 30,00', 'Valor Total': 'R$ 270,00', Status: 'Em Separação' },
    { ID: 4, 'Data Pred.': '2023-10-07', 'Data Atual': '2023-10-08', 'Cod.': '12348', 'ID Cliente': 'C004', Subtotal: 'R$ 400,00', Desconto: 'R$ 40,00', 'Valor Total': 'R$ 360,00', Status: 'Transporte' },
    { ID: 5, 'Data Pred.': '2023-10-09', 'Data Atual': '2023-10-10', 'Cod.': '12349', 'ID Cliente': 'C005', Subtotal: 'R$ 500,00', Desconto: 'R$ 50,00', 'Valor Total': 'R$ 450,00', Status: 'Avaliação' },
    { ID: 6, 'Data Pred.': '2023-10-11', 'Data Atual': '2023-10-12', 'Cod.': '12350', 'ID Cliente': 'C006', Subtotal: 'R$ 600,00', Desconto: 'R$ 60,00', 'Valor Total': 'R$ 540,00', Status: 'Entregue' },
  ];

  ngOnInit(): void {
    // Inicialização adicional, se necessário
  }
}
