import { get, has } from 'lodash-es';

export interface IOrientation {
  id: string;
  animation ?: string;
  image ?: string;
  title ?: string;
  subtitle ?: string;
  progressValue ?: number;
  color ?: string;
  value ?: string;
  subFund ?: string;
  desc ?: string;

  getProp(arg: string): any; // method
  hasProp(arg: string): boolean; // method
}

export class Orientation implements IOrientation {

  id: string;
  animation: string;
  image: string;
  title: string;
  subtitle: string;
  progressValue: number;
  color: string;
  value: string;
  subFund: string;
  desc: string;

  constructor(obj: IOrientation) {
    // make DatalistItemData idempotent
    if (obj instanceof Orientation) {
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
