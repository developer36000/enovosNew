/**
 * @name Status icon
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSStatusIcon {
  el: HTMLElement;
  status?: 'open' | 'closed';
  text?: string;
  private classNames;
  handleTheme(): void;
  componentDidLoad(): void;
  private renderIcon;
  private getComponentClassName;
  render(): any;
}
