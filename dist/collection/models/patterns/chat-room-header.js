import { get, has } from 'lodash-es';
export class ChatRoomHeaderImage {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderImage) {
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
export class ChatRoomHeaderText {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderText) {
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
export class ChatRoomHeaderBadge {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeaderBadge) {
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
export class ChatRoomHeader {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ChatRoomHeader) {
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
