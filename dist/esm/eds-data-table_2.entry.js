import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import { a as isSymbol } from './isSymbol-94e88fb4.js';
import { a as arrayMap, i as isArray } from './toString-e72a88e9.js';
import './toNumber-30473e8a.js';
import './isObject-7039fcda.js';
import './toInteger-521653cd.js';
import { i as identity } from './identity-5b806255.js';
import './_MapCache-a3ede28d.js';
import { l as baseUnary } from './_baseIsEqual-c6b81f6e.js';
import './_baseFindIndex-e57941fd.js';
import { b as baseGet, g as get } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_baseFlatten-59c8d422.js';
import { f as flatten } from './flatten-b33122fe.js';
import './_setToArray-60932de0.js';
import { c as compact } from './compact-c11bf240.js';
import { b as baseIteratee } from './_baseIteratee-93849f60.js';
import './_baseProperty-e57e2f20.js';
import './_baseEach-9cdd008c.js';
import { f as findIndex } from './findIndex-98e7efdf.js';
import { b as baseMap } from './_baseMap-2384d8c1.js';
import { h as has } from './has-1e48d487.js';
import { u as uniqueId } from './uniqueId-a86eb722.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { L as LayoutPropsHelper } from './LayoutPropsHelper-9f96c6ed.js';
import { S as StylePropsHelper } from './StylePropsHelper-cfc9e3bf.js';

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

