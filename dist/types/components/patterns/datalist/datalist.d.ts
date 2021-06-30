import { EventEmitter } from '../../../stencil-public-runtime';
import { DatalistItem } from '../../../models/components/datalist-item';
/**
 * @name Datalist
 * @description The pattern manages a list of Datalist Items and displays them vertically. Datalist manage the way to display children with accordion or not or even if lines should be alternated (even/odd templates).
 * @path patterns
 * @documented true
 */
export declare class ENOVOSDatalist {
  el: HTMLElement;
  clickDatalist: EventEmitter;
  clickable?: boolean;
  alternate?: boolean;
  alternateReverse?: boolean;
  styles?: string;
  padding?: string;
  items: DatalistItem[];
  datalistItems: DatalistItem[];
  classNames: {
    EL: string;
    ITEM: string;
    CHILDREN: string;
    ACCORDION: string;
    COLLAPSED: string;
    INDENT: string;
    LEVEL: string;
  };
  documentFragment: DocumentFragment;
  animationDuration: number;
  loaded: boolean;
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description catch custom event and manage expandable children
   * if the parent is configurate as expandable element
   */
  expandableItems(event: CustomEvent): void;
  /**
   * @description Init the dataitem
   */
  setDatalistItems(items: DatalistItem[]): Promise<void>;
  /**
   * @description Collapse item
   */
  collapse(value: boolean): Promise<void>;
  /**
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  watchItemsHandler(newData: DatalistItem[], oldData: DatalistItem[]): void;
  private initComponent;
  /**
   * @description Loop each item and generate render the HTML
   * @param {data} The data object provide by API
   * @param {parentID} The ID of parent item
   * @param {level} The depth of the data item
   */
  private initDatalist;
  /**
   * @description Render the html datalist
   */
  private renderDatalist;
  private isAccordionConfig;
  /**
   * @description Generate HTML for DatalistItem component
   */
  private getHTMLDatalistItem;
  /**
   * @description Generate HTML for DatalistItem children component
   */
  private getHTMLDatalistChildrenContainer;
  render(): any[];
}
