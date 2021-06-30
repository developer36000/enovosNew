import { Component, Element, Prop, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../../../store/themes';
/**
 * @name Mobile data table
 * @description TBD
 * @path patterns
 * @documented false
 */
export class ENOVOSMobileDataTable {
  constructor() {
    this.columnsCountXs = 2;
    this.columnsCountSm = 3;
    this.columnsCountMd = 4;
    this.columnsCountLg = 4;
    this.columnsCountXlg = 4;
    this.classNames = {
      EL: 'mobile-data-table',
    };
    this.getItemClassName = value => {
      let itemClassName = `${this.classNames.EL}__item`;
      if (value.props) {
        itemClassName += ` ${this.classNames.EL}__item--${value.props.type}`;
      }
      return itemClassName;
    };
    this.getComponentClassName = () => {
      let className = this.classNames.EL;
      className += ` ${className} ${this.classNames.EL}--columns-count-xs-${this.columnsCountXs}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-sm-${this.columnsCountSm}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-md-${this.columnsCountMd}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-lg-${this.columnsCountLg}`;
      className += ` ${className} ${this.classNames.EL}--columns-count-xlg-${this.columnsCountXlg}`;
      return className;
    };
    this.renderValue = value => {
      if (value.props) {
        switch (value.props.type) {
          case 'button':
            return (h("eds-button", { "margin-bottom-1": true, styles: value.props.styles || 'secondary', "text-only": !!value.props.textOnly, onClickButton: value.props.onClickButton },
              h("eds-icon", { icon: value.props.icon, slot: "icon" })));
          case 'html':
            return value;
          default:
            return h("eds-paragraph", { type: "body-1", content: value.data });
        }
      }
      return h("eds-paragraph", { type: "body-1", content: value.data });
    };
  }
  componentWillRender() {
    this.groups = this.data && this.data.length > 0 ? this.data.map(dataItem => {
      const groupItems = dataItem.values.map((value, index) => {
        return {
          title: this.columns[index],
          value,
        };
      });
      return groupItems;
    }) : [];
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
  }
  render() {
    return (h("div", { class: this.getComponentClassName() }, this.groups.map(group => h("div", { class: `${this.classNames.EL}__group` }, group.map(item => h("span", { class: this.getItemClassName(item.value) },
      item.title &&
        h("eds-paragraph", { "font-weight": "bold", type: "body-2", content: item.title }),
      this.renderValue(item.value)))))));
  }
  static get is() { return "eds-mobile-data-table"; }
  static get originalStyleUrls() { return {
    "$": ["mobile-data-table.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["mobile-data-table.css"]
  }; }
  static get properties() { return {
    "columns": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "columnsCountXs": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-count-xs",
      "reflect": false,
      "defaultValue": "2"
    },
    "columnsCountSm": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-count-sm",
      "reflect": false,
      "defaultValue": "3"
    },
    "columnsCountMd": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-count-md",
      "reflect": false,
      "defaultValue": "4"
    },
    "columnsCountLg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-count-lg",
      "reflect": false,
      "defaultValue": "4"
    },
    "columnsCountXlg": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "columns-count-xlg",
      "reflect": false,
      "defaultValue": "4"
    }
  }; }
  static get elementRef() { return "el"; }
}
