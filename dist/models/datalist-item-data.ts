import { get, has } from 'lodash-es';

export class DatalistItemData {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemData) {
      return obj;
    }

    // Add props
    for (const name in obj) {
      if (obj.hasOwnProperty(name)) {
        this[name] = obj[name];
      }
    }
  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

}
