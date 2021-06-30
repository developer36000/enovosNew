export interface ITabNavigation {
  id: string;
  text?: string;
  icon?: string;
  disabled?: boolean;
  badge?: boolean;
  badgeStyles?: string;
  props?: object;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class TabNavigation implements ITabNavigation {
  id: string;
  text: string;
  icon: string;
  disabled: boolean;
  badge: boolean;
  badgeStyles: string;
  props: object;
  constructor(obj: ITabNavigation);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
