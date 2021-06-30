import { EventEmitter } from '../../../../../stencil-public-runtime';
import { AppDialogContractsItem } from '../../../../../models/patterns/app-dialog-contracts-item';
/**
 * @name Dialog Contracts
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSAppDialogContracts {
  el: HTMLElement;
  clickRow: EventEmitter;
  close: EventEmitter;
  styles?: string;
  locale?: {
    title?: string;
    search?: string;
    filterByCustomers?: string;
    allCustomers?: string;
  };
  items: AppDialogContractsItem[];
  contractItems: AppDialogContractsItem[];
  searchKeywords?: string;
  selectedCustomerId?: string;
  selectedCustomerName?: string;
  private classNames;
  displayDialog(value: any): Promise<void>;
  setItems(items: any): Promise<void>;
  watchItemsHandler(newData: [], oldData: []): void;
  handleTheme(): void;
  componentDidLoad(): void;
  private initData;
  private onClickRow;
  private onSearchKeyUp;
  private getCustomers;
  private onClickDropdownItem;
  render(): any;
}
