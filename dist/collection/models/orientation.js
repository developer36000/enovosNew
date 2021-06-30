import { get, has } from 'lodash-es';
export class Orientation {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof Orientation) {
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
