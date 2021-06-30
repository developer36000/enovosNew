import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { cloneDeep, isEqual } from 'lodash-es';
import { DropdownItem } from '../../../models/dropdown-item';
import { SelectionControls } from '../../../models/selection-controls';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { ComponentPropsHelper } from '../../../utils/ComponentPropsHelper';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Dropdown
 * @description A dropdown menu is a compact way of displaying multiple choices, one of which can be selected at a time.
 * @path components
 * @documented true
 * @prop --styles_[#{$color-name}]: Apply variations on dropdown items (Available styles: brand-expressive-orange-dark)
 */
export class ENOVOSDropdown {
  constructor() {
    this.data = [];
    this.elevationLevel = '2';
    this.elevationStyles = 'dark';
    this.elevationReverse = false;
    this.indented = false;
    this.visibleItems = 5;
    this.autocompleteMinChars = 0;
    this.autocompleteOnFocus = false;
    this.alignRight = false;
    this.placement = 'bottom';
    this.subItemHorizontalPlacement = 'right';
    this.subItemVerticalPlacement = 'top';
    this.hasSubItems = false;
    this.readOnly = true;
    this.dropdownItems = [];
    this.controlItemsData = [];
    this.autocompleteValue = '';
    this.classNames = {
      EL: 'dropdown',
      MAIN: '__main',
      CONTAINER: '__container',
      ITEM: '__item',
      ICON: '__icon',
      TEXT: '__text',
      AVATAR: '__avatar',
      HEADER: '__header',
      FOOTER: '__footer',
      SELECTOR: '__selector',
      SEPARATOR: '__separator',
      SLOT: '__slot',
      LEADING: '__leading',
      TRAILING: '__trailing',
      EXPANDABLE: '__expandable',
      ELEVATION: '__elevation',
      SUBITEMS: '__subitems',
      CASCADING: '--cascading',
      INDENTED: '--indented',
      LIMITED: '--limited',
      AUTOCOMPLETE: '--autocomplete',
      VISIBLE: '--visible',
      ACTIVE: '--active',
      WITH_AVATAR: '--with-avatar',
      AVATAR_ONLY: '--avatar-only',
      ON_TOP: '--on-top',
      ALIGN_RIGHT: '--on-right',
      HOVER: '--hover',
      DISABLED: '--disabled',
      IS_HEADING: '--is-heading',
      HAS_PARENT: '--has-parent',
    };
    this.timeoutValue = 10000;
    this.activeDropdown = false;
    this.selectorAttachment = false;
    this.availableType = ['avatar', 'icon'];
    this._onFocusInputHandler = [];
    this._onClickOutsideHandler = undefined;
    this._onClickInputHandler = undefined;
    this._observable = undefined; // observer;
    this.closeClickIcon = false;
    this.width = 0;
    this.space = 8;
    this.foundItems = undefined;
    this.avatarOnly = true;
    this.dropdownRect = {
      width: 0,
      height: 0,
    };
    this.attachmentMap = {
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    };
  }
  /**
   * @description Set the default active item
   */
  async setActiveItem(key) {
    this.activeItem = key;
  }
  /**
   * @description Init the menu from an array of item
   */
  async setData(data) {
    this.data = data;
  }
  async setDataSelectionControls(data) {
    this.selectionControls = data;
  }
  async clearData() {
    if (this.controlItems) {
      const controlItemsEl = this.el.querySelector(`#${this.controlItems.getProp('id')}`);
      if (controlItemsEl) {
        controlItemsEl.clearData();
      }
    }
  }
  /**
   * @description Init the dropdown from an array of item
   */
  setDropdownItems(dropdown) {
    this.dropdownItems = [];
    if (Array.isArray(dropdown)) {
      dropdown.map(item => {
        const dropdownItem = new DropdownItem(item);
        this.dropdownItems.push(dropdownItem);
      });
    }
  }
  setSelectionControls(selectionControls) {
    this.controlItems = new SelectionControls(selectionControls);
    // Trick to force refreshing the selection-controls data prop (from input chips for exemple)
    this.controlItemsData = this.controlItems.getProp('data');
    this.controlItemsData = [...this.controlItemsData, undefined];
  }
  /**
   * Set uniq active item on nested elements
   */
  clickDropdownItemCatch(event) {
    this.activeItem = event.detail.getProp('uid');
    if (this.selectorAttachment === true) {
      this.showDropdown(false);
    }
  }
  watchHandler(newData, oldData) {
    if (!isEqual(newData, oldData)) {
      this.setDropdownItems(newData);
    }
  }
  watchSelectionControlsHandler(newData, oldData) {
    if (!isEqual(newData, oldData)) {
      this.setSelectionControls(newData);
    }
  }
  /**
   * @description Init component variables
   */
  componentWillLoad() {
    if (this.data) {
      this.setDropdownItems(this.data);
    }
    if (this.selectionControls) {
      this.setSelectionControls(this.selectionControls);
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
  }
  componentDidRender() {
    const hasSlotHeader = !!this.el.querySelector(`[slot="header"]`);
    if (hasSlotHeader) {
      const slotHeaderElement = this.el.querySelector('[slot=header]');
      slotHeaderElement.classList.add(`${this.classNames.EL}${this.classNames.HEADER}${this.classNames.SLOT}`);
    }
    const hasSlotFooter = !!this.el.querySelector(`[slot="footer"]`);
    if (hasSlotFooter) {
      const slotFooterElement = this.el.querySelector('[slot=footer]');
      slotFooterElement.classList.add(`${this.classNames.EL}${this.classNames.FOOTER}${this.classNames.SLOT}`);
    }
    const elementContainer = this.el.querySelector(`.${this.classNames.EL}`);
    const elementElevationContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ELEVATION}`);
    if (this.alignRight) {
      elementContainer.classList.add(`${this.classNames.EL}${this.classNames.ALIGN_RIGHT}`);
    }
    const hasSlotSelector = !!this.el.querySelector(`[slot="selector"]`);
    if (hasSlotSelector) {
      this.selectorAttachment = true;
      const slotSelectorElement = this.el.querySelector('[slot=selector]');
      const inputNodes = slotSelectorElement.querySelectorAll('input:not([type="radio"])');
      slotSelectorElement.classList.add(`${this.classNames.EL}${this.classNames.SELECTOR}${this.classNames.SLOT}`);
      elementContainer.classList.add(`${this.classNames.EL}${this.classNames.AUTOCOMPLETE}`);
      // Set events
      if (inputNodes.length > 0) {
        if (this.readOnly) {
          Array.from(inputNodes).forEach((inputNode) => {
            const inputType = inputNode.getAttribute('type');
            if (inputType === 'text') {
              inputNode.setAttribute('readonly', true);
            }
          });
        }
        this.initEventsAutocompleteListener(slotSelectorElement);
      }
      else {
        if (this._clickSlotSelectorHandler && typeof this._clickSlotSelectorHandler === 'object') {
          this._clickSlotSelectorHandler.removeEvent();
        }
        this._clickSlotSelectorHandler = new TapEvent(slotSelectorElement, () => {
          this.showDropdown((elementContainer.classList.contains(`${this.classNames.EL}${this.classNames.VISIBLE}`)) ? false : true);
          this.activeSelectorItem.emit(this.activeDropdown);
        });
      }
    }
    else {
      this.selectorAttachment = false;
      elementContainer.classList.add(`${this.classNames.EL}${this.classNames.VISIBLE}`);
      if (elementElevationContainer) {
        elementElevationContainer.classList.add(`${this.classNames.EL}${this.classNames.ELEVATION}${this.classNames.VISIBLE}`);
      }
    }
    if (this.placement === 'top') {
      this.el.classList.add(`${this.classNames.EL}${this.classNames.ON_TOP}`);
      const el = this.el;
      const elBoundingClientRect = el.getBoundingClientRect();
      elementContainer.style.bottom = `${elBoundingClientRect.height / 2}px`;
      elementContainer.style.transform = `translateY(-${elBoundingClientRect.height / 2}px)`;
    }
    else {
      this.el.classList.remove(`${this.classNames.EL}${this.classNames.ON_TOP}`);
      elementContainer.style.removeProperty('bottom');
      elementContainer.style.removeProperty('transform');
    }
  }
  initClickOutsideHandler() {
    document.removeEventListener('click', this._onClickOutsideHandler, false);
    // Attach new event
    document.addEventListener('click', this._onClickOutsideHandler = e => {
      let targetElement = e.target;
      do {
        if (targetElement === this.el) {
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
      this.showDropdown(false);
      this.activeSelectorItem.emit(this.activeDropdown);
    }, false);
  }
  initEventsAutocompleteListener(autocomplete) {
    autocomplete.removeEventListener('typingField', this._onInputHandler, false);
    // Attach new event
    autocomplete.addEventListener('typingField', this._onInputHandler = e => {
      this.autocompleteValue = e.detail;
      if (this.autocompleteValue.length >= this.autocompleteMinChars) {
        this.foundItems = 0;
        this.showDropdown(true);
        const filteredData = this.filterData(cloneDeep(this.data), e.detail);
        this.setDropdownItems(filteredData);
        // The dropmenu is display for a define period
        this.timeout = setTimeout(() => { this.showDropdown(false); }, this.timeoutValue);
      }
      else {
        this.showDropdown(false);
      }
      this.activeSelectorItem.emit(this.activeDropdown);
    }, false);
    if (this.autocompleteOnFocus === true || this.readOnly === true) {
      ['focusInput'].forEach(eventName => {
        autocomplete.removeEventListener(eventName, this._onFocusInputHandler[eventName], false);
        // Attach new event
        autocomplete.addEventListener(eventName, this._onFocusInputHandler[eventName] = () => {
          if (this.activeDropdown === false) {
            this.foundItems = undefined;
            this.showDropdown(true);
            this.activeSelectorItem.emit(true);
            this.closeClickIcon = false;
          }
          else {
            this.closeClickIcon = true;
          }
        }, false);
      });
    }
    autocomplete.removeEventListener('clickIconTrailing', this._onClickIconTrailingHandler, false);
    // Attach new event
    autocomplete.addEventListener('clickIconTrailing', this._onClickIconTrailingHandler = () => {
      if (this.closeClickIcon === true) {
        this.showDropdown(false);
        this.activeSelectorItem.emit(false);
        this.closeClickIcon = false;
        const el = document.querySelector(':focus');
        if (el) {
          el.blur();
        }
      }
      else {
        this.foundItems = undefined;
        this.showDropdown(true);
        this.activeSelectorItem.emit(true);
      }
    }, false);
  }
  filterData(data, request) {
    const formattedData = Array.from(data.filter(item => {
      if (item.hasOwnProperty('label')) {
        if (item.hasOwnProperty('children')) {
          const childrenData = this.filterData(item.children, request);
          item.children = childrenData;
          if (childrenData.length > 0) {
            return true;
          }
        }
        if (item.hasOwnProperty('label')) {
          return item.label.toLowerCase().indexOf(request.toLowerCase()) !== -1;
        }
      }
      return false;
    }));
    this.foundItems += formattedData.length;
    return formattedData;
  }
  showDropdown(visible) {
    this.activeDropdown = visible;
    const elementContainer = this.el.querySelector(`.${this.classNames.EL}`);
    const elementElevationContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ELEVATION}`);
    const slotSelector = this.el.querySelector(`.${this.classNames.EL}${this.classNames.SELECTOR}${this.classNames.SLOT}`);
    if (slotSelector) {
      if (visible === true) {
        // elementContainer.style.minWidth = `${slotSelector.offsetWidth}px`;
        elementContainer.classList.add(`${this.classNames.EL}${this.classNames.VISIBLE}`);
        if (elementElevationContainer) {
          elementElevationContainer.classList.add(`${this.classNames.EL}${this.classNames.ELEVATION}${this.classNames.VISIBLE}`);
        }
      }
      else {
        elementContainer.classList.remove(`${this.classNames.EL}${this.classNames.VISIBLE}`);
        if (elementElevationContainer) {
          elementElevationContainer.classList.remove(`${this.classNames.EL}${this.classNames.ELEVATION}${this.classNames.VISIBLE}`);
        }
      }
    }
    if (visible === false) {
      clearTimeout(this.timeout);
      if (this._onClickOutsideHandler !== undefined) {
        document.removeEventListener('click', this._onClickOutsideHandler, false);
      }
    }
    else {
      this.initClickOutsideHandler();
    }
  }
  /**
   * @description Define the event on dropdown items
   */
  clickDropdownItemHandler(item) {
    if (item.getProp('disabled') !== true) {
      const previous = this.activeItem;
      this.activeItem = item.getProp('uid');
      // Set active item
      const activeElement = this.el.querySelector(`#dropdown_${this.activeItem}`);
      if (activeElement) {
        this.dropdownItems.map(dropdownItem => {
          if (dropdownItem.getProp('uid') !== this.activeItem) {
            // Remove all active class on other items and in depth
            const elementToDeactive = this.el.querySelector(`#dropdown_${dropdownItem.getProp('uid')}.${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}`);
            if (elementToDeactive) {
              elementToDeactive.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}`);
              elementToDeactive.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}:not(#dropdown_${previous})`).forEach((elActiveSub) => {
                elActiveSub.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}`);
              });
            }
          }
        });
        activeElement.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}`);
      }
      // Remove all hover items
      if (item.hasProp('subitems')) {
        this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}${this.classNames.HOVER}`).forEach((el) => {
          el.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.HOVER}`);
        });
      }
      const itemEvent = new DropdownItem(Object.assign(Object.assign({}, item), { parent: this.parent }));
      this.clickDropdownItem.emit(itemEvent);
    }
    return false;
  }
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  isActiveItemClass(item) {
    return ((this.activeItem === item.getProp('uid') && (!item.hasProp('active')) || item.getProp('active') === true))
      ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ACTIVE}`
      : '';
  }
  isAvatarOnly() {
    const nbAvatar = this.dropdownItems.filter(item => {
      return item.getProp('leading.type') === 'avatar';
    });
    if (nbAvatar.length === this.dropdownItems.length && !this.indented) {
      return `${this.classNames.EL}${this.classNames.AVATAR_ONLY}`;
    }
    return '';
  }
  getNbItems(data) {
    let nbItems = data.length;
    this.dropdownItems.map(item => nbItems += item.hasProp('children') ? item.getProp('children').length : 0);
    return nbItems;
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.indented ? `${this.classNames.EL}${this.classNames.INDENTED}` : '',
      this.parent ? `${this.classNames.EL}${this.classNames.HAS_PARENT}` : '',
      ComponentPropsHelper.setGlobalStyles([this.styles, this.font].join(' '), this.classNames.EL),
      this.isAvatarOnly(),
      this.getSize(),
    ].join(' ');
  }
  setMainContainerClasses() {
    return [
      `${this.classNames.EL}${this.classNames.CONTAINER}`,
      !this.indented && this.visibleItems > 0 &&
        ((this.foundItems === undefined && this.getNbItems(this.dropdownItems) > this.visibleItems)
          || this.foundItems >= this.visibleItems) ? `${this.classNames.EL}${this.classNames.LIMITED}-${this.visibleItems}` : '',
    ].join(' ');
  }
  setItemContainerClasses(item) {
    return [
      `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CONTAINER}`,
      (item.getProp('leading.type') === 'avatar') ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CONTAINER}${this.classNames.WITH_AVATAR}` : '',
    ].join(' ');
  }
  displayLeadingTrailingElement(item, type) {
    const className = (type === 'leading') ? this.classNames.LEADING : this.classNames.TRAILING;
    switch (item.getProp(`${type}.type`)) {
      case 'avatar':
        return h("eds-avatar", { src: item.getProp(`${type}.value`), size: "xs", class: [
            `${this.classNames.EL}${this.classNames.ITEM}${className}`,
            `${this.classNames.EL}${this.classNames.ITEM}${className}${this.classNames.AVATAR}`,
          ].join(' ') });
      case 'icon':
        return h("eds-icon", { class: [
            `${this.classNames.EL}${this.classNames.ITEM}${className}`,
            `${this.classNames.EL}${this.classNames.ITEM}${className}${this.classNames.ICON}`,
          ].join(' '), icon: item.getProp(`${type}.value`) });
    }
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description On mouseenter/mouseleave, apply the hover class to item.
   * Mainly used for cascading items
   */
  onMouseEventHandle(e, uid, hover) {
    e.stopPropagation();
    const element = this.el.querySelector(`#dropdown_${uid}`);
    if (hover === true) {
      element.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.HOVER}`);
      this._observable = new IsVisibleObservable(element, value => {
        if (value === true) {
          this.setSubItemPlacement(element);
          this._observable.disconnectObserver();
        }
      }, {
        threshold: .5,
      });
    }
    else {
      element.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.HOVER}`);
      this.removeSubItemPlacement(element);
    }
  }
  /**
   * @description Check if the position of the target is visible in the view port
   * Check on the extrem point of the target for each direction. For example, if the
   * position of the target is right, check if the right corner of the target is visible
   * or not
   */
  checkInViewPort(target) {
    // Get the original size.
    // Changes can be applied if the placement should be reverse
    const targetRect = {
      width: target.offsetWidth,
      height: target.offsetHeight,
    };
    const x = target.getBoundingClientRect().left;
    const y = target.getBoundingClientRect().top;
    const ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return {
      left: (x + targetRect.width < ww && x > 0) ? true : false,
      top: (y + targetRect.height < hw && y < hw) ? true : false,
    };
  }
  /**
   * @description Control the viewport and check if cascading children are
   * visible or not. If not visible, change the direction, display on left/right
   */
  setSubItemPlacement(element) {
    const target = element.querySelector(`.${this.classNames.EL}${this.classNames.SUBITEMS}`);
    if (target) {
      let placement = this.el.hasAttribute('direction') ? this.el.getAttribute('direction') : this.subItemHorizontalPlacement;
      let verticalPlacement = this.el.hasAttribute('vertical-direction') ? this.el.getAttribute('vertical-direction') : this.subItemVerticalPlacement;
      // Check if the target is visible or not in the view port
      // Set sub items placement to children
      const isViewPortVisible = this.checkInViewPort(target);
      if (!isViewPortVisible.left) {
        // Reverse placement position
        switch (this.subItemHorizontalPlacement) {
          case this.attachmentMap.LEFT:
            placement = this.attachmentMap.RIGHT;
            break;
          case this.attachmentMap.RIGHT:
            placement = this.attachmentMap.LEFT;
            break;
        }
        // Show the target with correct position
        target.setAttribute('direction', placement);
      }
      if (!isViewPortVisible.top) {
        switch (this.subItemVerticalPlacement) {
          case this.attachmentMap.TOP:
            verticalPlacement = this.attachmentMap.BOTTOM;
            break;
          case this.attachmentMap.BOTTOM:
            verticalPlacement = this.attachmentMap.TOP;
            break;
        }
        target.setAttribute('vertical-direction', verticalPlacement);
      }
      // Set sub items placement to nested cascading items
      target.subItemHorizontalPlacement = placement;
      target.subItemVerticalPlacement = verticalPlacement;
    }
  }
  /**
   * @description Control the viewport and check if cascading children are
   * visible or not. If not visible, change the direction, display on left/right
   */
  removeSubItemPlacement(element) {
    const target = element.querySelector(`.${this.classNames.EL}${this.classNames.SUBITEMS}`);
    if (target) {
      target.removeAttribute('vertical-direction');
    }
  }
  render() {
    return (h("div", { class: `${this.classNames.EL}${this.classNames.MAIN}` },
      h("slot", { name: "selector" }),
      h("eds-elevation", { class: `${this.classNames.EL}${this.classNames.ELEVATION}`, styles: this.elevationStyles, level: this.elevationLevel, reverse: this.elevationReverse },
        h("div", { class: this.setMainElementClasses() },
          h("slot", { name: "header" }),
          (this.dropdownItems.length > 0) ?
            h("div", { class: this.setMainContainerClasses() }, this.dropdownItems.map(item => [
              h("div", { id: `dropdown_${item.getProp('uid')}`, onClick: () => this.clickDropdownItemHandler(item), onMouseOver: e => item.hasProp('subitems') ? this.onMouseEventHandle(e, item.getProp('uid'), true) : false, onMouseLeave: e => item.hasProp('subitems') ? this.onMouseEventHandle(e, item.getProp('uid'), false) : false, class: [
                  `${this.classNames.EL}${this.classNames.ITEM}`,
                  item.hasProp('children') ? `${this.classNames.EL}${this.classNames.EXPANDABLE}` : '',
                  item.hasProp('subitems') ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CASCADING}` : '',
                  item.getProp('disabled') === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.DISABLED}` : '',
                  item.getProp('isHeading') === true ? `${this.classNames.EL}${this.classNames.SEPARATOR}${this.classNames.IS_HEADING}` : '',
                  (!item.hasProp('subitems') || !this.hasSubItems) && item.getProp('isHeading') !== true ? this.isActiveItemClass(item) : '',
                ].join(' ') },
                h("div", { class: this.setItemContainerClasses(item) },
                  this.displayLeadingTrailingElement(item, 'leading'),
                  ((item.hasProp('label') && item.getProp('label').trim() !== ''))
                    ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}` }, item.getProp('label'))
                    : ''),
                this.displayLeadingTrailingElement(item, 'trailing'),
                (item.hasProp('subitems')) ?
                  h("eds-dropdown", { hasSubItems: true, elevationStyles: this.elevationStyles, elevationLevel: this.elevationLevel, size: this.size, class: `${this.classNames.EL}${this.classNames.SUBITEMS}`, data: item.getProp('subitems') })
                  : ''),
              (item.hasProp('children')) ?
                h("eds-dropdown", { "elevation-level": "0", size: this.size, parent: item, indented: !item.hasProp('isHeading') || item.getProp('isHeading') !== true ? true : false, activeItem: this.activeItem, data: item.getProp('children') })
                : '',
              (item.getProp('separator') === true) ?
                h("hr", { class: `${this.classNames.EL}${this.classNames.SEPARATOR}` })
                : '',
            ]))
            : '',
          (this.controlItems) ?
            h("div", { class: this.setMainContainerClasses() },
              h("eds-selection-controls", { id: this.controlItems.getProp('id'), type: this.controlItems.getProp('type'), data: this.controlItemsData }))
            : '',
          h("slot", { name: "footer" })))));
  }
  static get is() { return "eds-dropdown"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "selectionControls": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SelectionControls",
        "resolved": "SelectionControls",
        "references": {
          "SelectionControls": {
            "location": "import",
            "path": "../../../models/selection-controls"
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
    "activeItem": {
      "type": "string",
      "mutable": true,
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
      "attribute": "active-item",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "styles",
      "reflect": false
    },
    "elevationLevel": {
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
      "attribute": "elevation-level",
      "reflect": false,
      "defaultValue": "'2'"
    },
    "elevationStyles": {
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
      "attribute": "elevation-styles",
      "reflect": false,
      "defaultValue": "'dark'"
    },
    "elevationReverse": {
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
      "attribute": "elevation-reverse",
      "reflect": false,
      "defaultValue": "false"
    },
    "indented": {
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
      "attribute": "indented",
      "reflect": false,
      "defaultValue": "false"
    },
    "visibleItems": {
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
      "attribute": "visible-items",
      "reflect": false,
      "defaultValue": "5"
    },
    "autocompleteMinChars": {
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
      "attribute": "autocomplete-min-chars",
      "reflect": false,
      "defaultValue": "0"
    },
    "autocompleteOnFocus": {
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
      "attribute": "autocomplete-on-focus",
      "reflect": false,
      "defaultValue": "false"
    },
    "alignRight": {
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
      "attribute": "align-right",
      "reflect": false,
      "defaultValue": "false"
    },
    "placement": {
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
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'bottom'"
    },
    "subItemHorizontalPlacement": {
      "type": "string",
      "mutable": true,
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
      "attribute": "sub-item-horizontal-placement",
      "reflect": true,
      "defaultValue": "'right'"
    },
    "subItemVerticalPlacement": {
      "type": "string",
      "mutable": true,
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
      "attribute": "sub-item-vertical-placement",
      "reflect": true,
      "defaultValue": "'top'"
    },
    "hasSubItems": {
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
      "attribute": "has-sub-items",
      "reflect": false,
      "defaultValue": "false"
    },
    "readOnly": {
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
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "true"
    },
    "font": {
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
      "attribute": "font",
      "reflect": false
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
    "parent": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DropdownItem",
        "resolved": "DropdownItem",
        "references": {
          "DropdownItem": {
            "location": "import",
            "path": "../../../models/dropdown-item"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "dropdownItems": {},
    "controlItems": {},
    "controlItemsData": {},
    "autocompleteValue": {}
  }; }
  static get events() { return [{
      "method": "clickDropdownItem",
      "name": "clickDropdownItem",
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
    }, {
      "method": "activeSelectorItem",
      "name": "activeSelectorItem",
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
    "setActiveItem": {
      "complexType": {
        "signature": "(key: any) => Promise<void>",
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
        "tags": [{
            "name": "description",
            "text": "Set the default active item"
          }]
      }
    },
    "setData": {
      "complexType": {
        "signature": "(data: DropdownItem[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DropdownItem": {
            "location": "import",
            "path": "../../../models/dropdown-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Init the menu from an array of item"
          }]
      }
    },
    "setDataSelectionControls": {
      "complexType": {
        "signature": "(data: SelectionControls) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "SelectionControls": {
            "location": "import",
            "path": "../../../models/selection-controls"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "clearData": {
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
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchHandler"
    }, {
      "propName": "selectionControls",
      "methodName": "watchSelectionControlsHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickDropdownItem",
      "method": "clickDropdownItemCatch",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
