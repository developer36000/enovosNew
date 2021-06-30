import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has } from 'lodash-es';
export class MessageOptions {
  constructor(obj) {
    if (obj instanceof MessageOptions) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
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
export class MessageButton {
  constructor(obj) {
    if (obj instanceof MessageButton) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
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
export class Message {
  constructor(obj) {
    if (obj instanceof Message) {
      return obj;
    }
    this.uid = has(obj, 'uid') ? get(obj, 'uid') : uuidv4();
    // Add props
    for (const name of Object.keys(obj)) {
      if (has(obj, name)) {
        this[name] = obj[name];
      }
    }
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
