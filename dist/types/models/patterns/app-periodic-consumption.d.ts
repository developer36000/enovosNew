export interface IAppPeriodicConsumptionItemCaption {
  text?: string;
  icon?: string;
  styles?: string;
}
export declare class AppPeriodicConsumptionItemCaption implements IAppPeriodicConsumptionItemCaption {
  text: string;
  icon: string;
  styles: string;
  constructor(obj: IAppPeriodicConsumptionItemCaption);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IAppPeriodicConsumptionItem {
  title?: string;
  value?: string;
  caption?: AppPeriodicConsumptionItemCaption;
}
export declare class AppPeriodicConsumptionItem implements IAppPeriodicConsumptionItem {
  title: string;
  value: string;
  caption: AppPeriodicConsumptionItemCaption;
  constructor(obj: IAppPeriodicConsumptionItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface IAppPeriodicConsumption {
  id: string;
  data?: AppPeriodicConsumptionItem[];
}
export declare class AppPeriodicConsumption implements IAppPeriodicConsumption {
  id: string;
  data: AppPeriodicConsumptionItem[];
  chart?: {
    maxValue: number;
    minValue: number;
    value?: number;
  };
  constructor(obj: IAppPeriodicConsumption);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
