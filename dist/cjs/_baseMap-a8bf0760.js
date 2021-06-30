'use strict';

const _baseIsEqual = require('./_baseIsEqual-c7788197.js');
const _baseEach = require('./_baseEach-0b5062cd.js');

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = _baseIsEqual.isArrayLike(collection) ? Array(collection.length) : [];

  _baseEach.baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

exports.baseMap = baseMap;
