import { get, has } from 'lodash-es';

export interface IActionListItemOutlined {
  default ?: boolean;
  active ?: boolean;
}

export class ActionListItemOutlined implements IActionListItemOutlined {

  default: boolean;
  active: boolean;

  constructor(obj: IActionListItemOutlined) {
    // make DatalistItemData idempotent
    if (obj instanceof ActionListItemOutlined) {
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

export interface IActionListItemStyles {
  default ?: string;
  active ?: string;
}

export class ActionListItemStyles implements IActionListItemStyles {

  default: string;
  active: string;

  constructor(obj: IActionListItemStyles) {
    // make DatalistItemData idempotent
    if (obj instanceof ActionListItemStyles) {
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

export interface IActionListItemBadge {
  id ?: string;
  text ?: string;
  styles ?: string;
  size ?: string;
}

export class ActionListItemBadge implements IActionListItemBadge {

  id: string;
  text: string;
  styles: string;
  size: string;

  constructor(obj: IActionListItemBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof ActionListItemBadge) {
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

export interface IActionListItem {
  id: string;
  type: string;
  icon ?: string;
  content: string;
  styles ?: ActionListItemStyles;
  outlined ?: ActionListItemOutlined;
  iconPosition ?: string;
  badge ?: ActionListItemBadge;
}

export class ActionListItem implements IActionListItem {

  id: string;
  type: string;
  icon: string;
  content: string;
  styles: ActionListItemStyles;
  outlined: ActionListItemOutlined;
  iconPosition: string;
  badge: ActionListItemBadge;

  constructor(obj: IActionListItem) {
    // make DatalistItemData idempotent
    if (obj instanceof ActionListItem) {
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
