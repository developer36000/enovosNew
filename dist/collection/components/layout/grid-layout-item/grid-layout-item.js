import { Component, Element, Prop, h, Host } from '@stencil/core';
import anime from 'animejs';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
/**
 * @name Grid Layout item
 * @description Grid Layout item
 * @path layout/grid-layout-item
 * @documented false
 */
export class ENOVOSGridLayoutItem {
  constructor() {
    this.classNames = {
      EL: 'grid-layout-item',
      STRETCH_COLUMN: '--stretch-column',
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
    if (!this.observer && this.animation)
      this.setAnimation();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnectObserver();
  }
  setAnimation() {
    this.observer = new IsVisibleObservable(this.el, this.animate.bind(this), { threshold: 0.2 });
  }
  animate(isIntersecting) {
    if (isIntersecting && this.observer)
      anime({
        targets: this.el,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 400,
        delay: anime.stagger(300, { start: 200 }),
      })
        .finished
        .then(() => {
        this.observer.disconnectObserver.bind(this.observer);
        this.disconnectedCallback();
        this.el.style.transform = '';
      });
  }
  // Get aligment classes
  getAlignment() {
    const classes = [];
    if (this.alignContent) {
      classes.push(`${this.classNames.EL}--${this.alignContent}`);
    }
    return classes.join(' ');
  }
  render() {
    return (h(Host, { class: this.animation ? `${this.classNames.EL}--has-animation` : '' },
      h("div", { class: [
          this.classNames.EL,
          (this.stretchColumn === true) ? `${this.classNames.EL}${this.classNames.STRETCH_COLUMN}` : '',
          LayoutPropsHelper.getStyles(this.styles, ''),
          this.getAlignment(),
        ].join(' ') },
        h("slot", null))));
  }
  static get is() { return "eds-grid-layout-item"; }
  static get originalStyleUrls() { return {
    "$": ["grid-layout-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-layout-item.css"]
  }; }
  static get properties() { return {
    "styles": {
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
      "attribute": "styles",
      "reflect": false
    },
    "stretchColumn": {
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
      "attribute": "stretch-column",
      "reflect": false
    },
    "alignContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'center' | 'right'",
        "resolved": "\"center\" | \"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "align-content",
      "reflect": false
    },
    "animation": {
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
      "attribute": "animation",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
