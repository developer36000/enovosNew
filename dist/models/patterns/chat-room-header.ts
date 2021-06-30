import { get, has } from 'lodash-es';

export interface IChatRoomHeaderImage {
  src: string;
  size?: string;
}

export class ChatRoomHeaderImage implements IChatRoomHeaderImage {
  src: string;
  size: string;

  constructor(obj: IChatRoomHeaderImage) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderImage) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IChatRoomHeaderText {
  content: string;
  styles?: string;
  fontWeight?: string;
  type?: string;
}

export class ChatRoomHeaderText implements IChatRoomHeaderText {
  content: string;
  styles: string;
  fontWeight: string;
  type: string;

  constructor(obj: IChatRoomHeaderText) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderText) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IChatRoomHeaderBadge {
  text?: string;
  styles?: string;
  size?: string;
}

export class ChatRoomHeaderBadge implements IChatRoomHeaderBadge {
  text: string;
  styles: string;
  size: string;

  constructor(obj: IChatRoomHeaderBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderBadge) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IChatRoomHeader {
  text: ChatRoomHeaderText;
  styles?: string;
  type?: string;
  fontWeight?: string;
  image ?: ChatRoomHeaderImage;
  backgroundColor ?: string;
  badge ?: ChatRoomHeaderBadge;
}

export class ChatRoomHeader implements IChatRoomHeader {

  text: ChatRoomHeaderText;
  styles: string;
  type: string;
  fontWeight: string;
  image: ChatRoomHeaderImage;
  backgroundColor: string;
  badge: ChatRoomHeaderBadge;

  constructor(obj: IChatRoomHeader) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeader) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}
