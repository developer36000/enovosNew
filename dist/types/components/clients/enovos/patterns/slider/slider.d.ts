import { EventEmitter } from '../../../../../stencil-public-runtime';
import 'swiper/swiper-bundle.css';
/**
 * @name Slider
 * @description TBD
 * @path patterns
 * @documented false
 */
export declare class ENOVOSSlider {
  el: HTMLElement;
  slideChange: EventEmitter;
  slidesPerView?: number | 'auto';
  slideNext(): Promise<void>;
  slidePrev(): Promise<void>;
  appendSlide(items: any[]): Promise<void>;
  private classNames;
  removeAllSlides(): Promise<void>;
  private swiper;
  onSlideChange: () => void;
  onInit: () => void;
  handleTheme(): void;
  componentDidLoad(): void;
  render(): any;
}
