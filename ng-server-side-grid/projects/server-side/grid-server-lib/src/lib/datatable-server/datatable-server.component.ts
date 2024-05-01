import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef } from '../models/colDef.model';
import { ConfigPagination } from '../models/configPagination.model';
import { PaginationServerComponent } from '../pagination-server/pagination-server.component';
import { PagerService } from '../pagination-server/service/pager.service';
import { DateOrStringPipe } from './pipes/pipe.dateFormat';

@Component({
  selector: 'lib-datatable-server',
  templateUrl: './datatable-server.component.html',
  styleUrls: ['./datatable-server.component.css'],
  standalone:true,
  imports: [NgFor, CommonModule, PaginationServerComponent, DateOrStringPipe],
  providers: [PagerService, DatePipe]
})
export class DatatableServerComponent {
  @Input()  public pager: any = {};
  @Input()  public rowData: any = [];
  @Input()  public columnDefs!: ColDef[];
  @Input()  public editable!: boolean;
  @Input()  public deletable!: boolean;
  @Input()  public pagination: boolean = false;
  @Input()  public configPag!: ConfigPagination;
  @Output() public next: EventEmitter<number> = new EventEmitter();
  @Output() public prev: EventEmitter<number> = new EventEmitter();
  @Output() public setPage: EventEmitter<any> = new EventEmitter();
  @Output() public paginachange: EventEmitter<any> = new EventEmitter();
  @Output() public getRowSelect: EventEmitter<Object> = new EventEmitter();


  /* Métodos de Paginação */
  listagem(pageNo: number): void {
    this.paginachange.emit(pageNo);
  }

  nextLevel(currentPageNumber: number): void {
    this.next.emit(currentPageNumber);
  }

  prevLevel(currentPageNumber: number): void {
    this.prev.emit(currentPageNumber)
  }

  setPagination(page: Object): void {
    this.setPage.emit(page);
  }
  /* Fim dos métodos de Paginação */

  getRow(bodyJson: any) {
    this.getRowSelect.emit(bodyJson);
  }
}
