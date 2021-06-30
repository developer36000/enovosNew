import { get, has, set } from 'lodash-es';

export interface IAppDialogContractsItem {
  status: 'open' | 'closed';
  type: 'electricity' | 'producer' | 'gas';
  customerId: string;
  customerName: string;
  contractId: string;
  contractAddress: string;
  searchableText: string;
}

export class AppDialogContractsItem implements IAppDialogContractsItem {
  status: 'open' | 'closed';
  type: 'electricity' | 'producer' | 'gas';
  customerId: string;
  customerName: string;
  contractId: string;
  contractAddress: string;
  searchableText: string;

  constructor(obj: IAppDialogContractsItem) {
    if (obj instanceof AppDialogContractsItem) {
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
