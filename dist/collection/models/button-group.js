import { get, has } from 'lodash-es';
export class ButtonGroupItemBadge {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ButtonGroupItemBadge) {
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
export class ButtonGroupItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ButtonGroupItem) {
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
