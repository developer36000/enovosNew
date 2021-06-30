import { EventEmitter } from '../../../stencil-public-runtime';
import { TabsItem } from '../../../models/foundation/tabs';
/**
 * @name Tabs
 * @description Tabs allow to quickly navigate between different sections.
 * @path foundation
 * @documented true
 * @prop --Tabs_items: Refer to tabs items attribute, consult the corresponding component documentation. Object TabsItem
 * @prop --Tabs-Item_id: Id of the tab item
 * @prop --Tabs-Item_title: Text title of the tab item
 * @prop --Tabs-Item_icon: Icon configuration of the tab item. Object TabsItemIcon
 * @prop --Tabs-Item_badge: Badge configuration of the tab item. Object TabsItemBadge
 * @prop --Tabs-Item_positioned_icon: Icon position of the tab item. Object TabsItemPositionedIcon
 * @prop --Tabs-Item-Badge_text:  Refer to badge text attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Badge_styles:  Refer to badge styles attribute, consult the corresponding component documentation. Default is 'success'
 * @prop --Tabs-Item-Badge_size:  Refer to badge size attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Icon_icon:  Refer to icon attribute, consult the corresponding component documentation
 * @prop --Tabs-Item-Icon_styles:  Refer to icon styles attribute, consult the corresponding component documentation.
 * @prop --Tabs-Item-Icon_size:  Refer to icon size attribute, consult the corresponding component documentation
 */
export declare class ENOVOSTabs {
  el: HTMLElement;
  clickTabsItem: EventEmitter;
  activeItem?: string;
  styles?: string;
  backgroundStyles?: string;
  shrink?: boolean;
  separated: boolean;
  border?: boolean;
  items: TabsItem[];
  tabItems: TabsItem[];
  classNames: {
    EL: string;
    ITEM: string;
    ICON__CONTAINER: string;
    ICON: string;
    BADGE: string;
  };
  eventInit: boolean;
  _clickItemHandler: any[];
  /** INJECT_ANCHOR */
  setItems(data: TabsItem[]): Promise<void>;
  watchItemsHandler(newData: TabsItem[], oldData: TabsItem[]): void;
  private initData;
  componentWillLoad(): void;
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender(): void;
  /**
   * @description Define the event on items
   */
  private clickMenuItemHandler;
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  private getActiveItemClasses;
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  private isDisabledItemClass;
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  private isShrink;
  /**
   * @description Set the separated class to create space between each item
   * @return {string}
   */
  private isSeparated;
  private hasBorder;
  /** REMOVABLE START */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
