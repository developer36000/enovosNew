import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';

export interface IInputChipItemMedia {
  type: string;
  value: string;
}

export class InputChipItemMedia implements IInputChipItemMedia {
  type: string;
  value: string;

  constructor(obj: IInputChipItemMedia) {
    // make DatalistItemData idempotent
    if (obj instanceof InputChipItemMedia) {
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

export interface IInputChipItem {

  id?: string;
  uid?: string;
  selected?: boolean;
  disabled?: boolean;
  motionless?: boolean;
  readOnly?: boolean;
  inputName?: string;
  label: string;
  value?: string;
  sizeMd?: boolean;
  sizeSm?: boolean;
  styles?: string;
  leading ?: InputChipItemMedia;
  trailing ?: InputChipItemMedia;
}

export class InputChipItem implements IInputChipItem {

  id: string;
  uid: string;
  selected: boolean;
  disabled: boolean;
  motionless: boolean;
  readOnly: boolean;
  inputName: string;
  label: string;
  value: string;
  sizeMd: boolean;
  sizeSm: boolean;
  styles: string;
  leading: InputChipItemMedia;
  trailing: InputChipItemMedia;

  constructor(obj: IInputChipItem) {
    if (obj instanceof InputChipItem) {
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
