import { EventEmitter } from '../../../stencil-public-runtime';
import { ActionListItem } from '../../../models/action-list-item';
/**
 * @name Action List
 * @description The Action List provides a pattern to display different types of component depending a configuration and manage events on them.
 * @path patterns
 * @documented true
 */
export declare class ENOVOSActionList {
  el: HTMLElement;
  clickActionItem: EventEmitter;
  activeAction: string;
  fitted: boolean;
  size?: string;
  segmented: boolean;
  actions: ActionListItem[];
  actionItems: ActionListItem[];
  classNames: {
    EL: string;
    CONTAINER: string;
    BADGE: string;
    ITEM: string;
    SHAPE: string;
    FITTED: string;
    SEGMENTED: string;
  };
  initEvents: boolean;
  _clickItemHandler: any[];
  _observable: any;
  /**
   * @description Init the dataitem
   */
  setActionListItems(items: ActionListItem[]): Promise<void>;
  setActiveAction(id: string): Promise<void>;
  watchActionsHandler(newData: ActionListItem[], oldData: ActionListItem[]): void;
  private attachObservable;
  componentWillLoad(): void;
  /**
   * @description Init component variables
   */
  handleTheme(): void;
  componentDidLoad(): void;
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidUpdate(): void;
  componentDidRender(): void;
  /**
   * @description Define the event on items
   */
  clickItemHandler(item: ActionListItem): void;
  private initActions;
  private setEvents;
  /**
   * @description Set the active item class depending the activeAction property
   * @return {string}
   */
  getActionConfiguration(item: ActionListItem, propKey: any): any;
  setShape(): void;
  private getCurrentActionConfiguration;
  private getSize;
  render(): any;
}
