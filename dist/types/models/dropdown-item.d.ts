export interface IDropdownItemMedia {
  type: string;
  value: string;
}
export declare class DropdownItemMedia implements IDropdownItemMedia {
  type: string;
  value: string;
  constructor(obj: IDropdownItemMedia);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IDropdownItem {
  id: string;
  leading?: DropdownItemMedia;
  trailing?: DropdownItemMedia;
  label?: string;
  text?: string;
  disabled?: boolean;
  separator?: boolean;
  isHeading?: boolean;
  parent?: DropdownItem;
  children?: DropdownItem[];
}
export declare class DropdownItem implements IDropdownItem {
  uid: number;
  id: string;
  leading: DropdownItemMedia;
  trailing: DropdownItemMedia;
  label: string;
  text: string;
  disabled: boolean;
  separator: boolean;
  isHeading: boolean;
  parent: DropdownItem;
  children: DropdownItem[];
  constructor(obj: IDropdownItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
