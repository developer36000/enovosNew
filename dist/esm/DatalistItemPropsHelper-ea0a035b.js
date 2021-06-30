import { s as set } from './set-913bca4c.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import { h as has } from './has-1e48d487.js';
import { v as v4_1 } from './v4-4d460ace.js';

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
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
  setProp(key, value) {
    set(this, key, value);
  }
}
class DatalistItem {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DatalistItem) {
      return obj;
    }
    this.uid = v4_1();
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

export { DatalistItem as D, DatalistItemData as a, DatalistItemPropsHelper as b };
