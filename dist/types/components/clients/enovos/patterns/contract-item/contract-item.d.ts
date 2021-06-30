import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @name Contract item
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSContractItem {
  el: HTMLElement;
  clickItem: EventEmitter;
  clickItemCheckbox: EventEmitter;
  isCheckable?: boolean;
  isChecked?: boolean;
  status: 'open' | 'closed';
  type: 'electricity' | 'producer' | 'gas';
  customerId: string;
  customerName: string;
  contractId: string;
  contractAddress: string;
  styles?: string;
  private classNames;
  handleTheme(): void;
  componentDidLoad(): void;
  private onClickItem;
  private onClickItemCheckbox;
  private getComponentClassName;
  render(): any;
}
