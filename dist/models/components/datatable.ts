import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';

import { DropdownItem } from '../dropdown-item';

export interface IDataTableDataTooltip {
  value?: string;
}

export class DataTableDataTooltip implements IDataTableDataTooltip {
  value: string;

  constructor(obj: IDataTableDataTooltip) {
    // make Datalist idempotent
    if (obj instanceof DataTableDataTooltip) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

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

export class DataTableDataProps implements IDataTableDataProps {
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

  constructor(obj: IDataTableDataProps) {
    // make Datalist idempotent
    if (obj instanceof DataTableDataProps) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDataTableData {
  uid?: number;
  data?: any;
  alignment?: string;
  tooltip?: DataTableDataTooltip;
  props?: DataTableDataProps;
}

export class DataTableData implements IDataTableData {
  uid: number;
  data: any;
  align: string;
  tooltip: DataTableDataTooltip;
  props: DataTableDataProps;

  constructor(obj: IDataTableData) {
    // make Datalist idempotent
    if (obj instanceof DataTableData) {
      return obj;
    }

    this.uid = uuidv4();

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDataTableValues {
  values?: DataTableData[];
  children?: DataTableValues[];
}

export class DataTableValues implements IDataTableValues {
  values: DataTableData[];
  children: DataTableValues[];

  constructor(obj: IDataTableValues) {
    // make Datalist idempotent
    if (obj instanceof DataTableValues) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

}
