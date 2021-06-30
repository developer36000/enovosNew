import uuidv4 from '@bundled-es-modules/uuid/v4.js';
import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { debounce, get, has, isEmpty, isEqual, isString, omit } from 'lodash-es';
import { EditableBlockConfig, EditableBlockData } from '../../../models/components/editable-block';
import { ListItem } from '../../../models/list-item';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
/**
 * @name Editable block
 * @description TBD
 * @path components
 * @documented false
 */
export class ENOVOSEditableBlock {
  constructor() {
    this.color = 'secondary-500';
    this.componentConfig = [];
    this.listItems = [];
    this.classNames = {
      EL: 'editable-block',
      HEADER: '__header',
      CONTAINER: '__container',
      EDITOR: '__editor',
      COMPONENTS: '__components',
      ACTIONS: '__actions',
      CARD: '__card',
      ICON: '__icon',
      ICONS: '__icons',
      IMAGE: '__image',
      PARAGRAPH: '__paragraph',
      LABEL: '__label',
      LIST: '__list',
      CAPTION: '__caption',
      UNDEFINED: '--undefined',
      LEADING: '--leading',
      TRAILING: '--trailing',
      VISIBLE: '--visible',
      COLUMNS: '--columns',
      TOP: '--top',
      ACTIVE: '--active',
    };
    // Object will contains all available components filtered by config or default
    this.availableComponents = {};
    // Default components if there's not filter
    this.defaultComponents = {
      heading: {
        icon: 'heading',
        label: 'Heading',
        placeholder: 'Type your title',
        config: {
          type: {
            h1: {
              icon: 'h1',
              label: 'Heading 1',
            },
            h2: {
              icon: 'h2',
              label: 'Heading 2',
            },
            h3: {
              icon: 'h3',
              label: 'Heading 3',
            },
            h4: {
              icon: 'h4',
              label: 'Heading 4',
            },
            h5: {
              icon: 'h5',
              label: 'Heading 5',
            },
            h6: {
              icon: 'h6',
              label: 'Heading 6',
            },
          },
        },
      },
      paragraph: {
        icon: 'paragraph',
        label: 'Paragraph',
        placeholder: 'Type your text',
        config: {
          type: {
            'body-1': {
              icon: 'body-1',
              label: 'Body 1',
            },
            'body-2': {
              icon: 'body-2',
              label: 'Body 2',
            },
            'body-3': {
              icon: 'body-3',
              label: 'Body 3',
            },
          },
        },
      },
      image: {
        icon: 'image',
        label: 'Image',
        placeholder: 'Paste or type the image url here',
      },
      list: {
        icon: 'list',
        label: 'List',
        placeholder: 'Type your first list item',
        config: {
          type: {
            'body-1': {
              icon: 'body-1',
              label: 'Body 1',
            },
            'body-2': {
              icon: 'body-2',
              label: 'Body 2',
            },
            'body-3': {
              icon: 'body-3',
              label: 'Body 3',
            },
          },
          align: {
            'left': {
              icon: 'bars',
              label: 'Left',
            },
            'right': {
              icon: 'bars',
              label: 'Right',
            },
          },
        },
      },
    };
    // Available global editor actions
    this.componentActions = [
      {
        action: 'up',
        icon: 'arrow-up',
        label: 'Move up',
      },
      {
        action: 'down',
        icon: 'arrow-down',
        label: 'Move down',
      },
      {
        action: 'remove',
        icon: 'times',
        label: 'Remove',
      },
    ];
    // Formatted object send by event changeBlock
    this.filledData = {};
    this.ignoreChange = false;
    this._onClickOutsideHandler = undefined;
    this.forceFocus = false;
    /**
     * @description: Debounce typing in input
     * Set the specific prop depending the inputName. It's possible to have
     * multiple input field like image with url and caption input.
     */
    this.saveInput = debounce((inputText, inputName) => {
      this[inputName] = inputText;
      this.setFilledData();
    }, 500);
  }
  /**
   * @description: Method to get formatted object containing the content
   */
  async getFilledData() {
    return this.filledData;
  }
  /**
   * @description: Method to set data to be display in component
   */
  async setData(data) {
    this.ignoreChange = true;
    this.initData(data);
  }
  /**
   * @description: Method to set config and filter available component and
   * there config.
   */
  async setComponentConfig(data) {
    this.initComponentConfig(data);
    this.filterComponentConfig();
  }
  /**
   * @description: Watch data changes if component is updated
   */
  watchDataHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && !isEmpty(newData)) {
      this.initData(newData);
    }
  }
  /**
   * @description: Watch component config changes if component is updated
   */
  watchComponentConfigHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && !isEmpty(newData)) {
      this.initComponentConfig(newData);
      this.filterComponentConfig();
    }
  }
  /**
   * @description: Init component before rendering
   */
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.uuid = uuidv4();
    this.ignoreChange = true;
    this.initData(this.data);
    this.initComponentConfig(this.componentConfig);
    this.filterComponentConfig();
  }
  /**
   * @description Init the host element
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
  componentDidRender() {
    // When render the component, if a component tag has been selected.
    // Force focus on input field editor.
    if (this.forceFocus) {
      const elEditor = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`);
      if (elEditor) {
        elEditor.focus();
      }
      this.forceFocus = false;
    }
    // Specific actions to do depending component tag
    switch (this.componentTag) {
      case 'list':
        // Specific way to set data inside list component
        this.initListContent();
        break;
    }
  }
  /**
   * @description Init component data
   */
  initData(data) {
    if (data) {
      this.configData = new EditableBlockData(data);
      this.uuid = has(this.configData, 'id') ? get(this.configData, 'id') : this.uuid;
      if (has(this.configData, 'type')) {
        this.componentTag = get(this.configData, 'type');
        switch (this.componentTag) {
          case 'image':
            this.inputContent = get(this.configData, 'data.src');
            this.inputContentSecondary = get(this.configData, 'data.alt');
            break;
          default:
            this.inputContent = get(this.configData, 'data.content');
            this.inputContentSecondary = get(this.configData, 'data.secondary');
            break;
        }
        this.setFilledData();
        // Specific temporary saving depending component tag
        switch (this.componentTag) {
          case 'list':
            this.tmpContent = get(this.configData, 'data.content');
            break;
        }
      }
    }
    else {
      this.configData = new EditableBlockData({});
    }
  }
  /**
   * @description Specific initialization of list component
   * First init should set list items or set with an empty item content
   */
  initListContent() {
    const elList = this.el.querySelector(`.${this.classNames.EL}${this.classNames.LIST}`);
    if (elList) {
      if (this.tmpContent) {
        elList.setListItems(this.tmpContent);
        this.tmpContent = undefined;
        elList.setAttribute('data-placeholder', '');
      }
      else if (isEmpty(this.inputContent)) {
        elList.items = [new ListItem({ content: '' })];
      }
    }
  }
  /**
   * @description Init the config as EditableBlockConfig items
   */
  initComponentConfig(data) {
    if (data) {
      const componentConfig = [];
      this.componentConfig.map(config => componentConfig.push(new EditableBlockConfig(config)));
      this.componentConfig = componentConfig;
    }
  }
  /**
   * @description Click event on available component items (heading, img, list,...)
   */
  clickAvailableComponentsHandle(id) {
    this.componentTag = id;
    // Reset config type
    if (has(this.configData, 'data.type')) {
      this.configData = omit(this.configData, 'data.type');
    }
    this.setFilledData();
    this.showPopup(false);
    this.forceFocus = true;
  }
  /**
   * @description Click event on available component config items (h1, body-1,...)
   */
  clickAvailableConfigurationHandle(key, value) {
    this.configData = new EditableBlockData(Object.assign(Object.assign({}, this.configData), { [key]: value }));
    this.setFilledData();
    this.showPopup(false);
  }
  /**
   * @description Click event on available actions (up, down, remove,...)
   */
  clickActionsHandle(action) {
    action = Object.assign(Object.assign({}, action), { id: this.uuid });
    this.showPopup(false);
    this.clickAction.emit(action);
  }
  /**
   * @description Typing on input field
   */
  inputHandle(e, inputName = 'inputContent') {
    // When input is empty, reset editor and allows to choose the component type
    if (inputName !== 'secondary' && (!e.target.innerText || isEmpty(e.target.innerText.trim()))) {
      this.componentTag = undefined;
    }
    let elEditor;
    let defaultPlaceholder = '';
    switch (inputName) {
      case 'secondary':
        elEditor = this.el.querySelector(`.${this.classNames.EL}${this.classNames.IMAGE}${this.classNames.CAPTION}`);
        switch (this.componentTag) {
          case 'image':
            defaultPlaceholder = 'Type your image caption here';
            break;
          default:
            defaultPlaceholder = 'Type your text';
            break;
        }
        break;
      default:
        elEditor = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`);
        defaultPlaceholder = has(this.availableComponents, `${this.componentTag}.placeholder`) ? get(this.availableComponents, `${this.componentTag}.placeholder`) : '';
        break;
    }
    // Display placeholder if field is empty
    if (elEditor) {
      elEditor.setAttribute('data-placeholder', (e.target.innerText.trim() === '') ? defaultPlaceholder : '');
    }
    this.saveInput(e.target.innerText, inputName);
  }
  /**
   * @description Filter the available component and types by config
   */
  filterComponentConfig() {
    if (!isEmpty(this.componentConfig)) {
      // Filtered component list by key
      const componentConfigKeys = Object.entries(this.componentConfig).reduce((obj, current) => {
        obj[current[1].name] = current[1].types;
        return obj;
      }, {});
      const filteredComponent = Object.keys(this.defaultComponents)
        .filter(key => Object.keys(componentConfigKeys).includes(key))
        .reduce((obj, key) => {
        // Filtered component type by key
        if (has(this.defaultComponents[key], 'config')) {
          if (has(this.defaultComponents[key], 'config.type')) {
            const filtered = Object.keys(get(this.defaultComponents[key], 'config.type'))
              .filter(keyType => componentConfigKeys[key].includes(keyType))
              .reduce((objReduce, keyReduce) => {
              objReduce[keyReduce] = get(this.defaultComponents[key], `config.type.${keyReduce}`);
              return objReduce;
            }, {});
            this.defaultComponents[key].config.type = filtered;
          }
        }
        obj[key] = this.defaultComponents[key];
        return obj;
      }, {});
      this.availableComponents = filteredComponent;
    }
    else {
      this.availableComponents = this.defaultComponents;
    }
  }
  /**
   * @description Manage copy/paste event
   */
  pasteHandle(event) {
    event.preventDefault();
    document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
  }
  /**
   * @description Set filled data to be display by the event
   */
  setFilledData() {
    if (!this.componentTag) {
      this.filledData = {};
      this.inputContent = undefined;
    }
    else {
      switch (this.componentTag) {
        default:
        case 'paragraph':
        case 'heading':
          this.filledData = {
            id: this.uuid,
            type: this.componentTag,
            data: {
              content: this.inputContent ? this.inputContent : '',
              styles: has(this.configData, 'data.styles') ? get(this.configData, 'data.styles') : this.color,
              type: has(this.configData, 'data.type') ? get(this.configData, 'data.type') : ((this.componentTag === 'heading') ? 'h6' : 'body-1'),
            },
          };
          break;
        case 'list':
          this.listItems = [];
          this.setContentToList();
          this.filledData = {
            id: this.uuid,
            type: this.componentTag,
            data: {
              content: this.listItems ? this.listItems : [],
              type: has(this.configData, 'data.type') ? get(this.configData, 'data.type') : 'body-1',
              align: has(this.configData, 'data.align') ? get(this.configData, 'data.align') : 'left',
            },
          };
          break;
        case 'image':
          this.filledData = {
            id: this.uuid,
            type: this.componentTag,
            data: {
              src: this.inputContent ? this.inputContent : '',
              alt: this.inputContentSecondary ? this.inputContentSecondary : '',
            },
          };
          this.displayImage();
          break;
      }
    }
    // Avoid sending change during initialization
    if (this.ignoreChange === false) {
      this.changeBlock.emit(this.filledData);
    }
    else {
      this.ignoreChange = false;
    }
  }
  /**
   * @description Display the image src if an url has been set
   */
  displayImage() {
    const elImage = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}`);
    const elCaption = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}`);
    if (elImage) {
      if (this.inputContent) {
        elImage.classList.add(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.VISIBLE}`);
        elImage.src = this.inputContent;
      }
      else {
        elImage.classList.remove(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.VISIBLE}`);
      }
      if (this.inputContentSecondary) {
        elImage.alt = this.inputContentSecondary;
      }
    }
    if (elCaption) {
      if (this.inputContent) {
        elCaption.classList.add(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.VISIBLE}`);
      }
      else {
        elCaption.classList.remove(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.VISIBLE}`);
      }
    }
  }
  setContentToList() {
    const elList = this.el.querySelector(`.${this.classNames.EL}${this.classNames.LIST}`);
    if (this.inputContent && isString(this.inputContent) && elList) {
      const arrayList = this.inputContent.split(/\r\n|\r|\n/g).
        reduce((obj, current) => {
        if (current.trim() !== '') {
          obj.push({ content: current });
        }
        return obj;
      }, []);
      // Clean content and refresh list component with formatted data
      this.listItems = arrayList;
    }
  }
  openPopup(classKey) {
    this._currentTargetCard = classKey;
    const elementCard = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CARD}${this._currentTargetCard}`);
    if (elementCard) {
      this.showPopup(elementCard.classList.contains(`${this.classNames.EL}${this.classNames.CARD}${this.classNames.VISIBLE}`) ? false : true);
    }
  }
  showPopup(visible) {
    const elementCard = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CARD}${this._currentTargetCard}`);
    if (elementCard) {
      if (visible === true) {
        elementCard.classList.add(`${this.classNames.EL}${this.classNames.CARD}${this.classNames.VISIBLE}`);
        this.initClickOutsideHandler();
      }
      else {
        elementCard.classList.remove(`${this.classNames.EL}${this.classNames.CARD}${this.classNames.VISIBLE}`);
        if (this._onClickOutsideHandler !== undefined) {
          document.removeEventListener('click', this._onClickOutsideHandler, false);
          this._currentTargetCard = undefined;
        }
      }
    }
  }
  initClickOutsideHandler() {
    document.removeEventListener('click', this._onClickOutsideHandler, false);
    // Attach new event
    document.addEventListener('click', this._onClickOutsideHandler = e => {
      let targetElement = e.target;
      const elementCard = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CARD}${this._currentTargetCard}`);
      const elementBtn = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ICON}${this._currentTargetCard}`);
      const elementContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.UNDEFINED}`);
      if (elementCard) {
        do {
          if (targetElement === elementCard || targetElement === elementBtn || targetElement === elementContainer) {
            return;
          }
          // Go up the DOM
          targetElement = targetElement.parentNode;
        } while (targetElement);
        this.showPopup(false);
      }
      else {
        this.showPopup(false);
      }
    }, false);
  }
  render() {
    return [
      this.componentTag === undefined ?
        h("div", { class: [
            `${this.classNames.EL}${this.classNames.CARD}`,
            `${this.classNames.EL}${this.classNames.CARD}${this.classNames.COMPONENTS}`,
          ].join(' ') },
          h("eds-elevation", { level: "1" },
            h("eds-card", null,
              h("div", { slot: "card-content" },
                h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}` }, Object.entries(this.availableComponents).map(([componentID, component], index) => h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}` },
                  h("eds-icon", { icon: get(component, 'icon'), size: "3x", id: `component-icon-${index}-${this.uuid}`, onClick: () => this.clickAvailableComponentsHandle(componentID) }),
                  h("eds-tooltip", { selector: `component-icon-${index}-${this.uuid}`, text: get(component, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))))))
        : '',
      h("div", { class: [
          `${this.classNames.EL}${this.classNames.CONTAINER}`,
          this.componentTag === undefined ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.UNDEFINED}` : '',
          this.componentTag === 'image' ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.COLUMNS}` : '',
        ].join(' '), onClick: () => this.componentTag === undefined ? this.openPopup(this.classNames.COMPONENTS) : false }, this.componentTag !== undefined ?
        (() => {
          switch (this.componentTag) {
            case 'heading':
              return h("eds-heading", { type: has(this.configData, 'data.type') ? get(this.configData, 'data.type') : 'h6', contenteditable: "true", "data-placeholder": isEmpty(this.inputContent) ? (has(this.availableComponents, `${this.componentTag}.placeholder`) ? get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: has(this.configData, 'data.styles') ? get(this.configData, 'data.styles') : this.color, content: has(this.configData, 'data.content') ? get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                  `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                  `${this.classNames.EL}${this.classNames.HEADER}`,
                ].join(' ') });
            case 'list':
              return [
                h("eds-list", { typographyCategory: has(this.configData, 'data.type') ? get(this.configData, 'data.type') : 'body-1', align: has(this.configData, 'data.align') ? get(this.configData, 'data.align') : 'left', contenteditable: "true", "data-placeholder": isEmpty(this.listItems) ? (has(this.availableComponents, `${this.componentTag}.placeholder`) ? get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                    `${this.classNames.EL}${this.classNames.LIST}`,
                  ].join(' ') }),
              ];
            case 'image':
              return [
                h("eds-paragraph", { type: 'body-2', styles: "secondary-500", "font-weight": "semi-bold", content: "Image url", class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.LABEL}`,
                  ].join(' ') }),
                h("eds-paragraph", { type: 'body-1', contenteditable: "true", "data-placeholder": isEmpty(this.inputContent) ? (has(this.availableComponents, `${this.componentTag}.placeholder`) ? get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: this.color, content: has(this.configData, 'data.content') ? get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                    `${this.classNames.EL}${this.classNames.IMAGE}`,
                  ].join(' ') }),
                h("eds-image", { class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}`,
                    !isEmpty(get(this.configData, 'data.src')) || !isEmpty(this.inputContent) ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.VISIBLE}` : '',
                  ].join(' '), src: has(this.configData, 'data.src') ? get(this.configData, 'data.src') : this.inputContent, alt: has(this.configData, 'data.alt') ? get(this.configData, 'data.alt') : this.inputContentSecondary }),
                h("div", { class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}`,
                    !isEmpty(get(this.configData, 'data.src')) || !isEmpty(this.inputContent) ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.VISIBLE}` : '',
                  ].join(' ') },
                  h("eds-paragraph", { type: 'body-2', "font-weight": "semi-bold", styles: "secondary-500", content: "Image caption", class: [
                      `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.LABEL}`,
                    ].join(' ') }),
                  h("eds-paragraph", { type: 'body-1', contenteditable: "true", "data-placeholder": isEmpty(this.inputContentSecondary) ? 'Type your image caption here' : '', styles: this.color, content: has(this.configData, 'data.secondary') ? get(this.configData, 'data.secondary') : this.inputContentSecondary, onInput: e => this.inputHandle(e, 'inputContentSecondary'), onPaste: e => this.pasteHandle(e), class: [
                      `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                      `${this.classNames.EL}${this.classNames.IMAGE}${this.classNames.CAPTION}`,
                    ].join(' ') })),
              ];
            default:
            case 'paragraph':
              return h("eds-paragraph", { type: has(this.configData, 'data.type') ? get(this.configData, 'data.type') : 'body-1', contenteditable: "true", "data-placeholder": isEmpty(this.inputContent) ? (has(this.availableComponents, `${this.componentTag}.placeholder`) ? get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: has(this.configData, 'data.styles') ? get(this.configData, 'data.styles') : this.color, content: has(this.configData, 'data.content') ? get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                  `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                  `${this.classNames.EL}${this.classNames.PARAGRAPH}`,
                ].join(' ') });
          }
        })()
        : ''),
      this.componentTag !== undefined
        ? h("bdl-bds-button", { "text-only": true, size: "sm", onClickButton: () => this.openPopup(this.classNames.ACTIONS), class: [
            `${this.classNames.EL}${this.classNames.ICON}`,
            `${this.classNames.EL}${this.classNames.ICON}${this.classNames.ACTIONS}`,
            `${this.classNames.EL}${this.classNames.ICON}${this.classNames.TRAILING}`,
            this.componentTag === 'image' ? `${this.classNames.EL}${this.classNames.ICON}${this.classNames.TOP}` : '',
          ].join(' ') },
          h("eds-icon", { slot: "icon", icon: "ellipsis-v" }))
        : '',
      h("div", { class: [
          `${this.classNames.EL}${this.classNames.CARD}`,
          `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ACTIONS}`,
        ].join(' ') },
        h("eds-elevation", { level: "1" },
          h("eds-card", null,
            h("div", { slot: "card-content" },
              h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}` },
                has(this.availableComponents, `${this.componentTag}.config.type`) && this.componentTag !== undefined
                  ? h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, Object.entries(this.availableComponents[this.componentTag].config.type).map(([configID, config], index) => h("div", { class: [
                      `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}`,
                      get(this.configData, 'data.type') === configID
                        || (!has(this.configData, 'data.type') && configID === 'h6' && this.componentTag === 'heading')
                        || (!has(this.configData, 'data.type') && configID === 'body-1' && (this.componentTag === 'paragraph' || this.componentTag === 'list'))
                        ? `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}${this.classNames.ACTIVE}` : '',
                    ].join(' ') },
                    h("eds-icon", { icon: get(config, 'icon'), size: "3x", id: `config-icon-${index}-${this.uuid}`, onClick: () => this.clickAvailableConfigurationHandle('data.type', configID) }),
                    h("eds-tooltip", { selector: `config-icon-${index}-${this.uuid}`, text: get(config, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))
                  : '',
                has(this.availableComponents, `${this.componentTag}.config.align`) && this.componentTag !== undefined
                  ? h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, Object.entries(this.availableComponents[this.componentTag].config.align).map(([configID, config], index) => h("div", { class: [
                      `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}`,
                      get(this.configData, 'data.align') === configID ? `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}${this.classNames.ACTIVE}` : '',
                    ].join(' ') },
                    h("eds-icon", { icon: get(config, 'icon'), size: "3x", id: `align-icon-${index}-${this.uuid}`, onClick: () => this.clickAvailableConfigurationHandle('data.align', configID) }),
                    h("eds-tooltip", { selector: `align-icon-${index}-${this.uuid}`, text: get(config, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))
                  : '',
                h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, this.componentActions.map((action, index) => h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}` },
                  h("eds-icon", { icon: action.icon, size: "3x", id: `action-icon-${index}-${this.uuid}`, onClick: () => this.clickActionsHandle(action) }),
                  h("eds-tooltip", { selector: `action-icon-${index}-${this.uuid}`, text: action.label, styles: "tertiary-800", size: "xs", placement: "top" }))))))))),
    ];
  }
  static get is() { return "eds-editable-block"; }
  static get originalStyleUrls() { return {
    "$": ["editable-block.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["editable-block.css"]
  }; }
  static get properties() { return {
    "color": {
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
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'secondary-500'"
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "EditableBlockData",
        "resolved": "EditableBlockData",
        "references": {
          "EditableBlockData": {
            "location": "import",
            "path": "../../../models/components/editable-block"
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
    "componentConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "EditableBlockConfig[]",
        "resolved": "EditableBlockConfig[]",
        "references": {
          "EditableBlockConfig": {
            "location": "import",
            "path": "../../../models/components/editable-block"
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
    }
  }; }
  static get states() { return {
    "componentTag": {},
    "configData": {},
    "listItems": {}
  }; }
  static get events() { return [{
      "method": "changeBlock",
      "name": "changeBlock",
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
      "method": "clickAction",
      "name": "clickAction",
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
    "getFilledData": {
      "complexType": {
        "signature": "() => Promise<{}>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<{}>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": ": Method to get formatted object containing the content"
          }]
      }
    },
    "setData": {
      "complexType": {
        "signature": "(data: any) => Promise<void>",
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
            "text": ": Method to set data to be display in component"
          }]
      }
    },
    "setComponentConfig": {
      "complexType": {
        "signature": "(data: any) => Promise<void>",
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
            "text": ": Method to set config and filter available component and\nthere config."
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchDataHandler"
    }, {
      "propName": "componentConfig",
      "methodName": "watchComponentConfigHandler"
    }]; }
}
