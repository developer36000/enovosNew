import { get, has, set } from 'lodash-es';

export interface ITabNavigation {
  id: string;
  text ?: string;
  icon ?: string;
  disabled ?: boolean;
  badge ?: boolean;
  badgeStyles ?: string;
  props ?: object;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class TabNavigation implements ITabNavigation {

  id: string;
  text: string;
  icon: string;
  disabled: boolean;
  badge: boolean;
  badgeStyles: string;
  props: object;

  constructor(obj: ITabNavigation) {
    // make DatalistItemData idempotent
    if (obj instanceof TabNavigation) {
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
