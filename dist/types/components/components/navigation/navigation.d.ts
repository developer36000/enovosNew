import { EventEmitter } from '../../../stencil-public-runtime';
import { NavigationItem } from '../../../models/patterns/navigation-item';
/**
 * @name Navigation
 * @description Display navigation links labels and/or icons based on an exposed API. Click on items returns a custom event that developers can catch and manage.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-navigation-bottom.html
 * @prop --styles_[#{$color-name}]: Color of the items (Default is primary. Available colors are white, brand-expressive-orange-dark-on-light (with light background), brand-expressive-orange-dark-on-dark (with dark background))
 */
export declare class ENOVOSNavigation {
  el: HTMLElement;
  clickNavItem: EventEmitter;
  iconOnly?: boolean;
  textOnly?: boolean;
  noBorder?: boolean;
  shrink?: boolean;
  activeItem: string;
  position?: string;
  size?: string;
  styles: string;
  fontWeight?: string;
  fontSize?: string;
  items: NavigationItem[];
  menuItems: NavigationItem[];
  classNames: {
    EL: string;
    ITEM: string;
    ICON__CONTAINER: string;
    ICON: string;
    BADGE: string;
    TEXT__CONTAINER: string;
    TEXT: string;
    MEDIA: string;
    LEADING: string;
    TRAILING: string;
    LOADING: string;
  };
  _clickNavItemHandler: any[];
  _observable: any;
  updateItems: boolean;
  launchResizeDebounce: any;
  componentWillLoad(): void;
  /**
   * @description Init component variables
   */
  handleTheme(): void;
  componentDidLoad(): void;
  handleResize(): void;
  setItems(data: NavigationItem[]): Promise<void>;
  setActiveItem(id: string): Promise<void>;
  watchItemsHandler(newData: NavigationItem[], oldData: NavigationItem[]): void;
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender(): void;
  private initData;
  private attachEvents;
  private attachObservable;
  /**
   * @description Define the event on menu items
   */
  private clickNavItemHandler;
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  private isIconOnlyClass;
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  private isTextOnlyClass;
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  private isShrinkClass;
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  private isNoBorderClass;
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item: NavigationItem): string;
  /**
   * @description Set the position class
   * @return {string}
   */
  private positionClass;
  /**
   * @description Get component size
   */
  private getSize;
  private setActiveStatus;
  /**
   * @return true if item in param is currently active
   */
  private isActiveItem;
  /**
   * @description Init width of element to avoid gap when changing the font fontWeight
   * and set data attribute to correctly set the border position and size
   */
  private setBorderItemsAttribute;
  private getFontSize;
  private getFontWeight;
  /**
   * @return true if media has state defined
   */
  private hasMediaState;
  /**
   * @return states and styles classes for each states as string array
   */
  private getMediaStates;
  /**
   * @return styles classes for one state as string array
   */
  private getMediaStateStyles;
  /**
   * @return main styles classes as string array
   */
  private getMediaStyles;
  /**
   * @return trailing or leading configured icon as preact string
   */
  private getPositionnedMedia;
  render(): any;
}
