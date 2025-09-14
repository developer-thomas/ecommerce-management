import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { CardDetailsComponent } from "../../../shared/components/card-details/card-details.component";
import { CommonTableComponent } from "../../../shared/components/common-table/common-table.component";
import { HeaderProfileComponent } from "../../../shared/components/header-profile/header-profile.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [CommonModule, HeaderPageComponent, CardDetailsComponent, CommonTableComponent, HeaderProfileComponent],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss'
})
export class DetailsUserComponent implements OnInit {
  data: any;
  tabSelected: string = 'financeiro';
  pedidosColumns!: string[];
  pedidosData!: any[];
  financeColumns!: string[];
  financeData!: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    const users = [
      { ID: 1, 'Nome do usuário': 'João Silva', Idade: 30, Status: 'Ativo', Email: 'joao.silva@example.com', Telefone: '123456789', Sexo: 'Masculino', UF: 'SP', Cidade: 'São Paulo' },
      { ID: 2, 'Nome do usuário': 'Maria Oliveira', Idade: 25, Status: 'Ativo', Email: 'maria.oliveira@example.com', Telefone: '987654321', Sexo: 'Feminino', UF: 'RJ', Cidade: 'Rio de Janeiro' },
      { ID: 3, 'Nome do usuário': 'Carlos Souza', Idade: 35, Status: 'Inativo', Email: 'carlos.souza@example.com', Telefone: '456789123', Sexo: 'Masculino', UF: 'MG', Cidade: 'Belo Horizonte' },
      { ID: 4, 'Nome do usuário': 'Ana Pereira', Idade: 28, Status: 'Ativo', Email: 'ana.pereira@example.com', Telefone: '789123456', Sexo: 'Feminino', UF: 'BA', Cidade: 'Salvador' },
      { ID: 5, 'Nome do usuário': 'Pedro Lima', Idade: 40, Status: 'Inativo', Email: 'pedro.lima@example.com', Telefone: '321654987', Sexo: 'Masculino', UF: 'RS', Cidade: 'Porto Alegre' }
    ];

    const userIdParam = this.route.snapshot.paramMap.get('id');
    if (userIdParam) {
      const userId = +userIdParam;
      this.data = users.find(user => user.ID === userId);
    } else {
      console.error('ID do usuário não encontrado na rota');
    }

    // Colunas e dados de teste para a aba Financeiro
    this.financeColumns = ['Data', 'Mês', 'Pagamento', 'Valor', 'Status', 'Ações'];
    this.financeData = [
      { 'Data': '01/01/2023', 'Mês': 'Janeiro', 'Pagamento': 'Cartão de Crédito', 'Valor': 'R$ 150,00', 'Status': 'Pago', 'Ações': '' },
      { 'Data': '15/02/2023', 'Mês': 'Fevereiro', 'Pagamento': 'Boleto', 'Valor': 'R$ 200,00', 'Status': 'Pendente', 'Ações': '' },
      { 'Data': '10/03/2023', 'Mês': 'Março', 'Pagamento': 'Pix', 'Valor': 'R$ 300,00', 'Status': 'Pago', 'Ações': '' },
      { 'Data': '20/04/2023', 'Mês': 'Abril', 'Pagamento': 'Cartão de Débito', 'Valor': 'R$ 250,00', 'Status': 'Pendente', 'Ações': '' }
    ];

    // Colunas e dados de teste para a aba Pedidos
    this.pedidosColumns = ['Data pred.', 'Data Atu.', 'Cod.', 'Valor', 'Status', 'Ações'];
    this.pedidosData = [
      { 'Data pred.': '01/01/2023', 'Data Atu.': '02/01/2023', 'Cod.': '12345', 'Valor': 'R$ 150,00', 'Status': 'Entregue', 'Ações': '' },
      { 'Data pred.': '15/02/2023', 'Data Atu.': '16/02/2023', 'Cod.': '67890', 'Valor': 'R$ 200,00', 'Status': 'Pendente', 'Ações': '' },
      { 'Data pred.': '10/03/2023', 'Data Atu.': '11/03/2023', 'Cod.': '11223', 'Valor': 'R$ 300,00', 'Status': 'Entregue', 'Ações': '' },
      { 'Data pred.': '20/04/2023', 'Data Atu.': '21/04/2023', 'Cod.': '44556', 'Valor': 'R$ 250,00', 'Status': 'Pendente', 'Ações': '' }
    ];
  }
}
