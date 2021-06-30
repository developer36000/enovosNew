'use strict';

const _baseGetTag = require('./_baseGetTag-1e305d19.js');
const isSymbol = require('./isSymbol-04330316.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
const has = require('./has-c1d0fffa.js');
const v4 = require('./v4-378e0891.js');

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
    (isSymbol.isObjectLike(value) && _baseGetTag.baseGetTag(value) == numberTag);
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
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
}
class Message {
  constructor(obj) {
    if (obj instanceof Message) {
      return obj;
    }
    this.uid = has.has(obj, 'uid') ? _hasPath.get(obj, 'uid') : v4.v4_1();
    // Add props
    for (const name of Object.keys(obj)) {
      if (has.has(obj, name)) {
        this[name] = obj[name];
      }
    }
  }
  setProp(name, value) {
    this[name] = value;
  }
  getProp(key) {
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
}

exports.Message = Message;
exports.MessageButton = MessageButton;
exports.isNumber = isNumber;
