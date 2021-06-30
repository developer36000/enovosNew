import { get, has, set } from 'lodash-es';
export class CardNotificationIcon {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationIcon) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationHeaderLeading {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderLeading) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationHeaderTrailing {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderTrailing) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationHeader {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationHeaderTrailing) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationFooterLeading {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterLeading) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationFooterTrailing {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterTrailing) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationFooter {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationFooterTrailing) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
export class CardNotificationData {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof CardNotificationData) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}
