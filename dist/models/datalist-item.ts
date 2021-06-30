import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has } from 'lodash-es';

export interface IDatalistItemData {
  title?: string;
  text?: string;
  date?: string;
  badge?: string;
  image?: string;
  icon?: string;
  caption?: string;
  amount?: string;
  captionValue?: string;
  'textAdditional'?: string;
  'leadingRadio'?: string;
  'trailingRadio'?: string;
}

export class DatalistItemData implements IDatalistItemData {
  title: string;
  text: string;
  date: string;
  badge: string;
  image: string;
  icon: string;
  caption: string;
  amount: string;
  captionValue: string;
  'textAdditional': string;
  'leadingRadio': string;
  'trailingRadio': string;

  constructor(obj: IDatalistItemData) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemData) {
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

export class DatalistItem {
  uid: number;
  even: false;
  data: DatalistItemData;
  styles: string;
  highlight: string;
  props = {
    id: 'string',
    uid: 'number',
    template: 'string',
    type: 'string',
    alias: 'string',
    data: 'object',
    children: 'array',
    parent: 'number',
    even: 'boolean',
    highlight: 'string',
    accordion: 'boolean',
    collapsed: 'object',
    styles: 'string',
  };

  constructor(obj) {
    // make DatalistItem idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }

    this.uid = uuidv4();
    // Add props
    for (const name in this.props) {
      if (this.props.hasOwnProperty(name)
      && has(obj, name)
      && (
        (typeof obj[name] === this.props[name]) ||
        (this.props[name] === 'array' && this.isArray(obj[name]))
        )
      ) {
        this[name] = obj[name];
      }
    }
  }

  private isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
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
