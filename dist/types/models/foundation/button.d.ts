export interface IButton {
  id: string;
  size?: string;
  textOnly?: boolean;
  outlined?: boolean;
  expand?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  content?: string;
  styles?: string;
  iconPosition?: string;
  iconStyles?: string;
  icon?: string;
}
export declare class Button implements IButton {
  id: string;
  size: string;
  textOnly: boolean;
  outlined: boolean;
  expand: boolean;
  disabled: boolean;
  rounded: boolean;
  content: string;
  styles: string;
  iconPosition: string;
  iconStyles: string;
  icon: string;
  constructor(obj: IButton);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
