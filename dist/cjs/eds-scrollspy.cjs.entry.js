'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
const isSymbol = require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
require('./toNumber-e6ce1248.js');
require('./isObject-110b878e.js');
const toInteger = require('./toInteger-ed801fc9.js');
require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
const set = require('./set-82454825.js');
const _baseFindIndex = require('./_baseFindIndex-4f56dd76.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_setToArray-21e6bd5a.js');
const compact = require('./compact-6d9f701c.js');
const _baseIteratee = require('./_baseIteratee-1cf7cbd5.js');
require('./_baseProperty-8fb55bc0.js');
require('./_baseEach-0b5062cd.js');
const debounce = require('./debounce-504be00b.js');
const filter = require('./filter-60267546.js');
const _createFind = require('./_createFind-b06628be.js');
const has = require('./has-c1d0fffa.js');
const isEqual = require('./isEqual-54b6e24e.js');
const themes = require('./themes-bd258a0a.js');
const isVisibleObservable = require('./isVisibleObservable-3f219690.js');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger.toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return _baseFindIndex.baseFindIndex(array, _baseIteratee.baseIteratee(predicate), index, true);
}

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = _createFind.createFind(findLastIndex);

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol.isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, _baseIteratee.baseIteratee(iteratee), baseGt)
    : undefined;
}

