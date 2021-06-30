/**
 * @name Grid Area Item
 * @description Grid Area Item
 * @path layout/grid-area-item
 * @documented false
 */
export declare class ENOVOSGridAreaItem {
  el: HTMLElement;
  styles: string;
  area: string;
  classNames: {
    EL: string;
  };
  /**
   * @description Set the area classes (header, main, footer...)
   * @return {string}
   */
  getAreaClass(): string;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
