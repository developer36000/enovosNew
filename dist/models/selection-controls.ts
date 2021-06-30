import get from 'lodash/get';
import has from 'lodash/has';
import set from 'lodash/set';

export interface ISelectionControls {
  id: string;
  type: string;
  data ?: SelectionControlsItem[];
}

export class SelectionControls implements ISelectionControls {

  id: string;
  type: string;
  data ?: SelectionControlsItem[];

  constructor(obj: ISelectionControls) {
    if (obj instanceof SelectionControls) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

}

export interface ISelectionControlsItem {
  id: string;
  label: string;
  active ?: boolean;
  checked ?: boolean;
  selected ?: boolean;
  inputName ?: string;
  value ?: string;
  size ?: string;
  children ?: SelectionControlsItem[];
}

export class SelectionControlsItem implements ISelectionControlsItem {

  id: string;
  label: string;
  active: boolean;
  checked: boolean;
  selected: boolean;
  inputName: string;
  value: string;
  size: string;
  children: SelectionControlsItem[];

  constructor(obj: ISelectionControlsItem) {
    if (obj instanceof SelectionControlsItem) {
      return obj;
    }

    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }

  }

  getProp(key): any {
    return get(this, key);
  }

  hasProp(key): boolean {
    return has(this, key);
  }

  setProp(key, value) {
    set(this, key, value);
  }

}
