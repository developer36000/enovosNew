export interface ISelectionControls {
  id: string;
  type: string;
  data?: SelectionControlsItem[];
}
export declare class SelectionControls implements ISelectionControls {
  id: string;
  type: string;
  data?: SelectionControlsItem[];
  constructor(obj: ISelectionControls);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface ISelectionControlsItem {
  id: string;
  label: string;
  active?: boolean;
  checked?: boolean;
  selected?: boolean;
  inputName?: string;
  value?: string;
  size?: string;
  children?: SelectionControlsItem[];
}
export declare class SelectionControlsItem implements ISelectionControlsItem {
  id: string;
  label: string;
  active: boolean;
  checked: boolean;
  selected: boolean;
  inputName: string;
  value: string;
  size: string;
  children: SelectionControlsItem[];
  constructor(obj: ISelectionControlsItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
