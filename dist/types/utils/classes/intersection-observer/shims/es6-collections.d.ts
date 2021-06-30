/**
 * Simple shims for WeakMap and Map classes.
 * This implementation is not meant to be used outside of IntersectionObserver modules
 * because it covers only limited range of use cases.
 */
declare const WeakMap: WeakMapConstructor | {
  new (): {
    __entries__: any;
    /**
     *
     * @param {Object} key
     * @returns {*}
     */
    get(key: any): any;
    /**
     *
     * @param {Object} key
     * @param {*} value
     */
    set(key: any, value: any): void;
    /**
     *
     * @param {Object} key
     */
    delete(key: any): void;
    /**
     *
     * @param {Object} key
     * @returns {Boolean}
     */
    has(key: any): boolean;
  };
};
declare const Map: MapConstructor | {
  new (entries: readonly [object, any][]): {
    __entries__: any;
    /**
     *
     * @returns {Number}
     */
    readonly size: any;
    clear(): void;
    /**
     *
     * @returns {Array<Array>}
     */
    entries(): any;
    /**
     *
     * @returns {Array}
     */
    keys(): any;
    /**
     *
     * @returns {Array}
     */
    values(): any;
    /**
     *
     * @param {Function} callback
     * @param {Object} [ctx]
     */
    forEach(callback: any, ctx: any): void;
  };
};
export { Map, WeakMap };
