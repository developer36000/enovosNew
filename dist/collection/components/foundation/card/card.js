import { Component, Element, Event, Prop, h } from '@stencil/core';
import { compact } from 'lodash-es';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
/**
 * @name Card
 * @description A card groups information into a logical group, with or without an action attached to it.
 * @path foundation
 * @documented true
 */
export class ENOVOSCard {
  constructor() {
    this.trailingMedia = false; // Reverse media/content
    this.overlayMedia = '___SETTING_COMPONENTS_CARD_OVERLAY_MEDIA___';
    this.noBorder = false; // Remove card border
    this.overlay = false; // Display overlay
    this.videoPlay = false;
    this.videoAutoplay = false;
    this.videoLoop = false;
    this.clickable = false; // block
    this.direction = '___SETTING_COMPONENTS_CARD_DIRECTION___';
    this.classNames = {
      EL: 'card',
      MEDIA: '__media',
      CONTENT: '__content',
      VIDEO: '__video',
      CONTAINER: '__container',
      TRAILING_MEDIA: '--trailing-media',
      MEDIA_ONLY: '--media-only',
      MEDIA_CONTENT_ONLY: '--media-content-only',
      NO_BORDER: '--no-border',
      OVERLAY: '--has-overlay',
      OVERLAY_MEDIA: '--has-overlay-media',
      CLICKABLE: '--clickable',
      HORIZONTAL: '--horizontal',
      VERTICAL: '--vertical',
      TOP: '--top',
      BOTTOM: '--bottom',
      LEFT: '--left',
      RIGHT: '--right',
    };
  }
  /** INJECT_ANCHOR */
  async componentDidRender() {
    const cardMedia = this.el.querySelector(`[slot="card-media"]`);
    const cardMediaContent = this.el.querySelector(`[slot="card-media-content"]`);
    const cardMediaTopLeft = this.el.querySelector(`[slot="card-media-top-left"]`);
    const cardMediaTopRight = this.el.querySelector(`[slot="card-media-top-right"]`);
    const cardMediaBottomLeft = this.el.querySelector(`[slot="card-media-bottom-left"]`);
    const cardMediaBottomRight = this.el.querySelector(`[slot="card-media-bottom-right"]`);
    if (cardMedia) {
      let cardMediaClass = [`${this.classNames.EL}${this.classNames.MEDIA}`];
      cardMediaClass = cardMediaClass.concat(ComponentPropsHelper.setGlobalStyles(this.backgroundMedia, this.classNames.EL).split(' '));
      cardMedia.className = '';
      cardMedia.classList.add(...compact(cardMediaClass));
    }
    if (cardMediaContent) {
      const cardMediaContentClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTENT}`];
      cardMediaContent.classList.add(...compact(cardMediaContentClass));
    }
    if (cardMediaTopLeft) {
      const cardMediaTopLeftClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.TOP}${this.classNames.LEFT}`];
      cardMediaTopLeft.classList.add(...compact(cardMediaTopLeftClass));
    }
    if (cardMediaTopRight) {
      const cardMediaTopRightClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.TOP}${this.classNames.RIGHT}`];
      cardMediaTopRight.classList.add(...compact(cardMediaTopRightClass));
    }
    if (cardMediaBottomLeft) {
      const cardMediaBottomLeftClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.BOTTOM}${this.classNames.LEFT}`];
      cardMediaBottomLeft.classList.add(...compact(cardMediaBottomLeftClass));
    }
    if (cardMediaBottomRight) {
      const cardMediaBottomRightClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.BOTTOM}${this.classNames.RIGHT}`];
      cardMediaBottomRight.classList.add(...compact(cardMediaBottomRightClass));
    }
    const cardContent = this.el.querySelector(`[slot="card-content"]`);
    if (cardContent) {
      let cardContentClass = [
        `${this.classNames.EL}${this.classNames.CONTENT}`,
        (['top', 'center', 'bottom'].includes(this.verticalAlignment)) ? `${this.classNames.EL}${this.classNames.CONTENT}--${this.verticalAlignment}` : '',
      ];
      cardContentClass = cardContentClass.concat(ComponentPropsHelper.setGlobalStyles(this.backgroundContent, this.classNames.EL).split(' '));
      cardContent.className = '';
      cardContent.classList.add(...compact(cardContentClass));
    }
    if (cardMedia && !cardContent && !cardMediaContent) {
      const card = this.el.querySelector(`.${this.classNames.EL}`);
      card.classList.add(`${this.classNames.EL}${this.classNames.MEDIA_ONLY}`);
    }
    if (cardMedia && !cardContent && cardMediaContent) {
      const card = this.el.querySelector(`.${this.classNames.EL}`);
      card.classList.add(`${this.classNames.EL}${this.classNames.MEDIA_CONTENT_ONLY}`);
    }
    if (this.videoLoop) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        video.videoLoop = true;
      }
    }
    if (this.videoAutoplay) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        video.videoAutoplay = true;
      }
    }
    if (this.videoPlay) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        await video.play();
      }
    }
  }
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
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    const sectionMedia = this.el.querySelector(`.${this.classNames.EL}${this.classNames.MEDIA}`);
    const sectionMediaContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTAINER}`);
    const sectionContent = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
    if (this.columns && this.columns > 0 && this.columnsMedia && this.columnsMedia > 0) {
      const widthLeft = (100 / this.columns) * this.columnsMedia;
      if (sectionMedia && sectionMediaContainer) {
        sectionMediaContainer.style.flex = `1 0 ${widthLeft}%`;
      }
      const widthRight = 100 - widthLeft;
      if (sectionContent) {
        sectionContent.style.flex = `1 0 ${widthRight}%`;
      }
    }
  }
  /**
   * @description Get card size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        (this.trailingMedia) ? `${this.classNames.EL}${this.classNames.TRAILING_MEDIA}` : '',
        (this.noBorder) ? `${this.classNames.EL}${this.classNames.NO_BORDER}` : '',
        (this.overlay) ? `${this.classNames.EL}${this.classNames.OVERLAY}` : '',
        (this.overlayMedia) ? `${this.classNames.EL}${this.classNames.OVERLAY_MEDIA}` : '',
        (this.clickable) ? `${this.classNames.EL}${this.classNames.CLICKABLE}` : '',
        (this.direction === 'vertical') ? `${this.classNames.EL}${this.classNames.VERTICAL}` : `${this.classNames.EL}${this.classNames.HORIZONTAL}`,
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' '), onClick: () => (this.clickable) ? this.clickCard.emit() : false, style: (this.backgroundImage) ? { 'background-image': `url("${this.backgroundImage}")` } : {} },
      h("div", { class: `${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTAINER}` },
        h("slot", { name: "card-media" }),
        h("slot", { name: "card-media-content" }),
        h("slot", { name: "card-media-top-left" }),
        h("slot", { name: "card-media-top-right" }),
        h("slot", { name: "card-media-bottom-left" }),
        h("slot", { name: "card-media-bottom-right" })),
      h("slot", { name: "card-content" }),
      (this.video)
        ? h("eds-video", { type: "mp4", class: [
            `${this.classNames.EL}${this.classNames.VIDEO}`,
            (this.videoPlay) ? `${this.classNames.EL}${this.classNames.VIDEO}--play` : '',
          ].join(' '), cover: true, path: this.video })
        : ''));
  }
  static get is() { return "eds-card"; }
  static get originalStyleUrls() { return {
    "$": ["card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["card.css"]
  }; }
  static get properties() { return {
    "columns": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns",
      "reflect": false
    },
    "columnsMedia": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-media",
      "reflect": false
    },
    "trailingMedia": {
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
      "attribute": "trailing-media",
      "reflect": false,
      "defaultValue": "false"
    },
    "backgroundMedia": {
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
      "attribute": "background-media",
      "reflect": false
    },
    "overlayMedia": {
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
      "attribute": "overlay-media",
      "reflect": false,
      "defaultValue": "'___SETTING_COMPONENTS_CARD_OVERLAY_MEDIA___'"
    },
    "backgroundContent": {
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
      "attribute": "background-content",
      "reflect": false
    },
    "backgroundImage": {
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
      "attribute": "background-image",
      "reflect": false
    },
    "noBorder": {
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
      "attribute": "no-border",
      "reflect": false,
      "defaultValue": "false"
    },
    "overlay": {
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
      "attribute": "overlay",
      "reflect": false,
      "defaultValue": "false"
    },
    "video": {
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
      "attribute": "video",
      "reflect": false
    },
    "videoPlay": {
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
      "attribute": "video-play",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-autoplay",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video-loop",
      "reflect": false,
      "defaultValue": "false"
    },
    "clickable": {
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
      "attribute": "clickable",
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
      "reflect": true
    },
    "styles": {
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
      "attribute": "styles",
      "reflect": false
    },
    "verticalAlignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'center' | 'bottom'",
        "resolved": "\"bottom\" | \"center\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "vertical-alignment",
      "reflect": false
    },
    "direction": {
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
      "attribute": "direction",
      "reflect": false,
      "defaultValue": "'___SETTING_COMPONENTS_CARD_DIRECTION___'"
    }
  }; }
  static get events() { return [{
      "method": "clickCard",
      "name": "clickCard",
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
  static get elementRef() { return "el"; }
}
