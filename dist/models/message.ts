import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has } from 'lodash-es';

export interface IMessageOptions {
  position?: string;
  showDuration?: number;
}

export class MessageOptions implements IMessageOptions {
  position: string;
  clickable?: boolean;
  showDuration: number;

  constructor(obj: IMessageOptions) {
    if (obj instanceof MessageOptions) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  setProp(name: string, value: any): void {
    this[name] = value;
  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IMessageButton {
  id?: string;
  content?: string;
  iconLeading?: string;
  iconTrailing?: string;
}

export class MessageButton implements IMessageButton {
  id: string;
  content: string;
  iconLeading: string;
  iconTrailing: string;

  constructor(obj: IMessageButton) {
    if (obj instanceof MessageButton) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  setProp(name: string, value: any): void {
    this[name] = value;
  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}

export interface IMessage {
  uid?: number;
  content?: string;
  iconLeading?: string;
  styles?: string;
  buttons?: MessageButton[];
}

export class Message implements IMessage {
  uid: number;
  content: string;
  iconLeading: string;
  styles: string;
  buttons: MessageButton[];

  constructor(obj: IMessage) {
    if (obj instanceof Message) {
      return obj;
    }

    this.uid = has(obj, 'uid') ? get(obj, 'uid') : uuidv4();

    // Add props
    for (const name of Object.keys(obj)) {
      if (has(obj, name)) {
        this[name] = obj[name];
      }
    }
  }

  setProp(name: string, value: any): void {
    this[name] = value;
  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}
