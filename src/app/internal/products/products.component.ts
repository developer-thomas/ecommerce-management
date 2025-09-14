import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { CommonTableComponent } from "../../shared/components/common-table/common-table.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, CommonTableComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  /** Rota base para navegação */
  baseRoute: string = 'interno/produtos';


  /** Colunas da tabela */
  columns: string[] = [
    'Nome',
    'Categoria',
    'Quantidade',
    'Valor',
    'Valor Promocional',
    'Status',
    'Ações'
  ];

  data: any[] = [
    { ID: 1, Nome: 'Produto 1', Categoria: 'Categoria A', Quantidade: 100, Valor: 'R$ 50,00', 'Valor Promocional': 'R$ 45,00', Status: 'Ativo', Ações: '' },
    { ID: 2, Nome: 'Produto 2', Categoria: 'Categoria B', Quantidade: 200, Valor: 'R$ 30,00', 'Valor Promocional': 'R$ 25,00', Status: 'Inativo', Ações: '' },
    { ID: 3, Nome: 'Produto 3', Categoria: 'Categoria C', Quantidade: 150, Valor: 'R$ 70,00', 'Valor Promocional': 'R$ 65,00', Status: 'Ativo', Ações: '' },
    { ID: 4, Nome: 'Produto 4', Categoria: 'Categoria D', Quantidade: 50, Valor: 'R$ 90,00', 'Valor Promocional': 'R$ 85,00', Status: 'Ativo', Ações: '' },
    { ID: 5, Nome: 'Produto 5', Categoria: 'Categoria E', Quantidade: 300, Valor: 'R$ 20,00', 'Valor Promocional': 'R$ 18,00', Status: 'Inativo', Ações: '' }
  ];

  constructor(private router: Router) { }

  goToNewProduct() {
    this.router.navigate([`${this.baseRoute}/novo-produto`]);
  }


}
