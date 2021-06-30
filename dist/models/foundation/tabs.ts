import { get, has, set } from 'lodash-es';

export interface ITabsItemIcon {
  icon?: string;
  size?: string;
  styles?: string;
}

export class TabsItemIcon implements ITabsItemIcon {
  icon: string;
  size: string;
  styles?: string;

  constructor(obj: ITabsItemIcon) {
    // make DatalistItemData idempotent
    if (obj instanceof TabsItemIcon) {
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

export interface ITabsItemBadge {
  text?: string;
  styles?: string;
  size?: string;
}

export class TabsItemBadge implements ITabsItemBadge {
  text: string;
  styles: string;
  size: string;
  alignment: string;
  position: string;

  constructor(obj: ITabsItemBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof TabsItemBadge) {
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

export interface ITabsItemPositionedIcon {
  icon ?: string;
  styles ?: string;
  size ?: string;
  rounded: boolean;
  position?: string;
  alignment?: string
  additionalMargin?: string;
  corner?: boolean;
  backgroundColor?: string;
}

export class TabsItemPositionedIcon implements ITabsItemPositionedIcon {
  icon ?: string;
  styles ?: string;
  size ?: string;
  rounded: boolean;
  position?: string;
  alignment?: string
  additionalMargin?: string;
  corner?: boolean;
  backgroundColor?: string;

  constructor(obj: ITabsItemPositionedIcon) {
    // make DatalistItemData idempotent
    if (obj instanceof TabsItemPositionedIcon) {
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

export interface ITabsItem {
  id: string;
  title ?: string;
  icon ?: TabsItemIcon;
  positionedIcon ?: TabsItemPositionedIcon;
  props ?: object;
  disabled ?: boolean;
  badge ?: TabsItemBadge;
  fixedContent ?: boolean
}

export class TabsItem implements ITabsItem {

  id: string;
  title: string;
  icon: TabsItemIcon;
  positionedIcon: TabsItemPositionedIcon;
  props: object;
  disabled: boolean;
  badge: TabsItemBadge;
  fixedContent: boolean

  constructor(obj: ITabsItem) {
    // make DatalistItemData idempotent
    if (obj instanceof TabsItem) {
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

export interface ITabs {
  styles ?: string;
  activeItem ?: string;
  items: TabsItem[];
}

export class Tabs implements ITabs {
  styles: string;
  activeItem: string;
  items: TabsItem[];

  constructor(obj: ITabs) {
    // make DatalistItemData idempotent
    if (obj instanceof Tabs) {
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
