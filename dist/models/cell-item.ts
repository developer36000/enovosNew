import { get, has, set } from 'lodash-es';

export interface ICellItem {
  id ?: string;
  data ?: string;
  props ?: object;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class CellItem implements ICellItem {

  id: string;
  data: string;
  props: object;

  constructor(obj: ICellItem) {
    // make DatalistItemData idempotent
    if (obj instanceof CellItem) {
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
