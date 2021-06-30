import { Component, Element, Method, Prop, h } from '@stencil/core';
import lottie from 'lottie-web/build/player/lottie_light';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
import { IsVisibleObservable } from '../../../../utils/isVisibleObservable';
/**
 * @name Motion
 * @description The Motion component can display an SVG animation using the Lottie plugin. Animation can be provided via an URL or JSON.
 * @path foundation/media
 * @urlDesign design-ressources-animations-generic.html
 * @documented true
 */
export class ENOVOSMotion {
  constructor() {
    this.loop = false; // Is the animation should loop or not
    this.autoplay = false; // Will start playing as soon as it is ready
    this.classNames = {
      EL: 'motion',
    };
    this._motionObservable = undefined; // observer;
  }
  /** INJECT_ANCHOR */
  componentWillUpdate() {
    if (this.animation) {
      this.animation.destroy();
    }
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
    // If the motion should be play, start only when visible.
    if (this.autoplay) {
      this._motionObservable = new IsVisibleObservable(this.el, value => {
        if (value === true) {
          this.play();
          this._motionObservable.disconnectObserver();
        }
      }, {
        threshold: 0,
      });
    }
  }
  componentDidRender() {
    this.el.setAttribute('name', this.classNames.EL);
    const container = this.el.querySelector('div');
    let configAnimation = {
      container,
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: undefined,
      path: undefined,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        className: this.classNames.EL,
        viewBoxOnly: true,
      },
    };
    // Create the animation depending the given propriety animationData/path
    if (this.animationData && typeof this.animationData === 'object') {
      delete configAnimation.path;
      configAnimation = Object.assign(Object.assign({}, configAnimation), { animationData: this.animationData });
      this.animation = lottie.loadAnimation((configAnimation));
    }
    else if (this.path && typeof this.path === 'string') {
      delete configAnimation.animationData;
      configAnimation = Object.assign(Object.assign({}, configAnimation), { path: this.path });
      this.animation = lottie.loadAnimation((configAnimation));
    }
  }
  /**
   * @description Play the animation
   */
  async play() {
    if (this.animation) {
      this.animation.stop(); // To force play in case of autoplay
      this.animation.play();
    }
  }
  /**
   * @description Pause the animation
   */
  async pause() {
    if (this.animation) {
      this.animation.pause();
    }
  }
  /**
   * @description Stop the animation
   */
  async stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }
  /**
   * @description Destroy the animation
   */
  async destroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      ComponentPropsHelper.getSize(this.size, this.classNames.EL),
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: this.setMainElementClasses() }));
  }
  static get is() { return "eds-motion"; }
  static get originalStyleUrls() { return {
    "$": ["motion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["motion.css"]
  }; }
  static get properties() { return {
    "path": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "path",
      "reflect": false
    },
    "animationData": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "animation-data",
      "reflect": false
    },
    "loop": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "loop",
      "reflect": false,
      "defaultValue": "false"
    },
    "autoplay": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "autoplay",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "play": {
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
        "tags": [{
            "name": "description",
            "text": "Play the animation"
          }]
      }
    },
    "pause": {
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
        "tags": [{
            "name": "description",
            "text": "Pause the animation"
          }]
      }
    },
    "stop": {
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
        "tags": [{
            "name": "description",
            "text": "Stop the animation"
          }]
      }
    },
    "destroy": {
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
        "tags": [{
            "name": "description",
            "text": "Destroy the animation"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
