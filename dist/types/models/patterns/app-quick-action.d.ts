export interface IAppQuickAction {
  id: string;
  icon?: string;
  title?: string;
  subtitle?: string;
}
export declare class AppQuickAction implements IAppQuickAction {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  constructor(obj: IAppQuickAction);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
