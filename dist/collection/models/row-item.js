import { get, has, set } from 'lodash-es';
export class RowItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof RowItem) {
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
  setProp(key, value) {
    set(this, key, value);
  }
}
