import { get, has, set } from 'lodash-es';

// Icon
export interface ICardNotificationIcon {
  icon?: string;
  styles?: string;
}

export class CardNotificationIcon implements ICardNotificationIcon {
  icon: string;
  styles: string;

  constructor(obj: ICardNotificationIcon) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationIcon) {
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

// Header leading
export interface ICardNotificationHeaderLeading {
  styles?: string;
  content?: string;
}

export class CardNotificationHeaderLeading implements ICardNotificationHeaderLeading {
  styles?: string;
  content?: string;

  constructor(obj: ICardNotificationHeaderLeading) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderLeading) {
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
// Header trailing
export interface ICardNotificationHeaderTrailing {
  images?: [];
  tooltip?: object;
}

export class CardNotificationHeaderTrailing implements ICardNotificationHeaderTrailing {
  images?: [];
  tooltip?: object;

  constructor(obj: ICardNotificationHeaderTrailing) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderTrailing) {
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

// Header
export interface ICardNotificationHeader {
  headerLeading ?: CardNotificationHeaderLeading;
  headerTrailing ?: CardNotificationHeaderTrailing;
}

export class CardNotificationHeader implements ICardNotificationHeader {
  headerLeading ?: CardNotificationHeaderLeading;
  headerTrailing ?: CardNotificationHeaderTrailing;

  constructor(obj: ICardNotificationHeader) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderTrailing) {
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

// Footer leading
export interface ICardNotificationFooterLeading {
  message?: object;
}

export class CardNotificationFooterLeading implements ICardNotificationFooterLeading {
  message?: object;

  constructor(obj: ICardNotificationFooterLeading) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterLeading) {
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

// Footer trailing
export interface ICardNotificationFooterTrailing {
  button?: object;
}

export class CardNotificationFooterTrailing implements ICardNotificationFooterTrailing {
  button?: object;

  constructor(obj: ICardNotificationFooterTrailing) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterTrailing) {
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

// Footer
export interface ICardNotificationFooter {
  footerLeading ?: CardNotificationFooterLeading;
  footerTrailing ?: CardNotificationFooterTrailing;
}

export class CardNotificationFooter implements ICardNotificationFooter {
  footerLeading ?: CardNotificationFooterLeading;
  footerTrailing ?: CardNotificationFooterTrailing;

  constructor(obj: ICardNotificationFooter) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterTrailing) {
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

// Data
export interface ICardNotificationData {
  icon ?: CardNotificationIcon;
  header ?: CardNotificationHeader;
  footer ?: CardNotificationFooter;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class CardNotificationData implements ICardNotificationData {
  icon ?: CardNotificationIcon;
  header ?: CardNotificationHeader;
  footer ?: CardNotificationFooter;

  constructor(obj: ICardNotificationData) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationData) {
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