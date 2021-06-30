import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @name Uploaded image
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSUploadedImage {
  el: HTMLElement;
  clickView: EventEmitter;
  clickRemove: EventEmitter;
  imageSrc?: string;
  fileName?: string;
  fileSize?: string;
  overlayDisabled?: boolean;
  width?: string;
  height?: string;
  variation?: string;
  private classNames;
  handleTheme(): void;
  componentDidLoad(): void;
  handleClickView: () => void;
  handleClickRemove: () => void;
  getComponentClassName: () => string;
  getStyleAttributeValue: () => {
    width: string;
    height: string;
  };
  render(): any;
}
