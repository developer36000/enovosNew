import { get, has } from 'lodash-es';
export class AdvancedCardMetrics {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardMetrics) {
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
export class AdvancedCardImage {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardImage) {
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
export class AdvancedCardBadge {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardBadge) {
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
export class AdvancedCardBlock {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof AdvancedCardBlock) {
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
