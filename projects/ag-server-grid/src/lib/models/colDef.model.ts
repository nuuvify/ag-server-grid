export interface ColDef {
  field: string,
  headerName?: string,
  minWidth?: number,
  maxWidth?: number,
  editable?: boolean,
  isDate?: boolean;
  cellRenderer?: any;
  headerValueGetter?: (obj: ColDef) => string;
  changeName?: string;
  sortBy?: boolean;
}
