import { b as baseGetTag } from './_baseGetTag-accbac5b.js';
import { i as isObjectLike } from './isSymbol-94e88fb4.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import { h as has } from './has-1e48d487.js';
import { v as v4_1 } from './v4-4d460ace.js';

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

class MessageButton {
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
class Message {
  constructor(obj) {
    if (obj instanceof Message) {
      return obj;
    }
    this.uid = has(obj, 'uid') ? get(obj, 'uid') : v4_1();
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

export { Message as M, MessageButton as a, isNumber as i };
