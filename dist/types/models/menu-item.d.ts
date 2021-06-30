export interface IMenuItemMedia {
  type?: string;
  content?: string;
}
export declare class MenuItemMedia implements IMenuItemMedia {
  type: string;
  content: string;
  constructor(obj: IMenuItemMedia);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IMenuItem {
  id: string;
  'icon-leading'?: string;
  'icon-trailing'?: string;
  'trailing-type'?: string;
  'trailing-value'?: string;
  leading?: MenuItemMedia;
  trailing?: MenuItemMedia;
  text: string;
  children?: [];
  disabled?: boolean;
}
export declare class MenuItem implements IMenuItem {
  id: string;
  'icon-leading': string;
  'icon-trailing': string;
  'trailing-type': string;
  'trailing-value': string;
  leading: MenuItemMedia;
  trailing: MenuItemMedia;
  children: [];
  text: string;
  disabled: boolean;
  constructor(obj: IMenuItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
