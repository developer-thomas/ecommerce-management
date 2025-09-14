import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../shared/components/header-profile/header-profile.component";
import { Router } from '@angular/router';
import { CommonTableComponent } from "../../shared/components/common-table/common-table.component";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, CommonTableComponent],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {
/**
   * Colunas da tabela de acessos.
   */
columns: string[] = [
  'ID',
  'Nome',
  'Email',
  'Acesso',
  'Status',
  'Ações'
];

/**
 * Dados da tabela de acessos.
 */
data: any[] = [];

/**
 * Construtor da classe.
 * @param router - Serviço de roteamento do Angular.
 */
constructor(private router: Router) { }

/**
 * Método de inicialização do componente.
 * Popula a tabela com dados falsos.
 */
ngOnInit(): void {
  this.data = [
    { ID: 1, Nome: 'João Silva', Email: 'joao.silva@example.com', Acesso: 'Admin', Status: 'Ativo', Ações: '' },
    { ID: 2, Nome: 'Maria Oliveira', Email: 'maria.oliveira@example.com', Acesso: 'Usuário', Status: 'Inativo', Ações: '' },
    { ID: 3, Nome: 'Carlos Souza', Email: 'carlos.souza@example.com', Acesso: 'Admin', Status: 'Ativo', Ações: '' },
    { ID: 4, Nome: 'Ana Pereira', Email: 'ana.pereira@example.com', Acesso: 'Usuário', Status: 'Inativo', Ações: '' },
    { ID: 5, Nome: 'Pedro Lima', Email: 'pedro.lima@example.com', Acesso: 'Admin', Status: 'Ativo', Ações: '' }
  ];
}

/**
 * Navega para a página de adição de nova filial.
 */
  goToAddColaborator() {
  this.router.navigate(['interno/acessos/novo-colaborador']);
  }
  
  goToEditPage(userToEdit: any) {
    console.log(userToEdit);
    
    this.router.navigate([`interno/acessos/edit/${userToEdit.ID}`])
  }
}
