import { get, has } from 'lodash-es';

export interface IButtonGroupItemBadge {
  id ?: string;
  text ?: string;
  styles ?: string;
  size ?: string;
  alignment ?: string;
}

export class ButtonGroupItemBadge implements IButtonGroupItemBadge {

  id: string;
  text: string;
  styles: string;
  size: string;
  alignment: string;

  constructor(obj: IButtonGroupItemBadge) {
    // make DatalistItemData idempotent
    if (obj instanceof ButtonGroupItemBadge) {
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

export interface IButtonGroupItem {
  id: string;
  type: string;
  icon ?: string;
  content: string;
  styles ?: string;
  iconPosition ?: string;
  badge ?: ButtonGroupItemBadge;
}

export class ButtonGroupItem implements IButtonGroupItem {

  id: string;
  type: string;
  icon: string;
  content: string;
  styles: string;
  iconPosition: string;
  badge: ButtonGroupItemBadge;
  borderRadiusRemoved: boolean;
  textOnly: boolean;
  outlined: boolean;
  expand: boolean;
  disabled: boolean;
  rounded: boolean;
  iconSize: string;

  constructor(obj: IButtonGroupItem) {
    // make DatalistItemData idempotent
    if (obj instanceof ButtonGroupItem) {
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
