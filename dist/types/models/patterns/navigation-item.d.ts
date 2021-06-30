export interface INavigationTrailingItemBadge {
  text?: string;
  styles?: string;
}
export declare class NavigationTrailingItemBadge implements INavigationTrailingItemBadge {
  text: string;
  styles: string;
  constructor(obj: INavigationTrailingItemBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface INavigationItemMedia {
  id: string;
  position: 'trailing' | 'leading';
  type?: 'icon';
  value: string;
  styles?: string;
  states?: {
    [key: string]: {
      styles: string;
      toggle: boolean;
    };
  };
}
export interface INavigationTrailingItem {
  id: string;
  icon?: string;
  motion?: string;
  styles?: string;
  badge?: NavigationTrailingItemBadge;
}
export declare class NavigationTrailingItem implements INavigationTrailingItem {
  id: string;
  icon: string;
  motion: string;
  styles: string;
  badge: NavigationTrailingItemBadge;
  constructor(obj: INavigationTrailingItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface INavigationItem {
  id: string;
  text?: string;
  icon?: string;
  motion?: string;
  disabled?: boolean;
  badge?: boolean;
  badgeStyles?: string;
  medias?: INavigationItemMedia[];
  props?: object;
}
export declare class NavigationItem implements INavigationItem {
  id: string;
  text: string;
  icon: string;
  motion: string;
  disabled: boolean;
  badge: boolean;
  badgeStyles: string;
  props: object;
  medias: INavigationItemMedia[];
  constructor(obj: INavigationItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
