import { EventEmitter } from '../../../../../stencil-public-runtime';
import { AppDataBlock } from '../../../../../models/patterns/app-data-block';
/**
 * @name App Data Block
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSAppDataBlock {
  el: HTMLElement;
  clickDataBlock: EventEmitter;
  data?: AppDataBlock;
  blockData: AppDataBlock;
  private classNames;
  uuid: any;
  setData(data: any): Promise<void>;
  watchItemsHandler(newData: any, oldData: any): void;
  componentWillLoad(): void;
  private initData;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
