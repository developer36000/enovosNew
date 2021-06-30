export interface ICellItem {
  id?: string;
  data?: string;
  props?: object;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class CellItem implements ICellItem {
  id: string;
  data: string;
  props: object;
  constructor(obj: ICellItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
