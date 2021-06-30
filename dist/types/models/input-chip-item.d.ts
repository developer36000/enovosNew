export interface IInputChipItemMedia {
  type: string;
  value: string;
}
export declare class InputChipItemMedia implements IInputChipItemMedia {
  type: string;
  value: string;
  constructor(obj: IInputChipItemMedia);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IInputChipItem {
  id?: string;
  uid?: string;
  selected?: boolean;
  disabled?: boolean;
  motionless?: boolean;
  readOnly?: boolean;
  inputName?: string;
  label: string;
  value?: string;
  sizeMd?: boolean;
  sizeSm?: boolean;
  styles?: string;
  leading?: InputChipItemMedia;
  trailing?: InputChipItemMedia;
}
export declare class InputChipItem implements IInputChipItem {
  id: string;
  uid: string;
  selected: boolean;
  disabled: boolean;
  motionless: boolean;
  readOnly: boolean;
  inputName: string;
  label: string;
  value: string;
  sizeMd: boolean;
  sizeSm: boolean;
  styles: string;
  leading: InputChipItemMedia;
  trailing: InputChipItemMedia;
  constructor(obj: IInputChipItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
