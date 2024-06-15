import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
@Injectable()
export class ExcelService {
  fileName = '';
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  //Exportar tabelas por HTML
  public exportAsExcelFile(tables: any, wsnames: any, titles: any, wbname: any,): void {

    /* generate workbook and add the worksheet */
    let workbook = XLSX.utils.book_new();

    for (let i = 0; i < tables.length; i++) {
      tables[i].insertRow(0);

      tables[i].insertRow(0);

      let ws1 = XLSX.utils.table_to_sheet(tables[i], { raw: true });

      const myNewData = [[titles[i]]];

      ws1['!cols'] = [];
      ws1['!cols'][0] = { hidden: true };
      ws1['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 20 } }];

      XLSX.utils.sheet_add_aoa(ws1, myNewData, { origin: 0 });

      XLSX.utils.book_append_sheet(workbook, ws1, wsnames[i]);
    }
    XLSX.writeFile(workbook, wbname);
  }
}
