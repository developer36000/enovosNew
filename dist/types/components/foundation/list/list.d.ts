import { ListItem } from '../../../models/list-item';
/**
 * @name List
 * @description List element. Declined in 2 sizes (normal and large).
 * @path foundation
 * @documented true
 */
export declare class ENOVOSList {
  el: HTMLElement;
  align?: string;
  icon?: string;
  iconStyles?: string;
  typographyCategory?: string;
  items: ListItem[];
  listItems: ListItem[];
  classNames: {
    EL: string;
    ICON: string;
  };
  /** INJECT_ANCHOR */
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  setListItems(data: any): Promise<void>;
  watchItemsHandler(newData: [], oldData: []): void;
  private initData;
  /**
   * @description Control if a icon parameter should be display
   * @return {boolean}
   */
  hasIcon(): boolean;
  /**
   * @description Get alignment class
   * @return {string}
   */
  private getAlignmentClass;
  /**
   * @description Get icon class
   * @return {string}
   */
  private getIconClass;
  /**
   * @description Get size class
   * @return {string}
   */
  private getTypographyCategoryClass;
  /** REMOVABLE START */
  render(): any;
}
