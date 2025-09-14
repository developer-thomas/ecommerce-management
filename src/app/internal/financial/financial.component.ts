import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { CommonTableComponent } from "../../shared/components/common-table/common-table.component";

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, CommonTableComponent],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss'
})
export class FinancialComponent {
  columns: string[] = ['Data', 'Pedido', 'Usuário', 'Pagamento', 'Valor', 'Status', 'Ações'];
  data: any[] = [
    { Data: '01/01/2023', Pedido: '12345', Usuário: 'João Silva', Pagamento: 'Cartão de Crédito', Valor: 'R$ 150,00', Status: 'Pago', Ações: '' },
    { Data: '15/02/2023', Pedido: '67890', Usuário: 'Maria Oliveira', Pagamento: 'Boleto', Valor: 'R$ 200,00', Status: 'Pendente', Ações: '' },
    { Data: '10/03/2023', Pedido: '11223', Usuário: 'Carlos Souza', Pagamento: 'Pix', Valor: 'R$ 300,00', Status: 'Pago', Ações: '' },
    { Data: '20/04/2023', Pedido: '44556', Usuário: 'Ana Pereira', Pagamento: 'Cartão de Débito', Valor: 'R$ 250,00', Status: 'Pendente', Ações: '' }
  ];
  baseRoute: string = 'financeiro';

}
