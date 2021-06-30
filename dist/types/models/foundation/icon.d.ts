export interface IIcon {
  size?: string;
  styles?: string;
  icon?: string;
}
export declare class Icon implements IIcon {
  size: string;
  styles: string;
  icon: string;
  constructor(obj: IIcon);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
