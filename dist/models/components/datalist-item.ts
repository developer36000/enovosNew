import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';

export interface IDatalistItemDataConfig {
  type?: string;
  fontWeight?: string;
  styles?: string;
  content?: string;
  clampLines?: number;
}

export class DatalistItemDataConfig implements IDatalistItemDataConfig {
  type: string;
  fontWeight: string;
  styles: string;
  content: string;
  clampLines: number;

  constructor(obj: IDatalistItemDataConfig) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataConfig) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemDataLink {
  id?: string;
  size?: string;
  url?: string;
  mailto?: string;
  content?: string;
  iconPosition?: string;
  styles?: string;
  underline?: string;
  target?: string;
}

export class DatalistItemDataLink implements IDatalistItemDataLink {
  id: string;
  size: string;
  url: string;
  mailto: string;
  content: string;
  iconPosition: string;
  styles: string;
  underline: string;
  target: string;

  constructor(obj: IDatalistItemDataLink) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataLink) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemDataIcon {
  styles?: string;
  icon?: string;
  size?: string;
}

export class DatalistItemDataIcon implements IDatalistItemDataIcon {
  styles: string;
  icon: string;
  size: string;

  constructor(obj: IDatalistItemDataIcon) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataIcon) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemDataRadio {
  name?: string;
  value?: string;
  icon?: string;
  selected?: boolean;
}

export class DatalistItemDataRadio implements IDatalistItemDataRadio {

  name: string;
  value: string;
  icon: string;
  selected: boolean;

  constructor(obj: IDatalistItemDataRadio) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataRadio) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemDataBadge {
  styles?: string;
  text?: string;
  size?: string;
}

export class DatalistItemDataBadge implements IDatalistItemDataBadge {

  styles: string;
  text: string;
  size: string;

  constructor(obj: IDatalistItemDataBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataBadge) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemCollapsed {
  open?: boolean;
}

export class DatalistItemCollapsed implements IDatalistItemCollapsed {

  open: boolean;

  constructor(obj: IDatalistItemCollapsed) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemCollapsed) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemDataStyles {
  amount?: string;
}

export class DatalistItemDataStyles implements IDatalistItemDataStyles {

  amount: string;

  constructor(obj: IDatalistItemDataStyles) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataStyles) {
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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItemData {
  badge?: DatalistItemDataBadge;
  text?: DatalistItemDataConfig;
  amount?: DatalistItemDataConfig;
  currency?: DatalistItemDataConfig;
  currencyValue?: DatalistItemDataConfig;
  caption?: DatalistItemDataConfig;
  date?: DatalistItemDataConfig;
  title?: DatalistItemDataConfig;
  label?: DatalistItemDataConfig;
  content?: DatalistItemDataConfig;
  value?: DatalistItemDataConfig;
  image?: string;
  link?: DatalistItemDataLink;
  icon?: DatalistItemDataIcon;
  textAdditional?: string;
  leadingRadio?: DatalistItemDataRadio;
  trailingRadio?: DatalistItemDataRadio;
  captionValue?: DatalistItemDataConfig;
  evaluation?: DatalistItemDataConfig;
  evaluationAdditional?: DatalistItemDataConfig;
  evaluationValue?: DatalistItemDataConfig;
  evaluationValueAdditional?: DatalistItemDataConfig;
  styles?: DatalistItemDataStyles;
}

export class DatalistItemData implements IDatalistItemData {
  badge: DatalistItemDataBadge;
  text: DatalistItemDataConfig;
  amount: DatalistItemDataConfig;
  currency: DatalistItemDataConfig;
  currencyValue: DatalistItemDataConfig;
  caption: DatalistItemDataConfig;
  date: DatalistItemDataConfig;
  title: DatalistItemDataConfig;
  label: DatalistItemDataConfig;
  content: DatalistItemDataConfig;
  value: DatalistItemDataConfig;
  image: string;
  link: DatalistItemDataLink;
  icon: DatalistItemDataIcon;
  textAdditional: string;
  leadingRadio: DatalistItemDataRadio;
  trailingRadio: DatalistItemDataRadio;
  captionValue: DatalistItemDataConfig;
  evaluation: DatalistItemDataConfig;
  evaluationAdditional: DatalistItemDataConfig;
  evaluationValue: DatalistItemDataConfig;
  evaluationValueAdditional: DatalistItemDataConfig;
  styles: DatalistItemDataStyles;

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

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface IDatalistItem {
  id?: string;
  uid?: number;
  template?: string;
  type?: string;
  alias?: string;
  parent?: number;
  even?: boolean;
  highlight?: string;
  accordion?: boolean;
  styles?: string;
  clickable?: boolean;
  children?: DatalistItem[];
  data?: DatalistItemData;
  collapsed?: DatalistItemCollapsed;
}

export class DatalistItem implements IDatalistItem {
  id: string;
  uid: number;
  template: string;
  type: string;
  alias: string;
  parent: number;
  even: boolean;
  highlight: string;
  accordion: boolean;
  styles: string;
  clickable: boolean;
  children: DatalistItem[];
  data: DatalistItemData;
  collapsed: DatalistItemCollapsed;

  constructor(obj: IDatalistItem) {
    // make Datalist idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }

    this.uid = uuidv4();

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

  setProp(key, value) {
    set(this, key, value);
  }

}
