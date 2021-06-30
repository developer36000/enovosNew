/**
 * @name Grid Layout item
 * @description Grid Layout item
 * @path layout/grid-layout-item
 * @documented false
 */
export declare class ENOVOSGridLayoutItem {
  el: HTMLElement;
  styles: string;
  stretchColumn: boolean;
  alignContent: 'left' | 'center' | 'right';
  animation?: boolean;
  private classNames;
  private observer;
  componentWillLoad(): void;
  handleTheme(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private setAnimation;
  private animate;
  private getAlignment;
  render(): any;
}
