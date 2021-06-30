'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
require('./toNumber-e6ce1248.js');
require('./isObject-110b878e.js');
require('./toInteger-ed801fc9.js');
require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
const _baseClone = require('./_baseClone-07298060.js');
const uniq = require('./uniq-b3cd4da7.js');
require('./_copyArray-16797645.js');
const set = require('./set-82454825.js');
require('./_arrayEach-c0f7fc70.js');
require('./_baseFindIndex-4f56dd76.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_baseFlatten-e12e1365.js');
const flatten = require('./flatten-684aa5bf.js');
require('./_baseSlice-322a2948.js');
require('./_setToArray-21e6bd5a.js');
const compact = require('./compact-6d9f701c.js');
const concat = require('./concat-04fa92d0.js');
const _baseIteratee = require('./_baseIteratee-1cf7cbd5.js');
require('./_baseProperty-8fb55bc0.js');
require('./_baseEach-0b5062cd.js');
const _baseUnset = require('./_baseUnset-241d5e07.js');
const filter = require('./filter-60267546.js');
require('./_createFind-b06628be.js');
const findIndex = require('./findIndex-407a7fc6.js');
const find = require('./find-5a05dc2b.js');
require('./_baseMap-a8bf0760.js');
const map = require('./map-25831311.js');
const has = require('./has-c1d0fffa.js');
const themes = require('./themes-bd258a0a.js');
const v4 = require('./v4-378e0891.js');

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return _baseClone.baseClone(value, CLONE_SYMBOLS_FLAG);
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (_hasPath.isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        _baseUnset.baseUnset(array, index);
      }
    }
  }
  return array;
}

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = _baseIteratee.baseIteratee(predicate);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

