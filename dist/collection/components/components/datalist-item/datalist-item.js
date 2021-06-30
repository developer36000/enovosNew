import { Component, Element, Event, Method, Prop, State, h } from '@stencil/core';
import { concat, get, has } from 'lodash-es';
import { DatalistItem, DatalistItemData } from '../../../models/components/datalist-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { DatalistItemPropsHelper } from '../../../utils/DatalistItemPropsHelper';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Datalist Item
 * @description The component manages data received from an API and displays them following a specific structure.
 * @path components
 * @documented true
 * @urlDesign design-guide-components-component-datalist-item.html
 */
export class ENOVOSDatalistItem {
  constructor() {
    this.clickable = false;
    this.collapsed = true;
    this.expandable = false;
    this.indent = 0;
    this.collapseContainerHeight = undefined;
    this.eventInit = false; // Event name
    this._clickItemHandler = undefined;
    this._observable = undefined; // observer;
    this.classNames = {
      EL: 'datalist-item',
      LEFT: '__left',
      RIGHT: '__right',
      FIRST: '__first',
      SECOND: '__second',
      THIRD: '__third',
      MAIN: '__main',
      WRAPPER: '__wrapper',
      HEADER: '__header',
      BODY: '__body',
      HEADER_LEFT: '__header-left',
      BODY_LEFT: '__body-left',
      BODY_LEFT_ADDITIONAL: '__body-left-additional',
      FOOTER_LEFT: '__footer-left',
      HEADER_RIGHT: '__header-right',
      BODY_RIGHT: '__body-right',
      FOOTER_RIGHT: '__footer-right',
      BUTTON: '__button',
      BADGE: '__badge',
      ICON: '__icon',
      TEXT: '__text',
      TAGS: '__tags',
      TAG: '__tag',
      DATE: '__date',
      IMAGE: '__image',
      MESSAGE: '__message',
      DROPDOWN: '__dropdown',
      PROGRESS_BAR: '__progress-bar',
      RADIO_BUTTON: '__radio-button',
      LEADING_RADIO_BUTTON: '__leadingRadio-button',
      TRAILING_RADIO_BUTTON: '__trailingRadio-button',
      COLUMN: '__column',
      WITH_TAGS: '--with-tags',
      COLLAPSED: '--collapsed',
      COLLAPSE: '--collapse',
      ACTIVE: '--active',
      HAS_COLLAPSE_ICON: '--has-collapse-icon',
    };
    this.mapping = {
      '1-column': {
        'notification': {
          'header': 'title',
          'body': 'text',
          'date': 'date',
          'badge': 'badge',
          'icon': 'icon',
        },
        'mail': {
          'header': 'title',
          'body': 'text',
          'date': 'date',
          'badge': 'badge',
          'icon': 'icon',
        },
      },
      '2-columns': {
        'left': {
          'default': {
            'text': 'text',
            'footer': 'caption',
            'badge': 'badge',
            'icon': 'icon',
          },
          'news': {
            'header': 'date',
            'text': 'text',
          },
          'account': {
            'badge': 'badge',
            'image': 'image',
            'header': 'date',
            'body': 'text',
            'body-additional': 'textAdditional',
            'footer': 'caption',
            'radio': 'leadingRadio',
          },
          'document': {
            'badge': 'badge',
            'header': 'date',
            'body': 'text',
            'footer': 'caption',
          },
          'selection-list': {
            'body': 'text',
          },
        },
        'right': {
          'default': {
            'text': 'value',
            'footer': 'captionValue',
            'link': 'link',
          },
          'account': {
            'header': 'currency',
            'body': 'amount',
            'radio': 'trailingRadio',
          },
          'document': {
            'button': 'button',
            'icon': 'icon',
          },
          'selection-list': {
            'icon': 'icon',
          },
          'fund': {
            'menu-dropdown': 'actions',
            'tags': 'states',
          },
        },
      },
      '3-columns': {
        'first': {
          'security-position': {
            'body': 'label',
            'image': 'image',
            'footer': 'caption',
          },
        },
        'second': {
          'security-position': {
            'header': 'currency',
            'body': 'currencyValue',
          },
        },
        'third': {
          'security-position': {
            'header': 'evaluation',
            'header-additional': 'evaluationAdditional',
            'body': 'evaluationValue',
            'body-additional': 'evaluationValueAdditional',
          },
        },
      },
      'table': {
        'badge': 'badge',
        'image': 'image',
        'header': 'date',
        'body': 'text',
        'body-additional': 'textAdditional',
        'footer': 'caption',
        'radio': 'leadingRadio',
        'tags': 'states',
      },
    };
  }
  /**
   * @description Init the dataitem
   */
  async setDatalistItem(item) {
    const dataItem = new DatalistItem(item);
    this.item = dataItem;
    this.templateName = this.item.getProp('template');
    this.type = this.item.getProp('type');
    this.alias = this.item.getProp('alias');
    this.highlight = this.item.hasProp('highlight') ? this.item.getProp('highlight') : false;
    this.collapsedConfig = this.item.getProp('collapsed');
    this.collapsed = this.item.getProp('collapsed.open');
    this.styles = this.item.getProp('styles');
    this.parameters = new DatalistItemData(this.item.getProp('data'));
    this.eventInit = false;
  }
  /**
   * @description Collapse item
   */
  async collapse(value) {
    this.collapsed = value;
  }
  /**
   * @description Init component
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
    this.attachObservable();
  }
  /**
   * @description Init component
   */
  componentDidRender() {
    if (this.type) {
      this.el.classList.add(`${this.classNames.EL}--${this.type}`);
    }
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      slotContentContainer.classList.remove(`slot-content-container-hidden`);
      slotContent.classList.add(`slot-content`);
      if (this.collapsed === false) {
        slotContentContainer.classList.add(`slot-content-container${this.classNames.COLLAPSED}`);
      }
      else {
        slotContentContainer.classList.remove(`slot-content-container${this.classNames.COLLAPSED}`);
      }
    }
    else if (slotContentContainer) {
      slotContentContainer.classList.add(`slot-content-container--hidden`);
    }
    const actionDropdown = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);
    if (actionDropdown) {
      // Kill attached events
      actionDropdown.removeEventListener('clickDropdownItem', this._clickActionDropdown, false);
      // Attach new event
      actionDropdown.addEventListener('clickDropdownItem', this._clickActionDropdown = () => {
        const actionDropdownIcon = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        actionDropdownIcon.classList.remove(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
      }, false);
      // Kill attached events
      actionDropdown.removeEventListener('activeSelectorItem', this._activeSelectorActionDropdown, false);
      // Attach new event
      actionDropdown.addEventListener('activeSelectorItem', this._activeSelectorActionDropdown = e => {
        const actionDropdownIcon = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        if (e.detail === true) {
          actionDropdownIcon.classList.add(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
        }
        else {
          actionDropdownIcon.classList.remove(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
        }
      }, false);
    }
  }
  /**
   * @description Update event on items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidUpdate() {
    if (!this.eventInit) {
      let itemEl = this.el.querySelector(`.${this.classNames.EL}`);
      if (this.isCollapsedConfig(this.item) === true && this.isAccordionConfig(this.item) !== true) {
        itemEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSE}`);
      }
      if (itemEl) {
        if (this._clickItemHandler && typeof this._clickItemHandler === 'object') {
          this._clickItemHandler.removeEvent();
        }
        this._clickItemHandler = new TapEvent(itemEl, () => {
          this.clickNavItemHandler();
        });
      }
      this.eventInit = true;
    }
  }
  /**
   * @description Define the click event on datalist item
   */
  clickNavItemHandler() {
    if (((this.item.hasProp('children') && this.item.getProp('children').length > 0
      && this.isAccordionConfig(this.item) === true))
      ||
        this.isCollapsedConfig(this.item) === true) {
      this.collapsed = !this.collapsed;
    }
    // Check/Uncheck available radio buttons
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.RADIO_BUTTON}`)
      .forEach((el) => el.activeRadioButton());
    // Toggle collapse content
    this.collapseContent();
    this.clickDatalistItem.emit(this.item);
  }
  collapseContent() {
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = !!this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      if (this.collapsed) {
        slotContentContainer.style.height = `${this.collapseContainerHeight}px`;
        slotContentContainer.classList.remove(`slot-content${this.classNames.COLLAPSED}`);
      }
      else {
        slotContentContainer.style.height = 0;
        slotContentContainer.classList.add(`slot-content${this.classNames.COLLAPSED}`);
      }
    }
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        setTimeout(() => this.initCollapseHeight(), 1);
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  initCollapseHeight() {
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = !!this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      this.collapseContainerHeight = slotContentContainer.getBoundingClientRect().height;
      slotContentContainer.style.height = `${this.collapseContainerHeight}px`;
    }
  }
  /**
   * @description Generate a 2 columns template
   */
  oneColumnTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.MAIN}` }, this.getAliasTemplate('main')),
    ];
  }
  /**
   * @description Generate a 2 columns template
   */
  twoColumnsTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.LEFT}` }, this.getAliasTemplate('left')),
      h("section", { class: `${this.classNames.EL}${this.classNames.RIGHT}` }, this.getAliasTemplate('right')),
    ];
  }
  /**
   * @description Generate a 3 columns template
   */
  threeColumnsTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.FIRST}` }, this.getAliasTemplate('first')),
      h("section", { class: `${this.classNames.EL}${this.classNames.SECOND}` }, this.getAliasTemplate('second')),
      h("section", { class: `${this.classNames.EL}${this.classNames.THIRD}` }, this.getAliasTemplate('third')),
    ];
  }
  tableTemplate() {
    if (Array.isArray(Object.values(this.parameters))) {
      return Object.values(this.parameters).map((parameter, index) => {
        const parameterObject = new DatalistItemData(parameter);
        return h("div", { "data-columns": Object.values(this.parameters).length }, this.renderColumn(parameterObject, 'table', `${this.classNames.EL}${this.classNames.COLUMN}`, index));
      });
    }
    return '';
  }
  getAliasTemplate(key = 'main') {
    const objectPropriety = (key === 'main') ? `${this.templateName}.${this.alias}` : `${this.templateName}.${key}.${this.alias}`;
    switch (key) {
      case 'main':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.MAIN}`);
      case 'left':
        return this.renderDefault2ColumnsLeft(objectPropriety);
      case 'right':
        return this.renderDefault2ColumnsRight(objectPropriety);
      case 'first':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.FIRST}`);
      case 'second':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.SECOND}`);
      case 'third':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.THIRD}`);
    }
  }
  renderDefault2ColumnsLeft(objectPropriety) {
    const badge = get(this.mapping, `${objectPropriety}.badge`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const image = get(this.mapping, `${objectPropriety}.image`);
    const button = get(this.mapping, `${objectPropriety}.button`);
    const header = get(this.mapping, `${objectPropriety}.header`);
    const text = get(this.mapping, `${objectPropriety}.text`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const bodyAdditional = get(this.mapping, `${objectPropriety}.body-additional`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const radio = get(this.mapping, `${objectPropriety}.radio`);
    if (this.parameters === undefined) {
      return;
    }
    return [
      this.setCollapseIcon(this.item, 'leading'),
      this.parameters.hasProp(radio)
        ? h("eds-radio-button", { inputName: this.parameters.getProp(`${radio}.name`), value: this.parameters.getProp(`${radio}.value`), icon: this.parameters.getProp(`${radio}.icon`), selected: this.parameters.getProp(`${radio}.selected`), class: [
            `${this.classNames.EL}${this.classNames.RADIO_BUTTON}`,
            `${this.classNames.EL}${this.classNames.LEADING_RADIO_BUTTON}`,
          ].join(' ') })
        : '',
      this.parameters.hasProp(badge)
        ? h("eds-badge", { size: this.getItemSize(this.parameters, badge), styles: this.parameters.getProp(`${badge}.styles`), text: this.parameters.getProp(`${badge}.text`), class: `${this.classNames.EL}${this.classNames.BADGE}` })
        : '',
      this.parameters.hasProp(icon)
        ? h("eds-icon", { size: this.getItemSize(this.parameters, icon), styles: this.parameters.getProp(`${icon}.styles`), icon: this.parameters.getProp(`${icon}.icon`), class: `${this.classNames.EL}${this.classNames.ICON}` })
        : '',
      this.parameters.hasProp(image)
        ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMAGE}`, src: this.parameters.getProp(image) })
        : '',
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` },
        this.parameters.hasProp(header)
          ? h("eds-paragraph", { type: this.parameters.hasProp(`${header}.type`) ? this.parameters.getProp(`${header}.type`) : 'body-2', fontWeight: this.parameters.hasProp(`${header}.fontWeight`) ? this.parameters.getProp(`${header}.fontWeight`) : 'regular', styles: [
              'line-height-body-2',
              this.parameters.hasProp(`${header}.styles`) ? this.parameters.getProp(`${header}.styles`) : this.getAdditionalStyles(this.parameters, header),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.HEADER_LEFT}` }, this.parameters.hasProp(`${header}.content`) ? this.parameters.getProp(`${header}.content`) : this.parameters.getProp(header))
          : '',
        this.parameters.hasProp(body)
          ? h("eds-paragraph", { type: this.parameters.hasProp(`${body}.type`) ? this.parameters.getProp(`${body}.type`) : 'body-2', styles: [
              'line-height-body-2',
              this.parameters.hasProp(`${body}.styles`) ? this.parameters.getProp(`${body}.styles`) : this.getAdditionalStyles(this.parameters, body),
            ].join(' '), clampLines: this.parameters.hasProp(`${body}.clampLines`) ? this.parameters.getProp(`${body}.clampLines`) : 2, fontWeight: this.parameters.hasProp(`${body}.fontWeight`) ? this.parameters.getProp(`${body}.fontWeight`) : 'semi-bold', class: `${this.classNames.EL}${this.classNames.BODY_LEFT}` },
            this.parameters.hasProp(`${body}.content`) ? this.parameters.getProp(`${body}.content`) : this.parameters.getProp(body),
            this.parameters.hasProp(bodyAdditional)
              ? [
                h("span", null, " - "),
                h("span", { class: `${this.classNames.EL}${this.classNames.BODY_LEFT_ADDITIONAL}` }, this.parameters.getProp(bodyAdditional)),
              ]
              : '')
          : '',
        this.parameters.hasProp(text)
          ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${text}.clampLines`) ? this.parameters.getProp(`${text}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${text}.fontWeight`) ? this.parameters.getProp(`${text}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${text}.type`) ? this.parameters.getProp(`${text}.type`) : 'body-1', styles: [
              this.parameters.hasProp(`${text}.styles`) ? this.parameters.getProp(`${text}.styles`) : this.getAdditionalStyles(this.parameters, text),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_LEFT}` }, this.parameters.hasProp(`${text}.content`) ? this.parameters.getProp(`${text}.content`) : this.parameters.getProp(text))
          : '',
        this.parameters.hasProp(footer)
          ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${footer}.clampLines`) ? this.parameters.getProp(`${footer}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${footer}.fontWeight`) ? this.parameters.getProp(`${footer}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${footer}.type`) ? this.parameters.getProp(`${footer}.type`) : 'body-2', styles: [
              this.parameters.hasProp(`${footer}.type`) ? `line-height-${this.parameters.getProp(`${footer}.type`)}` : 'line-height-body-2',
              this.parameters.hasProp(`${footer}.styles`) ? this.parameters.getProp(`${footer}.styles`) : this.getAdditionalStyles(this.parameters, footer),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.FOOTER_LEFT}` }, this.parameters.hasProp(`${footer}.content`) ? this.parameters.getProp(`${footer}.content`) : this.parameters.getProp(footer))
          : ''),
      this.parameters.hasProp(button)
        ? h("eds-button", { styles: this.parameters.getProp(`${button}.styles`), id: this.parameters.getProp(`${button}.id`), content: this.parameters.getProp(`${button}.content`), size: this.parameters.getProp(`${button}.size`), outlined: this.parameters.getProp(`${button}.outlined`), "text-only": this.parameters.getProp(`${button}.text-only`), class: `${this.classNames.EL}${this.classNames.BUTTON}` })
        : '',
    ];
  }
  /**
   * @description Generate a 2 columns template
   */
  renderDefault2ColumnsRight(objectPropriety) {
    const header = get(this.mapping, `${objectPropriety}.header`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const text = get(this.mapping, `${objectPropriety}.text`);
    const link = get(this.mapping, `${objectPropriety}.link`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const button = get(this.mapping, `${objectPropriety}.button`);
    const radio = get(this.mapping, `${objectPropriety}.radio`);
    const menuDropdown = get(this.mapping, `${objectPropriety}.menu-dropdown`);
    const tags = get(this.mapping, `${objectPropriety}.tags`);
    if (this.parameters === undefined) {
      return;
    }
    return [
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` },
        this.setCollapseIcon(this.item, 'trailing'),
        this.parameters.hasProp(header)
          ? h("eds-small", { styles: [
              'uppercase',
              'line-height-body-2',
              this.parameters.hasProp(`${header}.styles`) ? this.parameters.getProp(`${header}.styles`) : this.getAdditionalStyles(this.parameters, header),
            ].join(' '), content: this.parameters.hasProp(`${header}.content`) ? this.parameters.getProp(`${header}.content`) : '', class: `${this.classNames.EL}${this.classNames.HEADER_RIGHT}` })
          : '',
        this.parameters.hasProp(body)
          ? h("eds-heading", { type: "h6", "font-weight": "semi-bold", styles: [
              'line-height-body-2',
              this.parameters.hasProp(`${body}.styles`) ? this.parameters.getProp(`${body}.styles`) : this.getAdditionalStyles(this.parameters, body),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}`, content: this.parameters.hasProp(`${body}.content`) ? this.parameters.getProp(`${body}.content`) : '' })
          : '',
        this.parameters.hasProp(text)
          ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${text}.clampLines`) ? this.parameters.getProp(`${text}.clampLines`) : 0, type: this.parameters.hasProp(`${text}.type`) ? this.parameters.getProp(`${text}.type`) : 'body-1', fontWeight: this.parameters.hasProp(`${text}.fontWeight`) ? this.parameters.getProp(`${text}.fontWeight`) : 'semi-bold', styles: [
              this.parameters.hasProp(`${text}.styles`) ? this.parameters.getProp(`${text}.styles`) : this.getAdditionalStyles(this.parameters, text),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}` }, this.parameters.hasProp(`${text}.content`) ? this.parameters.getProp(`${text}.content`) : this.parameters.getProp(text))
          : '',
        this.parameters.hasProp(link)
          ? h("eds-link", { id: this.parameters.hasProp(`${link}.id`) ? this.parameters.getProp(`${link}.id`) : undefined, size: this.parameters.hasProp(`${link}.size`) ? this.parameters.getProp(`${link}.size`) : undefined, url: this.parameters.hasProp(`${link}.url`) ? this.parameters.getProp(`${link}.url`) : '#', mailto: this.parameters.hasProp(`${link}.mailto`) ? this.parameters.getProp(`${link}.mailto`) : undefined, content: this.parameters.hasProp(`${link}.content`) ? this.parameters.getProp(`${link}.content`) : '', iconPosition: this.parameters.hasProp(`${link}.iconPosition`) ? this.parameters.getProp(`${link}.iconPosition`) : undefined, styles: this.parameters.hasProp(`${link}.styles`) ? this.parameters.getProp(`${link}.styles`) : '', underline: this.parameters.hasProp(`${link}.underline`) ? this.parameters.getProp(`${link}.underline`) : false, target: this.parameters.hasProp(`${link}.target`) ? this.parameters.getProp(`${link}.target`) : '_self', class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}` })
          : '',
        this.parameters.hasProp(footer)
          ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${footer}.clampLines`) ? this.parameters.getProp(`${footer}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${footer}.fontWeight`) ? this.parameters.getProp(`${footer}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${footer}.type`) ? this.parameters.getProp(`${footer}.type`) : 'body-2', styles: [
              'line-height-body-2',
              this.parameters.hasProp(`${footer}.styles`) ? this.parameters.getProp(`${footer}.styles`) : this.getAdditionalStyles(this.parameters, footer),
            ].join(' '), class: `${this.classNames.EL}${this.classNames.FOOTER_RIGHT}` }, this.parameters.hasProp(`${footer}.content`) ? this.parameters.getProp(`${footer}.content`) : this.parameters.getProp(footer))
          : '',
        this.parameters.hasProp(button)
          ? h("eds-button", { styles: this.parameters.getProp(`${button}.styles`), size: this.parameters.getProp(`${button}.size`), outlined: this.parameters.getProp(`${button}.outlined`), "text-only": this.parameters.getProp(`${button}.text-only`), class: `${this.classNames.EL}${this.classNames.BUTTON}` },
            h("eds-icon", { slot: "icon", icon: this.parameters.getProp(`${button}.icon`) }))
          : '',
        this.parameters.hasProp(icon)
          ? h("eds-icon", { styles: this.parameters.getProp(`${icon}.styles`), icon: this.parameters.getProp(`${icon}.icon`), size: this.parameters.getProp(`${icon}.size`), class: `${this.classNames.EL}${this.classNames.BUTTON}` })
          : ''),
      this.parameters.hasProp(tags) && this.parameters.getProp(tags).length > 0
        ? h("div", { class: [
            `${this.classNames.EL}${this.classNames.TAGS}`,
          ].join(' ') }, this.parameters.getProp(tags).map(tag => {
          return h("div", { class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}` },
            h("eds-icon", { styles: get(tag, `icon.styles`), icon: get(tag, `icon.icon`), size: get(tag, `icon.size`), class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.ICON}` }),
            this.getTypoComponent(this.parameters, tag));
        }))
        : '',
      this.parameters.hasProp(radio)
        ? h("eds-radio-button", { inputName: this.parameters.getProp(`${radio}.name`), value: this.parameters.getProp(`${radio}.value`), icon: this.parameters.getProp(`${radio}.icon`), selected: this.parameters.getProp(`${radio}.selected`), class: [
            `${this.classNames.EL}${this.classNames.RADIO_BUTTON}`,
            `${this.classNames.EL}${this.classNames.TRAILING_RADIO_BUTTON}`,
          ].join(' ') })
        : '',
      this.parameters.hasProp(menuDropdown)
        ? h("eds-dropdown", { "align-right": true, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: this.parameters.getProp(`${menuDropdown}.data`) },
          h("div", { slot: "selector" },
            h("eds-icon", { slot: "icon", class: `${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`, styles: this.parameters.getProp(`${menuDropdown}.styles`), size: this.parameters.getProp(`${menuDropdown}.size`), icon: this.parameters.getProp(`${menuDropdown}.icon`) })))
        : '',
    ];
  }
  getTypoComponent(parameters, item, itemClass = '', styles = []) {
    return (() => {
      switch (parameters.getProp(`${item}.type`)) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return h("eds-heading", { type: parameters.hasProp(`${item}.type`) ? parameters.getProp(`${item}.type`) : 'h6', fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : 'semi-bold', styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), class: itemClass, content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item) });
        default:
        case 'body-1':
        case 'body-2':
        case 'body-3':
          return h("eds-paragraph", { type: parameters.hasProp(`${item}.type`) ? parameters.getProp(`${item}.type`) : 'body-2', styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), clampLines: parameters.hasProp(`${item}.clampLines`) ? parameters.getProp(`${item}.clampLines`) : 2, fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : '', class: itemClass, content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item) });
        case 'small':
          return h("eds-small", { styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : 'regular', content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item), class: itemClass });
      }
    })();
  }
  renderColumn(parameters, objectPropriety, columnClass, indexColumn) {
    const image = get(this.mapping, `${objectPropriety}.image`);
    const badge = get(this.mapping, `${objectPropriety}.badge`);
    const header = get(this.mapping, `${objectPropriety}.header`);
    const headerAdditional = get(this.mapping, `${objectPropriety}.header-additional`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const bodyAdditional = get(this.mapping, `${objectPropriety}.body-additional`);
    const date = get(this.mapping, `${objectPropriety}.date`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const tags = get(this.mapping, `${objectPropriety}.tags`);
    return [
      parameters.hasProp(image)
        ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMAGE}`, src: parameters.getProp(image) })
        : '',
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` },
        parameters.hasProp(header)
          ? h("div", { class: `${columnClass}${this.classNames.HEADER}` },
            parameters.hasProp(badge)
              ? h("eds-badge", { size: parameters.hasProp(`${badge}.size`) ? this.getItemSize(parameters, badge) : 'xxs', styles: parameters.hasProp(`${badge}.styles`) ? parameters.getProp(`${badge}.styles`) : 'success', text: parameters.getProp(`${badge}.text`), class: `${columnClass}${this.classNames.HEADER}${this.classNames.BADGE}` })
              : '',
            this.getTypoComponent(parameters, header, `${columnClass}${this.classNames.HEADER}${this.classNames.TEXT}`, ['line-height-body-2']),
            parameters.hasProp(headerAdditional)
              ? this.getTypoComponent(parameters, headerAdditional, '', ['uppercase', 'line-height-body-2'])
              : '',
            parameters.hasProp(date)
              ? this.getTypoComponent(parameters, date, `${columnClass}${this.classNames.HEADER}${this.classNames.DATE}`, ['line-height-body-2'])
              : '')
          : '',
        parameters.hasProp(body)
          ? h("div", { class: `${columnClass}${this.classNames.BODY}` },
            parameters.hasProp(icon)
              ? h("eds-icon", { size: parameters.hasProp(`${icon}.size`) ? this.getItemSize(parameters, icon) : '2x', styles: parameters.hasProp(`${icon}.styles`) ? parameters.getProp(`${icon}.styles`) : 'tertiary-500', icon: parameters.getProp(`${icon}.icon`), class: `${columnClass}${this.classNames.BODY}${this.classNames.ICON}` })
              : '',
            h("div", { class: [
                parameters.hasProp(tags) && parameters.getProp(tags).length > 0 ? `${columnClass}${this.classNames.BODY}${this.classNames.WITH_TAGS}` : '',
                this.hasCollapseIcon(this.item, 'leading') && indexColumn === 0 ? `${columnClass}${this.classNames.BODY}${this.classNames.HAS_COLLAPSE_ICON}` : '',
              ].join(' ') },
              this.getTypoComponent(parameters, body, `${columnClass}${this.classNames.BODY}${this.classNames.TEXT}`, [(objectPropriety !== 'table') ? 'line-height-body-2' : '']),
              parameters.hasProp(tags) && parameters.getProp(tags).length > 0
                ? h("div", { class: [
                    `${this.classNames.EL}${this.classNames.TAGS}`,
                  ].join(' ') }, parameters.getProp(tags).map((tag, indexTag) => {
                  return h("div", { class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}` },
                    h("eds-icon", { styles: get(tag, `icon.styles`), icon: get(tag, `icon.icon`), size: get(tag, `icon.size`), class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.ICON}` }),
                    this.getTypoComponent(parameters, `${tags}[${indexTag}].text`, `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.TEXT}`));
                }))
                : '',
              (indexColumn === 0) ? this.setCollapseIcon(this.item, 'leading') : ''),
            parameters.hasProp(bodyAdditional)
              ? this.getTypoComponent(parameters, bodyAdditional, '', ['uppercase', 'line-height-body-2'])
              : '',
            parameters.hasProp(footer)
              ? this.getTypoComponent(parameters, footer, `${this.classNames.EL}${this.classNames.FOOTER_LEFT}`, ['line-height-body-2'])
              : '')
          : ''),
    ];
  }
  hasCollapseIcon(item, position) {
    return (this.isAccordionConfig(item) === true || this.isCollapsedConfig(item) === true)
      && has(this.collapsedConfig, `icons.${position}`);
  }
  setCollapseIcon(item, position) {
    return this.hasCollapseIcon(item, position)
      ? h("eds-icon", { slot: "icon", class: [
          `${this.classNames.EL}${this.classNames.ICON}`,
          `${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSE}`,
          (!this.collapsed) ? `${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSED}` : '',
        ].join(' '), styles: (!this.collapsed) ?
          has(this.collapsedConfig, `icons.${position}.default.style`) ? get(this.collapsedConfig, `icons.${position}.default.style`) : ''
          :
            has(this.collapsedConfig, `icons.${position}.active.style`) ? get(this.collapsedConfig, `icons.${position}.active.style`) : '', icon: (!this.collapsed) ?
          has(this.collapsedConfig, `icons.${position}.default.icon`) ? get(this.collapsedConfig, `icons.${position}.default.icon`) : 'chevron-down'
          :
            has(this.collapsedConfig, `icons.${position}.active.icon`) ? get(this.collapsedConfig, `icons.${position}.active.icon`) : 'chevron-up' })
      : '';
  }
  getItemSize(parameters, item) {
    if (parameters.getProp(`${item}.size-xlg`) || parameters.getProp(`${item}.size`) === 'xlg') {
      return 'xlg';
    }
    if (parameters.getProp(`${item}.size-lg`) || parameters.getProp(`${item}.size`) === 'lg') {
      return 'lg';
    }
    if (parameters.getProp(`${item}.size-md`) || parameters.getProp(`${item}.size`) === 'md') {
      return 'md';
    }
    if (parameters.getProp(`${item}.size-sm`) || parameters.getProp(`${item}.size`) === 'sm') {
      return 'sm';
    }
    if (parameters.getProp(`${item}.size-xs`) || parameters.getProp(`${item}.size`) === 'xs') {
      return 'xs';
    }
    if (parameters.getProp(`${item}.size-xxs`) || parameters.getProp(`${item}.size`) === 'xxs') {
      return 'xxs';
    }
    return '';
  }
  getAdditionalStyles(parameters, propriety = '') {
    return get(parameters, `styles${(propriety !== '' ? `.${propriety}` : '')}`);
  }
  getLineStyles() {
    const classes = [];
    // General layout and colors background
    switch (this.type) {
      case 'heading':
        classes.push(`${this.classNames.EL}--secondary`);
        break;
      case 'even':
        classes.push(`${this.classNames.EL}--quaternary`);
        break;
      case 'indented':
        classes.push(`${this.classNames.EL}--quaternary-600`);
        break;
      case 'collapsed':
        classes.push(`${this.classNames.EL}--quaternary-400`);
        break;
    }
    classes.push(`${this.classNames.EL}--${this.type}`);
    if (this.item.hasProp('children') && this.item.getProp('children').length > 0) {
      classes.push(`${this.classNames.EL}--has-children`);
    }
    if (this.isAccordionConfig(this.item) === true || this.isCollapsedConfig(this.item) === true) {
      classes.push(`${this.classNames.EL}${this.classNames.COLLAPSE}`);
    }
    if (this.isAccordionConfig(this.item) === true && this.collapsed === true) {
      classes.push(`${this.classNames.EL}--collapsed`);
    }
    if (this.indent > 0) {
      classes.push(`${this.classNames.EL}--indent-${this.indent}`);
    }
    if (this.padding && this.padding !== 'undefined') {
      classes.push(`${this.classNames.EL}--padding-${this.padding}`);
    }
    if (this.clickable === true) {
      classes.push(`${this.classNames.EL}--clickable`);
    }
    if (this.highlight && this.highlight !== undefined) {
      classes.push(`${this.classNames.EL}--highlight`);
      classes.push(`${this.classNames.EL}--highlight--bg--${this.highlight}`);
    }
    return classes.join(' ');
  }
  isAccordionConfig(item) {
    return (item.hasProp('accordion') && item.getProp('accordion') === true);
  }
  isCollapsedConfig(item) {
    return item.hasProp('collapsed');
  }
  render() {
    if (this.item) {
      return [
        h("div", { class: [
            `${this.classNames.EL}`,
            `${this.classNames.EL}--${this.alias}`,
            this.getLineStyles(),
            DatalistItemPropsHelper.getStyles(this.styles, this.classNames.EL),
          ].join(' ') },
          h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` }, (() => {
            switch (this.templateName) {
              case 'heading':
                return this.twoColumnsTemplate();
              case 'table':
                return this.tableTemplate();
              case '3-columns':
                return this.threeColumnsTemplate();
              case '1-column':
                return this.oneColumnTemplate();
              case '2-columns':
              default:
                return this.twoColumnsTemplate();
            }
          })()),
          has(this.parameters, 'progress-bar')
            ? h("eds-progress-bar", { progressMax: parseInt(this.parameters.getProp('progress-bar.progress-max'), 10), progressValue: parseInt(this.parameters.getProp('progress-bar.progress-value'), 10), "leading-text": this.parameters.getProp('progress-bar.leading-text'), "trailing-text": this.parameters.getProp('progress-bar.trailing-text'), class: `${this.classNames.EL}${this.classNames.PROGRESS_BAR}` })
            : '',
          has(this.parameters, 'message')
            ? h("eds-message", { class: `${this.classNames.EL}${this.classNames.MESSAGE}`, "icon-leading": this.parameters.getProp('message.icon-leading'), styles: this.parameters.getProp('message.styles') }, this.parameters.getProp('message.text'))
            : ''),
        h("div", { class: "slot-content-container" },
          h("slot", { name: "content" })),
      ];
    }
    return (h("div", null));
  }
  static get is() { return "eds-datalist-item"; }
  static get originalStyleUrls() { return {
    "$": ["datalist-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["datalist-item.css"]
  }; }
  static get properties() { return {
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
    "padding": {
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
      "attribute": "padding",
      "reflect": false
    },
    "collapsed": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "collapsed",
      "reflect": false,
      "defaultValue": "true"
    },
    "expandable": {
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
      "attribute": "expandable",
      "reflect": false,
      "defaultValue": "false"
    },
    "indent": {
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
      "attribute": "indent",
      "reflect": false,
      "defaultValue": "0"
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
    }
  }; }
  static get states() { return {
    "item": {}
  }; }
  static get events() { return [{
      "method": "clickDatalistItem",
      "name": "clickDatalistItem",
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
    "setDatalistItem": {
      "complexType": {
        "signature": "(item: DatalistItem) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DatalistItem": {
            "location": "import",
            "path": "../../../models/components/datalist-item"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Init the dataitem"
          }]
      }
    },
    "collapse": {
      "complexType": {
        "signature": "(value: boolean) => Promise<void>",
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
            "text": "Collapse item"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
