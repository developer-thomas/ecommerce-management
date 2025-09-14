import { Component } from '@angular/core';
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { CommonTableComponent } from "../../shared/components/common-table/common-table.component";
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";

/**
 * Componente de Usuários
 * 
 * Este componente exibe uma lista de usuários em uma tabela dinâmica e reutilizável.
 */
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HeaderProfileComponent, CommonTableComponent, HeaderPageComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  /** Rota base para navegação */
  baseRoute: string = 'interno/usuarios';

  /** Colunas da tabela */
  columns: string[] = [
    'ID',
    'Nome do usuário',
    'Email',
    'Sexo',
    'UF',
    'Cidade',
    'Ações'
  ];

  /** Dados da tabela */
  data: any[] = [
    { ID: 1, 'Nome do usuário': 'João Silva', Email: 'joao.silva@example.com', Sexo: 'Masculino', UF: 'SP', Cidade: 'São Paulo' },
    { ID: 2, 'Nome do usuário': 'Maria Oliveira', Email: 'maria.oliveira@example.com', Sexo: 'Feminino', UF: 'RJ', Cidade: 'Rio de Janeiro' },
    { ID: 3, 'Nome do usuário': 'Carlos Souza', Email: 'carlos.souza@example.com', Sexo: 'Masculino', UF: 'MG', Cidade: 'Belo Horizonte' },
    { ID: 4, 'Nome do usuário': 'Ana Pereira', Email: 'ana.pereira@example.com', Sexo: 'Feminino', UF: 'BA', Cidade: 'Salvador' },
    { ID: 5, 'Nome do usuário': 'Pedro Lima', Email: 'pedro.lima@example.com', Sexo: 'Masculino', UF: 'RS', Cidade: 'Porto Alegre' }
  ];

}