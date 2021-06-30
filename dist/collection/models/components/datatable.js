import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { get, has, set } from 'lodash-es';
export class DataTableDataTooltip {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DataTableDataTooltip) {
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
export class DataTableDataProps {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DataTableDataProps) {
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
export class DataTableData {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DataTableData) {
      return obj;
    }
    this.uid = uuidv4();
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
export class DataTableValues {
  constructor(obj) {
    // make Datalist idempotent
    if (obj instanceof DataTableValues) {
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
