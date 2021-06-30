import { get, has, set } from 'lodash-es';
export class NavigationTrailingItemBadge {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationTrailingItemBadge) {
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
export class NavigationTrailingItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationTrailingItem) {
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
export class NavigationItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationItem) {
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
