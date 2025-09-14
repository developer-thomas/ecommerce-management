import { Component, Input, OnChanges, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Componente de Tabela Comum
 * 
 * Este componente exibe uma tabela dinâmica e reutilizável usando Angular Material.
 */
@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnChanges, AfterViewInit {
  /** Colunas da tabela */
  @Input() columns: string[] = [];
  /** Dados da tabela */
  @Input() data: any[] = [];
  /** Rota base para navegação */
  @Input() baseRoute: string = '';
  @Input() showSearch: boolean = true;

  @Output() rowToEdit = new EventEmitter<any>();

  /** Fonte de dados da tabela */
  dataSource!: MatTableDataSource<any>;
  /** Valor do filtro de busca */
  filterValue: string = '';
  /** Coluna selecionada para filtrar */
  selectedColumn: string = '';

  /** Configurações de paginação */
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;


  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) { }

  /**
   * Método chamado quando as propriedades de entrada (inputs) mudam.
   * Atualiza a fonte de dados da tabela.
   */
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.data);
    this.updatePagination();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /**
   * Aplica o filtro de busca na tabela.
   * 
   * @param event Evento de entrada do usuário no campo de busca.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
    this.updatePagination();
  }

  /**
   * Aplica o filtro de coluna na tabela.
   * 
   * @param event Evento de seleção de coluna.
   */
  applyColumnFilter(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedColumn = selectElement.value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      if (this.selectedColumn) {
        return data[this.selectedColumn].toLowerCase().includes(filter);
      } else {
        return Object.values(data).some(value =>
          value?.toString().toLowerCase().includes(filter)
        );
      }
    };
    this.dataSource.filter = this.filterValue;
    this.updatePagination();
  }

  /**
   * Navega para a rota de detalhes do item.
   * 
   * @param id ID do item para navegação.
   */
  navigateToDetails(id: number) {
    if (this.baseRoute) {
      this.router.navigate([`${this.baseRoute}/${id}`]);
    }
  }

  /**
   * Edita o item.
   * 
   * @param element Elemento a ser editado.
   */
  edit(element: any) {
    // Lógica de edição
    this.rowToEdit.emit(element);
    
  }

  /**
   * Exclui o item.
   * 
   * @param element Elemento a ser excluído.
   */
  delete(element: any) {
    // Lógica de exclusão
    console.log('Excluir', element);
  }

  /**
   * Atualiza a paginação da tabela.
   */
  updatePagination() {
    this.totalPages = Math.ceil(this.dataSource.filteredData.length / this.itemsPerPage);
  }

  /**
   * Muda para a página anterior.
   */
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  /**
   * Muda para a próxima página.
   */
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  /**
   * Muda para uma página específica.
   * 
   * @param page Página para a qual mudar.
   */
  goToPage(page: number) {
    this.currentPage = page;
  }

  /**
   * Obtém os dados da página atual.
   */
  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.dataSource.filteredData.slice(startIndex, endIndex);
  }
}