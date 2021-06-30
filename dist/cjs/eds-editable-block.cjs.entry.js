'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
const _baseGetTag = require('./_baseGetTag-1e305d19.js');
const isSymbol = require('./isSymbol-04330316.js');
const toString = require('./toString-a99a8519.js');
require('./toNumber-e6ce1248.js');
require('./isObject-110b878e.js');
const identity = require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
const _baseClone = require('./_baseClone-07298060.js');
require('./_copyArray-16797645.js');
const set = require('./set-82454825.js');
require('./_arrayEach-c0f7fc70.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_baseFlatten-e12e1365.js');
const flatten = require('./flatten-684aa5bf.js');
require('./_baseSlice-322a2948.js');
require('./_setToArray-21e6bd5a.js');
const debounce = require('./debounce-504be00b.js');
const _baseUnset = require('./_baseUnset-241d5e07.js');
const has = require('./has-c1d0fffa.js');
const isEmpty = require('./isEmpty-6fa14061.js');
const isEqual = require('./isEqual-54b6e24e.js');
const themes = require('./themes-bd258a0a.js');
const v4 = require('./v4-378e0891.js');
const listItem = require('./list-item-09b6fa3a.js');

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !set.defineProperty ? identity.identity : function(func, string) {
  return set.defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten.flatten), func + '');
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isSymbol.isObjectLike(value) || _baseGetTag.baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _baseClone.getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!toString.isArray(value) && isSymbol.isObjectLike(value) && _baseGetTag.baseGetTag(value) == stringTag);
}

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = toString.arrayMap(paths, function(path) {
    path = _hasPath.castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _baseClone.copyObject(object, _baseClone.getAllKeysIn(object), result);
  if (isDeep) {
    result = _baseClone.baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset.baseUnset(result, paths[length]);
  }
  return result;
});

class EditableBlockConfig {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof EditableBlockConfig) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
  setProp(key, value) {
    set.set(this, key, value);
  }
}
class EditableBlockData {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof EditableBlockData) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return _hasPath.get(this, key);
  }
  hasProp(key) {
    return has.has(this, key);
  }
  setProp(key, value) {
    set.set(this, key, value);
  }
}

const editableBlockCss = "[name=editable-block]{position:relative;display:block;width:100%}[name=editable-block] .editable-block__icon{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}[name=editable-block] .editable-block__icon--leading{left:8px}[name=editable-block] .editable-block__icon--trailing{right:8px;opacity:0;transition:opacity 0.2s}[name=editable-block] .editable-block__icon--top{top:8px;transform:none}[name=editable-block] .editable-block__card{position:absolute;z-index:7000;opacity:0;visibility:hidden;transition:opacity 0s, visibility 0s}[name=editable-block] .editable-block__card--visible{height:auto;opacity:1;visibility:visible;transition:opacity 0.2s, visibility 0.2s}[name=editable-block] .editable-block__card__container{margin:-4px}[name=editable-block] .editable-block__card__icon{color:#5E5E5E;transition:color 0.2s;cursor:pointer}[name=editable-block] .editable-block__card__icon:hover{color:#004885}[name=editable-block] .editable-block__card__icon--active{color:#F76700}[name=editable-block] .editable-block__card__components{left:8px;display:inline-block;height:auto;opacity:1;visibility:visible}[name=editable-block] .editable-block__card__components .editable-block__card__container{display:flex;align-items:center;justify-content:flex-start;transform:none}[name=editable-block] .editable-block__card__components .editable-block__card__container .editable-block__card__icon:not(:first-child){margin-left:8px}[name=editable-block] .editable-block__card__actions{right:8px;top:-16px;transform:translateY(-50%)}[name=editable-block] .editable-block__card__actions .editable-block__card__container__icons{position:relative;display:flex;align-items:center;justify-content:flex-end}[name=editable-block] .editable-block__card__actions .editable-block__card__container__icons:not(:last-child){margin-bottom:8px}[name=editable-block] .editable-block__card__actions .editable-block__card__container__icons:not(:last-child):after{position:absolute;bottom:-4px;width:100%;height:1px;background-color:#5A8D00;content:\"\"}[name=editable-block] .editable-block__card__actions .editable-block__card__container__icons .editable-block__card__icon:not(:last-child){margin-right:8px}[name=editable-block] .editable-block__container{display:flex;align-items:center;width:100%;min-height:48px;padding-left:16px;padding-right:40px;padding-top:8px;padding-bottom:8px}[name=editable-block] .editable-block__container--columns{flex-direction:column}[name=editable-block] .editable-block__container__editor{display:block;width:100%;height:100%;outline:none}[name=editable-block] .editable-block__container__editor:not(:first-child){padding-top:8px;margin-top:8px}[name=editable-block] .editable-block__container__image{align-self:flex-start;height:0;background-color:#FFDDBF}[name=editable-block] .editable-block__container__image__label{align-self:flex-start}[name=editable-block] .editable-block__container__image--visible{height:100%;margin-top:8px}[name=editable-block] .editable-block__container__caption{display:none;width:100%;margin-top:8px}[name=editable-block] .editable-block__container__caption__label{align-self:flex-start}[name=editable-block] .editable-block__container__caption .editable-block__container__editor{padding:8px;border:1px solid #5A8D00;border-radius:4px}[name=editable-block] .editable-block__container__caption--visible{display:block}[name=editable-block] .editable-block__container--undefined{padding-left:40px}[name=editable-block] .editable-block__image{padding:8px;border:1px solid #5A8D00;border-radius:4px}[name=editable-block]:hover .editable-block__icon--trailing{opacity:1}[name=editable-block] [contenteditable=true]{position:relative}[name=editable-block] [contenteditable=true]:not(:focus):before{position:absolute;top:50%;min-height:24px;color:#004885;font-family:\"Montserrat\", sans-serif;font-size:14px;line-height:24px;content:attr(data-placeholder);transform:translateY(-50%)}";

