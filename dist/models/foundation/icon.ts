import { get, has } from 'lodash-es';

export interface IIcon {
  size ?: string;
  styles ?: string;
  icon ?: string;
}

export class Icon implements IIcon {

  size: string;
  styles: string;
  icon: string;

  constructor(obj: IIcon) {
    // make DatalistItemData idempotent
    if (obj instanceof Icon) {
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