class InputChipItem {
  constructor(obj) {
    if (obj instanceof InputChipItem) {
      return obj;
    }
    this.uid = has.has(obj, 'id') ? _hasPath.get(obj, 'id') : v4.v4_1();
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

const inputChipCss = "[name=input-chip] .input-chip{display:flex;align-items:center;justify-content:flex-start}[name=input-chip] .input-chip__item:not(:last-child){margin-right:8px}[name=input-chip] .input-chip--stacked{flex-wrap:wrap}[name=input-chip] .input-chip--stacked .input-chip__item{margin-bottom:calc(4px + 1px)}";

const ENOVOSInputChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = [];
    this.size = 'sm';
    this.readOnly = false;
    this.stacked = false;
    this.trailingType = 'icon'; // url / icon
    this.trailingValue = 'times-circle'; // url / icon
    this.styles = 'tertiary';
    this.sizeAvatar = 'xxs';
    this.inputChipItems = [];
    this.classNames = {
      EL: 'input-chip',
      DROPDOWN: '__dropdown',
      ITEM: '__item',
      STACKED: '--stacked',
    };
    this.availableItems = [];
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init component variables
   */
  componentWillLoad() {
    this.setAvailableItems(this.data);
    this.setChipItems();
    if (this.selectionControlType) {
      this.selectionControls = {
        'type': this.selectionControlType,
        'data': this.data,
      };
    }
  }
  /**
   * @description Init the host element and set dropdown data items
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.setDropdownData();
  }
  /**
   * @description Remove chip from input when catch click on trailing icon (cross)
   */
  clickTrailingHandler(event) {
    if (event.detail.uid) {
      this.selectChip(event.detail.uid, false, undefined);
      if (this.selectionControlType === 'checkbox') {
        this.setDropdownData();
      }
    }
  }
  /**
   * @description Add chip in input when catch click dropdown item
   */
  clickDropdownItemHandler(event) {
    if (event.detail.uid) {
      this.selectChip(event.detail.uid, true, undefined);
    }
  }
  clickSelectionControlsItemHandler(event) {
    if (has.has(event.detail, 'currentItem.uid')) {
      this.selectChip(event.detail.currentItem.uid, (_hasPath.get(event.detail, 'currentItem.selected') === true) ? true : false, event.detail.parent);
    }
  }
  async setItems(data) {
    this.data = data;
  }
  /**
   * @description If there's a change on available chip item,  refresh input/dropdown
   */
  watchHandler(newData, oldData) {
    if (newData !== oldData) {
      this.setAvailableItems(newData);
      this.setChipItems();
      if (this.selectionControlType) {
        this.selectionControls = {
          'type': this.selectionControlType,
          'data': this.data,
        };
      }
      this.setDropdownData();
    }
  }
  /**
   * @description Set the chip parameters.
   * One for the chip display in input this.inputChipItems
   * One for the chip display in dropdown this.availableItems
   * The configuration is a little bit different in the 2 components like the size or trailing icon
   */
  selectChip(uid, value, parent) {
    const availableItem = find.find(this.availableItems, item => uid === _hasPath.get(item, 'uid'));
    if (availableItem) {
      // Define if the chip should be visible in the input
      if (value === false) {
        if (this.selectionControlType === 'checkbox') {
          this.removeCheckboxSelectedChip(uid, value, availableItem);
          if (parent && parent.hasProp('children') && parent.getProp('children').length > 0) {
            this.removeSelectedChip(_hasPath.get(parent, 'uid'), value);
            const availableItemParent = find.find(this.availableItems, item => _hasPath.get(parent, 'uid') === _hasPath.get(item, 'uid'));
            if (has.has(availableItemParent, 'children') && availableItemParent.children.length > 0) {
              const selectedChildren = filter.filter(availableItemParent.children, item => _hasPath.get(item, 'selected') === true);
              selectedChildren.map(child => {
                this.setSelectedChip(child, true);
              });
            }
          }
        }
        else {
          this.removeSelectedChip(uid, value);
        }
      }
      else {
        if (this.selectionControlType === 'checkbox') {
          if (parent && parent.hasProp('children') && parent.getProp('children').length > 0) {
            const nbCheckedChildren = filter.filter(parent.getProp('children'), (item) => item.getProp('selected') === true);
            if (nbCheckedChildren.length === parent.getProp('children').length) {
              this.setCheckboxSelectedChip(find.find(this.availableItems, item => _hasPath.get(parent, 'uid') === _hasPath.get(item, 'uid')));
            }
            else {
              this.setCheckboxSelectedChip(availableItem);
            }
          }
          else {
            this.setCheckboxSelectedChip(availableItem);
          }
        }
        else {
          this.setSelectedChip(availableItem, true);
        }
      }
      this.setDropdownData();
    }
  }
  setCheckboxSelectedChip(availableItem) {
    this.setSelectedChip(availableItem, true);
    if (has.has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(_hasPath.get(child, 'uid'), (_hasPath.get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  updateAvailableItems(uid, value) {
    const indexItem = findIndex.findIndex(this.availableItems, item => uid === _hasPath.get(item, 'uid'));
    if (indexItem !== -1) {
      set.set(this.availableItems[indexItem], 'selected', value);
    }
  }
  setSelectedChip(availableItem, value) {
    this.updateAvailableItems(_hasPath.get(availableItem, 'uid'), value);
    const inputChipItem = new InputChipItem(availableItem);
    this.formatChipItem(availableItem, inputChipItem);
    inputChipItem.setProp('selected', value);
    if (this.readOnly) {
      inputChipItem.setProp('readOnly', true);
    }
    else {
      inputChipItem.setProp('readOnly', false);
    }
    this.inputChipItems = filter.filter([...this.inputChipItems, inputChipItem], { selected: true });
  }
  removeCheckboxSelectedChip(uid, value, availableItem) {
    this.removeSelectedChip(uid, value);
    if (has.has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(_hasPath.get(child, 'uid'), (_hasPath.get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  removeSelectedChip(uid, value) {
    const inputChip = find.find(this.inputChipItems, item => uid === item.getProp('uid'));
    if (inputChip) {
      inputChip.setProp('selected', value);
    }
    this.updateAvailableItems(uid, value);
    this.inputChipItems = remove(this.inputChipItems, item => {
      return uid !== item.getProp('uid');
    });
  }
  /**
   * @description Init the dropdown item (this.availableItems) from an array of item
   * and set array of chip to be display in input (this.availableItems) if prop selected is true
   */
  setChipItems() {
    this.inputChipItems = [];
    if (Array.isArray(this.availableItems)) {
      this.availableItems.map(item => {
        const inputChipItem = new InputChipItem(item);
        this.formatChipItem(item, inputChipItem);
        set.set(item, 'uid', inputChipItem.getProp('uid'));
        if (this.readOnly) {
          inputChipItem.setProp('readOnly', true);
        }
        else {
          inputChipItem.setProp('readOnly', false);
        }
        if (inputChipItem.getProp('selected') === true) {
          this.inputChipItems.push(inputChipItem);
        }
      });
    }
  }
  setAvailableItems(data) {
    const availableItems = clone(data);
    const chainedData = uniq.uniq((flatten.flatten(map.map(availableItems, 'children'))).slice().sort());
    this.availableItems = compact.compact(concat.concat(availableItems, Array.isArray(chainedData) ? chainedData : []));
  }
  /**
   * @description Define specific and default proprieties to chip display in input
   */
  formatChipItem(item, inputChipItem) {
    if (!has.has(item, 'size')) {
      inputChipItem.setProp('size', this.size);
    }
    if (!has.has(item, 'styles')) {
      inputChipItem.setProp('styles', this.styles);
    }
    if (!this.readOnly) {
      if (!has.has(item, 'trailingType')) {
        inputChipItem.setProp('trailing.type', this.trailingType);
      }
      if (!has.has(item, 'trailingValue')) {
        inputChipItem.setProp('trailing.value', this.trailingValue);
      }
    }
    if (!has.has(item, 'sizeAvatar')) {
      inputChipItem.setProp('sizeAvatar', this.sizeAvatar);
    }
  }
  /**
   * @description Set the available data in dropdown
   */
  setDropdownData() {
    const elementDropdown = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);
    if (elementDropdown) {
      if (!this.selectionControls) {
        elementDropdown.data = []; // Force refresh dropdown
        elementDropdown.data = this.availableItems;
      }
      else {
        elementDropdown.selectionControls = {
          'type': undefined,
          'data': [],
        }; // Force refresh dropdown
        elementDropdown.selectionControls = this.selectionControls;
      }
    }
  }
  /** REMOVABLE START */
  render() {
    return ((!this.readOnly)
      ? index.h("eds-dropdown", { class: [
          `${this.classNames.EL}${this.classNames.DROPDOWN}`,
        ].join(' '), "autocomplete-on-focus": true, selectionControls: this.selectionControls }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems })))
      : index.h("eds-text-field", { "read-only": this.readOnly, "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchHandler"]
  }; }
};
ENOVOSInputChip.style = inputChipCss;

exports.eds_input_chip = ENOVOSInputChip;
