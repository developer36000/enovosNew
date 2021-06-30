/**
 * Simple shims for WeakMap and Map classes.
 * This implementation is not meant to be used outside of IntersectionObserver modules
 * because it covers only limited range of use cases.
 */
const hasNativeCollections = 
// @ts-ignore
typeof window.WeakMap === 'function' && typeof window.Map === 'function';
const WeakMap = (() => {
  if (hasNativeCollections) {
    // @ts-ignore
    return window.WeakMap;
  }
  /**
   *
   * @param {Array<Array>} arr
   * @param {Object} key
   * @returns {Number}
   */
  function getIndex(arr, key) {
    let result = -1;
    arr.some((entry, index) => {
      const matches = entry[0] === key;
      if (matches) {
        result = index;
      }
      return matches;
    });
    return result;
  }
  return class {
    constructor() {
      this.__entries__ = [];
    }
    /**
     *
     * @param {Object} key
     * @returns {*}
     */
    get(key) {
      const index = getIndex(this.__entries__, key);
      return this.__entries__[index][1];
    }
    /**
     *
     * @param {Object} key
     * @param {*} value
     */
    set(key, value) {
      const index = getIndex(this.__entries__, key);
      if (~index) {
        this.__entries__[index][1] = value;
      }
      else {
        this.__entries__.push([key, value]);
      }
    }
    /**
     *
     * @param {Object} key
     */
    delete(key) {
      const entries = this.__entries__;
      const index = getIndex(entries, key);
      if (~index) {
        entries.splice(index, 1);
      }
    }
    /**
     *
     * @param {Object} key
     * @returns {Boolean}
     */
    has(key) {
      return !!~getIndex(this.__entries__, key);
    }
  };
})();
const Map = (() => {
  if (hasNativeCollections) {
    // @ts-ignore
    return window.Map;
  }
  return class extends WeakMap {
    /**
     *
     * @returns {Number}
     */
    get size() {
      return this.__entries__.length;
    }
    clear() {
      this.__entries__.splice(0, this.__entries__.length);
    }
    /**
     *
     * @returns {Array<Array>}
     */
    entries() {
      return this.__entries__.slice();
    }
    /**
     *
     * @returns {Array}
     */
    keys() {
      return this.__entries__.map(entry => entry[0]);
    }
    /**
     *
     * @returns {Array}
     */
    values() {
      return this.__entries__.map(entry => entry[1]);
    }
    /**
     *
     * @param {Function} callback
     * @param {Object} [ctx]
     */
    forEach(callback, ctx) {
      for (const entry of this.__entries__) {
        callback.call(ctx, entry[1], entry[0]);
      }
    }
  };
})();
export { Map, WeakMap };
