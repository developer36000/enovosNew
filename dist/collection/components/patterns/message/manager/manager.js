import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import anime from 'animejs/lib/anime.es.js';
import { filter, has, isNull, isNumber } from 'lodash-es';
import { Message } from '../../../../models/message';
import { onChange as themeOnChange, storeTheme } from '../../../../store/themes';
import { ComponentPropsHelper } from '../../../../utils/ComponentPropsHelper';
/**
 * @name Message Manager
 * @description Message Manager
 * @path patterns/message
 * @documented false
 */
export class ENOVOSMessageManager {
  constructor() {
    this.columnsFluid = false;
    this.messagesQueue = [];
    this.animationDuration = 400; // ms
    this.classNames = {
      EL: 'message-manager',
      ITEM: '__item',
      ICON_CLEANING: '__icon--cleaning',
      MARGIN: '--margin',
    };
  }
  /**
   * @description Listen button click from a message
   */
  clickButtonItemHandler(event) {
    this.clickMessageButtonItem.emit(event.detail);
  }
  /**
   * @description Add new message to the queue and display it in the view
   * @param {Object} options The different options to be used for the message (postion, showDuration,...)
   * @param {Object} message The message to be display
   */
  async setMessage(options, message) {
    // Create a new object message
    const newMessage = new Message(message);
    // Init message position
    this.position = (has(options, 'position') && ['top', 'bottom'].includes(options.position)) ? options.position : 'top';
    newMessage.setProp('position', this.position);
    newMessage.setProp('clickable', (options.clickable) ? true : false);
    // Launch the watcher and create the messagecontainer if doesn't exist
    this.messagesQueue = [...this.messagesQueue, newMessage];
    // Display the message in the specific container
    this.addMessage(newMessage, options);
  }
  /**
   * @description Empty the message queue
   * @param {Object} options The different options to be used for the message (position, showDuration,...)
   */
  async removeMessages(options) {
    this.position = (has(options, 'position') && ['top', 'bottom'].includes(options.position)) ? options.position : 'top';
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    if (messagesNode) {
      this.el.removeChild(messagesNode);
    }
  }
  watchColumnsFluidHandler(value) {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    if (messagesNode) {
      if (value === true) {
        messagesNode.classList.add(`${this.classNames.EL}--columns-fluid`);
      }
      else {
        messagesNode.classList.remove(`${this.classNames.EL}--columns-fluid`);
      }
    }
  }
  /**
   * @description Check if the message queue is empty or not.
   * If not empty, create the message container node
   * else remove it from the page
   * @return {boolean}
   */
  watchHandler() {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    // Get the message in the queue of the specific container, means depending his position
    const targetQueue = filter(this.messagesQueue, message => {
      return message.getProp('position') === this.position;
    });
    if (targetQueue.length > 0) {
      if (isNull(messagesNode)) {
        this.el.insertAdjacentHTML('beforeend', this.setMessageContainerHTML());
      }
    }
    else {
      setTimeout(() => {
        if (!isNull(messagesNode)) {
          this.el.removeChild(messagesNode);
        }
      }, this.animationDuration);
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
    // Set additional margin
    if (this.verticalOffset || this.verticalOffset !== undefined) {
      let verticalOffset = this.verticalOffset;
      // By default it's possible to set only the additionalMargin empty. Init default value for empty additionalMargin
      if (this.verticalOffset.trim() === '') {
        verticalOffset = '0';
      }
      this.el.classList.add(ComponentPropsHelper.getSize(verticalOffset, `${this.classNames.EL}${this.classNames.MARGIN}`));
    }
  }
  /**
   * @description Add the new message in the container node
   * @param {Object} message The message object to be display
   */
  addMessage(message, options) {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    const uidMessage = message.getProp('uid');
    const positionMessage = message.getProp('position');
    const messageNode = `#message_${message.getProp('uid')}`;
    const htmlPosition = (this.position === 'bottom') ? 'afterbegin' : 'beforeend';
    // Insert the message in the list of message before or after the other
    // depending the position of the messages container
    messagesNode.insertAdjacentHTML(htmlPosition, this.getMessageHTML(message));
    if (!this.verticalOffset || this.verticalOffset === undefined) {
      anime({
        targets: this.el.querySelector(`${messageNode}`),
        opacity: 1,
        top: (this.position === 'top') ? 0 : 'inherit',
        bottom: (this.position === 'bottom') ? 0 : 'inherit',
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      });
    }
    else {
      anime({
        targets: this.el.querySelector(`${messageNode}`),
        opacity: 1,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      });
    }
    const messageItem = this.el.querySelector(`#message_component_${message.getProp('uid')}`);
    if (messageItem && message.hasProp('buttons')) {
      messageItem.setButtons(message.getProp('buttons'));
    }
    // Listen the click event on close icon
    this.el.querySelector(`${messageNode}.${this.classNames.EL + this.classNames.ITEM}`).addEventListener('click', () => {
      this.deleteMessage(uidMessage, positionMessage);
    });
    // In case the option show duration is define, the message should be hidden after a timelaps
    if (has(options, 'showDuration') && isNumber(options.showDuration)) {
      setTimeout(() => {
        this.deleteMessage(uidMessage, positionMessage);
      }, options.showDuration);
    }
  }
  /**
   * @description Remove the specific message from the list
   * @param {number} uid ID of the message
   * @param {string} position Position of the message in view, targeting the right container
   */
  deleteMessage(uid, position) {
    this.position = position; // Update position to target the right messages container
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    const messageNode = this.el.querySelector(`#message_${uid}`);
    // Remove the message from the queue
    this.messagesQueue = filter(this.messagesQueue, message => {
      return message.getProp('uid') !== uid;
    });
    // Remove the "physical" node message from the queue
    if (!isNull(messagesNode)) {
      anime({
        targets: messageNode,
        opacity: 0,
        height: 0,
        marginBottom: 0,
        translateY: (this.position === 'top') ? -50 : 50,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      }).finished.then(() => {
        if (messagesNode.contains(messageNode)) {
          messagesNode.removeChild(messageNode);
        }
      });
    }
  }
  /**
   * @description Generate the HTML node which should contain all messages
   * @return {string} The html node
   */
  setMessageContainerHTML() {
    return `<div name="${this.classNames.EL}" position="${this.position}" class="${this.columnsFluid ? `${this.classNames.EL}--columns-fluid` : ''}"></div>`;
  }
  /**
   * @description Generate the HTML node of a uniq message
   * @param {Object} message The message object to be display
   * @return {string} The html node
   */
  getMessageHTML(message) {
    let styles = message.getProp('styles');
    const classes = [
      this.classNames.EL + this.classNames.ITEM,
      ComponentPropsHelper.setGlobalStyles(styles, this.classNames.EL + this.classNames.ITEM),
    ].join(' ');
    styles += ' with-cleaning-icon';
    message.setProp('styles', styles);
    return `<div id="${'message_' + message.getProp('uid')}" class="${classes}">

      <eds-message styles="${message.getProp('styles')}"
        id="${'message_component_' + message.getProp('uid')}"
        icon-leading="${message.getProp('iconLeading')}"
        ${message.getProp('clickable') ? 'clickable' : ''}>
        ${message.getProp('content')}

        <eds-icon slot="message-close-btn" class="${this.classNames.EL + this.classNames.ICON_CLEANING}"
          icon="times"></eds-icon>

      </eds-message>

    </div>`;
  }
  render() {
    return (h("slot", null));
  }
  static get is() { return "eds-message-manager"; }
  static get originalStyleUrls() { return {
    "$": ["manager.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["manager.css"]
  }; }
  static get properties() { return {
    "position": {
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
      "attribute": "position",
      "reflect": false
    },
    "columns": {
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
      "attribute": "columns",
      "reflect": true
    },
    "columnsFluid": {
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
      "attribute": "columns-fluid",
      "reflect": true,
      "defaultValue": "false"
    },
    "verticalOffset": {
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
      "attribute": "vertical-offset",
      "reflect": false
    }
  }; }
  static get states() { return {
    "messagesQueue": {}
  }; }
  static get events() { return [{
      "method": "clickMessageButtonItem",
      "name": "clickMessageButtonItem",
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
    "setMessage": {
      "complexType": {
        "signature": "(options: MessageOptions, message: Message) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "options The different options to be used for the message (postion, showDuration,...)",
                "name": "param"
              }],
            "text": "The different options to be used for the message (postion, showDuration,...)"
          }, {
            "tags": [{
                "text": "message The message to be display",
                "name": "param"
              }],
            "text": "The message to be display"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "MessageOptions": {
            "location": "import",
            "path": "../../../../models/message"
          },
          "Message": {
            "location": "import",
            "path": "../../../../models/message"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Add new message to the queue and display it in the view"
          }, {
            "name": "param",
            "text": "options The different options to be used for the message (postion, showDuration,...)"
          }, {
            "name": "param",
            "text": "message The message to be display"
          }]
      }
    },
    "removeMessages": {
      "complexType": {
        "signature": "(options: MessageOptions) => Promise<void>",
        "parameters": [{
            "tags": [{
                "text": "options The different options to be used for the message (position, showDuration,...)",
                "name": "param"
              }],
            "text": "The different options to be used for the message (position, showDuration,...)"
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "MessageOptions": {
            "location": "import",
            "path": "../../../../models/message"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "description",
            "text": "Empty the message queue"
          }, {
            "name": "param",
            "text": "options The different options to be used for the message (position, showDuration,...)"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "columnsFluid",
      "methodName": "watchColumnsFluidHandler"
    }, {
      "propName": "messagesQueue",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "clickButtonItem",
      "method": "clickButtonItemHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
