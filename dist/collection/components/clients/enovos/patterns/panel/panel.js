import { Component, Element, Prop, h } from '@stencil/core';
const defaultPadding = {
  header: {
    top: '3',
    right: '3',
    bottom: '0',
    left: '3',
  },
  body: {
    top: '3',
    right: '3',
    bottom: '3',
    left: '3',
  },
  footer: {
    top: '2',
    right: '3',
    bottom: '2',
    left: '3',
  },
};
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Contract type icon
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSPanel {
  constructor() {
    this.fullHeight = false;
    this.headerWithShadow = false;
    this.headerNoMinHeight = true;
    this.classNames = {
      EL: 'panel',
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      if (this.hasNavigation) {
        className += ` ${this.classNames.EL}--with-navigation`;
      }
      if (this.fullHeight) {
        className += ` ${this.classNames.EL}--full-height`;
      }
      return className;
    };
    this.getHeaderClassName = () => {
      let className = `${this.classNames.EL}__header`;
      if (this.headerWithShadow) {
        className += ` ${this.classNames.EL}__header--with-shadow`;
      }
      if (this.headerNoMinHeight) {
        className += ` ${this.classNames.EL}__header--no-min-height`;
      }
      className += ` ${this.classNames.EL}__header--padding-top-${this.headerPadding.top}`;
      className += ` ${this.classNames.EL}__header--padding-right-${this.headerPadding.right}`;
      className += ` ${this.classNames.EL}__header--padding-bottom-${this.headerPadding.bottom}`;
      className += ` ${this.classNames.EL}__header--padding-left-${this.headerPadding.left}`;
      return className;
    };
    this.getBodyClassName = () => {
      let className = `${this.classNames.EL}__body`;
      className += ` ${this.classNames.EL}__body--padding-top-${this.bodyPadding.top}`;
      className += ` ${this.classNames.EL}__body--padding-right-${this.bodyPadding.right}`;
      className += ` ${this.classNames.EL}__body--padding-bottom-${this.bodyPadding.bottom}`;
      className += ` ${this.classNames.EL}__body--padding-left-${this.bodyPadding.left}`;
      return className;
    };
    this.getFooterClassName = () => {
      let className = `${this.classNames.EL}__footer`;
      className += ` ${this.classNames.EL}__footer--padding-top-${this.footerPadding.top}`;
      className += ` ${this.classNames.EL}__footer--padding-right-${this.footerPadding.right}`;
      className += ` ${this.classNames.EL}__footer--padding-bottom-${this.footerPadding.bottom}`;
      className += ` ${this.classNames.EL}__footer--padding-left-${this.footerPadding.left}`;
      return className;
    };
  }
  componentWillLoad() {
    this.hasNavigation = !!this.el.querySelector('[slot="header-navigation"]');
    this.hasHeaderActions = !!this.el.querySelector('[slot="header-actions"]');
    this.hasBodyContent = !!this.el.querySelector('[slot="body-content"]');
    this.hasFooterContent = !!this.el.querySelector('[slot="footer-content"]');
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
    if (this.fullHeight) {
      this.el.setAttribute('style', 'height: 100%');
    }
  }
  componentWillRender() {
    this.headerPadding = {
      top: this.headerPaddingTop || defaultPadding.header.top,
      right: this.headerPaddingRight || defaultPadding.header.right,
      bottom: this.headerPaddingBottom || defaultPadding.header.bottom,
      left: this.headerPaddingLeft || defaultPadding.header.left,
    };
    this.bodyPadding = {
      top: this.bodyPaddingTop || defaultPadding.body.top,
      right: this.bodyPaddingRight || defaultPadding.body.right,
      bottom: this.bodyPaddingBottom || defaultPadding.body.bottom,
      left: this.bodyPaddingLeft || defaultPadding.body.left,
    };
    this.footerPadding = {
      top: this.footerPaddingTop || defaultPadding.footer.top,
      right: this.footerPaddingRight || defaultPadding.footer.right,
      bottom: this.footerPaddingBottom || defaultPadding.footer.bottom,
      left: this.footerPaddingLeft || defaultPadding.footer.left,
    };
  }
  render() {
    return (h("eds-elevation", { level: "5" },
      h("div", { class: this.getComponentClassName() },
        (this.headerTitle || this.headerSubtitle || this.hasNavigation || this.hasHeaderActions) && (h("div", { class: this.getHeaderClassName() },
          this.headerTitle &&
            h("div", { class: `${this.classNames.EL}__header-title` },
              h("eds-heading", { styles: "secondary", content: this.headerTitle, "font-weight": "bold", type: "h2" })),
          this.headerSubtitle &&
            h("div", { class: `${this.classNames.EL}__header-subtitle` },
              h("eds-paragraph", { styles: "secondary", type: "body-1" }, this.headerSubtitle)),
          this.hasHeaderActions &&
            h("div", { class: `${this.classNames.EL}__header-actions` },
              h("slot", { name: "header-actions" })),
          this.hasNavigation &&
            h("div", { class: `${this.classNames.EL}__header-navigation` },
              h("slot", { name: "header-navigation" })))),
        this.hasBodyContent &&
          h("div", { class: this.getBodyClassName() },
            h("slot", { name: "body-content" })),
        this.hasFooterContent &&
          h("div", { class: this.getFooterClassName() },
            h("slot", { name: "footer-content" })))));
  }
  static get is() { return "eds-panel"; }
  static get originalStyleUrls() { return {
    "$": ["panel.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["panel.css"]
  }; }
  static get properties() { return {
    "fullHeight": {
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
      "attribute": "full-height",
      "reflect": false,
      "defaultValue": "false"
    },
    "headerTitle": {
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
      "attribute": "header-title",
      "reflect": false
    },
    "headerSubtitle": {
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
      "attribute": "header-subtitle",
      "reflect": false
    },
    "headerWithShadow": {
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
      "attribute": "header-with-shadow",
      "reflect": false,
      "defaultValue": "false"
    },
    "headerNoMinHeight": {
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
      "attribute": "header-no-min-height",
      "reflect": false,
      "defaultValue": "true"
    },
    "headerPaddingTop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-padding-top",
      "reflect": false
    },
    "headerPaddingRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-padding-right",
      "reflect": false
    },
    "headerPaddingBottom": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-padding-bottom",
      "reflect": false
    },
    "headerPaddingLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "header-padding-left",
      "reflect": false
    },
    "bodyPaddingTop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "body-padding-top",
      "reflect": false
    },
    "bodyPaddingRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "body-padding-right",
      "reflect": false
    },
    "bodyPaddingBottom": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "body-padding-bottom",
      "reflect": false
    },
    "bodyPaddingLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "body-padding-left",
      "reflect": false
    },
    "footerPaddingTop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-padding-top",
      "reflect": false
    },
    "footerPaddingRight": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-padding-right",
      "reflect": false
    },
    "footerPaddingBottom": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-padding-bottom",
      "reflect": false
    },
    "footerPaddingLeft": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PaddingSize",
        "resolved": "\"0\" | \"1\" | \"2\" | \"3\" | \"4\"",
        "references": {
          "PaddingSize": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "footer-padding-left",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
