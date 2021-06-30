/**
 * @name Upload dragger
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSUploadDragger {
  el: HTMLElement;
  styles?: string;
  width?: string;
  height?: string;
  private classNames;
  handleTheme(): void;
  componentDidLoad(): void;
  getComponentClassName: () => string;
  getStyleAttributeValue: () => {
    width: string;
    height: string;
  };
  render(): any;
}
