import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './toNumber-30473e8a.js';
import './isObject-7039fcda.js';
import './toInteger-521653cd.js';
import './identity-5b806255.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import { b as baseClone } from './_baseClone-8c6683b6.js';
import { u as uniq } from './uniq-470bbb21.js';
import './_copyArray-b32fb6e9.js';
import { s as set } from './set-913bca4c.js';
import './_arrayEach-de39f2e7.js';
import './_baseFindIndex-e57941fd.js';
import { d as isIndex, g as get } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_baseFlatten-59c8d422.js';
import { f as flatten } from './flatten-b33122fe.js';
import './_baseSlice-a9720fa6.js';
import './_setToArray-60932de0.js';
import { c as compact } from './compact-c11bf240.js';
import { c as concat } from './concat-13088df4.js';
import { b as baseIteratee } from './_baseIteratee-93849f60.js';
import './_baseProperty-e57e2f20.js';
import './_baseEach-9cdd008c.js';
import { b as baseUnset } from './_baseUnset-fefb0ce6.js';
import { f as filter } from './filter-8edeba78.js';
import './_createFind-3b4509e9.js';
import { f as findIndex } from './findIndex-98e7efdf.js';
import { f as find } from './find-5e7f0825.js';
import './_baseMap-2384d8c1.js';
import { m as map } from './map-848f6ebc.js';
import { h as has } from './has-1e48d487.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { v as v4_1 } from './v4-4d460ace.js';

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
  return baseClone(value, CLONE_SYMBOLS_FLAG);
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
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
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

  predicate = baseIteratee(predicate);
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
    this.uid = has(obj, 'id') ? get(obj, 'id') : v4_1();
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}

const inputChipCss = "[name=input-chip] .input-chip{display:flex;align-items:center;justify-content:flex-start}[name=input-chip] .input-chip__item:not(:last-child){margin-right:8px}[name=input-chip] .input-chip--stacked{flex-wrap:wrap}[name=input-chip] .input-chip--stacked .input-chip__item{margin-bottom:calc(4px + 1px)}";

const ENOVOSInputChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
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
    if (has(event.detail, 'currentItem.uid')) {
      this.selectChip(event.detail.currentItem.uid, (get(event.detail, 'currentItem.selected') === true) ? true : false, event.detail.parent);
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
    const availableItem = find(this.availableItems, item => uid === get(item, 'uid'));
    if (availableItem) {
      // Define if the chip should be visible in the input
      if (value === false) {
        if (this.selectionControlType === 'checkbox') {
          this.removeCheckboxSelectedChip(uid, value, availableItem);
          if (parent && parent.hasProp('children') && parent.getProp('children').length > 0) {
            this.removeSelectedChip(get(parent, 'uid'), value);
            const availableItemParent = find(this.availableItems, item => get(parent, 'uid') === get(item, 'uid'));
            if (has(availableItemParent, 'children') && availableItemParent.children.length > 0) {
              const selectedChildren = filter(availableItemParent.children, item => get(item, 'selected') === true);
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
            const nbCheckedChildren = filter(parent.getProp('children'), (item) => item.getProp('selected') === true);
            if (nbCheckedChildren.length === parent.getProp('children').length) {
              this.setCheckboxSelectedChip(find(this.availableItems, item => get(parent, 'uid') === get(item, 'uid')));
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
    if (has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(get(child, 'uid'), (get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  updateAvailableItems(uid, value) {
    const indexItem = findIndex(this.availableItems, item => uid === get(item, 'uid'));
    if (indexItem !== -1) {
      set(this.availableItems[indexItem], 'selected', value);
    }
  }
  setSelectedChip(availableItem, value) {
    this.updateAvailableItems(get(availableItem, 'uid'), value);
    const inputChipItem = new InputChipItem(availableItem);
    this.formatChipItem(availableItem, inputChipItem);
    inputChipItem.setProp('selected', value);
    if (this.readOnly) {
      inputChipItem.setProp('readOnly', true);
    }
    else {
      inputChipItem.setProp('readOnly', false);
    }
    this.inputChipItems = filter([...this.inputChipItems, inputChipItem], { selected: true });
  }
  removeCheckboxSelectedChip(uid, value, availableItem) {
    this.removeSelectedChip(uid, value);
    if (has(availableItem, 'children') && availableItem.children.length > 0) {
      availableItem.children.map(child => {
        this.removeSelectedChip(get(child, 'uid'), (get(availableItem, 'selected') === true) ? true : false);
      });
    }
  }
  removeSelectedChip(uid, value) {
    const inputChip = find(this.inputChipItems, item => uid === item.getProp('uid'));
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
        set(item, 'uid', inputChipItem.getProp('uid'));
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
    const chainedData = uniq((flatten(map(availableItems, 'children'))).slice().sort());
    this.availableItems = compact(concat(availableItems, Array.isArray(chainedData) ? chainedData : []));
  }
  /**
   * @description Define specific and default proprieties to chip display in input
   */
  formatChipItem(item, inputChipItem) {
    if (!has(item, 'size')) {
      inputChipItem.setProp('size', this.size);
    }
    if (!has(item, 'styles')) {
      inputChipItem.setProp('styles', this.styles);
    }
    if (!this.readOnly) {
      if (!has(item, 'trailingType')) {
        inputChipItem.setProp('trailing.type', this.trailingType);
      }
      if (!has(item, 'trailingValue')) {
        inputChipItem.setProp('trailing.value', this.trailingValue);
      }
    }
    if (!has(item, 'sizeAvatar')) {
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
      ? h("eds-dropdown", { class: [
          `${this.classNames.EL}${this.classNames.DROPDOWN}`,
        ].join(' '), "autocomplete-on-focus": true, selectionControls: this.selectionControls }, h("div", { slot: "selector" }, h("eds-text-field", { "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems })))
      : h("eds-text-field", { "read-only": this.readOnly, "icon-leading": this.iconLeading, "icon-trailing": this.iconTrailing, type: "text", stacked: this.stacked, chips: this.inputChipItems }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["watchHandler"]
  }; }
};
ENOVOSInputChip.style = inputChipCss;

export { ENOVOSInputChip as eds_input_chip };
