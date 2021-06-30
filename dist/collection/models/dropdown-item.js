import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';
export class DropdownItemMedia {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DropdownItemMedia) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class DropdownItem {
  constructor(obj) {
    if (obj instanceof DropdownItem) {
      return obj;
    }
    this.uid = has(obj, 'id') ? get(obj, 'id') : uuidv4();
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}
