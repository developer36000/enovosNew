export interface IButtonGroupItemBadge {
  id?: string;
  text?: string;
  styles?: string;
  size?: string;
  alignment?: string;
}
export declare class ButtonGroupItemBadge implements IButtonGroupItemBadge {
  id: string;
  text: string;
  styles: string;
  size: string;
  alignment: string;
  constructor(obj: IButtonGroupItemBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IButtonGroupItem {
  id: string;
  type: string;
  icon?: string;
  content: string;
  styles?: string;
  iconPosition?: string;
  badge?: ButtonGroupItemBadge;
}
export declare class ButtonGroupItem implements IButtonGroupItem {
  id: string;
  type: string;
  icon: string;
  content: string;
  styles: string;
  iconPosition: string;
  badge: ButtonGroupItemBadge;
  borderRadiusRemoved: boolean;
  textOnly: boolean;
  outlined: boolean;
  expand: boolean;
  disabled: boolean;
  rounded: boolean;
  iconSize: string;
  constructor(obj: IButtonGroupItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
