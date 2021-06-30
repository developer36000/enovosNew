import { EventEmitter } from '../../../../../stencil-public-runtime';
import { AppQuickAction } from '../../../../../models/patterns/app-quick-action';
/**
 * @name App Quick Actions
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSAppQuickActions {
  el: HTMLElement;
  clickQuickAction: EventEmitter;
  data: AppQuickAction;
  styles?: string;
  contractData: AppQuickAction;
  private classNames;
  setData(data: any): Promise<void>;
  watchItemsHandler(newData: any, oldData: any): void;
  componentWillLoad(): void;
  private initData;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