const dataTableCss = ".margin-top-0,[margin-top-0]{margin-top:0px !important}.padding-top-0,[padding-top-0]{padding-top:0px !important}.margin-bottom-0,[margin-bottom-0]{margin-bottom:0px !important}.padding-bottom-0,[padding-bottom-0]{padding-bottom:0px !important}.margin-left-0,[margin-left-0]{margin-left:0px !important}.padding-left-0,[padding-left-0]{padding-left:0px !important}.margin-right-0,[margin-right-0]{margin-right:0px !important}.padding-right-0,[padding-right-0]{padding-right:0px !important}.margin-top-1,[margin-top-1]{margin-top:8px !important}.padding-top-1,[padding-top-1]{padding-top:8px !important}.margin-bottom-1,[margin-bottom-1]{margin-bottom:8px !important}.padding-bottom-1,[padding-bottom-1]{padding-bottom:8px !important}.margin-left-1,[margin-left-1]{margin-left:8px !important}.padding-left-1,[padding-left-1]{padding-left:8px !important}.margin-right-1,[margin-right-1]{margin-right:8px !important}.padding-right-1,[padding-right-1]{padding-right:8px !important}.margin-top-2,[margin-top-2]{margin-top:16px !important}.padding-top-2,[padding-top-2]{padding-top:16px !important}.margin-bottom-2,[margin-bottom-2]{margin-bottom:16px !important}.padding-bottom-2,[padding-bottom-2]{padding-bottom:16px !important}.margin-left-2,[margin-left-2]{margin-left:16px !important}.padding-left-2,[padding-left-2]{padding-left:16px !important}.margin-right-2,[margin-right-2]{margin-right:16px !important}.padding-right-2,[padding-right-2]{padding-right:16px !important}.margin-top-3,[margin-top-3]{margin-top:24px !important}.padding-top-3,[padding-top-3]{padding-top:24px !important}.margin-bottom-3,[margin-bottom-3]{margin-bottom:24px !important}.padding-bottom-3,[padding-bottom-3]{padding-bottom:24px !important}.margin-left-3,[margin-left-3]{margin-left:24px !important}.padding-left-3,[padding-left-3]{padding-left:24px !important}.margin-right-3,[margin-right-3]{margin-right:24px !important}.padding-right-3,[padding-right-3]{padding-right:24px !important}.margin-top-4,[margin-top-4]{margin-top:32px !important}.padding-top-4,[padding-top-4]{padding-top:32px !important}.margin-bottom-4,[margin-bottom-4]{margin-bottom:32px !important}.padding-bottom-4,[padding-bottom-4]{padding-bottom:32px !important}.margin-left-4,[margin-left-4]{margin-left:32px !important}.padding-left-4,[padding-left-4]{padding-left:32px !important}.margin-right-4,[margin-right-4]{margin-right:32px !important}.padding-right-4,[padding-right-4]{padding-right:32px !important}.margin-top-5,[margin-top-5]{margin-top:40px !important}.padding-top-5,[padding-top-5]{padding-top:40px !important}.margin-bottom-5,[margin-bottom-5]{margin-bottom:40px !important}.padding-bottom-5,[padding-bottom-5]{padding-bottom:40px !important}.margin-left-5,[margin-left-5]{margin-left:40px !important}.padding-left-5,[padding-left-5]{padding-left:40px !important}.margin-right-5,[margin-right-5]{margin-right:40px !important}.padding-right-5,[padding-right-5]{padding-right:40px !important}.margin-top-6,[margin-top-6]{margin-top:48px !important}.padding-top-6,[padding-top-6]{padding-top:48px !important}.margin-bottom-6,[margin-bottom-6]{margin-bottom:48px !important}.padding-bottom-6,[padding-bottom-6]{padding-bottom:48px !important}.margin-left-6,[margin-left-6]{margin-left:48px !important}.padding-left-6,[padding-left-6]{padding-left:48px !important}.margin-right-6,[margin-right-6]{margin-right:48px !important}.padding-right-6,[padding-right-6]{padding-right:48px !important}.margin-top-7,[margin-top-7]{margin-top:56px !important}.padding-top-7,[padding-top-7]{padding-top:56px !important}.margin-bottom-7,[margin-bottom-7]{margin-bottom:56px !important}.padding-bottom-7,[padding-bottom-7]{padding-bottom:56px !important}.margin-left-7,[margin-left-7]{margin-left:56px !important}.padding-left-7,[padding-left-7]{padding-left:56px !important}.margin-right-7,[margin-right-7]{margin-right:56px !important}.padding-right-7,[padding-right-7]{padding-right:56px !important}.margin-top-8,[margin-top-8]{margin-top:64px !important}.padding-top-8,[padding-top-8]{padding-top:64px !important}.margin-bottom-8,[margin-bottom-8]{margin-bottom:64px !important}.padding-bottom-8,[padding-bottom-8]{padding-bottom:64px !important}.margin-left-8,[margin-left-8]{margin-left:64px !important}.padding-left-8,[padding-left-8]{padding-left:64px !important}.margin-right-8,[margin-right-8]{margin-right:64px !important}.padding-right-8,[padding-right-8]{padding-right:64px !important}.margin-top-9,[margin-top-9]{margin-top:72px !important}.padding-top-9,[padding-top-9]{padding-top:72px !important}.margin-bottom-9,[margin-bottom-9]{margin-bottom:72px !important}.padding-bottom-9,[padding-bottom-9]{padding-bottom:72px !important}.margin-left-9,[margin-left-9]{margin-left:72px !important}.padding-left-9,[padding-left-9]{padding-left:72px !important}.margin-right-9,[margin-right-9]{margin-right:72px !important}.padding-right-9,[padding-right-9]{padding-right:72px !important}.margin-top-10,[margin-top-10]{margin-top:80px !important}.padding-top-10,[padding-top-10]{padding-top:80px !important}.margin-bottom-10,[margin-bottom-10]{margin-bottom:80px !important}.padding-bottom-10,[padding-bottom-10]{padding-bottom:80px !important}.margin-left-10,[margin-left-10]{margin-left:80px !important}.padding-left-10,[padding-left-10]{padding-left:80px !important}.margin-right-10,[margin-right-10]{margin-right:80px !important}.padding-right-10,[padding-right-10]{padding-right:80px !important}.margin-top-11,[margin-top-11]{margin-top:88px !important}.padding-top-11,[padding-top-11]{padding-top:88px !important}.margin-bottom-11,[margin-bottom-11]{margin-bottom:88px !important}.padding-bottom-11,[padding-bottom-11]{padding-bottom:88px !important}.margin-left-11,[margin-left-11]{margin-left:88px !important}.padding-left-11,[padding-left-11]{padding-left:88px !important}.margin-right-11,[margin-right-11]{margin-right:88px !important}.padding-right-11,[padding-right-11]{padding-right:88px !important}.margin-top-12,[margin-top-12]{margin-top:96px !important}.padding-top-12,[padding-top-12]{padding-top:96px !important}.margin-bottom-12,[margin-bottom-12]{margin-bottom:96px !important}.padding-bottom-12,[padding-bottom-12]{padding-bottom:96px !important}.margin-left-12,[margin-left-12]{margin-left:96px !important}.padding-left-12,[padding-left-12]{padding-left:96px !important}.margin-right-12,[margin-right-12]{margin-right:96px !important}.padding-right-12,[padding-right-12]{padding-right:96px !important}.margin-top-13,[margin-top-13]{margin-top:104px !important}.padding-top-13,[padding-top-13]{padding-top:104px !important}.margin-bottom-13,[margin-bottom-13]{margin-bottom:104px !important}.padding-bottom-13,[padding-bottom-13]{padding-bottom:104px !important}.margin-left-13,[margin-left-13]{margin-left:104px !important}.padding-left-13,[padding-left-13]{padding-left:104px !important}.margin-right-13,[margin-right-13]{margin-right:104px !important}.padding-right-13,[padding-right-13]{padding-right:104px !important}.margin-top-14,[margin-top-14]{margin-top:112px !important}.padding-top-14,[padding-top-14]{padding-top:112px !important}.margin-bottom-14,[margin-bottom-14]{margin-bottom:112px !important}.padding-bottom-14,[padding-bottom-14]{padding-bottom:112px !important}.margin-left-14,[margin-left-14]{margin-left:112px !important}.padding-left-14,[padding-left-14]{padding-left:112px !important}.margin-right-14,[margin-right-14]{margin-right:112px !important}.padding-right-14,[padding-right-14]{padding-right:112px !important}.margin-top-15,[margin-top-15]{margin-top:120px !important}.padding-top-15,[padding-top-15]{padding-top:120px !important}.margin-bottom-15,[margin-bottom-15]{margin-bottom:120px !important}.padding-bottom-15,[padding-bottom-15]{padding-bottom:120px !important}.margin-left-15,[margin-left-15]{margin-left:120px !important}.padding-left-15,[padding-left-15]{padding-left:120px !important}.margin-right-15,[margin-right-15]{margin-right:120px !important}.padding-right-15,[padding-right-15]{padding-right:120px !important}.margin-top-16,[margin-top-16]{margin-top:128px !important}.padding-top-16,[padding-top-16]{padding-top:128px !important}.margin-bottom-16,[margin-bottom-16]{margin-bottom:128px !important}.padding-bottom-16,[padding-bottom-16]{padding-bottom:128px !important}.margin-left-16,[margin-left-16]{margin-left:128px !important}.padding-left-16,[padding-left-16]{padding-left:128px !important}.margin-right-16,[margin-right-16]{margin-right:128px !important}.padding-right-16,[padding-right-16]{padding-right:128px !important}.margin-top-17,[margin-top-17]{margin-top:136px !important}.padding-top-17,[padding-top-17]{padding-top:136px !important}.margin-bottom-17,[margin-bottom-17]{margin-bottom:136px !important}.padding-bottom-17,[padding-bottom-17]{padding-bottom:136px !important}.margin-left-17,[margin-left-17]{margin-left:136px !important}.padding-left-17,[padding-left-17]{padding-left:136px !important}.margin-right-17,[margin-right-17]{margin-right:136px !important}.padding-right-17,[padding-right-17]{padding-right:136px !important}.margin-top-18,[margin-top-18]{margin-top:144px !important}.padding-top-18,[padding-top-18]{padding-top:144px !important}.margin-bottom-18,[margin-bottom-18]{margin-bottom:144px !important}.padding-bottom-18,[padding-bottom-18]{padding-bottom:144px !important}.margin-left-18,[margin-left-18]{margin-left:144px !important}.padding-left-18,[padding-left-18]{padding-left:144px !important}.margin-right-18,[margin-right-18]{margin-right:144px !important}.padding-right-18,[padding-right-18]{padding-right:144px !important}.margin-top-19,[margin-top-19]{margin-top:152px !important}.padding-top-19,[padding-top-19]{padding-top:152px !important}.margin-bottom-19,[margin-bottom-19]{margin-bottom:152px !important}.padding-bottom-19,[padding-bottom-19]{padding-bottom:152px !important}.margin-left-19,[margin-left-19]{margin-left:152px !important}.padding-left-19,[padding-left-19]{padding-left:152px !important}.margin-right-19,[margin-right-19]{margin-right:152px !important}.padding-right-19,[padding-right-19]{padding-right:152px !important}.margin-top-20,[margin-top-20]{margin-top:160px !important}.padding-top-20,[padding-top-20]{padding-top:160px !important}.margin-bottom-20,[margin-bottom-20]{margin-bottom:160px !important}.padding-bottom-20,[padding-bottom-20]{padding-bottom:160px !important}.margin-left-20,[margin-left-20]{margin-left:160px !important}.padding-left-20,[padding-left-20]{padding-left:160px !important}.margin-right-20,[margin-right-20]{margin-right:160px !important}.padding-right-20,[padding-right-20]{padding-right:160px !important}.margin-top-21,[margin-top-21]{margin-top:168px !important}.padding-top-21,[padding-top-21]{padding-top:168px !important}.margin-bottom-21,[margin-bottom-21]{margin-bottom:168px !important}.padding-bottom-21,[padding-bottom-21]{padding-bottom:168px !important}.margin-left-21,[margin-left-21]{margin-left:168px !important}.padding-left-21,[padding-left-21]{padding-left:168px !important}.margin-right-21,[margin-right-21]{margin-right:168px !important}.padding-right-21,[padding-right-21]{padding-right:168px !important}.margin-top-22,[margin-top-22]{margin-top:176px !important}.padding-top-22,[padding-top-22]{padding-top:176px !important}.margin-bottom-22,[margin-bottom-22]{margin-bottom:176px !important}.padding-bottom-22,[padding-bottom-22]{padding-bottom:176px !important}.margin-left-22,[margin-left-22]{margin-left:176px !important}.padding-left-22,[padding-left-22]{padding-left:176px !important}.margin-right-22,[margin-right-22]{margin-right:176px !important}.padding-right-22,[padding-right-22]{padding-right:176px !important}.margin-top-23,[margin-top-23]{margin-top:184px !important}.padding-top-23,[padding-top-23]{padding-top:184px !important}.margin-bottom-23,[margin-bottom-23]{margin-bottom:184px !important}.padding-bottom-23,[padding-bottom-23]{padding-bottom:184px !important}.margin-left-23,[margin-left-23]{margin-left:184px !important}.padding-left-23,[padding-left-23]{padding-left:184px !important}.margin-right-23,[margin-right-23]{margin-right:184px !important}.padding-right-23,[padding-right-23]{padding-right:184px !important}.margin-top-24,[margin-top-24]{margin-top:192px !important}.padding-top-24,[padding-top-24]{padding-top:192px !important}.margin-bottom-24,[margin-bottom-24]{margin-bottom:192px !important}.padding-bottom-24,[padding-bottom-24]{padding-bottom:192px !important}.margin-left-24,[margin-left-24]{margin-left:192px !important}.padding-left-24,[padding-left-24]{padding-left:192px !important}.margin-right-24,[margin-right-24]{margin-right:192px !important}.padding-right-24,[padding-right-24]{padding-right:192px !important}.margin-top-25,[margin-top-25]{margin-top:200px !important}.padding-top-25,[padding-top-25]{padding-top:200px !important}.margin-bottom-25,[margin-bottom-25]{margin-bottom:200px !important}.padding-bottom-25,[padding-bottom-25]{padding-bottom:200px !important}.margin-left-25,[margin-left-25]{margin-left:200px !important}.padding-left-25,[padding-left-25]{padding-left:200px !important}.margin-right-25,[margin-right-25]{margin-right:200px !important}.padding-right-25,[padding-right-25]{padding-right:200px !important}.margin-top-26,[margin-top-26]{margin-top:208px !important}.padding-top-26,[padding-top-26]{padding-top:208px !important}.margin-bottom-26,[margin-bottom-26]{margin-bottom:208px !important}.padding-bottom-26,[padding-bottom-26]{padding-bottom:208px !important}.margin-left-26,[margin-left-26]{margin-left:208px !important}.padding-left-26,[padding-left-26]{padding-left:208px !important}.margin-right-26,[margin-right-26]{margin-right:208px !important}.padding-right-26,[padding-right-26]{padding-right:208px !important}.margin-top-27,[margin-top-27]{margin-top:216px !important}.padding-top-27,[padding-top-27]{padding-top:216px !important}.margin-bottom-27,[margin-bottom-27]{margin-bottom:216px !important}.padding-bottom-27,[padding-bottom-27]{padding-bottom:216px !important}.margin-left-27,[margin-left-27]{margin-left:216px !important}.padding-left-27,[padding-left-27]{padding-left:216px !important}.margin-right-27,[margin-right-27]{margin-right:216px !important}.padding-right-27,[padding-right-27]{padding-right:216px !important}.margin-top-28,[margin-top-28]{margin-top:224px !important}.padding-top-28,[padding-top-28]{padding-top:224px !important}.margin-bottom-28,[margin-bottom-28]{margin-bottom:224px !important}.padding-bottom-28,[padding-bottom-28]{padding-bottom:224px !important}.margin-left-28,[margin-left-28]{margin-left:224px !important}.padding-left-28,[padding-left-28]{padding-left:224px !important}.margin-right-28,[margin-right-28]{margin-right:224px !important}.padding-right-28,[padding-right-28]{padding-right:224px !important}.margin-top-29,[margin-top-29]{margin-top:232px !important}.padding-top-29,[padding-top-29]{padding-top:232px !important}.margin-bottom-29,[margin-bottom-29]{margin-bottom:232px !important}.padding-bottom-29,[padding-bottom-29]{padding-bottom:232px !important}.margin-left-29,[margin-left-29]{margin-left:232px !important}.padding-left-29,[padding-left-29]{padding-left:232px !important}.margin-right-29,[margin-right-29]{margin-right:232px !important}.padding-right-29,[padding-right-29]{padding-right:232px !important}.margin-top-30,[margin-top-30]{margin-top:240px !important}.padding-top-30,[padding-top-30]{padding-top:240px !important}.margin-bottom-30,[margin-bottom-30]{margin-bottom:240px !important}.padding-bottom-30,[padding-bottom-30]{padding-bottom:240px !important}.margin-left-30,[margin-left-30]{margin-left:240px !important}.padding-left-30,[padding-left-30]{padding-left:240px !important}.margin-right-30,[margin-right-30]{margin-right:240px !important}.padding-right-30,[padding-right-30]{padding-right:240px !important}.margin-top-31,[margin-top-31]{margin-top:248px !important}.padding-top-31,[padding-top-31]{padding-top:248px !important}.margin-bottom-31,[margin-bottom-31]{margin-bottom:248px !important}.padding-bottom-31,[padding-bottom-31]{padding-bottom:248px !important}.margin-left-31,[margin-left-31]{margin-left:248px !important}.padding-left-31,[padding-left-31]{padding-left:248px !important}.margin-right-31,[margin-right-31]{margin-right:248px !important}.padding-right-31,[padding-right-31]{padding-right:248px !important}.margin-top-32,[margin-top-32]{margin-top:256px !important}.padding-top-32,[padding-top-32]{padding-top:256px !important}.margin-bottom-32,[margin-bottom-32]{margin-bottom:256px !important}.padding-bottom-32,[padding-bottom-32]{padding-bottom:256px !important}.margin-left-32,[margin-left-32]{margin-left:256px !important}.padding-left-32,[padding-left-32]{padding-left:256px !important}.margin-right-32,[margin-right-32]{margin-right:256px !important}.padding-right-32,[padding-right-32]{padding-right:256px !important}.margin-top-33,[margin-top-33]{margin-top:264px !important}.padding-top-33,[padding-top-33]{padding-top:264px !important}.margin-bottom-33,[margin-bottom-33]{margin-bottom:264px !important}.padding-bottom-33,[padding-bottom-33]{padding-bottom:264px !important}.margin-left-33,[margin-left-33]{margin-left:264px !important}.padding-left-33,[padding-left-33]{padding-left:264px !important}.margin-right-33,[margin-right-33]{margin-right:264px !important}.padding-right-33,[padding-right-33]{padding-right:264px !important}.margin-top-34,[margin-top-34]{margin-top:272px !important}.padding-top-34,[padding-top-34]{padding-top:272px !important}.margin-bottom-34,[margin-bottom-34]{margin-bottom:272px !important}.padding-bottom-34,[padding-bottom-34]{padding-bottom:272px !important}.margin-left-34,[margin-left-34]{margin-left:272px !important}.padding-left-34,[padding-left-34]{padding-left:272px !important}.margin-right-34,[margin-right-34]{margin-right:272px !important}.padding-right-34,[padding-right-34]{padding-right:272px !important}.margin-top-35,[margin-top-35]{margin-top:280px !important}.padding-top-35,[padding-top-35]{padding-top:280px !important}.margin-bottom-35,[margin-bottom-35]{margin-bottom:280px !important}.padding-bottom-35,[padding-bottom-35]{padding-bottom:280px !important}.margin-left-35,[margin-left-35]{margin-left:280px !important}.padding-left-35,[padding-left-35]{padding-left:280px !important}.margin-right-35,[margin-right-35]{margin-right:280px !important}.padding-right-35,[padding-right-35]{padding-right:280px !important}.margin-top-36,[margin-top-36]{margin-top:288px !important}.padding-top-36,[padding-top-36]{padding-top:288px !important}.margin-bottom-36,[margin-bottom-36]{margin-bottom:288px !important}.padding-bottom-36,[padding-bottom-36]{padding-bottom:288px !important}.margin-left-36,[margin-left-36]{margin-left:288px !important}.padding-left-36,[padding-left-36]{padding-left:288px !important}.margin-right-36,[margin-right-36]{margin-right:288px !important}.padding-right-36,[padding-right-36]{padding-right:288px !important}.margin-top-37,[margin-top-37]{margin-top:296px !important}.padding-top-37,[padding-top-37]{padding-top:296px !important}.margin-bottom-37,[margin-bottom-37]{margin-bottom:296px !important}.padding-bottom-37,[padding-bottom-37]{padding-bottom:296px !important}.margin-left-37,[margin-left-37]{margin-left:296px !important}.padding-left-37,[padding-left-37]{padding-left:296px !important}.margin-right-37,[margin-right-37]{margin-right:296px !important}.padding-right-37,[padding-right-37]{padding-right:296px !important}.margin-top-38,[margin-top-38]{margin-top:304px !important}.padding-top-38,[padding-top-38]{padding-top:304px !important}.margin-bottom-38,[margin-bottom-38]{margin-bottom:304px !important}.padding-bottom-38,[padding-bottom-38]{padding-bottom:304px !important}.margin-left-38,[margin-left-38]{margin-left:304px !important}.padding-left-38,[padding-left-38]{padding-left:304px !important}.margin-right-38,[margin-right-38]{margin-right:304px !important}.padding-right-38,[padding-right-38]{padding-right:304px !important}.margin-top-39,[margin-top-39]{margin-top:312px !important}.padding-top-39,[padding-top-39]{padding-top:312px !important}.margin-bottom-39,[margin-bottom-39]{margin-bottom:312px !important}.padding-bottom-39,[padding-bottom-39]{padding-bottom:312px !important}.margin-left-39,[margin-left-39]{margin-left:312px !important}.padding-left-39,[padding-left-39]{padding-left:312px !important}.margin-right-39,[margin-right-39]{margin-right:312px !important}.padding-right-39,[padding-right-39]{padding-right:312px !important}.margin-top-40,[margin-top-40]{margin-top:320px !important}.padding-top-40,[padding-top-40]{padding-top:320px !important}.margin-bottom-40,[margin-bottom-40]{margin-bottom:320px !important}.padding-bottom-40,[padding-bottom-40]{padding-bottom:320px !important}.margin-left-40,[margin-left-40]{margin-left:320px !important}.padding-left-40,[padding-left-40]{padding-left:320px !important}.margin-right-40,[margin-right-40]{margin-right:320px !important}.padding-right-40,[padding-right-40]{padding-right:320px !important}[name=data-table]{display:block;width:100%}[name=data-table] .data-table--margin-top-0,[name=data-table] .data-table[margin-top-0]{margin-top:0px !important}[name=data-table] .data-table--padding-top-0,[name=data-table] .data-table[padding-top-0]{padding-top:0px !important}[name=data-table] .data-table--margin-bottom-0,[name=data-table] .data-table[margin-bottom-0]{margin-bottom:0px !important}[name=data-table] .data-table--padding-bottom-0,[name=data-table] .data-table[padding-bottom-0]{padding-bottom:0px !important}[name=data-table] .data-table--margin-left-0,[name=data-table] .data-table[margin-left-0]{margin-left:0px !important}[name=data-table] .data-table--padding-left-0,[name=data-table] .data-table[padding-left-0]{padding-left:0px !important}[name=data-table] .data-table--margin-right-0,[name=data-table] .data-table[margin-right-0]{margin-right:0px !important}[name=data-table] .data-table--padding-right-0,[name=data-table] .data-table[padding-right-0]{padding-right:0px !important}[name=data-table] .data-table--margin-top-1,[name=data-table] .data-table[margin-top-1]{margin-top:8px !important}[name=data-table] .data-table--padding-top-1,[name=data-table] .data-table[padding-top-1]{padding-top:8px !important}[name=data-table] .data-table--margin-bottom-1,[name=data-table] .data-table[margin-bottom-1]{margin-bottom:8px !important}[name=data-table] .data-table--padding-bottom-1,[name=data-table] .data-table[padding-bottom-1]{padding-bottom:8px !important}[name=data-table] .data-table--margin-left-1,[name=data-table] .data-table[margin-left-1]{margin-left:8px !important}[name=data-table] .data-table--padding-left-1,[name=data-table] .data-table[padding-left-1]{padding-left:8px !important}[name=data-table] .data-table--margin-right-1,[name=data-table] .data-table[margin-right-1]{margin-right:8px !important}[name=data-table] .data-table--padding-right-1,[name=data-table] .data-table[padding-right-1]{padding-right:8px !important}[name=data-table] .data-table--margin-top-2,[name=data-table] .data-table[margin-top-2]{margin-top:16px !important}[name=data-table] .data-table--padding-top-2,[name=data-table] .data-table[padding-top-2]{padding-top:16px !important}[name=data-table] .data-table--margin-bottom-2,[name=data-table] .data-table[margin-bottom-2]{margin-bottom:16px !important}[name=data-table] .data-table--padding-bottom-2,[name=data-table] .data-table[padding-bottom-2]{padding-bottom:16px !important}[name=data-table] .data-table--margin-left-2,[name=data-table] .data-table[margin-left-2]{margin-left:16px !important}[name=data-table] .data-table--padding-left-2,[name=data-table] .data-table[padding-left-2]{padding-left:16px !important}[name=data-table] .data-table--margin-right-2,[name=data-table] .data-table[margin-right-2]{margin-right:16px !important}[name=data-table] .data-table--padding-right-2,[name=data-table] .data-table[padding-right-2]{padding-right:16px !important}[name=data-table] .data-table--margin-top-3,[name=data-table] .data-table[margin-top-3]{margin-top:24px !important}[name=data-table] .data-table--padding-top-3,[name=data-table] .data-table[padding-top-3]{padding-top:24px !important}[name=data-table] .data-table--margin-bottom-3,[name=data-table] .data-table[margin-bottom-3]{margin-bottom:24px !important}[name=data-table] .data-table--padding-bottom-3,[name=data-table] .data-table[padding-bottom-3]{padding-bottom:24px !important}[name=data-table] .data-table--margin-left-3,[name=data-table] .data-table[margin-left-3]{margin-left:24px !important}[name=data-table] .data-table--padding-left-3,[name=data-table] .data-table[padding-left-3]{padding-left:24px !important}[name=data-table] .data-table--margin-right-3,[name=data-table] .data-table[margin-right-3]{margin-right:24px !important}[name=data-table] .data-table--padding-right-3,[name=data-table] .data-table[padding-right-3]{padding-right:24px !important}[name=data-table] .data-table--margin-top-4,[name=data-table] .data-table[margin-top-4]{margin-top:32px !important}[name=data-table] .data-table--padding-top-4,[name=data-table] .data-table[padding-top-4]{padding-top:32px !important}[name=data-table] .data-table--margin-bottom-4,[name=data-table] .data-table[margin-bottom-4]{margin-bottom:32px !important}[name=data-table] .data-table--padding-bottom-4,[name=data-table] .data-table[padding-bottom-4]{padding-bottom:32px !important}[name=data-table] .data-table--margin-left-4,[name=data-table] .data-table[margin-left-4]{margin-left:32px !important}[name=data-table] .data-table--padding-left-4,[name=data-table] .data-table[padding-left-4]{padding-left:32px !important}[name=data-table] .data-table--margin-right-4,[name=data-table] .data-table[margin-right-4]{margin-right:32px !important}[name=data-table] .data-table--padding-right-4,[name=data-table] .data-table[padding-right-4]{padding-right:32px !important}[name=data-table] .data-table--margin-top-5,[name=data-table] .data-table[margin-top-5]{margin-top:40px !important}[name=data-table] .data-table--padding-top-5,[name=data-table] .data-table[padding-top-5]{padding-top:40px !important}[name=data-table] .data-table--margin-bottom-5,[name=data-table] .data-table[margin-bottom-5]{margin-bottom:40px !important}[name=data-table] .data-table--padding-bottom-5,[name=data-table] .data-table[padding-bottom-5]{padding-bottom:40px !important}[name=data-table] .data-table--margin-left-5,[name=data-table] .data-table[margin-left-5]{margin-left:40px !important}[name=data-table] .data-table--padding-left-5,[name=data-table] .data-table[padding-left-5]{padding-left:40px !important}[name=data-table] .data-table--margin-right-5,[name=data-table] .data-table[margin-right-5]{margin-right:40px !important}[name=data-table] .data-table--padding-right-5,[name=data-table] .data-table[padding-right-5]{padding-right:40px !important}[name=data-table] .data-table--margin-top-6,[name=data-table] .data-table[margin-top-6]{margin-top:48px !important}[name=data-table] .data-table--padding-top-6,[name=data-table] .data-table[padding-top-6]{padding-top:48px !important}[name=data-table] .data-table--margin-bottom-6,[name=data-table] .data-table[margin-bottom-6]{margin-bottom:48px !important}[name=data-table] .data-table--padding-bottom-6,[name=data-table] .data-table[padding-bottom-6]{padding-bottom:48px !important}[name=data-table] .data-table--margin-left-6,[name=data-table] .data-table[margin-left-6]{margin-left:48px !important}[name=data-table] .data-table--padding-left-6,[name=data-table] .data-table[padding-left-6]{padding-left:48px !important}[name=data-table] .data-table--margin-right-6,[name=data-table] .data-table[margin-right-6]{margin-right:48px !important}[name=data-table] .data-table--padding-right-6,[name=data-table] .data-table[padding-right-6]{padding-right:48px !important}[name=data-table] .data-table--margin-top-7,[name=data-table] .data-table[margin-top-7]{margin-top:56px !important}[name=data-table] .data-table--padding-top-7,[name=data-table] .data-table[padding-top-7]{padding-top:56px !important}[name=data-table] .data-table--margin-bottom-7,[name=data-table] .data-table[margin-bottom-7]{margin-bottom:56px !important}[name=data-table] .data-table--padding-bottom-7,[name=data-table] .data-table[padding-bottom-7]{padding-bottom:56px !important}[name=data-table] .data-table--margin-left-7,[name=data-table] .data-table[margin-left-7]{margin-left:56px !important}[name=data-table] .data-table--padding-left-7,[name=data-table] .data-table[padding-left-7]{padding-left:56px !important}[name=data-table] .data-table--margin-right-7,[name=data-table] .data-table[margin-right-7]{margin-right:56px !important}[name=data-table] .data-table--padding-right-7,[name=data-table] .data-table[padding-right-7]{padding-right:56px !important}[name=data-table] .data-table--margin-top-8,[name=data-table] .data-table[margin-top-8]{margin-top:64px !important}[name=data-table] .data-table--padding-top-8,[name=data-table] .data-table[padding-top-8]{padding-top:64px !important}[name=data-table] .data-table--margin-bottom-8,[name=data-table] .data-table[margin-bottom-8]{margin-bottom:64px !important}[name=data-table] .data-table--padding-bottom-8,[name=data-table] .data-table[padding-bottom-8]{padding-bottom:64px !important}[name=data-table] .data-table--margin-left-8,[name=data-table] .data-table[margin-left-8]{margin-left:64px !important}[name=data-table] .data-table--padding-left-8,[name=data-table] .data-table[padding-left-8]{padding-left:64px !important}[name=data-table] .data-table--margin-right-8,[name=data-table] .data-table[margin-right-8]{margin-right:64px !important}[name=data-table] .data-table--padding-right-8,[name=data-table] .data-table[padding-right-8]{padding-right:64px !important}[name=data-table] .data-table--margin-top-9,[name=data-table] .data-table[margin-top-9]{margin-top:72px !important}[name=data-table] .data-table--padding-top-9,[name=data-table] .data-table[padding-top-9]{padding-top:72px !important}[name=data-table] .data-table--margin-bottom-9,[name=data-table] .data-table[margin-bottom-9]{margin-bottom:72px !important}[name=data-table] .data-table--padding-bottom-9,[name=data-table] .data-table[padding-bottom-9]{padding-bottom:72px !important}[name=data-table] .data-table--margin-left-9,[name=data-table] .data-table[margin-left-9]{margin-left:72px !important}[name=data-table] .data-table--padding-left-9,[name=data-table] .data-table[padding-left-9]{padding-left:72px !important}[name=data-table] .data-table--margin-right-9,[name=data-table] .data-table[margin-right-9]{margin-right:72px !important}[name=data-table] .data-table--padding-right-9,[name=data-table] .data-table[padding-right-9]{padding-right:72px !important}[name=data-table] .data-table--margin-top-10,[name=data-table] .data-table[margin-top-10]{margin-top:80px !important}[name=data-table] .data-table--padding-top-10,[name=data-table] .data-table[padding-top-10]{padding-top:80px !important}[name=data-table] .data-table--margin-bottom-10,[name=data-table] .data-table[margin-bottom-10]{margin-bottom:80px !important}[name=data-table] .data-table--padding-bottom-10,[name=data-table] .data-table[padding-bottom-10]{padding-bottom:80px !important}[name=data-table] .data-table--margin-left-10,[name=data-table] .data-table[margin-left-10]{margin-left:80px !important}[name=data-table] .data-table--padding-left-10,[name=data-table] .data-table[padding-left-10]{padding-left:80px !important}[name=data-table] .data-table--margin-right-10,[name=data-table] .data-table[margin-right-10]{margin-right:80px !important}[name=data-table] .data-table--padding-right-10,[name=data-table] .data-table[padding-right-10]{padding-right:80px !important}[name=data-table] .data-table--margin-top-11,[name=data-table] .data-table[margin-top-11]{margin-top:88px !important}[name=data-table] .data-table--padding-top-11,[name=data-table] .data-table[padding-top-11]{padding-top:88px !important}[name=data-table] .data-table--margin-bottom-11,[name=data-table] .data-table[margin-bottom-11]{margin-bottom:88px !important}[name=data-table] .data-table--padding-bottom-11,[name=data-table] .data-table[padding-bottom-11]{padding-bottom:88px !important}[name=data-table] .data-table--margin-left-11,[name=data-table] .data-table[margin-left-11]{margin-left:88px !important}[name=data-table] .data-table--padding-left-11,[name=data-table] .data-table[padding-left-11]{padding-left:88px !important}[name=data-table] .data-table--margin-right-11,[name=data-table] .data-table[margin-right-11]{margin-right:88px !important}[name=data-table] .data-table--padding-right-11,[name=data-table] .data-table[padding-right-11]{padding-right:88px !important}[name=data-table] .data-table--margin-top-12,[name=data-table] .data-table[margin-top-12]{margin-top:96px !important}[name=data-table] .data-table--padding-top-12,[name=data-table] .data-table[padding-top-12]{padding-top:96px !important}[name=data-table] .data-table--margin-bottom-12,[name=data-table] .data-table[margin-bottom-12]{margin-bottom:96px !important}[name=data-table] .data-table--padding-bottom-12,[name=data-table] .data-table[padding-bottom-12]{padding-bottom:96px !important}[name=data-table] .data-table--margin-left-12,[name=data-table] .data-table[margin-left-12]{margin-left:96px !important}[name=data-table] .data-table--padding-left-12,[name=data-table] .data-table[padding-left-12]{padding-left:96px !important}[name=data-table] .data-table--margin-right-12,[name=data-table] .data-table[margin-right-12]{margin-right:96px !important}[name=data-table] .data-table--padding-right-12,[name=data-table] .data-table[padding-right-12]{padding-right:96px !important}[name=data-table] .data-table--margin-top-13,[name=data-table] .data-table[margin-top-13]{margin-top:104px !important}[name=data-table] .data-table--padding-top-13,[name=data-table] .data-table[padding-top-13]{padding-top:104px !important}[name=data-table] .data-table--margin-bottom-13,[name=data-table] .data-table[margin-bottom-13]{margin-bottom:104px !important}[name=data-table] .data-table--padding-bottom-13,[name=data-table] .data-table[padding-bottom-13]{padding-bottom:104px !important}[name=data-table] .data-table--margin-left-13,[name=data-table] .data-table[margin-left-13]{margin-left:104px !important}[name=data-table] .data-table--padding-left-13,[name=data-table] .data-table[padding-left-13]{padding-left:104px !important}[name=data-table] .data-table--margin-right-13,[name=data-table] .data-table[margin-right-13]{margin-right:104px !important}[name=data-table] .data-table--padding-right-13,[name=data-table] .data-table[padding-right-13]{padding-right:104px !important}[name=data-table] .data-table--margin-top-14,[name=data-table] .data-table[margin-top-14]{margin-top:112px !important}[name=data-table] .data-table--padding-top-14,[name=data-table] .data-table[padding-top-14]{padding-top:112px !important}[name=data-table] .data-table--margin-bottom-14,[name=data-table] .data-table[margin-bottom-14]{margin-bottom:112px !important}[name=data-table] .data-table--padding-bottom-14,[name=data-table] .data-table[padding-bottom-14]{padding-bottom:112px !important}[name=data-table] .data-table--margin-left-14,[name=data-table] .data-table[margin-left-14]{margin-left:112px !important}[name=data-table] .data-table--padding-left-14,[name=data-table] .data-table[padding-left-14]{padding-left:112px !important}[name=data-table] .data-table--margin-right-14,[name=data-table] .data-table[margin-right-14]{margin-right:112px !important}[name=data-table] .data-table--padding-right-14,[name=data-table] .data-table[padding-right-14]{padding-right:112px !important}[name=data-table] .data-table--margin-top-15,[name=data-table] .data-table[margin-top-15]{margin-top:120px !important}[name=data-table] .data-table--padding-top-15,[name=data-table] .data-table[padding-top-15]{padding-top:120px !important}[name=data-table] .data-table--margin-bottom-15,[name=data-table] .data-table[margin-bottom-15]{margin-bottom:120px !important}[name=data-table] .data-table--padding-bottom-15,[name=data-table] .data-table[padding-bottom-15]{padding-bottom:120px !important}[name=data-table] .data-table--margin-left-15,[name=data-table] .data-table[margin-left-15]{margin-left:120px !important}[name=data-table] .data-table--padding-left-15,[name=data-table] .data-table[padding-left-15]{padding-left:120px !important}[name=data-table] .data-table--margin-right-15,[name=data-table] .data-table[margin-right-15]{margin-right:120px !important}[name=data-table] .data-table--padding-right-15,[name=data-table] .data-table[padding-right-15]{padding-right:120px !important}[name=data-table] .data-table--margin-top-16,[name=data-table] .data-table[margin-top-16]{margin-top:128px !important}[name=data-table] .data-table--padding-top-16,[name=data-table] .data-table[padding-top-16]{padding-top:128px !important}[name=data-table] .data-table--margin-bottom-16,[name=data-table] .data-table[margin-bottom-16]{margin-bottom:128px !important}[name=data-table] .data-table--padding-bottom-16,[name=data-table] .data-table[padding-bottom-16]{padding-bottom:128px !important}[name=data-table] .data-table--margin-left-16,[name=data-table] .data-table[margin-left-16]{margin-left:128px !important}[name=data-table] .data-table--padding-left-16,[name=data-table] .data-table[padding-left-16]{padding-left:128px !important}[name=data-table] .data-table--margin-right-16,[name=data-table] .data-table[margin-right-16]{margin-right:128px !important}[name=data-table] .data-table--padding-right-16,[name=data-table] .data-table[padding-right-16]{padding-right:128px !important}[name=data-table] .data-table--margin-top-17,[name=data-table] .data-table[margin-top-17]{margin-top:136px !important}[name=data-table] .data-table--padding-top-17,[name=data-table] .data-table[padding-top-17]{padding-top:136px !important}[name=data-table] .data-table--margin-bottom-17,[name=data-table] .data-table[margin-bottom-17]{margin-bottom:136px !important}[name=data-table] .data-table--padding-bottom-17,[name=data-table] .data-table[padding-bottom-17]{padding-bottom:136px !important}[name=data-table] .data-table--margin-left-17,[name=data-table] .data-table[margin-left-17]{margin-left:136px !important}[name=data-table] .data-table--padding-left-17,[name=data-table] .data-table[padding-left-17]{padding-left:136px !important}[name=data-table] .data-table--margin-right-17,[name=data-table] .data-table[margin-right-17]{margin-right:136px !important}[name=data-table] .data-table--padding-right-17,[name=data-table] .data-table[padding-right-17]{padding-right:136px !important}[name=data-table] .data-table--margin-top-18,[name=data-table] .data-table[margin-top-18]{margin-top:144px !important}[name=data-table] .data-table--padding-top-18,[name=data-table] .data-table[padding-top-18]{padding-top:144px !important}[name=data-table] .data-table--margin-bottom-18,[name=data-table] .data-table[margin-bottom-18]{margin-bottom:144px !important}[name=data-table] .data-table--padding-bottom-18,[name=data-table] .data-table[padding-bottom-18]{padding-bottom:144px !important}[name=data-table] .data-table--margin-left-18,[name=data-table] .data-table[margin-left-18]{margin-left:144px !important}[name=data-table] .data-table--padding-left-18,[name=data-table] .data-table[padding-left-18]{padding-left:144px !important}[name=data-table] .data-table--margin-right-18,[name=data-table] .data-table[margin-right-18]{margin-right:144px !important}[name=data-table] .data-table--padding-right-18,[name=data-table] .data-table[padding-right-18]{padding-right:144px !important}[name=data-table] .data-table--margin-top-19,[name=data-table] .data-table[margin-top-19]{margin-top:152px !important}[name=data-table] .data-table--padding-top-19,[name=data-table] .data-table[padding-top-19]{padding-top:152px !important}[name=data-table] .data-table--margin-bottom-19,[name=data-table] .data-table[margin-bottom-19]{margin-bottom:152px !important}[name=data-table] .data-table--padding-bottom-19,[name=data-table] .data-table[padding-bottom-19]{padding-bottom:152px !important}[name=data-table] .data-table--margin-left-19,[name=data-table] .data-table[margin-left-19]{margin-left:152px !important}[name=data-table] .data-table--padding-left-19,[name=data-table] .data-table[padding-left-19]{padding-left:152px !important}[name=data-table] .data-table--margin-right-19,[name=data-table] .data-table[margin-right-19]{margin-right:152px !important}[name=data-table] .data-table--padding-right-19,[name=data-table] .data-table[padding-right-19]{padding-right:152px !important}[name=data-table] .data-table--margin-top-20,[name=data-table] .data-table[margin-top-20]{margin-top:160px !important}[name=data-table] .data-table--padding-top-20,[name=data-table] .data-table[padding-top-20]{padding-top:160px !important}[name=data-table] .data-table--margin-bottom-20,[name=data-table] .data-table[margin-bottom-20]{margin-bottom:160px !important}[name=data-table] .data-table--padding-bottom-20,[name=data-table] .data-table[padding-bottom-20]{padding-bottom:160px !important}[name=data-table] .data-table--margin-left-20,[name=data-table] .data-table[margin-left-20]{margin-left:160px !important}[name=data-table] .data-table--padding-left-20,[name=data-table] .data-table[padding-left-20]{padding-left:160px !important}[name=data-table] .data-table--margin-right-20,[name=data-table] .data-table[margin-right-20]{margin-right:160px !important}[name=data-table] .data-table--padding-right-20,[name=data-table] .data-table[padding-right-20]{padding-right:160px !important}[name=data-table] .data-table--margin-top-21,[name=data-table] .data-table[margin-top-21]{margin-top:168px !important}[name=data-table] .data-table--padding-top-21,[name=data-table] .data-table[padding-top-21]{padding-top:168px !important}[name=data-table] .data-table--margin-bottom-21,[name=data-table] .data-table[margin-bottom-21]{margin-bottom:168px !important}[name=data-table] .data-table--padding-bottom-21,[name=data-table] .data-table[padding-bottom-21]{padding-bottom:168px !important}[name=data-table] .data-table--margin-left-21,[name=data-table] .data-table[margin-left-21]{margin-left:168px !important}[name=data-table] .data-table--padding-left-21,[name=data-table] .data-table[padding-left-21]{padding-left:168px !important}[name=data-table] .data-table--margin-right-21,[name=data-table] .data-table[margin-right-21]{margin-right:168px !important}[name=data-table] .data-table--padding-right-21,[name=data-table] .data-table[padding-right-21]{padding-right:168px !important}[name=data-table] .data-table--margin-top-22,[name=data-table] .data-table[margin-top-22]{margin-top:176px !important}[name=data-table] .data-table--padding-top-22,[name=data-table] .data-table[padding-top-22]{padding-top:176px !important}[name=data-table] .data-table--margin-bottom-22,[name=data-table] .data-table[margin-bottom-22]{margin-bottom:176px !important}[name=data-table] .data-table--padding-bottom-22,[name=data-table] .data-table[padding-bottom-22]{padding-bottom:176px !important}[name=data-table] .data-table--margin-left-22,[name=data-table] .data-table[margin-left-22]{margin-left:176px !important}[name=data-table] .data-table--padding-left-22,[name=data-table] .data-table[padding-left-22]{padding-left:176px !important}[name=data-table] .data-table--margin-right-22,[name=data-table] .data-table[margin-right-22]{margin-right:176px !important}[name=data-table] .data-table--padding-right-22,[name=data-table] .data-table[padding-right-22]{padding-right:176px !important}[name=data-table] .data-table--margin-top-23,[name=data-table] .data-table[margin-top-23]{margin-top:184px !important}[name=data-table] .data-table--padding-top-23,[name=data-table] .data-table[padding-top-23]{padding-top:184px !important}[name=data-table] .data-table--margin-bottom-23,[name=data-table] .data-table[margin-bottom-23]{margin-bottom:184px !important}[name=data-table] .data-table--padding-bottom-23,[name=data-table] .data-table[padding-bottom-23]{padding-bottom:184px !important}[name=data-table] .data-table--margin-left-23,[name=data-table] .data-table[margin-left-23]{margin-left:184px !important}[name=data-table] .data-table--padding-left-23,[name=data-table] .data-table[padding-left-23]{padding-left:184px !important}[name=data-table] .data-table--margin-right-23,[name=data-table] .data-table[margin-right-23]{margin-right:184px !important}[name=data-table] .data-table--padding-right-23,[name=data-table] .data-table[padding-right-23]{padding-right:184px !important}[name=data-table] .data-table--margin-top-24,[name=data-table] .data-table[margin-top-24]{margin-top:192px !important}[name=data-table] .data-table--padding-top-24,[name=data-table] .data-table[padding-top-24]{padding-top:192px !important}[name=data-table] .data-table--margin-bottom-24,[name=data-table] .data-table[margin-bottom-24]{margin-bottom:192px !important}[name=data-table] .data-table--padding-bottom-24,[name=data-table] .data-table[padding-bottom-24]{padding-bottom:192px !important}[name=data-table] .data-table--margin-left-24,[name=data-table] .data-table[margin-left-24]{margin-left:192px !important}[name=data-table] .data-table--padding-left-24,[name=data-table] .data-table[padding-left-24]{padding-left:192px !important}[name=data-table] .data-table--margin-right-24,[name=data-table] .data-table[margin-right-24]{margin-right:192px !important}[name=data-table] .data-table--padding-right-24,[name=data-table] .data-table[padding-right-24]{padding-right:192px !important}[name=data-table] .data-table--margin-top-25,[name=data-table] .data-table[margin-top-25]{margin-top:200px !important}[name=data-table] .data-table--padding-top-25,[name=data-table] .data-table[padding-top-25]{padding-top:200px !important}[name=data-table] .data-table--margin-bottom-25,[name=data-table] .data-table[margin-bottom-25]{margin-bottom:200px !important}[name=data-table] .data-table--padding-bottom-25,[name=data-table] .data-table[padding-bottom-25]{padding-bottom:200px !important}[name=data-table] .data-table--margin-left-25,[name=data-table] .data-table[margin-left-25]{margin-left:200px !important}[name=data-table] .data-table--padding-left-25,[name=data-table] .data-table[padding-left-25]{padding-left:200px !important}[name=data-table] .data-table--margin-right-25,[name=data-table] .data-table[margin-right-25]{margin-right:200px !important}[name=data-table] .data-table--padding-right-25,[name=data-table] .data-table[padding-right-25]{padding-right:200px !important}[name=data-table] .data-table--margin-top-26,[name=data-table] .data-table[margin-top-26]{margin-top:208px !important}[name=data-table] .data-table--padding-top-26,[name=data-table] .data-table[padding-top-26]{padding-top:208px !important}[name=data-table] .data-table--margin-bottom-26,[name=data-table] .data-table[margin-bottom-26]{margin-bottom:208px !important}[name=data-table] .data-table--padding-bottom-26,[name=data-table] .data-table[padding-bottom-26]{padding-bottom:208px !important}[name=data-table] .data-table--margin-left-26,[name=data-table] .data-table[margin-left-26]{margin-left:208px !important}[name=data-table] .data-table--padding-left-26,[name=data-table] .data-table[padding-left-26]{padding-left:208px !important}[name=data-table] .data-table--margin-right-26,[name=data-table] .data-table[margin-right-26]{margin-right:208px !important}[name=data-table] .data-table--padding-right-26,[name=data-table] .data-table[padding-right-26]{padding-right:208px !important}[name=data-table] .data-table--margin-top-27,[name=data-table] .data-table[margin-top-27]{margin-top:216px !important}[name=data-table] .data-table--padding-top-27,[name=data-table] .data-table[padding-top-27]{padding-top:216px !important}[name=data-table] .data-table--margin-bottom-27,[name=data-table] .data-table[margin-bottom-27]{margin-bottom:216px !important}[name=data-table] .data-table--padding-bottom-27,[name=data-table] .data-table[padding-bottom-27]{padding-bottom:216px !important}[name=data-table] .data-table--margin-left-27,[name=data-table] .data-table[margin-left-27]{margin-left:216px !important}[name=data-table] .data-table--padding-left-27,[name=data-table] .data-table[padding-left-27]{padding-left:216px !important}[name=data-table] .data-table--margin-right-27,[name=data-table] .data-table[margin-right-27]{margin-right:216px !important}[name=data-table] .data-table--padding-right-27,[name=data-table] .data-table[padding-right-27]{padding-right:216px !important}[name=data-table] .data-table--margin-top-28,[name=data-table] .data-table[margin-top-28]{margin-top:224px !important}[name=data-table] .data-table--padding-top-28,[name=data-table] .data-table[padding-top-28]{padding-top:224px !important}[name=data-table] .data-table--margin-bottom-28,[name=data-table] .data-table[margin-bottom-28]{margin-bottom:224px !important}[name=data-table] .data-table--padding-bottom-28,[name=data-table] .data-table[padding-bottom-28]{padding-bottom:224px !important}[name=data-table] .data-table--margin-left-28,[name=data-table] .data-table[margin-left-28]{margin-left:224px !important}[name=data-table] .data-table--padding-left-28,[name=data-table] .data-table[padding-left-28]{padding-left:224px !important}[name=data-table] .data-table--margin-right-28,[name=data-table] .data-table[margin-right-28]{margin-right:224px !important}[name=data-table] .data-table--padding-right-28,[name=data-table] .data-table[padding-right-28]{padding-right:224px !important}[name=data-table] .data-table--margin-top-29,[name=data-table] .data-table[margin-top-29]{margin-top:232px !important}[name=data-table] .data-table--padding-top-29,[name=data-table] .data-table[padding-top-29]{padding-top:232px !important}[name=data-table] .data-table--margin-bottom-29,[name=data-table] .data-table[margin-bottom-29]{margin-bottom:232px !important}[name=data-table] .data-table--padding-bottom-29,[name=data-table] .data-table[padding-bottom-29]{padding-bottom:232px !important}[name=data-table] .data-table--margin-left-29,[name=data-table] .data-table[margin-left-29]{margin-left:232px !important}[name=data-table] .data-table--padding-left-29,[name=data-table] .data-table[padding-left-29]{padding-left:232px !important}[name=data-table] .data-table--margin-right-29,[name=data-table] .data-table[margin-right-29]{margin-right:232px !important}[name=data-table] .data-table--padding-right-29,[name=data-table] .data-table[padding-right-29]{padding-right:232px !important}[name=data-table] .data-table--margin-top-30,[name=data-table] .data-table[margin-top-30]{margin-top:240px !important}[name=data-table] .data-table--padding-top-30,[name=data-table] .data-table[padding-top-30]{padding-top:240px !important}[name=data-table] .data-table--margin-bottom-30,[name=data-table] .data-table[margin-bottom-30]{margin-bottom:240px !important}[name=data-table] .data-table--padding-bottom-30,[name=data-table] .data-table[padding-bottom-30]{padding-bottom:240px !important}[name=data-table] .data-table--margin-left-30,[name=data-table] .data-table[margin-left-30]{margin-left:240px !important}[name=data-table] .data-table--padding-left-30,[name=data-table] .data-table[padding-left-30]{padding-left:240px !important}[name=data-table] .data-table--margin-right-30,[name=data-table] .data-table[margin-right-30]{margin-right:240px !important}[name=data-table] .data-table--padding-right-30,[name=data-table] .data-table[padding-right-30]{padding-right:240px !important}[name=data-table] .data-table--margin-top-31,[name=data-table] .data-table[margin-top-31]{margin-top:248px !important}[name=data-table] .data-table--padding-top-31,[name=data-table] .data-table[padding-top-31]{padding-top:248px !important}[name=data-table] .data-table--margin-bottom-31,[name=data-table] .data-table[margin-bottom-31]{margin-bottom:248px !important}[name=data-table] .data-table--padding-bottom-31,[name=data-table] .data-table[padding-bottom-31]{padding-bottom:248px !important}[name=data-table] .data-table--margin-left-31,[name=data-table] .data-table[margin-left-31]{margin-left:248px !important}[name=data-table] .data-table--padding-left-31,[name=data-table] .data-table[padding-left-31]{padding-left:248px !important}[name=data-table] .data-table--margin-right-31,[name=data-table] .data-table[margin-right-31]{margin-right:248px !important}[name=data-table] .data-table--padding-right-31,[name=data-table] .data-table[padding-right-31]{padding-right:248px !important}[name=data-table] .data-table--margin-top-32,[name=data-table] .data-table[margin-top-32]{margin-top:256px !important}[name=data-table] .data-table--padding-top-32,[name=data-table] .data-table[padding-top-32]{padding-top:256px !important}[name=data-table] .data-table--margin-bottom-32,[name=data-table] .data-table[margin-bottom-32]{margin-bottom:256px !important}[name=data-table] .data-table--padding-bottom-32,[name=data-table] .data-table[padding-bottom-32]{padding-bottom:256px !important}[name=data-table] .data-table--margin-left-32,[name=data-table] .data-table[margin-left-32]{margin-left:256px !important}[name=data-table] .data-table--padding-left-32,[name=data-table] .data-table[padding-left-32]{padding-left:256px !important}[name=data-table] .data-table--margin-right-32,[name=data-table] .data-table[margin-right-32]{margin-right:256px !important}[name=data-table] .data-table--padding-right-32,[name=data-table] .data-table[padding-right-32]{padding-right:256px !important}[name=data-table] .data-table--margin-top-33,[name=data-table] .data-table[margin-top-33]{margin-top:264px !important}[name=data-table] .data-table--padding-top-33,[name=data-table] .data-table[padding-top-33]{padding-top:264px !important}[name=data-table] .data-table--margin-bottom-33,[name=data-table] .data-table[margin-bottom-33]{margin-bottom:264px !important}[name=data-table] .data-table--padding-bottom-33,[name=data-table] .data-table[padding-bottom-33]{padding-bottom:264px !important}[name=data-table] .data-table--margin-left-33,[name=data-table] .data-table[margin-left-33]{margin-left:264px !important}[name=data-table] .data-table--padding-left-33,[name=data-table] .data-table[padding-left-33]{padding-left:264px !important}[name=data-table] .data-table--margin-right-33,[name=data-table] .data-table[margin-right-33]{margin-right:264px !important}[name=data-table] .data-table--padding-right-33,[name=data-table] .data-table[padding-right-33]{padding-right:264px !important}[name=data-table] .data-table--margin-top-34,[name=data-table] .data-table[margin-top-34]{margin-top:272px !important}[name=data-table] .data-table--padding-top-34,[name=data-table] .data-table[padding-top-34]{padding-top:272px !important}[name=data-table] .data-table--margin-bottom-34,[name=data-table] .data-table[margin-bottom-34]{margin-bottom:272px !important}[name=data-table] .data-table--padding-bottom-34,[name=data-table] .data-table[padding-bottom-34]{padding-bottom:272px !important}[name=data-table] .data-table--margin-left-34,[name=data-table] .data-table[margin-left-34]{margin-left:272px !important}[name=data-table] .data-table--padding-left-34,[name=data-table] .data-table[padding-left-34]{padding-left:272px !important}[name=data-table] .data-table--margin-right-34,[name=data-table] .data-table[margin-right-34]{margin-right:272px !important}[name=data-table] .data-table--padding-right-34,[name=data-table] .data-table[padding-right-34]{padding-right:272px !important}[name=data-table] .data-table--margin-top-35,[name=data-table] .data-table[margin-top-35]{margin-top:280px !important}[name=data-table] .data-table--padding-top-35,[name=data-table] .data-table[padding-top-35]{padding-top:280px !important}[name=data-table] .data-table--margin-bottom-35,[name=data-table] .data-table[margin-bottom-35]{margin-bottom:280px !important}[name=data-table] .data-table--padding-bottom-35,[name=data-table] .data-table[padding-bottom-35]{padding-bottom:280px !important}[name=data-table] .data-table--margin-left-35,[name=data-table] .data-table[margin-left-35]{margin-left:280px !important}[name=data-table] .data-table--padding-left-35,[name=data-table] .data-table[padding-left-35]{padding-left:280px !important}[name=data-table] .data-table--margin-right-35,[name=data-table] .data-table[margin-right-35]{margin-right:280px !important}[name=data-table] .data-table--padding-right-35,[name=data-table] .data-table[padding-right-35]{padding-right:280px !important}[name=data-table] .data-table--margin-top-36,[name=data-table] .data-table[margin-top-36]{margin-top:288px !important}[name=data-table] .data-table--padding-top-36,[name=data-table] .data-table[padding-top-36]{padding-top:288px !important}[name=data-table] .data-table--margin-bottom-36,[name=data-table] .data-table[margin-bottom-36]{margin-bottom:288px !important}[name=data-table] .data-table--padding-bottom-36,[name=data-table] .data-table[padding-bottom-36]{padding-bottom:288px !important}[name=data-table] .data-table--margin-left-36,[name=data-table] .data-table[margin-left-36]{margin-left:288px !important}[name=data-table] .data-table--padding-left-36,[name=data-table] .data-table[padding-left-36]{padding-left:288px !important}[name=data-table] .data-table--margin-right-36,[name=data-table] .data-table[margin-right-36]{margin-right:288px !important}[name=data-table] .data-table--padding-right-36,[name=data-table] .data-table[padding-right-36]{padding-right:288px !important}[name=data-table] .data-table--margin-top-37,[name=data-table] .data-table[margin-top-37]{margin-top:296px !important}[name=data-table] .data-table--padding-top-37,[name=data-table] .data-table[padding-top-37]{padding-top:296px !important}[name=data-table] .data-table--margin-bottom-37,[name=data-table] .data-table[margin-bottom-37]{margin-bottom:296px !important}[name=data-table] .data-table--padding-bottom-37,[name=data-table] .data-table[padding-bottom-37]{padding-bottom:296px !important}[name=data-table] .data-table--margin-left-37,[name=data-table] .data-table[margin-left-37]{margin-left:296px !important}[name=data-table] .data-table--padding-left-37,[name=data-table] .data-table[padding-left-37]{padding-left:296px !important}[name=data-table] .data-table--margin-right-37,[name=data-table] .data-table[margin-right-37]{margin-right:296px !important}[name=data-table] .data-table--padding-right-37,[name=data-table] .data-table[padding-right-37]{padding-right:296px !important}[name=data-table] .data-table--margin-top-38,[name=data-table] .data-table[margin-top-38]{margin-top:304px !important}[name=data-table] .data-table--padding-top-38,[name=data-table] .data-table[padding-top-38]{padding-top:304px !important}[name=data-table] .data-table--margin-bottom-38,[name=data-table] .data-table[margin-bottom-38]{margin-bottom:304px !important}[name=data-table] .data-table--padding-bottom-38,[name=data-table] .data-table[padding-bottom-38]{padding-bottom:304px !important}[name=data-table] .data-table--margin-left-38,[name=data-table] .data-table[margin-left-38]{margin-left:304px !important}[name=data-table] .data-table--padding-left-38,[name=data-table] .data-table[padding-left-38]{padding-left:304px !important}[name=data-table] .data-table--margin-right-38,[name=data-table] .data-table[margin-right-38]{margin-right:304px !important}[name=data-table] .data-table--padding-right-38,[name=data-table] .data-table[padding-right-38]{padding-right:304px !important}[name=data-table] .data-table--margin-top-39,[name=data-table] .data-table[margin-top-39]{margin-top:312px !important}[name=data-table] .data-table--padding-top-39,[name=data-table] .data-table[padding-top-39]{padding-top:312px !important}[name=data-table] .data-table--margin-bottom-39,[name=data-table] .data-table[margin-bottom-39]{margin-bottom:312px !important}[name=data-table] .data-table--padding-bottom-39,[name=data-table] .data-table[padding-bottom-39]{padding-bottom:312px !important}[name=data-table] .data-table--margin-left-39,[name=data-table] .data-table[margin-left-39]{margin-left:312px !important}[name=data-table] .data-table--padding-left-39,[name=data-table] .data-table[padding-left-39]{padding-left:312px !important}[name=data-table] .data-table--margin-right-39,[name=data-table] .data-table[margin-right-39]{margin-right:312px !important}[name=data-table] .data-table--padding-right-39,[name=data-table] .data-table[padding-right-39]{padding-right:312px !important}[name=data-table] .data-table--margin-top-40,[name=data-table] .data-table[margin-top-40]{margin-top:320px !important}[name=data-table] .data-table--padding-top-40,[name=data-table] .data-table[padding-top-40]{padding-top:320px !important}[name=data-table] .data-table--margin-bottom-40,[name=data-table] .data-table[margin-bottom-40]{margin-bottom:320px !important}[name=data-table] .data-table--padding-bottom-40,[name=data-table] .data-table[padding-bottom-40]{padding-bottom:320px !important}[name=data-table] .data-table--margin-left-40,[name=data-table] .data-table[margin-left-40]{margin-left:320px !important}[name=data-table] .data-table--padding-left-40,[name=data-table] .data-table[padding-left-40]{padding-left:320px !important}[name=data-table] .data-table--margin-right-40,[name=data-table] .data-table[margin-right-40]{margin-right:320px !important}[name=data-table] .data-table--padding-right-40,[name=data-table] .data-table[padding-right-40]{padding-right:320px !important}.data-table{width:100%;border-collapse:separate;border-style:solid;table-layout:fixed}.data-table:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.data-table--overflow tbody{position:relative;display:block;width:100%;overflow-y:scroll}.data-table--hide-indented-header .data-table-header--indented{display:none}.data-table--indented{position:relative;width:100%;border:none;border-radius:0 !important}.data-table--indented:before{position:absolute;left:0;top:0;height:100%;content:\"\"}.data-table--fixed-size{width:100%}.data-table--hidden{display:none !important}.data-table-row{position:relative;max-height:500em;opacity:1;transition:max-height 0.2s ease-in-out 0.1s, opacity 0.2s ease-in-out 0.1s}.data-table-row--collapsed{display:block;width:0;max-height:0;overflow:hidden;opacity:0;transition:max-height 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s}.data-table-row--collapsed .data-table-row{display:none}.data-table-row--expanded{display:flex;width:100%}.data-table-row--expanded>td{display:flex;width:100%}.data-table-row--expandable:not(:last-child)>td{border-bottom-style:solid}.data-table__header.data-table__header__container,.data-table__header__container{position:relative;display:flex;align-items:center;justify-content:space-between}.data-table__header+.data-table{border-top-right-radius:0;border-top-left-radius:0}.data-table__header__slot{display:flex;align-items:center;justify-content:space-between;width:100%}.data-table__header__checkboxes{position:absolute;bottom:-100%;z-index:3000;display:flex;align-items:center;justify-content:space-between;transition:bottom 0.2s ease-in-out}.data-table__header__checkboxes__actions{display:flex;align-items:center;justify-content:space-between}.data-table__header__checkboxes__actions__slot{display:flex;align-items:center;justify-content:space-between}.data-table__header__checkboxes--visible{bottom:0}.data-table__footer.data-table__footer__container,.data-table__footer__container{display:flex;align-items:center;justify-content:space-between;border-top:0;border-style:solid}.data-table__footer.data-table__footer__container--empty,.data-table__footer__container--empty{min-height:0 !important;padding:0 !important}.data-table__footer.data-table__footer__container--pagination-only,.data-table__footer__container--pagination-only{justify-content:flex-end}.data-table__footer__elevation{position:relative;z-index:3000}.data-table.data-table{border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px}.data-table.data-table--indented:before{width:4px}.data-table.data-table .data-table__row--expandable:not(:last-child)>td{border-bottom-width:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{min-height:72px;padding:16px;border-width:false;border-radius:0 0 0px 0px}.data-table.data-table--lg{border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px}.data-table.data-table--lg--indented:before{width:1px}.data-table.data-table--lg .data-table__row--expandable:not(:last-child)>td{border-bottom-width:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{min-height:72px;padding:16px;border-width:false;border-radius:0 0 4px 4px 0 0 4px 4px 0 0}.data-table.data-table{border-top-color:#EEEEEE;border-right-color:#EEEEEE;border-bottom-color:#EEEEEE;border-left-color:#EEEEEE}.data-table.data-table .data-table--indented{color:#5E5E5E;background-color:#5E5E5E}.data-table.data-table .data-table--indented:before{background-color:#F76700}.data-table.data-table .data-table__row--expandable:not(:last-child)>td{border-bottom-color:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{border-color:false;background-color:#FFFFFF}.data-table.data-table--blue{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.data-table.data-table--blue .data-table--indented{color:#000000;background-color:transparent}.data-table.data-table--blue .data-table--indented:before{background-color:transparent}.data-table.data-table--blue .data-table__row--expandable:not(:last-child)>td{border-bottom-color:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{border-color:false;background-color:transparent}.data-table.data-table--primary{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.data-table.data-table--primary .data-table--indented{color:#000000;background-color:transparent}.data-table.data-table--primary .data-table--indented:before{background-color:transparent}.data-table.data-table--primary .data-table__row--expandable:not(:last-child)>td{border-bottom-color:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{border-color:false;background-color:transparent}.data-table.data-table--brand-expressive-orange-dark{border-top-color:#96C11F;border-right-color:#96C11F;border-bottom-color:#96C11F;border-left-color:#96C11F}.data-table.data-table--brand-expressive-orange-dark .data-table--indented{color:#004885;background-color:#5A8D00}.data-table.data-table--brand-expressive-orange-dark .data-table--indented:before{background-color:#EF7D00}.data-table.data-table--brand-expressive-orange-dark .data-table__row--expandable:not(:last-child)>td{border-bottom-color:false}.data-table__footer.data-table__footer__container,.data-table__footer__container{border-color:false;background-color:#FFFFFF}";

const ENOVOSDataTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didRender = createEvent(this, "didRender", 7);
    this.activeHeaderDropdown = createEvent(this, "activeHeaderDropdown", 7);
    this.activeRowDropdown = createEvent(this, "activeRowDropdown", 7);
    this.clickRowCellButton = createEvent(this, "clickRowCellButton", 7);
    this.columns = [];
    this.columnSizes = [];
    this.data = [];
    this.sort = [];
    this.checkable = false;
    this.stickyElevation = '1';
    this.hasIndentedColumn = false;
    this.formattedData = [];
    this.checkedRows = 0;
    this.classNames = {
      EL: 'data-table',
      ROW: '-row',
      CONTAINER: '__container',
      HEADER: '__header',
      HEADING: '__heading',
      FOOTER: '__footer',
      SLOT: '__slot',
      ELEVATION: '__elevation',
      CHECKBOXES: '__checkboxes',
      ACTIONS: '__actions',
      CANCEL: '__cancel',
      OVERFLOW: '--overflow',
      INDENTED: '--indented',
      HIDE_INDENTED_HEADER: '--hide-indented-header',
      EXPANDABLE: '--expandable',
      EXPANDED: '--expanded',
      COLLAPSE: '--collapsed',
      HIDDEN: '--hidden',
      VISIBLE: '--visible',
      FIXED_SIZE: '--fixed-size',
      EMPTY: '--empty',
      PAGINATION_ONLY: '--pagination-only',
    };
    this.headerColumns = [];
    this.expandable = false;
  }
  /**
   * @description Catch the click on sort event from header row
   * if the table is autonomous, manage the table data in order values based
   * on column index.
   */
  clickSortColumnHandler(event) {
    this.sortDirection = event.detail.direction;
    this.sortIndex = event.detail.index;
    this.computeFormattedData();
  }
  /**
   * @description Catch the click on pagination event
   * if the table is autonomous, manage the table data
   */
  clickPaginationItemHandler(event) {
    this.currentPage = event.detail.value;
    this.visibleItemsCount = event.detail.items;
    this.computeFormattedData();
  }
  clickHeaderCheckboxHandler(event) {
    event.stopPropagation();
    this.setTableCheckboxes(this._id, this.el.querySelector(`.${this.classNames.EL}`), this.formattedData, get(event, 'detail.selected'));
  }
  clickHeaderDropdownHandler(event) {
    event.stopPropagation();
    this.activeHeaderDropdown.emit(event.detail);
  }
  clickRowDropdownHandler(event) {
    event.stopPropagation();
    this.activeRowDropdown.emit(event.detail);
  }
  clickCheckboxHandler() {
    this.checkedRows = this.getSelected(this.formattedData);
  }
  clickRowButtonHandler(event) {
    event.stopPropagation();
    this.clickRowCellButton.emit(event.detail);
  }
  clickRowCheckboxHandler(event) {
    if (this.hasIndentedColumn === false) {
      event.stopPropagation();
      try {
        const nextElement = get(event, 'target.nextElementSibling');
        const subTable = nextElement.querySelector(`.${this.classNames.EL}`);
        if (subTable) {
          this.setTableCheckboxes(subTable.getAttribute('id'), subTable, get(event, 'detail.children'), get(event, 'detail.selected'));
        }
      }
      catch (error) {
        // No next element sibling can be found.
      }
    }
  }
  clickExpandHandler(event) {
    event.stopPropagation();
    const nextElement = get(event, 'target.nextElementSibling');
    if (nextElement) {
      if (nextElement.classList.contains(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDABLE}`)) {
        if (nextElement.classList.contains(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`)) {
          nextElement.classList.remove(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`);
        }
        else {
          nextElement.classList.add(`${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`);
        }
      }
    }
  }
  watchDataHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      this.hasExpandable();
      this.formattedData = this.data;
      this.checkedRows = this.getSelected(this.formattedData);
    }
  }
  watchPaginationHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      if (this.hasPagination()) {
        this.currentPage = 0;
        this.visibleItemsCount = this.pagination.items;
        this.computeFormattedData();
      }
    }
  }
  /**
   * @description Set the default active item
   */
  async setPagination(data) {
    this.pagination = data;
  }
  /**
   * @description Set the default active item
   */
  async setData(data) {
    this.data = data;
  }
  componentWillLoad() {
    this.formattedData = this.data;
    this._id = uniqueId(`${this.classNames.EL}-`);
  }
  /**
   * @description Init the host element and attach event
   */
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    this.hasSlotHeading = !!this.el.querySelector(`[slot="header"]`);
    this.hasSlotFooter = !!this.el.querySelector(`[slot="footer"]`);
    this.hasSlotCheckboxActions = !!this.el.querySelector(`[slot="checkbox-actions"]`);
    // Fix IE Slot
    if (this.hasSlotHeading) {
      const slotHeaderElement = this.el.querySelector('[slot=header]');
      slotHeaderElement.classList.add(`${this.classNames.EL}${this.classNames.HEADING}${this.classNames.SLOT}`);
    }
    if (this.hasSlotFooter) {
      const slotFooterElement = this.el.querySelector('[slot=footer]');
      slotFooterElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.SLOT}`);
      const footerContainerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}`);
      if (footerContainerElement) {
        if (slotFooterElement.innerHTML.trim().length === 0 && !this.hasPagination()) {
          footerContainerElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.EMPTY}`);
        }
        else {
          footerContainerElement.classList.remove(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.EMPTY}`);
        }
      }
    }
    if (this.hasSlotCheckboxActions) {
      const slotCheckboxActions = this.el.querySelector('[slot=checkbox-actions]');
      slotCheckboxActions.classList.add(`${this.classNames.EL}${this.classNames.HEADING}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.SLOT}`);
    }
    if (this.hasPagination()) {
      const pagination = this.el.querySelector('#pagination');
      pagination.setConfig(this.pagination);
      const footerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}`);
      if (footerElement) {
        footerElement.classList.remove(`${this.classNames.EL}${this.classNames.HIDDEN}`);
        if (!this.hasSlotFooter) {
          footerElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.PAGINATION_ONLY}`);
        }
      }
    }
    else {
      if (!this.hasSlotFooter) {
        const footerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.FOOTER}`);
        footerElement.classList.add(`${this.classNames.EL}${this.classNames.HIDDEN}`);
        footerElement.classList.remove(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}${this.classNames.PAGINATION_ONLY}`);
      }
    }
    if (this.checkable === false || this.hasIndentedColumn) {
      if (!this.hasSlotHeading) {
        const headerElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADING}`);
        headerElement.classList.add(`${this.classNames.EL}${this.classNames.HIDDEN}`);
      }
    }
    if (this.checkable && !this.hasIndentedColumn) {
      const checkboxCancel = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HEADING}${this.classNames.CHECKBOXES}${this.classNames.ACTIONS}${this.classNames.CANCEL}`);
      // Kill attached events
      checkboxCancel.removeEventListener('clickButton', this._clickCheckboxCancelHandler);
      // Attach new event
      checkboxCancel.addEventListener('clickButton', this._clickCheckboxCancelHandler = () => this.clickCheckboxCancelHandler(), false);
    }
    if (this.hasIndentedColumn === false) {
      const layoutStyles = compact(LayoutPropsHelper.getStyles(this.styles, '').split(' '));
      if (Array.isArray(layoutStyles) && layoutStyles.length > 0) {
        this.el.classList.add(...layoutStyles);
      }
    }
    this.didRender.emit();
  }
  checkFormattedData(data, value) {
    data.forEach(row => {
      row.selected = value;
      if (has(row, 'children')) {
        this.checkFormattedData(row.children, value);
      }
    });
  }
  setTableCheckboxes(tableID, targetElement, data, selectValue) {
    targetElement.querySelectorAll(`#${tableID} .${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`)
      .forEach((el) => {
      el.activeCheckbox(selectValue);
    });
    targetElement.querySelectorAll(`#${tableID} .${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`)
      .forEach((el) => {
      el.activeCheckbox(selectValue);
    });
    this.checkFormattedData(data, selectValue);
  }
  getSelected(arrayData) {
    if (Array.isArray(arrayData)) {
      let nb = flatten(arrayData).filter(data => has(data, 'selected') && get(data, 'selected') === true).length;
      arrayData.forEach(data => {
        if (has(data, 'children')) {
          nb += this.getSelected(data.children);
        }
      });
      return nb;
    }
    return 0;
  }
  computeFormattedData() {
    let formattedData = [];
    // Get sorted data
    if (this.sortDirection && !!this.sortIndex) {
      formattedData = orderBy(this.data, [item => {
          if (item.values[this.sortIndex]) {
            return item.values[this.sortIndex].data;
          }
          return false;
        }], this.sortDirection);
    }
    else {
      formattedData = this.data;
    }
    const basePage = this.currentPage * this.visibleItemsCount;
    if (this.currentPage >= 0 && basePage < formattedData.length) {
      // Get visible data (current page) based on sorted data
      formattedData = formattedData.slice(basePage, basePage + this.visibleItemsCount);
    }
    this.formattedData = formattedData;
  }
  clickCheckboxCancelHandler() {
    this.el.querySelectorAll(`#${this._id} > tbody > .${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`)
      .forEach((el) => {
      el.activeCheckbox(false);
    });
    this.el.querySelectorAll(`#${this._id} > .${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`)
      .forEach((el) => {
      el.activeCheckbox(false);
    });
    this.formattedData.forEach(data => {
      data.selected = false;
    });
    this.checkedRows = 0;
  }
  hasScrollingContentClass() {
    return (this.maxHeight !== undefined) ? `${this.classNames.EL}${this.classNames.OVERFLOW}` : '';
  }
  hasExpandable() {
    this.expandable = findIndex(this.data, 'children') >= 0 ? true : this.expandable;
  }
  getColspan(data) {
    let value = data.length + 1; // +1 for the indented column
    if (this.checkable) {
      value = value + 1;
    }
    return value;
  }
  hasFixedColumnsClass() {
    return (this.columnSizes.length > 0) ? `${this.classNames.EL}${this.classNames.FIXED_SIZE}` : '';
  }
  hasPagination() {
    return this.pagination && this.pagination.items > 0 && this.pagination.total > 0;
  }
  setTableClasses() {
    return [
      this.classNames.EL,
      this.hasScrollingContentClass(),
      this.hasIndentedColumn ? `${this.classNames.EL}${this.classNames.INDENTED}` : '',
      this.hideIndentedHeader ? `${this.classNames.EL}${this.classNames.HIDE_INDENTED_HEADER}` : '',
      this.hasFixedColumnsClass(),
      this.size ? `${this.classNames.EL}--${this.size}` : '',
      StylePropsHelper.getStyles(this.styles, this.classNames.EL),
    ].join(' ');
  }
  render() {
    return [
      h("eds-data-table-heading", { checkable: this.checkable, hasIndentedColumn: this.hasIndentedColumn, checkedRows: this.checkedRows, styles: this.styles, size: this.size }, h("slot", { name: "header" })),
      h("table", { class: this.setTableClasses(), id: this._id }, this.columns && this.columns.length > 0
        ? (this.maxHeight !== undefined && this.hasIndentedColumn === false)
          ? h("eds-elevation", { level: (this.maxHeight !== undefined && this.hasIndentedColumn === false) ? this.stickyElevation : '0' }, h("eds-data-table-header", { checkable: this.checkable, expandable: this.expandable, size: this.size, styles: this.styles, columns: this.columns, columnSizes: this.columnSizes, maxHeight: this.maxHeight, hasIndentedColumn: this.hasIndentedColumn, class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`, sort: this.sort }))
          : h("eds-data-table-header", { checkable: this.checkable, expandable: this.expandable, size: this.size, styles: this.styles, columns: this.columns, columnSizes: this.columnSizes, maxHeight: this.maxHeight, hasIndentedColumn: this.hasIndentedColumn, class: `${this.classNames.EL}${this.classNames.HEADER}${this.classNames.ROW}`, sort: this.sort })
        : '', this.formattedData && this.formattedData.length > 0
        ? h("tbody", { style: (this.maxHeight !== undefined && this.hasIndentedColumn === false)
            ? { 'height': this.maxHeight }
            : {} }, this.formattedData.map(data => {
          return [
            h("eds-data-table-row", { columnSizes: this.columnSizes, columnRenderers: this.columnRenderers, maxHeight: this.maxHeight, class: [
                `${this.classNames.EL}${this.classNames.ROW}`,
                `${this.classNames.EL}${this.classNames.ROW}${this.classNames.CONTAINER}`,
                StylePropsHelper.getStyles(this.styles, `${this.classNames.EL}${this.classNames.ROW}`),
              ].join(' '), checkable: this.checkable, expandable: this.expandable, hasIndentedColumn: this.hasIndentedColumn, data: data, size: this.size }),
            (data.children)
              ? h("tr", { class: [
                  `${this.classNames.EL}${this.classNames.ROW}`,
                  `${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDABLE}`,
                  `${this.classNames.EL}${this.classNames.ROW}${this.classNames.COLLAPSE}`,
                  (this.maxHeight !== undefined && this.hasIndentedColumn === false) ? `${this.classNames.EL}${this.classNames.ROW}${this.classNames.EXPANDED}` : '',
                ].join(' ') }, h("td", { colSpan: this.getColspan(data.values) }, h("eds-data-table", { class: [
                  `${this.classNames.EL}${this.classNames.ROW}`,
                ].join(' '), columnSizes: this.columnSizes, columnRenderers: this.columnRenderers, maxHeight: this.maxHeight, hasIndentedColumn: true, columns: this.columns, checkable: this.checkable, styles: this.styles, data: data.children })))
              : '',
          ];
        }))
        : ''),
      (this.maxHeight !== undefined && this.hasIndentedColumn === false)
        ? h("eds-elevation", { reverse: true, class: [
            `${this.classNames.EL}${this.classNames.FOOTER}`,
            `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.ELEVATION}`,
          ].join(' '), level: (this.maxHeight !== undefined) ? this.stickyElevation : '0' }, h("div", { class: `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}` }, h("slot", { name: "footer" }), this.hasPagination() ?
          h("eds-pagination", { id: "pagination", outlined: true, size: "md" })
          : ''))
        : h("div", { class: [
            `${this.classNames.EL}${this.classNames.FOOTER}`,
            `${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.CONTAINER}`,
          ].join(' ') }, h("slot", { name: "footer" }), this.hasPagination() ?
          h("eds-pagination", { id: "pagination", outlined: true, size: "md" })
          : ''),
    ];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["watchDataHandler"],
    "pagination": ["watchPaginationHandler"]
  }; }
};
ENOVOSDataTable.style = dataTableCss;

const quickActionCss = "[name=quick-action]{display:block}[name=quick-action]+[name=quick-action]{margin-top:16px}.quick-action__content{display:flex;align-items:center;justify-content:space-between}.quick-action__leading-icon{width:48px !important}.quick-action__text{flex:1;text-align:left;padding-left:16px}.quick-action__trailing-icon{margin-left:16px}";

const ENOVOSQuickAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickItem = createEvent(this, "clickItem", 7);
    this.styles = 'primary';
    this.showTrailingIcon = false;
    this.classNames = {
      EL: 'quick-action',
    };
    this.onClickItem = () => {
      this.clickItem.emit({
        id: this.id,
        icon: this.icon,
        maintTitle: this.mainTitle,
        subtitle: this.subtitle,
      });
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.id = this.el.getAttribute('id');
    this.hasAfterTitles = !!this.el.querySelector('[slot="after-titles"]');
  }
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (h("div", { class: `${this.classNames.EL}` }, h("eds-card", { clickable: true, onClickCard: this.onClickItem, class: `${this.classNames.EL}__card`, size: "sm" }, h("div", { slot: "card-content" }, h("div", { class: `${this.classNames.EL}__content` }, this.icon &&
      h("eds-image", { class: `${this.classNames.EL}__leading-icon`, size: "6x", src: this.icon }), h("div", { class: `${this.classNames.EL}__text` }, this.mainTitle &&
      h("eds-paragraph", { type: "h6", styles: `${this.styles}-500`, "font-weight": "bold" }, this.mainTitle), this.subtitle &&
      h("eds-paragraph", { type: "body-2", styles: "secondary-500" }, this.subtitle)), this.hasAfterTitles &&
      h("span", { class: `${this.classNames.EL}__after-titles` }, h("slot", { name: "after-titles" })), this.showTrailingIcon &&
      h("span", { class: `${this.classNames.EL}__trailing-icon` }, h("eds-icon", { size: "3x", styles: "secondary-500", icon: "chevron-right" })))))));
  }
  get el() { return getElement(this); }
};
ENOVOSQuickAction.style = quickActionCss;

export { ENOVOSDataTable as eds_data_table, ENOVOSQuickAction as eds_quick_action };
