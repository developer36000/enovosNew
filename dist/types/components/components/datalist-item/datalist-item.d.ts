import { EventEmitter } from '../../../stencil-public-runtime';
import { DatalistItem, DatalistItemData } from '../../../models/components/datalist-item';
/**
 * @name Datalist Item
 * @description The component manages data received from an API and displays them following a specific structure.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-datalist-item.html
 */
export declare class ENOVOSDatalistItem {
  el: HTMLElement;
  clickDatalistItem: EventEmitter;
  clickable?: boolean;
  padding?: string;
  collapsed?: boolean;
  expandable?: boolean;
  indent?: number;
  styles?: string;
  item: DatalistItem;
  templateName: any;
  type: any;
  alias: any;
  parameters: any;
  collapsedConfig: any;
  collapseContainerHeight: any;
  highlight: any;
  eventInit: boolean;
  _clickItemHandler: any;
  _activeSelectorActionDropdown: any;
  _clickActionDropdown: any;
  _observable: any;
  classNames: {
    EL: string;
    LEFT: string;
    RIGHT: string;
    FIRST: string;
    SECOND: string;
    THIRD: string;
    MAIN: string;
    WRAPPER: string;
    HEADER: string;
    BODY: string;
    HEADER_LEFT: string;
    BODY_LEFT: string;
    BODY_LEFT_ADDITIONAL: string;
    FOOTER_LEFT: string;
    HEADER_RIGHT: string;
    BODY_RIGHT: string;
    FOOTER_RIGHT: string;
    BUTTON: string;
    BADGE: string;
    ICON: string;
    TEXT: string;
    TAGS: string;
    TAG: string;
    DATE: string;
    IMAGE: string;
    MESSAGE: string;
    DROPDOWN: string;
    PROGRESS_BAR: string;
    RADIO_BUTTON: string;
    LEADING_RADIO_BUTTON: string;
    TRAILING_RADIO_BUTTON: string;
    COLUMN: string;
    WITH_TAGS: string;
    COLLAPSED: string;
    COLLAPSE: string;
    ACTIVE: string;
    HAS_COLLAPSE_ICON: string;
  };
  mapping: {
    '1-column': {
      notification: {
        header: string;
        body: string;
        date: string;
        badge: string;
        icon: string;
      };
      mail: {
        header: string;
        body: string;
        date: string;
        badge: string;
        icon: string;
      };
    };
    '2-columns': {
      left: {
        default: {
          text: string;
          footer: string;
          badge: string;
          icon: string;
        };
        news: {
          header: string;
          text: string;
        };
        account: {
          badge: string;
          image: string;
          header: string;
          body: string;
          'body-additional': string;
          footer: string;
          radio: string;
        };
        document: {
          badge: string;
          header: string;
          body: string;
          footer: string;
        };
        'selection-list': {
          body: string;
        };
      };
      right: {
        default: {
          text: string;
          footer: string;
          link: string;
        };
        account: {
          header: string;
          body: string;
          radio: string;
        };
        document: {
          button: string;
          icon: string;
        };
        'selection-list': {
          icon: string;
        };
        fund: {
          'menu-dropdown': string;
          tags: string;
        };
      };
    };
    '3-columns': {
      first: {
        'security-position': {
          body: string;
          image: string;
          footer: string;
        };
      };
      second: {
        'security-position': {
          header: string;
          body: string;
        };
      };
      third: {
        'security-position': {
          header: string;
          'header-additional': string;
          body: string;
          'body-additional': string;
        };
      };
    };
    table: {
      badge: string;
      image: string;
      header: string;
      body: string;
      'body-additional': string;
      footer: string;
      radio: string;
      tags: string;
    };
  };
  /**
   * @description Init the dataitem
   */
  setDatalistItem(item: DatalistItem): Promise<void>;
  /**
   * @description Collapse item
   */
  collapse(value: boolean): Promise<void>;
  /**
   * @description Init component
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Init component
   */
  componentDidRender(): void;
  /**
   * @description Update event on items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidUpdate(): void;
  /**
   * @description Define the click event on datalist item
   */
  clickNavItemHandler(): void;
  private collapseContent;
  private attachObservable;
  initCollapseHeight(): void;
  /**
   * @description Generate a 2 columns template
   */
  oneColumnTemplate(): any[];
  /**
   * @description Generate a 2 columns template
   */
  twoColumnsTemplate(): any[];
  /**
   * @description Generate a 3 columns template
   */
  threeColumnsTemplate(): any[];
  tableTemplate(): "" | any[];
  getAliasTemplate(key?: string): any[];
  renderDefault2ColumnsLeft(objectPropriety: any): any[];
  /**
   * @description Generate a 2 columns template
   */
  renderDefault2ColumnsRight(objectPropriety: any): any[];
  getTypoComponent(parameters: DatalistItemData, item: any, itemClass?: string, styles?: any[]): any;
  renderColumn(parameters: DatalistItemData, objectPropriety: any, columnClass: any, indexColumn?: number): any[];
  private hasCollapseIcon;
  private setCollapseIcon;
  getItemSize(parameters: any, item: any): "" | "md" | "sm" | "xlg" | "lg" | "xxs" | "xs";
  getAdditionalStyles(parameters: any, propriety?: string): any;
  getLineStyles(): string;
  private isAccordionConfig;
  private isCollapsedConfig;
  render(): any;
}
