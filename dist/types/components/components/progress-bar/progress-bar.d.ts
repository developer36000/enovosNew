/**
 * @name Progress Bar
 * @description The Progress Bar is an indicator which inform user about the status of ongoing processes. The component can also display additional information about status with 2 specific props below the progress bar.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-progress-bar.html
 */
export declare class ENOVOSProgressBar {
  el: HTMLElement;
  progressMax: number;
  progressValue: number;
  leadingText?: string;
  trailingText?: string;
  titleText?: string;
  styles?: string;
  light?: boolean;
  animated?: boolean;
  graduated?: boolean;
  classNames: {
    EL: string;
    BAR: string;
    TITLE: string;
    GRADUATE: string;
    VALUE: string;
    BOTTOM: string;
    LEFT: string;
    RIGHT: string;
    ANIMATED: string;
    ACTIVE: string;
  };
  graduatedItems: any[];
  ratio: number;
  /**
   * @description If the progress bar is in graduated mode,
   * generate an array of graduated definition
   */
  getGraduateItems(): any[];
  /**
   * @description When the component is loaded
   * Set the progress bar width on the ratio progress value / progress max
   */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
