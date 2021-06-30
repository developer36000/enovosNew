import { ScrollspyItem } from '../../../../models/components/scrollspy-item';
/**
 * @name Scrollspy
 * @description Scrollspy
 * @path components
 * @documented false
 */
export declare class ENOVOSScrollspy {
  el: HTMLElement;
  items: ScrollspyItem[];
  target?: string;
  scrollspyItems: ScrollspyItem[];
  currentItem: number;
  classNames: {
    EL: string;
    ITEM: string;
    ACTIVE: string;
    WATCHER: string;
  };
  _observable: any[];
  tmpcurrentItem: any[];
  scrollContainer: any;
  watchItemsHandler(newData: [], oldData: []): void;
  handleTheme(): void;
  componentDidLoad(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  initData(): void;
  clickHandler(item: ScrollspyItem, index: any): boolean;
  watchObservable(): void;
  render(): any;
}
