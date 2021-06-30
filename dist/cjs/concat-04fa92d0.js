'use strict';

const toString = require('./toString-a99a8519.js');
const _copyArray = require('./_copyArray-16797645.js');
const _arrayPush = require('./_arrayPush-d8c0eb40.js');
const _baseFlatten = require('./_baseFlatten-e12e1365.js');

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return _arrayPush.arrayPush(toString.isArray(array) ? _copyArray.copyArray(array) : [array], _baseFlatten.baseFlatten(args, 1));
}

exports.concat = concat;
