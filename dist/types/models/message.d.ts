export interface IMessageOptions {
  position?: string;
  showDuration?: number;
}
export declare class MessageOptions implements IMessageOptions {
  position: string;
  clickable?: boolean;
  showDuration: number;
  constructor(obj: IMessageOptions);
  setProp(name: string, value: any): void;
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IMessageButton {
  id?: string;
  content?: string;
  iconLeading?: string;
  iconTrailing?: string;
}
export declare class MessageButton implements IMessageButton {
  id: string;
  content: string;
  iconLeading: string;
  iconTrailing: string;
  constructor(obj: IMessageButton);
  setProp(name: string, value: any): void;
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IMessage {
  uid?: number;
  content?: string;
  iconLeading?: string;
  styles?: string;
  buttons?: MessageButton[];
}
export declare class Message implements IMessage {
  uid: number;
  content: string;
  iconLeading: string;
  styles: string;
  buttons: MessageButton[];
  constructor(obj: IMessage);
  setProp(name: string, value: any): void;
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
