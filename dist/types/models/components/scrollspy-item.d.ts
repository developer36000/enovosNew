export interface IScrollspyItem {
  id: string;
  target: string;
  text: string;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class ScrollspyItem implements IScrollspyItem {
  id: string;
  target: string;
  text: string;
  constructor(obj: IScrollspyItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
