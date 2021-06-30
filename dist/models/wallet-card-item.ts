import { get, has } from 'lodash-es';

export interface IWalletCardItemBounding {
  top ?: string;
  bottom ?: string;
  right ?: string;
  left ?: string;
  height ?: string;
  width ?: string;
}

export class WalletCardItemBounding implements IWalletCardItemBounding {

  top: string;
  bottom: string;
  right: string;
  left: string;
  height: string;
  width: string;

  constructor(obj: IWalletCardItemBounding) {
    // make DatalistItemData idempotent
    if (obj instanceof WalletCardItemBounding) {
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

export interface IWalletCardItem {
  type: string;
  styles ?: string;
  fontWeight ?: boolean;
  clampLines ?: number;
  content ?: string;
  src ?: string;
  bounding ?: WalletCardItemBounding;
  class ?: string;
}

export class WalletCardItem implements IWalletCardItem {

  type: string;
  styles: string;
  fontWeight: boolean;
  clampLines: number;
  content: string;
  src: string;
  bounding: WalletCardItemBounding;
  class: string;

  constructor(obj: IWalletCardItem) {
    // make DatalistItemData idempotent
    if (obj instanceof WalletCardItem) {
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
