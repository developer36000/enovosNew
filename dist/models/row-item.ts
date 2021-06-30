import { get, has, set } from 'lodash-es';

export interface IRowItem {
  values: [];
  children ?: [];
  selected ?: boolean;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class RowItem implements IRowItem {

  values: [];
  children: [];
  selected: boolean;

  constructor(obj: IRowItem) {
    // make DatalistItemData idempotent
    if (obj instanceof RowItem) {
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
