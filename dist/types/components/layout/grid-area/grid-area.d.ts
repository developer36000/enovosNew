/**
 * @name Grid Area
 * @description Grid Area
 * @path layout/grid-area
 * @documented false
 */
export declare class ENOVOSGridArea {
  el: HTMLElement;
  styles: string;
  hasHeader: boolean;
  hasFooter: boolean;
  classNames: {
    EL: string;
    NO_HEADER: string;
    NO_FOOTER: string;
  };
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  render(): any;
}
