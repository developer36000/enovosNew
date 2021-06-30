'use strict';

const toString = require('./toString-a99a8519.js');
const _baseIsEqual = require('./_baseIsEqual-c7788197.js');
const _hasPath = require('./_hasPath-fb5594fa.js');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (_baseIsEqual.isArrayLike(value) &&
      (toString.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        _baseIsEqual.isBuffer(value) || _baseIsEqual.isTypedArray(value) || _hasPath.isArguments(value))) {
    return !value.length;
  }
  var tag = _baseIsEqual.getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_baseIsEqual.isPrototype(value)) {
    return !_baseIsEqual.baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

exports.isEmpty = isEmpty;
