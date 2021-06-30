export interface IActionListItemOutlined {
  default?: boolean;
  active?: boolean;
}
export declare class ActionListItemOutlined implements IActionListItemOutlined {
  default: boolean;
  active: boolean;
  constructor(obj: IActionListItemOutlined);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IActionListItemStyles {
  default?: string;
  active?: string;
}
export declare class ActionListItemStyles implements IActionListItemStyles {
  default: string;
  active: string;
  constructor(obj: IActionListItemStyles);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IActionListItemBadge {
  id?: string;
  text?: string;
  styles?: string;
  size?: string;
}
export declare class ActionListItemBadge implements IActionListItemBadge {
  id: string;
  text: string;
  styles: string;
  size: string;
  constructor(obj: IActionListItemBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IActionListItem {
  id: string;
  type: string;
  icon?: string;
  content: string;
  styles?: ActionListItemStyles;
  outlined?: ActionListItemOutlined;
  iconPosition?: string;
  badge?: ActionListItemBadge;
}
export declare class ActionListItem implements IActionListItem {
  id: string;
  type: string;
  icon: string;
  content: string;
  styles: ActionListItemStyles;
  outlined: ActionListItemOutlined;
  iconPosition: string;
  badge: ActionListItemBadge;
  constructor(obj: IActionListItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
