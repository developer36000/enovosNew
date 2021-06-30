export interface IDatalistItemData {
  title?: string;
  text?: string;
  date?: string;
  badge?: string;
  image?: string;
  icon?: string;
  caption?: string;
  amount?: string;
  captionValue?: string;
  'textAdditional'?: string;
  'leadingRadio'?: string;
  'trailingRadio'?: string;
}
export declare class DatalistItemData implements IDatalistItemData {
  title: string;
  text: string;
  date: string;
  badge: string;
  image: string;
  icon: string;
  caption: string;
  amount: string;
  captionValue: string;
  'textAdditional': string;
  'leadingRadio': string;
  'trailingRadio': string;
  constructor(obj: IDatalistItemData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export declare class DatalistItem {
  uid: number;
  even: false;
  data: DatalistItemData;
  styles: string;
  highlight: string;
  props: {
    id: string;
    uid: string;
    template: string;
    type: string;
    alias: string;
    data: string;
    children: string;
    parent: string;
    even: string;
    highlight: string;
    accordion: string;
    collapsed: string;
    styles: string;
  };
  constructor(obj: any);
  private isArray;
  setProp(name: string, value: any): void;
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
