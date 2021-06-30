/**
 * @name Adaptive Text
 * @description Used to adapt a typography component like paragraph or heading to the width of its own container.
 * @path layout
 * @documented true
 */
export declare class ENOVOSAdaptiveText {
  el: HTMLElement;
  type: string;
  content: string;
  fontWeight?: string;
  fontStyle?: string;
  super: any;
  font?: string;
  styles?: string;
  clampLines?: number;
  adapted: boolean;
  private classNames;
  private availableTypo;
  _observable: any;
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  watchContentHandler(newValue: any, oldValue: any): void;
  watchFontWeightHandler(newValue: any, oldValue: any): void;
  fitContent(): void;
  attachObservable(): void;
  render(): any;
}
