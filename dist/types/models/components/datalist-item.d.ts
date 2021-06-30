export interface IDatalistItemDataConfig {
  type?: string;
  fontWeight?: string;
  styles?: string;
  content?: string;
  clampLines?: number;
}
export declare class DatalistItemDataConfig implements IDatalistItemDataConfig {
  type: string;
  fontWeight: string;
  styles: string;
  content: string;
  clampLines: number;
  constructor(obj: IDatalistItemDataConfig);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemDataLink {
  id?: string;
  size?: string;
  url?: string;
  mailto?: string;
  content?: string;
  iconPosition?: string;
  styles?: string;
  underline?: string;
  target?: string;
}
export declare class DatalistItemDataLink implements IDatalistItemDataLink {
  id: string;
  size: string;
  url: string;
  mailto: string;
  content: string;
  iconPosition: string;
  styles: string;
  underline: string;
  target: string;
  constructor(obj: IDatalistItemDataLink);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemDataIcon {
  styles?: string;
  icon?: string;
  size?: string;
}
export declare class DatalistItemDataIcon implements IDatalistItemDataIcon {
  styles: string;
  icon: string;
  size: string;
  constructor(obj: IDatalistItemDataIcon);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemDataRadio {
  name?: string;
  value?: string;
  icon?: string;
  selected?: boolean;
}
export declare class DatalistItemDataRadio implements IDatalistItemDataRadio {
  name: string;
  value: string;
  icon: string;
  selected: boolean;
  constructor(obj: IDatalistItemDataRadio);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemDataBadge {
  styles?: string;
  text?: string;
  size?: string;
}
export declare class DatalistItemDataBadge implements IDatalistItemDataBadge {
  styles: string;
  text: string;
  size: string;
  constructor(obj: IDatalistItemDataBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemCollapsed {
  open?: boolean;
}
export declare class DatalistItemCollapsed implements IDatalistItemCollapsed {
  open: boolean;
  constructor(obj: IDatalistItemCollapsed);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemDataStyles {
  amount?: string;
}
export declare class DatalistItemDataStyles implements IDatalistItemDataStyles {
  amount: string;
  constructor(obj: IDatalistItemDataStyles);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItemData {
  badge?: DatalistItemDataBadge;
  text?: DatalistItemDataConfig;
  amount?: DatalistItemDataConfig;
  currency?: DatalistItemDataConfig;
  currencyValue?: DatalistItemDataConfig;
  caption?: DatalistItemDataConfig;
  date?: DatalistItemDataConfig;
  title?: DatalistItemDataConfig;
  label?: DatalistItemDataConfig;
  content?: DatalistItemDataConfig;
  value?: DatalistItemDataConfig;
  image?: string;
  link?: DatalistItemDataLink;
  icon?: DatalistItemDataIcon;
  textAdditional?: string;
  leadingRadio?: DatalistItemDataRadio;
  trailingRadio?: DatalistItemDataRadio;
  captionValue?: DatalistItemDataConfig;
  evaluation?: DatalistItemDataConfig;
  evaluationAdditional?: DatalistItemDataConfig;
  evaluationValue?: DatalistItemDataConfig;
  evaluationValueAdditional?: DatalistItemDataConfig;
  styles?: DatalistItemDataStyles;
}
export declare class DatalistItemData implements IDatalistItemData {
  badge: DatalistItemDataBadge;
  text: DatalistItemDataConfig;
  amount: DatalistItemDataConfig;
  currency: DatalistItemDataConfig;
  currencyValue: DatalistItemDataConfig;
  caption: DatalistItemDataConfig;
  date: DatalistItemDataConfig;
  title: DatalistItemDataConfig;
  label: DatalistItemDataConfig;
  content: DatalistItemDataConfig;
  value: DatalistItemDataConfig;
  image: string;
  link: DatalistItemDataLink;
  icon: DatalistItemDataIcon;
  textAdditional: string;
  leadingRadio: DatalistItemDataRadio;
  trailingRadio: DatalistItemDataRadio;
  captionValue: DatalistItemDataConfig;
  evaluation: DatalistItemDataConfig;
  evaluationAdditional: DatalistItemDataConfig;
  evaluationValue: DatalistItemDataConfig;
  evaluationValueAdditional: DatalistItemDataConfig;
  styles: DatalistItemDataStyles;
  constructor(obj: IDatalistItemData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IDatalistItem {
  id?: string;
  uid?: number;
  template?: string;
  type?: string;
  alias?: string;
  parent?: number;
  even?: boolean;
  highlight?: string;
  accordion?: boolean;
  styles?: string;
  clickable?: boolean;
  children?: DatalistItem[];
  data?: DatalistItemData;
  collapsed?: DatalistItemCollapsed;
}
export declare class DatalistItem implements IDatalistItem {
  id: string;
  uid: number;
  template: string;
  type: string;
  alias: string;
  parent: number;
  even: boolean;
  highlight: string;
  accordion: boolean;
  styles: string;
  clickable: boolean;
  children: DatalistItem[];
  data: DatalistItemData;
  collapsed: DatalistItemCollapsed;
  constructor(obj: IDatalistItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
