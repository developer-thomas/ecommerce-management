import { Component, inject } from '@angular/core';
import { CommonTableComponent } from '../../../shared/components/common-table/common-table.component';
import { HeaderPageComponent } from '../../../shared/components/header-page/header-page.component';
import { HeaderProfileComponent } from '../../../shared/components/header-profile/header-profile.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonTableComponent, HeaderPageComponent, HeaderProfileComponent, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  baseRoute: string = 'interno/';
  router: Router = inject(Router);
  dialog: MatDialog = inject(MatDialog);

  columns: string[] = [
    'ID',
    'Nome',
    'Email',
    'Acesso',
    'Status'
  ];

  data: any[] = [
    { ID: 1, 'Nome do usuário': 'João Silva', Email: 'joao.silva@example.com', Sexo: 'Masculino', UF: 'SP', Cidade: 'São Paulo' },
    { ID: 2, 'Nome do usuário': 'Maria Oliveira', Email: 'maria.oliveira@example.com', Sexo: 'Feminino', UF: 'RJ', Cidade: 'Rio de Janeiro' },
    { ID: 3, 'Nome do usuário': 'Carlos Souza', Email: 'carlos.souza@example.com', Sexo: 'Masculino', UF: 'MG', Cidade: 'Belo Horizonte' },
    { ID: 4, 'Nome do usuário': 'Ana Pereira', Email: 'ana.pereira@example.com', Sexo: 'Feminino', UF: 'BA', Cidade: 'Salvador' },
    { ID: 5, 'Nome do usuário': 'Pedro Lima', Email: 'pedro.lima@example.com', Sexo: 'Masculino', UF: 'RS', Cidade: 'Porto Alegre' }
  ];

  goToNewCoupon() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px',
      panelClass: "custom-dialog-container",      
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Cupom adicionado', result);
        
      }
    })
  }
}
