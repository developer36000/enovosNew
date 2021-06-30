'use strict';

const set = require('./set-82454825.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
const has = require('./has-c1d0fffa.js');
const v4 = require('./v4-378e0891.js');

class DatalistItemData {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof DatalistItemData) {
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
class DatalistItem {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }
    this.uid = v4.v4_1();
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

class DatalistItemPropsHelper {
  static filterStyles(styles) {
    const stylesList = styles.split(' ');
    const layoutStyles = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'primary-.*', 'secondary-.*', 'tertiary-.*', 'quaternary-.*', 'quinary-.*', 'senary-.*', 'septenary-.*', 'grey-.*', 'black', 'white', 'white-opacity-15', 'white-opacity-50', 'contextual-.*', 'expressive-.*', 'pfm-.*', 'external-bank-.*', 'brand-.*', 'success', 'info', 'warning', 'error'];
    const regex = new RegExp(`(${layoutStyles.join('|')})`);
    const classNames = [];
    stylesList.forEach((style) => {
      regex.test(style) ? classNames.push(style) : classNames.push('');
    });
    return [].concat(classNames).filter(Boolean);
  }
  static getStyles(styles, prefix) {
    return this.filterStyles('' + styles).map((filteredStyle) => {
      if (prefix) {
        return `${prefix}--${filteredStyle}`;
      }
      return `${filteredStyle}`;
    }).join(' ');
  }
}

exports.DatalistItem = DatalistItem;
exports.DatalistItemData = DatalistItemData;
exports.DatalistItemPropsHelper = DatalistItemPropsHelper;
