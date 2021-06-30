import { get, has, set } from 'lodash-es';

export interface IAppPeriodicConsumptionItemCaption {
  text ?: string;
  icon ?: string;
  styles ?: string;
}

export class AppPeriodicConsumptionItemCaption implements IAppPeriodicConsumptionItemCaption {

  text: string;
  icon: string;
  styles: string;

  constructor(obj: IAppPeriodicConsumptionItemCaption) {
    if (obj instanceof AppPeriodicConsumptionItemCaption) {
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

export interface IAppPeriodicConsumptionItem {
  title ?: string;
  value ?: string;
  caption ?: AppPeriodicConsumptionItemCaption;
}

export class AppPeriodicConsumptionItem implements IAppPeriodicConsumptionItem {

  title: string;
  value: string;
  caption: AppPeriodicConsumptionItemCaption;

  constructor(obj: IAppPeriodicConsumptionItem) {
    if (obj instanceof AppPeriodicConsumptionItem) {
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

export interface IAppPeriodicConsumption {
  id: string;
  data ?: AppPeriodicConsumptionItem[];
}

export class AppPeriodicConsumption implements IAppPeriodicConsumption {

  id: string;
  data: AppPeriodicConsumptionItem[];
  chart?: {
    maxValue: number;
    minValue: number;
    value?: number;
  }

  constructor(obj: IAppPeriodicConsumption) {
    if (obj instanceof AppPeriodicConsumption) {
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
