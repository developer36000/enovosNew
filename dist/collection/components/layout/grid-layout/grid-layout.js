import { Component, Element, Prop, State, h } from '@stencil/core';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
/**
 * @name Grid Layout
 * @description Grid Layout
 * @path layout/grid-layout
 * @documented false
 */
export class ENOVOSGridLayout {
  constructor() {
    this.gridItemsArray = [];
    this.gridSizes = [];
    this.occupiedSpace = [];
    this.gridLevel = 0;
    this.nbUpdate = 1;
    this.nbItems = 0;
    // TODO: found a solution to extract the base grid sizes
    this.defaultColumnSizes = {
      xxs: 4,
      xs: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xlg: 12,
    };
    this.classNames = {
      EL: 'grid-layout',
    };
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    if (this.recursive) {
      this.gridItemsArray = Array.from(this.el.children);
      this.gridLevel = this.getGridLevels(this.gridItemsArray[0], 0).level;
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
    if (this.recursive) {
      this.updateGrid();
    }
  }
  componentDidUpdate() {
    if (this.recursive) {
      this.updateGrid();
    }
  }
  updateGrid() {
    const containerEl = this.el.closest(`[name="${this.classNames.EL}-item"]`);
    const isNested = this.el.hasAttribute('nested');
    // Working on the current grid
    // Checking if this one is a child of a grid layout item
    if (containerEl && !isNested) {
      // If has a parent grid item children
      // We try adapt the grid layout to the size of the parent grid item
      // Retrieve all parent item attributes (xs-X, xlg-X,...)
      this.fitGridToParentItem(containerEl);
      // Now, retrieve all grid items of the current updated grid layout and try to set adapated column width
      this.resizeGridItems();
    }
  }
  /**
   * @description Adapt the current grid sizes based on his parent item sizes
   * @param {HTMLElement} containerEl The parent element which contain the scope
   */
  fitGridToParentItem(containerEl) {
    // Found only necessary size attributes of the parent
    const containerAttributes = this.getLayoutAttributes(containerEl);
    // Found only necessary size attributes of the scope element
    const scopeAttributes = this.getLayoutAttributes(this.el);
    // Save size attributes of the current scope
    const gridLayoutSizes = [];
    scopeAttributes.forEach((gridAttribute) => {
      const splittedAttributeLayout = gridAttribute.split('-');
      if (splittedAttributeLayout[0] && splittedAttributeLayout[1]) {
        gridLayoutSizes[splittedAttributeLayout[0]] = Number(splittedAttributeLayout[1]);
      }
    });
    // Set all attributes from the parent item to the scope grid layout.
    // CSS will assign the specific grid-template-columns
    containerAttributes.forEach((layoutAttribute) => {
      const splittedAttribute = layoutAttribute.split('-');
      // Remove the old attribute if already exists
      if (gridLayoutSizes[splittedAttribute[0]] && this.el.hasAttribute(splittedAttribute[0] + '-' + gridLayoutSizes[splittedAttribute[0]])) {
        this.el.removeAttribute(splittedAttribute[0] + '-' + gridLayoutSizes[splittedAttribute[0]]);
      }
      // Save the layout sizes of the scope and also the occuppied space on the grid
      if (splittedAttribute[0] && splittedAttribute[1]) {
        this.gridSizes[splittedAttribute[0]] = Number(splittedAttribute[1]);
        this.occupiedSpace[splittedAttribute[0]] = 0;
      }
      this.el.setAttribute(layoutAttribute, '');
    });
  }
  /**
   * @description Retrieve all grid items of the layout and recalculate size of each ones
   * corresponding to the new grid size
   */
  resizeGridItems() {
    const gridItems = this.el.querySelectorAll(`[name="${this.classNames.EL}-item"]`);
    this.nbItems = gridItems.length;
    // For each item, try to resize the element based on original grid
    // and depending the responsive view (xxs, xs, lg...) into the new modified grid with update columns number
    gridItems.forEach((gridItem, indexItem) => {
      const itemAttributes = this.getLayoutAttributes(gridItem);
      itemAttributes.forEach((itemAttribute) => {
        const splittedAttributeItem = itemAttribute.split('-');
        // Il faut trouver l'équivalence de taille du grid item courrante dans celle du layout pour calculer le ratio taille de la cellule par rapport à la taille de la grid complète
        if ((splittedAttributeItem.length === 2 && splittedAttributeItem[0] && this.gridSizes[splittedAttributeItem[0]])
          ||
            (splittedAttributeItem.length === 3 && splittedAttributeItem[1] && this.gridSizes[splittedAttributeItem[1]])) {
          // Le ratio normal sur la grille de X en size Y correspond à
          // On recalcule si la grid mise à jour est plus petite que l'original
          this.setGridItemAttributes(splittedAttributeItem, gridItem, indexItem, itemAttribute);
        }
      });
    });
    // Until all level haven't been processed, increase the nb of update to do
    if (this.gridLevel > this.nbUpdate) {
      this.nbUpdate++;
    }
    else {
      // If all level have been processed, set nested to scope and launch componentDidUpdate
      // in this way, the grid are fitted recursively
      this.el.setAttribute('nested', 'nested');
    }
  }
  /**
   * @description Set the grid attributes of grid item
   * @param {array} splittedAttributeItem The spplitted attribute we need to apply (Example: xs, 2)
   * @param {HTMLElement} gridItem The grid item we need to modify
   * @param {number} indexItem The number of the item
   * @param {string} itemAttribute the current item attribute
   */
  setGridItemAttributes(splittedAttributeItem, gridItem, indexItem, itemAttribute) {
    const attributeLength = splittedAttributeItem.length;
    const attributePrefix = (attributeLength === 3) ? splittedAttributeItem[0] : '';
    const attributeMedia = (attributeLength === 3) ? splittedAttributeItem[1] : splittedAttributeItem[0];
    const attributeSize = (attributeLength === 3) ? splittedAttributeItem[2] : splittedAttributeItem[1];
    if (this.defaultColumnSizes[attributeMedia] &&
      this.defaultColumnSizes[attributeMedia] > this.gridSizes[attributeMedia] &&
      Number(attributeSize) > 0) {
      const pushAttributes = this.getPushAttributes(gridItem);
      const newitemAttribute = this.calculateRatio(indexItem, attributePrefix, attributeMedia, Number(attributeSize), pushAttributes);
      if (this.nbUpdate < this.gridLevel) {
        gridItem.removeAttribute(itemAttribute);
        gridItem.setAttribute(newitemAttribute, '');
      }
    }
  }
  /**
   * @description Calculate the new ratio of an item depending the size of the grid
   * @param {array} splittedAttributeItem The spplitted attribute we need to apply (Example: xs, 2)
   * @param {number} indexItem The number of the item
   * @return {string} The new attribute to apply to the element
   */
  calculateRatio(indexItem, attributePrefix, attributeMedia, attributeSize, pushAttributes) {
    let divident = 0;
    let newValue = 0;
    let occupiedValue = 0;
    let newitemAttribute = '';
    // The size of the column inside the base default grid
    divident = this.defaultColumnSizes[attributeMedia] / attributeSize;
    // The new size calculate on the new grid size
    newValue = this.gridSizes[attributeMedia] / Math.ceil(divident);
    occupiedValue = newValue;
    if (!['offset', 'push'].includes(attributePrefix) && pushAttributes[attributeMedia] && this.nbItems !== (indexItem + 1)) {
      occupiedValue += pushAttributes[attributeMedia];
    }
    newitemAttribute = `${attributeMedia}-${Math.ceil(newValue)}`;
    this.occupiedSpace[attributeMedia] += Math.ceil(occupiedValue);
    // If it's the last item of the grid, try to push the size of the item until the end of the grid
    if (!['offset', 'push'].includes(attributePrefix) && !pushAttributes[attributeMedia] && this.nbItems === (indexItem + 1) && (this.gridSizes[attributeMedia] - this.occupiedSpace[attributeMedia]) > 0) {
      newitemAttribute = `${attributeMedia}-${Math.ceil(Math.ceil(newValue) + (this.gridSizes[attributeMedia] - this.occupiedSpace[attributeMedia]))}`;
    }
    if (['offset', 'push'].includes(attributePrefix)) {
      newitemAttribute = attributePrefix + '-' + newitemAttribute;
    }
    return newitemAttribute;
  }
  /**
   * @description Define the depth of recursive grids
   * @param {HTMLElement} element
   * @param {number} level
   * @return {object} The element and his depth level
   */
  getGridLevels(element, level) {
    if (element.tagName.toLowerCase().indexOf(`${this.classNames.EL}`) !== -1 &&
      element.tagName.toLowerCase().indexOf(`${this.classNames.EL}-item`) === -1) {
      level++;
    }
    if (element.parentElement) {
      return this.getGridLevels(element.parentElement, level);
    }
    return { element, level };
  }
  /**
   * @description Retrieve all attributes corresponding to the specific defined layout sizes
   * @param {HTMLElement} element The html element for which we need to retrieve attributes
   */
  getLayoutAttributes(element) {
    const regexLayout = new RegExp('(offset-|push-|^)(xlg|lg|md|sm|xs|xxs)-[1-9]{1}[1-2]?');
    const attributeIndexes = Object.keys(element.attributes);
    return attributeIndexes.map(attributeIndex => {
      return element.attributes[attributeIndex].name.match(regexLayout) !== null ? element.attributes[attributeIndex].name : '';
    }).filter(Boolean);
  }
  /**
   * @description Retrieve the push values to take care in calculation of item size
   * @param {HTMLElement} element The html element for which we need to retrieve attributes
   */
  getPushAttributes(element) {
    const regexLayout = new RegExp('push-(xlg|lg|md|sm|xs|xxs)-[1-9]{1}[1-2]?');
    const attributeIndexes = Object.keys(element.attributes);
    const pushAttributes = attributeIndexes.map(attributeIndex => {
      return element.attributes[attributeIndex].name.match(regexLayout) !== null ? element.attributes[attributeIndex].name : '';
    }).filter(Boolean);
    const pushLayoutSizes = [];
    pushAttributes.forEach((attribute) => {
      const splittedAttribute = attribute.split('-');
      if (splittedAttribute[0] && splittedAttribute[1] && splittedAttribute[2]) {
        pushLayoutSizes[splittedAttribute[1]] = Number(splittedAttribute[2]);
      }
    });
    return pushLayoutSizes;
  }
  // Get aligment classes
  getAlignment() {
    if (this.alignCenter) {
      return this.classNames.EL + '--align-center';
    }
    if (this.alignVertical) {
      return `${this.classNames.EL}--align-${this.alignVertical}`;
    }
    return '';
  }
  render() {
    return (h("div", { class: [
        `${this.classNames.EL}`,
        LayoutPropsHelper.getStyles(this.styles, ''),
        this.getAlignment(),
      ].join(' ') },
      h("slot", null)));
  }
  static get is() { return "eds-grid-layout"; }
  static get originalStyleUrls() { return {
    "$": ["grid-layout.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["grid-layout.css"]
  }; }
  static get properties() { return {
    "fitHeight": {
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
      "attribute": "fit-height",
      "reflect": true
    },
    "alignCenter": {
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
      "attribute": "align-center",
      "reflect": false
    },
    "alignVertical": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'center' | 'bottom'",
        "resolved": "\"bottom\" | \"center\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "align-vertical",
      "reflect": false
    },
    "recursive": {
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
      "attribute": "recursive",
      "reflect": false
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
    }
  }; }
  static get states() { return {
    "gridItemsArray": {},
    "gridSizes": {},
    "occupiedSpace": {},
    "gridLevel": {},
    "nbUpdate": {},
    "nbItems": {},
    "defaultColumnSizes": {}
  }; }
  static get elementRef() { return "el"; }
}
