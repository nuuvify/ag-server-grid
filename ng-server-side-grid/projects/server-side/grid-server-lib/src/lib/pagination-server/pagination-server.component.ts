import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfigPagination } from '../models/configPagination.model';
import { PagerService } from './service/pager.service';

@Component({
  selector: 'pagination-server',
  templateUrl: './pagination-server.component.html',
  styleUrls: ['./pagination-server.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    CommonModule],
    providers: [PagerService]
})
export class PaginationServerComponent {
  @Input() public pager: any = {};
  @Input() public configPag!: ConfigPagination;
  @Output() public next: EventEmitter<number> = new EventEmitter();
  @Output() public prev: EventEmitter<number> = new EventEmitter();
  @Output() public setPage: EventEmitter<any> = new EventEmitter();
  @Output() public paginachange: EventEmitter<any> = new EventEmitter();

  constructor(private pagerService: PagerService) { }

  ngOnChanges(): void {
    this.setPagination(this.configPag.currentPageNumber);
  }

  trackByFn(item: any): number {
    return item;
  }

  listagem(pageNo: number): void {
    this.paginachange.emit(pageNo);
    this.setPagination(pageNo);
  }

  //nextLevel() -> Leva para a próxima página
  nextLevel(): void {
    this.next.emit(this.configPag.currentPageNumber + 1);
  }

  //prevLevel() -> Leva para uma página anterior
  prevLevel(): void {
    this.prev.emit(this.configPag.currentPageNumber - 1)
  }

  //setPagination() -> Mostra os botões de paginação
  setPagination(pageNo: number): void {
    this.configPag.currentPageNumber = pageNo;
    this.pager = this.pagerService.getPager(
      this.configPag.totalRecordsCount,
      pageNo,
      this.configPag.recordsPerPage
    );
    this.setPage.emit(this.pager);
  }
}
