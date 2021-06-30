import { get, has, set } from 'lodash-es';

export interface IAppDataBlockButton {
  content?: string;
  icon?: string;
}

export class AppDataBlockButton implements IAppDataBlockButton {
  content: string;
  icon: string;

  constructor(obj: IAppDataBlockButton) {
    // make DatalistItemData idempotent
    if (obj instanceof AppDataBlockButton) {
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

}

export interface IAppDataBlock {
  id: string;
  type: string;
  label: string;
  value: string;
  tooltip ?: string;
  button ?: AppDataBlockButton;
}

export class AppDataBlock implements IAppDataBlock {

  id: string;
  label: string;
  value: string;
  tooltip: string;
  type: string;
  button: AppDataBlockButton;

  constructor(obj: IAppDataBlock) {
    if (obj instanceof AppDataBlock) {
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
