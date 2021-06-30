import { get, has, set } from 'lodash-es';

export interface INavigationTrailingItemBadge {
  text?: string;
  styles?: string;
}

export class NavigationTrailingItemBadge implements INavigationTrailingItemBadge {
  text: string;
  styles: string;

  constructor(obj: INavigationTrailingItemBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationTrailingItemBadge) {
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

export interface INavigationItemMedia {
  id: string;
  position: 'trailing' | 'leading';
  type ?: 'icon'; // Include potentially image or another media in next improvements
  value: string;
  styles ?: string;
  states ?: {
    [key: string]: {
      styles: string;
      toggle: boolean;
    };
  }
}

export interface INavigationTrailingItem {
  id: string;
  icon ?: string;
  motion ?: string;
  styles ?: string;
  badge ?: NavigationTrailingItemBadge;
}

export class NavigationTrailingItem implements INavigationTrailingItem {

  id: string;
  icon: string;
  motion: string;
  styles: string;
  badge: NavigationTrailingItemBadge;

  constructor(obj: INavigationTrailingItem) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationTrailingItem) {
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

export interface INavigationItem {
  id: string;
  text ?: string;
  icon ?: string;
  motion ?: string;
  disabled ?: boolean;
  badge ?: boolean;
  badgeStyles ?: string;
  medias ?: INavigationItemMedia[];
  props ?: object;
}

export class NavigationItem implements INavigationItem {

  id: string;
  text: string;
  icon: string;
  motion: string;
  disabled: boolean;
  badge: boolean;
  badgeStyles: string;
  props: object;
  medias: INavigationItemMedia[];

  constructor(obj: INavigationItem) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationItem) {
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
