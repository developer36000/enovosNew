import { Component, Element, Method, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { IsVisibleObservable } from '../../../../utils/isVisibleObservable';
import { TapEvent } from '../../../../utils/tapEvent';
/**
 * @name Video
 * @description Video element
 * @path foundation/media
 * @urlDesign design-ressources-videos-generic.html
 * @documented true
 */
export class ENOVOSVideo {
  constructor() {
    this.fitted = false;
    this.cover = false;
    this.playOnClick = false;
    this.videoFullWidth = false;
    this.videoMuted = false;
    this.videoLoop = false;
    this.videoControls = false;
    this.videoAutoplay = false;
    this.classNames = {
      EL: 'video',
    };
    this.video = undefined; // observer;
    this._videoObservable = undefined; // observer;
    this._clickHandler = undefined; // click event;
  }
  /** INJECT_ANCHOR */
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
   */
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
  async componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.video = this.el.querySelector('video');
    this.setVideoAttributes();
    if (this.videoAutoplay === true) {
      this._videoObservable = new IsVisibleObservable(this.el, async (value) => {
        if (value === true) {
          await this.play();
          this._videoObservable.disconnectObserver();
        }
      }, {
        threshold: 0,
      });
    }
  }
  componentDidUpdate() {
    this.setVideoAttributes();
    if (this.videoAutoplay === false && this.video) {
      this.stop();
    }
  }
  async componentDidRender() {
    this.setVideoAttributes();
    if (this.videoAutoplay === true && this.video) {
      await this.play();
    }
    if (this.playOnClick === true) {
      this._clickHandler = new TapEvent(this.el, async () => {
        await this.play();
      });
    }
  }
  /**
   * @description Play the animation
   */
  async play() {
    if (this.video) {
      if (this.video.currentTime > 0) {
        this.video.pause();
        this.video.load();
        await this.video.play();
      }
      else {
        await this.video.play();
      }
    }
  }
  /**
   * @description Pause the animation
   */
  async pause() {
    if (this.video) {
      this.video.pause();
    }
  }
  /**
   * @description Stop the animation
   */
  async stop() {
    if (this.video) {
      this.video.pause();
      this.video.load();
    }
  }
  setVideoAttributes() {
    if (this.video) {
      if (this.videoAutoplay) {
        this.video.setAttribute('autoplay', true);
      }
      else if (this.video.hasAttribute('autoplay')) {
        this.video.removeAttribute('autoplay');
      }
      if (this.videoControls) {
        this.video.setAttribute('controls', true);
      }
      else if (this.video.hasAttribute('controls')) {
        this.video.removeAttribute('controls');
      }
      if (this.videoLoop) {
        this.video.setAttribute('loop', true);
      }
      else if (this.video.hasAttribute('loop')) {
        this.video.removeAttribute('loop');
      }
      if (this.videoMuted) {
        this.video.muted = true;
      }
      else if (this.video.hasAttribute('muted')) {
        this.video.muted = false;
      }
    }
  }
  getFullWidth() {
    if (this.videoFullWidth === true) {
      return 'fullwidth';
    }
  }
  getFitted() {
    if (this.fitted === true) {
      return 'fitted';
    }
  }
  getCover() {
    if (this.cover === true) {
      return 'cover';
    }
  }
  getType() {
    if (this.type) {
      return `video/${this.type}`;
    }
  }
  getClasses() {
    return [
      this.getFullWidth(),
      this.getFitted(),
      this.getCover(),
      this.classNames.EL,
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("video", { height: this.height, width: this.width, poster: this.posterPath, preload: this.preload, class: this.getClasses(), muted: true, playsinline: true },
      h("source", { src: this.path, type: this.getType() })));
  }
  static get is() { return "eds-video"; }
  static get originalStyleUrls() { return {
    "$": ["video.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["video.css"]
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
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "path",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "height": {
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
      "attribute": "height",
      "reflect": false
    },
    "width": {
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
      "attribute": "width",
      "reflect": false
    },
    "posterPath": {
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
      "attribute": "poster-path",
      "reflect": false
    },
    "preload": {
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
      "attribute": "preload",
      "reflect": false
    },
    "fitted": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "fitted",
      "reflect": false,
      "defaultValue": "false"
    },
    "cover": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cover",
      "reflect": false,
      "defaultValue": "false"
    },
    "playOnClick": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "play-on-click",
      "reflect": false,
      "defaultValue": "false"
    },
    "videoFullWidth": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-full-width",
      "reflect": false,
      "defaultValue": "false"
    },
    "videoMuted": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-muted",
      "reflect": false,
      "defaultValue": "false"
    },
    "videoLoop": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-loop",
      "reflect": false,
      "defaultValue": "false"
    },
    "videoControls": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-controls",
      "reflect": false,
      "defaultValue": "false"
    },
    "videoAutoplay": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-autoplay",
      "reflect": false,
      "defaultValue": "false"
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
    }
  }; }
  static get elementRef() { return "el"; }
}
