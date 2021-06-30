'use strict';

const _baseIsEqual = require('./_baseIsEqual-c7788197.js');
const _baseIteratee = require('./_baseIteratee-1cf7cbd5.js');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!_baseIsEqual.isArrayLike(collection)) {
      var iteratee = _baseIteratee.baseIteratee(predicate);
      collection = _baseIsEqual.keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

exports.createFind = createFind;
