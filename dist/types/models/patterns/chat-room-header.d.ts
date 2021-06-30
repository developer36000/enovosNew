export interface IChatRoomHeaderImage {
  src: string;
  size?: string;
}
export declare class ChatRoomHeaderImage implements IChatRoomHeaderImage {
  src: string;
  size: string;
  constructor(obj: IChatRoomHeaderImage);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IChatRoomHeaderText {
  content: string;
  styles?: string;
  fontWeight?: string;
  type?: string;
}
export declare class ChatRoomHeaderText implements IChatRoomHeaderText {
  content: string;
  styles: string;
  fontWeight: string;
  type: string;
  constructor(obj: IChatRoomHeaderText);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IChatRoomHeaderBadge {
  text?: string;
  styles?: string;
  size?: string;
}
export declare class ChatRoomHeaderBadge implements IChatRoomHeaderBadge {
  text: string;
  styles: string;
  size: string;
  constructor(obj: IChatRoomHeaderBadge);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IChatRoomHeader {
  text: ChatRoomHeaderText;
  styles?: string;
  type?: string;
  fontWeight?: string;
  image?: ChatRoomHeaderImage;
  backgroundColor?: string;
  badge?: ChatRoomHeaderBadge;
}
export declare class ChatRoomHeader implements IChatRoomHeader {
  text: ChatRoomHeaderText;
  styles: string;
  type: string;
  fontWeight: string;
  image: ChatRoomHeaderImage;
  backgroundColor: string;
  badge: ChatRoomHeaderBadge;
  constructor(obj: IChatRoomHeader);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
