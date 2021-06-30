import { EventEmitter } from '../../../../../stencil-public-runtime';
export interface IStep {
  id: string;
  title: string;
  isValid?: boolean;
}
/**
 * @name Steps
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSSteps {
  el: HTMLElement;
  items: IStep[];
  activeItemId?: string;
  styles?: string;
  itemsClickable?: boolean;
  clickStep: EventEmitter;
  private classNames;
  componentWillLoad(): void;
  getComponentClassName: () => string;
  getItemClassName: (item: IStep) => string;
  onClickItem: (id: string) => void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
