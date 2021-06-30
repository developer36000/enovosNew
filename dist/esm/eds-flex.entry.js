import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const flexCss = ".flex{display:flex;flex-direction:row;flex-wrap:wrap;margin:0 auto;box-sizing:border-box}.flex.display-flex{display:flex}.flex.display-inline{display:inline-flex}.flex.row{flex-direction:row}.flex.row-reverse{flex-direction:row-reverse}.flex.column{flex-direction:column}.flex.column-reverse{flex-direction:column-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap-reverse}.flex.justify-start{justify-content:flex-start}.flex.justify-end{justify-content:flex-end}.flex.justify-center{justify-content:center}.flex.justify-space-between{justify-content:space-between}.flex.justify-space-around{justify-content:space-around}.flex.align-items-start{align-items:flex-start}.flex.align-items-end{align-items:flex-end}.flex.align-items-center{align-items:center}.flex.align-items-baseline{align-items:baseline}.flex.align-items-stretch{align-items:stretch}.flex.align-content-start{align-content:flex-start}.flex.align-content-end{align-content:flex-end}.flex.align-content-center{align-content:center}.flex.align-content-space-between{align-content:space-between}.flex.align-content-space-around{align-content:space-around}.flex.align-content-stretch{align-content:stretch}@media (min-width: 0){.flex.is-nested{margin:0 calc((16px / 2) * -1)}}@media (min-width: 321px){.flex.is-nested{margin:0 calc((24px / 2) * -1)}}@media (min-width: 640px){.flex.is-nested{margin:0 calc((24px / 2) * -1)}}@media (min-width: 864px){.flex.is-nested{margin:0 calc((32px / 2) * -1)}}@media (min-width: 1152px){.flex.is-nested{margin:0 calc((32px / 2) * -1)}}@media (min-width: 1440px){.flex.is-nested{margin:0 calc((32px / 2) * -1)}}.flex.visible{display:flex}.flex.hidden{display:none}@media (max-width: 320px){.flex.visible-xxs{display:flex}.flex.hidden-xxs{display:none}}@media (min-width: 321px) and (max-width: 639px){.flex.visible-xs{display:flex}.flex.hidden-xs{display:none}}@media (min-width: 640px) and (max-width: 863px){.flex.visible-sm{display:flex}.flex.hidden-sm{display:none}}@media (min-width: 864px) and (max-width: 1151px){.flex.visible-md{display:flex}.flex.hidden-md{display:none}}@media (min-width: 1152px) and (max-width: 1439px){.flex.visible-lg{display:flex}.flex.hidden-lg{display:none}}@media (min-width: 1440px){.flex.visible-xlg{display:flex}.flex.hidden-xlg{display:none}}";

