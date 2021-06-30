import { get, has, set } from 'lodash-es';

export interface IScrollspyItem {
  id: string;
  target: string;
  text: string;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class ScrollspyItem implements IScrollspyItem {

  id: string;
  target: string;
  text: string;

  constructor(obj: IScrollspyItem) {
    if (obj instanceof ScrollspyItem) {
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
