export interface IAppDataBlockButton {
  content?: string;
  icon?: string;
}
export declare class AppDataBlockButton implements IAppDataBlockButton {
  content: string;
  icon: string;
  constructor(obj: IAppDataBlockButton);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IAppDataBlock {
  id: string;
  type: string;
  label: string;
  value: string;
  tooltip?: string;
  button?: AppDataBlockButton;
}
export declare class AppDataBlock implements IAppDataBlock {
  id: string;
  label: string;
  value: string;
  tooltip: string;
  type: string;
  button: AppDataBlockButton;
  constructor(obj: IAppDataBlock);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
