export interface IBreadcrumbItem {
  id: string;
  step?: string;
  title?: string;
  done?: boolean;
  params?: object;
}
export declare class BreadcrumbItem implements IBreadcrumbItem {
  id: string;
  step: string;
  title: string;
  done: boolean;
  params: object;
  constructor(obj: IBreadcrumbItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
}
