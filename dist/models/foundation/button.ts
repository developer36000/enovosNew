import { get, has } from 'lodash-es';

export interface IButton {
  id: string;
  size ?: string;
  textOnly ?: boolean;
  outlined ?: boolean;
  expand ?: boolean;
  disabled ?: boolean;
  rounded ?: boolean;
  content ?: string;
  styles ?: string;
  iconPosition ?: string;
  iconStyles ?: string;
  icon ?: string;
}

export class Button implements IButton {

  id: string;
  size: string;
  textOnly: boolean;
  outlined: boolean;
  expand: boolean;
  disabled: boolean;
  rounded: boolean;
  content: string;
  styles: string;
  iconPosition: string;
  iconStyles: string;
  icon: string;

  constructor(obj: IButton) {
    // make DatalistItemData idempotent
    if (obj instanceof Button) {
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
