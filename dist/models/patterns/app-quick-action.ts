import { get, has, set } from 'lodash-es';

export interface IAppQuickAction {
  id: string;
  icon ?: string;
  title ?: string;
  subtitle ?: string;
}

export class AppQuickAction implements IAppQuickAction {

  id: string;
  icon: string;
  title: string;
  subtitle: string;

  constructor(obj: IAppQuickAction) {
    if (obj instanceof AppQuickAction) {
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