const ENOVOSFlex = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.nested = false;
    this.flexItemsArray = [];
    this.groupedFlexItems = {};
    this.orderedFlexItems = [];
    // @TODO We will need to retrieve these multipliers from the client/project configuration
    this.multipliers = {
      xxs: {
        1: { 1: 2, 2: 4 },
      },
      xs: {
        1: { 1: 2, 2: 4 },
      },
      sm: {
        1: { 1: 2, 2: 4, 3: 6, 4: 8 },
        2: { 1: 2, 2: 4, 3: 8 },
        3: { 1: 4, 2: 8 },
      },
      md: {
        1: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12 },
        2: { 1: 4, 2: 8, 3: 12 },
        3: { 1: 6, 2: 12 },
      },
      lg: {
        1: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12 },
        2: { 1: 4, 2: 8, 3: 12 },
        3: { 1: 6, 2: 12 },
      },
      xlg: {
        1: { 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12 },
        2: { 1: 4, 2: 8, 3: 12 },
        3: { 1: 6, 2: 12 },
      },
    };
    // @TODO We will need to retrieve these breakpoints from the client/project configuration
    this.breakpoints = {
      '0-863': 'small',
      '864-1151': 'medium',
      '1152-9999': 'large',
    };
  }
  handleNestedChange(newValue) {
    if (newValue) {
      this.el.shadowRoot.querySelector('#flex').classList.add('is-nested');
    }
  }
  handleResize() {
    this.reorderElements();
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.flexItemsArray = Array.from(this.el.children);
    const flexGroups = [];
    this.flexItemsArray.forEach((flexItem) => {
      let index = 0;
      Object.values(this.breakpoints).forEach((groupName) => {
        if (flexItem.getAttribute(`${groupName}-group`) && (flexGroups.indexOf(flexItem.getAttribute(`${groupName}-group`)) === -1)) {
          flexGroups.push({
            breakpoint: `${groupName}`,
            name: flexItem.getAttribute(`${groupName}-group`),
            node: flexItem,
          });
        }
        else {
          flexGroups.push({
            breakpoint: `${groupName}`,
            name: `ungrouped-${index}`,
            node: flexItem,
          });
        }
        index++;
      });
    });
    this.groupedFlexItems = flexGroups.map((flexGroup) => {
      if (flexGroup.name.indexOf('ungrouped-') !== -1) {
        try {
          switch (flexGroup.breakpoint) {
            case 'small':
              flexGroup.name = flexGroups.find((flexGroupItem) => {
                return flexGroupItem.breakpoint === 'medium' && flexGroupItem.node === flexGroup.node;
              }).name;
              break;
            case 'medium':
              flexGroup.name = flexGroups.find((flexGroupItem) => {
                return flexGroupItem.breakpoint === 'large' && flexGroupItem.node === flexGroup.node;
              }).name;
              break;
            default:
              flexGroup.name = flexGroups.find((flexGroupItem) => {
                return flexGroupItem.breakpoint === 'medium' && flexGroupItem.node === flexGroup.node;
              }).name;
              break;
          }
        }
        catch (e) {
          throw new Error(e.message);
        }
      }
      return flexGroup;
    });
    this.reorderElements();
    this.adjustFlexItems();
  }
  reorderElements() {
    const windowWidth = window.innerWidth;
    const breakpoint = Object.keys(this.breakpoints).filter((breakpointKey) => {
      const breakpointValues = breakpointKey.split('-').map(Number);
      if (breakpointValues[0] <= windowWidth && breakpointValues[1] >= windowWidth) {
        return true;
      }
    });
    this.orderedFlexItems = Array.from(this.groupedFlexItems.filter((flexItem) => {
      return flexItem.breakpoint === this.breakpoints[breakpoint.toString()];
    })).sort((flexItemA, flexItemB) => {
      if (flexItemA.name !== 'ungrouped' || flexItemB.name !== 'ungrouped') {
        return (flexItemA.name > flexItemB.name) ? 1 : ((flexItemB.name > flexItemA.name) ? -1 : 0);
      }
      return -1;
    });
    this.applyElementsOrder();
  }
  applyElementsOrder() {
    const newDocumentFragment = document.createDocumentFragment();
    this.orderedFlexItems.forEach((orderedFlexItem) => {
      newDocumentFragment.appendChild(orderedFlexItem.node);
    });
    this.el.innerHTML = '';
    this.el.appendChild(newDocumentFragment);
  }
  adjustFlexItems() {
    const regex = new RegExp('(xlg|lg|md|sm|xs|xxs)-[1-9]{1}[1-2]?');
    const flexLevel = this.getFlexLevels(this.flexItemsArray[0], 0).level;
    if (flexLevel > 0) {
      this.flexItemsArray.forEach((flexItem) => {
        const attributeIndexes = Object.keys(flexItem.attributes);
        const layoutAttributes = attributeIndexes.map(attributeIndex => {
          return flexItem.attributes[attributeIndex].name.match(regex) !== null ? flexItem.attributes[attributeIndex].name : '';
        }).filter(Boolean);
        layoutAttributes.forEach((layoutAttribute) => {
          const splittedAtttribute = layoutAttribute.split('-');
          let newLayoutAttribute = '';
          if (splittedAtttribute.length < 4) {
            newLayoutAttribute = flexLevel === 1 ? `flex-${splittedAtttribute[0]}-${splittedAtttribute[1]}` : `flex-${splittedAtttribute[0]}-${this.multipliers[splittedAtttribute[0]][flexLevel - 1][splittedAtttribute[1]]}`;
            if (splittedAtttribute.length === 3) {
              newLayoutAttribute += `-${splittedAtttribute[2]}`;
            }
          }
          flexItem.setAttribute(newLayoutAttribute, '');
        });
      });
    }
  }
  getFlexLevels(element, level) {
    if (element.tagName.toLowerCase().indexOf('flex') !== -1 && element.tagName.toLowerCase().indexOf('flex-item') === -1) {
      level++;
      if (level > 0) {
        element.setAttribute('nested', 'nested');
      }
    }
    if (element.parentElement) {
      return this.getFlexLevels(element.parentElement, level);
    }
    return { element, level };
  }
  getDisplay() {
    if (this.el.hasAttribute('flex')) {
      return 'display-flex';
    }
    if (this.el.hasAttribute('inline-flex')) {
      return 'display-inline';
    }
    return '';
  }
  getDirection() {
    // @TODO refactoring
    if (this.el.hasAttribute('reverse')) {
      return 'row-reverse';
    }
    if (this.el.hasAttribute('row')) { // default
      if (this.el.hasAttribute('reverse')) {
        return 'row-reverse';
      }
      return 'row';
    }
    if (this.el.hasAttribute('column')) {
      if (this.el.hasAttribute('reverse')) {
        return 'column-reverse';
      }
      return 'column';
    }
    return '';
  }
  getWrap() {
    if (this.el.hasAttribute('no-wrap')) {
      return 'nowrap';
    } // default
    if (this.el.hasAttribute('wrap')) {
      return 'wrap';
    }
    if (this.el.hasAttribute('wrap-reverse')) {
      return 'wrap-reverse';
    }
    return '';
  }
  getJustifyContent() {
    if (this.el.hasAttribute('justify-start')) {
      return 'justify-start';
    } // default
    if (this.el.hasAttribute('justify-end')) {
      return 'justify-end';
    }
    if (this.el.hasAttribute('justify-center')) {
      return 'justify-center';
    }
    if (this.el.hasAttribute('justify-space-between')) {
      return 'justify-space-between';
    }
    if (this.el.hasAttribute('justify-space-around')) {
      return 'justify-space-around';
    }
    return '';
  }
  getAlignItems() {
    if (this.el.hasAttribute('align-items-start')) {
      return 'align-items-start';
    } // default
    if (this.el.hasAttribute('align-items-end')) {
      return 'align-items-end';
    }
    if (this.el.hasAttribute('align-items-center')) {
      return 'align-items-center';
    }
    if (this.el.hasAttribute('align-items-baseline')) {
      return 'align-items-baseline';
    }
    if (this.el.hasAttribute('align-items-stretch')) {
      return 'align-items-stretch';
    }
    return '';
  }
  getAlignContent() {
    if (this.el.hasAttribute('align-content-start')) {
      return 'align-content-start';
    } // default
    if (this.el.hasAttribute('align-content-end')) {
      return 'align-content-end';
    }
    if (this.el.hasAttribute('align-content-center')) {
      return 'align-content-center';
    }
    if (this.el.hasAttribute('align-content-spaceBetween')) {
      return 'align-content-space-between';
    }
    if (this.el.hasAttribute('align-content-spaceAround')) {
      return 'align-content-space-around';
    }
    if (this.el.hasAttribute('align-content-stretch')) {
      return 'align-content-stretch';
    }
    return '';
  }
  getVisibility() {
    const attributeIndexes = Object.keys(this.el.attributes);
    const layoutAttributes = attributeIndexes.map(attributeIndex => {
      return this.el.attributes[attributeIndex].name !== null ? this.el.attributes[attributeIndex].name : '';
    });
    return layoutAttributes.join(' ');
  }
  render() {
    return (h("div", { id: "flex", class: 'flex ' + this.getDisplay() + ' '
        + this.getVisibility() + ' '
        + this.getDirection() + ' '
        + this.getDirection() + ' '
        + this.getWrap() + ' '
        + this.getJustifyContent() + ' '
        + this.getAlignItems() + ' '
        + this.getAlignContent() }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "nested": ["handleNestedChange"]
  }; }
};
ENOVOSFlex.style = flexCss;

export { ENOVOSFlex as eds_flex };
