export interface IWalletCardItemBounding {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  height?: string;
  width?: string;
}
export declare class WalletCardItemBounding implements IWalletCardItemBounding {
  top: string;
  bottom: string;
  right: string;
  left: string;
  height: string;
  width: string;
  constructor(obj: IWalletCardItemBounding);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
export interface IWalletCardItem {
  type: string;
  styles?: string;
  fontWeight?: boolean;
  clampLines?: number;
  content?: string;
  src?: string;
  bounding?: WalletCardItemBounding;
  class?: string;
}
export declare class WalletCardItem implements IWalletCardItem {
  type: string;
  styles: string;
  fontWeight: boolean;
  clampLines: number;
  content: string;
  src: string;
  bounding: WalletCardItemBounding;
  class: string;
  constructor(obj: IWalletCardItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
