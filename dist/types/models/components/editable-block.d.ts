export interface IEditableBlockConfig {
  name: string;
  types?: string[];
}
export declare class EditableBlockConfig implements IEditableBlockConfig {
  name: string;
  types: string[];
  constructor(obj: IEditableBlockConfig);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IEditableBlockDataData {
  content?: string;
  styles?: string;
  type?: string;
}
export declare class EditableBlockDataData implements IEditableBlockDataData {
  content: string;
  styles: string;
  type: string;
  constructor(obj: IEditableBlockDataData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IEditableBlockData {
  type?: string;
  data?: EditableBlockDataData;
}
export declare class EditableBlockData implements IEditableBlockData {
  type: string;
  data: EditableBlockDataData;
  constructor(obj: IEditableBlockData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
