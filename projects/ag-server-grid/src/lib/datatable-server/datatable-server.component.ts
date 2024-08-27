import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ColDef, ConfigButton } from '../models/colDef.model';
import { ConfigPagination } from '../models/configPagination.model';
import { PaginationServerComponent } from './components/pagination-server/pagination-server.component';
import { PagerService } from './components/pagination-server/service/pager.service';
import { DateOrStringPipe } from './pipes/pipe.dateFormat';
import { SearchFilterPipe } from './pipes/pipe.searchFilter';
import { ExcelService } from './service/export_excel.service';

@Component({
  selector: 'datatable-server',
  templateUrl: './datatable-server.component.html',
  styleUrls: ['./datatable-server.component.css'],
  standalone: true,
  imports: [CommonModule, PaginationServerComponent, DateOrStringPipe, SearchFilterPipe],
  providers: [PagerService, DatePipe, ExcelService]
})
export class DatatableServerComponent {
  public sortOrder = 1;
  public sortedColumn!: string;
  public sortProperty!: string;
  public currentPage:number = 1;
  @Input() public pageSize:number = 5;
  @Input() public pagination: boolean = false;
  @Input() public pager: any = {};
  @Input() public rowData: any = [];
  @Input() public columnDefs!: ColDef[];
  @Input() public editable!: boolean;
  @Input() public deletable!: boolean;
  @Input() public searchText!: string;
  @Input() public paginationServer: boolean = false;
  @Input() public exportCsv: boolean = false;
  @Input() public configPag!: ConfigPagination;
  @Input() public configBtnEdit?: ConfigButton;
  @Input() public configBtnDelete?: ConfigButton;
  @Input() public configBtnCsv?: ConfigButton;
  @Output() public next: EventEmitter<number> = new EventEmitter();
  @Output() public prev: EventEmitter<number> = new EventEmitter();
  @Output() public setPage: EventEmitter<any> = new EventEmitter();
  @Output() public paginachange: EventEmitter<any> = new EventEmitter();
  @Output() public getRowSelect: EventEmitter<Object> = new EventEmitter();
  @Output() public getListSelect: EventEmitter<Object> = new EventEmitter();
  @Output() public getRowEdit: EventEmitter<Object> = new EventEmitter();
  @Output() public getRowBtn: EventEmitter<Object> = new EventEmitter();
  @Output() public getListExcluir: EventEmitter<Object> = new EventEmitter();
  @Output() public getRowExcluir: EventEmitter<Object> = new EventEmitter();

  public rowEdit!: any;
  public indicesSelecionados: Set<number> = new Set<number>();
  public ultimaLinhaSelecionadaIndex: number | null = null;
  public itensSelecionados: any[] = [];

  constructor(private excelService: ExcelService) { }

  ngOnInit() {
    this.initializeColumns();
    this.initializeSorting();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeColumns();
    if (changes['columnDefs'] || changes['rowData']) {
      if (this.columnDefs && this.rowData) {
        this.initializeSorting();
      }
    }
  }

  initializeColumns() {
    this.columnDefs.forEach((obj, index) => {
      if (obj.headerValueGetter) {
        this.columnDefs[index].changeName = obj.headerValueGetter(obj);
      }
    });
  }

  initializeSorting() {
    const defaultSortColumn = this.columnDefs.find(col => col.sortBy);
    if (defaultSortColumn) {
      this.sortBy(defaultSortColumn.field);
    }
  }

  listagem(pageNo: number): void {
    this.paginachange.emit(pageNo);
  }

  nextLevel(currentPageNumber: number): void {
    this.clearMarkRowsTable();
    this.next.emit(currentPageNumber);
  }

  prevLevel(currentPageNumber: number): void {
    this.clearMarkRowsTable();
    this.prev.emit(currentPageNumber);
  }

  setPagination(page: Object): void {
    this.setPage.emit(page);
  }

  clearMarkRowsTable() {
    this.ultimaLinhaSelecionadaIndex = 0;
    this.itensSelecionados = [];
    this.indicesSelecionados.clear();
  }

  sortBy(property: string): void {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;
    this.rowData = [...this.rowData.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return -1 * this.sortOrder;
      }
      if (a[property] > b[property]) {
        return 1 * this.sortOrder;
      }
      return 0;
    })];
  }

  sortIcon(property: string): string {
    if (property === this.sortProperty) {
      return this.sortOrder === 1 ? '⭡' : '⭣';
    }
    return '';
  }

  async exportAsXLSX() {
    let tableCat = document.getElementById('catTable') as HTMLTableElement;

    this.excelService.exportAsExcelFile(
      // Recebe as tabelas:
      [tableCat],
      // Recebe os nomes do "SHEET" para cada aba:
      ['Tabela'],
      // Titulo de cada tabela:
      [`Tabela`],
      //Nome do arquivo:
      `table.xls`
    );
  }

  isSelecionado(index: number): boolean {
    return this.indicesSelecionados.has(index);
  }

  selecionarLinha(index: number, event: MouseEvent): void {
    if (event.ctrlKey && event.shiftKey) {
      this.marcarAteLinhaAtual(index);
    } else if (event.ctrlKey) {
      if (this.indicesSelecionados.has(index)) {
        this.indicesSelecionados.delete(index);
      } else {
        this.indicesSelecionados.add(index);
      }
      this.ultimaLinhaSelecionadaIndex = index;
    } else {
      this.indicesSelecionados.clear();
      this.indicesSelecionados.add(index);
      this.ultimaLinhaSelecionadaIndex = index;
    }
    this.atualizarSelecao();
  }

  marcarAteLinhaAtual(indexAtual: number): void {
    if (this.ultimaLinhaSelecionadaIndex !== null) {
      const [inicio, fim] = [this.ultimaLinhaSelecionadaIndex, indexAtual].sort((a, b) => a - b);
      for (let i = inicio; i <= fim; i++) {
        this.indicesSelecionados.add(i);
      }
    }
  }

  atualizarSelecao(): void {
    this.itensSelecionados = Array.from(this.indicesSelecionados).map(index => this.rowData[index]);
    this.getListSelect.emit(this.itensSelecionados);
  }

  shouldSkipCell(column: any): boolean {
    return column?.showButton;
  }

  //getRow() Quando uma linha estiver selecionada
  getRow(bodyJson: any): void {
    this.rowEdit = bodyJson;
    this.getRowSelect.emit(this.rowEdit);
  }

  //getRowEditSelect() Quando o botão editar e uma linha estiver selecionada
  getRowEditSelect() {
    if (this.indicesSelecionados != undefined && this.indicesSelecionados != null) {
      this.getRowEdit.emit(this.itensSelecionados[0]);
    }
  }

  //getRowListDeleteSelect() Quando o botão excluir e varias linhas estiver selecionada
  getRowListDeleteSelect() {
    if (this.itensSelecionados.length == 1) {
      this.getRowExcluir.emit(this.itensSelecionados[0]);
    } else {
      this.getListExcluir.emit(this.itensSelecionados);
    }
  }

  //buttonClick() Quando o botão de uma linha especifica for selecionada
  buttonClick(event: Event, item: any): void {
    event.stopPropagation();
    this.getRowBtn.emit(item);
  }

  //Pagination Local
  get totalPages(): number {
    return Math.ceil(this.rowData.length / this.pageSize);
  }

  // Obtém os dados da página atual
  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.rowData.slice(start, end);
  }

  // Mudar de página
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.clearMarkRowsTable();
      this.currentPage = page;
    }
  }
}
