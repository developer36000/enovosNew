import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';
export class DatalistItemDataConfig {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataConfig) {
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
export class DatalistItemDataLink {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataLink) {
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
export class DatalistItemDataIcon {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataIcon) {
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
export class DatalistItemDataRadio {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataRadio) {
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
export class DatalistItemDataBadge {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataBadge) {
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
export class DatalistItemCollapsed {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemCollapsed) {
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
export class DatalistItemDataStyles {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemDataStyles) {
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
export class DatalistItemData {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemData) {
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
export class DatalistItem {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }
    this.uid = uuidv4();
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
