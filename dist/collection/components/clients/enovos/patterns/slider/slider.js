import { Component, Element, Event, Method, Prop, h } from '@stencil/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Slider
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSSlider {
  constructor() {
    this.classNames = {
      EL: 'slider',
    };
    this.onSlideChange = () => {
      this.slideChange.emit({
        isBeginning: this.swiper.isBeginning,
        isEnd: this.swiper.isEnd,
      });
    };
    this.onInit = () => {
      this.onSlideChange();
    };
  }
  async slideNext() {
    this.swiper.slideNext();
  }
  async slidePrev() {
    this.swiper.slidePrev();
  }
  async appendSlide(items) {
    if (this.swiper) {
      this.swiper.appendSlide(items.map((slideContent) => `<div class="swiper-slide">${slideContent}</div>`));
    }
    this.slideChange.emit({
      isBeginning: this.swiper.isBeginning,
      isEnd: this.swiper.isEnd,
    });
  }
  async removeAllSlides() {
    this.swiper.removeAllSlides();
  }
  handleTheme() {
    const handleThemeChange = theme => {
      Array.from(this.el.classList).filter(className => {
        return className.startsWith('theme--');
      }).forEach(themeClassName => {
        this.el.classList.remove(themeClassName);
      });
      // Add new theme class
      this.el.classList.add(`theme--${theme}`);
    };
    themeOnChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    const id = this.el.getAttribute('id');
    this.swiper = new Swiper(`#${id} .swiper-container`, {
      spaceBetween: 32,
      slidesPerView: this.slidesPerView || 'auto',
      init: false,
      on: {
        init: this.onInit,
        slideChange: this.onSlideChange,
      },
    });
    this.swiper.init();
  }
  render() {
    return (h("div", { class: this.classNames.EL },
      h("div", { class: "swiper-container" },
        h("div", { class: "swiper-wrapper" }))));
  }
  static get is() { return "eds-slider"; }
  static get originalStyleUrls() { return {
    "$": ["slider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["slider.css"]
  }; }
  static get properties() { return {
    "slidesPerView": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | 'auto'",
        "resolved": "\"auto\" | number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "slides-per-view",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "slideChange",
      "name": "slideChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "slideNext": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "slidePrev": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "appendSlide": {
      "complexType": {
        "signature": "(items: any[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "removeAllSlides": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
