import { get, has, set } from 'lodash-es';

export interface IEditableBlockConfig {
  name: string;
  types?: string[];
}

export class EditableBlockConfig implements IEditableBlockConfig {

  name: string;
  types: string[];

  constructor(obj: IEditableBlockConfig) {
    // make DatalistItemData idempotent
    if (obj instanceof EditableBlockConfig) {
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

export interface IEditableBlockDataData {
  content ?: string;
  styles ?: string;
  type ?: string;
}

export class EditableBlockDataData implements IEditableBlockDataData {

  content: string;
  styles: string;
  type: string;

  constructor(obj: IEditableBlockDataData) {
    // make DatalistItemData idempotent
    if (obj instanceof EditableBlockDataData) {
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

export interface IEditableBlockData {
  type ?: string;
  data ?: EditableBlockDataData;
}

export class EditableBlockData implements IEditableBlockData {

  type: string;
  data: EditableBlockDataData;

  constructor(obj: IEditableBlockData) {
    // make DatalistItemData idempotent
    if (obj instanceof EditableBlockData) {
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
