export interface IPagination {
  items: number;
  step: number;
  total: number;
}
export declare class Pagination implements IPagination {
  items: number;
  step: number;
  total: number;
  constructor(obj: IPagination);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