class ScrollspyItem {
  constructor(obj) {
    if (obj instanceof ScrollspyItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
  setProp(key, value) {
    set.set(this, key, value);
  }
}

const scrollspyCss = "[name=scrollspy]{display:flex}[name=scrollspy] .scrollspy{position:relative;display:flex;align-content:center;align-items:flex-start;flex-direction:column;margin-left:16px}[name=scrollspy] .scrollspy:after{position:absolute;left:-16px;top:0;width:4px;height:32px;content:\"\";transition:top 300ms ease-in-out}[name=scrollspy] .scrollspy__item{height:32px;font-family:\"Montserrat\", sans-serif;font-size:14px;font-weight:400;line-height:32px;white-space:nowrap;vertical-align:middle;transition:color 300ms ease-in-out;cursor:pointer}[name=scrollspy] .scrollspy.scrollspy:after{background:#F76700}[name=scrollspy] .scrollspy .scrollspy__item{color:#5E5E5E}[name=scrollspy] .scrollspy .scrollspy__item.scrollspy__item--active{color:#F76700}[name=scrollspy][current-item=\"0\"] .scrollspy:after{top:0px}[name=scrollspy][current-item=\"1\"] .scrollspy:after{top:32px}[name=scrollspy][current-item=\"2\"] .scrollspy:after{top:64px}[name=scrollspy][current-item=\"3\"] .scrollspy:after{top:96px}[name=scrollspy][current-item=\"4\"] .scrollspy:after{top:128px}[name=scrollspy][current-item=\"5\"] .scrollspy:after{top:160px}[name=scrollspy][current-item=\"6\"] .scrollspy:after{top:192px}[name=scrollspy][current-item=\"7\"] .scrollspy:after{top:224px}[name=scrollspy][current-item=\"8\"] .scrollspy:after{top:256px}[name=scrollspy][current-item=\"9\"] .scrollspy:after{top:288px}[name=scrollspy][current-item=\"10\"] .scrollspy:after{top:320px}[name=scrollspy][current-item=\"11\"] .scrollspy:after{top:352px}[name=scrollspy][current-item=\"12\"] .scrollspy:after{top:384px}[name=scrollspy][current-item=\"13\"] .scrollspy:after{top:416px}[name=scrollspy][current-item=\"14\"] .scrollspy:after{top:448px}[name=scrollspy][current-item=\"15\"] .scrollspy:after{top:480px}[name=scrollspy][current-item=\"16\"] .scrollspy:after{top:512px}[name=scrollspy][current-item=\"17\"] .scrollspy:after{top:544px}[name=scrollspy][current-item=\"18\"] .scrollspy:after{top:576px}[name=scrollspy][current-item=\"19\"] .scrollspy:after{top:608px}[name=scrollspy][current-item=\"20\"] .scrollspy:after{top:640px}[name=scrollspy][current-item=\"21\"] .scrollspy:after{top:672px}[name=scrollspy][current-item=\"22\"] .scrollspy:after{top:704px}[name=scrollspy][current-item=\"23\"] .scrollspy:after{top:736px}[name=scrollspy][current-item=\"24\"] .scrollspy:after{top:768px}[name=scrollspy][current-item=\"25\"] .scrollspy:after{top:800px}[name=scrollspy][current-item=\"26\"] .scrollspy:after{top:832px}[name=scrollspy][current-item=\"27\"] .scrollspy:after{top:864px}[name=scrollspy][current-item=\"28\"] .scrollspy:after{top:896px}[name=scrollspy][current-item=\"29\"] .scrollspy:after{top:928px}[name=scrollspy][current-item=\"30\"] .scrollspy:after{top:960px}[name=scrollspy][current-item=\"31\"] .scrollspy:after{top:992px}[name=scrollspy][current-item=\"32\"] .scrollspy:after{top:1024px}[name=scrollspy][current-item=\"33\"] .scrollspy:after{top:1056px}[name=scrollspy][current-item=\"34\"] .scrollspy:after{top:1088px}[name=scrollspy][current-item=\"35\"] .scrollspy:after{top:1120px}[name=scrollspy][current-item=\"36\"] .scrollspy:after{top:1152px}[name=scrollspy][current-item=\"37\"] .scrollspy:after{top:1184px}[name=scrollspy][current-item=\"38\"] .scrollspy:after{top:1216px}[name=scrollspy][current-item=\"39\"] .scrollspy:after{top:1248px}[name=scrollspy][current-item=\"40\"] .scrollspy:after{top:1280px}[name=scrollspy][current-item=\"41\"] .scrollspy:after{top:1312px}[name=scrollspy][current-item=\"42\"] .scrollspy:after{top:1344px}[name=scrollspy][current-item=\"43\"] .scrollspy:after{top:1376px}[name=scrollspy][current-item=\"44\"] .scrollspy:after{top:1408px}[name=scrollspy][current-item=\"45\"] .scrollspy:after{top:1440px}[name=scrollspy][current-item=\"46\"] .scrollspy:after{top:1472px}[name=scrollspy][current-item=\"47\"] .scrollspy:after{top:1504px}[name=scrollspy][current-item=\"48\"] .scrollspy:after{top:1536px}[name=scrollspy][current-item=\"49\"] .scrollspy:after{top:1568px}[name=scrollspy][current-item=\"50\"] .scrollspy:after{top:1600px}";

const ENOVOSScrollspy = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.items = [];
    this.scrollspyItems = [];
    this.classNames = {
      EL: 'scrollspy',
      ITEM: '__item',
      ACTIVE: '--active',
      WATCHER: '--watcher',
    };
    this._observable = []; // observer;
    this.tmpcurrentItem = [];
    this.scrollContainer = debounce.debounce(() => {
      this.tmpcurrentItem = [];
      this.watchObservable();
      setTimeout(() => {
        this.tmpcurrentItem = compact.compact(this.tmpcurrentItem);
        const fullVisibleItem = filter.filter(this.tmpcurrentItem, o => {
          return _hasPath.get(o, 'intersectionRatio') === 1;
        });
        const currentItem = (fullVisibleItem.length > 1) ? findLast(this.tmpcurrentItem, o => o.intersectionRatio === 1) : maxBy(this.tmpcurrentItem, o => o.intersectionRatio);
        this.currentItem = (window.scrollY === 0) ? 0 : has.has(currentItem, 'index') ? _hasPath.get(currentItem, 'index') : this.currentItem;
      }, 250);
    }, 1);
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual.isEqual(newData, oldData)) {
      this.initData();
    }
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    if (this.target) {
      const targetEl = document.querySelector(this.target);
      if (targetEl) {
        targetEl.style.scrollBehavior = 'smooth';
        targetEl.addEventListener('scroll', () => {
          this.scrollContainer();
        });
      }
    }
    else {
      window.addEventListener('scroll', () => {
        this.scrollContainer();
      });
    }
  }
  componentWillLoad() {
    this.initData();
  }
  componentWillRender() {
    this.el.setAttribute('current-item', this.currentItem.toString());
  }
  initData() {
    const scrollspyItems = [];
    this.items.map(item => scrollspyItems.push(new ScrollspyItem(item)));
    this.scrollspyItems = scrollspyItems;
    this.currentItem = 0;
  }
  clickHandler(item, index) {
    const containerEl = (this.target) ? document.querySelector(this.target) : document.querySelector('body');
    if (containerEl) {
      const targetEl = containerEl.querySelector(item.target);
      const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
      if (isSmoothScrollSupported && targetEl) {
        if (this.target) {
          containerEl.scrollTo(0, (index === 0) ? 0 : targetEl.offsetTop);
        }
        else {
          window.scrollTo(0, (index === 0) ? 0 : targetEl.offsetTop);
        }
      }
    }
    return false;
  }
  watchObservable() {
    this.scrollspyItems.map((item, index) => {
      const target = document.querySelector(item.target);
      if (target) {
        target.classList.add(`${this.classNames.EL}${this.classNames.WATCHER}`);
        this._observable[index] = new isVisibleObservable.IsVisibleObservable(target, (value, entry) => {
          if (value === true) {
            this.tmpcurrentItem[index] = { index, intersectionRatio: _hasPath.get(entry, 'intersectionRatio') };
          }
          this._observable[index].disconnectObserver();
        }, {
          threshold: .5,
        });
      }
    });
  }
  render() {
    if (this.scrollspyItems.length > 0) {
      return (index.h("nav", { class: [
          this.classNames.EL,
        ].join(' ') }, this.scrollspyItems.map((item, index$1) => {
        if (item.hasProp('id')) {
          return index.h("a", { id: `menu_${item.getProp('id')}`, onClick: () => this.clickHandler(item, index$1), class: [
              `${this.classNames.EL}${this.classNames.ITEM}`,
              (this.currentItem === index$1) ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}` : '',
            ].join(' ') }, index.h("span", { innerHTML: item.getProp('text') }));
        }
      })));
    }
    else {
      return (index.h("nav", null));
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSScrollspy.style = scrollspyCss;

exports.eds_scrollspy = ENOVOSScrollspy;
