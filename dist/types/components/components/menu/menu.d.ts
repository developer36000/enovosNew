import { EventEmitter } from '../../../stencil-public-runtime';
import { MenuItem } from '../../../models/menu-item';
/**
 * @name Menu
 * @description A menu allows to navigate between differents parts of the application.
 * @path components
 * @documented true
 */
export declare class ENOVOSMenu {
  el: HTMLElement;
  clickMenuItem: EventEmitter;
  activeItem?: string;
  disabledItem?: boolean;
  size?: string;
  iconOnly?: boolean;
  styles?: string;
  indented?: boolean;
  level?: number;
  items: MenuItem[];
  menuItems: MenuItem[];
  classNames: {
    EL: string;
    ITEM: string;
    ICON__CONTAINER: string;
    BADGE__CONTAINER: string;
    IMAGE__CONTAINER: string;
    LEADING: string;
    TRAILING: string;
    INDENTED: string;
    ICON: string;
    BADGE: string;
    IMAGE: string;
    LEFT: string;
    RIGHT: string;
  };
  /**
   * @description Set the default active item
   */
  setActiveItem(key: any): Promise<void>;
  setItems(data: MenuItem[]): Promise<void>;
  watchItemsHandler(newData: MenuItem[], oldData: MenuItem[]): void;
  private initData;
  componentWillLoad(): void;
  /**
   * @description Init component variables
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Define the event on menu items
   */
  clickMenuItemHandler(e: any, item: MenuItem): boolean;
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  isActiveItemClass(item: MenuItem): string;
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item: MenuItem): string;
  isNoLinkItemClass(item: MenuItem): string;
  /**
   * @description Get component size
   */
  private getSize;
  private displayComponent;
  render(): any;
}
