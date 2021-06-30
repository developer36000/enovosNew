export interface ICardNotificationIcon {
  icon?: string;
  styles?: string;
}
export declare class CardNotificationIcon implements ICardNotificationIcon {
  icon: string;
  styles: string;
  constructor(obj: ICardNotificationIcon);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationHeaderLeading {
  styles?: string;
  content?: string;
}
export declare class CardNotificationHeaderLeading implements ICardNotificationHeaderLeading {
  styles?: string;
  content?: string;
  constructor(obj: ICardNotificationHeaderLeading);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationHeaderTrailing {
  images?: [];
  tooltip?: object;
}
export declare class CardNotificationHeaderTrailing implements ICardNotificationHeaderTrailing {
  images?: [];
  tooltip?: object;
  constructor(obj: ICardNotificationHeaderTrailing);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationHeader {
  headerLeading?: CardNotificationHeaderLeading;
  headerTrailing?: CardNotificationHeaderTrailing;
}
export declare class CardNotificationHeader implements ICardNotificationHeader {
  headerLeading?: CardNotificationHeaderLeading;
  headerTrailing?: CardNotificationHeaderTrailing;
  constructor(obj: ICardNotificationHeader);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationFooterLeading {
  message?: object;
}
export declare class CardNotificationFooterLeading implements ICardNotificationFooterLeading {
  message?: object;
  constructor(obj: ICardNotificationFooterLeading);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationFooterTrailing {
  button?: object;
}
export declare class CardNotificationFooterTrailing implements ICardNotificationFooterTrailing {
  button?: object;
  constructor(obj: ICardNotificationFooterTrailing);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationFooter {
  footerLeading?: CardNotificationFooterLeading;
  footerTrailing?: CardNotificationFooterTrailing;
}
export declare class CardNotificationFooter implements ICardNotificationFooter {
  footerLeading?: CardNotificationFooterLeading;
  footerTrailing?: CardNotificationFooterTrailing;
  constructor(obj: ICardNotificationFooter);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface ICardNotificationData {
  icon?: CardNotificationIcon;
  header?: CardNotificationHeader;
  footer?: CardNotificationFooter;
  getProp(arg: string): any;
  hasProp(arg: string): boolean;
}
export declare class CardNotificationData implements ICardNotificationData {
  icon?: CardNotificationIcon;
  header?: CardNotificationHeader;
  footer?: CardNotificationFooter;
  constructor(obj: ICardNotificationData);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
