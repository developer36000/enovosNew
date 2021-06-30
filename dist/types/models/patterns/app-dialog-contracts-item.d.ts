export interface IAppDialogContractsItem {
  status: 'open' | 'closed';
  type: 'electricity' | 'producer' | 'gas';
  customerId: string;
  customerName: string;
  contractId: string;
  contractAddress: string;
  searchableText: string;
}
export declare class AppDialogContractsItem implements IAppDialogContractsItem {
  status: 'open' | 'closed';
  type: 'electricity' | 'producer' | 'gas';
  customerId: string;
  customerName: string;
  contractId: string;
  contractAddress: string;
  searchableText: string;
  constructor(obj: IAppDialogContractsItem);
  getProp(key: any): any;
  hasProp(key: any): boolean;
  setProp(key: any, value: any): void;
}
