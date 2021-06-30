/**
 * @name Loader Skeleton
 * @description Display a placeholder preview of the content before the data gets loaded to reduce load-time frustration. Loader Skeleton should remain positioned where content will load to avoid unexpected shifts in positionning.
 * @path foundation
 * @documented true
 */
export declare class ENOVOSLoaderSkeleton {
  el: HTMLElement;
  shape: 'circle' | 'card' | 'square';
  size?: string;
  stretch?: boolean;
  shimmer?: boolean;
  classNames: {
    EL: string;
  };
  /** REMOVABLE START */
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
