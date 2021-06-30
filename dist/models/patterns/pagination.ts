import { get, has, set } from 'lodash-es';

export interface IPagination {
  items: number;
  step: number;
  total: number;
}

export class Pagination implements IPagination {

  items: number;
  step: number;
  total: number;

  constructor(obj: IPagination) {
    // make DatalistItemData idempotent
    if (obj instanceof Pagination) {
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
