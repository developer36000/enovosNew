import { get, has, set } from 'lodash-es';

export interface IMenuItemMedia {
  type?: string;
  content?: string;
}

export class MenuItemMedia implements IMenuItemMedia {
  type: string;
  content: string;

  constructor(obj: IMenuItemMedia) {
    if (obj instanceof MenuItemMedia) {
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

export interface IMenuItem {
  id: string;
  'icon-leading' ?: string;
  'icon-trailing' ?: string;
  'trailing-type' ?: string;
  'trailing-value' ?: string;
  leading ?: MenuItemMedia;
  trailing ?: MenuItemMedia;
  text: string;
  children ?: [];
  disabled ?: boolean;
}

export class MenuItem implements IMenuItem {

  id: string;
  'icon-leading': string;
  'icon-trailing': string;
  'trailing-type': string;
  'trailing-value': string;
  leading: MenuItemMedia;
  trailing: MenuItemMedia;
  children: [];
  text: string;
  disabled: boolean;

  constructor(obj: IMenuItem) {
    if (obj instanceof MenuItem) {
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
