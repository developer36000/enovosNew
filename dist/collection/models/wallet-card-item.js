import { get, has } from 'lodash-es';
export class WalletCardItemBounding {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof WalletCardItemBounding) {
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
export class WalletCardItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof WalletCardItem) {
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
