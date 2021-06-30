import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { find, get, has, head, uniqBy } from 'lodash-es';
import { TabsItem } from '../../../models/foundation/tabs';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { LayoutPropsHelper } from '../../../utils/LayoutPropsHelper';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
/**
 * @name Text Field
 * @description Text fields and text areas are used to display, enter, and edit data.
 * @path foundation
 * @documented true
 * @urlDesign design-guide-components-component-text-field.html
 */
export class ENOVOSFormItem {
  constructor() {
    this.disabled = false;
    this.readOnly = false;
    this.ellipsis = false;
    this.clearButton = false;
    this.dataName = '';
    this.dataValue = '';
    this.styles = '';
    this.forgetLink = false;
    this.forgetLinkText = 'Forget ?';
    this.options = [];
    this.tabItems = [];
    this.stacked = false;
    this.chips = [];
    this.rounded = false;
    this.infoStyles = 'primary-500';
    this.infoTooltipStyles = 'primary-500';
    this.infoTooltipSize = '2';
    this.infoTooltipPointer = false;
    this.isFocused = false;
    this.isFilled = false;
    this.isRequired = false;
    this.isDirty = false;
    this.hasError = false;
    this.assistiveTextMessage = undefined;
    this.classNames = {
      EL: 'text-field',
      INLINE: 'inline-text-field',
      LABEL: '__label',
      INFO: '__info',
      FIELD: '__field',
      TEXTAREA: '__textarea',
      COMPONENT: '__component',
      CONTAINER: '__container',
      ASSISTIVE_TEXT: '__assistive-text',
      LINK: '__link',
      ICON: '__icon',
      TABS: '__tabs',
      CHIP: '__chip',
      BUTTON: '__button',
      SLOT: '__slot',
      WITH_CHIPS: '--with-chips',
      ICON_LEADING: '--leading',
      ICON_TRAILING: '--trailing',
      ICON_CLEANING: '--cleaning',
      ICON_SHOW_HIDE: '--show-hide',
      STACKED: '--stacked',
      MULTILINE: '--multiline',
      DISABLED: '--disabled',
      READONLY: '--readonly',
      TRAILING: '--trailing',
    };
    this._clickShowHideButtonHandler = undefined;
    this.showPassword = false;
    this.inputType = '';
    this.refreshTabs = false;
    this.icons = {
      SHOW: 'eye',
      HIDE: 'eye-slash',
    };
    // TODO: move this outside the component
    this.contextualMessages = {
      'required': {
        message: 'This field is required',
        code: '1',
        type: 'error',
      },
    };
    this.tabFields = [];
  }
  /** INJECT_ANCHOR */
  watchAssistiveTextHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.setAssistiveTextMessage();
    }
  }
  /**
   * @description Add items to the component
   * @param {Object} data The data to be display
   */
  async setTabItems(data) {
    this.tabItems = data;
  }
  watchTabItemsHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.refreshTabs = true;
    }
  }
  componentWillLoad() {
    this.inputType = this.type;
    if (!this.iconAssistiveText) {
      this.iconAssistiveText = 'check-circle';
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
    this.setRequired();
    this.initComponentClasses();
    this.el.addEventListener('click', ev => {
      if (!ev.target.className.includes(`icon`) && !ev.target.className.includes(`${this.classNames.EL}${this.classNames.ICON}`)) {
        this.el.querySelector('input, textarea').focus();
      }
    });
    const showHideButton = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ICON}${this.classNames.ICON_SHOW_HIDE}`);
    if (showHideButton) {
      // Kill attached events
      showHideButton.removeEventListener('clickButton', this._clickShowHideButtonHandler, false);
      // Attach new event
      showHideButton.addEventListener('clickButton', this._clickShowHideButtonHandler = () => this.showHidePasswordHandler(), false);
    }
  }
  componentDidUpdate() {
    this.setRequired();
    this.initComponentClasses();
  }
  componentWillRender() {
    this.setAssistiveTextMessage();
  }
  componentDidRender() {
    if (this.refreshTabs === true) {
      this.setTabsField();
      this.refreshTabs = false;
    }
    if (this.stacked && this.chips.length > 0) {
      let currentPosition = 0;
      let currentLine = 0;
      this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.CHIP}`)
        .forEach((el) => {
        const elBoundingClientRect = el.getBoundingClientRect();
        if (elBoundingClientRect.top > currentPosition) {
          currentLine++;
        }
        currentPosition = elBoundingClientRect.top;
        el.setAttribute('input-line', currentLine.toString());
      });
      const textField = this.el.querySelector(`.${this.classNames.EL}`);
      if (textField) {
        if (currentLine > 1) {
          textField.classList.add(`${this.classNames.EL}${this.classNames.MULTILINE}`);
        }
        else {
          textField.classList.remove(`${this.classNames.EL}${this.classNames.MULTILINE}`);
        }
      }
    }
  }
  /**
   * @description Get size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  setTabsField() {
    if (this.hasTabs()) {
      const tabs = this.el.querySelector(`.${this.classNames.EL}${this.classNames.TABS}`);
      if (tabs) {
        const firstItem = head(this.tabItems);
        if (firstItem && has(firstItem, 'id')) {
          this.activeTab = get(firstItem, 'id');
        }
        tabs.items = this.tabItems;
        tabs.activeItem = this.activeTab;
        tabs.addEventListener('clickTabsItem', e => {
          this.clickTabsItemHandler(e);
          tabs.activeItem = this.activeTab;
        }, false);
      }
    }
  }
  /**
   * @description Init required state
   */
  setRequired() {
    if (this.el.hasAttribute('required')) {
      this.isRequired = true;
      if (this.hasLabel()) {
        this.el.querySelector(`.${this.classNames.EL}${this.classNames.LABEL}`).setAttribute('required', '');
      }
    }
  }
  /**
   * @description Init the component classes
   */
  initComponentClasses() {
    const mainElement = this.el.querySelector(`.${this.classNames.EL}`);
    // TODO Review this...
    const classesToBeRemoved = [
      `${this.classNames.EL}--required`,
      `${this.classNames.EL}--with-icon--leading`,
      `${this.classNames.EL}--with-icon--trailing`,
      `${this.classNames.EL}--with-icon--show-hide`,
    ];
    classesToBeRemoved.forEach(className => {
      mainElement.classList.remove(className);
    });
    const classes = [].concat(this.getVariationClasses());
    classes.forEach(className => {
      mainElement.classList.add(className);
    });
  }
  /**
   * @description Get the available icon classes
   * @return {array}
   */
  getVariationClasses() {
    const classes = [];
    if (this.isRequired) {
      classes.push(`${this.classNames.EL}--required`);
    }
    if (this.hasIconLeading()) {
      classes.push(`${this.classNames.EL}--with-icon--leading`);
    }
    if (this.hasIconTrailing() || this.hasClearButton()) {
      classes.push(`${this.classNames.EL}--with-icon--trailing`);
    }
    if (this.hasIconShowHide()) {
      classes.push(`${this.classNames.EL}--with-icon--show-hide`);
    }
    if (this.rounded) {
      classes.push(`${this.classNames.EL}--rounded`);
    }
    return classes;
  }
  /**
   * @description Set the states classes (hover, activated, blur...)
   * Updated each time there's an action on input field
   * @return {string}
   */
  getStateClasses() {
    const classes = [];
    if (this.isFocused) {
      classes.push(`${this.classNames.EL}--focus`);
    }
    if (this.isFilled) {
      classes.push(`${this.classNames.EL}--active`);
    }
    return classes.join(' ');
  }
  /**
   * @description Validator of text field
   */
  validTextField() {
    this.hasError = false;
    this.assistiveTextMessage = undefined;
    // Valide required text field
    if (this.isRequired && this.isDirty && this.dataValue.trim() === '') {
      this.hasError = true;
      this.assistiveTextMessage = this.contextualMessages['required'];
    }
    else {
      this.setAssistiveTextMessage();
    }
    if (this.dataValue !== undefined && this.dataValue.trim() === '' && this.inputType === 'password') {
      this.showPassword = false;
      this.updatePasswordField();
    }
  }
  /**
   * @description Control if an error message should be shown or not
   * @return {boolean}
   */
  setAssistiveTextMessage() {
    if ((!this.hasError || this.assistiveTextMessage === undefined) && this.assistiveText) {
      this.assistiveTextMessage = {
        message: this.assistiveText,
        code: undefined,
        type: undefined,
      };
    }
  }
  /**
   * @description Control if an error message should be shown or not
   * @return {boolean}
   */
  displayError() {
    if (this.hasError && this.assistiveTextMessage !== undefined) {
      return true;
    }
    else if (this.assistiveText && this.assistiveTextMessage !== undefined) {
      return true;
    }
    return false;
  }
  /**
   * @description Set the contextual classes (success, error, warning...)
   * Updated each time there's a change on input fiel
   * @return {string}
   */
  getContextualClasses() {
    const classes = [];
    // Valide required text field
    if (this.hasError) {
      classes.push(`${this.classNames.EL}--error`);
    }
    return classes.join(' ');
  }
  /**
   * @description Display the link on white in case of transparent version of field
   * otherwise in tertiary color
   * @return {string}
   */
  getLinkColor() {
    if (this.styles) {
      const stylesList = this.styles.split(' ');
      return (stylesList.includes('transparent') && !this.isFilled && !this.isFocused) ? 'white' : '';
    }
    return '';
  }
  /**
   * @description Emit a specific event on clicking forget password
   */
  onClickForgetPasswordHandler(ev) {
    ev.preventDefault();
    this.isFocused = false;
    this.clickForgetPassword.emit(ev);
  }
  onClickIconLeadingHandler(ev) {
    ev.preventDefault();
    this.isFocused = true;
    this.el.querySelector(`.${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} input,
      .${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} textarea`).focus();
    this.clickIconLeading.emit();
  }
  onClickLabelInsideHandler(ev) {
    ev.preventDefault();
    this.isFocused = true;
    this.el.querySelector(`.${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} input,
      .${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} textarea`).focus();
  }
  onClickIconTrailingHandler(ev) {
    ev.preventDefault();
    this.el.querySelector(`.${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} input,
      .${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT} textarea`).focus();
    this.clickIconTrailing.emit();
    this.isFocused = true;
  }
  onClickButtonTrailingHandler(ev) {
    ev.preventDefault();
    this.clickButtonTrailing.emit();
  }
  /**
   * @description Update tmp tabs configs. Save values for each tabs.
   */
  clickTabsItemHandler(event) {
    // Update current tab data
    this.setTabConfig(this.activeTab, this.dataValue);
    const item = event.detail;
    if (item && item instanceof TabsItem && item.hasProp('id')) {
      // Set new active tab
      this.activeTab = item.getProp('id');
      // Refresh dataValue
      const targetTab = find(this.tabFields, { 'id': this.activeTab });
      if (!targetTab) {
        this.setTabConfig(this.activeTab, '');
      }
      this.dataValue = (targetTab) ? targetTab.value : '';
    }
  }
  setTabConfig(id, value) {
    const tabItem = find(this.tabFields, { 'id': id });
    if (tabItem) {
      tabItem.value = value;
    }
    else {
      this.tabFields.push({
        'id': id,
        'value': value,
      });
    }
  }
  /**
   * @description Catch the focus event on field
   */
  onFocusHander() {
    this.isFocused = true;
  }
  /**
   * @description Catch the blur event on field
   */
  onBlurHander() {
    this.isFocused = false;
    this.validTextField();
  }
  /**
   * @description Catch the change event on field
   */
  onChangeHander(ev) {
    const fieldValue = ev.detail.target.value;
    this.dataValue = fieldValue;
    this.isFilled = (fieldValue !== '') ? true : false;
    this.isDirty = true;
    this.validTextField();
  }
  /**
   * @description Catch the typing event on field
   */
  onInputHander(ev) {
    const fieldValue = ev.detail.target.value;
    this.dataValue = fieldValue;
    this.isFilled = (fieldValue !== '') ? true : false;
    this.isDirty = true;
    this.validTextField();
    this.typingField.emit(this.dataValue);
  }
  /**
   * @description Catch the change file event
   */
  onChangeFileInputHander(ev) {
    this.changeFiles.emit(ev.detail);
  }
  /**
   * @description Empty the field, remove focus and send input event
   */
  cleanFieldHandler(ev) {
    this.cleaningField.emit(ev);
    this.dataValue = '';
    this.isFocused = false;
    this.isFilled = false;
    this.validTextField();
  }
  showHidePasswordHandler() {
    this.showPassword = !this.showPassword;
    this.updatePasswordField();
  }
  /**
   * @description Update type of password field to make it visible
   * and change icon show-hode
   * @return {boolean}
   */
  updatePasswordField() {
    const btnShowHide = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ICON}${this.classNames.ICON_SHOW_HIDE}`);
    const iconShowHide = btnShowHide.querySelector(`[slot="icon"]`);
    if (btnShowHide && iconShowHide) {
      if (this.showPassword) {
        this.type = 'text';
        btnShowHide.setAttribute('styles', 'primary');
        iconShowHide.setAttribute('icon', this.icons.HIDE);
      }
      else {
        this.type = 'password';
        btnShowHide.setAttribute('styles', 'quaternary');
        iconShowHide.setAttribute('icon', this.icons.SHOW);
      }
    }
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasLabel() {
    return (this.label) ? true : false;
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasLabelInside() {
    return (this.labelInside) ? true : false;
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconLeading() {
    return (this.iconLeading) ? true : false;
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasIconTrailing() {
    return (this.iconTrailing) ? true : false;
  }
  /**
   * @description Check if the icon show/hide for password should be display
   * @return {boolean}
   */
  hasIconShowHide() {
    return (this.inputType === 'password' && this.forgetLink === true) ? true : false;
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasTabs() {
    return (this.tabItems && this.tabItems.length > 0) ? true : false;
  }
  /**
   * @description Check if the input is type textarea
   * @return {boolean}
   */
  isTextarea() {
    return (this.inputType === 'textarea') ? true : false;
  }
  /**
   * @description Control if the clear button should be display or not
   * @return {boolean}
   */
  hasClearButton() {
    return this.clearButton;
  }
  hasInfoText() {
    return this.infoText ? true : false;
  }
  hasTooltip() {
    return this.infoTooltipText ? true : false;
  }
  getStylesAttributes() {
    const classes = [];
    if (this.disabled) {
      classes.push('disabled');
    }
    if (this.readOnly) {
      classes.push('readonly');
    }
    return this.styles + ' ' + classes.join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.INLINE,
        this.stacked ? `${this.classNames.EL}${this.classNames.STACKED}` : '',
        this.disabled ? `${this.classNames.EL}${this.classNames.DISABLED}` : '',
        this.readOnly ? `${this.classNames.EL}${this.classNames.READONLY}` : '',
        LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' ') },
      this.hasLabel()
        ? h("eds-label", { styles: this.labelStyles, size: this.size, class: [this.classNames.EL + this.classNames.LABEL].join(' ') }, this.label)
        : '',
      this.hasTabs()
        ? h("eds-tabs", { class: [
            `${this.classNames.EL}${this.classNames.TABS}`,
            this.hasTabs() && this.hasLabel() ? `${this.classNames.EL}--has-label` : '',
          ].join(' ') })
        : '',
      h("div", { class: [
          this.classNames.EL,
          this.getSize(),
          this.getStateClasses(),
          this.getContextualClasses(),
          (this.hasLabel() && !this.hasTabs()) ? `${this.classNames.EL}--has-label` : `${this.classNames.EL}--no-label`,
          (this.chips && this.chips.length > 0) ? `${this.classNames.EL}${this.classNames.WITH_CHIPS}` : '',
          this.hasTabs() ? `${this.classNames.EL}--has-tabs` : '',
          this.hasLabelInside() ? `${this.classNames.EL}--has-label-inside` : '',
          this.displayError() ? `${this.classNames.EL}--has-assistive-text` : '',
          this.isTextarea() ? `${this.classNames.EL}${this.classNames.TEXTAREA}` : '',
          this.disabled ? `${this.classNames.EL}${this.classNames.DISABLED}` : '',
          this.readOnly ? `${this.classNames.EL}${this.classNames.READONLY}` : '',
          this.size ? `${this.classNames.EL}--${this.size}` : '',
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' ') },
        this.hasInfoText() || this.hasTooltip()
          ? h("eds-info", { class: [this.classNames.EL + this.classNames.INFO].join(' '), infoText: this.infoText, infoStyles: this.infoStyles, infoTooltipText: this.infoTooltipText, infoTooltipIcon: this.infoTooltipIcon, infoTooltipSize: this.infoTooltipSize, infoTooltipPointer: this.infoTooltipPointer, infoTooltipStyles: this.infoTooltipStyles, infoTooltipTimeoutValue: this.infoTooltipTimeoutValue, infoTooltipNotimeout: this.infoTooltipNotimeout })
          : '',
        this.hasIconLeading()
          ? h("eds-icon", { onClick: ev => this.onClickIconLeadingHandler(ev), class: [
              this.classNames.EL + this.classNames.ICON,
              this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
            ].join(' '), icon: this.iconLeading })
          : '',
        h("div", { class: [
            `${this.classNames.EL}${this.classNames.FIELD}`,
          ].join(' ') },
          h("div", { class: [
              `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.CONTAINER}`,
            ].join(' ') },
            this.hasLabelInside()
              ? h("eds-label", { styles: this.labelStyles, size: this.size, onClick: ev => this.onClickLabelInsideHandler(ev), disabled: this.disabled, class: [this.classNames.EL + this.classNames.LABEL].join(' ') }, this.labelInside)
              : '',
            this.chips && this.chips.length > 0 ?
              uniqBy(this.chips, 'uid').map(item => h("eds-chip", { class: [
                  `${this.classNames.EL}${this.classNames.CHIP}`,
                ].join(' '), unselectable: true, uid: item.getProp('uid'), "input-name": item.hasProp('inputName') ? item.getProp('inputName') : '', label: item.hasProp('label') ? item.getProp('label') : undefined, value: item.hasProp('value') ? item.getProp('value') : undefined, size: item.hasProp('size') ? item.getProp('size') : undefined, "read-only": item.hasProp('readOnly') ? item.getProp('readOnly') : false, "size-avatar": item.hasProp('sizeAvatar') ? item.getProp('sizeAvatar') : undefined, styles: item.hasProp('styles') ? item.getProp('styles') : undefined, "leading-type": item.hasProp('leading.type') ? item.getProp('leading.type') : undefined, "leading-value": item.hasProp('leading.value') ? item.getProp('leading.value') : undefined, "trailing-type": item.hasProp('trailing.type') ? item.getProp('trailing.type') : undefined, "trailing-value": item.hasProp('trailing.value') ? item.getProp('trailing.value') : undefined, "trailing-event": item.getProp('readOnly') === true ? false : true })) : '',
            ['text', 'email', 'number', 'password', 'tel', 'textarea', 'file'].includes(this.inputType)
              ? h("eds-input", { type: this.type, ellipsis: this.ellipsis, step: this.step, class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT}`, disabled: this.disabled, "read-only": this.readOnly, debounce: this.debounce, dataName: this.dataName, dataValue: this.dataValue, styles: this.getStylesAttributes(), size: this.size, placeholder: this.placeholder })
              : '',
            ['select'].includes(this.inputType)
              ? h("eds-select", { options: this.options, class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT}`, disabled: this.disabled, dataName: this.dataName, dataValue: this.dataValue, styles: this.getStylesAttributes() })
              : '')),
        this.hasIconTrailing()
          ? h("eds-icon", { onClick: ev => this.onClickIconTrailingHandler(ev), class: [
              this.classNames.EL + this.classNames.ICON,
              this.classNames.EL + this.classNames.ICON + this.classNames.ICON_TRAILING,
            ].join(' '), icon: this.iconTrailing })
          : '',
        this.trailingButton !== undefined
          ? h("eds-button", { onClickButton: ev => this.onClickButtonTrailingHandler(ev), styles: has(this.trailingButton, `styles`) ? get(this.trailingButton, `styles`) : '', size: has(this.trailingButton, `size`) ? get(this.trailingButton, `size`) : 'sm', outlined: has(this.trailingButton, `outlined`) ? get(this.trailingButton, `size`) : false, textOnly: has(this.trailingButton, `textOnly`) ? get(this.trailingButton, `textOnly`) : false, class: [
              `${this.classNames.EL}${this.classNames.BUTTON}`,
              `${this.classNames.EL}${this.classNames.BUTTON}${this.classNames.TRAILING}`,
            ].join(' ') }, has(this.trailingButton, `icon`) ?
            h("eds-icon", { slot: "icon", icon: get(this.trailingButton, `icon`) })
            : '')
          : '',
        this.hasIconShowHide() && this.trailingButton === undefined
          ? h("eds-button", { styles: "quaternary", class: [
              (this.dataValue === '') ? `${this.classNames.EL}--hidden` : `${this.classNames.EL}--visible`,
              this.classNames.EL + this.classNames.ICON,
              this.classNames.EL + this.classNames.ICON + this.classNames.ICON_SHOW_HIDE,
            ].join(' '), size: "sm" },
            h("eds-icon", { slot: "icon", icon: this.icons.SHOW }))
          : '',
        this.hasIconShowHide()
          ? h("eds-link", { onClick: ev => this.onClickForgetPasswordHandler(ev), class: [
              (this.dataValue !== '') ? `${this.classNames.EL}--hidden` : `${this.classNames.EL}--visible`,
              `${this.classNames.EL}${this.classNames.LINK}`,
            ].join(' '), size: "sm", styles: this.getLinkColor(), content: this.forgetLinkText })
          : '',
        this.hasClearButton()
          ? h("eds-icon", { onClick: ev => this.cleanFieldHandler(ev), class: [
              this.classNames.EL + this.classNames.ICON,
              this.classNames.EL + this.classNames.ICON + this.classNames.ICON_CLEANING,
            ].join(' '), icon: "times" })
          : ''),
      this.displayError()
        ? h("eds-assistive-text", { class: this.classNames.EL + this.classNames.ASSISTIVE_TEXT, styles: this.getStylesAttributes(), icon: this.iconAssistiveText, message: this.assistiveTextMessage.message, code: this.assistiveTextMessage.code, type: this.assistiveTextMessage.type })
        : ''));
  }
  static get is() { return "eds-text-field"; }
  static get originalStyleUrls() { return {
    "$": ["text-field.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["text-field.css"]
  }; }
  static get properties() { return {
    "disabled": {
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
      "attribute": "disabled",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "read-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "ellipsis": {
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
      "attribute": "ellipsis",
      "reflect": false,
      "defaultValue": "false"
    },
    "labelInside": {
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
      "attribute": "label-inside",
      "reflect": false
    },
    "iconLeading": {
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
      "attribute": "icon-leading",
      "reflect": false
    },
    "iconTrailing": {
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
      "attribute": "icon-trailing",
      "reflect": false
    },
    "clearButton": {
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
      "attribute": "clear-button",
      "reflect": false,
      "defaultValue": "false"
    },
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "labelStyles": {
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
      "attribute": "label-styles",
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
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "step": {
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
      "attribute": "step",
      "reflect": false
    },
    "assistiveText": {
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
      "attribute": "assistive-text",
      "reflect": false
    },
    "dataName": {
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
      "attribute": "data-name",
      "reflect": false,
      "defaultValue": "''"
    },
    "dataValue": {
      "type": "string",
      "mutable": true,
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
      "attribute": "data-value",
      "reflect": false,
      "defaultValue": "''"
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
      "reflect": false,
      "defaultValue": "''"
    },
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false
    },
    "forgetLink": {
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
      "attribute": "forget-link",
      "reflect": false,
      "defaultValue": "false"
    },
    "forgetLinkText": {
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
      "attribute": "forget-link-text",
      "reflect": false,
      "defaultValue": "'Forget ?'"
    },
    "debounce": {
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
      "attribute": "debounce",
      "reflect": false
    },
    "iconAssistiveText": {
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
      "attribute": "icon-assistive-text",
      "reflect": false
    },
    "options": {
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
      },
      "defaultValue": "[]"
    },
    "tabItems": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TabsItem[]",
        "resolved": "TabsItem[]",
        "references": {
          "TabsItem": {
            "location": "import",
            "path": "../../../models/foundation/tabs"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "stacked": {
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
      "attribute": "stacked",
      "reflect": false,
      "defaultValue": "false"
    },
    "chips": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "InputChipItem[]",
        "resolved": "InputChipItem[]",
        "references": {
          "InputChipItem": {
            "location": "import",
            "path": "../../../models/input-chip-item"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "rounded": {
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
      "attribute": "rounded",
      "reflect": false,
      "defaultValue": "false"
    },
    "trailingButton": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "trailing-button",
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
    "infoText": {
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
      "attribute": "info-text",
      "reflect": false
    },
    "infoStyles": {
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
      "attribute": "info-styles",
      "reflect": false,
      "defaultValue": "'primary-500'"
    },
    "infoTooltipText": {
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
      "attribute": "info-tooltip-text",
      "reflect": false
    },
    "infoTooltipStyles": {
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
      "attribute": "info-tooltip-styles",
      "reflect": false,
      "defaultValue": "'primary-500'"
    },
    "infoTooltipIcon": {
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
      "attribute": "info-tooltip-icon",
      "reflect": false
    },
    "infoTooltipSize": {
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
      "attribute": "info-tooltip-size",
      "reflect": false,
      "defaultValue": "'2'"
    },
    "infoTooltipPointer": {
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
      "attribute": "info-tooltip-pointer",
      "reflect": false,
      "defaultValue": "false"
    },
    "infoTooltipTimeoutValue": {
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
      "attribute": "info-tooltip-timeout-value",
      "reflect": false
    },
    "infoTooltipNotimeout": {
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
      "attribute": "info-tooltip-notimeout",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isFocused": {},
    "isFilled": {},
    "isRequired": {},
    "isDirty": {},
    "hasError": {},
    "assistiveTextMessage": {}
  }; }
  static get events() { return [{
      "method": "clickIconTrailing",
      "name": "clickIconTrailing",
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
      "method": "clickIconLeading",
      "name": "clickIconLeading",
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
      "method": "clickButtonTrailing",
      "name": "clickButtonTrailing",
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
      "method": "clickForgetPassword",
      "name": "clickForgetPassword",
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
      "method": "cleaningField",
      "name": "cleaningField",
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
      "method": "typingField",
      "name": "typingField",
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
      "method": "changeFiles",
      "name": "changeFiles",
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
    "setTabItems": {
      "complexType": {
        "signature": "(data: TabsItem[]) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "data The data to be display",
                "name": "param"
              }],
            "text": "The data to be display"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TabsItem": {
            "location": "import",
            "path": "../../../models/foundation/tabs"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Add items to the component"
          }, {
            "name": "param",
            "text": "data The data to be display"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "assistiveText",
      "methodName": "watchAssistiveTextHandler"
    }, {
      "propName": "tabItems",
      "methodName": "watchTabItemsHandler"
    }]; }
  static get listeners() { return [{
      "name": "focusInput",
      "method": "onFocusHander",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "blurInput",
      "method": "onBlurHander",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "changeInput",
      "method": "onChangeHander",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "inputInput",
      "method": "onInputHander",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "changeFileInput",
      "method": "onChangeFileInputHander",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
