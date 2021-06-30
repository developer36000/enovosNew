import { DropdownItem } from '../dropdown-item';
export interface IDataTableDataTooltip {
  value?: string;
}
export declare class DataTableDataTooltip implements IDataTableDataTooltip {
  value: string;
  constructor(obj: IDataTableDataTooltip);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDataTableDataProps {
  id?: string;
  type?: string;
  text?: string;
  icon?: string;
  iconSize?: number;
  textOnly?: boolean;
  size?: string;
  styles?: string;
  value?: string;
  term?: DataTableData;
  description?: DataTableData;
  data?: DataTableDataProps[];
  fontWeight?: string;
  iconStyles?: string;
  url?: string;
  dropdown?: DropdownItem[];
}
export declare class DataTableDataProps implements IDataTableDataProps {
  id: string;
  type: string;
  text: string;
  icon: string;
  iconSize: number;
  textOnly: boolean;
  size: string;
  styles: string;
  value: string;
  term: DataTableData;
  description?: DataTableData;
  data: DataTableDataProps[];
  fontWeight: string;
  iconStyles: string;
  url: string;
  dropdown: DropdownItem[];
  constructor(obj: IDataTableDataProps);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDataTableData {
  uid?: number;
  data?: any;
  alignment?: string;
  tooltip?: DataTableDataTooltip;
  props?: DataTableDataProps;
}
export declare class DataTableData implements IDataTableData {
  uid: number;
  data: any;
  align: string;
  tooltip: DataTableDataTooltip;
  props: DataTableDataProps;
  constructor(obj: IDataTableData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDataTableValues {
  values?: DataTableData[];
  children?: DataTableValues[];
}
export declare class DataTableValues implements IDataTableValues {
  values: DataTableData[];
  children: DataTableValues[];
  constructor(obj: IDataTableValues);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
