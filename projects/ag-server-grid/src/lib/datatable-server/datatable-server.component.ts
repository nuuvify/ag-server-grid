import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef } from '../models/colDef.model';
import { ConfigPagination } from '../models/configPagination.model';
import { PaginationServerComponent } from './components/pagination-server/pagination-server.component';
import { PagerService } from './components/pagination-server/service/pager.service';
import { DateOrStringPipe } from './pipes/pipe.dateFormat';
import { SearchFilterPipe } from './pipes/pipe.searchFilter';

@Component({
  selector: 'datatable-server',
  templateUrl: './datatable-server.component.html',
  styleUrls: ['./datatable-server.component.css'],
  standalone: true,
  imports: [CommonModule, PaginationServerComponent, DateOrStringPipe, SearchFilterPipe],
  providers: [PagerService, DatePipe]
})
export class DatatableServerComponent {
  sortOrder = 1;
  sortedColumn!: string;
  sortProperty!: string;
  @Input() public pager: any = {};
  @Input() public rowData: any = [];
  @Input() public columnDefs!: ColDef[];
  @Input() public editable!: boolean;
  @Input() public deletable!: boolean;
  @Input() public searchText!: string;
  @Input() public pagination: boolean = false;
  @Input() public configPag!: ConfigPagination;
  @Output() public next: EventEmitter<number> = new EventEmitter();
  @Output() public prev: EventEmitter<number> = new EventEmitter();
  @Output() public setPage: EventEmitter<any> = new EventEmitter();
  @Output() public paginachange: EventEmitter<any> = new EventEmitter();
  @Output() public getRowSelect: EventEmitter<Object> = new EventEmitter();

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

  getRow(bodyJson: any): void {
    this.getRowSelect.emit(bodyJson);
  }

  sortBy(property: string): void {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;
    this.rowData = [...this.rowData.sort((a: any, b: any) => {
      let result = 0;
      if (a[property] < b[property]) {
        result = -1;
      }
      if (a[property] > b[property]) {
        result = 1;
      }
      return result * this.sortOrder;
    })];
  }

  sortIcon(property: string): string {
    if (property === this.sortProperty) {
      return this.sortOrder === 1 ? '⭡' : '⭣';
    }
    return '';
  }
}
