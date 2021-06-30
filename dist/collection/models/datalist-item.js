import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has } from 'lodash-es';
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
}
export class DatalistItem {
  constructor(obj) {
    this.props = {
      id: 'string',
      uid: 'number',
      template: 'string',
      type: 'string',
      alias: 'string',
      data: 'object',
      children: 'array',
      parent: 'number',
      even: 'boolean',
      highlight: 'string',
      accordion: 'boolean',
      collapsed: 'object',
      styles: 'string',
    };
    // make DatalistItem idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }
    this.uid = uuidv4();
    // Add props
    for (const name in this.props) {
      if (this.props.hasOwnProperty(name)
        && has(obj, name)
        && ((typeof obj[name] === this.props[name]) ||
          (this.props[name] === 'array' && this.isArray(obj[name])))) {
        this[name] = obj[name];
      }
    }
  }
  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }
  setProp(name, value) {
    this[name] = value;
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}
