import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';

export interface IDropdownItemMedia {
  type: string;
  value: string;
}

export class DropdownItemMedia implements IDropdownItemMedia {
  type: string;
  value: string;

  constructor(obj: IDropdownItemMedia) {
    // make DatalistItemData idempotent
    if (obj instanceof DropdownItemMedia) {
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

export interface IDropdownItem {
  id: string;
  leading ?: DropdownItemMedia;
  trailing ?: DropdownItemMedia;
  label ?: string;
  text ?: string;
  disabled ?: boolean;
  separator ?: boolean;
  isHeading ?: boolean;
  parent ?: DropdownItem;
  children ?: DropdownItem[];
}

export class DropdownItem implements IDropdownItem {

  uid: number;
  id: string;
  leading: DropdownItemMedia;
  trailing: DropdownItemMedia;
  label: string;
  text: string;
  disabled: boolean;
  separator: boolean;
  isHeading: boolean;
  parent: DropdownItem;
  children: DropdownItem[];

  constructor(obj: IDropdownItem) {
    if (obj instanceof DropdownItem) {
      return obj;
    }

    this.uid = has(obj, 'id') ? get(obj, 'id') : uuidv4();

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
