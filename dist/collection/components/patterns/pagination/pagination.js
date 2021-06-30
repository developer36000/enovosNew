import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Pagination
 * @description Pagination allows user to select a specific page from a range of pages.
 * @path patterns
 * @documented true
 * @prop --buttonActiveStyle_[#{$color-name}]: Color of the pagination buttons (Default is primary. Available colors: brand-expressive-orange-dark)
 */
export class ENOVOSPagination {
  constructor() {
    this.current = 1;
    this.buttonActiveStyle = 'primary';
    this.pages = [];
    this.visiblePages = [];
    this.classNames = {
      EL: 'pagination',
      NOT_AVAILABLE: '--not-available',
    };
    this._clickItemHandler = [];
    this.totalPages = 0;
  }
  /**
   * @description Set the default active item
   */
  async setConfig(config) {
    this.config = config;
  }
  async setCurrent(currentPage) {
    this.current = currentPage;
  }
  watchConfigHandler(newConfig, oldConfig) {
    if (newConfig !== oldConfig) {
      if (isFinite(Math.ceil(this.config.total / this.config.items))) {
        this.pages = Array.from(new Array(Math.ceil(this.config.total / this.config.items)), (_val, index) => index);
        this.setPagination();
      }
    }
  }
  watchCurrentHandler(newCurrent, oldCurrent) {
    if (newCurrent !== oldCurrent) {
      this.setPagination();
    }
  }
  setPagination() {
    if (isFinite(Math.ceil(this.config.total / this.config.items))) {
      this.totalPages = Math.ceil(this.config.total / this.config.items);
      if (this.totalPages <= (2 * this.config.step) + 5) {
        // too few pages, so display them all
        this.startPage = 1;
        this.endPage = this.totalPages;
      }
      else if (this.current <= this.config.step + 3) {
        // current is too close to the beginning
        this.startPage = 1;
        this.endPage = (2 * this.config.step) + 3;
      }
      else if (this.current >= this.totalPages - (this.config.step + 2)) {
        // current is too close to the end
        this.startPage = this.totalPages - (2 * this.config.step) - 2;
        this.endPage = this.totalPages;
      }
      else {
        // regular case
        this.startPage = this.current - this.config.step;
        this.endPage = this.current + this.config.step;
      }
      // create an array of pages to ng-repeat in the pager control
      this.visiblePages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
    }
  }
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidRender() {
    this.el.querySelectorAll(`[data-value]`).forEach((el, index) => {
      el.removeEventListener('clickButton', this._clickItemHandler[index]);
      el.addEventListener('clickButton', this._clickItemHandler[index] = () => {
        this.current = parseInt(el.dataset.value, 10);
        this.clickItemHandler({ value: this.current - 1, items: this.config.items });
      });
    });
  }
  /**
   * @description Define the event on items
   */
  clickItemHandler(item) {
    this.clickPaginationItem.emit(item);
  }
  /**
   * @description Init component variables
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
  }
  /**
   * @description Get pagination size
   */
  getButtonSize() {
    return (this.size !== undefined) ? this.size : '';
  }
  render() {
    if (this.pages.length > 0) {
      const lastPage = Math.ceil(this.config.total / this.config.items);
      const btnSize = this.getButtonSize();
      return (h("div", { class: [
          this.classNames.EL,
        ].join(' ') },
        h("eds-button", { key: "start", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": 1, disabled: this.current <= 1 },
          h("eds-icon", { slot: "icon", icon: "chevron-double-left" })),
        h("eds-button", { key: "previous", size: btnSize, outlined: this.outlined, rounded: true, "data-value": this.current - 1, disabled: this.current <= 1, styles: this.styles },
          h("eds-icon", { slot: "icon", icon: "chevron-left" })),
        this.startPage > 1 &&
          h("eds-button", { key: "1", size: btnSize, content: '1', "data-value": 1, rounded: true, outlined: this.outlined, class: this.classNames.EL, styles: (this.current === 1) ? this.buttonActiveStyle : this.styles }),
        this.startPage > 2 &&
          h("eds-button", { key: "startEllipsis", size: btnSize, content: "...", disabled: true, rounded: true, outlined: this.outlined, styles: this.styles }),
        this.visiblePages.map(item => h("eds-button", { key: item.toString(), size: btnSize, content: item, "data-value": item, rounded: true, outlined: this.outlined, class: [
            this.classNames.EL,
            (!this.visiblePages.includes(item)) ? `${this.classNames.EL}${this.classNames.NOT_AVAILABLE}` : '',
          ].join(' '), styles: (this.current === item) ? this.buttonActiveStyle : this.styles })),
        this.endPage < this.totalPages - 1 &&
          h("eds-button", { key: "rightEllipsis", size: btnSize, content: "...", disabled: true, rounded: true, outlined: this.outlined, styles: this.styles }),
        this.endPage < this.totalPages &&
          h("eds-button", { key: this.totalPages.toString(), size: btnSize, content: this.totalPages.toString(), "data-value": this.totalPages, rounded: true, outlined: this.outlined, class: this.classNames.EL, styles: (this.current === this.totalPages) ? this.buttonActiveStyle : this.styles }),
        h("eds-button", { key: "next", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": this.current + 1, disabled: this.current >= lastPage },
          h("eds-icon", { slot: "icon", icon: "chevron-right" })),
        h("eds-button", { key: "end", size: btnSize, outlined: this.outlined, rounded: true, styles: this.styles, "data-value": lastPage, disabled: this.current >= lastPage },
          h("eds-icon", { slot: "icon", icon: "chevron-double-right" }))));
    }
    else {
      return (h("span", null));
    }
  }
  static get is() { return "eds-pagination"; }
  static get originalStyleUrls() { return {
    "$": ["pagination.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get properties() { return {
    "config": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Pagination",
        "resolved": "Pagination",
        "references": {
          "Pagination": {
            "location": "import",
            "path": "../../../models/patterns/pagination"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "current": {
      "type": "number",
      "mutable": true,
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
      "attribute": "current",
      "reflect": false,
      "defaultValue": "1"
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
    },
    "buttonActiveStyle": {
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
      "attribute": "button-active-style",
      "reflect": false,
      "defaultValue": "'primary'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    },
    "outlined": {
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
      "attribute": "outlined",
      "reflect": false
    }
  }; }
  static get states() { return {
    "pages": {},
    "visiblePages": {}
  }; }
  static get events() { return [{
      "method": "clickPaginationItem",
      "name": "clickPaginationItem",
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
    "setConfig": {
      "complexType": {
        "signature": "(config: Pagination) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Pagination": {
            "location": "import",
            "path": "../../../models/patterns/pagination"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Set the default active item"
          }]
      }
    },
    "setCurrent": {
      "complexType": {
        "signature": "(currentPage: number) => Promise<void>",
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
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "config",
      "methodName": "watchConfigHandler"
    }, {
      "propName": "current",
      "methodName": "watchCurrentHandler"
    }]; }
}