const ENOVOSEditableBlock = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeBlock = index.createEvent(this, "changeBlock", 7);
    this.clickAction = index.createEvent(this, "clickAction", 7);
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
    this.saveInput = debounce.debounce((inputText, inputName) => {
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
    if (!isEqual.isEqual(newData, oldData) && !isEmpty.isEmpty(newData)) {
      this.initData(newData);
    }
  }
  /**
   * @description: Watch component config changes if component is updated
   */
  watchComponentConfigHandler(newData, oldData) {
    if (!isEqual.isEqual(newData, oldData) && !isEmpty.isEmpty(newData)) {
      this.initComponentConfig(newData);
      this.filterComponentConfig();
    }
  }
  /**
   * @description: Init component before rendering
   */
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.uuid = v4.v4_1();
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
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
      this.uuid = has.has(this.configData, 'id') ? _hasPath.get(this.configData, 'id') : this.uuid;
      if (has.has(this.configData, 'type')) {
        this.componentTag = _hasPath.get(this.configData, 'type');
        switch (this.componentTag) {
          case 'image':
            this.inputContent = _hasPath.get(this.configData, 'data.src');
            this.inputContentSecondary = _hasPath.get(this.configData, 'data.alt');
            break;
          default:
            this.inputContent = _hasPath.get(this.configData, 'data.content');
            this.inputContentSecondary = _hasPath.get(this.configData, 'data.secondary');
            break;
        }
        this.setFilledData();
        // Specific temporary saving depending component tag
        switch (this.componentTag) {
          case 'list':
            this.tmpContent = _hasPath.get(this.configData, 'data.content');
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
      else if (isEmpty.isEmpty(this.inputContent)) {
        elList.items = [new listItem.ListItem({ content: '' })];
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
    if (has.has(this.configData, 'data.type')) {
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
    if (inputName !== 'secondary' && (!e.target.innerText || isEmpty.isEmpty(e.target.innerText.trim()))) {
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
        defaultPlaceholder = has.has(this.availableComponents, `${this.componentTag}.placeholder`) ? _hasPath.get(this.availableComponents, `${this.componentTag}.placeholder`) : '';
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
    if (!isEmpty.isEmpty(this.componentConfig)) {
      // Filtered component list by key
      const componentConfigKeys = Object.entries(this.componentConfig).reduce((obj, current) => {
        obj[current[1].name] = current[1].types;
        return obj;
      }, {});
      const filteredComponent = Object.keys(this.defaultComponents)
        .filter(key => Object.keys(componentConfigKeys).includes(key))
        .reduce((obj, key) => {
        // Filtered component type by key
        if (has.has(this.defaultComponents[key], 'config')) {
          if (has.has(this.defaultComponents[key], 'config.type')) {
            const filtered = Object.keys(_hasPath.get(this.defaultComponents[key], 'config.type'))
              .filter(keyType => componentConfigKeys[key].includes(keyType))
              .reduce((objReduce, keyReduce) => {
              objReduce[keyReduce] = _hasPath.get(this.defaultComponents[key], `config.type.${keyReduce}`);
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
              styles: has.has(this.configData, 'data.styles') ? _hasPath.get(this.configData, 'data.styles') : this.color,
              type: has.has(this.configData, 'data.type') ? _hasPath.get(this.configData, 'data.type') : ((this.componentTag === 'heading') ? 'h6' : 'body-1'),
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
              type: has.has(this.configData, 'data.type') ? _hasPath.get(this.configData, 'data.type') : 'body-1',
              align: has.has(this.configData, 'data.align') ? _hasPath.get(this.configData, 'data.align') : 'left',
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
        index.h("div", { class: [
            `${this.classNames.EL}${this.classNames.CARD}`,
            `${this.classNames.EL}${this.classNames.CARD}${this.classNames.COMPONENTS}`,
          ].join(' ') }, index.h("eds-elevation", { level: "1" }, index.h("eds-card", null, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}` }, Object.entries(this.availableComponents).map(([componentID, component], index$1) => index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}` }, index.h("eds-icon", { icon: _hasPath.get(component, 'icon'), size: "3x", id: `component-icon-${index$1}-${this.uuid}`, onClick: () => this.clickAvailableComponentsHandle(componentID) }), index.h("eds-tooltip", { selector: `component-icon-${index$1}-${this.uuid}`, text: _hasPath.get(component, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))))))
        : '',
      index.h("div", { class: [
          `${this.classNames.EL}${this.classNames.CONTAINER}`,
          this.componentTag === undefined ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.UNDEFINED}` : '',
          this.componentTag === 'image' ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.COLUMNS}` : '',
        ].join(' '), onClick: () => this.componentTag === undefined ? this.openPopup(this.classNames.COMPONENTS) : false }, this.componentTag !== undefined ?
        (() => {
          switch (this.componentTag) {
            case 'heading':
              return index.h("eds-heading", { type: has.has(this.configData, 'data.type') ? _hasPath.get(this.configData, 'data.type') : 'h6', contenteditable: "true", "data-placeholder": isEmpty.isEmpty(this.inputContent) ? (has.has(this.availableComponents, `${this.componentTag}.placeholder`) ? _hasPath.get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: has.has(this.configData, 'data.styles') ? _hasPath.get(this.configData, 'data.styles') : this.color, content: has.has(this.configData, 'data.content') ? _hasPath.get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                  `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                  `${this.classNames.EL}${this.classNames.HEADER}`,
                ].join(' ') });
            case 'list':
              return [
                index.h("eds-list", { typographyCategory: has.has(this.configData, 'data.type') ? _hasPath.get(this.configData, 'data.type') : 'body-1', align: has.has(this.configData, 'data.align') ? _hasPath.get(this.configData, 'data.align') : 'left', contenteditable: "true", "data-placeholder": isEmpty.isEmpty(this.listItems) ? (has.has(this.availableComponents, `${this.componentTag}.placeholder`) ? _hasPath.get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                    `${this.classNames.EL}${this.classNames.LIST}`,
                  ].join(' ') }),
              ];
            case 'image':
              return [
                index.h("eds-paragraph", { type: 'body-2', styles: "secondary-500", "font-weight": "semi-bold", content: "Image url", class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.LABEL}`,
                  ].join(' ') }),
                index.h("eds-paragraph", { type: 'body-1', contenteditable: "true", "data-placeholder": isEmpty.isEmpty(this.inputContent) ? (has.has(this.availableComponents, `${this.componentTag}.placeholder`) ? _hasPath.get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: this.color, content: has.has(this.configData, 'data.content') ? _hasPath.get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                    `${this.classNames.EL}${this.classNames.IMAGE}`,
                  ].join(' ') }),
                index.h("eds-image", { class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}`,
                    !isEmpty.isEmpty(_hasPath.get(this.configData, 'data.src')) || !isEmpty.isEmpty(this.inputContent) ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.IMAGE}${this.classNames.VISIBLE}` : '',
                  ].join(' '), src: has.has(this.configData, 'data.src') ? _hasPath.get(this.configData, 'data.src') : this.inputContent, alt: has.has(this.configData, 'data.alt') ? _hasPath.get(this.configData, 'data.alt') : this.inputContentSecondary }),
                index.h("div", { class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}`,
                    !isEmpty.isEmpty(_hasPath.get(this.configData, 'data.src')) || !isEmpty.isEmpty(this.inputContent) ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.VISIBLE}` : '',
                  ].join(' ') }, index.h("eds-paragraph", { type: 'body-2', "font-weight": "semi-bold", styles: "secondary-500", content: "Image caption", class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.CAPTION}${this.classNames.LABEL}`,
                  ].join(' ') }), index.h("eds-paragraph", { type: 'body-1', contenteditable: "true", "data-placeholder": isEmpty.isEmpty(this.inputContentSecondary) ? 'Type your image caption here' : '', styles: this.color, content: has.has(this.configData, 'data.secondary') ? _hasPath.get(this.configData, 'data.secondary') : this.inputContentSecondary, onInput: e => this.inputHandle(e, 'inputContentSecondary'), onPaste: e => this.pasteHandle(e), class: [
                    `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                    `${this.classNames.EL}${this.classNames.IMAGE}${this.classNames.CAPTION}`,
                  ].join(' ') })),
              ];
            default:
            case 'paragraph':
              return index.h("eds-paragraph", { type: has.has(this.configData, 'data.type') ? _hasPath.get(this.configData, 'data.type') : 'body-1', contenteditable: "true", "data-placeholder": isEmpty.isEmpty(this.inputContent) ? (has.has(this.availableComponents, `${this.componentTag}.placeholder`) ? _hasPath.get(this.availableComponents, `${this.componentTag}.placeholder`) : '') : '', styles: has.has(this.configData, 'data.styles') ? _hasPath.get(this.configData, 'data.styles') : this.color, content: has.has(this.configData, 'data.content') ? _hasPath.get(this.configData, 'data.content') : this.inputContent, onInput: e => this.inputHandle(e), onPaste: e => this.pasteHandle(e), class: [
                  `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.EDITOR}`,
                  `${this.classNames.EL}${this.classNames.PARAGRAPH}`,
                ].join(' ') });
          }
        })()
        : ''),
      this.componentTag !== undefined
        ? index.h("bdl-bds-button", { "text-only": true, size: "sm", onClickButton: () => this.openPopup(this.classNames.ACTIONS), class: [
            `${this.classNames.EL}${this.classNames.ICON}`,
            `${this.classNames.EL}${this.classNames.ICON}${this.classNames.ACTIONS}`,
            `${this.classNames.EL}${this.classNames.ICON}${this.classNames.TRAILING}`,
            this.componentTag === 'image' ? `${this.classNames.EL}${this.classNames.ICON}${this.classNames.TOP}` : '',
          ].join(' ') }, index.h("eds-icon", { slot: "icon", icon: "ellipsis-v" }))
        : '',
      index.h("div", { class: [
          `${this.classNames.EL}${this.classNames.CARD}`,
          `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ACTIONS}`,
        ].join(' ') }, index.h("eds-elevation", { level: "1" }, index.h("eds-card", null, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}` }, has.has(this.availableComponents, `${this.componentTag}.config.type`) && this.componentTag !== undefined
        ? index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, Object.entries(this.availableComponents[this.componentTag].config.type).map(([configID, config], index$1) => index.h("div", { class: [
            `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}`,
            _hasPath.get(this.configData, 'data.type') === configID
              || (!has.has(this.configData, 'data.type') && configID === 'h6' && this.componentTag === 'heading')
              || (!has.has(this.configData, 'data.type') && configID === 'body-1' && (this.componentTag === 'paragraph' || this.componentTag === 'list'))
              ? `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}${this.classNames.ACTIVE}` : '',
          ].join(' ') }, index.h("eds-icon", { icon: _hasPath.get(config, 'icon'), size: "3x", id: `config-icon-${index$1}-${this.uuid}`, onClick: () => this.clickAvailableConfigurationHandle('data.type', configID) }), index.h("eds-tooltip", { selector: `config-icon-${index$1}-${this.uuid}`, text: _hasPath.get(config, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))
        : '', has.has(this.availableComponents, `${this.componentTag}.config.align`) && this.componentTag !== undefined
        ? index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, Object.entries(this.availableComponents[this.componentTag].config.align).map(([configID, config], index$1) => index.h("div", { class: [
            `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}`,
            _hasPath.get(this.configData, 'data.align') === configID ? `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}${this.classNames.ACTIVE}` : '',
          ].join(' ') }, index.h("eds-icon", { icon: _hasPath.get(config, 'icon'), size: "3x", id: `align-icon-${index$1}-${this.uuid}`, onClick: () => this.clickAvailableConfigurationHandle('data.align', configID) }), index.h("eds-tooltip", { selector: `align-icon-${index$1}-${this.uuid}`, text: _hasPath.get(config, 'label'), styles: "tertiary-800", size: "xs", placement: "top" }))))
        : '', index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.CONTAINER}${this.classNames.ICONS}` }, this.componentActions.map((action, index$1) => index.h("div", { class: `${this.classNames.EL}${this.classNames.CARD}${this.classNames.ICON}` }, index.h("eds-icon", { icon: action.icon, size: "3x", id: `action-icon-${index$1}-${this.uuid}`, onClick: () => this.clickActionsHandle(action) }), index.h("eds-tooltip", { selector: `action-icon-${index$1}-${this.uuid}`, text: action.label, styles: "tertiary-800", size: "xs", placement: "top" }))))))))),
    ];
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchDataHandler"],
    "componentConfig": ["watchComponentConfigHandler"]
  }; }
};
ENOVOSEditableBlock.style = editableBlockCss;

exports.eds_editable_block = ENOVOSEditableBlock;
