import { get, has } from 'lodash-es';

export interface IBreadcrumbItem {
  id: string;
  step ?: string;
  title ?: string;
  done ?: boolean;
  params ?: object;
}

export class BreadcrumbItem implements IBreadcrumbItem {

  id: string;
  step: string;
  title: string;
  done: boolean;
  params: object;

  constructor(obj: IBreadcrumbItem) {
    // make DatalistItemData idempotent
    if (obj instanceof BreadcrumbItem) {
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
