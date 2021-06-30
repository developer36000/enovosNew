export interface ITabsItemIcon {
  icon?: string;
  size?: string;
  styles?: string;
}
export declare class TabsItemIcon implements ITabsItemIcon {
  icon: string;
  size: string;
  styles?: string;
  constructor(obj: ITabsItemIcon);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ITabsItemBadge {
  text?: string;
  styles?: string;
  size?: string;
}
export declare class TabsItemBadge implements ITabsItemBadge {
  text: string;
  styles: string;
  size: string;
  alignment: string;
  position: string;
  constructor(obj: ITabsItemBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ITabsItemPositionedIcon {
  icon?: string;
  styles?: string;
  size?: string;
  rounded: boolean;
  position?: string;
  alignment?: string;
  additionalMargin?: string;
  corner?: boolean;
  backgroundColor?: string;
}
export declare class TabsItemPositionedIcon implements ITabsItemPositionedIcon {
  icon?: string;
  styles?: string;
  size?: string;
  rounded: boolean;
  position?: string;
  alignment?: string;
  additionalMargin?: string;
  corner?: boolean;
  backgroundColor?: string;
  constructor(obj: ITabsItemPositionedIcon);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ITabsItem {
  id: string;
  title?: string;
  icon?: TabsItemIcon;
  positionedIcon?: TabsItemPositionedIcon;
  props?: object;
  disabled?: boolean;
  badge?: TabsItemBadge;
  fixedContent?: boolean;
}
export declare class TabsItem implements ITabsItem {
  id: string;
  title: string;
  icon: TabsItemIcon;
  positionedIcon: TabsItemPositionedIcon;
  props: object;
  disabled: boolean;
  badge: TabsItemBadge;
  fixedContent: boolean;
  constructor(obj: ITabsItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
export interface ITabs {
  styles?: string;
  activeItem?: string;
  items: TabsItem[];
}
export declare class Tabs implements ITabs {
  styles: string;
  activeItem: string;
  items: TabsItem[];
  constructor(obj: ITabs);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
