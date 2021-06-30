import { Subscription } from 'rxjs';
/**
 * @name Viewport
 * @description Tools to listen viewport changes
 * @path layout
 * @documented false
 */
export declare class ENOVOSViewport {
  el: HTMLElement;
  private viewport;
  private breakpoints;
  private subject;
  private classNames;
  connectedCallback(): void;
  subscribe(callback: (value: {
    prev: string;
    current: string;
  }) => any): Promise<Subscription>;
  getViewport(): Promise<string>;
  isBiggerThan(viewport: string): Promise<boolean>;
  isEqualTo(viewport: string): Promise<boolean>;
  isSmallerThan(viewport: string): Promise<boolean>;
  handleResize(): Promise<void>;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
