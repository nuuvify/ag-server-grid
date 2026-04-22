import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
  getPager(totalItems: number, currentPage: number = 0, pageSize: number = 10): Object {
    // calcular o total de páginas
    let totalPages = Math.ceil(totalItems / pageSize);

    // garantir que a página atual não esteja fora do intervalo
    if (currentPage < 0) {
      currentPage = 0;
    } else if (currentPage >= totalPages) {
      currentPage = totalPages - 1;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // menos de 10 páginas totais, então mostre todas
      startPage = 0;
      endPage = totalPages - 1; // ajuste para começar do zero
    } else {
      // mais de 10 páginas totais, então calcule as páginas inicial e final
      if (currentPage <= 6) {
        startPage = 0;
        endPage = 9; // ajuste para mostrar 10 páginas começando do zero
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 10; // ajuste para mostrar 10 páginas
        endPage = totalPages - 1;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calcular os índices de início e fim dos itens
    let startIndex = currentPage * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // criar um array de páginas para usar no controle de paginação
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // retornar o objeto com todas as propriedades de paginação necessárias para a visualização
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
