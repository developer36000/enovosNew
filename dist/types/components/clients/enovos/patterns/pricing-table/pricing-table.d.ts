import { EventEmitter } from '../../../../../stencil-public-runtime';
export interface PricingTableItem {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  monthlyPrice: number;
  yearlyPrice: number;
}
/**
 * @name Pricing table
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSPricingTable {
  el: HTMLElement;
  clickItem: EventEmitter;
  styles?: string;
  items?: PricingTableItem[];
  selectedItem?: string;
  recommendedItem?: string;
  inputName: string;
  locale?: {
    perMonth?: string;
    perYear?: string;
    recommended?: string;
  };
  private classNames;
  handleTheme(): void;
  componentDidLoad(): void;
  getComponentClassName: () => string;
  getItemClassName: (item: PricingTableItem) => string;
  render(): any;
}
