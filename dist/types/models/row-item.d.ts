export interface IRowItem {
  values: [];
  children?: [];
  selected?: boolean;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class RowItem implements IRowItem {
  values: [];
  children: [];
  selected: boolean;
  constructor(obj: IRowItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
