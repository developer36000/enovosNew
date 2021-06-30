/**
 * @name Image
 * @description Image element. src and alt parameters are available.
 * @path foundation/media
 * @urlDesign design-ressources-illustrations-generic.html
 * @documented true
 */
export declare class ENOVOSImage {
  el: HTMLElement;
  alt?: string;
  src: string;
  notFitted?: boolean;
  size?: string;
  classNames: {
    EL: string;
  };
  /** INJECT_ANCHOR */
  handleTheme(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * TODO: found another method to do this... not very ok with this solution
   */
  private notFittedClass;
  setMainElementClasses(): string;
  /** REMOVABLE START */
  render(): any;
}
