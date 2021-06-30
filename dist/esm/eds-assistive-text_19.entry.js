import { r as registerInstance, h, g as getElement, c as createEvent } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import { t as toString$1, b as baseToString$1 } from './toString-e72a88e9.js';
import { b as baseTrim } from './toNumber-30473e8a.js';
import './isObject-7039fcda.js';
import './toInteger-521653cd.js';
import './identity-5b806255.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import { b as baseClone } from './_baseClone-8c6683b6.js';
import { b as baseIndexOf, a as baseUniq, u as uniq } from './uniq-470bbb21.js';
import './_copyArray-b32fb6e9.js';
import { s as set$1 } from './set-913bca4c.js';
import './_arrayEach-de39f2e7.js';
import './_baseFindIndex-e57941fd.js';
import { g as get$1 } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_baseFlatten-59c8d422.js';
import { f as flatten } from './flatten-b33122fe.js';
import './_baseSlice-a9720fa6.js';
import { s as stringToArray, c as castSlice } from './_stringToArray-cda8d6f6.js';
import './_setToArray-60932de0.js';
import { c as compact } from './compact-c11bf240.js';
import { c as concat } from './concat-13088df4.js';
import { b as baseIteratee } from './_baseIteratee-93849f60.js';
import './_baseProperty-e57e2f20.js';
import './_baseEach-9cdd008c.js';
import { d as debounce } from './debounce-930001ff.js';
import { f as filter } from './filter-8edeba78.js';
import './_createFind-3b4509e9.js';
import './findIndex-98e7efdf.js';
import { f as find } from './find-5e7f0825.js';
import './_baseMap-2384d8c1.js';
import { m as map } from './map-848f6ebc.js';
import { h as has$1 } from './has-1e48d487.js';
import { i as isEmpty } from './isEmpty-32db0d3a.js';
import { i as isEqual } from './isEqual-1c3df692.js';
import { u as uniqueId } from './uniqueId-a86eb722.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { I as IsVisibleObservable } from './isVisibleObservable-5e7e7c3e.js';
import { v as v4_1 } from './v4-4d460ace.js';
import { T as TapEvent } from './tapEvent-8abcbf66.js';
import { L as LayoutPropsHelper } from './LayoutPropsHelper-9f96c6ed.js';
import { C as ComponentPropsHelper } from './ComponentPropsHelper-9f5a3c88.js';
import { a as commonjsGlobal } from './_commonjsHelpers-7b8ed50b.js';
import { S as StylePropsHelper } from './StylePropsHelper-cfc9e3bf.js';

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString$1(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString$1(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee)) : [];
}

const assistiveTextCss = ".assistive-text{display:flex;align-items:center;width:100%;font-family:\"Montserrat\", sans-serif;font-style:normal}.assistive-text__icon{pointer-events:none}.assistive-text.assistive-text{color:#5E5E5E}.assistive-text.assistive-text .assistive-text__icon{color:#5E5E5E}.assistive-text.assistive-text--success{color:#00856A}.assistive-text.assistive-text--success .assistive-text__icon{color:#00856A}.assistive-text.assistive-text--warning{color:#F76700}.assistive-text.assistive-text--warning .assistive-text__icon{color:#F76700}.assistive-text.assistive-text--error{color:#EB0000}.assistive-text.assistive-text--error .assistive-text__icon{color:#EB0000}.assistive-text.assistive-text--info{color:#2899A8}.assistive-text.assistive-text--info .assistive-text__icon{color:#2899A8}.assistive-text.assistive-text{padding:0 8px 0 0;font-size:12px;font-weight:400;line-height:16px}.assistive-text.assistive-text .assistive-text__icon{width:24px;margin-right:8px;font-size:24px}";

const ENOVOSFieldHelper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'assistive-text',
      ICON: '__icon',
      ICON_LEADING: '--leading',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Set the contextual classes (success, error, warning...)
   * @return {string}
   */
  getContextualClass() {
    if (['success', 'info', 'warning', 'error'].includes(this.type)) {
      return `${this.classNames.EL}--${this.type}`;
    }
  }
  hasIcon() {
    return (this.icon) ? true : false;
  }
  /** REMOVABLE START */
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
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getContextualClass(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, this.hasIcon()
      ? h("eds-icon", { class: [
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
        ].join(' '), icon: this.icon })
      : '', this.message));
  }
  get el() { return getElement(this); }
};
ENOVOSFieldHelper.style = assistiveTextCss;

const avatarCss = "[name=avatar]{display:block}[name=avatar] .avatar{display:block}[name=avatar] .avatar__container{display:flex;align-items:center;justify-content:center;width:100%;height:100%}[name=avatar] .avatar.avatar{width:48px;height:48px}[name=avatar] .avatar.avatar .avatar__img{width:48px;height:48px;border-radius:40%/40%}[name=avatar] .avatar.avatar .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar .avatar__container__icon{height:32px !important;font-size:32px !important;line-height:32px !important}[name=avatar] .avatar.avatar--lg{width:64px;height:64px}[name=avatar] .avatar.avatar--lg .avatar__img{width:64px;height:64px;border-radius:40%/40%}[name=avatar] .avatar.avatar--lg .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar--lg .avatar__container__icon{height:40px !important;font-size:40px !important;line-height:40px !important}[name=avatar] .avatar.avatar--md{width:48px;height:48px}[name=avatar] .avatar.avatar--md .avatar__img{width:48px;height:48px;border-radius:40%/40%}[name=avatar] .avatar.avatar--md .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar--md .avatar__container__icon{height:32px !important;font-size:32px !important;line-height:32px !important}[name=avatar] .avatar.avatar--sm{width:40px;height:40px}[name=avatar] .avatar.avatar--sm .avatar__img{width:40px;height:40px;border-radius:40%/40%}[name=avatar] .avatar.avatar--sm .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar--sm .avatar__container__icon{height:24px !important;font-size:24px !important;line-height:24px !important}[name=avatar] .avatar.avatar--xs{width:32px;height:32px}[name=avatar] .avatar.avatar--xs .avatar__img{width:32px;height:32px;border-radius:40%/40%}[name=avatar] .avatar.avatar--xs .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar--xs .avatar__container__icon{height:20px !important;font-size:20px !important;line-height:20px !important}[name=avatar] .avatar.avatar--xxs{width:16px;height:16px}[name=avatar] .avatar.avatar--xxs .avatar__img{width:16px;height:16px;border-radius:40%/40%}[name=avatar] .avatar.avatar--xxs .avatar__container{border-radius:40%/40%}[name=avatar] .avatar.avatar--xxs .avatar__container__icon{height:16px !important;font-size:16px !important;line-height:16px !important}";

const ENOVOSAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.elevationStyle = 'dark';
    this.elevationLevel = '2';
    this.icon = 'user-circle';
    this.iconStyle = 'quaternary-700';
    this.classNames = {
      EL: 'avatar',
      IMG: '__img',
      CONTAINER: '__container',
      ICON: '__icon',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("eds-elevation", { styles: this.elevationStyle, level: this.elevationLevel, class: [
        this.classNames.EL,
        this.getSize(),
      ].join(' ') }, this.src && !isEmpty(trim(this.src))
      ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMG}`, src: this.src })
      : h("div", { class: `${this.classNames.EL}${this.classNames.CONTAINER}` }, h("eds-icon", { icon: this.icon, styles: this.iconStyle, class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.ICON}` }))));
  }
  get el() { return getElement(this); }
};
ENOVOSAvatar.style = avatarCss;

const badgeCss = "[name=badge]{display:inline-block}[name=badge] .badge{display:flex;align-items:center;justify-content:center;overflow:hidden;font-family:\"Montserrat\", sans-serif;text-decoration:inherit;text-transform:inherit;outline:none}[name=badge] .badge>div{outline:none}[name=badge] .badge.badge{height:24px;min-width:24px;padding:0 8px;border-radius:4px;font-size:12px;font-weight:400;line-height:16px}[name=badge] .badge.badge.badge--with-media{padding:0 8px}[name=badge] .badge.badge.badge--with-media .badge__media{height:16px}[name=badge] .badge.badge.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge.badge--with-media.badge--no-text{padding:0 8px;border-radius:4px !important}[name=badge] .badge.badge.badge--with-media.badge--no-text .badge__media{width:16px;height:16px}[name=badge] .badge.badge.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge--lg{height:32px;min-width:32px;padding:0 12px;border-radius:4px;font-size:14px;font-weight:400;line-height:24px}[name=badge] .badge.badge--lg.badge--with-media{padding:0 8px}[name=badge] .badge.badge--lg.badge--with-media .badge__media{height:20px}[name=badge] .badge.badge--lg.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge--lg.badge--with-media.badge--no-text{padding:0 8px;border-radius:4px !important}[name=badge] .badge.badge--lg.badge--with-media.badge--no-text .badge__media{width:20px;height:20px}[name=badge] .badge.badge--lg.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge--lg.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge--md{height:24px;min-width:24px;padding:0 8px;border-radius:4px;font-size:12px;font-weight:400;line-height:16px}[name=badge] .badge.badge--md.badge--with-media{padding:0 8px}[name=badge] .badge.badge--md.badge--with-media .badge__media{height:8px}[name=badge] .badge.badge--md.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge--md.badge--with-media.badge--no-text{padding:0 8px;border-radius:4px !important}[name=badge] .badge.badge--md.badge--with-media.badge--no-text .badge__media{width:8px;height:8px}[name=badge] .badge.badge--md.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge--md.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge--sm{height:16px;min-width:16px;padding:0 8px;border-radius:4px;font-size:10px;font-weight:400;line-height:16px}[name=badge] .badge.badge--sm.badge--with-media{padding:0 8px}[name=badge] .badge.badge--sm.badge--with-media .badge__media{height:8px}[name=badge] .badge.badge--sm.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge--sm.badge--with-media.badge--no-text{padding:0 8px;border-radius:4px !important}[name=badge] .badge.badge--sm.badge--with-media.badge--no-text .badge__media{width:8px;height:8px}[name=badge] .badge.badge--sm.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge--sm.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge--xs{height:12px;min-width:12px;padding:0 4px;border-radius:4px;font-size:8px;font-weight:600;line-height:16px}[name=badge] .badge.badge--xs.badge--with-media{padding:0 8px}[name=badge] .badge.badge--xs.badge--with-media .badge__media{height:8px}[name=badge] .badge.badge--xs.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge--xs.badge--with-media.badge--no-text{padding:0 8px;border-radius:4px !important}[name=badge] .badge.badge--xs.badge--with-media.badge--no-text .badge__media{width:8px;height:8px}[name=badge] .badge.badge--xs.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge--xs.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge--xxs{height:8px;min-width:8px;padding:0;border-radius:100%;font-size:8px;font-weight:600;line-height:16px}[name=badge] .badge.badge--xxs.badge--with-media{padding:0 8px}[name=badge] .badge.badge--xxs.badge--with-media .badge__media{height:8px}[name=badge] .badge.badge--xxs.badge--with-media .badge__media+.badge__text{margin-left:12px}[name=badge] .badge.badge--xxs.badge--with-media.badge--no-text{padding:0 8px;border-radius:100% !important}[name=badge] .badge.badge--xxs.badge--with-media.badge--no-text .badge__media{width:8px;height:8px}[name=badge] .badge.badge--xxs.badge--no-text{border-radius:100% !important}[name=badge] .badge.badge--xxs.badge--rounded{padding-left:0;padding-right:0}[name=badge] .badge.badge{color:#FFFFFF;background-color:#F76700}[name=badge] .badge.badge--success{color:#00856A;background-color:#E5F2F0}[name=badge] .badge.badge--info{color:#2899A8;background-color:#DBF6FF}[name=badge] .badge.badge--warning{color:#F76700;background-color:#FFF1E5}[name=badge] .badge.badge--error{color:#EB0000;background-color:#FDE5E5}[name=badge] .badge.badge--primary{color:#FFFFFF;background-color:#F76700}[name=badge] .badge.badge--primary-300{color:\"\";background-color:\"\"}[name=badge] .badge.badge--brand-expressive-yellow-light{color:#FFFFFF;background-color:#F0BE21}[name=badge] .badge.badge--brand-expressive-yellow-dark{color:#FFFFFF;background-color:#B77918}[name=badge] .badge.badge--brand-expressive-green-light{color:#FFFFFF;background-color:#4FB482}[name=badge] .badge.badge--brand-expressive-blue-light{color:#FFFFFF;background-color:#1B8DC0}[name=badge] .badge.badge--quaternary-400{color:#004885;background-color:#BCD870}[name=badge] .badge.badge--quaternary-600{color:#004885;background-color:#5A8D00}[name=badge] .badge.badge--primary-50{color:\"\";background-color:\"\"}[name=badge] .badge.badge--primary-700{color:#FFFFFF;background-color:#D52B1E}[name=badge] .badge.badge--primary-900{color:#FFFFFF;background-color:#F76700}[name=badge] .badge.badge--tertiary{color:#FFFFFF;background-color:#004885}[name=badge] .badge.badge--tertiary-300{color:#004885;background-color:#85A8C5}[name=badge] .badge.badge--tertiary-400{color:\"\";background-color:\"\"}[name=badge] .badge.badge--tertiary-600{color:\"\";background-color:\"\"}[name=badge] .badge.badge--tertiary-800{color:\"\";background-color:\"\"}[name=badge] .badge.badge--white{color:#004885;background-color:#FFFFFF}[name=badge] .badge.badge--grey-50{color:\"\";background-color:\"\"}[name=badge] .badge.badge--grey-200{color:\"\";background-color:\"\"}";

const ENOVOSBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'badge',
      MEDIA: '__media',
      LEADING: '--leading',
      TEXT: '__text',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  /**
   * @description Get tooltip size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description Control if text is present in badge
   */
  noText() {
    return (!this.text) ? `${this.classNames.EL}--no-text` : '';
  }
  /**
   * @description Control if badge is fully rounded
   */
  isRounded() {
    return (this.rounded) ? `${this.classNames.EL}--rounded` : '';
  }
  /**
   * @description Control if a icon leading parameter should be display
   * @return {boolean}
   */
  hasMediaLeading() {
    return (this.mediaLeading) ? true : false;
  }
  setClasses() {
    return [
      this.classNames.EL,
      this.getSize(),
      this.noText(),
      this.isRounded(),
      this.hasMediaLeading() ? `${this.classNames.EL}--with-media` : '',
      ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: this.setClasses() }, this.hasMediaLeading()
      ? h("eds-image", { notFitted: true, class: [
          this.classNames.EL + this.classNames.MEDIA,
          this.classNames.EL + this.classNames.MEDIA + this.classNames.LEADING,
        ].join(' '), src: this.mediaLeading })
      : '', this.text
      ? h("div", { tabIndex: -1, class: `${this.classNames.EL}${this.classNames.TEXT}` }, this.text)
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSBadge.style = badgeCss;

const checkboxCss = "[name=checkbox] .checkbox{position:relative;display:flex;align-items:center;outline:none}[name=checkbox] .checkbox__shape{position:relative}[name=checkbox] .checkbox__shape__inner{position:relative;z-index:1;display:block;border-style:solid;cursor:pointer}[name=checkbox] .checkbox__shape__inner:before{position:absolute;left:50%;top:50%;font-family:\"Enovos-Icons\";text-align:center;content:\"\";transform:translate(-50%, -50%);transition:all 150ms 0s ease}[name=checkbox] .checkbox__shape:after{position:absolute;left:50%;top:50%;z-index:0;border-color:transparent;border-style:solid;border-radius:50%;background:transparent;content:\"\";transform:translate(-50%, -50%);transition:all 150ms 0s ease}[name=checkbox] .checkbox label{font-family:\"Montserrat\", sans-serif;transition:font-weight 150ms 0s ease;cursor:pointer}[name=checkbox] .checkbox input{position:absolute;width:0;height:0;opacity:0}[name=checkbox] .checkbox input:checked+.checkbox__shape .checkbox__shape__inner:before{content:\"\\e925\"}[name=checkbox] .checkbox.checkbox--disabled{cursor:not-allowed}[name=checkbox] .checkbox.checkbox--disabled .checkbox__shape__inner{pointer-events:none}[name=checkbox] .checkbox.checkbox--disabled label{pointer-events:none}[name=checkbox] .checkbox.checkbox--disabled input{pointer-events:none}[name=checkbox] .checkbox.checkbox--indeterminate .checkbox__shape__inner:before{content:\"\\e926\"}[name=checkbox] .checkbox.checkbox{margin:0 8px}[name=checkbox] .checkbox.checkbox input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox label{margin-left:8px;font-size:14px;font-weight:400;line-height:24px}[name=checkbox] .checkbox.checkbox .checkbox__shape__inner{width:20px;height:20px;border-width:2px;border-radius:4px}[name=checkbox] .checkbox.checkbox .checkbox__shape__inner:before{width:inherit;height:auto;font-size:20px}[name=checkbox] .checkbox.checkbox .checkbox__shape:after{width:20px;height:20px;border-width:8px}[name=checkbox] .checkbox.checkbox.checkbox--indeterminate label{font-weight:400}[name=checkbox] .checkbox.checkbox.checkbox--disabled input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox--md{margin:0 4px}[name=checkbox] .checkbox.checkbox--md input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox--md label{margin-left:8px;font-size:14px;font-weight:400;line-height:24px}[name=checkbox] .checkbox.checkbox--md .checkbox__shape__inner{width:20px;height:20px;border-width:2px;border-radius:4px}[name=checkbox] .checkbox.checkbox--md .checkbox__shape__inner:before{width:inherit;height:auto;font-size:20px}[name=checkbox] .checkbox.checkbox--md .checkbox__shape:after{width:20px;height:20px;border-width:4px}[name=checkbox] .checkbox.checkbox--md.checkbox--indeterminate label{font-weight:400}[name=checkbox] .checkbox.checkbox--md.checkbox--disabled input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox--sm{margin:0 4px}[name=checkbox] .checkbox.checkbox--sm input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox--sm label{margin-left:8px;font-size:14px;font-weight:400;line-height:24px}[name=checkbox] .checkbox.checkbox--sm .checkbox__shape__inner{width:16px;height:16px;border-width:2px;border-radius:4px}[name=checkbox] .checkbox.checkbox--sm .checkbox__shape__inner:before{width:inherit;height:auto;font-size:16px}[name=checkbox] .checkbox.checkbox--sm .checkbox__shape:after{width:16px;height:16px;border-width:4px}[name=checkbox] .checkbox.checkbox--sm.checkbox--indeterminate label{font-weight:400}[name=checkbox] .checkbox.checkbox--sm.checkbox--disabled input:checked+.checkbox__shape+label{font-weight:400}[name=checkbox] .checkbox.checkbox .checkbox__shape__inner{border-color:#5E5E5E;color:#5E5E5E;background-color:#FFFFFF}[name=checkbox] .checkbox.checkbox label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox.checkbox--indeterminate label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):hover .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):hover .checkbox__shape__inner{border-color:inherit;color:inherit}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):hover input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):hover input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#F76700;background-color:#F76700}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):focus .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):focus .checkbox__shape .checkbox__shape__inner{border-color:#F76700}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):focus input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):active .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):active .checkbox__shape .checkbox__shape__inner{border-color:#F76700}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled):active input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled) input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#F76700;background-color:#F76700}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#FFFFFF}[name=checkbox] .checkbox.checkbox:not(.checkbox--disabled) input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox.checkbox--disabled .checkbox__shape__inner{border-color:#5E5E5E}[name=checkbox] .checkbox.checkbox.checkbox--disabled .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox.checkbox--disabled label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox.checkbox--disabled input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#A7A7A7}[name=checkbox] .checkbox.checkbox.checkbox--disabled input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--primary .checkbox__shape__inner{border-color:#5E5E5E;color:#5E5E5E;background-color:#FFFFFF}[name=checkbox] .checkbox.checkbox--primary label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--primary.checkbox--indeterminate label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):hover .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):hover .checkbox__shape__inner{border-color:inherit;color:inherit}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):hover input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):hover input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#F76700;background-color:#F76700}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):focus .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):focus .checkbox__shape .checkbox__shape__inner{border-color:#F76700}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):focus input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):active .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):active .checkbox__shape .checkbox__shape__inner{border-color:#F76700}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled):active input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled) input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#F76700;background-color:#F76700}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#FFFFFF}[name=checkbox] .checkbox.checkbox--primary:not(.checkbox--disabled) input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--primary.checkbox--disabled .checkbox__shape__inner{border-color:#5E5E5E}[name=checkbox] .checkbox.checkbox--primary.checkbox--disabled .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--primary.checkbox--disabled label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--primary.checkbox--disabled input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--primary.checkbox--disabled input:checked+.checkbox__shape+label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--tertiary .checkbox__shape__inner{border-color:#5E5E5E;color:#5E5E5E;background-color:#FFFFFF}[name=checkbox] .checkbox.checkbox--tertiary label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--indeterminate label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):hover .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):hover .checkbox__shape__inner{border-color:inherit;color:inherit}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):hover input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):hover input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#004885;background-color:#004885}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):focus .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):focus .checkbox__shape .checkbox__shape__inner{border-color:#004885}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):focus input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):active .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):active .checkbox__shape .checkbox__shape__inner{border-color:#004885}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled):active input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled) input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#004885;background-color:#004885}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#FFFFFF}[name=checkbox] .checkbox.checkbox--tertiary:not(.checkbox--disabled) input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--disabled .checkbox__shape__inner{border-color:#5E5E5E}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--disabled .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--disabled label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--disabled input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--tertiary.checkbox--disabled input:checked+.checkbox__shape+label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quaternary .checkbox__shape__inner{border-color:#5E5E5E;color:#5E5E5E;background-color:#FFFFFF}[name=checkbox] .checkbox.checkbox--quaternary label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--indeterminate label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):hover .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):hover .checkbox__shape__inner{border-color:inherit;color:inherit}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):hover input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):hover input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#96C11F;background-color:#96C11F}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):focus .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):focus .checkbox__shape .checkbox__shape__inner{border-color:#96C11F}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):focus input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):active .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):active .checkbox__shape .checkbox__shape__inner{border-color:#96C11F}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled):active input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled) input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#96C11F;background-color:#96C11F}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#FFFFFF}[name=checkbox] .checkbox.checkbox--quaternary:not(.checkbox--disabled) input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--disabled .checkbox__shape__inner{border-color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--disabled .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--disabled label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--disabled input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quaternary.checkbox--disabled input:checked+.checkbox__shape+label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quinary .checkbox__shape__inner{border-color:#5E5E5E;color:#5E5E5E;background-color:#FFFFFF}[name=checkbox] .checkbox.checkbox--quinary label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quinary.checkbox--indeterminate label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):hover .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):hover .checkbox__shape__inner{border-color:inherit;color:inherit}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):hover input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):hover input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#EF7B0B;background-color:#EF7B0B}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):focus .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):focus .checkbox__shape .checkbox__shape__inner{border-color:#EF7B0B}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):focus input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):active .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):active .checkbox__shape .checkbox__shape__inner{border-color:#EF7B0B}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled):active input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled) input:checked+.checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner{border-color:#EF7B0B;background-color:#EF7B0B}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled) input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#FFFFFF}[name=checkbox] .checkbox.checkbox--quinary:not(.checkbox--disabled) input:checked+.checkbox__shape+label{color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quinary.checkbox--disabled .checkbox__shape__inner{border-color:#5E5E5E}[name=checkbox] .checkbox.checkbox--quinary.checkbox--disabled .checkbox__shape:after{border-color:transparent}[name=checkbox] .checkbox.checkbox--quinary.checkbox--disabled label{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quinary.checkbox--disabled input:checked+.checkbox__shape .checkbox__shape__inner:before{color:#A7A7A7}[name=checkbox] .checkbox.checkbox--quinary.checkbox--disabled input:checked+.checkbox__shape+label{color:#A7A7A7}";

const ENOVOSCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickCheckbox = createEvent(this, "clickCheckbox", 7);
    this.selected = false;
    this.disabled = false;
    this.indeterminate = false;
    this.classNames = {
      EL: 'checkbox',
      SHAPE: '__shape',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.inputEl = this.el.querySelector('input');
    this.el.setAttribute('name', this.classNames.EL);
    this.inputEl.checked = this.selected;
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    this._clickHandler = new TapEvent(this.el, e => {
      this.clickHandler(e);
    }, 0);
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
    this.inputEl.checked = this.selected;
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.selected = this.inputEl.checked;
    }
    if (this.indeterminate) {
      this.indeterminate = false;
      this.el.removeAttribute('indeterminate');
    }
    this.clickCheckbox.emit({
      inputName: this.inputName,
      value: this.value,
      selected: this.selected,
      indeterminate: this.indeterminate,
    });
    e.stopPropagation();
  }
  /**
   * @description Get tooltip size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  getStyles() {
    let classes = (this.styles) ? this.styles : '';
    if (this.disabled) {
      classes += ' disabled';
    }
    if (this.indeterminate) {
      classes += ' indeterminate';
    }
    return classes;
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getSize(),
        StylePropsHelper.getStyles(this.getStyles(), this.classNames.EL),
      ].join(' ') }, h("input", { type: "checkbox", name: this.inputName, value: this.value }), h("div", { class: `${this.classNames.EL}${this.classNames.SHAPE}` }, h("div", { class: `${this.classNames.EL}${this.classNames.SHAPE}__inner` })), this.label
      ? h("label", null, this.label)
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSCheckbox.style = checkboxCss;

const chipCss = "@charset \"UTF-8\";@-webkit-keyframes ripple-animation{from{opacity:1;transform:translate(-50%, -50%) scale(0)}to{opacity:0;transform:translate(-50%, -50%) scale(1)}}@keyframes ripple-animation{from{opacity:1;transform:translate(-50%, -50%) scale(0)}to{opacity:0;transform:translate(-50%, -50%) scale(1)}}[name=chip]{display:inline-block}[name=chip] .chip{position:relative;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;border-style:solid;overflow:hidden;font-family:\"Montserrat\", sans-serif;text-decoration:inherit;text-transform:uppercase;outline:none;transition:color 150ms ease-in-out, background-color 150ms ease-in-out, border-color 150ms ease-in-out, border-width 0 ease-in-out, opacity 150ms ease-in-out;cursor:pointer}[name=chip] .chip label{white-space:nowrap;transition:color 150ms ease-in-out;cursor:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[name=chip] .chip__icon{transition:color 150ms ease-in-out}[name=chip] .chip__avatar{transition:opacity 150ms ease-in-out}[name=chip] .chip__radio{position:relative;display:block;flex-shrink:0;border-style:solid;transition:all 150ms ease-in-out}[name=chip] .chip__radio:before{position:absolute;left:50%;top:50%;font-family:\"Enovos-Icons\";text-align:center;vertical-align:middle;content:\"\";transform:translate(-50%, -50%)}[name=chip] .chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only)::before{position:absolute;left:50%;top:50%;z-index:30;display:block;width:100%;height:100%;padding-bottom:100%;border-radius:50%;content:\"\";visibility:hidden;transform:translate(-50%, -50%) scale(0)}[name=chip] .chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus::before{visibility:visible}[name=chip] .chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus:not(:active)::before{-webkit-animation:ripple-animation 0.4s ease-out 0s;animation:ripple-animation 0.4s ease-out 0s}[name=chip] .chip.chip--motionless{cursor:default !important}[name=chip] .chip.chip--read-only{cursor:text !important}[name=chip] .chip.chip--disabled{cursor:not-allowed}[name=chip] .chip.chip--disabled .chip__avatar{opacity:0.5}[name=chip] .chip.chip:not(.chip--disabled){border-color:#5A8D00;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip.chip--read-only{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip.chip--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--tertiary:not(.chip--disabled){border-color:#5A8D00;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary:not(.chip--disabled) .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--tertiary:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--tertiary.chip--read-only{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--tertiary.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--tertiary.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--tertiary.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--tertiary.chip--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--tertiary.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--tertiary.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--tertiary.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--primary-400:not(.chip--disabled){border-color:#FFA14C;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--primary-400:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--primary-400:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--primary-400:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#C75300;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#FFB673;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#C75300;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--primary-400.chip--read-only{border-color:#C75300;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--primary-400.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--primary-400.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--primary-400.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--primary-400.chip--disabled{border-color:#FFDDBF;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--primary-400.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--primary-400.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--primary-400.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--quinary:not(.chip--disabled){border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled) .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled)::before{background-color:#C75300}@media (hover: hover){[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--read-only{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--read-only .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] .chip.chip--quinary.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--quinary.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--quinary.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--quinary.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled){border-color:#5A8D00;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--read-only{border-color:#5A8D00;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-orange-dark.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled){border-color:#1B8DC0;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#14668C;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#1D9AD1;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#14668C;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light.chip--read-only{border-color:#14668C;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-blue-light.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-blue-light.chip--disabled{border-color:#7FCFF5;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-blue-light.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-blue-light.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-blue-light.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled){border-color:#4FB482;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#39805C;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#55C28C;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#39805C;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light.chip--read-only{border-color:#39805C;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-green-light.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-green-light.chip--disabled{border-color:#85E6B5;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-green-light.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-green-light.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-green-light.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled){border-color:#F0BE21;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#AD8B19;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#FCCA23;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#AD8B19;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--read-only{border-color:#AD8B19;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--disabled{border-color:#FCE483;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-light.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled){border-color:#B77918;color:#5E5E5E;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__icon.chip--leading__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#855811;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#D18A1B;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#855811;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--read-only{border-color:#855811;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--disabled{border-color:#FABA55;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--brand-expressive-yellow-dark.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip--contextual-info:not(.chip--disabled){border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] .chip.chip--contextual-info:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled) .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled) .chip__radio:before{color:#5E5E5E}[name=chip] .chip.chip--contextual-info:not(.chip--disabled)::before{background-color:#5A8D00}@media (hover: hover){[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#2899A8;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#004885}}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#2899A8;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#2899A8;color:#004885;background-color:#5A8D00}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#004885}[name=chip] .chip.chip--contextual-info.chip--read-only{border-color:#2899A8;color:#004885;background-color:#BCD870}[name=chip] .chip.chip--contextual-info.chip--read-only .chip__icon.chip--leading__element{color:#004885}[name=chip] .chip.chip--contextual-info.chip--read-only .chip__icon.chip--trailing__element{color:#004885}[name=chip] .chip.chip--contextual-info.chip--read-only .chip__radio{border-color:#004885;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info.chip--read-only .chip__radio:before{color:#004885}[name=chip] .chip.chip--contextual-info.chip--disabled{border-color:#2899A8;color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info.chip--disabled .chip__icon.chip--leading__element{color:#5A8D00}[name=chip] .chip.chip--contextual-info.chip--disabled .chip__icon.chip--trailing__element{color:#5A8D00}[name=chip] .chip.chip--contextual-info.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#FFFFFF}[name=chip] .chip.chip--contextual-info.chip--disabled .chip__radio:before{color:#5A8D00}[name=chip] .chip.chip{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px;border-width:1px;border-radius:4px;font-size:12px;font-weight:400;line-height:16px}[name=chip] .chip.chip label{margin:0 8px}[name=chip] .chip.chip .chip__icon{width:24px;font-size:24px}[name=chip] .chip.chip .chip__radio{width:18px;height:18px;margin:0 3px;border-width:1px;border-radius:50%}[name=chip] .chip.chip .chip__radio:before{width:24px;height:24px;font-size:24px;line-height:24px}[name=chip] .chip.chip.chip--has-avatar{height:72px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip.chip--has-icon{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip.chip--has-icon .chip__icon{margin-right:0}[name=chip] .chip.chip.chip--has-badge{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip.chip--has-badge .chip__badge{margin-right:0}[name=chip] .chip.chip--lg{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px;border-width:1px;border-radius:4px;font-size:12px;font-weight:regular;line-height:16px}[name=chip] .chip.chip--lg label{margin:0 8px}[name=chip] .chip.chip--lg .chip__icon{width:24px;font-size:24px}[name=chip] .chip.chip--lg .chip__radio{width:18px;height:18px;margin:0 3px;border-width:1px;border-radius:50%}[name=chip] .chip.chip--lg .chip__radio:before{width:24px;height:24px;font-size:24px;line-height:24px}[name=chip] .chip.chip--lg.chip--has-avatar{height:72px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--lg.chip--has-icon{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--lg.chip--has-icon .chip__icon{margin-right:0}[name=chip] .chip.chip--lg.chip--has-badge{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--lg.chip--has-badge .chip__badge{margin-right:0}[name=chip] .chip.chip--md{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:12px;border-width:1px;border-radius:4px;font-size:12px;font-weight:400;line-height:16px}[name=chip] .chip.chip--md label{margin:0 8px}[name=chip] .chip.chip--md .chip__icon{width:24px;font-size:24px}[name=chip] .chip.chip--md .chip__radio{width:18px;height:18px;margin:0 3px;border-width:1px;border-radius:50%}[name=chip] .chip.chip--md .chip__radio:before{width:24px;height:24px;font-size:24px;line-height:24px}[name=chip] .chip.chip--md.chip--has-avatar{height:72px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--md.chip--has-icon{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--md.chip--has-icon .chip__icon{margin-right:0}[name=chip] .chip.chip--md.chip--has-badge{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--md.chip--has-badge .chip__badge{margin-right:0}[name=chip] .chip.chip--sm{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;border-width:1px;border-radius:4px;font-size:10px;font-weight:400;line-height:16px}[name=chip] .chip.chip--sm label{margin:0 8px}[name=chip] .chip.chip--sm .chip__icon{width:16px;font-size:16px}[name=chip] .chip.chip--sm .chip__radio{width:12px;height:12px;margin:0 2px;border-width:1px;border-radius:50%}[name=chip] .chip.chip--sm .chip__radio:before{width:16px;height:16px;font-size:16px;line-height:16px}[name=chip] .chip.chip--sm.chip--has-avatar{height:48px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--sm.chip--has-icon{height:32px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--sm.chip--has-icon .chip__icon{margin-right:0}[name=chip] .chip.chip--sm.chip--has-badge{height:32px;padding-top:0;padding-bottom:0}[name=chip] .chip.chip--sm.chip--has-badge .chip__badge{margin-right:0}[name=chip] input{position:absolute;width:0;height:0;opacity:0;-webkit-appearance:none}[name=chip] input:checked+.chip:not(.chip--unselectable) .chip__radio:before{content:\"\"}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled){border-color:#00856A;color:#FFFFFF;background-color:#00856A}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled) .chip__radio{border-color:#00856A;background-color:#00856A}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled)::before{background-color:#133B2C}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#4FB482;color:#FFFFFF;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#4FB482;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#E5F2F0;color:#FFFFFF;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#E5F2F0;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#E5F2F0;color:#FFFFFF;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#E5F2F0;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--read-only{border-color:#4FB482;color:#FFFFFF;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--read-only .chip__radio{border-color:#4FB482;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--disabled{border-color:#5A8D00;color:#FFFFFF;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled){border-color:#00856A;color:#FFFFFF;background-color:#00856A}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled) .chip__radio{border-color:#00856A;background-color:#00856A}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled)::before{background-color:#133B2C}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#4FB482;color:#FFFFFF;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#4FB482;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#E5F2F0;color:#FFFFFF;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#E5F2F0;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#E5F2F0;color:#FFFFFF;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#E5F2F0;background-color:#E5F2F0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--read-only{border-color:#4FB482;color:#FFFFFF;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--read-only .chip__radio{border-color:#4FB482;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--disabled{border-color:#5A8D00;color:#FFFFFF;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--tertiary.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled){border-color:#FFA14C;color:#FFFFFF;background-color:#FFA14C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled) .chip__radio{border-color:#FFA14C;background-color:#FFA14C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled)::before{background-color:#D52B1E}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#C75300;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#FFB673;color:#FFFFFF;background-color:#FFB673}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#FFB673;background-color:#FFB673}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#FFB673;color:#FFFFFF;background-color:#FFB673}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#FFB673;background-color:#FFB673}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--read-only{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--read-only .chip__radio{border-color:#C75300;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--disabled{border-color:#FFDDBF;color:#FFFFFF;background-color:#FFDDBF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--primary-400.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled){border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled) .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled)::before{background-color:#C75300}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--read-only{border-color:#C75300;color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--read-only .chip__radio{border-color:#FFFFFF;background-color:#C75300}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--disabled{border-color:#5A8D00;color:#FFFFFF;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--quinary.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled){border-color:#EF7D00;color:#FFFFFF;background-color:#EF7D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__radio{border-color:#EF7D00;background-color:#EF7D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled)::before{background-color:#804200}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#B35C00;color:#FFFFFF;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#B35C00;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#FC8823;color:#FFFFFF;background-color:#FC8823}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#FC8823;background-color:#FC8823}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#B35C00;color:#FFFFFF;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#B35C00;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--read-only{border-color:#B35C00;color:#FFFFFF;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--read-only .chip__radio{border-color:#B35C00;background-color:#B35C00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--disabled{border-color:#5A8D00;color:#FFFFFF;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--disabled .chip__radio{border-color:#5A8D00;background-color:#5A8D00}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-orange-dark.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled){border-color:#1B8DC0;color:#FFFFFF;background-color:#1B8DC0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled) .chip__radio{border-color:#1B8DC0;background-color:#1B8DC0}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled)::before{background-color:#105373}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#14668C;color:#FFFFFF;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#14668C;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#1D9AD1;color:#FFFFFF;background-color:#1D9AD1}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#1D9AD1;background-color:#1D9AD1}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#14668C;color:#FFFFFF;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#14668C;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--read-only{border-color:#14668C;color:#FFFFFF;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--read-only .chip__radio{border-color:#14668C;background-color:#14668C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--disabled{border-color:#7FCFF5;color:#FFFFFF;background-color:#7FCFF5}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--disabled .chip__radio{border-color:#7FCFF5;background-color:#7FCFF5}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-blue-light.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled){border-color:#4FB482;color:#FFFFFF;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled) .chip__radio{border-color:#4FB482;background-color:#4FB482}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled)::before{background-color:#2D6649}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#39805C;color:#FFFFFF;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#39805C;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#55C28C;color:#FFFFFF;background-color:#55C28C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#55C28C;background-color:#55C28C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#39805C;color:#FFFFFF;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#39805C;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--read-only{border-color:#39805C;color:#FFFFFF;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--read-only .chip__radio{border-color:#39805C;background-color:#39805C}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--disabled{border-color:#85E6B5;color:#FFFFFF;background-color:#85E6B5}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--disabled .chip__radio{border-color:#85E6B5;background-color:#85E6B5}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-green-light.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled){border-color:#F0BE21;color:#FFFFFF;background-color:#F0BE21}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__radio{border-color:#F0BE21;background-color:#F0BE21}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled)::before{background-color:#8F7214}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#AD8B19;color:#FFFFFF;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#AD8B19;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#FCCA23;color:#FFFFFF;background-color:#FCCA23}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#FCCA23;background-color:#FCCA23}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#AD8B19;color:#FFFFFF;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#AD8B19;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--read-only{border-color:#AD8B19;color:#FFFFFF;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--read-only .chip__radio{border-color:#AD8B19;background-color:#AD8B19}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--disabled{border-color:#FCE483;color:#FFFFFF;background-color:#FCE483}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--disabled .chip__radio{border-color:#FCE483;background-color:#FCE483}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-light.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled){border-color:#B77918;color:#FFFFFF;background-color:#B77918}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__radio{border-color:#B77918;background-color:#B77918}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled)::before{background-color:#6B470E}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#855811;color:#FFFFFF;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#855811;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#D18A1B;color:#FFFFFF;background-color:#D18A1B}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#D18A1B;background-color:#D18A1B}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#855811;color:#FFFFFF;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#855811;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--read-only{border-color:#855811;color:#FFFFFF;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--read-only .chip__radio{border-color:#855811;background-color:#855811}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--disabled{border-color:#FABA55;color:#FFFFFF;background-color:#FABA55}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--disabled .chip__radio{border-color:#FABA55;background-color:#FABA55}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--brand-expressive-yellow-dark.chip--disabled .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled){border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled) .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled) .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled) .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled) .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled)::before{background-color:#2899A8}@media (hover: hover){[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover{border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):hover .chip__radio:before{color:#FFFFFF}}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus{border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):focus .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active{border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info:not(.chip--disabled):not(.chip--motionless):not(.chip--read-only):active .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--read-only{border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--read-only .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--read-only .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--read-only .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--read-only .chip__radio:before{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--disabled{border-color:#2899A8;color:#FFFFFF;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--disabled .chip__icon.chip--leading__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--disabled .chip__icon.chip--trailing__element{color:#FFFFFF}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--disabled .chip__radio{border-color:#2899A8;background-color:#2899A8}[name=chip] input:checked+.chip:not(.chip--unselectable).chip--contextual-info.chip--disabled .chip__radio:before{color:#FFFFFF}";

const ENOVOSChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickChip = createEvent(this, "clickChip", 7);
    this.clickTrailing = createEvent(this, "clickTrailing", 7);
    this.selected = false;
    this.unselectable = false;
    this.disabled = false;
    this.motionless = false;
    this.readOnly = false;
    this.trailingEvent = false; // event on trailing element
    this.availableType = ['radio', 'avatar', 'icon', 'badge'];
    this.classNames = {
      EL: 'chip',
      ICON: '__icon',
      BADGE: '__badge',
      AVATAR: '__avatar',
      RADIO: '__radio',
      ELEMENT: '__element',
      LEADING: '--leading',
      TRAILING: '--trailing',
      UNSELECTABLE: '--unselectable',
      DISABLED: '--disabled',
      MOTIONLESS: '--motionless',
      HAS_AVATAR: '--has-avatar',
      HAS_ICON: '--has-icon',
      HAS_BADGE: '--has-badge',
      READ_ONLY: '--read-only',
    };
    this._clickHandler = undefined;
    this._clickTrailingHandler = undefined;
  }
  watchDataHandler(newValue, oldValue) {
    if (oldValue !== newValue) {
      this.inputEl = this.el.querySelector('input');
      if (this.inputEl) {
        this.inputEl.checked = this.selected;
      }
    }
  }
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    if (this.el.querySelector('input')) {
      this.inputEl = this.el.querySelector('input');
      this.inputEl.checked = this.selected;
      if (this.disabled) {
        this.inputEl.setAttribute('disabled', 'disabled');
      }
    }
    this.handleEvent();
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl !== null && this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
  }
  /**
   * @description Control if a component is disabled
   * @return {boolean}
   */
  isDisabled() {
    return (this.disabled) ? true : false;
  }
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isMotionless() {
    return (this.motionless) ? true : false;
  }
  /**
   * @description Control if a component is motionless
   * @return {boolean}
   */
  isReadOnly() {
    return (this.readOnly) ? true : false;
  }
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasLeading() {
    return (this.leadingType && this.availableType.includes(this.leadingType)) ? true : false;
  }
  /**
   * @description Control if a icon/avatar/radio leading parameter should be display
   * @return {boolean}
   */
  hasTrailing() {
    return (this.trailingType && this.availableType.includes(this.trailingType)) ? true : false;
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  getVariationClasses() {
    const classes = [];
    if (this.isDisabled()) {
      classes.push(`${this.classNames.EL}${this.classNames.DISABLED}`);
    }
    if (this.isReadOnly()) {
      classes.push(`${this.classNames.EL}${this.classNames.READ_ONLY}`);
    }
    if (this.isMotionless()) {
      classes.push(`${this.classNames.EL}${this.classNames.MOTIONLESS}`);
    }
    if (this.unselectable === true) {
      classes.push(`${this.classNames.EL}${this.classNames.UNSELECTABLE}`);
    }
    if (this.hasLeading() || this.hasTrailing()) {
      if (this.leadingType === 'avatar' || this.trailingType === 'avatar') {
        if (this.sizeAvatar === 'xxs') {
          classes.push(`${this.classNames.EL}${this.classNames.HAS_ICON}`);
        }
        else {
          classes.push(`${this.classNames.EL}${this.classNames.HAS_AVATAR}`);
        }
      }
      else if (this.leadingType === 'badge' || this.trailingType === 'badge') {
        classes.push(`${this.classNames.EL}${this.classNames.HAS_BADGE}`);
      }
      else {
        classes.push(`${this.classNames.EL}${this.classNames.HAS_ICON}`);
      }
    }
    return classes.join(' ');
  }
  /**
   * @description Attach event to component
   */
  handleEvent() {
    const shape = this.el.querySelector(`.${this.classNames.EL}`);
    if (!this.isMotionless()) {
      if (this._clickHandler && typeof this._clickHandler === 'object') {
        this._clickHandler.removeEvent();
      }
      this._clickHandler = new TapEvent(shape, e => {
        this.clickHandler(e);
      });
      if (this.trailingEvent) {
        const trailingElement = this.el.querySelector(`.${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`);
        if (trailingElement) {
          if (this._clickTrailingHandler && typeof this._clickTrailingHandler === 'object') {
            this._clickTrailingHandler.removeEvent();
          }
          this._clickTrailingHandler = new TapEvent(trailingElement, e => {
            e.preventDefault();
            this.clickTrailing.emit(this);
          });
        }
      }
    }
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.clickChip.emit({ 'uid': this.uid, 'inputName': this.inputName, 'selected': this.selected });
      this.selected = !this.selected;
    }
  }
  render() {
    return [
      h("input", { type: "radio", name: this.inputName, value: this.value }),
      h("button", { type: "button", class: [
          this.classNames.EL,
          this.getSize(),
          this.getVariationClasses(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' ') }, (() => {
        switch (this.leadingType) {
          case 'avatar':
            return h("eds-avatar", { src: this.leadingValue, size: this.size === 'sm' && this.sizeAvatar === undefined ? 'xs' : this.sizeAvatar, class: [
                `${this.classNames.EL}${this.classNames.AVATAR}`,
                `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
              ].join(' ') });
          case 'icon':
            return h("eds-icon", { class: [
                `${this.classNames.EL}${this.classNames.ICON}`,
                `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
              ].join(' '), icon: this.leadingValue });
          case 'radio':
            return h("div", { class: [
                `${this.classNames.EL}${this.classNames.RADIO}`,
                `${this.classNames.EL}${this.classNames.LEADING}${this.classNames.ELEMENT}`,
              ].join(' ') });
        }
      })(), h("label", null, this.label), (() => {
        switch (this.trailingType) {
          case 'avatar':
            return h("eds-avatar", { src: this.trailingValue, size: this.size === 'sm' && this.sizeAvatar === undefined ? 'xs' : this.sizeAvatar, class: [
                `${this.classNames.EL}${this.classNames.AVATAR}`,
                `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
              ].join(' ') });
          case 'icon':
            return h("eds-icon", { class: [
                `${this.classNames.EL}${this.classNames.ICON}`,
                `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
              ].join(' '), icon: this.trailingValue });
          case 'badge':
            return h("eds-badge", { class: [
                `${this.classNames.EL}${this.classNames.BADGE}`,
                `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
              ].join(' '), text: this.trailingValue, size: this.size === 'lg' ? 'md' : 'sm' });
          case 'radio':
            return h("div", { class: [
                `${this.classNames.EL}${this.classNames.RADIO}`,
                `${this.classNames.EL}${this.classNames.TRAILING}${this.classNames.ELEMENT}`,
              ].join(' ') });
        }
      })()),
    ];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selected": ["watchDataHandler"]
  }; }
};
ENOVOSChip.style = chipCss;

class DropdownItem {
  constructor(obj) {
    if (obj instanceof DropdownItem) {
      return obj;
    }
    this.uid = has$1(obj, 'id') ? get$1(obj, 'id') : v4_1();
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get$1(this, key);
  }
  hasProp(key) {
    return has$1(this, key);
  }
  setProp(key, value) {
    set$1(this, key, value);
  }
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$4.call(object, key);
}

var _baseHas = baseHas;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

var set_1 = set;

class SelectionControls {
  constructor(obj) {
    if (obj instanceof SelectionControls) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get_1(this, key);
  }
  hasProp(key) {
    return has_1(this, key);
  }
  setProp(key, value) {
    set_1(this, key, value);
  }
}
class SelectionControlsItem {
  constructor(obj) {
    if (obj instanceof SelectionControlsItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get_1(this, key);
  }
  hasProp(key) {
    return has_1(this, key);
  }
  setProp(key, value) {
    set_1(this, key, value);
  }
}

const dropdownCss = "[name=dropdown]{position:relative;display:block}[name=dropdown] .dropdown--left{text-align:left !important}[name=dropdown] .dropdown--center{text-align:center !important}[name=dropdown] .dropdown--right{text-align:right !important}[name=dropdown] .dropdown--capitalize{text-transform:capitalize !important}[name=dropdown] .dropdown--uppercase{text-transform:uppercase !important}[name=dropdown] .dropdown--lowercase{text-transform:lowercase !important}[name=dropdown] .dropdown--underline{text-decoration:underline !important}[name=dropdown] .dropdown--italic{font-style:italic !important}[name=dropdown] .dropdown--fit-content{height:inherit !important;line-height:unset !important}[name=dropdown] .dropdown--line-height-body-2{line-height:16px !important}[name=dropdown] .dropdown--weight-100{font-weight:100 !important}[name=dropdown] .dropdown--weight-200{font-weight:200 !important}[name=dropdown] .dropdown--weight-300{font-weight:300 !important}[name=dropdown] .dropdown--weight-400{font-weight:400 !important}[name=dropdown] .dropdown--weight-500{font-weight:500 !important}[name=dropdown] .dropdown--weight-600{font-weight:600 !important}[name=dropdown] .dropdown--weight-700{font-weight:700 !important}[name=dropdown] .dropdown--weight-800{font-weight:800 !important}[name=dropdown] .dropdown--weight-900{font-weight:900 !important}[name=dropdown] .dropdown--weight-thin{font-weight:100 !important}[name=dropdown] .dropdown--weight-extra-light{font-weight:200 !important}[name=dropdown] .dropdown--weight-light{font-weight:300 !important}[name=dropdown] .dropdown--weight-regular{font-weight:400 !important}[name=dropdown] .dropdown--weight-medium{font-weight:500 !important}[name=dropdown] .dropdown--weight-semi-bold{font-weight:600 !important}[name=dropdown] .dropdown--weight-bold{font-weight:700 !important}[name=dropdown] .dropdown--weight-extra-bold{font-weight:800 !important}[name=dropdown] .dropdown--style-normal{font-style:normal !important}[name=dropdown] .dropdown--style-italic{font-style:italic !important}[name=dropdown] .dropdown--style-oblique{font-style:oblique !important}[name=dropdown] .dropdown--font-family-1{font-family:\"Montserrat\", sans-serif !important}[name=dropdown] .dropdown--font-family-2{font-family:\"Montserrat\", sans-serif !important}[name=dropdown].dropdown__subitems{position:absolute;top:0;width:100%;opacity:0;transition:opacity 0.4s}[name=dropdown].dropdown__subitems .dropdown{margin-top:0}[name=dropdown].dropdown__subitems[sub-item-horizontal-placement=right]{left:calc(100% - 8px / 4)}[name=dropdown].dropdown__subitems[sub-item-horizontal-placement=left]{right:calc(100% - 8px / 4)}[name=dropdown].dropdown__subitems[sub-item-vertical-placement=top]{top:0}[name=dropdown].dropdown__subitems[sub-item-vertical-placement=bottom]{bottom:0}[name=dropdown].dropdown__subitems[direction=right]{left:calc(100% - 8px / 4) !important;right:inherit}[name=dropdown].dropdown__subitems[direction=left]{left:inherit;right:calc(100% - 8px / 4) !important}[name=dropdown].dropdown__subitems[vertical-direction=top]{top:0 !important;bottom:inherit}[name=dropdown].dropdown__subitems[vertical-direction=bottom]{top:inherit;bottom:0 !important}.dropdown{z-index:7000;font-family:\"Montserrat\", sans-serif;transition:all 0.4s}.dropdown:not(.dropdown--indented){margin-top:8px}.dropdown:not(.dropdown--visible):not(.dropdown--indented){pointer-events:none}.dropdown__elevation:not(.dropdown__elevation--visible):not(.dropdown__elevation--indented){pointer-events:none}.dropdown__elevation:not(.dropdown__elevation--visible):not(.dropdown__elevation--indented) .dropdown:not(.dropdown--visible):not(.dropdown--indented){overflow:hidden}.dropdown__main{height:100%}.dropdown__item{position:relative;display:flex;align-items:center;justify-content:flex-start;width:100%;overflow:hidden;text-decoration:none;transition:all 0.4s;cursor:pointer}.dropdown__item__container{display:flex;align-items:flex-start;flex-grow:1;justify-content:flex-start;pointer-events:none}.dropdown__item__text{text-align:left;text-decoration:none;pointer-events:none;transition:all 0.1333333333s}.dropdown__item__leading,.dropdown__item__trailing{pointer-events:none}.dropdown__item__leading__avatar,.dropdown__item__leading__icon,.dropdown__item__trailing__avatar,.dropdown__item__trailing__icon{display:block;transition:all 0.4s}.dropdown__item:before{position:absolute;left:0;top:0;height:100%;pointer-events:none;content:\"\";opacity:0;transition:opacity 0.4s ease-in-out}.dropdown__item--active:before{opacity:1}.dropdown__item--disabled{cursor:not-allowed}.dropdown__item--cascading.dropdown__item--hover{overflow:visible}.dropdown__item--cascading.dropdown__item--hover>.dropdown__subitems{opacity:1}.dropdown__header__slot{display:flex;align-items:center;border-bottom-style:solid}.dropdown__selector__slot{cursor:pointer}.dropdown__footer__slot{display:flex;align-items:center;border-top-style:solid}.dropdown__separator{border:none}.dropdown__separator--is-heading{position:relative;border-top-style:solid;overflow:visible;pointer-events:none}.dropdown__separator--is-heading:after{position:absolute;left:0;top:0;width:100%;pointer-events:none;content:\"\"}.dropdown--autocomplete{position:absolute;height:0;opacity:0;visibility:hidden}.dropdown--on-right{left:auto;right:0;white-space:nowrap}.dropdown--visible{height:auto;opacity:1;visibility:visible}.dropdown--on-top .dropdown:not(.dropdown--indented){margin-bottom:8px}.dropdown.elevation--default--0{margin-bottom:0 !important}.dropdown.elevation--default--0.elevation--reverse{margin-top:0 !important}.dropdown.elevation--default--1{margin-bottom:4px !important}.dropdown.elevation--default--1.elevation--reverse{margin-top:4px !important}.dropdown.elevation--default--2{margin-bottom:4px !important}.dropdown.elevation--default--2.elevation--reverse{margin-top:4px !important}.dropdown.elevation--default--3{margin-bottom:8px !important}.dropdown.elevation--default--3.elevation--reverse{margin-top:8px !important}.dropdown.elevation--default--4{margin-bottom:16px !important}.dropdown.elevation--default--4.elevation--reverse{margin-top:16px !important}.dropdown.elevation--default--5{margin-bottom:24px !important}.dropdown.elevation--default--5.elevation--reverse{margin-top:24px !important}.dropdown.elevation--dark--0{margin-bottom:0 !important}.dropdown.elevation--dark--0.elevation--reverse{margin-top:0 !important}.dropdown.elevation--dark--1{margin-bottom:4px !important}.dropdown.elevation--dark--1.elevation--reverse{margin-top:4px !important}.dropdown.elevation--dark--2{margin-bottom:4px !important}.dropdown.elevation--dark--2.elevation--reverse{margin-top:4px !important}.dropdown.elevation--dark--3{margin-bottom:8px !important}.dropdown.elevation--dark--3.elevation--reverse{margin-top:8px !important}.dropdown.elevation--dark--4{margin-bottom:16px !important}.dropdown.elevation--dark--4.elevation--reverse{margin-top:16px !important}.dropdown.elevation--dark--5{margin-bottom:24px !important}.dropdown.elevation--dark--5.elevation--reverse{margin-top:24px !important}[name=dropdown] .dropdown.dropdown{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#F76700;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active{color:#F76700;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#F76700}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:#F76700}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:#F76700}[name=dropdown] .dropdown.dropdown .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown .dropdown__item:disabled .dropdown__item__leading__icon{color:#8E8E8E}[name=dropdown] .dropdown.dropdown .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown .dropdown__item:disabled .dropdown__item__trailing__icon{color:#8E8E8E}[name=dropdown] .dropdown.dropdown .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:active{color:#F76700}[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown] .dropdown.dropdown .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown] .dropdown.dropdown .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown] .dropdown.dropdown .dropdown__separator{color:#A7A7A7;background-color:#A7A7A7}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading:after{color:#A7A7A7;background-color:#A7A7A7}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading .dropdown__item__text{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--tertiary{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#004885;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active{color:#004885;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#004885}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:active{color:#004885}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__header__slot{border-bottom-color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__separator{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--tertiary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown] .dropdown.dropdown--quaternary{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#96C11F;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active{color:#96C11F;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#96C11F}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:active{color:#96C11F}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__header__slot{border-bottom-color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__separator{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--quaternary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown] .dropdown.dropdown--quinary{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#EF7B0B;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active{color:#EF7B0B;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#EF7B0B}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:active{color:#EF7B0B}[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown] .dropdown.dropdown--quinary .dropdown__header__slot{border-bottom-color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown] .dropdown.dropdown--quinary .dropdown__separator{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown] .dropdown.dropdown--quinary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown] .dropdown.dropdown--secondary-500{background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:disabled{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item__leading__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item__trailing__icon{color:false}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon{color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:active{color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon--disabled{color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__footer__slot{border-top-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__separator{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__separator--is-heading:after{color:transparent;background-color:transparent}[name=dropdown] .dropdown.dropdown--secondary-500 .dropdown__separator--is-heading .dropdown__item__text{color:transparent}[name=dropdown] .dropdown.dropdown--senary{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--senary .dropdown__item{color:#004885;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#004885;background-color:#CDE294}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active{color:#5E5E5E;background-color:#FFE9DF}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#CAA08D}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--senary .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:disabled{color:#5A8D00;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--senary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:disabled .dropdown__item__leading__icon{color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--senary .dropdown__item:disabled .dropdown__item__trailing__icon{color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__item__leading__icon{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item__trailing__icon{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#004885}[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:active{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon--disabled{color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown] .dropdown.dropdown--senary .dropdown__footer__slot{border-top-color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__separator{color:#5A8D00;background-color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__separator--is-heading:after{color:#5A8D00;background-color:#5A8D00}[name=dropdown] .dropdown.dropdown--senary .dropdown__separator--is-heading .dropdown__item__text{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark{background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item{color:#004885;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#004885;background-color:#CDE294}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):active{color:#5E5E5E;background-color:#CDE294}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#EF7D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item--disabled,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:disabled{color:#5A8D00;background-color:#FFFFFF}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:disabled .dropdown__item__leading__icon{color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item:disabled .dropdown__item__trailing__icon{color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item__leading__icon{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item__trailing__icon{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#004885}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon--active,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon:active{color:#5E5E5E}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__item.dropdown__item__without-icon--disabled{color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__footer__slot{border-top-color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__separator{color:#5A8D00;background-color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__separator--is-heading:after{color:#5A8D00;background-color:#5A8D00}[name=dropdown] .dropdown.dropdown--brand-expressive-orange-dark .dropdown__separator--is-heading .dropdown__item__text{color:#004885}[name=dropdown] .dropdown.dropdown{width:auto;min-width:100%;border-radius:8px}[name=dropdown] .dropdown.dropdown .dropdown__item{min-height:48px;padding:12px 16px}[name=dropdown] .dropdown.dropdown .dropdown__item:first-child{border-radius:8px 8px 0 0}[name=dropdown] .dropdown.dropdown .dropdown__item:last-child{border-radius:0 0 8px 8px}[name=dropdown] .dropdown.dropdown .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading:first-child:not(:last-child),[name=dropdown] .dropdown.dropdown .dropdown__item__trailing:first-child:not(:last-child){margin-right:8px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading:last-child:not(:first-child),[name=dropdown] .dropdown.dropdown .dropdown__item__trailing:last-child:not(:first-child){margin-left:8px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading__avatar,[name=dropdown] .dropdown.dropdown .dropdown__item__trailing__avatar{width:32px;height:32px;margin-top:-4px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading__avatar:first-child,[name=dropdown] .dropdown.dropdown .dropdown__item__trailing__avatar:first-child{margin-right:8px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading__avatar:last-child,[name=dropdown] .dropdown.dropdown .dropdown__item__trailing__avatar:last-child{margin-left:8px}[name=dropdown] .dropdown.dropdown .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown .dropdown__item__trailing__icon{width:24px;height:24px;font-size:24px}[name=dropdown] .dropdown.dropdown .dropdown__item:before{width:0px}[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__text,[name=dropdown] .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__text{font-weight:false}[name=dropdown] .dropdown.dropdown.dropdown--indented{border-radius:0}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item{padding-left:12px 16px32px;padding-top:12px 16px;padding-bottom:12px 16px}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar,[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar{margin-top:-4px}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar:first-child,[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar:first-child{margin-left:0}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar:last-child,[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar:last-child{margin-right:0}[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__icon{margin-top:0px}[name=dropdown] .dropdown.dropdown .dropdown__container{border-radius:8px}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-0{max-height:0px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-1{max-height:48px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-2{max-height:96px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-3{max-height:144px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-4{max-height:192px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-5{max-height:240px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-6{max-height:288px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-7{max-height:336px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-8{max-height:384px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-9{max-height:432px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-10{max-height:480px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-11{max-height:528px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-12{max-height:576px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-13{max-height:624px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-14{max-height:672px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-15{max-height:720px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-16{max-height:768px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-17{max-height:816px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-18{max-height:864px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-19{max-height:912px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-20{max-height:960px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-21{max-height:1008px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-22{max-height:1056px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-23{max-height:1104px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-24{max-height:1152px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-25{max-height:1200px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-26{max-height:1248px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-27{max-height:1296px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-28{max-height:1344px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-29{max-height:1392px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-30{max-height:1440px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-31{max-height:1488px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-32{max-height:1536px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-33{max-height:1584px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-34{max-height:1632px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-35{max-height:1680px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-36{max-height:1728px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-37{max-height:1776px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-38{max-height:1824px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-39{max-height:1872px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-40{max-height:1920px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-41{max-height:1968px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-42{max-height:2016px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-43{max-height:2064px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-44{max-height:2112px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-45{max-height:2160px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-46{max-height:2208px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-47{max-height:2256px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-48{max-height:2304px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-49{max-height:2352px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-50{max-height:2400px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-51{max-height:2448px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-52{max-height:2496px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-53{max-height:2544px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-54{max-height:2592px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-55{max-height:2640px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-56{max-height:2688px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-57{max-height:2736px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-58{max-height:2784px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-59{max-height:2832px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-60{max-height:2880px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-61{max-height:2928px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-62{max-height:2976px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-63{max-height:3024px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-64{max-height:3072px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-65{max-height:3120px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-66{max-height:3168px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-67{max-height:3216px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-68{max-height:3264px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-69{max-height:3312px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-70{max-height:3360px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-71{max-height:3408px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-72{max-height:3456px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-73{max-height:3504px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-74{max-height:3552px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-75{max-height:3600px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-76{max-height:3648px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-77{max-height:3696px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-78{max-height:3744px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-79{max-height:3792px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-80{max-height:3840px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-81{max-height:3888px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-82{max-height:3936px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-83{max-height:3984px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-84{max-height:4032px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-85{max-height:4080px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-86{max-height:4128px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-87{max-height:4176px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-88{max-height:4224px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-89{max-height:4272px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-90{max-height:4320px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-91{max-height:4368px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-92{max-height:4416px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-93{max-height:4464px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-94{max-height:4512px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-95{max-height:4560px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-96{max-height:4608px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-97{max-height:4656px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-98{max-height:4704px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-99{max-height:4752px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__container.dropdown--limited-100{max-height:4800px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown .dropdown__header__slot{min-height:0;padding-left:0;padding-right:0;border-bottom-width:1px}[name=dropdown] .dropdown.dropdown .dropdown__footer__slot{min-height:56px;padding-left:16px;padding-right:16px;border-top-width:1px}[name=dropdown] .dropdown.dropdown .dropdown__separator{width:100%;height:1px;margin-top:8px;margin-bottom:8px}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading{min-height:40px;padding:8px 16px}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading:not(:first-child){margin-top:6px}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading:not(:first-child):after{height:1px;margin-top:-4px}[name=dropdown] .dropdown.dropdown .dropdown__separator--is-heading .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown] .dropdown.dropdown.dropdown--has-parent .dropdown__item{border-radius:0}[name=dropdown] .dropdown.dropdown--sm{width:auto;min-width:100%;border-radius:2px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item{min-height:48px;padding:16px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item:first-child{border-radius:2px 2px 0 0}[name=dropdown] .dropdown.dropdown--sm .dropdown__item:last-child{border-radius:0 0 2px 2px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__text{font-size:12px;font-weight:600;line-height:16px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading:first-child:not(:last-child),[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing:first-child:not(:last-child){margin-right:8px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading:last-child:not(:first-child),[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing:last-child:not(:first-child){margin-left:8px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading__avatar,[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing__avatar{width:32px;height:32px;margin-top:-4px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading__avatar:first-child,[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing__avatar:first-child{margin-right:8px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading__avatar:last-child,[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing__avatar:last-child{margin-left:8px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--sm .dropdown__item__trailing__icon{width:24px;height:24px;font-size:24px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item:before{width:4px}[name=dropdown] .dropdown.dropdown--sm .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__text,[name=dropdown] .dropdown.dropdown--sm .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__text{font-weight:400}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented{border-radius:0}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item{padding-left:48px;padding-top:16px;padding-bottom:16px}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__text{font-size:12px;font-weight:600;line-height:16px}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar,[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar{margin-top:-4px}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar:first-child,[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar:first-child{margin-left:0}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar:last-child,[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar:last-child{margin-right:0}[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__icon,[name=dropdown] .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__icon{margin-top:0px}[name=dropdown] .dropdown.dropdown--sm .dropdown__container{border-radius:2px}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-0{max-height:0px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-1{max-height:48px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-2{max-height:96px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-3{max-height:144px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-4{max-height:192px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-5{max-height:240px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-6{max-height:288px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-7{max-height:336px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-8{max-height:384px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-9{max-height:432px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-10{max-height:480px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-11{max-height:528px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-12{max-height:576px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-13{max-height:624px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-14{max-height:672px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-15{max-height:720px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-16{max-height:768px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-17{max-height:816px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-18{max-height:864px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-19{max-height:912px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-20{max-height:960px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-21{max-height:1008px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-22{max-height:1056px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-23{max-height:1104px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-24{max-height:1152px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-25{max-height:1200px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-26{max-height:1248px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-27{max-height:1296px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-28{max-height:1344px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-29{max-height:1392px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-30{max-height:1440px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-31{max-height:1488px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-32{max-height:1536px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-33{max-height:1584px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-34{max-height:1632px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-35{max-height:1680px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-36{max-height:1728px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-37{max-height:1776px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-38{max-height:1824px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-39{max-height:1872px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-40{max-height:1920px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-41{max-height:1968px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-42{max-height:2016px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-43{max-height:2064px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-44{max-height:2112px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-45{max-height:2160px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-46{max-height:2208px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-47{max-height:2256px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-48{max-height:2304px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-49{max-height:2352px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-50{max-height:2400px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-51{max-height:2448px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-52{max-height:2496px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-53{max-height:2544px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-54{max-height:2592px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-55{max-height:2640px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-56{max-height:2688px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-57{max-height:2736px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-58{max-height:2784px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-59{max-height:2832px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-60{max-height:2880px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-61{max-height:2928px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-62{max-height:2976px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-63{max-height:3024px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-64{max-height:3072px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-65{max-height:3120px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-66{max-height:3168px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-67{max-height:3216px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-68{max-height:3264px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-69{max-height:3312px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-70{max-height:3360px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-71{max-height:3408px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-72{max-height:3456px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-73{max-height:3504px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-74{max-height:3552px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-75{max-height:3600px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-76{max-height:3648px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-77{max-height:3696px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-78{max-height:3744px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-79{max-height:3792px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-80{max-height:3840px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-81{max-height:3888px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-82{max-height:3936px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-83{max-height:3984px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-84{max-height:4032px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-85{max-height:4080px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-86{max-height:4128px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-87{max-height:4176px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-88{max-height:4224px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-89{max-height:4272px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-90{max-height:4320px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-91{max-height:4368px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-92{max-height:4416px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-93{max-height:4464px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-94{max-height:4512px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-95{max-height:4560px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-96{max-height:4608px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-97{max-height:4656px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-98{max-height:4704px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-99{max-height:4752px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__container.dropdown--limited-100{max-height:4800px !important;overflow-y:scroll}[name=dropdown] .dropdown.dropdown--sm .dropdown__header__slot{min-height:0;padding-left:0;padding-right:0;border-bottom-width:1px}[name=dropdown] .dropdown.dropdown--sm .dropdown__footer__slot{min-height:56px;padding-left:16px;padding-right:16px;border-top-width:1px}[name=dropdown] .dropdown.dropdown--sm .dropdown__separator{width:100%;height:1px;margin-top:8px;margin-bottom:8px}[name=dropdown] .dropdown.dropdown--sm .dropdown__separator--is-heading{min-height:32px;padding:8px 16px}[name=dropdown] .dropdown.dropdown--sm .dropdown__separator--is-heading:not(:first-child){margin-top:6px}[name=dropdown] .dropdown.dropdown--sm .dropdown__separator--is-heading:not(:first-child):after{height:1px;margin-top:-4px}[name=dropdown] .dropdown.dropdown--sm .dropdown__separator--is-heading .dropdown__item__text{font-size:12px;font-weight:400;line-height:16px}[name=dropdown] .dropdown.dropdown--sm.dropdown--has-parent .dropdown__item{border-radius:0}[name=dropdown].theme--dark .dropdown.dropdown{background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#F76700;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active{color:#F76700;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#F76700}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:#F76700}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:#F76700}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:disabled .dropdown__item__leading__icon{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:disabled .dropdown__item__trailing__icon{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:active{color:#F76700}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator{color:#A7A7A7;background-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading:after{color:#A7A7A7;background-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading .dropdown__item__text{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--tertiary{background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#004885;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active{color:#004885;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:active{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__header__slot{border-bottom-color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__separator{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--tertiary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary{background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#96C11F;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active{color:#96C11F;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#96C11F}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:active{color:#96C11F}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__header__slot{border-bottom-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__separator{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quaternary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary{background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item{color:#5E5E5E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#EF7B0B;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active{color:#EF7B0B;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#EF7B0B}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:disabled{color:#8E8E8E;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:active{color:#EF7B0B}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__item.dropdown__item__without-icon--disabled{color:#8E8E8E}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__header__slot{border-bottom-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__footer__slot{border-top-color:#A7A7A7}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__separator{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__separator--is-heading:after{color:false;background-color:false}[name=dropdown].theme--dark .dropdown.dropdown--quinary .dropdown__separator--is-heading .dropdown__item__text{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500{background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:disabled{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:disabled .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item:disabled .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item__leading__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item__trailing__icon{color:false}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:active{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__item.dropdown__item__without-icon--disabled{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__footer__slot{border-top-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__separator{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__separator--is-heading:after{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--secondary-500 .dropdown__separator--is-heading .dropdown__item__text{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--senary{background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item{color:#004885;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:#004885;background-color:#CDE294}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active{color:#5E5E5E;background-color:#FFE9DF}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:#CAA08D}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:disabled{color:#5A8D00;background-color:#FFFFFF}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:disabled .dropdown__item__leading__icon{color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item:disabled .dropdown__item__trailing__icon{color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item__leading__icon{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item__trailing__icon{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:active{color:#5E5E5E}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__item.dropdown__item__without-icon--disabled{color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__footer__slot{border-top-color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__separator{color:#5A8D00;background-color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__separator--is-heading:after{color:#5A8D00;background-color:#5A8D00}[name=dropdown].theme--dark .dropdown.dropdown--senary .dropdown__separator--is-heading .dropdown__item__text{color:#004885}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark{background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover:before{opacity:1;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__leading__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):not(.dropdown__item--active):hover .dropdown__item__trailing__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):active{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active:before,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):active:before{background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__leading__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__trailing__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item--disabled,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:disabled{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item--disabled .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:disabled .dropdown__item__leading__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item--disabled .dropdown__item__trailing__icon,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item:disabled .dropdown__item__trailing__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item__leading__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item__trailing__icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon:not(.dropdown__item--active):hover{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon--active,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon:active{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon:disabled,[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__item.dropdown__item__without-icon--disabled{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__header__slot{border-bottom-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__footer__slot{border-top-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__separator{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__separator--is-heading:after{color:transparent;background-color:transparent}[name=dropdown].theme--dark .dropdown.dropdown--brand-expressive-orange-theme-dark .dropdown__separator--is-heading .dropdown__item__text{color:transparent}[name=dropdown].theme--dark .dropdown.dropdown{width:auto;min-width:100%;border-radius:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item{min-height:48px;padding:12px 16px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:first-child{border-radius:8px 8px 0 0}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:last-child{border-radius:0 0 8px 8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading:first-child:not(:last-child),[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing:first-child:not(:last-child){margin-right:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading:last-child:not(:first-child),[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing:last-child:not(:first-child){margin-left:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading__avatar,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing__avatar{width:32px;height:32px;margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading__avatar:first-child,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing__avatar:first-child{margin-right:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading__avatar:last-child,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing__avatar:last-child{margin-left:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item__trailing__icon{width:24px;height:24px;font-size:24px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:before{width:0px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__text,[name=dropdown].theme--dark .dropdown.dropdown .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__text{font-weight:false}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented{border-radius:0}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item{padding-left:12px 16px32px;padding-top:12px 16px;padding-bottom:12px 16px}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar,[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar{margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar:first-child,[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar:first-child{margin-left:0}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__leading__avatar:last-child,[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__avatar:last-child{margin-right:0}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown.dropdown--indented .dropdown__item__trailing__icon{margin-top:0px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container{border-radius:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-0{max-height:0px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-1{max-height:48px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-2{max-height:96px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-3{max-height:144px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-4{max-height:192px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-5{max-height:240px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-6{max-height:288px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-7{max-height:336px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-8{max-height:384px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-9{max-height:432px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-10{max-height:480px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-11{max-height:528px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-12{max-height:576px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-13{max-height:624px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-14{max-height:672px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-15{max-height:720px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-16{max-height:768px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-17{max-height:816px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-18{max-height:864px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-19{max-height:912px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-20{max-height:960px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-21{max-height:1008px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-22{max-height:1056px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-23{max-height:1104px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-24{max-height:1152px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-25{max-height:1200px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-26{max-height:1248px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-27{max-height:1296px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-28{max-height:1344px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-29{max-height:1392px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-30{max-height:1440px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-31{max-height:1488px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-32{max-height:1536px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-33{max-height:1584px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-34{max-height:1632px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-35{max-height:1680px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-36{max-height:1728px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-37{max-height:1776px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-38{max-height:1824px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-39{max-height:1872px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-40{max-height:1920px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-41{max-height:1968px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-42{max-height:2016px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-43{max-height:2064px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-44{max-height:2112px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-45{max-height:2160px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-46{max-height:2208px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-47{max-height:2256px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-48{max-height:2304px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-49{max-height:2352px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-50{max-height:2400px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-51{max-height:2448px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-52{max-height:2496px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-53{max-height:2544px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-54{max-height:2592px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-55{max-height:2640px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-56{max-height:2688px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-57{max-height:2736px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-58{max-height:2784px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-59{max-height:2832px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-60{max-height:2880px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-61{max-height:2928px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-62{max-height:2976px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-63{max-height:3024px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-64{max-height:3072px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-65{max-height:3120px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-66{max-height:3168px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-67{max-height:3216px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-68{max-height:3264px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-69{max-height:3312px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-70{max-height:3360px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-71{max-height:3408px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-72{max-height:3456px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-73{max-height:3504px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-74{max-height:3552px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-75{max-height:3600px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-76{max-height:3648px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-77{max-height:3696px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-78{max-height:3744px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-79{max-height:3792px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-80{max-height:3840px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-81{max-height:3888px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-82{max-height:3936px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-83{max-height:3984px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-84{max-height:4032px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-85{max-height:4080px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-86{max-height:4128px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-87{max-height:4176px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-88{max-height:4224px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-89{max-height:4272px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-90{max-height:4320px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-91{max-height:4368px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-92{max-height:4416px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-93{max-height:4464px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-94{max-height:4512px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-95{max-height:4560px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-96{max-height:4608px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-97{max-height:4656px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-98{max-height:4704px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-99{max-height:4752px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__container.dropdown--limited-100{max-height:4800px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__header__slot{min-height:0;padding-left:0;padding-right:0;border-bottom-width:1px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__footer__slot{min-height:56px;padding-left:16px;padding-right:16px;border-top-width:1px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator{width:100%;height:1px;margin-top:8px;margin-bottom:8px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading{min-height:40px;padding:8px 16px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading:not(:first-child){margin-top:6px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading:not(:first-child):after{height:1px;margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown .dropdown__separator--is-heading .dropdown__item__text{font-size:14px;font-weight:400;line-height:24px}[name=dropdown].theme--dark .dropdown.dropdown.dropdown--has-parent .dropdown__item{border-radius:0}[name=dropdown].theme--dark .dropdown.dropdown--sm{width:auto;min-width:100%;border-radius:2px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item{min-height:48px;padding:16px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item:first-child{border-radius:2px 2px 0 0}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item:last-child{border-radius:0 0 2px 2px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__text{font-size:12px;font-weight:600;line-height:16px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading:first-child:not(:last-child),[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing:first-child:not(:last-child){margin-right:8px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading:last-child:not(:first-child),[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing:last-child:not(:first-child){margin-left:8px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading__avatar,[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing__avatar{width:32px;height:32px;margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading__avatar:first-child,[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing__avatar:first-child{margin-right:8px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading__avatar:last-child,[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing__avatar:last-child{margin-left:8px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item__trailing__icon{width:24px;height:24px;font-size:24px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item:before{width:4px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item:not(.dropdown__item--disabled).dropdown__item--active .dropdown__item__text,[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__item:not(.dropdown__item--disabled):active .dropdown__item__text{font-weight:400}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented{border-radius:0}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item{padding-left:48px;padding-top:16px;padding-bottom:16px}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__text{font-size:12px;font-weight:600;line-height:16px}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar,[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar{margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar:first-child,[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar:first-child{margin-left:0}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__avatar:last-child,[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__avatar:last-child{margin-right:0}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__leading__icon,[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--indented .dropdown__item__trailing__icon{margin-top:0px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container{border-radius:2px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-0{max-height:0px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-1{max-height:48px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-2{max-height:96px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-3{max-height:144px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-4{max-height:192px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-5{max-height:240px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-6{max-height:288px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-7{max-height:336px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-8{max-height:384px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-9{max-height:432px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-10{max-height:480px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-11{max-height:528px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-12{max-height:576px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-13{max-height:624px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-14{max-height:672px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-15{max-height:720px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-16{max-height:768px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-17{max-height:816px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-18{max-height:864px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-19{max-height:912px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-20{max-height:960px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-21{max-height:1008px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-22{max-height:1056px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-23{max-height:1104px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-24{max-height:1152px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-25{max-height:1200px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-26{max-height:1248px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-27{max-height:1296px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-28{max-height:1344px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-29{max-height:1392px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-30{max-height:1440px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-31{max-height:1488px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-32{max-height:1536px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-33{max-height:1584px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-34{max-height:1632px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-35{max-height:1680px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-36{max-height:1728px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-37{max-height:1776px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-38{max-height:1824px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-39{max-height:1872px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-40{max-height:1920px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-41{max-height:1968px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-42{max-height:2016px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-43{max-height:2064px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-44{max-height:2112px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-45{max-height:2160px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-46{max-height:2208px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-47{max-height:2256px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-48{max-height:2304px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-49{max-height:2352px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-50{max-height:2400px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-51{max-height:2448px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-52{max-height:2496px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-53{max-height:2544px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-54{max-height:2592px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-55{max-height:2640px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-56{max-height:2688px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-57{max-height:2736px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-58{max-height:2784px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-59{max-height:2832px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-60{max-height:2880px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-61{max-height:2928px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-62{max-height:2976px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-63{max-height:3024px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-64{max-height:3072px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-65{max-height:3120px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-66{max-height:3168px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-67{max-height:3216px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-68{max-height:3264px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-69{max-height:3312px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-70{max-height:3360px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-71{max-height:3408px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-72{max-height:3456px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-73{max-height:3504px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-74{max-height:3552px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-75{max-height:3600px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-76{max-height:3648px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-77{max-height:3696px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-78{max-height:3744px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-79{max-height:3792px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-80{max-height:3840px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-81{max-height:3888px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-82{max-height:3936px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-83{max-height:3984px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-84{max-height:4032px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-85{max-height:4080px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-86{max-height:4128px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-87{max-height:4176px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-88{max-height:4224px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-89{max-height:4272px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-90{max-height:4320px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-91{max-height:4368px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-92{max-height:4416px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-93{max-height:4464px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-94{max-height:4512px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-95{max-height:4560px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-96{max-height:4608px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-97{max-height:4656px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-98{max-height:4704px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-99{max-height:4752px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__container.dropdown--limited-100{max-height:4800px !important;overflow-y:scroll}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__header__slot{min-height:0;padding-left:0;padding-right:0;border-bottom-width:1px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__footer__slot{min-height:56px;padding-left:16px;padding-right:16px;border-top-width:1px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__separator{width:100%;height:1px;margin-top:8px;margin-bottom:8px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__separator--is-heading{min-height:32px;padding:8px 16px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__separator--is-heading:not(:first-child){margin-top:6px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__separator--is-heading:not(:first-child):after{height:1px;margin-top:-4px}[name=dropdown].theme--dark .dropdown.dropdown--sm .dropdown__separator--is-heading .dropdown__item__text{font-size:12px;font-weight:400;line-height:16px}[name=dropdown].theme--dark .dropdown.dropdown--sm.dropdown--has-parent .dropdown__item{border-radius:0}";

const ENOVOSDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickDropdownItem = createEvent(this, "clickDropdownItem", 7);
    this.activeSelectorItem = createEvent(this, "activeSelectorItem", 7);
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
    onChange('theme', () => {
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
    return (h("div", { class: `${this.classNames.EL}${this.classNames.MAIN}` }, h("slot", { name: "selector" }), h("eds-elevation", { class: `${this.classNames.EL}${this.classNames.ELEVATION}`, styles: this.elevationStyles, level: this.elevationLevel, reverse: this.elevationReverse }, h("div", { class: this.setMainElementClasses() }, h("slot", { name: "header" }), (this.dropdownItems.length > 0) ?
      h("div", { class: this.setMainContainerClasses() }, this.dropdownItems.map(item => [
        h("div", { id: `dropdown_${item.getProp('uid')}`, onClick: () => this.clickDropdownItemHandler(item), onMouseOver: e => item.hasProp('subitems') ? this.onMouseEventHandle(e, item.getProp('uid'), true) : false, onMouseLeave: e => item.hasProp('subitems') ? this.onMouseEventHandle(e, item.getProp('uid'), false) : false, class: [
            `${this.classNames.EL}${this.classNames.ITEM}`,
            item.hasProp('children') ? `${this.classNames.EL}${this.classNames.EXPANDABLE}` : '',
            item.hasProp('subitems') ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CASCADING}` : '',
            item.getProp('disabled') === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.DISABLED}` : '',
            item.getProp('isHeading') === true ? `${this.classNames.EL}${this.classNames.SEPARATOR}${this.classNames.IS_HEADING}` : '',
            (!item.hasProp('subitems') || !this.hasSubItems) && item.getProp('isHeading') !== true ? this.isActiveItemClass(item) : '',
          ].join(' ') }, h("div", { class: this.setItemContainerClasses(item) }, this.displayLeadingTrailingElement(item, 'leading'), ((item.hasProp('label') && item.getProp('label').trim() !== ''))
          ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}` }, item.getProp('label'))
          : ''), this.displayLeadingTrailingElement(item, 'trailing'), (item.hasProp('subitems')) ?
          h("eds-dropdown", { hasSubItems: true, elevationStyles: this.elevationStyles, elevationLevel: this.elevationLevel, size: this.size, class: `${this.classNames.EL}${this.classNames.SUBITEMS}`, data: item.getProp('subitems') })
          : ''),
        (item.hasProp('children')) ?
          h("eds-dropdown", { "elevation-level": "0", size: this.size, parent: item, indented: !item.hasProp('isHeading') || item.getProp('isHeading') !== true ? true : false, activeItem: this.activeItem, data: item.getProp('children') })
          : '',
        (item.getProp('separator') === true) ?
          h("hr", { class: `${this.classNames.EL}${this.classNames.SEPARATOR}` })
          : '',
      ]))
      : '', (this.controlItems) ?
      h("div", { class: this.setMainContainerClasses() }, h("eds-selection-controls", { id: this.controlItems.getProp('id'), type: this.controlItems.getProp('type'), data: this.controlItemsData }))
      : '', h("slot", { name: "footer" })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["watchHandler"],
    "selectionControls": ["watchSelectionControlsHandler"]
  }; }
};
ENOVOSDropdown.style = dropdownCss;

const infoCss = "[name=info]{display:block;height:100%}[name=info] .info--primary{color:#F76700 !important}[name=info] .info--secondary{color:#5E5E5E !important}[name=info] .info--tertiary{color:#004885 !important}[name=info] .info--quaternary{color:#96C11F !important}[name=info] .info--quinary{color:#EF7B0B !important}[name=info] .info--senary{color:#CAA08D !important}[name=info] .info--septenary{color:#6C887A !important}[name=info] .info--grey{color:#757575 !important}[name=info] .info--primary-900{color:#F76700 !important}[name=info] .info--primary-800{color:#F76700 !important}[name=info] .info--primary-700{color:#D52B1E !important}[name=info] .info--primary-600{color:#C75300 !important}[name=info] .info--primary-500{color:#F76700 !important}[name=info] .info--primary-400{color:#FFA14C !important}[name=info] .info--primary-300{color:#FFB673 !important}[name=info] .info--primary-200{color:#FFDDBF !important}[name=info] .info--primary-100{color:#FFF1E5 !important}[name=info] .info--primary-50{color:#FFF1E5 !important}[name=info] .info--secondary-900{color:#5E5E5E !important}[name=info] .info--secondary-800{color:#5E5E5E !important}[name=info] .info--secondary-700{color:#5E5E5E !important}[name=info] .info--secondary-600{color:#5E5E5E !important}[name=info] .info--secondary-500{color:#5E5E5E !important}[name=info] .info--secondary-400{color:#8E8E8E !important}[name=info] .info--secondary-300{color:#A7A7A7 !important}[name=info] .info--secondary-200{color:#D7D7D7 !important}[name=info] .info--secondary-100{color:#EEEEEE !important}[name=info] .info--secondary-50{color:#EEEEEE !important}[name=info] .info--tertiary-900{color:#004885 !important}[name=info] .info--tertiary-800{color:#004885 !important}[name=info] .info--tertiary-700{color:#004885 !important}[name=info] .info--tertiary-600{color:#004885 !important}[name=info] .info--tertiary-500{color:#004885 !important}[name=info] .info--tertiary-400{color:#5C8AB1 !important}[name=info] .info--tertiary-300{color:#85A8C5 !important}[name=info] .info--tertiary-200{color:#C2D3E2 !important}[name=info] .info--tertiary-100{color:#EBF1F6 !important}[name=info] .info--tertiary-50{color:#EBF1F6 !important}[name=info] .info--quaternary-900{color:#5A8D00 !important}[name=info] .info--quaternary-800{color:#5A8D00 !important}[name=info] .info--quaternary-700{color:#5A8D00 !important}[name=info] .info--quaternary-600{color:#5A8D00 !important}[name=info] .info--quaternary-500{color:#96C11F !important}[name=info] .info--quaternary-400{color:#BCD870 !important}[name=info] .info--quaternary-300{color:#CDE294 !important}[name=info] .info--quaternary-200{color:#E6F0C9 !important}[name=info] .info--quaternary-100{color:#F7FAED !important}[name=info] .info--quaternary-50{color:#F7FAED !important}[name=info] .info--quinary-900{color:#C75300 !important}[name=info] .info--quinary-800{color:#C75300 !important}[name=info] .info--quinary-700{color:#C75300 !important}[name=info] .info--quinary-600{color:#C75300 !important}[name=info] .info--quinary-500{color:#EF7B0B !important}[name=info] .info--quinary-400{color:#FFA14C !important}[name=info] .info--quinary-300{color:#FFB673 !important}[name=info] .info--quinary-200{color:#FFDDBF !important}[name=info] .info--quinary-100{color:#FFF1E5 !important}[name=info] .info--quinary-50{color:#FFF1E5 !important}[name=info] .info--senary-900{color:#602A10 !important}[name=info] .info--senary-800{color:#95431D !important}[name=info] .info--senary-700{color:#B66E4D !important}[name=info] .info--senary-600{color:#B78670 !important}[name=info] .info--senary-500{color:#CAA08D !important}[name=info] .info--senary-400{color:#DEAE98 !important}[name=info] .info--senary-300{color:#EEC3AF !important}[name=info] .info--senary-200{color:#FAD5C5 !important}[name=info] .info--senary-100{color:#FFE9DF !important}[name=info] .info--senary-50{color:transparent !important}[name=info] .info--septenary-900{color:transparent !important}[name=info] .info--septenary-800{color:transparent !important}[name=info] .info--septenary-700{color:transparent !important}[name=info] .info--septenary-600{color:transparent !important}[name=info] .info--septenary-500{color:#6C887A !important}[name=info] .info--septenary-400{color:transparent !important}[name=info] .info--septenary-300{color:transparent !important}[name=info] .info--septenary-200{color:transparent !important}[name=info] .info--septenary-100{color:transparent !important}[name=info] .info--septenary-50{color:transparent !important}[name=info] .info--grey-900{color:#1D1D1D !important}[name=info] .info--grey-800{color:#333333 !important}[name=info] .info--grey-700{color:#4D4D4D !important}[name=info] .info--grey-600{color:#666666 !important}[name=info] .info--grey-500{color:#757575 !important}[name=info] .info--grey-400{color:#999999 !important}[name=info] .info--grey-300{color:#B3B3B3 !important}[name=info] .info--grey-200{color:#CCCCCC !important}[name=info] .info--grey-100{color:#E6E6E6 !important}[name=info] .info--grey-50{color:#F8F8F8 !important}[name=info] .info--contextual-success{color:#00856A !important}[name=info] .info--success{color:#00856A !important}[name=info] .info--contextual-success-light{color:#E5F2F0 !important}[name=info] .info--success-light{color:#E5F2F0 !important}[name=info] .info--contextual-info{color:#2899A8 !important}[name=info] .info--info{color:#2899A8 !important}[name=info] .info--contextual-info-light{color:#DBF6FF !important}[name=info] .info--info-light{color:#DBF6FF !important}[name=info] .info--contextual-warning{color:#F76700 !important}[name=info] .info--warning{color:#F76700 !important}[name=info] .info--contextual-warning-light{color:#FFF1E5 !important}[name=info] .info--warning-light{color:#FFF1E5 !important}[name=info] .info--contextual-error{color:#EB0000 !important}[name=info] .info--error{color:#EB0000 !important}[name=info] .info--contextual-error-light{color:#FDE5E5 !important}[name=info] .info--error-light{color:#FDE5E5 !important}[name=info] .info--pfm-blue{color:#55A1D3 !important}[name=info] .info--pfm-green{color:#8DDE54 !important}[name=info] .info--pfm-yellow{color:#FFC600 !important}[name=info] .info--pfm-orange{color:#FC912E !important}[name=info] .info--pfm-red{color:#DF5036 !important}[name=info] .info--external-bank-ing{color:#F58220 !important}[name=info] .info--external-bank-bil{color:#71308B !important}[name=info] .info--external-bank-bcee{color:#144093 !important}[name=info] .info--external-bank-post{color:#FABC0B !important}[name=info] .info--external-bank-raiffeisen{color:#112242 !important}[name=info] .info--external-bank-bnp-paribas{color:#00915A !important}[name=info] .info--white-15{color:rgba(255, 255, 255, 0.15) !important}[name=info] .info--white-25{color:rgba(255, 255, 255, 0.25) !important}[name=info] .info--white-50{color:rgba(255, 255, 255, 0.5) !important}[name=info] .info--brand-pfm-blue{color:#55A1D3 !important}[name=info] .info--brand-pfm-green{color:#8DDE54 !important}[name=info] .info--brand-pfm-yellow{color:#FFC600 !important}[name=info] .info--brand-pfm-orange{color:#FC912E !important}[name=info] .info--brand-pfm-red{color:#DF5036 !important}[name=info] .info--brand-expressive-green-light{color:#4FB482 !important}[name=info] .info--brand-expressive-green-dark{color:#133B2C !important}[name=info] .info--brand-expressive-blue-light{color:#1B8DC0 !important}[name=info] .info--brand-expressive-blue-dark{color:#0A324B !important}[name=info] .info--brand-expressive-yellow-light{color:#F0BE21 !important}[name=info] .info--brand-expressive-yellow-dark{color:#B77918 !important}[name=info] .info--brand-expressive-orange-light{color:#F3B969 !important}[name=info] .info--brand-expressive-orange-dark{color:#EF7D00 !important}[name=info] .info--brand-expressive-pink-light{color:#C03152 !important}[name=info] .info--brand-expressive-pink-dark{color:#4F0F15 !important}[name=info] .info--brand-expressive-red-light{color:#F7B7AF !important}[name=info] .info--brand-expressive-red-dark{color:#E62D32 !important}[name=info] .info--brand-expressive-orange-dark-900{color:#4D2800 !important}[name=info] .info--brand-expressive-orange-dark-800{color:#804200 !important}[name=info] .info--brand-expressive-orange-dark-700{color:#B35C00 !important}[name=info] .info--brand-expressive-orange-dark-600{color:#CC6A00 !important}[name=info] .info--brand-expressive-orange-dark-500{color:#EF7D00 !important}[name=info] .info--brand-expressive-orange-dark-400{color:#FC8823 !important}[name=info] .info--brand-expressive-orange-dark-300{color:#FC9E4C !important}[name=info] .info--brand-expressive-orange-dark-200{color:#FFB675 !important}[name=info] .info--brand-expressive-orange-dark-100{color:#FFD1A8 !important}[name=info] .info--brand-expressive-orange-dark-50{color:transparent !important}[name=info] .info--brand-expressive-blue-light-900{color:#0C4159 !important}[name=info] .info--brand-expressive-blue-light-800{color:#105373 !important}[name=info] .info--brand-expressive-blue-light-700{color:#14668C !important}[name=info] .info--brand-expressive-blue-light-600{color:#1779A6 !important}[name=info] .info--brand-expressive-blue-light-500{color:#1B8DC0 !important}[name=info] .info--brand-expressive-blue-light-400{color:#1D9AD1 !important}[name=info] .info--brand-expressive-blue-light-300{color:#2AAEEB !important}[name=info] .info--brand-expressive-blue-light-200{color:#56BFF0 !important}[name=info] .info--brand-expressive-blue-light-100{color:#7FCFF5 !important}[name=info] .info--brand-expressive-blue-light-50{color:transparent !important}[name=info] .info--brand-expressive-green-light-900{color:#224D37 !important}[name=info] .info--brand-expressive-green-light-800{color:#2D6649 !important}[name=info] .info--brand-expressive-green-light-700{color:#39805C !important}[name=info] .info--brand-expressive-green-light-600{color:#43996E !important}[name=info] .info--brand-expressive-green-light-500{color:#4FB482 !important}[name=info] .info--brand-expressive-green-light-400{color:#55C28C !important}[name=info] .info--brand-expressive-green-light-300{color:#60D199 !important}[name=info] .info--brand-expressive-green-light-200{color:#69DBA2 !important}[name=info] .info--brand-expressive-green-light-100{color:#85E6B5 !important}[name=info] .info--brand-expressive-green-light-50{color:transparent !important}[name=info] .info--brand-expressive-yellow-light-900{color:#6B550F !important}[name=info] .info--brand-expressive-yellow-light-800{color:#8F7214 !important}[name=info] .info--brand-expressive-yellow-light-700{color:#AD8B19 !important}[name=info] .info--brand-expressive-yellow-light-600{color:#D1A71D !important}[name=info] .info--brand-expressive-yellow-light-500{color:#F0BE21 !important}[name=info] .info--brand-expressive-yellow-light-400{color:#FCCA23 !important}[name=info] .info--brand-expressive-yellow-light-300{color:#FCD742 !important}[name=info] .info--brand-expressive-yellow-light-200{color:#FCDD60 !important}[name=info] .info--brand-expressive-yellow-light-100{color:#FCE483 !important}[name=info] .info--brand-expressive-yellow-light-50{color:transparent !important}[name=info] .info--brand-expressive-yellow-dark-900{color:#52360B !important}[name=info] .info--brand-expressive-yellow-dark-800{color:#6B470E !important}[name=info] .info--brand-expressive-yellow-dark-700{color:#855811 !important}[name=info] .info--brand-expressive-yellow-dark-600{color:#9E6915 !important}[name=info] .info--brand-expressive-yellow-dark-500{color:#B77918 !important}[name=info] .info--brand-expressive-yellow-dark-400{color:#D18A1B !important}[name=info] .info--brand-expressive-yellow-dark-300{color:#EB9B1F !important}[name=info] .info--brand-expressive-yellow-dark-200{color:#FAAA2D !important}[name=info] .info--brand-expressive-yellow-dark-100{color:#FABA55 !important}[name=info] .info--brand-expressive-yellow-dark-50{color:transparent !important}[name=info] .info--white-opacity-50{color:rgba(255, 255, 255, 0.5) !important}[name=info] .info--white{color:#FFFFFF !important}[name=info] .info--black{color:#000000 !important}[name=info] .info{display:flex;align-items:center;height:100%;padding:0;font-family:\"Montserrat\", sans-serif}[name=info] .info>*:not(:first-child):not(.info__tooltip){margin-left:4px}[name=info] .info{color:#F76700;text-transform:none}[name=info] .info [name=tooltip]{text-transform:none}[name=info] .info{font-size:12px;font-weight:400}";

const ENOVOSInfoText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'info',
      TOOLTIP: '__tooltip',
      ICON: '__icon',
    };
  }
  componentWillLoad() {
    this.uuid = `${this.classNames.EL}${this.classNames.TOOLTIP}--${v4_1()}`;
  }
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        ComponentPropsHelper.setGlobalStyles(this.infoStyles, this.classNames.EL),
      ].join(' ') }, this.infoText !== undefined ? h("span", null, this.infoText) : '', this.infoTooltipIcon !== undefined ?
      h("eds-icon", { id: this.uuid, class: [
          `${this.classNames.EL}${this.classNames.ICON}`,
        ].join(' '), icon: this.infoTooltipIcon, size: this.infoTooltipSize, styles: this.infoTooltipStyles })
      : '', this.infoTooltipText !== undefined ?
      h("eds-tooltip", { class: [
          `${this.classNames.EL}${this.classNames.TOOLTIP}`,
        ].join(' '), selector: this.uuid, text: this.infoTooltipText, pointer: this.infoTooltipPointer ? true : false, timeoutValue: this.infoTooltipTimeoutValue, notimeout: this.infoTooltipNotimeout }) : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSInfoText.style = infoCss;

const inputCss = ".input-textarea{width:100%;height:100%;padding:0;margin:0;border:none;background:none;font-family:\"Montserrat\", sans-serif;font-style:normal;outline:0;-webkit-appearance:none}.input-textarea.disabled,.input-textarea.disabled:hover,.input-textarea:disabled,.input-textarea:disabled:hover{cursor:not-allowed}.input-textarea::-ms-clear,.input-textarea::-ms-reveal{display:none}.input-textarea.textarea{resize:vertical}.input-textarea--readonly,.input-textarea[readonly],.input-textarea[read-only]{cursor:pointer}.input-textarea[type=file]{position:relative;cursor:text;-webkit-appearance:textfield;-webkit-box-sizing:border-box}.input-textarea[type=file]::-webkit-file-upload-button{width:0;height:100%;padding:0;margin:0;border:none;vertical-align:middle;-webkit-appearance:none}.input-textarea--has-ellipsis{text-overflow:ellipsis}[name=input-textarea] .input-textarea.input-textarea{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea.placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:focus{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea:focus.placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:focus:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:focus::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:focus:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:focus::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.disabled,[name=input-textarea] .input-textarea.input-textarea.disabled:hover,[name=input-textarea] .input-textarea.input-textarea:disabled,[name=input-textarea] .input-textarea.input-textarea:disabled:hover{color:#A7A7A7}[name=input-textarea] .input-textarea.input-textarea.disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea.disabled:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.disabled:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.disabled:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.disabled:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:hover:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.disabled:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:disabled:hover::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:-moz-read-only,[name=input-textarea] .input-textarea.input-textarea:-moz-read-only:hover{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea.readonly,[name=input-textarea] .input-textarea.input-textarea.readonly:hover,[name=input-textarea] .input-textarea.input-textarea:read-only,[name=input-textarea] .input-textarea.input-textarea:read-only:hover{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea:-moz-read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea:-moz-read-only:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.readonly.placeholder,[name=input-textarea] .input-textarea.input-textarea.readonly:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:-moz-read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:-moz-read-only:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.readonly:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.readonly:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea:-moz-read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:-moz-read-only:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.readonly::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.readonly:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.readonly:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.readonly:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:hover:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.readonly::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.readonly:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea:read-only:hover::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent{color:#FFFFFF}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.placeholder{color:#FFFFFF !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:-moz-placeholder{color:#FFFFFF !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent::-moz-placeholder{color:#FFFFFF !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:-ms-input-placeholder{color:#FFFFFF !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent::-webkit-input-placeholder{color:#FFFFFF !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]),[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]){color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]).placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]){color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--success.placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--success:focus{color:#00856A}[name=input-textarea] .input-textarea.input-textarea--success:focus.placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:focus:-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:focus::-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:focus:-ms-input-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:focus::-webkit-input-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.disabled,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover,[name=input-textarea] .input-textarea.input-textarea--success:disabled,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover{color:#E5F2F0}[name=input-textarea] .input-textarea.input-textarea--success.disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover.placeholder{color:#E5F2F0 !important}[name=input-textarea] .input-textarea.input-textarea--success.disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover:-moz-placeholder{color:#E5F2F0 !important}[name=input-textarea] .input-textarea.input-textarea--success.disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover::-moz-placeholder{color:#E5F2F0 !important}[name=input-textarea] .input-textarea.input-textarea--success.disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover:-ms-input-placeholder{color:#E5F2F0 !important}[name=input-textarea] .input-textarea.input-textarea--success.disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.disabled:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:disabled:hover::-webkit-input-placeholder{color:#E5F2F0 !important}[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only,[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only:hover{color:#00856A}[name=input-textarea] .input-textarea.input-textarea--success.readonly,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover,[name=input-textarea] .input-textarea.input-textarea--success:read-only,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover{color:#00856A}[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only:hover.placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.readonly.placeholder,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover.placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only:hover:-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.readonly:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover:-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:-moz-read-only:hover::-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.readonly::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover::-moz-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.readonly:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover:-ms-input-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.readonly::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.readonly:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success:read-only:hover::-webkit-input-placeholder{color:#00856A !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent{color:false}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--warning.placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--warning:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--warning::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--warning:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--warning::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--warning:focus{color:#F76700}[name=input-textarea] .input-textarea.input-textarea--warning:focus.placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:focus:-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:focus::-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:focus:-ms-input-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:focus::-webkit-input-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.disabled,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover,[name=input-textarea] .input-textarea.input-textarea--warning:disabled,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover{color:#FFF1E5}[name=input-textarea] .input-textarea.input-textarea--warning.disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover.placeholder{color:#FFF1E5 !important}[name=input-textarea] .input-textarea.input-textarea--warning.disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover:-moz-placeholder{color:#FFF1E5 !important}[name=input-textarea] .input-textarea.input-textarea--warning.disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover::-moz-placeholder{color:#FFF1E5 !important}[name=input-textarea] .input-textarea.input-textarea--warning.disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover:-ms-input-placeholder{color:#FFF1E5 !important}[name=input-textarea] .input-textarea.input-textarea--warning.disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.disabled:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:disabled:hover::-webkit-input-placeholder{color:#FFF1E5 !important}[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only,[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only:hover{color:#F76700}[name=input-textarea] .input-textarea.input-textarea--warning.readonly,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover,[name=input-textarea] .input-textarea.input-textarea--warning:read-only,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover{color:#F76700}[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only:hover.placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.readonly.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover.placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only:hover:-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.readonly:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover:-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:-moz-read-only:hover::-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.readonly::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover::-moz-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.readonly:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover:-ms-input-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.readonly::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.readonly:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning:read-only:hover::-webkit-input-placeholder{color:#F76700 !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent{color:false}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--error.placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--error:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--error::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--error:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--error::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea] .input-textarea.input-textarea--error:focus{color:#EB0000}[name=input-textarea] .input-textarea.input-textarea--error:focus.placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:focus:-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:focus::-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:focus:-ms-input-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:focus::-webkit-input-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.disabled,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover,[name=input-textarea] .input-textarea.input-textarea--error:disabled,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover{color:#FDE5E5}[name=input-textarea] .input-textarea.input-textarea--error.disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover.placeholder{color:#FDE5E5 !important}[name=input-textarea] .input-textarea.input-textarea--error.disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover:-moz-placeholder{color:#FDE5E5 !important}[name=input-textarea] .input-textarea.input-textarea--error.disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover::-moz-placeholder{color:#FDE5E5 !important}[name=input-textarea] .input-textarea.input-textarea--error.disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover:-ms-input-placeholder{color:#FDE5E5 !important}[name=input-textarea] .input-textarea.input-textarea--error.disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.disabled:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:disabled:hover::-webkit-input-placeholder{color:#FDE5E5 !important}[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only,[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only:hover{color:#EB0000}[name=input-textarea] .input-textarea.input-textarea--error.readonly,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover,[name=input-textarea] .input-textarea.input-textarea--error:read-only,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover{color:#EB0000}[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only:hover.placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.readonly.placeholder,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover.placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only:hover:-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.readonly:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover:-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:-moz-read-only:hover::-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.readonly::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover::-moz-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.readonly:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover:-ms-input-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.readonly::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.readonly:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error:read-only:hover::-webkit-input-placeholder{color:#EB0000 !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent{color:false}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--secondary-500.placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500::-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-ms-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus{color:#C75300}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus.placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus:-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus::-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus:-ms-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:focus::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover{color:#5A8D00}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover.placeholder{color:#5A8D00 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover:-moz-placeholder{color:#5A8D00 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover::-moz-placeholder{color:#5A8D00 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover:-ms-input-placeholder{color:#5A8D00 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.disabled:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:disabled:hover::-webkit-input-placeholder{color:#5A8D00 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only,[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only:hover{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover{color:#5E5E5E}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only:hover.placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only.placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover.placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only:hover:-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover:-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:-moz-read-only:hover::-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover::-moz-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover:-ms-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.readonly:hover::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500:read-only:hover::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent{color:false}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea] .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea] .input-textarea.input-textarea{font-size:14px;font-weight:400;line-height:24px}[name=input-textarea] .input-textarea.input-textarea.textarea{height:60px;min-height:60px;padding:16px;line-height:16px}[name=input-textarea] .input-textarea.input-textarea--md{font-size:12px;font-weight:600;line-height:16px}[name=input-textarea] .input-textarea.input-textarea--md.textarea{height:60px;min-height:60px;padding:16px;line-height:16px}[name=input-textarea].theme--dark .input-textarea.input-textarea{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea.placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus.placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:focus::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover{color:#A7A7A7}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.disabled:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:disabled:hover::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only:hover{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover.placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover:-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:-moz-read-only:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover::-moz-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover:-ms-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.readonly:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea:read-only:hover::-webkit-input-placeholder{color:#A7A7A7 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent{color:#FFFFFF}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.placeholder{color:#FFFFFF !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:-moz-placeholder{color:#FFFFFF !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent::-moz-placeholder{color:#FFFFFF !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:-ms-input-placeholder{color:#FFFFFF !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent::-webkit-input-placeholder{color:#FFFFFF !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]){color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]).placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]){color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus{color:#00856A}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus.placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus:-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus::-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus:-ms-input-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:focus::-webkit-input-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover{color:#E5F2F0}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover.placeholder{color:#E5F2F0 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover:-moz-placeholder{color:#E5F2F0 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover::-moz-placeholder{color:#E5F2F0 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover:-ms-input-placeholder{color:#E5F2F0 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.disabled:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:disabled:hover::-webkit-input-placeholder{color:#E5F2F0 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only:hover{color:#00856A}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover{color:#00856A}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only:hover.placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover.placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only:hover:-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover:-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:-moz-read-only:hover::-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover::-moz-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover:-ms-input-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.readonly:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success:read-only:hover::-webkit-input-placeholder{color:#00856A !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent{color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--success.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus{color:#F76700}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus.placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus:-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus::-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus:-ms-input-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:focus::-webkit-input-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover{color:#FFF1E5}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover.placeholder{color:#FFF1E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover:-moz-placeholder{color:#FFF1E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover::-moz-placeholder{color:#FFF1E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover:-ms-input-placeholder{color:#FFF1E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.disabled:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:disabled:hover::-webkit-input-placeholder{color:#FFF1E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only:hover{color:#F76700}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover{color:#F76700}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only:hover.placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover.placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only:hover:-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover:-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:-moz-read-only:hover::-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover::-moz-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover:-ms-input-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.readonly:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning:read-only:hover::-webkit-input-placeholder{color:#F76700 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent{color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--warning.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error::-moz-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-ms-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error::-webkit-input-placeholder{color:#5E5E5E !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus{color:#EB0000}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus.placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus:-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus::-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus:-ms-input-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:focus::-webkit-input-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover{color:#FDE5E5}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover.placeholder{color:#FDE5E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover:-moz-placeholder{color:#FDE5E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover::-moz-placeholder{color:#FDE5E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover:-ms-input-placeholder{color:#FDE5E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.disabled:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:disabled:hover::-webkit-input-placeholder{color:#FDE5E5 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only:hover{color:#EB0000}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover{color:#EB0000}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only:hover.placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover.placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only:hover:-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover:-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:-moz-read-only:hover::-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover::-moz-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover:-ms-input-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.readonly:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error:read-only:hover::-webkit-input-placeholder{color:#EB0000 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent{color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--error.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500::-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-ms-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus{color:#C75300}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus.placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus:-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus::-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus:-ms-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:focus::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover{color:#5A8D00}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover.placeholder{color:#5A8D00 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover:-moz-placeholder{color:#5A8D00 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover::-moz-placeholder{color:#5A8D00 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover:-ms-input-placeholder{color:#5A8D00 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.disabled:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:disabled:hover::-webkit-input-placeholder{color:#5A8D00 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only:hover{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover{color:#5E5E5E}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only:hover.placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only.placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover.placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only:hover:-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover:-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:-moz-read-only:hover::-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover::-moz-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover:-ms-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.readonly:hover::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500:read-only:hover::-webkit-input-placeholder{color:#004885 !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent{color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent:focus:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]),[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]){color:false}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]).placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]).placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]):-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]):-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled])::-moz-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only])::-moz-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled]):-ms-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only]):-ms-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([disabled])::-webkit-input-placeholder,[name=input-textarea].theme--dark .input-textarea.input-textarea--secondary-500.input-textarea--transparent.input-textarea--filled:not([read-only])::-webkit-input-placeholder{color:inherit !important}[name=input-textarea].theme--dark .input-textarea.input-textarea{font-size:14px;font-weight:400;line-height:24px}[name=input-textarea].theme--dark .input-textarea.input-textarea.textarea{height:60px;min-height:60px;padding:16px;line-height:16px}[name=input-textarea].theme--dark .input-textarea.input-textarea--md{font-size:12px;font-weight:600;line-height:16px}[name=input-textarea].theme--dark .input-textarea.input-textarea--md.textarea{height:60px;min-height:60px;padding:16px;line-height:16px}";

const ENOVOSInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.focusInput = createEvent(this, "focusInput", 7);
    this.blurInput = createEvent(this, "blurInput", 7);
    this.changeInput = createEvent(this, "changeInput", 7);
    this.inputInput = createEvent(this, "inputInput", 7);
    this.changeFileInput = createEvent(this, "changeFileInput", 7);
    this.dataName = '';
    this.debounce = 0;
    this.step = '1';
    this.ellipsis = false;
    this.classNames = {
      EL: 'input-textarea',
      HAS_ELLIPSIS: '--has-ellipsis',
    };
    /**
     * @description Debounce onIpunt event, waiting user is typing
     */
    this.typing = debounce(ev => {
      this.inputInput.emit(ev);
    }, this.debounce);
  }
  /** INJECT_ANCHOR */
  // Attributes disabled and/or readonly
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
    this.el.setAttribute('name', this.classNames.EL);
    if (this.el.querySelector('input')) {
      if (this.disabled) {
        this.el.querySelector('input').setAttribute('disabled', 'disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('input').setAttribute('readonly', 'readonly');
      }
    }
    if (this.el.querySelector('textarea')) {
      if (this.disabled) {
        this.el.querySelector('textarea').setAttribute('disabled', 'disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('textarea').setAttribute('readonly', 'readonly');
      }
    }
    this.handleEvent();
  }
  componentDidUpdate() {
    if (this.el.querySelector('input')) {
      if (this.disabled) {
        this.el.querySelector('input').setAttribute('disabled', 'disabled');
      }
      else if (this.el.querySelector('input').hasAttribute('disabled')) {
        this.el.querySelector('input').removeAttribute('disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('input').setAttribute('readonly', 'readonly');
      }
      else if (this.el.querySelector('input').hasAttribute('readonly')) {
        this.el.querySelector('input').removeAttribute('readonly');
      }
    }
    if (this.el.querySelector('textarea')) {
      if (this.disabled) {
        this.el.querySelector('textarea').setAttribute('disabled', 'disabled');
      }
      else if (this.el.querySelector('textarea').hasAttribute('disabled')) {
        this.el.querySelector('textarea').removeAttribute('disabled');
      }
      if (this.readOnly) {
        this.el.querySelector('textarea').setAttribute('readonly', 'readonly');
      }
      else if (this.el.querySelector('textarea').hasAttribute('readonly')) {
        this.el.querySelector('textarea').removeAttribute('readonly');
      }
    }
  }
  componentWillRender() {
    if (this.el.querySelector('textarea')) {
      this.el.querySelector('textarea').value = this.dataValue;
    }
  }
  handleEvent() {
    const inputElement = this.el.querySelector('input');
    const textareaElement = this.el.querySelector('textarea');
    [
      {
        name: 'focus',
        event: ev => { this.focusInput.emit(ev); },
      },
      {
        name: 'blur',
        event: ev => { this.blurInput.emit(ev); },
      },
      {
        name: 'input',
        event: ev => { this.typing(ev); },
      },
      {
        name: 'change',
        event: ev => { this.changeInput.emit(ev); },
      },
    ].forEach(event => {
      if (inputElement) {
        inputElement.removeEventListener(event.name, event.event);
        inputElement.addEventListener(event.name, event.event);
      }
      else if (textareaElement) {
        textareaElement.removeEventListener(event.name, event.event);
        textareaElement.addEventListener(event.name, event.event);
      }
    });
  }
  onChangeFiles(files) {
    this.changeFileInput.emit(files);
  }
  /**
   * @description Display the link on white in case of transparent version of field
   * otherwise in tertiary color
   * @return {string}
   */
  isActive() {
    return (!isEmpty(this.dataValue)) ? `${this.classNames.EL}--filled` : '';
  }
  /**
   * @description Get size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    if (this.type === 'textarea') {
      return (h("textarea", { class: [
          this.classNames.EL,
          this.getSize(),
          'textarea',
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: this.dataName, placeholder: this.placeholder }, this.dataValue));
    }
    else if (this.type === 'file') {
      return (h("input", { class: [
          this.classNames.EL,
          this.getSize(),
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: "files[]", onChange: (event) => this.onChangeFiles(event.target.files), type: this.type, value: this.dataValue, step: this.step, placeholder: this.placeholder, autocomplete: "off" }));
    }
    else {
      return (h("input", { class: [
          this.classNames.EL,
          this.ellipsis === true ? `${this.classNames.EL}${this.classNames.HAS_ELLIPSIS}` : '',
          this.getSize(),
          this.isActive(),
          StylePropsHelper.getStyles(this.styles, this.classNames.EL),
        ].join(' '), name: this.dataName, type: this.type, value: this.dataValue, step: this.step, placeholder: this.placeholder, autocomplete: "off" }));
    }
  }
  get el() { return getElement(this); }
};
ENOVOSInput.style = inputCss;

const labelCss = "[name=label] .label--primary{color:#F76700 !important}[name=label] .label--secondary{color:#5E5E5E !important}[name=label] .label--tertiary{color:#004885 !important}[name=label] .label--quaternary{color:#96C11F !important}[name=label] .label--quinary{color:#EF7B0B !important}[name=label] .label--senary{color:#CAA08D !important}[name=label] .label--septenary{color:#6C887A !important}[name=label] .label--grey{color:#757575 !important}[name=label] .label--primary-900{color:#F76700 !important}[name=label] .label--primary-800{color:#F76700 !important}[name=label] .label--primary-700{color:#D52B1E !important}[name=label] .label--primary-600{color:#C75300 !important}[name=label] .label--primary-500{color:#F76700 !important}[name=label] .label--primary-400{color:#FFA14C !important}[name=label] .label--primary-300{color:#FFB673 !important}[name=label] .label--primary-200{color:#FFDDBF !important}[name=label] .label--primary-100{color:#FFF1E5 !important}[name=label] .label--primary-50{color:#FFF1E5 !important}[name=label] .label--secondary-900{color:#5E5E5E !important}[name=label] .label--secondary-800{color:#5E5E5E !important}[name=label] .label--secondary-700{color:#5E5E5E !important}[name=label] .label--secondary-600{color:#5E5E5E !important}[name=label] .label--secondary-500{color:#5E5E5E !important}[name=label] .label--secondary-400{color:#8E8E8E !important}[name=label] .label--secondary-300{color:#A7A7A7 !important}[name=label] .label--secondary-200{color:#D7D7D7 !important}[name=label] .label--secondary-100{color:#EEEEEE !important}[name=label] .label--secondary-50{color:#EEEEEE !important}[name=label] .label--tertiary-900{color:#004885 !important}[name=label] .label--tertiary-800{color:#004885 !important}[name=label] .label--tertiary-700{color:#004885 !important}[name=label] .label--tertiary-600{color:#004885 !important}[name=label] .label--tertiary-500{color:#004885 !important}[name=label] .label--tertiary-400{color:#5C8AB1 !important}[name=label] .label--tertiary-300{color:#85A8C5 !important}[name=label] .label--tertiary-200{color:#C2D3E2 !important}[name=label] .label--tertiary-100{color:#EBF1F6 !important}[name=label] .label--tertiary-50{color:#EBF1F6 !important}[name=label] .label--quaternary-900{color:#5A8D00 !important}[name=label] .label--quaternary-800{color:#5A8D00 !important}[name=label] .label--quaternary-700{color:#5A8D00 !important}[name=label] .label--quaternary-600{color:#5A8D00 !important}[name=label] .label--quaternary-500{color:#96C11F !important}[name=label] .label--quaternary-400{color:#BCD870 !important}[name=label] .label--quaternary-300{color:#CDE294 !important}[name=label] .label--quaternary-200{color:#E6F0C9 !important}[name=label] .label--quaternary-100{color:#F7FAED !important}[name=label] .label--quaternary-50{color:#F7FAED !important}[name=label] .label--quinary-900{color:#C75300 !important}[name=label] .label--quinary-800{color:#C75300 !important}[name=label] .label--quinary-700{color:#C75300 !important}[name=label] .label--quinary-600{color:#C75300 !important}[name=label] .label--quinary-500{color:#EF7B0B !important}[name=label] .label--quinary-400{color:#FFA14C !important}[name=label] .label--quinary-300{color:#FFB673 !important}[name=label] .label--quinary-200{color:#FFDDBF !important}[name=label] .label--quinary-100{color:#FFF1E5 !important}[name=label] .label--quinary-50{color:#FFF1E5 !important}[name=label] .label--senary-900{color:#602A10 !important}[name=label] .label--senary-800{color:#95431D !important}[name=label] .label--senary-700{color:#B66E4D !important}[name=label] .label--senary-600{color:#B78670 !important}[name=label] .label--senary-500{color:#CAA08D !important}[name=label] .label--senary-400{color:#DEAE98 !important}[name=label] .label--senary-300{color:#EEC3AF !important}[name=label] .label--senary-200{color:#FAD5C5 !important}[name=label] .label--senary-100{color:#FFE9DF !important}[name=label] .label--senary-50{color:transparent !important}[name=label] .label--septenary-900{color:transparent !important}[name=label] .label--septenary-800{color:transparent !important}[name=label] .label--septenary-700{color:transparent !important}[name=label] .label--septenary-600{color:transparent !important}[name=label] .label--septenary-500{color:#6C887A !important}[name=label] .label--septenary-400{color:transparent !important}[name=label] .label--septenary-300{color:transparent !important}[name=label] .label--septenary-200{color:transparent !important}[name=label] .label--septenary-100{color:transparent !important}[name=label] .label--septenary-50{color:transparent !important}[name=label] .label--grey-900{color:#1D1D1D !important}[name=label] .label--grey-800{color:#333333 !important}[name=label] .label--grey-700{color:#4D4D4D !important}[name=label] .label--grey-600{color:#666666 !important}[name=label] .label--grey-500{color:#757575 !important}[name=label] .label--grey-400{color:#999999 !important}[name=label] .label--grey-300{color:#B3B3B3 !important}[name=label] .label--grey-200{color:#CCCCCC !important}[name=label] .label--grey-100{color:#E6E6E6 !important}[name=label] .label--grey-50{color:#F8F8F8 !important}[name=label] .label--contextual-success{color:#00856A !important}[name=label] .label--success{color:#00856A !important}[name=label] .label--contextual-success-light{color:#E5F2F0 !important}[name=label] .label--success-light{color:#E5F2F0 !important}[name=label] .label--contextual-info{color:#2899A8 !important}[name=label] .label--info{color:#2899A8 !important}[name=label] .label--contextual-info-light{color:#DBF6FF !important}[name=label] .label--info-light{color:#DBF6FF !important}[name=label] .label--contextual-warning{color:#F76700 !important}[name=label] .label--warning{color:#F76700 !important}[name=label] .label--contextual-warning-light{color:#FFF1E5 !important}[name=label] .label--warning-light{color:#FFF1E5 !important}[name=label] .label--contextual-error{color:#EB0000 !important}[name=label] .label--error{color:#EB0000 !important}[name=label] .label--contextual-error-light{color:#FDE5E5 !important}[name=label] .label--error-light{color:#FDE5E5 !important}[name=label] .label--pfm-blue{color:#55A1D3 !important}[name=label] .label--pfm-green{color:#8DDE54 !important}[name=label] .label--pfm-yellow{color:#FFC600 !important}[name=label] .label--pfm-orange{color:#FC912E !important}[name=label] .label--pfm-red{color:#DF5036 !important}[name=label] .label--external-bank-ing{color:#F58220 !important}[name=label] .label--external-bank-bil{color:#71308B !important}[name=label] .label--external-bank-bcee{color:#144093 !important}[name=label] .label--external-bank-post{color:#FABC0B !important}[name=label] .label--external-bank-raiffeisen{color:#112242 !important}[name=label] .label--external-bank-bnp-paribas{color:#00915A !important}[name=label] .label--white-15{color:rgba(255, 255, 255, 0.15) !important}[name=label] .label--white-25{color:rgba(255, 255, 255, 0.25) !important}[name=label] .label--white-50{color:rgba(255, 255, 255, 0.5) !important}[name=label] .label--brand-pfm-blue{color:#55A1D3 !important}[name=label] .label--brand-pfm-green{color:#8DDE54 !important}[name=label] .label--brand-pfm-yellow{color:#FFC600 !important}[name=label] .label--brand-pfm-orange{color:#FC912E !important}[name=label] .label--brand-pfm-red{color:#DF5036 !important}[name=label] .label--brand-expressive-green-light{color:#4FB482 !important}[name=label] .label--brand-expressive-green-dark{color:#133B2C !important}[name=label] .label--brand-expressive-blue-light{color:#1B8DC0 !important}[name=label] .label--brand-expressive-blue-dark{color:#0A324B !important}[name=label] .label--brand-expressive-yellow-light{color:#F0BE21 !important}[name=label] .label--brand-expressive-yellow-dark{color:#B77918 !important}[name=label] .label--brand-expressive-orange-light{color:#F3B969 !important}[name=label] .label--brand-expressive-orange-dark{color:#EF7D00 !important}[name=label] .label--brand-expressive-pink-light{color:#C03152 !important}[name=label] .label--brand-expressive-pink-dark{color:#4F0F15 !important}[name=label] .label--brand-expressive-red-light{color:#F7B7AF !important}[name=label] .label--brand-expressive-red-dark{color:#E62D32 !important}[name=label] .label--brand-expressive-orange-dark-900{color:#4D2800 !important}[name=label] .label--brand-expressive-orange-dark-800{color:#804200 !important}[name=label] .label--brand-expressive-orange-dark-700{color:#B35C00 !important}[name=label] .label--brand-expressive-orange-dark-600{color:#CC6A00 !important}[name=label] .label--brand-expressive-orange-dark-500{color:#EF7D00 !important}[name=label] .label--brand-expressive-orange-dark-400{color:#FC8823 !important}[name=label] .label--brand-expressive-orange-dark-300{color:#FC9E4C !important}[name=label] .label--brand-expressive-orange-dark-200{color:#FFB675 !important}[name=label] .label--brand-expressive-orange-dark-100{color:#FFD1A8 !important}[name=label] .label--brand-expressive-orange-dark-50{color:transparent !important}[name=label] .label--brand-expressive-blue-light-900{color:#0C4159 !important}[name=label] .label--brand-expressive-blue-light-800{color:#105373 !important}[name=label] .label--brand-expressive-blue-light-700{color:#14668C !important}[name=label] .label--brand-expressive-blue-light-600{color:#1779A6 !important}[name=label] .label--brand-expressive-blue-light-500{color:#1B8DC0 !important}[name=label] .label--brand-expressive-blue-light-400{color:#1D9AD1 !important}[name=label] .label--brand-expressive-blue-light-300{color:#2AAEEB !important}[name=label] .label--brand-expressive-blue-light-200{color:#56BFF0 !important}[name=label] .label--brand-expressive-blue-light-100{color:#7FCFF5 !important}[name=label] .label--brand-expressive-blue-light-50{color:transparent !important}[name=label] .label--brand-expressive-green-light-900{color:#224D37 !important}[name=label] .label--brand-expressive-green-light-800{color:#2D6649 !important}[name=label] .label--brand-expressive-green-light-700{color:#39805C !important}[name=label] .label--brand-expressive-green-light-600{color:#43996E !important}[name=label] .label--brand-expressive-green-light-500{color:#4FB482 !important}[name=label] .label--brand-expressive-green-light-400{color:#55C28C !important}[name=label] .label--brand-expressive-green-light-300{color:#60D199 !important}[name=label] .label--brand-expressive-green-light-200{color:#69DBA2 !important}[name=label] .label--brand-expressive-green-light-100{color:#85E6B5 !important}[name=label] .label--brand-expressive-green-light-50{color:transparent !important}[name=label] .label--brand-expressive-yellow-light-900{color:#6B550F !important}[name=label] .label--brand-expressive-yellow-light-800{color:#8F7214 !important}[name=label] .label--brand-expressive-yellow-light-700{color:#AD8B19 !important}[name=label] .label--brand-expressive-yellow-light-600{color:#D1A71D !important}[name=label] .label--brand-expressive-yellow-light-500{color:#F0BE21 !important}[name=label] .label--brand-expressive-yellow-light-400{color:#FCCA23 !important}[name=label] .label--brand-expressive-yellow-light-300{color:#FCD742 !important}[name=label] .label--brand-expressive-yellow-light-200{color:#FCDD60 !important}[name=label] .label--brand-expressive-yellow-light-100{color:#FCE483 !important}[name=label] .label--brand-expressive-yellow-light-50{color:transparent !important}[name=label] .label--brand-expressive-yellow-dark-900{color:#52360B !important}[name=label] .label--brand-expressive-yellow-dark-800{color:#6B470E !important}[name=label] .label--brand-expressive-yellow-dark-700{color:#855811 !important}[name=label] .label--brand-expressive-yellow-dark-600{color:#9E6915 !important}[name=label] .label--brand-expressive-yellow-dark-500{color:#B77918 !important}[name=label] .label--brand-expressive-yellow-dark-400{color:#D18A1B !important}[name=label] .label--brand-expressive-yellow-dark-300{color:#EB9B1F !important}[name=label] .label--brand-expressive-yellow-dark-200{color:#FAAA2D !important}[name=label] .label--brand-expressive-yellow-dark-100{color:#FABA55 !important}[name=label] .label--brand-expressive-yellow-dark-50{color:transparent !important}[name=label] .label--white-opacity-50{color:rgba(255, 255, 255, 0.5) !important}[name=label] .label--white{color:#FFFFFF !important}[name=label] .label--black{color:#000000 !important}.label{position:relative;display:block;width:100%;font-family:\"Montserrat\", sans-serif;font-style:normal;text-transform:none}.label--required:after{content:\" *\"}[name=label] .label.label{color:#F76700 !important}[name=label] .label.label--disabled{color:#5E5E5E}[name=label] .label.label--tertiary-500{color:#004885 !important}[name=label] .label.label--tertiary-500--disabled{color:#004885}[name=label] .label.label{padding:0 8px 0 0;font-size:12px;font-weight:600;line-height:12px}[name=label] .label.label--md{padding:0 8px 0 0;font-size:12px;font-weight:400;line-height:12px}[name=label].theme--dark .label.label{color:#F76700 !important}[name=label].theme--dark .label.label--disabled{color:#5E5E5E}[name=label].theme--dark .label.label--tertiary-500{color:#004885 !important}[name=label].theme--dark .label.label--tertiary-500--disabled{color:#004885}[name=label].theme--dark .label.label{padding:0 8px 0 0;font-size:12px;font-weight:600;line-height:12px}[name=label].theme--dark .label.label--md{padding:0 8px 0 0;font-size:12px;font-weight:400;line-height:12px}";

const ENOVOSLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classNames = {
      EL: 'label',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  getRequired() {
    if (this.required) {
      return `${this.classNames.EL}--required`;
    }
  }
  getSize() {
    if (['xs', 'sm', 'md', 'lg', 'xlg'].includes(this.size)) {
      return `${this.classNames.EL}--${this.size}`;
    }
  }
  /** REMOVABLE START */
  render() {
    return (h("label", { class: [
        this.classNames.EL,
        this.disabled ? `${this.classNames.EL}--disabled` : '',
        this.getSize(),
        this.getRequired(),
        LayoutPropsHelper.getStyles(this.styles, ''),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
ENOVOSLabel.style = labelCss;

const linkCss = "[name=link]{display:inline-block;outline:0 !important}[name=link] .link--primary{color:#F76700 !important}[name=link] .link--secondary{color:#5E5E5E !important}[name=link] .link--tertiary{color:#004885 !important}[name=link] .link--quaternary{color:#96C11F !important}[name=link] .link--quinary{color:#EF7B0B !important}[name=link] .link--senary{color:#CAA08D !important}[name=link] .link--septenary{color:#6C887A !important}[name=link] .link--grey{color:#757575 !important}[name=link] .link--primary-900{color:#F76700 !important}[name=link] .link--primary-800{color:#F76700 !important}[name=link] .link--primary-700{color:#D52B1E !important}[name=link] .link--primary-600{color:#C75300 !important}[name=link] .link--primary-500{color:#F76700 !important}[name=link] .link--primary-400{color:#FFA14C !important}[name=link] .link--primary-300{color:#FFB673 !important}[name=link] .link--primary-200{color:#FFDDBF !important}[name=link] .link--primary-100{color:#FFF1E5 !important}[name=link] .link--primary-50{color:#FFF1E5 !important}[name=link] .link--secondary-900{color:#5E5E5E !important}[name=link] .link--secondary-800{color:#5E5E5E !important}[name=link] .link--secondary-700{color:#5E5E5E !important}[name=link] .link--secondary-600{color:#5E5E5E !important}[name=link] .link--secondary-500{color:#5E5E5E !important}[name=link] .link--secondary-400{color:#8E8E8E !important}[name=link] .link--secondary-300{color:#A7A7A7 !important}[name=link] .link--secondary-200{color:#D7D7D7 !important}[name=link] .link--secondary-100{color:#EEEEEE !important}[name=link] .link--secondary-50{color:#EEEEEE !important}[name=link] .link--tertiary-900{color:#004885 !important}[name=link] .link--tertiary-800{color:#004885 !important}[name=link] .link--tertiary-700{color:#004885 !important}[name=link] .link--tertiary-600{color:#004885 !important}[name=link] .link--tertiary-500{color:#004885 !important}[name=link] .link--tertiary-400{color:#5C8AB1 !important}[name=link] .link--tertiary-300{color:#85A8C5 !important}[name=link] .link--tertiary-200{color:#C2D3E2 !important}[name=link] .link--tertiary-100{color:#EBF1F6 !important}[name=link] .link--tertiary-50{color:#EBF1F6 !important}[name=link] .link--quaternary-900{color:#5A8D00 !important}[name=link] .link--quaternary-800{color:#5A8D00 !important}[name=link] .link--quaternary-700{color:#5A8D00 !important}[name=link] .link--quaternary-600{color:#5A8D00 !important}[name=link] .link--quaternary-500{color:#96C11F !important}[name=link] .link--quaternary-400{color:#BCD870 !important}[name=link] .link--quaternary-300{color:#CDE294 !important}[name=link] .link--quaternary-200{color:#E6F0C9 !important}[name=link] .link--quaternary-100{color:#F7FAED !important}[name=link] .link--quaternary-50{color:#F7FAED !important}[name=link] .link--quinary-900{color:#C75300 !important}[name=link] .link--quinary-800{color:#C75300 !important}[name=link] .link--quinary-700{color:#C75300 !important}[name=link] .link--quinary-600{color:#C75300 !important}[name=link] .link--quinary-500{color:#EF7B0B !important}[name=link] .link--quinary-400{color:#FFA14C !important}[name=link] .link--quinary-300{color:#FFB673 !important}[name=link] .link--quinary-200{color:#FFDDBF !important}[name=link] .link--quinary-100{color:#FFF1E5 !important}[name=link] .link--quinary-50{color:#FFF1E5 !important}[name=link] .link--senary-900{color:#602A10 !important}[name=link] .link--senary-800{color:#95431D !important}[name=link] .link--senary-700{color:#B66E4D !important}[name=link] .link--senary-600{color:#B78670 !important}[name=link] .link--senary-500{color:#CAA08D !important}[name=link] .link--senary-400{color:#DEAE98 !important}[name=link] .link--senary-300{color:#EEC3AF !important}[name=link] .link--senary-200{color:#FAD5C5 !important}[name=link] .link--senary-100{color:#FFE9DF !important}[name=link] .link--senary-50{color:transparent !important}[name=link] .link--septenary-900{color:transparent !important}[name=link] .link--septenary-800{color:transparent !important}[name=link] .link--septenary-700{color:transparent !important}[name=link] .link--septenary-600{color:transparent !important}[name=link] .link--septenary-500{color:#6C887A !important}[name=link] .link--septenary-400{color:transparent !important}[name=link] .link--septenary-300{color:transparent !important}[name=link] .link--septenary-200{color:transparent !important}[name=link] .link--septenary-100{color:transparent !important}[name=link] .link--septenary-50{color:transparent !important}[name=link] .link--grey-900{color:#1D1D1D !important}[name=link] .link--grey-800{color:#333333 !important}[name=link] .link--grey-700{color:#4D4D4D !important}[name=link] .link--grey-600{color:#666666 !important}[name=link] .link--grey-500{color:#757575 !important}[name=link] .link--grey-400{color:#999999 !important}[name=link] .link--grey-300{color:#B3B3B3 !important}[name=link] .link--grey-200{color:#CCCCCC !important}[name=link] .link--grey-100{color:#E6E6E6 !important}[name=link] .link--grey-50{color:#F8F8F8 !important}[name=link] .link--contextual-success{color:#00856A !important}[name=link] .link--success{color:#00856A !important}[name=link] .link--contextual-success-light{color:#E5F2F0 !important}[name=link] .link--success-light{color:#E5F2F0 !important}[name=link] .link--contextual-info{color:#2899A8 !important}[name=link] .link--info{color:#2899A8 !important}[name=link] .link--contextual-info-light{color:#DBF6FF !important}[name=link] .link--info-light{color:#DBF6FF !important}[name=link] .link--contextual-warning{color:#F76700 !important}[name=link] .link--warning{color:#F76700 !important}[name=link] .link--contextual-warning-light{color:#FFF1E5 !important}[name=link] .link--warning-light{color:#FFF1E5 !important}[name=link] .link--contextual-error{color:#EB0000 !important}[name=link] .link--error{color:#EB0000 !important}[name=link] .link--contextual-error-light{color:#FDE5E5 !important}[name=link] .link--error-light{color:#FDE5E5 !important}[name=link] .link--pfm-blue{color:#55A1D3 !important}[name=link] .link--pfm-green{color:#8DDE54 !important}[name=link] .link--pfm-yellow{color:#FFC600 !important}[name=link] .link--pfm-orange{color:#FC912E !important}[name=link] .link--pfm-red{color:#DF5036 !important}[name=link] .link--external-bank-ing{color:#F58220 !important}[name=link] .link--external-bank-bil{color:#71308B !important}[name=link] .link--external-bank-bcee{color:#144093 !important}[name=link] .link--external-bank-post{color:#FABC0B !important}[name=link] .link--external-bank-raiffeisen{color:#112242 !important}[name=link] .link--external-bank-bnp-paribas{color:#00915A !important}[name=link] .link--white-15{color:rgba(255, 255, 255, 0.15) !important}[name=link] .link--white-25{color:rgba(255, 255, 255, 0.25) !important}[name=link] .link--white-50{color:rgba(255, 255, 255, 0.5) !important}[name=link] .link--brand-pfm-blue{color:#55A1D3 !important}[name=link] .link--brand-pfm-green{color:#8DDE54 !important}[name=link] .link--brand-pfm-yellow{color:#FFC600 !important}[name=link] .link--brand-pfm-orange{color:#FC912E !important}[name=link] .link--brand-pfm-red{color:#DF5036 !important}[name=link] .link--brand-expressive-green-light{color:#4FB482 !important}[name=link] .link--brand-expressive-green-dark{color:#133B2C !important}[name=link] .link--brand-expressive-blue-light{color:#1B8DC0 !important}[name=link] .link--brand-expressive-blue-dark{color:#0A324B !important}[name=link] .link--brand-expressive-yellow-light{color:#F0BE21 !important}[name=link] .link--brand-expressive-yellow-dark{color:#B77918 !important}[name=link] .link--brand-expressive-orange-light{color:#F3B969 !important}[name=link] .link--brand-expressive-orange-dark{color:#EF7D00 !important}[name=link] .link--brand-expressive-pink-light{color:#C03152 !important}[name=link] .link--brand-expressive-pink-dark{color:#4F0F15 !important}[name=link] .link--brand-expressive-red-light{color:#F7B7AF !important}[name=link] .link--brand-expressive-red-dark{color:#E62D32 !important}[name=link] .link--brand-expressive-orange-dark-900{color:#4D2800 !important}[name=link] .link--brand-expressive-orange-dark-800{color:#804200 !important}[name=link] .link--brand-expressive-orange-dark-700{color:#B35C00 !important}[name=link] .link--brand-expressive-orange-dark-600{color:#CC6A00 !important}[name=link] .link--brand-expressive-orange-dark-500{color:#EF7D00 !important}[name=link] .link--brand-expressive-orange-dark-400{color:#FC8823 !important}[name=link] .link--brand-expressive-orange-dark-300{color:#FC9E4C !important}[name=link] .link--brand-expressive-orange-dark-200{color:#FFB675 !important}[name=link] .link--brand-expressive-orange-dark-100{color:#FFD1A8 !important}[name=link] .link--brand-expressive-orange-dark-50{color:transparent !important}[name=link] .link--brand-expressive-blue-light-900{color:#0C4159 !important}[name=link] .link--brand-expressive-blue-light-800{color:#105373 !important}[name=link] .link--brand-expressive-blue-light-700{color:#14668C !important}[name=link] .link--brand-expressive-blue-light-600{color:#1779A6 !important}[name=link] .link--brand-expressive-blue-light-500{color:#1B8DC0 !important}[name=link] .link--brand-expressive-blue-light-400{color:#1D9AD1 !important}[name=link] .link--brand-expressive-blue-light-300{color:#2AAEEB !important}[name=link] .link--brand-expressive-blue-light-200{color:#56BFF0 !important}[name=link] .link--brand-expressive-blue-light-100{color:#7FCFF5 !important}[name=link] .link--brand-expressive-blue-light-50{color:transparent !important}[name=link] .link--brand-expressive-green-light-900{color:#224D37 !important}[name=link] .link--brand-expressive-green-light-800{color:#2D6649 !important}[name=link] .link--brand-expressive-green-light-700{color:#39805C !important}[name=link] .link--brand-expressive-green-light-600{color:#43996E !important}[name=link] .link--brand-expressive-green-light-500{color:#4FB482 !important}[name=link] .link--brand-expressive-green-light-400{color:#55C28C !important}[name=link] .link--brand-expressive-green-light-300{color:#60D199 !important}[name=link] .link--brand-expressive-green-light-200{color:#69DBA2 !important}[name=link] .link--brand-expressive-green-light-100{color:#85E6B5 !important}[name=link] .link--brand-expressive-green-light-50{color:transparent !important}[name=link] .link--brand-expressive-yellow-light-900{color:#6B550F !important}[name=link] .link--brand-expressive-yellow-light-800{color:#8F7214 !important}[name=link] .link--brand-expressive-yellow-light-700{color:#AD8B19 !important}[name=link] .link--brand-expressive-yellow-light-600{color:#D1A71D !important}[name=link] .link--brand-expressive-yellow-light-500{color:#F0BE21 !important}[name=link] .link--brand-expressive-yellow-light-400{color:#FCCA23 !important}[name=link] .link--brand-expressive-yellow-light-300{color:#FCD742 !important}[name=link] .link--brand-expressive-yellow-light-200{color:#FCDD60 !important}[name=link] .link--brand-expressive-yellow-light-100{color:#FCE483 !important}[name=link] .link--brand-expressive-yellow-light-50{color:transparent !important}[name=link] .link--brand-expressive-yellow-dark-900{color:#52360B !important}[name=link] .link--brand-expressive-yellow-dark-800{color:#6B470E !important}[name=link] .link--brand-expressive-yellow-dark-700{color:#855811 !important}[name=link] .link--brand-expressive-yellow-dark-600{color:#9E6915 !important}[name=link] .link--brand-expressive-yellow-dark-500{color:#B77918 !important}[name=link] .link--brand-expressive-yellow-dark-400{color:#D18A1B !important}[name=link] .link--brand-expressive-yellow-dark-300{color:#EB9B1F !important}[name=link] .link--brand-expressive-yellow-dark-200{color:#FAAA2D !important}[name=link] .link--brand-expressive-yellow-dark-100{color:#FABA55 !important}[name=link] .link--brand-expressive-yellow-dark-50{color:transparent !important}[name=link] .link--white-opacity-50{color:rgba(255, 255, 255, 0.5) !important}[name=link] .link--white{color:#FFFFFF !important}[name=link] .link--black{color:#000000 !important}[name=link] .link--left{text-align:left !important}[name=link] .link--center{text-align:center !important}[name=link] .link--right{text-align:right !important}[name=link] .link--capitalize{text-transform:capitalize !important}[name=link] .link--uppercase{text-transform:uppercase !important}[name=link] .link--lowercase{text-transform:lowercase !important}[name=link] .link--underline{text-decoration:underline !important}[name=link] .link--italic{font-style:italic !important}[name=link] .link--fit-content{height:inherit !important;line-height:unset !important}[name=link] .link--line-height-body-2{line-height:16px !important}[name=link] .link--weight-100{font-weight:100 !important}[name=link] .link--weight-200{font-weight:200 !important}[name=link] .link--weight-300{font-weight:300 !important}[name=link] .link--weight-400{font-weight:400 !important}[name=link] .link--weight-500{font-weight:500 !important}[name=link] .link--weight-600{font-weight:600 !important}[name=link] .link--weight-700{font-weight:700 !important}[name=link] .link--weight-800{font-weight:800 !important}[name=link] .link--weight-900{font-weight:900 !important}[name=link] .link--weight-thin{font-weight:100 !important}[name=link] .link--weight-extra-light{font-weight:200 !important}[name=link] .link--weight-light{font-weight:300 !important}[name=link] .link--weight-regular{font-weight:400 !important}[name=link] .link--weight-medium{font-weight:500 !important}[name=link] .link--weight-semi-bold{font-weight:600 !important}[name=link] .link--weight-bold{font-weight:700 !important}[name=link] .link--weight-extra-bold{font-weight:800 !important}[name=link] .link--style-normal{font-style:normal !important}[name=link] .link--style-italic{font-style:italic !important}[name=link] .link--style-oblique{font-style:oblique !important}[name=link] .link--font-family-1{font-family:\"Montserrat\", sans-serif !important}[name=link] .link--font-family-2{font-family:\"Montserrat\", sans-serif !important}.link{display:block;font-family:\"Montserrat\", sans-serif;text-decoration:none;outline:0 !important;transition:color 0.2s ease;-webkit-tap-highlight-color:transparent;cursor:pointer;}.link__content{position:relative;outline:0}.link--email{word-break:break-all}.link--no-underline:hover{text-decoration:none !important}.link--underline{text-decoration:underline !important}.link--underline:hover{text-decoration:none !important}.link--with-icon .link__content,.link--with-button .link__content{display:flex;align-items:center}.link--with-icon--left .link__content .text,.link--with-button--left .link__content .text{order:2}.link--with-icon--left .link__content .slot-icon,.link--with-icon--left .link__content .slot-button,.link--with-button--left .link__content .slot-icon,.link--with-button--left .link__content .slot-button{order:1}.link--with-icon--right .link__content .text,.link--with-button--right .link__content .text{order:1}.link--with-icon--right .link__content .slot-icon,.link--with-icon--right .link__content .slot-button,.link--with-button--right .link__content .slot-icon,.link--with-button--right .link__content .slot-button{order:2}.link--icon-only.link--round .link__content{border-radius:50%}[name=link] .link.link{font-size:14px;font-weight:400;}[name=link] .link.link .link__content{line-height:24px}[name=link] .link.link.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link] .link.link.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link] .link.link.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link] .link.link.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link] .link.link.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:14px}[name=link] .link.link--lg{font-size:14px;font-weight:400;}[name=link] .link.link--lg .link__content{line-height:24px}[name=link] .link.link--lg.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link] .link.link--lg.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link] .link.link--lg.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link] .link.link--lg.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link] .link.link--lg.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:14px}[name=link] .link.link--md{font-size:16px;font-weight:400;}[name=link] .link.link--md .link__content{line-height:24px}[name=link] .link.link--md.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link] .link.link--md.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link] .link.link--md.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link] .link.link--md.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link] .link.link--md.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:16px}[name=link] .link.link--sm{font-size:12px;font-weight:400;}[name=link] .link.link--sm .link__content{line-height:16px}[name=link] .link.link--sm.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link] .link.link--sm.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link] .link.link--sm.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link] .link.link--sm.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link] .link.link--sm.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:12px}[name=link] .link.link{color:#5E5E5E !important}@media (hover: hover){[name=link] .link.link:not([disabled]):hover{color:#383838 !important;-webkit-text-decoration:\"underline\" !important;text-decoration:\"underline\" !important}}[name=link] .link.link:focus{color:#1e1e1e !important}[name=link] .link.link:active{color:#454545 !important}[name=link] .link.link--white{color:#FFFFFF !important}@media (hover: hover){[name=link] .link.link--white:not([disabled]):hover{color:#d9d9d9 !important;-webkit-text-decoration:\"underline\" !important;text-decoration:\"underline\" !important}}[name=link] .link.link--white:focus{color:#bfbfbf !important}[name=link] .link.link--white:active{color:#e6e6e6 !important}[name=link] .link.link--tertiary{color:#004885 !important}@media (hover: hover){[name=link] .link.link--tertiary:not([disabled]):hover{color:#001f39 !important;text-decoration:none !important}}[name=link] .link.link--tertiary:focus{color:#000306 !important}[name=link] .link.link--tertiary:active{color:#002c52 !important}[name=link] .link.link--quinary{color:transparent !important}@media (hover: hover){[name=link] .link.link--quinary:not([disabled]):hover{color:rgba(0, 0, 0, 0) !important;-webkit-text-decoration:transparent !important;text-decoration:transparent !important}}[name=link] .link.link--quinary:focus{color:rgba(0, 0, 0, 0) !important}[name=link] .link.link--quinary:active{color:rgba(0, 0, 0, 0) !important}[name=link].theme--dark .link.link{font-size:14px;font-weight:400;}[name=link].theme--dark .link.link .link__content{line-height:24px}[name=link].theme--dark .link.link.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link].theme--dark .link.link.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link].theme--dark .link.link.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link].theme--dark .link.link.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link].theme--dark .link.link.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:14px}[name=link].theme--dark .link.link--lg{font-size:14px;font-weight:400;}[name=link].theme--dark .link.link--lg .link__content{line-height:24px}[name=link].theme--dark .link.link--lg.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link].theme--dark .link.link--lg.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link].theme--dark .link.link--lg.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link].theme--dark .link.link--lg.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link].theme--dark .link.link--lg.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:14px}[name=link].theme--dark .link.link--md{font-size:16px;font-weight:400;}[name=link].theme--dark .link.link--md .link__content{line-height:24px}[name=link].theme--dark .link.link--md.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link].theme--dark .link.link--md.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link].theme--dark .link.link--md.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link].theme--dark .link.link--md.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link].theme--dark .link.link--md.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:16px}[name=link].theme--dark .link.link--sm{font-size:12px;font-weight:400;}[name=link].theme--dark .link.link--sm .link__content{line-height:16px}[name=link].theme--dark .link.link--sm.link--with-button--left .link__content .slot-button{margin-right:8px}[name=link].theme--dark .link.link--sm.link--with-button--right .link__content .slot-button{margin-left:8px}[name=link].theme--dark .link.link--sm.link--with-icon--left .link__content .slot-icon{margin-right:8px}[name=link].theme--dark .link.link--sm.link--with-icon--right .link__content .slot-icon{margin-left:8px}[name=link].theme--dark .link.link--sm.link--icon-only .link__content{width:16px;height:16px;padding:0;font-size:12px}[name=link].theme--dark .link.link{color:#5E5E5E !important}@media (hover: hover){[name=link].theme--dark .link.link:not([disabled]):hover{color:#383838 !important;-webkit-text-decoration:\"underline\" !important;text-decoration:\"underline\" !important}}[name=link].theme--dark .link.link:focus{color:#1e1e1e !important}[name=link].theme--dark .link.link:active{color:#454545 !important}[name=link].theme--dark .link.link--white{color:#FFFFFF !important}@media (hover: hover){[name=link].theme--dark .link.link--white:not([disabled]):hover{color:#d9d9d9 !important;-webkit-text-decoration:\"underline\" !important;text-decoration:\"underline\" !important}}[name=link].theme--dark .link.link--white:focus{color:#bfbfbf !important}[name=link].theme--dark .link.link--white:active{color:#e6e6e6 !important}[name=link].theme--dark .link.link--tertiary{color:#004885 !important}@media (hover: hover){[name=link].theme--dark .link.link--tertiary:not([disabled]):hover{color:#001f39 !important;text-decoration:none !important}}[name=link].theme--dark .link.link--tertiary:focus{color:#000306 !important}[name=link].theme--dark .link.link--tertiary:active{color:#002c52 !important}[name=link].theme--dark .link.link--quinary{color:transparent !important}@media (hover: hover){[name=link].theme--dark .link.link--quinary:not([disabled]):hover{color:rgba(0, 0, 0, 0) !important;-webkit-text-decoration:transparent !important;text-decoration:transparent !important}}[name=link].theme--dark .link.link--quinary:focus{color:rgba(0, 0, 0, 0) !important}[name=link].theme--dark .link.link--quinary:active{color:rgba(0, 0, 0, 0) !important}";

const ENOVOSLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickLink = createEvent(this, "clickLink", 7);
    this.target = '_self';
    this.hasIcon = false;
    this.hasButton = false;
    this.classNames = {
      EL: 'link',
      CONTENT: '__content',
      UNDERLINE: '--underline',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  // Get icon placement
  getIconPlacement() {
    if (this.hasButton) {
      if (this.iconPosition === 'right') {
        return `${this.classNames.EL}--with-button ${this.classNames.EL}--with-button--right`;
      }
      return `${this.classNames.EL}--with-button ${this.classNames.EL}--with-button--left`;
    }
    else {
      if (this.hasIcon && this.content) {
        if (this.iconPosition === 'right') {
          return `${this.classNames.EL}--with-icon ${this.classNames.EL}--with-icon--right`;
        }
        return `${this.classNames.EL}--with-icon ${this.classNames.EL}--with-icon--left`;
      }
      if (this.hasIcon && !this.content) {
        return `${this.classNames.EL}--with-icon ${this.classNames.EL}--icon-only`;
      }
    }
    return '';
  }
  getEmailClass() {
    if (this.mailto) {
      return `${this.classNames.EL}--email`;
    }
    return '';
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  componentWillLoad() {
    this.hasIcon = this.el.querySelector('[slot=icon]') !== null ? true : false;
    this.hasButton = this.el.querySelector('[slot=button]') !== null ? true : false;
    // Fix IE Slot
    if (this.hasIcon && !this.hasButton) {
      const slotIconElement = this.el.querySelector('[slot=icon]');
      slotIconElement.classList.add('slot-icon');
    }
    if (this.hasButton) {
      const slotIconElement = this.el.querySelector('[slot=button]');
      slotIconElement.classList.add('slot-button');
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    this.el.setAttribute('name', this.classNames.EL);
    const link = this.el.querySelector('a');
    if (this.url) {
      link.setAttribute('href', this.url);
    }
    else if (this.mailto) {
      link.setAttribute('href', 'mailto:' + this.mailto);
    }
    else {
      link.setAttribute('href', '#');
      this._clickHandler = new TapEvent(this.el, e => {
        this.clickHandler(e);
      });
    }
  }
  clickHandler(e) {
    e.preventDefault();
    this.clickLink.emit(e);
  }
  // get the font-weight
  getStylesAttributes() {
    const classes = [];
    if (this.fontWeight === 'thin') {
      classes.push('weight-100');
    }
    if (this.fontWeight === 'extra-light') {
      classes.push('weight-200');
    }
    if (this.fontWeight === 'light') {
      classes.push('weight-300');
    }
    if (this.fontWeight === 'regular') {
      classes.push('weight-400');
    }
    if (this.fontWeight === 'medium') {
      classes.push('weight-500');
    }
    if (this.fontWeight === 'semi-bold') {
      classes.push('weight-600');
    }
    if (this.fontWeight === 'bold') {
      classes.push('weight-700');
    }
    if (this.fontWeight === 'extra-bold') {
      classes.push('weight-800');
    }
    if (this.fontWeight === 'black') {
      classes.push('weight-900');
    }
    return this.styles + ' ' + classes.join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("a", { class: [
        this.classNames.EL,
        this.getIconPlacement(),
        this.getEmailClass(),
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.getStylesAttributes(), this.classNames.EL),
        (this.underline) ? `${this.classNames.EL}${this.classNames.UNDERLINE}` : '',
        LayoutPropsHelper.getStyles(this.styles, ''),
      ].join(' '), onMouseOver: ev => {
        if (this.hasButton) {
          ev.preventDefault();
          this.el.querySelector(`[name="button"]`).setAttribute('is-hover', 'is-hover');
        }
      }, onMouseLeave: ev => {
        if (this.hasButton) {
          ev.preventDefault();
          this.el.querySelector(`[name="button"]`).removeAttribute('is-hover');
        }
      }, target: this.target }, h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, tabIndex: -1 }, h("slot", { name: "icon" }), h("slot", { name: "button" }), h("div", { class: "text", innerHTML: (this.content ? this.content : (this.url ? this.url : this.mailto)) }))));
  }
  get el() { return getElement(this); }
};
ENOVOSLink.style = linkCss;

const positionedBadgeCss = "[name=positioned-badge] .positioned-badge{position:relative}[name=positioned-badge] .positioned-badge .positioned-badge__badge{position:absolute;z-index:1}[name=positioned-badge] .positioned-badge--on-top .positioned-badge__badge{top:0}[name=positioned-badge] .positioned-badge--on-middle .positioned-badge__badge{top:50%}[name=positioned-badge] .positioned-badge--on-bottom .positioned-badge__badge{top:100%}[name=positioned-badge] .positioned-badge--on-left .positioned-badge__badge{left:0}[name=positioned-badge] .positioned-badge--on-center .positioned-badge__badge{left:50%}[name=positioned-badge] .positioned-badge--on-right .positioned-badge__badge{left:100%}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--1 .positioned-badge__badge{margin-left:-8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--2 .positioned-badge__badge{margin-left:-16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--3 .positioned-badge__badge{margin-left:-24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--4 .positioned-badge__badge{margin-left:-32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--5 .positioned-badge__badge{margin-left:-40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--6 .positioned-badge__badge{margin-left:-48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--7 .positioned-badge__badge{margin-left:-56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--8 .positioned-badge__badge{margin-left:-64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--9 .positioned-badge__badge{margin-left:-72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--10 .positioned-badge__badge{margin-left:-80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--11 .positioned-badge__badge{margin-left:-88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--12 .positioned-badge__badge{margin-left:-96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--13 .positioned-badge__badge{margin-left:-104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--14 .positioned-badge__badge{margin-left:-112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--15 .positioned-badge__badge{margin-left:-120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--margin--16 .positioned-badge__badge{margin-left:-128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--0 .positioned-badge__badge{margin-top:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--1 .positioned-badge__badge{margin-top:-8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--2 .positioned-badge__badge{margin-top:-16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--3 .positioned-badge__badge{margin-top:-24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--4 .positioned-badge__badge{margin-top:-32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--5 .positioned-badge__badge{margin-top:-40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--6 .positioned-badge__badge{margin-top:-48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--7 .positioned-badge__badge{margin-top:-56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--8 .positioned-badge__badge{margin-top:-64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--9 .positioned-badge__badge{margin-top:-72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--10 .positioned-badge__badge{margin-top:-80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--11 .positioned-badge__badge{margin-top:-88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--12 .positioned-badge__badge{margin-top:-96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--13 .positioned-badge__badge{margin-top:-104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--14 .positioned-badge__badge{margin-top:-112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--15 .positioned-badge__badge{margin-top:-120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--16 .positioned-badge__badge{margin-top:-128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--1 .positioned-badge__badge{margin-left:8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--2 .positioned-badge__badge{margin-left:16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--3 .positioned-badge__badge{margin-left:24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--4 .positioned-badge__badge{margin-left:32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--5 .positioned-badge__badge{margin-left:40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--6 .positioned-badge__badge{margin-left:48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--7 .positioned-badge__badge{margin-left:56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--8 .positioned-badge__badge{margin-left:64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--9 .positioned-badge__badge{margin-left:72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--10 .positioned-badge__badge{margin-left:80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--11 .positioned-badge__badge{margin-left:88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--12 .positioned-badge__badge{margin-left:96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--13 .positioned-badge__badge{margin-left:104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--14 .positioned-badge__badge{margin-left:112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--15 .positioned-badge__badge{margin-left:120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--margin--16 .positioned-badge__badge{margin-left:128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right .positioned-badge__badge{transform:translate(0, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(0, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--1 .positioned-badge__badge{margin-left:-8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--2 .positioned-badge__badge{margin-left:-16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--3 .positioned-badge__badge{margin-left:-24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--4 .positioned-badge__badge{margin-left:-32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--5 .positioned-badge__badge{margin-left:-40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--6 .positioned-badge__badge{margin-left:-48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--7 .positioned-badge__badge{margin-left:-56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--8 .positioned-badge__badge{margin-left:-64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--9 .positioned-badge__badge{margin-left:-72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--10 .positioned-badge__badge{margin-left:-80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--11 .positioned-badge__badge{margin-left:-88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--12 .positioned-badge__badge{margin-left:-96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--13 .positioned-badge__badge{margin-left:-104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--14 .positioned-badge__badge{margin-left:-112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--15 .positioned-badge__badge{margin-left:-120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--margin--16 .positioned-badge__badge{margin-left:-128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--1 .positioned-badge__badge{margin-left:8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--2 .positioned-badge__badge{margin-left:16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--3 .positioned-badge__badge{margin-left:24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--4 .positioned-badge__badge{margin-left:32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--5 .positioned-badge__badge{margin-left:40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--6 .positioned-badge__badge{margin-left:48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--7 .positioned-badge__badge{margin-left:56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--8 .positioned-badge__badge{margin-left:64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--9 .positioned-badge__badge{margin-left:72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--10 .positioned-badge__badge{margin-left:80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--11 .positioned-badge__badge{margin-left:88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--12 .positioned-badge__badge{margin-left:96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--13 .positioned-badge__badge{margin-left:104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--14 .positioned-badge__badge{margin-left:112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--15 .positioned-badge__badge{margin-left:120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--margin--16 .positioned-badge__badge{margin-left:128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right .positioned-badge__badge{transform:translate(0, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(0, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--1 .positioned-badge__badge{margin-left:-8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--2 .positioned-badge__badge{margin-left:-16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--3 .positioned-badge__badge{margin-left:-24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--4 .positioned-badge__badge{margin-left:-32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--5 .positioned-badge__badge{margin-left:-40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--6 .positioned-badge__badge{margin-left:-48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--7 .positioned-badge__badge{margin-left:-56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--8 .positioned-badge__badge{margin-left:-64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--9 .positioned-badge__badge{margin-left:-72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--10 .positioned-badge__badge{margin-left:-80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--11 .positioned-badge__badge{margin-left:-88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--12 .positioned-badge__badge{margin-left:-96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--13 .positioned-badge__badge{margin-left:-104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--14 .positioned-badge__badge{margin-left:-112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--15 .positioned-badge__badge{margin-left:-120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--margin--16 .positioned-badge__badge{margin-left:-128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--0 .positioned-badge__badge{margin-top:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--1 .positioned-badge__badge{margin-top:8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--2 .positioned-badge__badge{margin-top:16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--3 .positioned-badge__badge{margin-top:24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--4 .positioned-badge__badge{margin-top:32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--5 .positioned-badge__badge{margin-top:40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--6 .positioned-badge__badge{margin-top:48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--7 .positioned-badge__badge{margin-top:56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--8 .positioned-badge__badge{margin-top:64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--9 .positioned-badge__badge{margin-top:72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--10 .positioned-badge__badge{margin-top:80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--11 .positioned-badge__badge{margin-top:88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--12 .positioned-badge__badge{margin-top:96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--13 .positioned-badge__badge{margin-top:104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--14 .positioned-badge__badge{margin-top:112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--15 .positioned-badge__badge{margin-top:120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--16 .positioned-badge__badge{margin-top:128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--0 .positioned-badge__badge{margin-left:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--1 .positioned-badge__badge{margin-left:8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--2 .positioned-badge__badge{margin-left:16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--3 .positioned-badge__badge{margin-left:24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--4 .positioned-badge__badge{margin-left:32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--5 .positioned-badge__badge{margin-left:40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--6 .positioned-badge__badge{margin-left:48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--7 .positioned-badge__badge{margin-left:56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--8 .positioned-badge__badge{margin-left:64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--9 .positioned-badge__badge{margin-left:72px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--10 .positioned-badge__badge{margin-left:80px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--11 .positioned-badge__badge{margin-left:88px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--12 .positioned-badge__badge{margin-left:96px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--13 .positioned-badge__badge{margin-left:104px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--14 .positioned-badge__badge{margin-left:112px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--15 .positioned-badge__badge{margin-left:120px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--margin--16 .positioned-badge__badge{margin-left:128px}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right .positioned-badge__badge{transform:translate(0, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-outside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(0, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-left .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-right .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, 0)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-left .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-right .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-left .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-right .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-centered.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-left .positioned-badge__badge{transform:translate(0%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(0%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--0 .positioned-badge__badge{margin-top:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--1 .positioned-badge__badge{margin-top:-4px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--2 .positioned-badge__badge{margin-top:-8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--3 .positioned-badge__badge{margin-top:-12px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--4 .positioned-badge__badge{margin-top:-16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--5 .positioned-badge__badge{margin-top:-20px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--6 .positioned-badge__badge{margin-top:-24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--7 .positioned-badge__badge{margin-top:-28px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--8 .positioned-badge__badge{margin-top:-32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--9 .positioned-badge__badge{margin-top:-36px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--10 .positioned-badge__badge{margin-top:-40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--11 .positioned-badge__badge{margin-top:-44px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--12 .positioned-badge__badge{margin-top:-48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--13 .positioned-badge__badge{margin-top:-52px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--14 .positioned-badge__badge{margin-top:-56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--15 .positioned-badge__badge{margin-top:-60px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--margin--16 .positioned-badge__badge{margin-top:-64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-right .positioned-badge__badge{transform:translate(-100%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-top.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, 0%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-left .positioned-badge__badge{transform:translate(0%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(0%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-right .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-middle.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, -50%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-left .positioned-badge__badge{transform:translate(0%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-left.positioned-badge--corner .positioned-badge__badge{transform:translate(0%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--0 .positioned-badge__badge{margin-top:0px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--1 .positioned-badge__badge{margin-top:4px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--2 .positioned-badge__badge{margin-top:8px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--3 .positioned-badge__badge{margin-top:12px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--4 .positioned-badge__badge{margin-top:16px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--5 .positioned-badge__badge{margin-top:20px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--6 .positioned-badge__badge{margin-top:24px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--7 .positioned-badge__badge{margin-top:28px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--8 .positioned-badge__badge{margin-top:32px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--9 .positioned-badge__badge{margin-top:36px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--10 .positioned-badge__badge{margin-top:40px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--11 .positioned-badge__badge{margin-top:44px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--12 .positioned-badge__badge{margin-top:48px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--13 .positioned-badge__badge{margin-top:52px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--14 .positioned-badge__badge{margin-top:56px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--15 .positioned-badge__badge{margin-top:60px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--margin--16 .positioned-badge__badge{margin-top:64px}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-center.positioned-badge--corner .positioned-badge__badge{transform:translate(-50%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-right .positioned-badge__badge{transform:translate(-100%, -100%)}[name=positioned-badge] .positioned-badge.positioned-badge--on-inside.positioned-badge--on-bottom.positioned-badge--on-right.positioned-badge--corner .positioned-badge__badge{transform:translate(-100%, -100%)}";

const ENOVOSPositionedBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'top right';
    this.alignment = 'centered';
    this.availableVerticalPosition = ['top', 'middle', 'bottom'];
    this.availableHorizontalPosition = ['left', 'center', 'right'];
    this.availableAlignment = ['outside', 'centered', 'inside'];
    this.classNames = {
      EL: 'positioned-badge',
      BADGE: '__badge',
      ON: '--on-',
      MARGIN: '--margin',
    };
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
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    this.availableVerticalPosition.concat(this.availableHorizontalPosition.concat(this.availableAlignment)).map(itemClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}${this.classNames.ON}${itemClass}`);
    });
    const availableVerticalPositionClasses = [];
    const availableHorizontalPositionClasses = [];
    const availablePositionClasses = this.position.split(' ');
    availablePositionClasses.map(availablePositionClass => {
      if (this.availableVerticalPosition.includes(availablePositionClass)) {
        availableVerticalPositionClasses.push(availablePositionClass);
      }
      if (this.availableHorizontalPosition.includes(availablePositionClass)) {
        availableHorizontalPositionClasses.push(availablePositionClass);
      }
    });
    // Set default top right if wrong/missing values are set
    if (availableVerticalPositionClasses.length === 0) {
      availableVerticalPositionClasses.push(this.availableVerticalPosition[0]);
    }
    if (availableHorizontalPositionClasses.length === 0) {
      availableHorizontalPositionClasses.push(this.availableHorizontalPosition[2]);
    }
    // Set final position
    availableVerticalPositionClasses.concat(availableHorizontalPositionClasses).map(availablePositionClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availablePositionClass}`);
    });
    const availableAlignmentClasses = this.alignment.split(' ');
    availableAlignmentClasses.map(availableAlignmentClass => {
      if (this.availableAlignment.includes(availableAlignmentClass)) {
        this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availableAlignmentClass}`);
      }
    });
    // Set additional margin
    if (this.additionalMargin || this.additionalMargin !== undefined) {
      let additionalMargin = this.additionalMargin;
      // By default it's possible to set only the additionalMargin empty. Init default value for empty additionalMargin
      if (this.additionalMargin.trim() === '') {
        additionalMargin = (this.alignment === 'outside') ? '16x' : '1x';
      }
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(ComponentPropsHelper.getSize(additionalMargin, `${this.classNames.EL}${this.classNames.MARGIN}`));
    }
    if (this.corner) {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}--corner`);
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
      ].join(' ') }, h("eds-badge", { class: `${this.classNames.EL}${this.classNames.BADGE}`, text: this.text, size: this.size, rounded: this.rounded, styles: this.styles }), h("slot", null)));
  }
  get el() { return getElement(this); }
};
ENOVOSPositionedBadge.style = positionedBadgeCss;

const positionedIconCss = "[name=positioned-icon] .positioned-icon{position:relative}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary{background-color:#F76700 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary{background-color:#96C11F !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary{background-color:#EF7B0B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary{background-color:#CAA08D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary{background-color:#6C887A !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey{background-color:#757575 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-900{background-color:#F76700 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-800{background-color:#F76700 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-700{background-color:#D52B1E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-600{background-color:#C75300 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-500{background-color:#F76700 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-400{background-color:#FFA14C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-300{background-color:#FFB673 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-200{background-color:#FFDDBF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-100{background-color:#FFF1E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--primary-50{background-color:#FFF1E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-900{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-800{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-700{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-600{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-500{background-color:#5E5E5E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-400{background-color:#8E8E8E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-300{background-color:#A7A7A7 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-200{background-color:#D7D7D7 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-100{background-color:#EEEEEE !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--secondary-50{background-color:#EEEEEE !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-900{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-800{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-700{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-600{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-500{background-color:#004885 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-400{background-color:#5C8AB1 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-300{background-color:#85A8C5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-200{background-color:#C2D3E2 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-100{background-color:#EBF1F6 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--tertiary-50{background-color:#EBF1F6 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-900{background-color:#5A8D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-800{background-color:#5A8D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-700{background-color:#5A8D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-600{background-color:#5A8D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-500{background-color:#96C11F !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-400{background-color:#BCD870 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-300{background-color:#CDE294 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-200{background-color:#E6F0C9 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-100{background-color:#F7FAED !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quaternary-50{background-color:#F7FAED !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-900{background-color:#C75300 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-800{background-color:#C75300 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-700{background-color:#C75300 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-600{background-color:#C75300 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-500{background-color:#EF7B0B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-400{background-color:#FFA14C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-300{background-color:#FFB673 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-200{background-color:#FFDDBF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-100{background-color:#FFF1E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--quinary-50{background-color:#FFF1E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-900{background-color:#602A10 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-800{background-color:#95431D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-700{background-color:#B66E4D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-600{background-color:#B78670 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-500{background-color:#CAA08D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-400{background-color:#DEAE98 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-300{background-color:#EEC3AF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-200{background-color:#FAD5C5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-100{background-color:#FFE9DF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--senary-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-900{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-800{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-700{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-600{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-500{background-color:#6C887A !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-400{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-300{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-200{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-100{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--septenary-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-900{background-color:#1D1D1D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-800{background-color:#333333 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-700{background-color:#4D4D4D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-600{background-color:#666666 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-500{background-color:#757575 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-400{background-color:#999999 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-300{background-color:#B3B3B3 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-200{background-color:#CCCCCC !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-100{background-color:#E6E6E6 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--grey-50{background-color:#F8F8F8 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-success{background-color:#00856A !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-info{background-color:#2899A8 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-info-light{background-color:#DBF6FF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-warning{background-color:#F76700 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-error{background-color:#EB0000 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--pfm-blue{background-color:#55A1D3 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--pfm-green{background-color:#8DDE54 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--pfm-yellow{background-color:#FFC600 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--pfm-orange{background-color:#FC912E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--pfm-red{background-color:#DF5036 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-ing{background-color:#F58220 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-bil{background-color:#71308B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-bcee{background-color:#144093 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-post{background-color:#FABC0B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-pfm-orange{background-color:#FC912E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-pfm-red{background-color:#DF5036 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--white{background-color:#FFFFFF !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--black{background-color:#000000 !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon--bg--transparent{background-color:transparent !important}[name=positioned-icon] .positioned-icon--has-background-color .positioned-icon__icon{border-radius:50%;text-align:center}[name=positioned-icon] .positioned-icon .positioned-icon__icon{position:absolute;z-index:1}[name=positioned-icon] .positioned-icon--on-top .positioned-icon__icon{top:0}[name=positioned-icon] .positioned-icon--on-middle .positioned-icon__icon{top:50%}[name=positioned-icon] .positioned-icon--on-bottom .positioned-icon__icon{top:100%}[name=positioned-icon] .positioned-icon--on-left .positioned-icon__icon{left:0}[name=positioned-icon] .positioned-icon--on-center .positioned-icon__icon{left:50%}[name=positioned-icon] .positioned-icon--on-right .positioned-icon__icon{left:100%}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--1 .positioned-icon__icon{margin-left:-8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--2 .positioned-icon__icon{margin-left:-16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--3 .positioned-icon__icon{margin-left:-24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--4 .positioned-icon__icon{margin-left:-32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--5 .positioned-icon__icon{margin-left:-40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--6 .positioned-icon__icon{margin-left:-48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--7 .positioned-icon__icon{margin-left:-56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--8 .positioned-icon__icon{margin-left:-64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--9 .positioned-icon__icon{margin-left:-72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--10 .positioned-icon__icon{margin-left:-80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--11 .positioned-icon__icon{margin-left:-88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--12 .positioned-icon__icon{margin-left:-96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--13 .positioned-icon__icon{margin-left:-104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--14 .positioned-icon__icon{margin-left:-112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--15 .positioned-icon__icon{margin-left:-120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--margin--16 .positioned-icon__icon{margin-left:-128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--0 .positioned-icon__icon{margin-top:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--1 .positioned-icon__icon{margin-top:-8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--2 .positioned-icon__icon{margin-top:-16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--3 .positioned-icon__icon{margin-top:-24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--4 .positioned-icon__icon{margin-top:-32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--5 .positioned-icon__icon{margin-top:-40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--6 .positioned-icon__icon{margin-top:-48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--7 .positioned-icon__icon{margin-top:-56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--8 .positioned-icon__icon{margin-top:-64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--9 .positioned-icon__icon{margin-top:-72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--10 .positioned-icon__icon{margin-top:-80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--11 .positioned-icon__icon{margin-top:-88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--12 .positioned-icon__icon{margin-top:-96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--13 .positioned-icon__icon{margin-top:-104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--14 .positioned-icon__icon{margin-top:-112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--15 .positioned-icon__icon{margin-top:-120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--16 .positioned-icon__icon{margin-top:-128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--1 .positioned-icon__icon{margin-left:8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--2 .positioned-icon__icon{margin-left:16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--3 .positioned-icon__icon{margin-left:24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--4 .positioned-icon__icon{margin-left:32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--5 .positioned-icon__icon{margin-left:40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--6 .positioned-icon__icon{margin-left:48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--7 .positioned-icon__icon{margin-left:56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--8 .positioned-icon__icon{margin-left:64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--9 .positioned-icon__icon{margin-left:72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--10 .positioned-icon__icon{margin-left:80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--11 .positioned-icon__icon{margin-left:88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--12 .positioned-icon__icon{margin-left:96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--13 .positioned-icon__icon{margin-left:104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--14 .positioned-icon__icon{margin-left:112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--15 .positioned-icon__icon{margin-left:120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--margin--16 .positioned-icon__icon{margin-left:128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right .positioned-icon__icon{transform:translate(0, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(0, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--1 .positioned-icon__icon{margin-left:-8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--2 .positioned-icon__icon{margin-left:-16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--3 .positioned-icon__icon{margin-left:-24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--4 .positioned-icon__icon{margin-left:-32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--5 .positioned-icon__icon{margin-left:-40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--6 .positioned-icon__icon{margin-left:-48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--7 .positioned-icon__icon{margin-left:-56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--8 .positioned-icon__icon{margin-left:-64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--9 .positioned-icon__icon{margin-left:-72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--10 .positioned-icon__icon{margin-left:-80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--11 .positioned-icon__icon{margin-left:-88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--12 .positioned-icon__icon{margin-left:-96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--13 .positioned-icon__icon{margin-left:-104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--14 .positioned-icon__icon{margin-left:-112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--15 .positioned-icon__icon{margin-left:-120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--margin--16 .positioned-icon__icon{margin-left:-128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--1 .positioned-icon__icon{margin-left:8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--2 .positioned-icon__icon{margin-left:16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--3 .positioned-icon__icon{margin-left:24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--4 .positioned-icon__icon{margin-left:32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--5 .positioned-icon__icon{margin-left:40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--6 .positioned-icon__icon{margin-left:48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--7 .positioned-icon__icon{margin-left:56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--8 .positioned-icon__icon{margin-left:64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--9 .positioned-icon__icon{margin-left:72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--10 .positioned-icon__icon{margin-left:80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--11 .positioned-icon__icon{margin-left:88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--12 .positioned-icon__icon{margin-left:96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--13 .positioned-icon__icon{margin-left:104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--14 .positioned-icon__icon{margin-left:112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--15 .positioned-icon__icon{margin-left:120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--margin--16 .positioned-icon__icon{margin-left:128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right .positioned-icon__icon{transform:translate(0, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(0, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--1 .positioned-icon__icon{margin-left:-8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--2 .positioned-icon__icon{margin-left:-16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--3 .positioned-icon__icon{margin-left:-24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--4 .positioned-icon__icon{margin-left:-32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--5 .positioned-icon__icon{margin-left:-40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--6 .positioned-icon__icon{margin-left:-48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--7 .positioned-icon__icon{margin-left:-56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--8 .positioned-icon__icon{margin-left:-64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--9 .positioned-icon__icon{margin-left:-72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--10 .positioned-icon__icon{margin-left:-80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--11 .positioned-icon__icon{margin-left:-88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--12 .positioned-icon__icon{margin-left:-96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--13 .positioned-icon__icon{margin-left:-104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--14 .positioned-icon__icon{margin-left:-112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--15 .positioned-icon__icon{margin-left:-120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--margin--16 .positioned-icon__icon{margin-left:-128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--0 .positioned-icon__icon{margin-top:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--1 .positioned-icon__icon{margin-top:8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--2 .positioned-icon__icon{margin-top:16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--3 .positioned-icon__icon{margin-top:24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--4 .positioned-icon__icon{margin-top:32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--5 .positioned-icon__icon{margin-top:40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--6 .positioned-icon__icon{margin-top:48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--7 .positioned-icon__icon{margin-top:56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--8 .positioned-icon__icon{margin-top:64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--9 .positioned-icon__icon{margin-top:72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--10 .positioned-icon__icon{margin-top:80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--11 .positioned-icon__icon{margin-top:88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--12 .positioned-icon__icon{margin-top:96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--13 .positioned-icon__icon{margin-top:104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--14 .positioned-icon__icon{margin-top:112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--15 .positioned-icon__icon{margin-top:120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--16 .positioned-icon__icon{margin-top:128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--0 .positioned-icon__icon{margin-left:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--1 .positioned-icon__icon{margin-left:8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--2 .positioned-icon__icon{margin-left:16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--3 .positioned-icon__icon{margin-left:24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--4 .positioned-icon__icon{margin-left:32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--5 .positioned-icon__icon{margin-left:40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--6 .positioned-icon__icon{margin-left:48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--7 .positioned-icon__icon{margin-left:56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--8 .positioned-icon__icon{margin-left:64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--9 .positioned-icon__icon{margin-left:72px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--10 .positioned-icon__icon{margin-left:80px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--11 .positioned-icon__icon{margin-left:88px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--12 .positioned-icon__icon{margin-left:96px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--13 .positioned-icon__icon{margin-left:104px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--14 .positioned-icon__icon{margin-left:112px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--15 .positioned-icon__icon{margin-left:120px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--margin--16 .positioned-icon__icon{margin-left:128px}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right .positioned-icon__icon{transform:translate(0, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-outside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(0, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-left .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-right .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, 0)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-left .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-right .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-left .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-right .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-centered.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-left .positioned-icon__icon{transform:translate(0%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(0%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--0 .positioned-icon__icon{margin-top:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--1 .positioned-icon__icon{margin-top:-4px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--2 .positioned-icon__icon{margin-top:-8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--3 .positioned-icon__icon{margin-top:-12px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--4 .positioned-icon__icon{margin-top:-16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--5 .positioned-icon__icon{margin-top:-20px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--6 .positioned-icon__icon{margin-top:-24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--7 .positioned-icon__icon{margin-top:-28px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--8 .positioned-icon__icon{margin-top:-32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--9 .positioned-icon__icon{margin-top:-36px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--10 .positioned-icon__icon{margin-top:-40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--11 .positioned-icon__icon{margin-top:-44px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--12 .positioned-icon__icon{margin-top:-48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--13 .positioned-icon__icon{margin-top:-52px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--14 .positioned-icon__icon{margin-top:-56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--15 .positioned-icon__icon{margin-top:-60px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--margin--16 .positioned-icon__icon{margin-top:-64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-right .positioned-icon__icon{transform:translate(-100%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-top.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, 0%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-left .positioned-icon__icon{transform:translate(0%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(0%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-right .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-middle.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, -50%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-left .positioned-icon__icon{transform:translate(0%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-left.positioned-icon--corner .positioned-icon__icon{transform:translate(0%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--0 .positioned-icon__icon{margin-top:0px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--1 .positioned-icon__icon{margin-top:4px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--2 .positioned-icon__icon{margin-top:8px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--3 .positioned-icon__icon{margin-top:12px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--4 .positioned-icon__icon{margin-top:16px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--5 .positioned-icon__icon{margin-top:20px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--6 .positioned-icon__icon{margin-top:24px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--7 .positioned-icon__icon{margin-top:28px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--8 .positioned-icon__icon{margin-top:32px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--9 .positioned-icon__icon{margin-top:36px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--10 .positioned-icon__icon{margin-top:40px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--11 .positioned-icon__icon{margin-top:44px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--12 .positioned-icon__icon{margin-top:48px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--13 .positioned-icon__icon{margin-top:52px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--14 .positioned-icon__icon{margin-top:56px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--15 .positioned-icon__icon{margin-top:60px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--margin--16 .positioned-icon__icon{margin-top:64px}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-center.positioned-icon--corner .positioned-icon__icon{transform:translate(-50%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-right .positioned-icon__icon{transform:translate(-100%, -100%)}[name=positioned-icon] .positioned-icon.positioned-icon--on-inside.positioned-icon--on-bottom.positioned-icon--on-right.positioned-icon--corner .positioned-icon__icon{transform:translate(-100%, -100%)}";

const ENOVOSPositionedIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = 'top right';
    this.alignment = 'centered';
    this.availableVerticalPosition = ['top', 'middle', 'bottom'];
    this.availableHorizontalPosition = ['left', 'center', 'right'];
    this.availableAlignment = ['outside', 'centered', 'inside'];
    this.classNames = {
      EL: 'positioned-icon',
      ICON: '__icon',
      ON: '--on-',
      MARGIN: '--margin',
    };
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
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    this.availableVerticalPosition.concat(this.availableHorizontalPosition.concat(this.availableAlignment)).map(itemClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}${this.classNames.ON}${itemClass}`);
    });
    const availableVerticalPositionClasses = [];
    const availableHorizontalPositionClasses = [];
    const availablePositionClasses = this.position.split(' ');
    availablePositionClasses.map(availablePositionClass => {
      if (this.availableVerticalPosition.includes(availablePositionClass)) {
        availableVerticalPositionClasses.push(availablePositionClass);
      }
      if (this.availableHorizontalPosition.includes(availablePositionClass)) {
        availableHorizontalPositionClasses.push(availablePositionClass);
      }
    });
    // Set default top right if wrong/missing values are set
    if (availableVerticalPositionClasses.length === 0) {
      availableVerticalPositionClasses.push(this.availableVerticalPosition[0]);
    }
    if (availableHorizontalPositionClasses.length === 0) {
      availableHorizontalPositionClasses.push(this.availableHorizontalPosition[2]);
    }
    // Set final position
    availableVerticalPositionClasses.concat(availableHorizontalPositionClasses).map(availablePositionClass => {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availablePositionClass}`);
    });
    const availableAlignmentClasses = this.alignment.split(' ');
    availableAlignmentClasses.map(availableAlignmentClass => {
      if (this.availableAlignment.includes(availableAlignmentClass)) {
        this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}${this.classNames.ON}${availableAlignmentClass}`);
      }
    });
    // Set additional margin
    if (this.additionalMargin || this.additionalMargin !== undefined) {
      let additionalMargin = this.additionalMargin;
      // By default it's possible to set only the additionalMargin empty. Init default value for empty additionalMargin
      if (this.additionalMargin.trim() === '') {
        additionalMargin = (this.alignment === 'outside') ? '16x' : '1x';
      }
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(ComponentPropsHelper.getSize(additionalMargin, `${this.classNames.EL}${this.classNames.MARGIN}`));
    }
    if (this.corner) {
      this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}--corner`);
    }
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.backgroundColor ? `${this.classNames.EL}--has-background-color` : '',
      ].join(' ') }, h("eds-icon", { class: [
        `${this.classNames.EL}${this.classNames.ICON}`,
        this.backgroundColor ? ComponentPropsHelper.setGlobalStyles(`bg--${this.backgroundColor}`, `${this.classNames.EL}`) : '',
      ].join(' '), size: this.size, styles: this.styles, icon: this.icon }), h("slot", null)));
  }
  get el() { return getElement(this); }
};
ENOVOSPositionedIcon.style = positionedIconCss;

const radioButtonCss = "[name=radio-button] .radio-button__shape:after,[name=radio-button] .radio-button__shape:not(.radio-button__shape--with-icon):before{position:absolute;left:50%;top:50%;border:0 solid transparent;background:transparent;content:\"\";transform:translate(-50%, -50%);transition:all 150ms 0s ease}[name=radio-button] .radio-button{position:relative;display:flex;align-items:center;outline:none}[name=radio-button] .radio-button__shape{position:relative;display:block;border-style:solid;transition:background-color 150ms 0s ease;cursor:pointer}[name=radio-button] .radio-button__shape__icon{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}[name=radio-button] .radio-button__shape--with-icon .radio-button__shape__icon{display:flex;align-items:center;justify-content:center;overflow:hidden;opacity:0;transition:opacity 150ms 0s ease}[name=radio-button] .radio-button label{font-family:\"Montserrat\", sans-serif;transition:font-weight 150ms 0s ease;cursor:pointer}[name=radio-button] .radio-button input{position:absolute;width:0;height:0;opacity:0}[name=radio-button] .radio-button input:checked+.radio-button__shape--with-icon .radio-button__shape__icon{opacity:1}[name=radio-button] .radio-button.radio-button--disabled{cursor:not-allowed}[name=radio-button] .radio-button.radio-button--disabled .radio-button__shape,[name=radio-button] .radio-button.radio-button--disabled label,[name=radio-button] .radio-button.radio-button--disabled input{pointer-events:none}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):hover .radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):hover .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):hover .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):hover input:checked+.radio-button__shape{border-color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):focus .radio-button__shape{border-color:#F76700;background-color:inherit}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):focus .radio-button__shape:after{border-color:inherit}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):focus .radio-button__shape__icon{color:inherit}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):active .radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):active .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled):active .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#F76700}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button.radio-button--disabled .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button.radio-button--disabled .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button.radio-button--disabled .radio-button__shape__icon{color:#5E5E5E}[name=radio-button] .radio-button.radio-button.radio-button--disabled label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button.radio-button--disabled input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#5E5E5E}[name=radio-button] .radio-button.radio-button.radio-button--disabled input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):hover .radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):hover .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):hover .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):hover input:checked+.radio-button__shape{border-color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):focus .radio-button__shape{border-color:#F76700;background-color:inherit}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):focus .radio-button__shape:after{border-color:inherit}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):focus .radio-button__shape__icon{color:inherit}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):active .radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):active .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled):active .radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) input:checked+.radio-button__shape{border-color:#F76700;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) input:checked+.radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) input:checked+.radio-button__shape__icon{color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#F76700}[name=radio-button] .radio-button.radio-button--primary:not(.radio-button--disabled) input:checked+.radio-button__shape+label{color:#F76700}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled .radio-button__shape__icon{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#5E5E5E}[name=radio-button] .radio-button.radio-button--primary.radio-button--disabled input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) .radio-button__shape__icon{color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):hover .radio-button__shape{border-color:#004885;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):hover .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):hover .radio-button__shape__icon{color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):hover input:checked+.radio-button__shape{border-color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):focus .radio-button__shape{border-color:#004885;background-color:inherit}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):focus .radio-button__shape:after{border-color:inherit}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):focus .radio-button__shape__icon{color:inherit}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):active .radio-button__shape{border-color:#004885;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):active .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled):active .radio-button__shape__icon{color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) input:checked+.radio-button__shape{border-color:#004885;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) input:checked+.radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) input:checked+.radio-button__shape__icon{color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#004885}[name=radio-button] .radio-button.radio-button--tertiary:not(.radio-button--disabled) input:checked+.radio-button__shape+label{color:#004885}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled .radio-button__shape__icon{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#5E5E5E}[name=radio-button] .radio-button.radio-button--tertiary.radio-button--disabled input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) .radio-button__shape__icon{color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):hover .radio-button__shape{border-color:#96C11F;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):hover .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):hover .radio-button__shape__icon{color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):hover input:checked+.radio-button__shape{border-color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):focus .radio-button__shape{border-color:#96C11F;background-color:inherit}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):focus .radio-button__shape:after{border-color:inherit}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):focus .radio-button__shape__icon{color:inherit}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):active .radio-button__shape{border-color:#96C11F;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):active .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled):active .radio-button__shape__icon{color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) input:checked+.radio-button__shape{border-color:#96C11F;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) input:checked+.radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) input:checked+.radio-button__shape__icon{color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary:not(.radio-button--disabled) input:checked+.radio-button__shape+label{color:#96C11F}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled .radio-button__shape__icon{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quaternary.radio-button--disabled input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) .radio-button__shape__icon{color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):hover .radio-button__shape{border-color:#EF7B0B;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):hover .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):hover .radio-button__shape__icon{color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):hover input:checked+.radio-button__shape{border-color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):focus .radio-button__shape{border-color:#EF7B0B;background-color:inherit}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):focus .radio-button__shape:after{border-color:inherit}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):focus .radio-button__shape__icon{color:inherit}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):active .radio-button__shape{border-color:#EF7B0B;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):active .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled):active .radio-button__shape__icon{color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) input:checked+.radio-button__shape{border-color:#EF7B0B;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) input:checked+.radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) input:checked+.radio-button__shape__icon{color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary:not(.radio-button--disabled) input:checked+.radio-button__shape+label{color:#EF7B0B}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled .radio-button__shape{border-color:#5E5E5E;background-color:#FFFFFF}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled .radio-button__shape:after{border-color:transparent}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled .radio-button__shape__icon{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled input:checked+.radio-button__shape:not(.radio-button__shape--with-icon):before{background-color:#5E5E5E}[name=radio-button] .radio-button.radio-button--quinary.radio-button--disabled input:checked+.radio-button__shape+label{color:#5E5E5E}[name=radio-button] .radio-button.radio-button .radio-button__shape{width:20px;min-width:20px;height:20px;border-width:1px;border-radius:20px}[name=radio-button] .radio-button.radio-button .radio-button__shape:not(.radio-button__shape--with-icon):before{width:10px;height:10px;border-radius:20px}[name=radio-button] .radio-button.radio-button .radio-button__shape:after{width:20px;height:20px;border-width:8px;border-radius:20px}[name=radio-button] .radio-button.radio-button .radio-button__shape__icon{font-size:28px}[name=radio-button] .radio-button.radio-button .radio-button__shape--with-icon .radio-button__shape__icon{width:28px;height:28px;min-width:28px;border-radius:20px}[name=radio-button] .radio-button.radio-button label{margin:0 8px;font-size:14px;font-weight:400;line-height:24px}[name=radio-button] .radio-button.radio-button:not(.radio-button--disabled) input:checked+.radio-button__shape+label{font-weight:600}[name=radio-button] .radio-button.radio-button--md .radio-button__shape{width:20px;min-width:20px;height:20px;border-width:1px;border-radius:20px}[name=radio-button] .radio-button.radio-button--md .radio-button__shape:not(.radio-button__shape--with-icon):before{width:10px;height:10px;border-radius:20px}[name=radio-button] .radio-button.radio-button--md .radio-button__shape:after{width:20px;height:20px;border-width:8px;border-radius:20px}[name=radio-button] .radio-button.radio-button--md .radio-button__shape__icon{font-size:28px}[name=radio-button] .radio-button.radio-button--md .radio-button__shape--with-icon .radio-button__shape__icon{width:28px;height:28px;min-width:28px;border-radius:20px}[name=radio-button] .radio-button.radio-button--md label{margin:0 8px;font-size:14px;font-weight:400;line-height:24px}[name=radio-button] .radio-button.radio-button--md:not(.radio-button--disabled) input:checked+.radio-button__shape+label{font-weight:600}[name=radio-button] .radio-button.radio-button--sm .radio-button__shape{width:16px;min-width:16px;height:16px;border-width:1px;border-radius:16px}[name=radio-button] .radio-button.radio-button--sm .radio-button__shape:not(.radio-button__shape--with-icon):before{width:8px;height:8px;border-radius:16px}[name=radio-button] .radio-button.radio-button--sm .radio-button__shape:after{width:16px;height:16px;border-width:4px;border-radius:16px}[name=radio-button] .radio-button.radio-button--sm .radio-button__shape__icon{font-size:20px}[name=radio-button] .radio-button.radio-button--sm .radio-button__shape--with-icon .radio-button__shape__icon{width:20px;height:20px;min-width:20px;border-radius:16px}[name=radio-button] .radio-button.radio-button--sm label{margin:0 4px;font-size:14px;font-weight:400;line-height:24px}[name=radio-button] .radio-button.radio-button--sm:not(.radio-button--disabled) input:checked+.radio-button__shape+label{font-weight:600}";

const ENOVOSRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickRadioButton = createEvent(this, "clickRadioButton", 7);
    this.selected = false;
    this.disabled = false;
    this.classNames = {
      EL: 'radio-button',
      SHAPE: '__shape',
      ICON: '__icon',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the dataitem
   */
  async activeRadioButton() {
    this.selected = !this.selected;
  }
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.inputEl = this.el.querySelector('input');
    this.el.setAttribute('name', this.classNames.EL);
    this.inputEl.checked = this.selected;
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    this._clickHandler = new TapEvent(this.el, e => {
      this.clickHandler(e);
    }, 0);
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
    this.inputEl.checked = this.selected;
  }
  componentWillRender() {
    this.setStyles();
  }
  clickHandler(e) {
    e.preventDefault();
    // Make sure that once the radio button is checked,
    // it can not be unchecked by clicking on it again
    if (this.inputEl.checked) {
      return;
    }
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.selected = this.inputEl.checked;
    }
    this.clickRadioButton.emit({
      name: this.inputName,
      value: this.value,
      checked: this.selected,
    });
    e.stopPropagation();
  }
  /**
   * @description Get size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  setStyles() {
    if (this.disabled) {
      this.styles += ' disabled';
    }
    return this.styles;
  }
  /** REMOVABLE START */
  // Get Icon class
  hasIconClass() {
    if (this.icon) {
      return `${this.classNames.EL}${this.classNames.SHAPE}--with-icon`;
    }
    return '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getSize(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, h("input", { type: "radio", name: this.inputName, value: this.value }), h("div", { class: [
        `${this.classNames.EL}${this.classNames.SHAPE}`,
        this.hasIconClass(),
      ].join(' ') }, this.icon
      ? h("eds-icon", { class: `${this.classNames.EL}${this.classNames.SHAPE}${this.classNames.ICON}`, icon: this.icon })
      : ''), this.label
      ? h("label", null, this.label)
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSRadioButton.style = radioButtonCss;

const selectCss = "[name=select] input::-webkit-calendar-picker-indicator{display:none}.select{width:100%;height:100%;padding:0;margin:0;border:none;background:none;font-family:\"Montserrat\", sans-serif;font-style:normal;outline:0;-webkit-appearance:none}.select.disabled,.select.disabled:hover,.select:disabled,.select:disabled:hover{cursor:not-allowed}.select::-ms-clear,.select::-ms-reveal,.select::-webkit-calendar-picker-indicator{display:none}.select.textarea{resize:vertical}.select.select{color:#5E5E5E}.select.select.placeholder{color:#A7A7A7 !important}.select.select:-moz-placeholder{color:#A7A7A7 !important}.select.select::-moz-placeholder{color:#A7A7A7 !important}.select.select:-ms-input-placeholder{color:#A7A7A7 !important}.select.select::-webkit-input-placeholder{color:#A7A7A7 !important}.select.select:focus{color:#5E5E5E}.select.select:focus.placeholder{color:#A7A7A7 !important}.select.select:focus:-moz-placeholder{color:#A7A7A7 !important}.select.select:focus::-moz-placeholder{color:#A7A7A7 !important}.select.select:focus:-ms-input-placeholder{color:#A7A7A7 !important}.select.select:focus::-webkit-input-placeholder{color:#A7A7A7 !important}.select.select.disabled,.select.select.disabled:hover,.select.select:disabled,.select.select:disabled:hover{color:#A7A7A7}.select.select.disabled.placeholder,.select.select.disabled:hover.placeholder,.select.select:disabled.placeholder,.select.select:disabled:hover.placeholder{color:#A7A7A7 !important}.select.select.disabled:-moz-placeholder,.select.select.disabled:hover:-moz-placeholder,.select.select:disabled:-moz-placeholder,.select.select:disabled:hover:-moz-placeholder{color:#A7A7A7 !important}.select.select.disabled::-moz-placeholder,.select.select.disabled:hover::-moz-placeholder,.select.select:disabled::-moz-placeholder,.select.select:disabled:hover::-moz-placeholder{color:#A7A7A7 !important}.select.select.disabled:-ms-input-placeholder,.select.select.disabled:hover:-ms-input-placeholder,.select.select:disabled:-ms-input-placeholder,.select.select:disabled:hover:-ms-input-placeholder{color:#A7A7A7 !important}.select.select.disabled::-webkit-input-placeholder,.select.select.disabled:hover::-webkit-input-placeholder,.select.select:disabled::-webkit-input-placeholder,.select.select:disabled:hover::-webkit-input-placeholder{color:#A7A7A7 !important}.select.select.select--transparent{color:#FFFFFF}.select.select.select--transparent.placeholder{color:#FFFFFF !important}.select.select.select--transparent:-moz-placeholder{color:#FFFFFF !important}.select.select.select--transparent::-moz-placeholder{color:#FFFFFF !important}.select.select.select--transparent:-ms-input-placeholder{color:#FFFFFF !important}.select.select.select--transparent::-webkit-input-placeholder{color:#FFFFFF !important}.select.select.select--transparent:focus:not([disabled]){color:#5E5E5E}.select.select.select--transparent:focus:not([disabled]).placeholder{color:#5E5E5E !important}.select.select.select--transparent:focus:not([disabled]):-moz-placeholder{color:#5E5E5E !important}.select.select.select--transparent:focus:not([disabled])::-moz-placeholder{color:#5E5E5E !important}.select.select.select--transparent:focus:not([disabled]):-ms-input-placeholder{color:#5E5E5E !important}.select.select.select--transparent:focus:not([disabled])::-webkit-input-placeholder{color:#5E5E5E !important}.select.select.select--transparent.select--filled:not([disabled]){color:#5E5E5E}.select.select.select--transparent.select--filled:not([disabled]).placeholder{color:#5E5E5E !important}.select.select.select--transparent.select--filled:not([disabled]):-moz-placeholder{color:#5E5E5E !important}.select.select.select--transparent.select--filled:not([disabled])::-moz-placeholder{color:#5E5E5E !important}.select.select.select--transparent.select--filled:not([disabled]):-ms-input-placeholder{color:#5E5E5E !important}.select.select.select--transparent.select--filled:not([disabled])::-webkit-input-placeholder{color:#5E5E5E !important}.select.select--success{color:#5E5E5E}.select.select--success.placeholder{color:#5E5E5E !important}.select.select--success:-moz-placeholder{color:#5E5E5E !important}.select.select--success::-moz-placeholder{color:#5E5E5E !important}.select.select--success:-ms-input-placeholder{color:#5E5E5E !important}.select.select--success::-webkit-input-placeholder{color:#5E5E5E !important}.select.select--success:focus{color:#00856A}.select.select--success:focus.placeholder{color:#00856A !important}.select.select--success:focus:-moz-placeholder{color:#00856A !important}.select.select--success:focus::-moz-placeholder{color:#00856A !important}.select.select--success:focus:-ms-input-placeholder{color:#00856A !important}.select.select--success:focus::-webkit-input-placeholder{color:#00856A !important}.select.select--success.disabled,.select.select--success.disabled:hover,.select.select--success:disabled,.select.select--success:disabled:hover{color:#E5F2F0}.select.select--success.disabled.placeholder,.select.select--success.disabled:hover.placeholder,.select.select--success:disabled.placeholder,.select.select--success:disabled:hover.placeholder{color:#E5F2F0 !important}.select.select--success.disabled:-moz-placeholder,.select.select--success.disabled:hover:-moz-placeholder,.select.select--success:disabled:-moz-placeholder,.select.select--success:disabled:hover:-moz-placeholder{color:#E5F2F0 !important}.select.select--success.disabled::-moz-placeholder,.select.select--success.disabled:hover::-moz-placeholder,.select.select--success:disabled::-moz-placeholder,.select.select--success:disabled:hover::-moz-placeholder{color:#E5F2F0 !important}.select.select--success.disabled:-ms-input-placeholder,.select.select--success.disabled:hover:-ms-input-placeholder,.select.select--success:disabled:-ms-input-placeholder,.select.select--success:disabled:hover:-ms-input-placeholder{color:#E5F2F0 !important}.select.select--success.disabled::-webkit-input-placeholder,.select.select--success.disabled:hover::-webkit-input-placeholder,.select.select--success:disabled::-webkit-input-placeholder,.select.select--success:disabled:hover::-webkit-input-placeholder{color:#E5F2F0 !important}.select.select--success.select--transparent{color:false}.select.select--success.select--transparent.placeholder{color:inherit !important}.select.select--success.select--transparent:-moz-placeholder{color:inherit !important}.select.select--success.select--transparent::-moz-placeholder{color:inherit !important}.select.select--success.select--transparent:-ms-input-placeholder{color:inherit !important}.select.select--success.select--transparent::-webkit-input-placeholder{color:inherit !important}.select.select--success.select--transparent:focus:not([disabled]){color:false}.select.select--success.select--transparent:focus:not([disabled]).placeholder{color:inherit !important}.select.select--success.select--transparent:focus:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--success.select--transparent:focus:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--success.select--transparent:focus:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--success.select--transparent:focus:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select--success.select--transparent.select--filled:not([disabled]){color:false}.select.select--success.select--transparent.select--filled:not([disabled]).placeholder{color:inherit !important}.select.select--success.select--transparent.select--filled:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--success.select--transparent.select--filled:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--success.select--transparent.select--filled:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--success.select--transparent.select--filled:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select--warning{color:#5E5E5E}.select.select--warning.placeholder{color:#5E5E5E !important}.select.select--warning:-moz-placeholder{color:#5E5E5E !important}.select.select--warning::-moz-placeholder{color:#5E5E5E !important}.select.select--warning:-ms-input-placeholder{color:#5E5E5E !important}.select.select--warning::-webkit-input-placeholder{color:#5E5E5E !important}.select.select--warning:focus{color:#F76700}.select.select--warning:focus.placeholder{color:#F76700 !important}.select.select--warning:focus:-moz-placeholder{color:#F76700 !important}.select.select--warning:focus::-moz-placeholder{color:#F76700 !important}.select.select--warning:focus:-ms-input-placeholder{color:#F76700 !important}.select.select--warning:focus::-webkit-input-placeholder{color:#F76700 !important}.select.select--warning.disabled,.select.select--warning.disabled:hover,.select.select--warning:disabled,.select.select--warning:disabled:hover{color:#FFF1E5}.select.select--warning.disabled.placeholder,.select.select--warning.disabled:hover.placeholder,.select.select--warning:disabled.placeholder,.select.select--warning:disabled:hover.placeholder{color:#FFF1E5 !important}.select.select--warning.disabled:-moz-placeholder,.select.select--warning.disabled:hover:-moz-placeholder,.select.select--warning:disabled:-moz-placeholder,.select.select--warning:disabled:hover:-moz-placeholder{color:#FFF1E5 !important}.select.select--warning.disabled::-moz-placeholder,.select.select--warning.disabled:hover::-moz-placeholder,.select.select--warning:disabled::-moz-placeholder,.select.select--warning:disabled:hover::-moz-placeholder{color:#FFF1E5 !important}.select.select--warning.disabled:-ms-input-placeholder,.select.select--warning.disabled:hover:-ms-input-placeholder,.select.select--warning:disabled:-ms-input-placeholder,.select.select--warning:disabled:hover:-ms-input-placeholder{color:#FFF1E5 !important}.select.select--warning.disabled::-webkit-input-placeholder,.select.select--warning.disabled:hover::-webkit-input-placeholder,.select.select--warning:disabled::-webkit-input-placeholder,.select.select--warning:disabled:hover::-webkit-input-placeholder{color:#FFF1E5 !important}.select.select--warning.select--transparent{color:false}.select.select--warning.select--transparent.placeholder{color:inherit !important}.select.select--warning.select--transparent:-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent::-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent:-ms-input-placeholder{color:inherit !important}.select.select--warning.select--transparent::-webkit-input-placeholder{color:inherit !important}.select.select--warning.select--transparent:focus:not([disabled]){color:false}.select.select--warning.select--transparent:focus:not([disabled]).placeholder{color:inherit !important}.select.select--warning.select--transparent:focus:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent:focus:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent:focus:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--warning.select--transparent:focus:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select--warning.select--transparent.select--filled:not([disabled]){color:false}.select.select--warning.select--transparent.select--filled:not([disabled]).placeholder{color:inherit !important}.select.select--warning.select--transparent.select--filled:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent.select--filled:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--warning.select--transparent.select--filled:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--warning.select--transparent.select--filled:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select--error{color:#5E5E5E}.select.select--error.placeholder{color:#5E5E5E !important}.select.select--error:-moz-placeholder{color:#5E5E5E !important}.select.select--error::-moz-placeholder{color:#5E5E5E !important}.select.select--error:-ms-input-placeholder{color:#5E5E5E !important}.select.select--error::-webkit-input-placeholder{color:#5E5E5E !important}.select.select--error:focus{color:#EB0000}.select.select--error:focus.placeholder{color:#EB0000 !important}.select.select--error:focus:-moz-placeholder{color:#EB0000 !important}.select.select--error:focus::-moz-placeholder{color:#EB0000 !important}.select.select--error:focus:-ms-input-placeholder{color:#EB0000 !important}.select.select--error:focus::-webkit-input-placeholder{color:#EB0000 !important}.select.select--error.disabled,.select.select--error.disabled:hover,.select.select--error:disabled,.select.select--error:disabled:hover{color:#FDE5E5}.select.select--error.disabled.placeholder,.select.select--error.disabled:hover.placeholder,.select.select--error:disabled.placeholder,.select.select--error:disabled:hover.placeholder{color:#FDE5E5 !important}.select.select--error.disabled:-moz-placeholder,.select.select--error.disabled:hover:-moz-placeholder,.select.select--error:disabled:-moz-placeholder,.select.select--error:disabled:hover:-moz-placeholder{color:#FDE5E5 !important}.select.select--error.disabled::-moz-placeholder,.select.select--error.disabled:hover::-moz-placeholder,.select.select--error:disabled::-moz-placeholder,.select.select--error:disabled:hover::-moz-placeholder{color:#FDE5E5 !important}.select.select--error.disabled:-ms-input-placeholder,.select.select--error.disabled:hover:-ms-input-placeholder,.select.select--error:disabled:-ms-input-placeholder,.select.select--error:disabled:hover:-ms-input-placeholder{color:#FDE5E5 !important}.select.select--error.disabled::-webkit-input-placeholder,.select.select--error.disabled:hover::-webkit-input-placeholder,.select.select--error:disabled::-webkit-input-placeholder,.select.select--error:disabled:hover::-webkit-input-placeholder{color:#FDE5E5 !important}.select.select--error.select--transparent{color:false}.select.select--error.select--transparent.placeholder{color:inherit !important}.select.select--error.select--transparent:-moz-placeholder{color:inherit !important}.select.select--error.select--transparent::-moz-placeholder{color:inherit !important}.select.select--error.select--transparent:-ms-input-placeholder{color:inherit !important}.select.select--error.select--transparent::-webkit-input-placeholder{color:inherit !important}.select.select--error.select--transparent:focus:not([disabled]){color:false}.select.select--error.select--transparent:focus:not([disabled]).placeholder{color:inherit !important}.select.select--error.select--transparent:focus:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--error.select--transparent:focus:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--error.select--transparent:focus:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--error.select--transparent:focus:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select--error.select--transparent.select--filled:not([disabled]){color:false}.select.select--error.select--transparent.select--filled:not([disabled]).placeholder{color:inherit !important}.select.select--error.select--transparent.select--filled:not([disabled]):-moz-placeholder{color:inherit !important}.select.select--error.select--transparent.select--filled:not([disabled])::-moz-placeholder{color:inherit !important}.select.select--error.select--transparent.select--filled:not([disabled]):-ms-input-placeholder{color:inherit !important}.select.select--error.select--transparent.select--filled:not([disabled])::-webkit-input-placeholder{color:inherit !important}.select.select{font-size:14px;font-weight:400;line-height:24px}.select.select.textarea{height:60px;min-height:60px;padding:16px;line-height:16px}";

const ENOVOSSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeInput = createEvent(this, "changeInput", 7);
    this.required = false;
    this.disabled = false;
    this.options = [];
    this.classNames = {
      EL: 'select',
    };
  }
  /** INJECT_ANCHOR */
  // Attributes disabled and/or readonly
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
    this.el.setAttribute('name', this.classNames.EL);
    if (this.disabled) {
      this.el.querySelector('select').setAttribute('disabled', 'disabled');
    }
    this.handleEvent();
  }
  handleEvent() {
    const selectElement = this.el.querySelector('select');
    [
      {
        name: 'change',
        event: ev => { this.changeInput.emit(ev); },
      },
    ].forEach(event => {
      selectElement.removeEventListener(event.name, event.event);
      selectElement.addEventListener(event.name, event.event);
    });
  }
  /** REMOVABLE START */
  render() {
    return (h("select", { name: this.dataName, required: this.required, class: [
        this.classNames.EL,
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, this.options.map(value => {
      return (h("option", { value: value, selected: value === this.dataValue ? true : false }, value));
    })));
  }
  get el() { return getElement(this); }
};
ENOVOSSelect.style = selectCss;

const selectionControlsCss = "[name=selection-controls] .selection-controls__item{position:relative;transition:0.4s;cursor:pointer}[name=selection-controls] .selection-controls__item:not(.selection-controls__switch){display:block}[name=selection-controls] .selection-controls__item:before{position:absolute;left:0;top:0;bottom:0;content:\"\"}[name=selection-controls] .selection-controls .selection-controls__item{padding:0;margin:16px 8px}[name=selection-controls] .selection-controls .selection-controls__item:before{border-left-width:2px}[name=selection-controls] .selection-controls.selection-controls--indented{margin-left:32px}[name=selection-controls] .selection-controls.selection-controls--indented .selection-controls__item{padding:0}[name=selection-controls] .selection-controls .selection-controls__item{background-color:transparent}[name=selection-controls] .selection-controls .selection-controls__item:before{border-left-color:transparent;border-left-style:solid}@media (hover: hover){[name=selection-controls] .selection-controls .selection-controls__item:hover{border-left-color:transparent;background-color:transparent}}[name=selection-controls] .selection-controls .selection-controls__item--selected,[name=selection-controls] .selection-controls .selection-controls__item--indeterminate{background-color:transparent}[name=selection-controls] .selection-controls .selection-controls__item--selected:before,[name=selection-controls] .selection-controls .selection-controls__item--indeterminate:before{border-left-color:transparent}";

const ENOVOSSelectionControls = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickSelectionControlItem = createEvent(this, "clickSelectionControlItem", 7);
    this.clickSelectionControls = createEvent(this, "clickSelectionControls", 7);
    this.data = [];
    this.indented = false;
    this.items = [];
    this.classNames = {
      EL: 'selection-controls',
      ITEM: '__item',
      SWITCH: '__switch',
      INDENTED: '--indented',
      SELECTED: '--selected',
      INDETERMINATE: '--indeterminate',
    };
    this.prefixId = 'controlId_';
  }
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  // Add selected state when component is rendered
  componentDidRender() {
    this.items.forEach(item => {
      const activeElement = this.el.querySelector(`#${item.id}`);
      activeElement.selected ? activeElement.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}`) : activeElement.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}`);
    });
  }
  componentWillLoad() {
    this.items = this.setItems(this.data);
  }
  clickSelectionControlItemCatch(event) {
    this.activeItem = event.detail.getProp('id');
  }
  /**
   * @description Listen the event on checkbox
   */
  clickCheckboxHandler(e) {
    // the click is propagated throught SelectionControls from children to parents.
    // Get the current click item in current this.items
    let foundObject = this.foundCurrentItem(this.items, e.target.id);
    // If the current item isn't found, that means the item is a child, so try to retrieve the parent
    if (!foundObject) {
      foundObject = this.foundParentItem(this.items, e.target.id);
    }
    if (foundObject) {
      // If the click item has children
      if (foundObject.hasProp('children')) {
        if (e.target.id !== foundObject.getProp('id')) {
          // Check the total number of children checked and set state of parent
          this.setIndeterminateState(foundObject, undefined, undefined);
        }
        else {
          const selected = foundObject.indeterminate === true || foundObject.selected === false ? true : false;
          // Select/Unselect the parent and set indeterminate to false
          this.setIndeterminateState(foundObject, false, selected);
          foundObject.getProp('children').map((item) => {
            // Select/Unselect the children depending the parent
            this.setIndeterminateState(item, false, selected);
          });
        }
      }
      else {
        // Current item, set the select value
        foundObject.setProp('selected', (foundObject.selected === false || foundObject.selected === undefined) ? true : false);
      }
    }
    const selectedItems = this.getSelectedItems(this.items);
    // Send click event when event propagated to top parent only
    if (!this.indented) {
      const parentItem = this.foundParentItem(this.items, e.target.id);
      const currentItem = this.foundOriginalItem(this.items, e.target.id);
      if (currentItem) {
        this.clickSelectionControls.emit({ items: this.items, currentItem, parent: (parentItem && parentItem.getProp('id') !== currentItem.getProp('id')) ? parentItem : undefined, nbSelected: selectedItems.length });
      }
    }
    this.items = [...this.items];
    this.refresh = Date.now();
  }
  /**
   * @description Listen the event on radio button
   */
  clickRadioButtonHandler(e) {
    const foundObject = this.foundCurrentItem(this.items, e.target.id);
    if (foundObject) {
      foundObject.setProp('selected', !foundObject.selected);
    }
    this.items.map((item) => {
      if (e.target.id !== item.getProp('id')) {
        const childEl = this.el.querySelector(`#${item.getProp('id')}`);
        if (childEl) {
          item.setProp('selected', false);
          childEl.selected = false;
        }
      }
    });
    if (!this.indented) {
      this.clickSelectionControls.emit({ 'items': this.items, currentItem: foundObject });
    }
  }
  /**
   * @description Listen the event on radio button
   */
  clickSwitchHandler(e) {
    const foundObject = this.foundCurrentItem(this.items, e.target.id);
    if (foundObject) {
      foundObject.setProp('checked', !foundObject.checked);
      const labelEl = this.el.querySelector(`#label_${foundObject.getProp('id')}`);
      if (labelEl) {
        labelEl.styles = foundObject.checked === true ? 'secondary-500' : 'tertiary-500';
        labelEl.fontWeight = foundObject.checked === true ? 'bold' : 'regular';
      }
    }
    if (!this.indented) {
      this.clickSelectionControls.emit({ 'items': this.items, currentItem: foundObject });
    }
  }
  async setData(data) {
    this.data = data;
  }
  async clearData() {
    const itemsTmp = compact(concat(this.items, uniq((flatten(map(this.items, 'children'))).slice().sort())));
    itemsTmp.map(item => {
      item.selected = false;
      if (has$1(item, 'indeterminate')) {
        item.indeterminate = false;
      }
      const itemEl = this.el.querySelector(`#${item.getProp('id')}`);
      if (itemEl) {
        item.selected = false;
        itemEl.selected = false;
        if (has$1(item, 'indeterminate')) {
          item.indeterminate = false;
          itemEl.indeterminate = false;
        }
      }
    });
    this.items = [...this.items];
    this.refresh = Date.now();
    this.clickSelectionControls.emit({ 'items': this.items, nbSelected: 0 });
  }
  watchHandler(newData, oldData) {
    if (newData !== oldData) {
      this.items = this.setItems(newData);
    }
  }
  /**
   * Found recursively top parent based on an item id
   */
  foundParentItem(items, id) {
    let foundObject;
    items.map((item) => {
      if (item.getProp('id') !== id && item.hasProp('children') && !foundObject) {
        if (this.foundCurrentItem(item.getProp('children'), id)) {
          foundObject = item;
        }
      }
    });
    return foundObject;
  }
  /**
   * Alternative version to foundOriginalItem which create an instance and don't allows to
   * correctly update this.items through different identation
   */
  foundCurrentItem(items, id) {
    return find(items, (item) => {
      if (item.getProp(`id`) === id) {
        return item;
      }
      else if (item.hasProp('children')) {
        return this.foundParentItem(item.getProp('children'), id);
      }
    });
  }
  /**
   * Found item throught all available items. Return an instance.
   */
  foundOriginalItem(items, id) {
    return find(compact(concat(items, uniq((flatten(map(items, 'children'))).slice().sort()))), (item) => (item.getProp(`id`) === id));
  }
  getSelectedItems(items) {
    return filter(compact(concat(items, uniq((flatten(map(items, 'children'))).slice().sort()))), (item) => (item.getProp(`selected`) === true));
  }
  /**
   * @description Init the dropdown from an array of item
   */
  setItems(items) {
    const tmpItems = [];
    if (Array.isArray(items)) {
      items.map(item => {
        if (item) {
          const formatItem = new SelectionControlsItem(item);
          formatItem.id = (!has$1(item, 'id')) ? `${this.prefixId}${uniqueId()}` : `${this.prefixId}${get$1(item, 'id')}`;
          if (has$1(item, 'children')) {
            formatItem.children = this.setItems(get$1(item, 'children'));
          }
          // Now set indeterminate if one child is selected
          this.setIndeterminateState(formatItem, undefined, undefined);
          tmpItems.push(formatItem);
        }
      });
    }
    return tmpItems;
  }
  /**
   * @description Check the total number of children checked and set state of parent
   * If all children are checked, parent should be checked
   * If some children are checked, parent should be indeterminate
   * If all children are unchecked, parent should be unchecked
   */
  setIndeterminateState(item, forceIndeterminate, forceSelected) {
    let indeterminate = (forceIndeterminate !== undefined) ? forceIndeterminate : undefined;
    let selected = (forceSelected !== undefined) ? forceSelected : undefined;
    if (item.hasProp('children')) {
      const nbChildren = item.getProp('children').length;
      const nbCheckedChildren = filter(item.getProp('children'), (child) => child.getProp('selected') === true);
      indeterminate = (forceIndeterminate !== undefined) ? forceIndeterminate : (nbCheckedChildren.length < nbChildren && nbCheckedChildren.length > 0) ? true : false;
      selected = (forceSelected !== undefined) ? forceSelected : (nbCheckedChildren.length < nbChildren) ? false : true;
    }
    if (indeterminate !== undefined && selected !== undefined) {
      item.setProp('indeterminate', indeterminate);
      item.setProp('selected', selected);
      // If render is done, update view dynamically
      const itemEl = this.el.querySelector(`#${item.getProp('id')}`);
      if (itemEl) {
        itemEl.indeterminate = indeterminate;
        itemEl.selected = selected;
        if (indeterminate) {
          itemEl.classList.add(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}`);
        }
        else {
          itemEl.classList.remove(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}`);
        }
      }
    }
  }
  setMainElementClasses() {
    return [
      this.classNames.EL,
      this.indented ? `${this.classNames.EL}${this.classNames.INDENTED}` : '',
    ].join(' ');
  }
  render() {
    return (h("div", { class: this.setMainElementClasses() }, (() => {
      switch (this.type) {
        case 'checkbox':
          return this.items.map((item) => {
            return [
              h("eds-checkbox", { class: [
                  `${this.classNames.EL}${this.classNames.ITEM}`,
                  item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
                  item.getProp(`indeterminate`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDETERMINATE}` : '',
                ].join(' '), id: `${item.getProp(`id`)}`, selected: item.getProp(`selected`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, indeterminate: item.getProp(`indeterminate`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), styles: item.getProp(`styles`), value: item.getProp(`value`), label: item.getProp(`label`) }),
              (item.hasProp('children')) ?
                h("eds-selection-controls", { indented: true, refresh: this.refresh, data: item.getProp('children'), type: this.type })
                : '',
            ];
          });
        case 'radio-button':
          return this.items.map((item) => {
            return h("eds-radio-button", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}`,
                item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
              ].join(' '), id: item.getProp(`id`), selected: item.getProp(`selected`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), styles: item.getProp(`styles`), label: item.getProp(`label`), value: item.getProp(`value`), icon: item.getProp(`icon`) });
          });
        case 'switch':
          return this.items.map((item) => {
            return h("eds-switch", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}`,
                `${this.classNames.EL}${this.classNames.SWITCH}`,
                item.getProp(`selected`) === true ? `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.SELECTED}` : '',
              ].join(' '), label: item.getProp(`label`), id: item.getProp(`id`), checked: item.getProp(`checked`) === true ? true : false, disabled: item.getProp(`disabled`) === true ? true : false, inputName: item.getProp(`inputName`), size: item.getProp(`size`), value: item.getProp(`value`), styles: item.getProp(`styles`) });
          });
      }
    })()));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "data": ["watchHandler"]
  }; }
};
ENOVOSSelectionControls.style = selectionControlsCss;

const switchCss = "[name=switch]{display:flex;align-items:center;justify-content:flex-start}.switch{position:relative;display:inline-block;outline:none}.switch__track{position:relative;display:block;text-indent:-150%;cursor:pointer}.switch__track:before{position:absolute;left:0;top:0;display:block;border-style:solid;content:\"\";transition:all 0.2s ease}.switch__track__thumb{position:absolute;display:block;border-radius:50%;transition:all 0.2s ease}.switch__track__thumb:before{position:absolute;left:50%;top:50%;display:block;border-style:solid;border-radius:50%;background-color:transparent;content:\"\";transform:translate(-50%, -50%);transition:border-color 0.2s ease}.switch input{position:absolute;width:0;height:0;opacity:0}.switch.switch--disabled .switch__track{cursor:not-allowed}.switch.switch--disabled input{pointer-events:none}.switch.switch .switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch .switch__track__thumb{background-color:#FFFFFF}.switch.switch .switch__track__thumb:before{border-color:transparent}.switch.switch:not(.switch--disabled) input:checked+.switch__track:before{border-color:transparent;background-color:#F76700}.switch.switch:not(.switch--disabled) input:checked+.switch__track .switch__track__thumb{background-color:#FFFFFF}.switch.switch:not(.switch--disabled) input:checked+.switch__track .switch__track__thumb:before{border-color:transparent}.switch.switch:not(.switch--disabled):hover input:checked+.switch__track:before{border-color:transparent;background-color:#F76700}.switch.switch:not(.switch--disabled):hover input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(247, 103, 0, 0.25)}.switch.switch:not(.switch--disabled):hover input:not(:checked)+.switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch:not(.switch--disabled):hover input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.25)}.switch.switch:not(.switch--disabled):focus input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(247, 103, 0, 0.5)}.switch.switch:not(.switch--disabled):focus input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.5)}.switch.switch:not(.switch--disabled):active input:checked+.switch__track:before{border-color:transparent;background-color:#F76700}.switch.switch:not(.switch--disabled):active input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(247, 103, 0, 0.75)}.switch.switch:not(.switch--disabled):active input:not(:checked)+.switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch:not(.switch--disabled):active input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.75)}.switch.switch.switch--disabled input:checked+.switch__track:before{border-color:transparent;background-color:#5A8D00}.switch.switch.switch--disabled input:checked+.switch__track .switch__track__thumb:before{border-color:transparent;background-color:transparent}.switch.switch.switch--disabled input:not(:checked)+.switch__track:before{border-color:#96C11F;background-color:#FFFFFF}.switch.switch.switch--disabled input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:transparent;background-color:transparent}.switch.switch--contextual-success .switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch--contextual-success .switch__track__thumb{background-color:#FFFFFF}.switch.switch--contextual-success .switch__track__thumb:before{border-color:transparent}.switch.switch--contextual-success:not(.switch--disabled) input:checked+.switch__track:before{border-color:transparent;background-color:#00856A}.switch.switch--contextual-success:not(.switch--disabled) input:checked+.switch__track .switch__track__thumb{background-color:#FFFFFF}.switch.switch--contextual-success:not(.switch--disabled) input:checked+.switch__track .switch__track__thumb:before{border-color:transparent}.switch.switch--contextual-success:not(.switch--disabled):hover input:checked+.switch__track:before{border-color:transparent;background-color:#00856A}.switch.switch--contextual-success:not(.switch--disabled):hover input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(0, 133, 106, 0.25)}.switch.switch--contextual-success:not(.switch--disabled):hover input:not(:checked)+.switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch--contextual-success:not(.switch--disabled):hover input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.25)}.switch.switch--contextual-success:not(.switch--disabled):focus input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(0, 133, 106, 0.5)}.switch.switch--contextual-success:not(.switch--disabled):focus input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.5)}.switch.switch--contextual-success:not(.switch--disabled):active input:checked+.switch__track:before{border-color:transparent;background-color:#00856A}.switch.switch--contextual-success:not(.switch--disabled):active input:checked+.switch__track .switch__track__thumb:before{border-color:rgba(0, 133, 106, 0.75)}.switch.switch--contextual-success:not(.switch--disabled):active input:not(:checked)+.switch__track:before{border-color:#5A8D00;background-color:#FFFFFF}.switch.switch--contextual-success:not(.switch--disabled):active input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:rgba(90, 141, 0, 0.75)}.switch.switch--contextual-success.switch--disabled input:checked+.switch__track:before{border-color:#96C11F;background-color:#5A8D00}.switch.switch--contextual-success.switch--disabled input:checked+.switch__track .switch__track__thumb:before{border-color:transparent;background-color:transparent}.switch.switch--contextual-success.switch--disabled input:not(:checked)+.switch__track:before{border-color:#96C11F;background-color:#FFFFFF}.switch.switch--contextual-success.switch--disabled input:not(:checked)+.switch__track .switch__track__thumb:before{border-color:transparent;background-color:transparent}.switch.switch{margin:4px}.switch.switch .switch__track{width:56px;height:32px;border-radius:20px}.switch.switch .switch__track:before{width:calc(56px - (1px * 2) );height:calc(32px - (1px * 2) );border-width:1px;border-radius:20px}.switch.switch .switch__track__thumb{left:2px;top:50%;width:28px;height:28px;transform:translateY(-50%)}.switch.switch .switch__track__thumb:before{width:28px;height:28px;border-width:calc(4px + 2px)}.switch.switch input:checked+.switch__track .switch__track__thumb{left:calc(56px - 2px - 28px)}.switch.switch--md{margin:4px}.switch.switch--md .switch__track{width:56px;height:32px;border-radius:20px}.switch.switch--md .switch__track:before{width:calc(56px - (1px * 2) );height:calc(32px - (1px * 2) );border-width:1px;border-radius:20px}.switch.switch--md .switch__track__thumb{left:2px;top:50%;width:28px;height:28px;transform:translateY(-50%)}.switch.switch--md .switch__track__thumb:before{width:28px;height:28px;border-width:calc(4px + 2px)}.switch.switch--md input:checked+.switch__track .switch__track__thumb{left:calc(56px - 2px - 28px)}.switch.switch--sm{margin:4px}.switch.switch--sm .switch__track{width:40px;height:24px;border-radius:12px}.switch.switch--sm .switch__track:before{width:calc(40px - (1px * 2) );height:calc(24px - (1px * 2) );border-width:1px;border-radius:12px}.switch.switch--sm .switch__track__thumb{left:2px;top:50%;width:20px;height:20px;transform:translateY(-50%)}.switch.switch--sm .switch__track__thumb:before{width:20px;height:20px;border-width:calc(4px + 2px)}.switch.switch--sm input:checked+.switch__track .switch__track__thumb{left:calc(40px - 2px - 20px)}";

const ENOVOSSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickSwitch = createEvent(this, "clickSwitch", 7);
    this.elevationLevel = '1';
    this.checked = false;
    this.disabled = false;
    this.classNames = {
      EL: 'switch',
      TRACK: '__track',
      THUMB: '__thumb',
    };
    this._clickHandler = undefined;
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.inputEl = this.el.querySelector('input');
    this.inputEl.checked = this.checked;
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    this._clickHandler = new TapEvent(this.el, e => {
      this.clickHandler(e);
    });
  }
  componentDidUpdate() {
    if (this.disabled) {
      this.inputEl.setAttribute('disabled', 'disabled');
    }
    else if (this.inputEl.hasAttribute('disabled')) {
      this.inputEl.removeAttribute('disabled');
    }
  }
  clickHandler(e) {
    e.preventDefault();
    if (!this.disabled) {
      this.inputEl.checked = !this.inputEl.checked;
      this.checked = this.inputEl.checked;
    }
    this.clickSwitch.emit(this.checked);
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return [
      this.label
        ? h("eds-paragraph", { type: "body-1", styles: this.checked === true ? 'secondary-500' : 'tertiary-500', fontWeight: this.checked === true ? 'bold' : 'regular', content: this.label })
        : '',
      h("div", { class: [
          this.classNames.EL,
          (this.disabled) ? `${this.classNames.EL}--disabled` : '',
          this.getSize(),
          ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
        ].join(' ') }, h("input", { type: "checkbox", name: this.inputName, value: this.value }), h("label", { class: `${this.classNames.EL}${this.classNames.TRACK}` }, h("eds-elevation", { styles: (this.disabled) ? 'light' : 'dark', level: this.elevationLevel }, h("span", { class: `${this.classNames.EL}${this.classNames.TRACK}${this.classNames.THUMB}` })))),
    ];
  }
  get el() { return getElement(this); }
};
ENOVOSSwitch.style = switchCss;

class TabsItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof TabsItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get$1(this, key);
  }
  hasProp(key) {
    return has$1(this, key);
  }
  setProp(key, value) {
    set$1(this, key, value);
  }
}

const tabsCss = "@-webkit-keyframes ripple-animation{from{opacity:1;transform:translate(-50%, -50%) scale(0)}to{opacity:0;transform:translate(-50%, -50%) scale(1)}}@keyframes ripple-animation{from{opacity:1;transform:translate(-50%, -50%) scale(0)}to{opacity:0;transform:translate(-50%, -50%) scale(1)}}[name=tabs]{display:block;width:100%;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;}[name=tabs]::-webkit-scrollbar{display:none;width:0;background:transparent}[name=tabs] .tabs{display:flex;justify-content:center;width:100%;height:100%}[name=tabs] .tabs.tabs--bg--primary{background-color:#F76700 !important}[name=tabs] .tabs.tabs--bg--secondary{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--tertiary{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--quaternary{background-color:#96C11F !important}[name=tabs] .tabs.tabs--bg--quinary{background-color:#EF7B0B !important}[name=tabs] .tabs.tabs--bg--senary{background-color:#CAA08D !important}[name=tabs] .tabs.tabs--bg--septenary{background-color:#6C887A !important}[name=tabs] .tabs.tabs--bg--grey{background-color:#757575 !important}[name=tabs] .tabs.tabs--bg--primary-900{background-color:#F76700 !important}[name=tabs] .tabs.tabs--bg--primary-800{background-color:#F76700 !important}[name=tabs] .tabs.tabs--bg--primary-700{background-color:#D52B1E !important}[name=tabs] .tabs.tabs--bg--primary-600{background-color:#C75300 !important}[name=tabs] .tabs.tabs--bg--primary-500{background-color:#F76700 !important}[name=tabs] .tabs.tabs--bg--primary-400{background-color:#FFA14C !important}[name=tabs] .tabs.tabs--bg--primary-300{background-color:#FFB673 !important}[name=tabs] .tabs.tabs--bg--primary-200{background-color:#FFDDBF !important}[name=tabs] .tabs.tabs--bg--primary-100{background-color:#FFF1E5 !important}[name=tabs] .tabs.tabs--bg--primary-50{background-color:#FFF1E5 !important}[name=tabs] .tabs.tabs--bg--secondary-900{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--secondary-800{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--secondary-700{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--secondary-600{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--secondary-500{background-color:#5E5E5E !important}[name=tabs] .tabs.tabs--bg--secondary-400{background-color:#8E8E8E !important}[name=tabs] .tabs.tabs--bg--secondary-300{background-color:#A7A7A7 !important}[name=tabs] .tabs.tabs--bg--secondary-200{background-color:#D7D7D7 !important}[name=tabs] .tabs.tabs--bg--secondary-100{background-color:#EEEEEE !important}[name=tabs] .tabs.tabs--bg--secondary-50{background-color:#EEEEEE !important}[name=tabs] .tabs.tabs--bg--tertiary-900{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--tertiary-800{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--tertiary-700{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--tertiary-600{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--tertiary-500{background-color:#004885 !important}[name=tabs] .tabs.tabs--bg--tertiary-400{background-color:#5C8AB1 !important}[name=tabs] .tabs.tabs--bg--tertiary-300{background-color:#85A8C5 !important}[name=tabs] .tabs.tabs--bg--tertiary-200{background-color:#C2D3E2 !important}[name=tabs] .tabs.tabs--bg--tertiary-100{background-color:#EBF1F6 !important}[name=tabs] .tabs.tabs--bg--tertiary-50{background-color:#EBF1F6 !important}[name=tabs] .tabs.tabs--bg--quaternary-900{background-color:#5A8D00 !important}[name=tabs] .tabs.tabs--bg--quaternary-800{background-color:#5A8D00 !important}[name=tabs] .tabs.tabs--bg--quaternary-700{background-color:#5A8D00 !important}[name=tabs] .tabs.tabs--bg--quaternary-600{background-color:#5A8D00 !important}[name=tabs] .tabs.tabs--bg--quaternary-500{background-color:#96C11F !important}[name=tabs] .tabs.tabs--bg--quaternary-400{background-color:#BCD870 !important}[name=tabs] .tabs.tabs--bg--quaternary-300{background-color:#CDE294 !important}[name=tabs] .tabs.tabs--bg--quaternary-200{background-color:#E6F0C9 !important}[name=tabs] .tabs.tabs--bg--quaternary-100{background-color:#F7FAED !important}[name=tabs] .tabs.tabs--bg--quaternary-50{background-color:#F7FAED !important}[name=tabs] .tabs.tabs--bg--quinary-900{background-color:#C75300 !important}[name=tabs] .tabs.tabs--bg--quinary-800{background-color:#C75300 !important}[name=tabs] .tabs.tabs--bg--quinary-700{background-color:#C75300 !important}[name=tabs] .tabs.tabs--bg--quinary-600{background-color:#C75300 !important}[name=tabs] .tabs.tabs--bg--quinary-500{background-color:#EF7B0B !important}[name=tabs] .tabs.tabs--bg--quinary-400{background-color:#FFA14C !important}[name=tabs] .tabs.tabs--bg--quinary-300{background-color:#FFB673 !important}[name=tabs] .tabs.tabs--bg--quinary-200{background-color:#FFDDBF !important}[name=tabs] .tabs.tabs--bg--quinary-100{background-color:#FFF1E5 !important}[name=tabs] .tabs.tabs--bg--quinary-50{background-color:#FFF1E5 !important}[name=tabs] .tabs.tabs--bg--senary-900{background-color:#602A10 !important}[name=tabs] .tabs.tabs--bg--senary-800{background-color:#95431D !important}[name=tabs] .tabs.tabs--bg--senary-700{background-color:#B66E4D !important}[name=tabs] .tabs.tabs--bg--senary-600{background-color:#B78670 !important}[name=tabs] .tabs.tabs--bg--senary-500{background-color:#CAA08D !important}[name=tabs] .tabs.tabs--bg--senary-400{background-color:#DEAE98 !important}[name=tabs] .tabs.tabs--bg--senary-300{background-color:#EEC3AF !important}[name=tabs] .tabs.tabs--bg--senary-200{background-color:#FAD5C5 !important}[name=tabs] .tabs.tabs--bg--senary-100{background-color:#FFE9DF !important}[name=tabs] .tabs.tabs--bg--senary-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-900{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-800{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-700{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-600{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-500{background-color:#6C887A !important}[name=tabs] .tabs.tabs--bg--septenary-400{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-300{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-200{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-100{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--septenary-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--grey-900{background-color:#1D1D1D !important}[name=tabs] .tabs.tabs--bg--grey-800{background-color:#333333 !important}[name=tabs] .tabs.tabs--bg--grey-700{background-color:#4D4D4D !important}[name=tabs] .tabs.tabs--bg--grey-600{background-color:#666666 !important}[name=tabs] .tabs.tabs--bg--grey-500{background-color:#757575 !important}[name=tabs] .tabs.tabs--bg--grey-400{background-color:#999999 !important}[name=tabs] .tabs.tabs--bg--grey-300{background-color:#B3B3B3 !important}[name=tabs] .tabs.tabs--bg--grey-200{background-color:#CCCCCC !important}[name=tabs] .tabs.tabs--bg--grey-100{background-color:#E6E6E6 !important}[name=tabs] .tabs.tabs--bg--grey-50{background-color:#F8F8F8 !important}[name=tabs] .tabs.tabs--bg--contextual-success{background-color:#00856A !important}[name=tabs] .tabs.tabs--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=tabs] .tabs.tabs--bg--contextual-info{background-color:#2899A8 !important}[name=tabs] .tabs.tabs--bg--contextual-info-light{background-color:#DBF6FF !important}[name=tabs] .tabs.tabs--bg--contextual-warning{background-color:#F76700 !important}[name=tabs] .tabs.tabs--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=tabs] .tabs.tabs--bg--contextual-error{background-color:#EB0000 !important}[name=tabs] .tabs.tabs--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=tabs] .tabs.tabs--bg--pfm-blue{background-color:#55A1D3 !important}[name=tabs] .tabs.tabs--bg--pfm-green{background-color:#8DDE54 !important}[name=tabs] .tabs.tabs--bg--pfm-yellow{background-color:#FFC600 !important}[name=tabs] .tabs.tabs--bg--pfm-orange{background-color:#FC912E !important}[name=tabs] .tabs.tabs--bg--pfm-red{background-color:#DF5036 !important}[name=tabs] .tabs.tabs--bg--external-bank-ing{background-color:#F58220 !important}[name=tabs] .tabs.tabs--bg--external-bank-bil{background-color:#71308B !important}[name=tabs] .tabs.tabs--bg--external-bank-bcee{background-color:#144093 !important}[name=tabs] .tabs.tabs--bg--external-bank-post{background-color:#FABC0B !important}[name=tabs] .tabs.tabs--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=tabs] .tabs.tabs--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=tabs] .tabs.tabs--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=tabs] .tabs.tabs--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=tabs] .tabs.tabs--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=tabs] .tabs.tabs--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=tabs] .tabs.tabs--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=tabs] .tabs.tabs--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=tabs] .tabs.tabs--bg--brand-pfm-orange{background-color:#FC912E !important}[name=tabs] .tabs.tabs--bg--brand-pfm-red{background-color:#DF5036 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=tabs] .tabs.tabs--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=tabs] .tabs.tabs--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=tabs] .tabs.tabs--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=tabs] .tabs.tabs--bg--white{background-color:#FFFFFF !important}[name=tabs] .tabs.tabs--bg--black{background-color:#000000 !important}[name=tabs] .tabs.tabs--bg--transparent{background-color:transparent !important}[name=tabs] .tabs__item{position:relative;display:flex;align-items:center;flex:1 0 0;justify-content:center;overflow:hidden;font-family:\"Montserrat\", sans-serif;text-align:center;outline:none;transition:color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[name=tabs] .tabs__item:not(.tabs__item--disabled)::before{position:absolute;left:50%;top:50%;z-index:30;display:block;width:100%;height:0;padding-bottom:100%;border-radius:50%;content:\"\";visibility:hidden;transform:translate(-50%, -50%) scale(0)}[name=tabs] .tabs__item:not(.tabs__item--disabled):focus::before{visibility:visible}[name=tabs] .tabs__item:not(.tabs__item--disabled):focus:not(:active)::before{-webkit-animation:ripple-animation 0.4s ease-out 0s;animation:ripple-animation 0.4s ease-out 0s}[name=tabs] .tabs__item--disabled{cursor:not-allowed !important}[name=tabs] .tabs__item__icon-container{position:relative;pointer-events:none}[name=tabs] .tabs__item__icon{display:block;transition:color 0.2s}[name=tabs] .tabs__item__badge{position:absolute;right:0;top:0;display:flex}[name=tabs] .tabs--shrink{justify-content:flex-start}[name=tabs] .tabs--shrink .tabs__item{flex:0 0 auto}[name=tabs] .tabs--border .tabs__item{border-style:solid}[name=tabs] .tabs--border .tabs__item:not(:first-child){border-left-width:0}@media (max-width: 863px){[name=tabs] .tabs{max-width:100%;overflow-x:auto;word-break:initial}}[name=tabs] .tabs .tabs__item{border-color:transparent;color:#5E5E5E;background-color:transparent}[name=tabs] .tabs .tabs__item::before{background-color:#F76700}@media (hover: hover){[name=tabs] .tabs .tabs__item:not(.tabs__item--disabled):hover{border-color:transparent;color:#F76700;background-color:#FFF1E5}}[name=tabs] .tabs .tabs__item:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#5E5E5E;background-color:#EEEEEE}[name=tabs] .tabs .tabs__item:not(.tabs__item--disabled):active{border-color:transparent;color:#FFFFFF;background-color:#5E5E5E}[name=tabs] .tabs .tabs__item.tabs__item--disabled{border-color:transparent;color:#5E5E5E;background-color:#EEEEEE}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--primary{border-color:#5A8D00;color:#004885;background-color:#CDE294}[name=tabs] .tabs .tabs__item--primary::before{background-color:#5A8D00}@media (hover: hover){[name=tabs] .tabs .tabs__item--primary:not(.tabs__item--disabled):hover{border-color:#5A8D00;color:#004885;background-color:#5A8D00}}[name=tabs] .tabs .tabs__item--primary:not(.tabs__item--disabled):active:focus{border-color:#5A8D00;color:#004885;background-color:#CDE294}[name=tabs] .tabs .tabs__item--primary:not(.tabs__item--disabled):active{border-color:#5A8D00;color:#004885;background-color:#5A8D00}[name=tabs] .tabs .tabs__item--primary.tabs__item--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#BCD870}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--error{border-color:transparent;color:#004885;background-color:#BCD870}[name=tabs] .tabs .tabs__item--error::before{background-color:#E62D32}@media (hover: hover){[name=tabs] .tabs .tabs__item--error:not(.tabs__item--disabled):hover{border-color:transparent;color:#004885;background-color:#5A8D00}}[name=tabs] .tabs .tabs__item--error:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#004885;background-color:#CDE294}[name=tabs] .tabs .tabs__item--error:not(.tabs__item--disabled):active{border-color:transparent;color:#004885;background-color:#5A8D00}[name=tabs] .tabs .tabs__item--error.tabs__item--disabled{border-color:transparent;color:#5A8D00;background-color:#BCD870}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--quinary{border-color:transparent;color:#004885;background-color:transparent}[name=tabs] .tabs .tabs__item--quinary::before{background-color:#5A8D00}@media (hover: hover){[name=tabs] .tabs .tabs__item--quinary:not(.tabs__item--disabled):hover{border-color:transparent;color:#004885;background-color:#85A8C5}}[name=tabs] .tabs .tabs__item--quinary:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#004885;background-color:#85A8C5}[name=tabs] .tabs .tabs__item--quinary:not(.tabs__item--disabled):active{border-color:transparent;color:#004885;background-color:#004885}[name=tabs] .tabs .tabs__item--quinary.tabs__item--disabled{border-color:transparent;color:#004885;background-color:transparent}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item.tabs__item--active{border-color:transparent;color:#FFFFFF;background-color:#5E5E5E}[name=tabs] .tabs .tabs__item.tabs__item--active::before{background-color:#EEEEEE}@media (hover: hover){[name=tabs] .tabs .tabs__item.tabs__item--active:not(.tabs__item--disabled):hover{border-color:transparent;color:#FFFFFF;background-color:#5E5E5E}}[name=tabs] .tabs .tabs__item.tabs__item--active:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#C75300;background-color:transparent}[name=tabs] .tabs .tabs__item.tabs__item--active:not(.tabs__item--disabled):active{border-color:transparent;color:#C75300;background-color:transparent}[name=tabs] .tabs .tabs__item.tabs__item--active.tabs__item--disabled{border-color:transparent;color:#FFB673;background-color:transparent}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--primary.tabs__item--active{border-color:#5A8D00;color:#F76700;background-color:#FFFFFF}[name=tabs] .tabs .tabs__item--primary.tabs__item--active::before{background-color:#5A8D00}@media (hover: hover){[name=tabs] .tabs .tabs__item--primary.tabs__item--active:not(.tabs__item--disabled):hover{border-color:#5A8D00;color:#5A8D00;background-color:#FFFFFF}}[name=tabs] .tabs .tabs__item--primary.tabs__item--active:not(.tabs__item--disabled):active:focus{border-color:#5A8D00;color:#FFA14C;background-color:#FFFFFF}[name=tabs] .tabs .tabs__item--primary.tabs__item--active:not(.tabs__item--disabled):active{border-color:#5A8D00;color:#D52B1E;background-color:#FFFFFF}[name=tabs] .tabs .tabs__item--primary.tabs__item--active.tabs__item--disabled{border-color:#5A8D00;color:#5A8D00;background-color:#BCD870}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--error.tabs__item--active{border-color:transparent;color:#FFFFFF;background-color:#EB0000}[name=tabs] .tabs .tabs__item--error.tabs__item--active::before{background-color:#E62D32}@media (hover: hover){[name=tabs] .tabs .tabs__item--error.tabs__item--active:not(.tabs__item--disabled):hover{border-color:transparent;color:#FFFFFF;background-color:#FDE5E5}}[name=tabs] .tabs .tabs__item--error.tabs__item--active:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#FFFFFF;background-color:#F7B7AF}[name=tabs] .tabs .tabs__item--error.tabs__item--active:not(.tabs__item--disabled):active{border-color:transparent;color:#FFFFFF;background-color:#FDE5E5}[name=tabs] .tabs .tabs__item--error.tabs__item--active.tabs__item--disabled{border-color:transparent;color:#FFFFFF;background-color:#5A8D00}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs .tabs__item--quinary.tabs__item--active{border-color:transparent;color:#FFFFFF;background-color:#004885}[name=tabs] .tabs .tabs__item--quinary.tabs__item--active::before{background-color:#004885}@media (hover: hover){[name=tabs] .tabs .tabs__item--quinary.tabs__item--active:not(.tabs__item--disabled):hover{border-color:transparent;color:#FFFFFF;background-color:#004885}}[name=tabs] .tabs .tabs__item--quinary.tabs__item--active:not(.tabs__item--disabled):active:focus{border-color:transparent;color:#FFFFFF;background-color:#004885}[name=tabs] .tabs .tabs__item--quinary.tabs__item--active:not(.tabs__item--disabled):active{border-color:transparent;color:#FFFFFF;background-color:#004885}[name=tabs] .tabs .tabs__item--quinary.tabs__item--active.tabs__item--disabled{border-color:transparent;color:#004885;background-color:#5C8AB1}[name=tabs] .tabs--border .tabs__item--active{border-bottom-color:transparent !important}[name=tabs] .tabs{padding:0}[name=tabs] .tabs .tabs__item{margin:0;font-size:14px;font-weight:400;line-height:24px}[name=tabs] .tabs .tabs__item::before{width:100%;height:48px;padding-bottom:0}[name=tabs] .tabs .tabs__item:first-child{margin-left:0;border-top-left-radius:0px}[name=tabs] .tabs .tabs__item:last-child{margin-right:0;border-top-right-radius:0px}[name=tabs] .tabs .tabs__item__content{height:auto !important;height:48px;min-height:48px;padding:16px;line-height:24px}[name=tabs] .tabs--border .tabs__item{border-width:0px;border-radius:0 0 0 0}";

const ENOVOSTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickTabsItem = createEvent(this, "clickTabsItem", 7);
    this.border = false;
    this.items = [];
    this.tabItems = [];
    this.classNames = {
      EL: 'tabs',
      ITEM: '__item',
      ICON__CONTAINER: '__icon-container',
      ICON: '__icon',
      BADGE: '__badge',
    };
    this.eventInit = false; // Event initialization
    this._clickItemHandler = [];
  }
  /** INJECT_ANCHOR */
  async setItems(data) {
    this.items = data;
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
    }
  }
  initData() {
    this.tabItems = [];
    this.items.map(item => this.tabItems.push(new TabsItem(item)));
    this.eventInit = false;
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
    this.initData();
  }
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender() {
    if (!this.eventInit) {
      this.tabItems.map((tabItem, index) => {
        if (tabItem.hasProp('id')) {
          const item = this.el.querySelector(`#tab_${tabItem.getProp('id')}`);
          if (item) {
            if (this._clickItemHandler[index] && typeof this._clickItemHandler[index] === 'object') {
              this._clickItemHandler[index].removeEvent();
            }
            this._clickItemHandler[index] = new TapEvent(item, e => {
              this.clickMenuItemHandler(e, tabItem);
            });
          }
        }
      });
      this.eventInit = true;
    }
  }
  /**
   * @description Define the event on items
   */
  clickMenuItemHandler(e, item) {
    e.preventDefault();
    if (item.getProp('disabled') !== true) {
      this.clickTabsItem.emit(item);
    }
    return false;
  }
  /**
   * @description Set the active item class depending the activeItem property
   * @return {string}
   */
  getActiveItemClasses(item) {
    let activeClass = '';
    if (this.activeItem === item.getProp('id')) {
      activeClass = `${this.classNames.EL}${this.classNames.ITEM}--active`;
    }
    return [
      ComponentPropsHelper.setGlobalStyles(this.styles, `${this.classNames.EL}${this.classNames.ITEM}`),
      activeClass,
    ].join(' ');
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item) {
    return (item.getProp('disabled') === true) ? `${this.classNames.EL}${this.classNames.ITEM}--disabled` : '';
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isShrink() {
    return (this.shrink) ? `${this.classNames.EL}--shrink` : '';
  }
  /**
   * @description Set the separated class to create space between each item
   * @return {string}
   */
  isSeparated() {
    return (this.separated) ? `${this.classNames.EL}--separated` : '';
  }
  hasBorder() {
    return (this.border) ? `${this.classNames.EL}--border` : '';
  }
  /** REMOVABLE START */
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
  }
  render() {
    if (this.tabItems.length > 0) {
      return (h("ul", { class: [
          this.classNames.EL,
          this.isShrink(),
          this.hasBorder(),
          this.isSeparated(),
          StylePropsHelper.getStyles(this.backgroundStyles, `${this.classNames.EL}--bg`),
        ].join(' ') }, this.tabItems.map(item => h("li", { tabindex: "-1", id: `tab_${item.getProp('id')}`, class: [
          `${this.classNames.EL}${this.classNames.ITEM}`,
          this.getActiveItemClasses(item),
          this.isDisabledItemClass(item),
        ].join(' ') }, item.hasProp('badge')
        ? h("eds-positioned-badge", { size: item.badge.size, styles: item.badge.styles, text: item.badge.text, position: item.badge.position, alignment: item.badge.alignment ? item.badge.alignment : 'inside' }, h("div", { class: "tabs__item__content" }, item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '', item.hasProp('icon') && !item.hasProp('title')
          ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` }, h("eds-icon", { class: [
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
            ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
          : ''))
        : item.hasProp('positionedIcon')
          ? h("eds-positioned-icon", { size: item.positionedIcon.size, styles: item.positionedIcon.styles, icon: item.positionedIcon.icon, backgroundColor: item.positionedIcon.backgroundColor, position: item.positionedIcon.position, alignment: item.positionedIcon.alignment ? item.positionedIcon.alignment : 'inside' }, h("div", { class: "tabs__item__content" }, item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '', item.hasProp('icon') && !item.hasProp('title')
            ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` }, h("eds-icon", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
              ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
            : ''))
          : h("div", { class: "tabs__item__content" }, item.hasProp('title') && !item.hasProp('icon') ? item.getProp('title') : '', item.hasProp('icon') && !item.hasProp('title')
            ? h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` }, h("eds-icon", { class: [
                `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
              ].join(' '), styles: item.getProp('icon.styles'), size: item.hasProp('icon.size') ? item.getProp('icon.size') : '5x', icon: item.getProp('icon.icon') }))
            : '')))));
    }
    else {
      return (h("span", null));
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSTabs.style = tabsCss;

const textFieldCss = "::-webkit-input-placeholder{font-weight:400}::-moz-placeholder{font-weight:400}:-ms-input-placeholder{font-weight:400}:-moz-placeholder{font-weight:400}[name=text-field]{display:block;width:100%}[name=text-field] .text-field__icon,[name=text-field] .text-field__button{position:absolute;display:flex;align-content:center;text-align:center;pointer-events:none;outline:0 !important;transform:translateY(-50%);cursor:default;-webkit-tap-highlight-color:transparent}[name=text-field] .inline-text-field{display:flex;flex-direction:column;text-align:left}[name=text-field] .text-field{position:relative;display:flex;align-items:center;width:100%;text-align:left;transition:border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease}[name=text-field] .text-field__button--trailing{z-index:1;pointer-events:inherit !important;cursor:pointer}[name=text-field] .text-field__icon--leading{z-index:1;pointer-events:inherit !important;cursor:pointer}[name=text-field] .text-field__icon--trailing{z-index:1;pointer-events:inherit !important;cursor:pointer}[name=text-field] .text-field__icon--show-hide{z-index:1;pointer-events:inherit !important}[name=text-field] .text-field__icon--cleaning{z-index:2 !important;pointer-events:inherit !important;opacity:1;transition:border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;cursor:pointer}[name=text-field] .text-field__field{width:100%;border-style:solid}[name=text-field] .text-field__field__container{position:relative;height:100%}[name=text-field] .text-field__field__component{display:flex;align-items:center;overflow:hidden}[name=text-field] .text-field__link{position:absolute;right:16px;top:calc(50%);transform:translateY(-50%)}[name=text-field] .text-field__info{position:absolute;right:8px;z-index:1}[name=text-field] .text-field--transparent[disabled]{cursor:not-allowed}[name=text-field] .text-field--hidden{opacity:0;visibility:hidden;transition:border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease}[name=text-field] .text-field--visible{opacity:1;visibility:visible;transition:border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease}[name=text-field] .text-field--has-label-inside .text-field__label{position:absolute;width:100%}[name=text-field] .text-field--has-label-inside .text-field__label>*{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer}[name=text-field] .text-field--has-label-inside .text-field__info,[name=text-field] .text-field--no-label .text-field__info{top:-50% !important;padding:0 4px}[name=text-field] .text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field--no-label .text-field__info:after{position:absolute;left:0;right:0;top:50%;z-index:-1;width:100%;content:\"\"}[name=text-field] .text-field--with-chips .text-field__field__container{display:flex;align-items:center;justify-content:flex-start;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;}[name=text-field] .text-field--with-chips .text-field__field__container::-webkit-scrollbar{display:none;width:0;background:transparent}[name=text-field] .text-field--with-chips .text-field__field__container .text-field__field__component{flex:1 0 auto}[name=text-field] .text-field--with-chips .text-field__field__container .text-field__field__component[read-only]{flex:0 0 0}[name=text-field] .text-field--with-chips.text-field--stacked .text-field__field__container{flex-wrap:wrap;overflow-x:hidden}[name=text-field] .text-field--with-chips.text-field--stacked .text-field__field__component{flex-basis:0%;flex-shrink:1;height:auto !important;margin-left:0}[name=text-field] .text-field .text-field__icon{color:#5E5E5E}[name=text-field] .text-field .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field .text-field__field{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field] .text-field.text-field--focus{background-color:false}[name=text-field] .text-field.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field] .text-field.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field.text-field--focus .text-field__field{border-color:#A7A7A7;background-color:#FFFFFF}[name=text-field] .text-field.text-field--active{background-color:false}[name=text-field] .text-field.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field] .text-field.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field.text-field--active .text-field__field{border-color:#A7A7A7;background-color:#FFFFFF}[name=text-field] .text-field.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field.text-field--disabled{background-color:false}[name=text-field] .text-field.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field] .text-field.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field.text-field--disabled .text-field__field{border-color:#EEEEEE;background-color:#FFFFFF}[name=text-field] .text-field.text-field--disabled .text-field__field,[name=text-field] .text-field.text-field--disabled .text-field__field:hover{border-color:#EEEEEE;background-color:#FFFFFF}[name=text-field] .text-field.text-field--readonly{background-color:false}[name=text-field] .text-field.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field] .text-field.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field.text-field--readonly .text-field__field{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field] .text-field.text-field--readonly .text-field__field,[name=text-field] .text-field.text-field--readonly .text-field__field:hover{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field] .text-field.text-field--transparent{background-color:rgba(255, 255, 255, 0.15)}[name=text-field] .text-field.text-field--transparent .text-field__field{border-color:rgba(255, 255, 255, 0.5);background-color:transparent}[name=text-field] .text-field.text-field--transparent.text-field--focus:not([disabled]){background-color:#FFFFFF}[name=text-field] .text-field.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field] .text-field.text-field--transparent.text-field--active:not([disabled]){background-color:#FFFFFF}[name=text-field] .text-field.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field] .text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--success .text-field__icon{color:#00856A}[name=text-field] .text-field--success .text-field__icon--leading{color:#00856A}[name=text-field] .text-field--success .text-field__icon--trailing{color:#00856A}[name=text-field] .text-field--success .text-field__field{border-color:#00856A;background-color:#FFFFFF}[name=text-field] .text-field--success.text-field--focus{background-color:false}[name=text-field] .text-field--success.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--success.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--success.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--success.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--success.text-field--active{background-color:false}[name=text-field] .text-field--success.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--success.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--success.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--success.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--success.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field--success.text-field--disabled{background-color:false}[name=text-field] .text-field--success.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--success.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--success.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--success.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--success.text-field--disabled .text-field__field,[name=text-field] .text-field--success.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--success.text-field--readonly{background-color:false}[name=text-field] .text-field--success.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--success.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--success.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--success.text-field--readonly .text-field__field{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field] .text-field--success.text-field--readonly .text-field__field,[name=text-field] .text-field--success.text-field--readonly .text-field__field:hover{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field] .text-field--success.text-field--transparent{background-color:false}[name=text-field] .text-field--success.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field] .text-field--success.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field] .text-field--success.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--success.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field] .text-field--success.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--success--has-label-inside .text-field__info:after,[name=text-field] .text-field--success--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--info .text-field__icon{color:#2899A8}[name=text-field] .text-field--info .text-field__icon--leading{color:#2899A8}[name=text-field] .text-field--info .text-field__icon--trailing{color:#2899A8}[name=text-field] .text-field--info .text-field__field{border-color:#2899A8;background-color:#FFFFFF}[name=text-field] .text-field--info.text-field--focus{background-color:false}[name=text-field] .text-field--info.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--info.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--info.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--info.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--info.text-field--active{background-color:false}[name=text-field] .text-field--info.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--info.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--info.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--info.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--info.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field--info.text-field--disabled{background-color:false}[name=text-field] .text-field--info.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--info.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--info.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--info.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--info.text-field--disabled .text-field__field,[name=text-field] .text-field--info.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--info.text-field--readonly{background-color:false}[name=text-field] .text-field--info.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--info.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--info.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--info.text-field--readonly .text-field__field{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field] .text-field--info.text-field--readonly .text-field__field,[name=text-field] .text-field--info.text-field--readonly .text-field__field:hover{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field] .text-field--info.text-field--transparent{background-color:false}[name=text-field] .text-field--info.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field] .text-field--info.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field] .text-field--info.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--info.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field] .text-field--info.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--info--has-label-inside .text-field__info:after,[name=text-field] .text-field--info--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--warning .text-field__icon{color:#F76700}[name=text-field] .text-field--warning .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--warning .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--warning .text-field__field{border-color:#F76700;background-color:#FFFFFF}[name=text-field] .text-field--warning.text-field--focus{background-color:false}[name=text-field] .text-field--warning.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--warning.text-field--active{background-color:false}[name=text-field] .text-field--warning.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--warning.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field--warning.text-field--disabled{background-color:false}[name=text-field] .text-field--warning.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--warning.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--warning.text-field--disabled .text-field__field,[name=text-field] .text-field--warning.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--warning.text-field--readonly{background-color:false}[name=text-field] .text-field--warning.text-field--readonly .text-field__icon{color:#F76700}[name=text-field] .text-field--warning.text-field--readonly .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--warning.text-field--readonly .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--warning.text-field--readonly .text-field__field{border-color:#F76700;background-color:#EEEEEE}[name=text-field] .text-field--warning.text-field--readonly .text-field__field,[name=text-field] .text-field--warning.text-field--readonly .text-field__field:hover{border-color:#F76700;background-color:#EEEEEE}[name=text-field] .text-field--warning.text-field--transparent{background-color:false}[name=text-field] .text-field--warning.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field] .text-field--warning.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field] .text-field--warning.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--warning.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field] .text-field--warning.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--warning--has-label-inside .text-field__info:after,[name=text-field] .text-field--warning--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--error .text-field__icon{color:#EB0000}[name=text-field] .text-field--error .text-field__icon--leading{color:#EB0000}[name=text-field] .text-field--error .text-field__icon--trailing{color:#EB0000}[name=text-field] .text-field--error .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--focus{background-color:false}[name=text-field] .text-field--error.text-field--focus .text-field__icon{color:#EB0000}[name=text-field] .text-field--error.text-field--focus .text-field__icon--leading{color:#EB0000}[name=text-field] .text-field--error.text-field--focus .text-field__icon--trailing{color:#EB0000}[name=text-field] .text-field--error.text-field--focus .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--active{background-color:false}[name=text-field] .text-field--error.text-field--active .text-field__icon{color:#EB0000}[name=text-field] .text-field--error.text-field--active .text-field__icon--leading{color:#EB0000}[name=text-field] .text-field--error.text-field--active .text-field__icon--trailing{color:#EB0000}[name=text-field] .text-field--error.text-field--active .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field--error.text-field--disabled{background-color:false}[name=text-field] .text-field--error.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field] .text-field--error.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field] .text-field--error.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field] .text-field--error.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--disabled .text-field__field,[name=text-field] .text-field--error.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--readonly{background-color:false}[name=text-field] .text-field--error.text-field--readonly .text-field__icon{color:#EB0000}[name=text-field] .text-field--error.text-field--readonly .text-field__icon--leading{color:#EB0000}[name=text-field] .text-field--error.text-field--readonly .text-field__icon--trailing{color:#EB0000}[name=text-field] .text-field--error.text-field--readonly .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--readonly .text-field__field,[name=text-field] .text-field--error.text-field--readonly .text-field__field:hover{border-color:#EB0000;background-color:#FFFFFF}[name=text-field] .text-field--error.text-field--transparent{background-color:false}[name=text-field] .text-field--error.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field] .text-field--error.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field] .text-field--error.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--error.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field] .text-field--error.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field] .text-field--error--has-label-inside .text-field__info:after,[name=text-field] .text-field--error--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--secondary-500 .text-field__icon{color:#F76700}[name=text-field] .text-field--secondary-500 .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--secondary-500 .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--secondary-500 .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--focus{background-color:false}[name=text-field] .text-field--secondary-500.text-field--focus .text-field__icon{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--focus .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--focus .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--focus .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--active{background-color:false}[name=text-field] .text-field--secondary-500.text-field--active .text-field__icon{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--active .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--active .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--active .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field] .text-field--secondary-500.text-field--disabled{background-color:false}[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__icon{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__field{border-color:#96C11F;background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__field,[name=text-field] .text-field--secondary-500.text-field--disabled .text-field__field:hover{border-color:#96C11F;background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--readonly{background-color:false}[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__icon{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__icon--leading{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__icon--trailing{color:#F76700}[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__field{border-color:#BCD870;background-color:#BCD870}[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__field,[name=text-field] .text-field--secondary-500.text-field--readonly .text-field__field:hover{border-color:#BCD870;background-color:#BCD870}[name=text-field] .text-field--secondary-500.text-field--transparent{background-color:rgba(255, 255, 255, 0.15)}[name=text-field] .text-field--secondary-500.text-field--transparent .text-field__field{border-color:rgba(255, 255, 255, 0.5);background-color:transparent}[name=text-field] .text-field--secondary-500.text-field--transparent.text-field--focus:not([disabled]){background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--transparent.text-field--active:not([disabled]){background-color:#FFFFFF}[name=text-field] .text-field--secondary-500.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field] .text-field--secondary-500--has-label-inside .text-field__info:after,[name=text-field] .text-field--secondary-500--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field] .text-field--lg{height:0;border-radius:0}[name=text-field] .text-field--lg .text-field__button--trailing{right:16px;top:calc(50% - 1px)}[name=text-field] .text-field--lg .text-field__icon{top:calc(50% + 1px);width:0;font-size:0}[name=text-field] .text-field--lg .text-field__icon--leading{left:8px}[name=text-field] .text-field--lg .text-field__icon--trailing{right:8px}[name=text-field] .text-field--lg .text-field__icon--show-hide{right:16px;margin-top:-1px}[name=text-field] .text-field--lg .text-field__icon--cleaning{right:8px}[name=text-field] .text-field--lg .text-field__field{height:0;padding:0;border-width:1px;border-radius:0}[name=text-field] .text-field--lg .text-field__field__component{height:calc(100% - 1px)}[name=text-field] .text-field--lg .text-field__tabs.text-field--has-label{margin-top:0}[name=text-field] .text-field--lg .text-field__info{top:calc(-100% + 2px)}[name=text-field] .text-field--lg.text-field--has-tabs{border-radius:0 0 0 0}[name=text-field] .text-field--lg.text-field--has-tabs .text-field__field{border-radius:0 0 0 0}[name=text-field] .text-field--lg.text-field--has-label{margin-top:0}[name=text-field] .text-field--lg.text-field--readonly .text-field__field{padding-left:0}[name=text-field] .text-field--lg.text-field--readonly.text-field--has-label-inside .text-field__label{left:16px}[name=text-field] .text-field--lg.text-field--has-assistive-text{margin-bottom:0}[name=text-field] .text-field--lg.text-field--has-label-inside .text-field__label{left:16px;top:8px}[name=text-field] .text-field--lg.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:16px}[name=text-field] .text-field--lg.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field] .text-field--lg.text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field--lg.text-field--no-label .text-field__info:after{height:1px}[name=text-field] .text-field--lg.text-field__textarea{height:auto}[name=text-field] .text-field--lg.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field] .text-field--lg.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field] .text-field--lg.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field] .text-field--lg.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:-2px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:-2px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field] .text-field--lg.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:-2px;transform:translateY(2px)}[name=text-field] .text-field--lg.text-field--with-icon--leading .text-field__field{padding-left:calc(0 + 8px + 8px)}[name=text-field] .text-field--lg.text-field--with-icon--trailing .text-field__field{padding-right:calc(0 + 8px + 8px) !important}[name=text-field] .text-field--lg.text-field--with-icon--show-hide .text-field__field{padding-right:calc(0 + (8px * 2) + (8px * 2) ) !important}[name=text-field] .text-field--lg.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field] .text-field--lg.text-field--rounded .text-field__field{border-radius:0}[name=text-field] .inline-text-field .text-field__tabs.text-field--has-label{margin-top:0}[name=text-field] .text-field{height:48px;border-radius:8px}[name=text-field] .text-field .text-field__button--trailing{right:32px;top:calc(50% - 1px)}[name=text-field] .text-field .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field] .text-field .text-field__icon--leading{left:16px}[name=text-field] .text-field .text-field__icon--trailing{right:16px}[name=text-field] .text-field .text-field__icon--show-hide{right:32px;margin-top:-1px}[name=text-field] .text-field .text-field__icon--cleaning{right:16px}[name=text-field] .text-field .text-field__field{height:48px;padding:0 16px;border-width:1px;border-radius:8px}[name=text-field] .text-field .text-field__field__component{height:calc(100% - 1px)}[name=text-field] .text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field] .text-field .text-field__info{top:calc(-100% + 2px)}[name=text-field] .text-field.text-field--has-tabs{border-radius:0 0 8px 8px}[name=text-field] .text-field.text-field--has-tabs .text-field__field{border-radius:0 0 8px 8px}[name=text-field] .text-field.text-field--has-label{margin-top:16px}[name=text-field] .text-field.text-field--readonly .text-field__field{padding-left:16px}[name=text-field] .text-field.text-field--readonly.text-field--has-label-inside .text-field__label{left:0}[name=text-field] .text-field.text-field--has-assistive-text{margin-bottom:8px}[name=text-field] .text-field.text-field--has-label-inside .text-field__label{left:0;top:8px}[name=text-field] .text-field.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:0}[name=text-field] .text-field.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field] .text-field.text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field.text-field--no-label .text-field__info:after{height:1px}[name=text-field] .text-field.text-field__textarea{height:auto}[name=text-field] .text-field.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field] .text-field.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field] .text-field.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field] .text-field.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:48px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:48px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:46px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:48px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:46px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field] .text-field.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:22px;transform:translateY(-10px)}[name=text-field] .text-field.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 16px + 16px)}[name=text-field] .text-field.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 16px + 16px) !important}[name=text-field] .text-field.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (16px * 2) + (16px * 2) ) !important}[name=text-field] .text-field.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field] .text-field.text-field--rounded .text-field__field{border-radius:96px}[name=text-field] .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field] .text-field--md{height:48px;border-radius:4px}[name=text-field] .text-field--md .text-field__button--trailing{right:16px;top:calc(50% - 1px)}[name=text-field] .text-field--md .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field] .text-field--md .text-field__icon--leading{left:8px}[name=text-field] .text-field--md .text-field__icon--trailing{right:8px}[name=text-field] .text-field--md .text-field__icon--show-hide{right:16px;margin-top:-1px}[name=text-field] .text-field--md .text-field__icon--cleaning{right:8px}[name=text-field] .text-field--md .text-field__field{height:48px;padding:0 16px;border-width:1px;border-radius:4px}[name=text-field] .text-field--md .text-field__field__component{height:calc(100% - 1px)}[name=text-field] .text-field--md .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field] .text-field--md .text-field__info{top:calc(-100% + 2px)}[name=text-field] .text-field--md.text-field--has-tabs{border-radius:0 0 4px 4px}[name=text-field] .text-field--md.text-field--has-tabs .text-field__field{border-radius:0 0 4px 4px}[name=text-field] .text-field--md.text-field--has-label{margin-top:16px}[name=text-field] .text-field--md.text-field--readonly .text-field__field{padding-left:0}[name=text-field] .text-field--md.text-field--readonly.text-field--has-label-inside .text-field__label{left:0}[name=text-field] .text-field--md.text-field--has-assistive-text{margin-bottom:8px}[name=text-field] .text-field--md.text-field--has-label-inside .text-field__label{left:0;top:8px}[name=text-field] .text-field--md.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:0}[name=text-field] .text-field--md.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field] .text-field--md.text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field--md.text-field--no-label .text-field__info:after{height:1px}[name=text-field] .text-field--md.text-field__textarea{height:auto}[name=text-field] .text-field--md.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field] .text-field--md.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field] .text-field--md.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field] .text-field--md.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:48px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:48px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:46px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:48px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:46px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field] .text-field--md.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:22px;transform:translateY(-10px)}[name=text-field] .text-field--md.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 8px + 8px)}[name=text-field] .text-field--md.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 8px + 8px) !important}[name=text-field] .text-field--md.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (8px * 2) + (8px * 2) ) !important}[name=text-field] .text-field--md.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field] .text-field--md.text-field--rounded .text-field__field{border-radius:96px}[name=text-field] .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field] .text-field--sm{height:40px;border-radius:8px}[name=text-field] .text-field--sm .text-field__button--trailing{right:32px;top:calc(50% - false)}[name=text-field] .text-field--sm .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field] .text-field--sm .text-field__icon--leading{left:16px}[name=text-field] .text-field--sm .text-field__icon--trailing{right:16px}[name=text-field] .text-field--sm .text-field__icon--show-hide{right:32px;margin-top:-1px}[name=text-field] .text-field--sm .text-field__icon--cleaning{right:16px}[name=text-field] .text-field--sm .text-field__field{height:40px;padding:0 16px;border-width:1px;border-radius:8px}[name=text-field] .text-field--sm .text-field__field__component{height:calc(100% - false)}[name=text-field] .text-field--sm .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field] .text-field--sm .text-field__info{top:calc(-100% + 2px)}[name=text-field] .text-field--sm.text-field--has-tabs{border-radius:0 0 8px 8px}[name=text-field] .text-field--sm.text-field--has-tabs .text-field__field{border-radius:0 0 8px 8px}[name=text-field] .text-field--sm.text-field--has-label{margin-top:16px}[name=text-field] .text-field--sm.text-field--readonly .text-field__field{padding-left:16px}[name=text-field] .text-field--sm.text-field--readonly.text-field--has-label-inside .text-field__label{left:false}[name=text-field] .text-field--sm.text-field--has-assistive-text{margin-bottom:8px}[name=text-field] .text-field--sm.text-field--has-label-inside .text-field__label{left:false;top:false}[name=text-field] .text-field--sm.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:false}[name=text-field] .text-field--sm.text-field--has-label-inside .text-field__field__component{padding-top:false}[name=text-field] .text-field--sm.text-field--has-label-inside .text-field__info:after,[name=text-field] .text-field--sm.text-field--no-label .text-field__info:after{height:1px}[name=text-field] .text-field--sm.text-field__textarea{height:auto}[name=text-field] .text-field--sm.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field] .text-field--sm.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field] .text-field--sm.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field] .text-field--sm.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:40px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:40px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:38px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:40px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:38px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field] .text-field--sm.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:18px;transform:translateY(-8px)}[name=text-field] .text-field--sm.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 16px + 16px)}[name=text-field] .text-field--sm.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 16px + 16px) !important}[name=text-field] .text-field--sm.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (16px * 2) + (16px * 2) ) !important}[name=text-field] .text-field--sm.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field] .text-field--sm.text-field--rounded .text-field__field{border-radius:80px}[name=text-field] .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field .text-field__field{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--focus .text-field__field{border-color:#A7A7A7;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--active{background-color:false}[name=text-field].theme--dark .text-field.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--active .text-field__field{border-color:#A7A7A7;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--disabled .text-field__field{border-color:#EEEEEE;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field.text-field--disabled .text-field__field:hover{border-color:#EEEEEE;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__field{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field.text-field--readonly .text-field__field:hover{border-color:#D7D7D7;background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--transparent{background-color:rgba(255, 255, 255, 0.15)}[name=text-field].theme--dark .text-field.text-field--transparent .text-field__field{border-color:rgba(255, 255, 255, 0.5);background-color:transparent}[name=text-field].theme--dark .text-field.text-field--transparent.text-field--focus:not([disabled]){background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--transparent.text-field--active:not([disabled]){background-color:#FFFFFF}[name=text-field].theme--dark .text-field.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field].theme--dark .text-field--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success .text-field__icon{color:#00856A}[name=text-field].theme--dark .text-field--success .text-field__icon--leading{color:#00856A}[name=text-field].theme--dark .text-field--success .text-field__icon--trailing{color:#00856A}[name=text-field].theme--dark .text-field--success .text-field__field{border-color:#00856A;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field--success.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success.text-field--active{background-color:false}[name=text-field].theme--dark .text-field--success.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field--success.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field--success.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--success.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__field{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field--success.text-field--readonly .text-field__field:hover{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field].theme--dark .text-field--success.text-field--transparent{background-color:false}[name=text-field].theme--dark .text-field--success.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field].theme--dark .text-field--success.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--success.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--success.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--success.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--success--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--success--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info .text-field__icon{color:#2899A8}[name=text-field].theme--dark .text-field--info .text-field__icon--leading{color:#2899A8}[name=text-field].theme--dark .text-field--info .text-field__icon--trailing{color:#2899A8}[name=text-field].theme--dark .text-field--info .text-field__field{border-color:#2899A8;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field--info.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info.text-field--active{background-color:false}[name=text-field].theme--dark .text-field--info.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field--info.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field--info.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--info.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__field{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field--info.text-field--readonly .text-field__field:hover{border-color:#8E8E8E;background-color:#8E8E8E}[name=text-field].theme--dark .text-field--info.text-field--transparent{background-color:false}[name=text-field].theme--dark .text-field--info.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field].theme--dark .text-field--info.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--info.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--info.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--info.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--info--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--info--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--warning .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--warning .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--warning .text-field__field{border-color:#F76700;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--focus .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--focus .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--focus .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--focus .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning.text-field--active{background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--active .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--active .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--active .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--active .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field--warning.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field--warning.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--warning.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__field{border-color:#F76700;background-color:#EEEEEE}[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field--warning.text-field--readonly .text-field__field:hover{border-color:#F76700;background-color:#EEEEEE}[name=text-field].theme--dark .text-field--warning.text-field--transparent{background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field].theme--dark .text-field--warning.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--warning.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--warning.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--warning--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--warning--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error .text-field__icon{color:#EB0000}[name=text-field].theme--dark .text-field--error .text-field__icon--leading{color:#EB0000}[name=text-field].theme--dark .text-field--error .text-field__icon--trailing{color:#EB0000}[name=text-field].theme--dark .text-field--error .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field--error.text-field--focus .text-field__icon{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--focus .text-field__icon--leading{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--focus .text-field__icon--trailing{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--focus .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--active{background-color:false}[name=text-field].theme--dark .text-field--error.text-field--active .text-field__icon{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--active .text-field__icon--leading{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--active .text-field__icon--trailing{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--active .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field--error.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__icon{color:#5E5E5E}[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__icon--leading{color:#5E5E5E}[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__icon--trailing{color:#5E5E5E}[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__field{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field--error.text-field--disabled .text-field__field:hover{border-color:#5E5E5E;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__icon{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__icon--leading{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__icon--trailing{color:#EB0000}[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__field{border-color:#EB0000;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field--error.text-field--readonly .text-field__field:hover{border-color:#EB0000;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--error.text-field--transparent{background-color:false}[name=text-field].theme--dark .text-field--error.text-field--transparent .text-field__field{border-color:false;background-color:transparent}[name=text-field].theme--dark .text-field--error.text-field--transparent.text-field--focus:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--error.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--error.text-field--transparent.text-field--active:not([disabled]){background-color:false}[name=text-field].theme--dark .text-field--error.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:false}[name=text-field].theme--dark .text-field--error--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--error--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500 .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500 .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500 .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500 .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--focus{background-color:false}[name=text-field].theme--dark .text-field--secondary-500.text-field--focus .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--focus .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--focus .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--focus .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--active{background-color:false}[name=text-field].theme--dark .text-field--secondary-500.text-field--active .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--active .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--active .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--active .text-field__field{border-color:#5A8D00;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--active .text-field__icon--cleaning{pointer-events:inherit;opacity:1}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled{background-color:false}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__field{border-color:#96C11F;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__field,[name=text-field].theme--dark .text-field--secondary-500.text-field--disabled .text-field__field:hover{border-color:#96C11F;background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly{background-color:false}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__icon{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__icon--leading{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__icon--trailing{color:#F76700}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__field{border-color:#BCD870;background-color:#BCD870}[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__field,[name=text-field].theme--dark .text-field--secondary-500.text-field--readonly .text-field__field:hover{border-color:#BCD870;background-color:#BCD870}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent{background-color:rgba(255, 255, 255, 0.15)}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent .text-field__field{border-color:rgba(255, 255, 255, 0.5);background-color:transparent}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent.text-field--focus:not([disabled]){background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent.text-field--focus:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent.text-field--active:not([disabled]){background-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500.text-field--transparent.text-field--active:not([disabled]) .text-field__field{border-color:#FFFFFF}[name=text-field].theme--dark .text-field--secondary-500--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--secondary-500--no-label .text-field__info:after{background-color:#FFFFFF}[name=text-field].theme--dark .text-field--lg{height:0;border-radius:0}[name=text-field].theme--dark .text-field--lg .text-field__button--trailing{right:16px;top:calc(50% - 1px)}[name=text-field].theme--dark .text-field--lg .text-field__icon{top:calc(50% + 1px);width:0;font-size:0}[name=text-field].theme--dark .text-field--lg .text-field__icon--leading{left:8px}[name=text-field].theme--dark .text-field--lg .text-field__icon--trailing{right:8px}[name=text-field].theme--dark .text-field--lg .text-field__icon--show-hide{right:16px;margin-top:-1px}[name=text-field].theme--dark .text-field--lg .text-field__icon--cleaning{right:8px}[name=text-field].theme--dark .text-field--lg .text-field__field{height:0;padding:0;border-width:1px;border-radius:0}[name=text-field].theme--dark .text-field--lg .text-field__field__component{height:calc(100% - 1px)}[name=text-field].theme--dark .text-field--lg .text-field__tabs.text-field--has-label{margin-top:0}[name=text-field].theme--dark .text-field--lg .text-field__info{top:calc(-100% + 2px)}[name=text-field].theme--dark .text-field--lg.text-field--has-tabs{border-radius:0 0 0 0}[name=text-field].theme--dark .text-field--lg.text-field--has-tabs .text-field__field{border-radius:0 0 0 0}[name=text-field].theme--dark .text-field--lg.text-field--has-label{margin-top:0}[name=text-field].theme--dark .text-field--lg.text-field--readonly .text-field__field{padding-left:0}[name=text-field].theme--dark .text-field--lg.text-field--readonly.text-field--has-label-inside .text-field__label{left:16px}[name=text-field].theme--dark .text-field--lg.text-field--has-assistive-text{margin-bottom:0}[name=text-field].theme--dark .text-field--lg.text-field--has-label-inside .text-field__label{left:16px;top:8px}[name=text-field].theme--dark .text-field--lg.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:16px}[name=text-field].theme--dark .text-field--lg.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field].theme--dark .text-field--lg.text-field--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--lg.text-field--no-label .text-field__info:after{height:1px}[name=text-field].theme--dark .text-field--lg.text-field__textarea{height:auto}[name=text-field].theme--dark .text-field--lg.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:-2px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:-2px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field].theme--dark .text-field--lg.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:-2px;transform:translateY(2px)}[name=text-field].theme--dark .text-field--lg.text-field--with-icon--leading .text-field__field{padding-left:calc(0 + 8px + 8px)}[name=text-field].theme--dark .text-field--lg.text-field--with-icon--trailing .text-field__field{padding-right:calc(0 + 8px + 8px) !important}[name=text-field].theme--dark .text-field--lg.text-field--with-icon--show-hide .text-field__field{padding-right:calc(0 + (8px * 2) + (8px * 2) ) !important}[name=text-field].theme--dark .text-field--lg.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field].theme--dark .text-field--lg.text-field--rounded .text-field__field{border-radius:0}[name=text-field].theme--dark .inline-text-field .text-field__tabs.text-field--has-label{margin-top:0}[name=text-field].theme--dark .text-field{height:48px;border-radius:8px}[name=text-field].theme--dark .text-field .text-field__button--trailing{right:32px;top:calc(50% - 1px)}[name=text-field].theme--dark .text-field .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field].theme--dark .text-field .text-field__icon--leading{left:16px}[name=text-field].theme--dark .text-field .text-field__icon--trailing{right:16px}[name=text-field].theme--dark .text-field .text-field__icon--show-hide{right:32px;margin-top:-1px}[name=text-field].theme--dark .text-field .text-field__icon--cleaning{right:16px}[name=text-field].theme--dark .text-field .text-field__field{height:48px;padding:0 16px;border-width:1px;border-radius:8px}[name=text-field].theme--dark .text-field .text-field__field__component{height:calc(100% - 1px)}[name=text-field].theme--dark .text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field .text-field__info{top:calc(-100% + 2px)}[name=text-field].theme--dark .text-field.text-field--has-tabs{border-radius:0 0 8px 8px}[name=text-field].theme--dark .text-field.text-field--has-tabs .text-field__field{border-radius:0 0 8px 8px}[name=text-field].theme--dark .text-field.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field.text-field--readonly .text-field__field{padding-left:16px}[name=text-field].theme--dark .text-field.text-field--readonly.text-field--has-label-inside .text-field__label{left:0}[name=text-field].theme--dark .text-field.text-field--has-assistive-text{margin-bottom:8px}[name=text-field].theme--dark .text-field.text-field--has-label-inside .text-field__label{left:0;top:8px}[name=text-field].theme--dark .text-field.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:0}[name=text-field].theme--dark .text-field.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field].theme--dark .text-field.text-field--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field.text-field--no-label .text-field__info:after{height:1px}[name=text-field].theme--dark .text-field.text-field__textarea{height:auto}[name=text-field].theme--dark .text-field.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field].theme--dark .text-field.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field].theme--dark .text-field.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field].theme--dark .text-field.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:48px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:48px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:46px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:48px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:46px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field].theme--dark .text-field.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:22px;transform:translateY(-10px)}[name=text-field].theme--dark .text-field.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 16px + 16px)}[name=text-field].theme--dark .text-field.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 16px + 16px) !important}[name=text-field].theme--dark .text-field.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (16px * 2) + (16px * 2) ) !important}[name=text-field].theme--dark .text-field.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field].theme--dark .text-field.text-field--rounded .text-field__field{border-radius:96px}[name=text-field].theme--dark .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--md{height:48px;border-radius:4px}[name=text-field].theme--dark .text-field--md .text-field__button--trailing{right:16px;top:calc(50% - 1px)}[name=text-field].theme--dark .text-field--md .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field].theme--dark .text-field--md .text-field__icon--leading{left:8px}[name=text-field].theme--dark .text-field--md .text-field__icon--trailing{right:8px}[name=text-field].theme--dark .text-field--md .text-field__icon--show-hide{right:16px;margin-top:-1px}[name=text-field].theme--dark .text-field--md .text-field__icon--cleaning{right:8px}[name=text-field].theme--dark .text-field--md .text-field__field{height:48px;padding:0 16px;border-width:1px;border-radius:4px}[name=text-field].theme--dark .text-field--md .text-field__field__component{height:calc(100% - 1px)}[name=text-field].theme--dark .text-field--md .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--md .text-field__info{top:calc(-100% + 2px)}[name=text-field].theme--dark .text-field--md.text-field--has-tabs{border-radius:0 0 4px 4px}[name=text-field].theme--dark .text-field--md.text-field--has-tabs .text-field__field{border-radius:0 0 4px 4px}[name=text-field].theme--dark .text-field--md.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--md.text-field--readonly .text-field__field{padding-left:0}[name=text-field].theme--dark .text-field--md.text-field--readonly.text-field--has-label-inside .text-field__label{left:0}[name=text-field].theme--dark .text-field--md.text-field--has-assistive-text{margin-bottom:8px}[name=text-field].theme--dark .text-field--md.text-field--has-label-inside .text-field__label{left:0;top:8px}[name=text-field].theme--dark .text-field--md.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:0}[name=text-field].theme--dark .text-field--md.text-field--has-label-inside .text-field__field__component{padding-top:16px}[name=text-field].theme--dark .text-field--md.text-field--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--md.text-field--no-label .text-field__info:after{height:1px}[name=text-field].theme--dark .text-field--md.text-field__textarea{height:auto}[name=text-field].theme--dark .text-field--md.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field].theme--dark .text-field--md.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:48px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:48px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:46px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:48px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:46px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field].theme--dark .text-field--md.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:22px;transform:translateY(-10px)}[name=text-field].theme--dark .text-field--md.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 8px + 8px)}[name=text-field].theme--dark .text-field--md.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 8px + 8px) !important}[name=text-field].theme--dark .text-field--md.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (8px * 2) + (8px * 2) ) !important}[name=text-field].theme--dark .text-field--md.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field].theme--dark .text-field--md.text-field--rounded .text-field__field{border-radius:96px}[name=text-field].theme--dark .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--sm{height:40px;border-radius:8px}[name=text-field].theme--dark .text-field--sm .text-field__button--trailing{right:32px;top:calc(50% - false)}[name=text-field].theme--dark .text-field--sm .text-field__icon{top:calc(50% + 1px);width:24px;font-size:24px}[name=text-field].theme--dark .text-field--sm .text-field__icon--leading{left:16px}[name=text-field].theme--dark .text-field--sm .text-field__icon--trailing{right:16px}[name=text-field].theme--dark .text-field--sm .text-field__icon--show-hide{right:32px;margin-top:-1px}[name=text-field].theme--dark .text-field--sm .text-field__icon--cleaning{right:16px}[name=text-field].theme--dark .text-field--sm .text-field__field{height:40px;padding:0 16px;border-width:1px;border-radius:8px}[name=text-field].theme--dark .text-field--sm .text-field__field__component{height:calc(100% - false)}[name=text-field].theme--dark .text-field--sm .text-field__tabs.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--sm .text-field__info{top:calc(-100% + 2px)}[name=text-field].theme--dark .text-field--sm.text-field--has-tabs{border-radius:0 0 8px 8px}[name=text-field].theme--dark .text-field--sm.text-field--has-tabs .text-field__field{border-radius:0 0 8px 8px}[name=text-field].theme--dark .text-field--sm.text-field--has-label{margin-top:16px}[name=text-field].theme--dark .text-field--sm.text-field--readonly .text-field__field{padding-left:16px}[name=text-field].theme--dark .text-field--sm.text-field--readonly.text-field--has-label-inside .text-field__label{left:false}[name=text-field].theme--dark .text-field--sm.text-field--has-assistive-text{margin-bottom:8px}[name=text-field].theme--dark .text-field--sm.text-field--has-label-inside .text-field__label{left:false;top:false}[name=text-field].theme--dark .text-field--sm.text-field--has-label-inside.text-field--with-icon--leading .text-field__label{left:false}[name=text-field].theme--dark .text-field--sm.text-field--has-label-inside .text-field__field__component{padding-top:false}[name=text-field].theme--dark .text-field--sm.text-field--has-label-inside .text-field__info:after,[name=text-field].theme--dark .text-field--sm.text-field--no-label .text-field__info:after{height:1px}[name=text-field].theme--dark .text-field--sm.text-field__textarea{height:auto}[name=text-field].theme--dark .text-field--sm.text-field__textarea .text-field__field{height:100%;padding:0}[name=text-field].theme--dark .text-field--sm.text-field--with-chips .text-field__field__container{margin-left:-8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips .text-field__field__container .text-field__chip:not(:last-child){margin-right:8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips .text-field--with-icon--leading .text-field__field__container{margin-left:0}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline{height:auto;min-height:40px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field{height:100%;min-height:40px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container{min-height:38px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field--multiline .text-field__field__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test{height:100%;min-height:40px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container{min-height:38px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip{margin-top:8px;margin-bottom:8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"]){margin-top:0}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__field-test__container .text-field__chip:not([input-line=\"1\"])+.text-field__field__component{margin-top:-8px}[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__icon--leading,[name=text-field].theme--dark .text-field--sm.text-field--with-chips.text-field--stacked .text-field__icon--trailing{top:18px;transform:translateY(-8px)}[name=text-field].theme--dark .text-field--sm.text-field--with-icon--leading .text-field__field{padding-left:calc(24px + 16px + 16px)}[name=text-field].theme--dark .text-field--sm.text-field--with-icon--trailing .text-field__field{padding-right:calc(24px + 16px + 16px) !important}[name=text-field].theme--dark .text-field--sm.text-field--with-icon--show-hide .text-field__field{padding-right:calc(24px + (16px * 2) + (16px * 2) ) !important}[name=text-field].theme--dark .text-field--sm.text-field--without-icon--cleaning .text-field__field{padding-right:8px}[name=text-field].theme--dark .text-field--sm.text-field--rounded .text-field__field{border-radius:80px}[name=text-field].theme--dark .inline-text-field .text-field__tabs.text-field--has-label{margin-top:16px}";

const ENOVOSFormItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickIconTrailing = createEvent(this, "clickIconTrailing", 7);
    this.clickIconLeading = createEvent(this, "clickIconLeading", 7);
    this.clickButtonTrailing = createEvent(this, "clickButtonTrailing", 7);
    this.clickForgetPassword = createEvent(this, "clickForgetPassword", 7);
    this.cleaningField = createEvent(this, "cleaningField", 7);
    this.typingField = createEvent(this, "typingField", 7);
    this.changeFiles = createEvent(this, "changeFiles", 7);
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
    onChange('theme', () => {
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
        if (firstItem && has$1(firstItem, 'id')) {
          this.activeTab = get$1(firstItem, 'id');
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
      ].join(' ') }, this.hasLabel()
      ? h("eds-label", { styles: this.labelStyles, size: this.size, class: [this.classNames.EL + this.classNames.LABEL].join(' ') }, this.label)
      : '', this.hasTabs()
      ? h("eds-tabs", { class: [
          `${this.classNames.EL}${this.classNames.TABS}`,
          this.hasTabs() && this.hasLabel() ? `${this.classNames.EL}--has-label` : '',
        ].join(' ') })
      : '', h("div", { class: [
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
      ].join(' ') }, this.hasInfoText() || this.hasTooltip()
      ? h("eds-info", { class: [this.classNames.EL + this.classNames.INFO].join(' '), infoText: this.infoText, infoStyles: this.infoStyles, infoTooltipText: this.infoTooltipText, infoTooltipIcon: this.infoTooltipIcon, infoTooltipSize: this.infoTooltipSize, infoTooltipPointer: this.infoTooltipPointer, infoTooltipStyles: this.infoTooltipStyles, infoTooltipTimeoutValue: this.infoTooltipTimeoutValue, infoTooltipNotimeout: this.infoTooltipNotimeout })
      : '', this.hasIconLeading()
      ? h("eds-icon", { onClick: ev => this.onClickIconLeadingHandler(ev), class: [
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_LEADING,
        ].join(' '), icon: this.iconLeading })
      : '', h("div", { class: [
        `${this.classNames.EL}${this.classNames.FIELD}`,
      ].join(' ') }, h("div", { class: [
        `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.CONTAINER}`,
      ].join(' ') }, this.hasLabelInside()
      ? h("eds-label", { styles: this.labelStyles, size: this.size, onClick: ev => this.onClickLabelInsideHandler(ev), disabled: this.disabled, class: [this.classNames.EL + this.classNames.LABEL].join(' ') }, this.labelInside)
      : '', this.chips && this.chips.length > 0 ?
      uniqBy(this.chips, 'uid').map(item => h("eds-chip", { class: [
          `${this.classNames.EL}${this.classNames.CHIP}`,
        ].join(' '), unselectable: true, uid: item.getProp('uid'), "input-name": item.hasProp('inputName') ? item.getProp('inputName') : '', label: item.hasProp('label') ? item.getProp('label') : undefined, value: item.hasProp('value') ? item.getProp('value') : undefined, size: item.hasProp('size') ? item.getProp('size') : undefined, "read-only": item.hasProp('readOnly') ? item.getProp('readOnly') : false, "size-avatar": item.hasProp('sizeAvatar') ? item.getProp('sizeAvatar') : undefined, styles: item.hasProp('styles') ? item.getProp('styles') : undefined, "leading-type": item.hasProp('leading.type') ? item.getProp('leading.type') : undefined, "leading-value": item.hasProp('leading.value') ? item.getProp('leading.value') : undefined, "trailing-type": item.hasProp('trailing.type') ? item.getProp('trailing.type') : undefined, "trailing-value": item.hasProp('trailing.value') ? item.getProp('trailing.value') : undefined, "trailing-event": item.getProp('readOnly') === true ? false : true })) : '', ['text', 'email', 'number', 'password', 'tel', 'textarea', 'file'].includes(this.inputType)
      ? h("eds-input", { type: this.type, ellipsis: this.ellipsis, step: this.step, class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT}`, disabled: this.disabled, "read-only": this.readOnly, debounce: this.debounce, dataName: this.dataName, dataValue: this.dataValue, styles: this.getStylesAttributes(), size: this.size, placeholder: this.placeholder })
      : '', ['select'].includes(this.inputType)
      ? h("eds-select", { options: this.options, class: `${this.classNames.EL}${this.classNames.FIELD}${this.classNames.COMPONENT}`, disabled: this.disabled, dataName: this.dataName, dataValue: this.dataValue, styles: this.getStylesAttributes() })
      : '')), this.hasIconTrailing()
      ? h("eds-icon", { onClick: ev => this.onClickIconTrailingHandler(ev), class: [
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_TRAILING,
        ].join(' '), icon: this.iconTrailing })
      : '', this.trailingButton !== undefined
      ? h("eds-button", { onClickButton: ev => this.onClickButtonTrailingHandler(ev), styles: has$1(this.trailingButton, `styles`) ? get$1(this.trailingButton, `styles`) : '', size: has$1(this.trailingButton, `size`) ? get$1(this.trailingButton, `size`) : 'sm', outlined: has$1(this.trailingButton, `outlined`) ? get$1(this.trailingButton, `size`) : false, textOnly: has$1(this.trailingButton, `textOnly`) ? get$1(this.trailingButton, `textOnly`) : false, class: [
          `${this.classNames.EL}${this.classNames.BUTTON}`,
          `${this.classNames.EL}${this.classNames.BUTTON}${this.classNames.TRAILING}`,
        ].join(' ') }, has$1(this.trailingButton, `icon`) ?
        h("eds-icon", { slot: "icon", icon: get$1(this.trailingButton, `icon`) })
        : '')
      : '', this.hasIconShowHide() && this.trailingButton === undefined
      ? h("eds-button", { styles: "quaternary", class: [
          (this.dataValue === '') ? `${this.classNames.EL}--hidden` : `${this.classNames.EL}--visible`,
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_SHOW_HIDE,
        ].join(' '), size: "sm" }, h("eds-icon", { slot: "icon", icon: this.icons.SHOW }))
      : '', this.hasIconShowHide()
      ? h("eds-link", { onClick: ev => this.onClickForgetPasswordHandler(ev), class: [
          (this.dataValue !== '') ? `${this.classNames.EL}--hidden` : `${this.classNames.EL}--visible`,
          `${this.classNames.EL}${this.classNames.LINK}`,
        ].join(' '), size: "sm", styles: this.getLinkColor(), content: this.forgetLinkText })
      : '', this.hasClearButton()
      ? h("eds-icon", { onClick: ev => this.cleanFieldHandler(ev), class: [
          this.classNames.EL + this.classNames.ICON,
          this.classNames.EL + this.classNames.ICON + this.classNames.ICON_CLEANING,
        ].join(' '), icon: "times" })
      : ''), this.displayError()
      ? h("eds-assistive-text", { class: this.classNames.EL + this.classNames.ASSISTIVE_TEXT, styles: this.getStylesAttributes(), icon: this.iconAssistiveText, message: this.assistiveTextMessage.message, code: this.assistiveTextMessage.code, type: this.assistiveTextMessage.type })
      : ''));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "assistiveText": ["watchAssistiveTextHandler"],
    "tabItems": ["watchTabItemsHandler"]
  }; }
};
ENOVOSFormItem.style = textFieldCss;

const tooltipCss = "[name=tooltip] .tooltip{position:fixed;z-index:6000;display:inline-flex;align-items:center;justify-content:center;font-family:\"Montserrat\", sans-serif;text-decoration:inherit;text-transform:inherit;opacity:0;visibility:hidden;outline:none;transform:scale(0.9);transition:opacity 150ms ease-in, transform 150ms ease-in, visibility 150ms ease-in;-webkit-appearance:none}[name=tooltip] .tooltip--active{opacity:1;visibility:visible;transform:scale(1);transition:opacity 75ms ease-out, transform 75ms ease-out, visibility 75ms ease-out}[name=tooltip] .tooltip--pointer .tooltip__content__text{position:relative}[name=tooltip] .tooltip--pointer .tooltip__content--pointer{position:absolute;left:0;right:0;z-index:0;margin:auto;overflow:visible;content:\"\";transform:rotate(45deg)}[name=tooltip] .tooltip[data-placement*=top]{transform:translateY(-50%)}[name=tooltip] .tooltip[data-placement*=top][data-placement*=left]{transform:translate(-50%, -50%)}[name=tooltip] .tooltip[data-placement*=top][data-placement*=right]{transform:translate(50%, -50%)}[name=tooltip] .tooltip[data-placement*=bottom]{transform:translateY(50%)}[name=tooltip] .tooltip[data-placement*=bottom][data-placement*=left]{transform:translate(-50%, 50%)}[name=tooltip] .tooltip[data-placement*=bottom][data-placement*=right]{transform:translate(50%, 50%)}[name=tooltip] .tooltip[data-placement*=left]{transform:translateX(-50%)}[name=tooltip] .tooltip[data-placement*=right]{transform:translateX(50%)}[name=tooltip] .tooltip.tooltip{max-width:464px;min-height:0}[name=tooltip] .tooltip.tooltip .tooltip__content{border-radius:8px}[name=tooltip] .tooltip.tooltip .tooltip__content__text{padding:8px;border-radius:8px;font-size:12px;font-weight:400;line-height:16px}[name=tooltip] .tooltip.tooltip[data-placement*=top]{padding-bottom:8px}[name=tooltip] .tooltip.tooltip[data-placement*=bottom]{padding-top:8px}[name=tooltip] .tooltip.tooltip[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip] .tooltip.tooltip[data-placement*=left]{padding-right:8px}[name=tooltip] .tooltip.tooltip[data-placement*=right]{padding-left:8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip] .tooltip.tooltip.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip] .tooltip.tooltip{max-width:200px}}[name=tooltip] .tooltip.tooltip--lg{max-width:464px;min-height:0}[name=tooltip] .tooltip.tooltip--lg .tooltip__content{border-radius:8px}[name=tooltip] .tooltip.tooltip--lg .tooltip__content__text{padding:16px;border-radius:8px;font-size:16px;font-weight:400;line-height:24px}[name=tooltip] .tooltip.tooltip--lg[data-placement*=top]{padding-bottom:8px}[name=tooltip] .tooltip.tooltip--lg[data-placement*=bottom]{padding-top:8px}[name=tooltip] .tooltip.tooltip--lg[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--lg[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip] .tooltip.tooltip--lg[data-placement*=left]{padding-right:8px}[name=tooltip] .tooltip.tooltip--lg[data-placement*=right]{padding-left:8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip] .tooltip.tooltip--lg.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip] .tooltip.tooltip--lg{max-width:200px}}[name=tooltip] .tooltip.tooltip--md{max-width:464px;min-height:0}[name=tooltip] .tooltip.tooltip--md .tooltip__content{border-radius:8px}[name=tooltip] .tooltip.tooltip--md .tooltip__content__text{padding:8px;border-radius:8px;font-size:12px;font-weight:400;line-height:16px}[name=tooltip] .tooltip.tooltip--md[data-placement*=top]{padding-bottom:8px}[name=tooltip] .tooltip.tooltip--md[data-placement*=bottom]{padding-top:8px}[name=tooltip] .tooltip.tooltip--md[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--md[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip] .tooltip.tooltip--md[data-placement*=left]{padding-right:8px}[name=tooltip] .tooltip.tooltip--md[data-placement*=right]{padding-left:8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip] .tooltip.tooltip--md.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip] .tooltip.tooltip--md{max-width:200px}}[name=tooltip] .tooltip.tooltip--sm{max-width:400px;min-height:0}[name=tooltip] .tooltip.tooltip--sm .tooltip__content{border-radius:8px}[name=tooltip] .tooltip.tooltip--sm .tooltip__content__text{padding:8px;border-radius:8px;font-size:10px;font-weight:400;line-height:16px}[name=tooltip] .tooltip.tooltip--sm[data-placement*=top]{padding-bottom:5px}[name=tooltip] .tooltip.tooltip--sm[data-placement*=bottom]{padding-top:5px}[name=tooltip] .tooltip.tooltip--sm[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--sm[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip] .tooltip.tooltip--sm[data-placement*=left]{padding-right:5px}[name=tooltip] .tooltip.tooltip--sm[data-placement*=right]{padding-left:5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer .tooltip__content--pointer{width:5px;height:5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:2.5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:2.5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:13px;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:2.5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:2.5px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:5px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 8px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip] .tooltip.tooltip--sm.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:2.5px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip] .tooltip.tooltip--sm{max-width:200px}}[name=tooltip] .tooltip.tooltip--xs{max-width:336px;min-height:0}[name=tooltip] .tooltip.tooltip--xs .tooltip__content{border-radius:8px}[name=tooltip] .tooltip.tooltip--xs .tooltip__content__text{padding:4px;border-radius:8px;font-size:8px;font-weight:600;line-height:16px}[name=tooltip] .tooltip.tooltip--xs[data-placement*=top]{padding-bottom:5px}[name=tooltip] .tooltip.tooltip--xs[data-placement*=bottom]{padding-top:5px}[name=tooltip] .tooltip.tooltip--xs[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--xs[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip] .tooltip.tooltip--xs[data-placement*=left]{padding-right:5px}[name=tooltip] .tooltip.tooltip--xs[data-placement*=right]{padding-left:5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer .tooltip__content--pointer{width:5px;height:5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:2.5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:2.5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:13px;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:2.5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:2.5px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:5px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 8px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip] .tooltip.tooltip--xs.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:2.5px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip] .tooltip.tooltip--xs{max-width:200px}}[name=tooltip] .tooltip.tooltip .tooltip__content{color:#5E5E5E;background-color:#FFFFFF}[name=tooltip] .tooltip.tooltip.tooltip--pointer .tooltip__content--pointer{background-color:#FFFFFF}[name=tooltip] .tooltip.tooltip--white .tooltip__content{color:#FFFFFF;background-color:#5E5E5E}[name=tooltip] .tooltip.tooltip--white.tooltip--pointer .tooltip__content--pointer{background-color:#5E5E5E}[name=tooltip] .tooltip.tooltip--tertiary-800 .tooltip__content{color:#FFFFFF;background-color:#004885}[name=tooltip] .tooltip.tooltip--tertiary-800.tooltip--pointer .tooltip__content--pointer{background-color:#004885}[name=tooltip] .tooltip.tooltip--secondary .tooltip__content{color:#FFFFFF;background-color:#5E5E5E}[name=tooltip] .tooltip.tooltip--secondary.tooltip--pointer .tooltip__content--pointer{background-color:#5E5E5E}[name=tooltip] .tooltip.tooltip--quaternary .tooltip__content{color:#FFFFFF;background-color:#C75300}[name=tooltip] .tooltip.tooltip--quaternary.tooltip--pointer .tooltip__content--pointer{background-color:#C75300}[name=tooltip].theme--dark .tooltip{position:fixed;z-index:6000;display:inline-flex;align-items:center;justify-content:center;font-family:\"Montserrat\", sans-serif;text-decoration:inherit;text-transform:inherit;opacity:0;visibility:hidden;outline:none;transform:scale(0.9);transition:opacity 150ms ease-in, transform 150ms ease-in, visibility 150ms ease-in;-webkit-appearance:none}[name=tooltip].theme--dark .tooltip--active{opacity:1;visibility:visible;transform:scale(1);transition:opacity 75ms ease-out, transform 75ms ease-out, visibility 75ms ease-out}[name=tooltip].theme--dark .tooltip--pointer .tooltip__content__text{position:relative}[name=tooltip].theme--dark .tooltip--pointer .tooltip__content--pointer{position:absolute;left:0;right:0;z-index:0;margin:auto;overflow:visible;content:\"\";transform:rotate(45deg)}[name=tooltip].theme--dark .tooltip[data-placement*=top]{transform:translateY(-50%)}[name=tooltip].theme--dark .tooltip[data-placement*=top][data-placement*=left]{transform:translate(-50%, -50%)}[name=tooltip].theme--dark .tooltip[data-placement*=top][data-placement*=right]{transform:translate(50%, -50%)}[name=tooltip].theme--dark .tooltip[data-placement*=bottom]{transform:translateY(50%)}[name=tooltip].theme--dark .tooltip[data-placement*=bottom][data-placement*=left]{transform:translate(-50%, 50%)}[name=tooltip].theme--dark .tooltip[data-placement*=bottom][data-placement*=right]{transform:translate(50%, 50%)}[name=tooltip].theme--dark .tooltip[data-placement*=left]{transform:translateX(-50%)}[name=tooltip].theme--dark .tooltip[data-placement*=right]{transform:translateX(50%)}[name=tooltip].theme--dark .tooltip.tooltip{max-width:464px;min-height:0}[name=tooltip].theme--dark .tooltip.tooltip .tooltip__content{border-radius:8px}[name=tooltip].theme--dark .tooltip.tooltip .tooltip__content__text{padding:8px;border-radius:8px;font-size:12px;font-weight:400;line-height:16px}[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=top]{padding-bottom:8px}[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=bottom]{padding-top:8px}[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=left]{padding-right:8px}[name=tooltip].theme--dark .tooltip.tooltip[data-placement*=right]{padding-left:8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip].theme--dark .tooltip.tooltip{max-width:200px}}[name=tooltip].theme--dark .tooltip.tooltip--lg{max-width:464px;min-height:0}[name=tooltip].theme--dark .tooltip.tooltip--lg .tooltip__content{border-radius:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg .tooltip__content__text{padding:16px;border-radius:8px;font-size:16px;font-weight:400;line-height:24px}[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=top]{padding-bottom:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=bottom]{padding-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=left]{padding-right:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg[data-placement*=right]{padding-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--lg.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip].theme--dark .tooltip.tooltip--lg{max-width:200px}}[name=tooltip].theme--dark .tooltip.tooltip--md{max-width:464px;min-height:0}[name=tooltip].theme--dark .tooltip.tooltip--md .tooltip__content{border-radius:8px}[name=tooltip].theme--dark .tooltip.tooltip--md .tooltip__content__text{padding:8px;border-radius:8px;font-size:12px;font-weight:400;line-height:16px}[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=top]{padding-bottom:8px}[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=bottom]{padding-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=left]{padding-right:8px}[name=tooltip].theme--dark .tooltip.tooltip--md[data-placement*=right]{padding-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer .tooltip__content--pointer{width:8px;height:8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:4px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:16px;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:4px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:4px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:8px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 16px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--md.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:4px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip].theme--dark .tooltip.tooltip--md{max-width:200px}}[name=tooltip].theme--dark .tooltip.tooltip--sm{max-width:400px;min-height:0}[name=tooltip].theme--dark .tooltip.tooltip--sm .tooltip__content{border-radius:8px}[name=tooltip].theme--dark .tooltip.tooltip--sm .tooltip__content__text{padding:8px;border-radius:8px;font-size:10px;font-weight:400;line-height:16px}[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=top]{padding-bottom:5px}[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=bottom]{padding-top:5px}[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=left]{padding-right:5px}[name=tooltip].theme--dark .tooltip.tooltip--sm[data-placement*=right]{padding-left:5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer .tooltip__content--pointer{width:5px;height:5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:13px;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:5px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 8px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--sm.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:2.5px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip].theme--dark .tooltip.tooltip--sm{max-width:200px}}[name=tooltip].theme--dark .tooltip.tooltip--xs{max-width:336px;min-height:0}[name=tooltip].theme--dark .tooltip.tooltip--xs .tooltip__content{border-radius:8px}[name=tooltip].theme--dark .tooltip.tooltip--xs .tooltip__content__text{padding:4px;border-radius:8px;font-size:8px;font-weight:600;line-height:16px}[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=top]{padding-bottom:5px}[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=bottom]{padding-top:5px}[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=bottom][data-placement*=right]{padding-top:0}[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=left]{padding-right:5px}[name=tooltip].theme--dark .tooltip.tooltip--xs[data-placement*=right]{padding-left:5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer .tooltip__content--pointer{width:5px;height:5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=middle][data-placement*=center] .tooltip__content--pointer{display:none}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top]{margin-top:-8px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top] .tooltip__content--pointer{bottom:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=right]{margin-top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=top][data-placement*=right] .tooltip__content--pointer{bottom:13px;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom]{margin-top:8px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom] .tooltip__content--pointer{top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=left],[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=right]{margin-top:2.5px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=left] .tooltip__content--pointer,[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=bottom][data-placement*=right] .tooltip__content--pointer{top:5px;bottom:inherit;transform:translateY(0) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=left]{margin-left:-8px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=left] .tooltip__content--pointer{left:calc(100% - 8px);bottom:50%;transform:translateY(50%) rotate(45deg)}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=right]{margin-left:8px}[name=tooltip].theme--dark .tooltip.tooltip--xs.tooltip--pointer[data-placement*=right] .tooltip__content--pointer{left:2.5px;right:inherit;bottom:50%;transform:translateY(50%) rotate(45deg)}@media (max-width: 639px){[name=tooltip].theme--dark .tooltip.tooltip--xs{max-width:200px}}[name=tooltip].theme--dark .tooltip.tooltip .tooltip__content{color:#5E5E5E;background-color:#FFFFFF}[name=tooltip].theme--dark .tooltip.tooltip.tooltip--pointer .tooltip__content--pointer{background-color:#FFFFFF}[name=tooltip].theme--dark .tooltip.tooltip--white .tooltip__content{color:#FFFFFF;background-color:#5E5E5E}[name=tooltip].theme--dark .tooltip.tooltip--white.tooltip--pointer .tooltip__content--pointer{background-color:#5E5E5E}[name=tooltip].theme--dark .tooltip.tooltip--tertiary-800 .tooltip__content{color:#FFFFFF;background-color:#004885}[name=tooltip].theme--dark .tooltip.tooltip--tertiary-800.tooltip--pointer .tooltip__content--pointer{background-color:#004885}[name=tooltip].theme--dark .tooltip.tooltip--secondary .tooltip__content{color:#FFFFFF;background-color:#5E5E5E}[name=tooltip].theme--dark .tooltip.tooltip--secondary.tooltip--pointer .tooltip__content--pointer{background-color:#5E5E5E}[name=tooltip].theme--dark .tooltip.tooltip--quaternary .tooltip__content{color:#FFFFFF;background-color:#C75300}[name=tooltip].theme--dark .tooltip.tooltip--quaternary.tooltip--pointer .tooltip__content--pointer{background-color:#C75300}";

const ENOVOSTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.autoInit = true; // Defines if component should be initalize as soon as it's loaded
    this.placement = 'top'; // The position where the tooltip should be display
    this.timeoutValue = 2000; // Default value for timeout delay
    this.notimeout = false;
    this.elevationStyle = 'light';
    this.elevationLevel = '2';
    this.availableVerticalPosition = ['top', 'middle', 'bottom'];
    this.availableHorizontalPosition = ['left', 'center', 'right'];
    this.finalPlacement = [];
    this.revertPlacement = [];
    this.classNames = {
      EL: 'tooltip',
      CONTENT: '__content',
      TEXT: '__text',
      POINTER: '--pointer',
      ACTIVE: '--active',
    };
    this.tooltipRect = {
      width: 0,
      height: 0,
    };
    this.space = 8;
    this.eventStart = 'mouseover';
    this.eventEnd = 'mouseleave';
    this.attachmentMap = {
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
      CENTER: 'center',
    };
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init the host element and attach event
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    if (this.autoInit) {
      this.init();
    }
  }
  async init() {
    const selectorEl = document.querySelector(`#${this.selector}`);
    if (selectorEl) {
      this.initEventsListener(selectorEl);
    }
    const availableVerticalPositionClasses = [];
    const availableHorizontalPositionClasses = [];
    const availablePositionClasses = this.placement.split(' ');
    availablePositionClasses.map(availablePositionClass => {
      if (this.availableVerticalPosition.includes(availablePositionClass)) {
        availableVerticalPositionClasses.push(availablePositionClass);
      }
      if (this.availableHorizontalPosition.includes(availablePositionClass)) {
        availableHorizontalPositionClasses.push(availablePositionClass);
      }
    });
    // Set default top center if wrong/missing values are set
    if (availableVerticalPositionClasses.length === 0) {
      availableVerticalPositionClasses.push(this.availableVerticalPosition[1]);
    }
    if (availableHorizontalPositionClasses.length === 0) {
      availableHorizontalPositionClasses.push(this.availableHorizontalPosition[1]);
    }
    // Set final placement
    const elComponent = this.el.querySelector(`.${this.classNames.EL}`);
    if (elComponent) {
      elComponent.setAttribute('data-placement', availableVerticalPositionClasses.concat(availableHorizontalPositionClasses).join(' '));
    }
    this.finalPlacement = availableVerticalPositionClasses.concat(availableHorizontalPositionClasses);
  }
  async closeTooltip() {
    this.tooltip.style.display = 'none';
    this.hideTooltip();
    setTimeout(() => { this.tooltip.style.removeProperty('display'); }, 1);
  }
  /**
   * @description Add event listener on targer element
   */
  initEventsListener(el) {
    const allowedTouch = 'ontouchstart' in window;
    if (allowedTouch) {
      this.eventStart = 'touchstart';
      this.eventEnd = 'touchend';
    }
    this.tooltip = this.el.querySelector(`.${this.classNames.EL}`);
    el.addEventListener(this.eventStart, () => this.showTooltip());
    // If the user takes another action before timeout, the tooltip is automatically hide
    el.addEventListener(this.eventEnd, () => this.hideTooltip());
  }
  /**
   * @description Trigger mouse over element on target element
   */
  showTooltip() {
    const target = document.querySelector(`#${this.selector}`);
    if (target) {
      // Get the original size of tooltip.
      // Changes can be applied if the placement should be reverse
      this.tooltipRect = {
        width: this.tooltip.offsetWidth,
        height: this.tooltip.offsetHeight,
      };
      // Get the default coords position
      let coords = this.setPosition(target, this.finalPlacement);
      this.tooltip.style.left = `${Math.round(coords.left)}px`;
      this.tooltip.style.top = `${Math.round(coords.top)}px`;
      // Check if the tooltip is visible or not in the view port
      if (!this.isInViewPort()) {
        // Generate the new coords position of the tooltip with revert value
        coords = this.setPosition(target, this.revertPlacement);
        this.tooltip.style.left = `${Math.round(coords.left)}px`;
        this.tooltip.style.top = `${Math.round(coords.top)}px`;
        // Set final placement
        this.el.querySelector(`.${this.classNames.EL}`).setAttribute('data-placement', this.revertPlacement.join(' '));
        this.finalPlacement = this.revertPlacement;
      }
      // Show the tooltip
      this.tooltip.classList.add(`${this.classNames.EL}${this.classNames.ACTIVE}`);
      // The tooltip is display for a define period only if notimeout is false
      if (!this.notimeout) {
        this.timeout = setTimeout(() => { this.hideTooltip(); }, this.timeoutValue);
      }
    }
  }
  /**
   * @description Hide the tooltip, removing the active class
   */
  hideTooltip() {
    this.tooltip.classList.remove(`${this.classNames.EL}${this.classNames.ACTIVE}`);
    clearTimeout(this.timeout);
  }
  /**
   * @description Hide the tooltip, removing the active class
   * @param el {HTMLElement} The target element on which the tooltip is attached
   * @param placement {string} The position of the tooltip compared to target element
   */
  setPosition(el, placement) {
    const elBoundingClientRect = el.getBoundingClientRect();
    // Init the tooltip position exactly hover the target element
    const coords = {
      left: Math.round(elBoundingClientRect.left + ((elBoundingClientRect.width - this.tooltipRect.width) / 2)),
      top: Math.round(elBoundingClientRect.top - ((this.tooltipRect.height - elBoundingClientRect.height) / 2)),
    };
    // The depending the placement position, adapt the absolute position
    placement.map(placementKey => {
      switch (placementKey) {
        case this.attachmentMap.LEFT:
          coords.left -= Math.round(elBoundingClientRect.width) / 2;
          break;
        case this.attachmentMap.RIGHT:
          coords.left += Math.round(elBoundingClientRect.width) / 2;
          break;
        case this.attachmentMap.BOTTOM:
          if (!placement.includes(this.attachmentMap.CENTER)) {
            coords.top -= Math.round(elBoundingClientRect.height) / 2;
          }
          else {
            coords.top += Math.round(elBoundingClientRect.height) / 2;
          }
          break;
        case this.attachmentMap.TOP:
          if (!placement.includes(this.attachmentMap.CENTER)) {
            coords.top += Math.round(elBoundingClientRect.height) / 2;
          }
          else {
            coords.top -= Math.round(elBoundingClientRect.height) / 2;
          }
          break;
      }
    });
    return coords;
  }
  /**
   * @description Check if the position of the tooltip is visible in the view port
   * Check on the extrem point of the tooltip for each direction. For example, if the
   * position of the tooltip is right, check if the right corner of the tooltip is visible
   * or not
   */
  isInViewPort() {
    const x = this.tooltip.getBoundingClientRect().left;
    const y = this.tooltip.getBoundingClientRect().top;
    const width = this.tooltipRect.width;
    const height = this.tooltipRect.height;
    const ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.revertPlacement = [];
    this.finalPlacement.map(placementKey => {
      switch (placementKey) {
        case this.attachmentMap.LEFT:
          this.revertPlacement.push((x > 0) ? this.attachmentMap.LEFT : this.attachmentMap.RIGHT);
          break;
        case this.attachmentMap.RIGHT:
          this.revertPlacement.push(((x + width) < ww) ? this.attachmentMap.RIGHT : this.attachmentMap.LEFT);
          break;
        case this.attachmentMap.BOTTOM:
          this.revertPlacement.push(((y + height) < hw) ? this.attachmentMap.BOTTOM : this.attachmentMap.TOP);
          break;
        case this.attachmentMap.TOP:
          this.revertPlacement.push((y > 0) ? this.attachmentMap.TOP : this.attachmentMap.BOTTOM);
          break;
        default:
          this.revertPlacement.push(placementKey);
          break;
      }
    });
    return isEqual(this.finalPlacement.sort(), this.revertPlacement.sort());
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { tabIndex: -1, class: [
        this.classNames.EL,
        this.pointer ? `${this.classNames.EL}${this.classNames.POINTER}` : '',
        this.getSize(),
        StylePropsHelper.getStyles(this.styles, this.classNames.EL),
      ].join(' ') }, h("eds-elevation", { class: `${this.classNames.EL}${this.classNames.CONTENT}`, styles: this.elevationStyle, level: this.elevationLevel }, h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.TEXT}` }, this.text ? this.text : ''), this.pointer ?
      h("div", { class: `${this.classNames.EL}${this.classNames.CONTENT}${this.classNames.POINTER}` })
      : '')));
  }
  get el() { return getElement(this); }
};
ENOVOSTooltip.style = tooltipCss;

export { ENOVOSFieldHelper as eds_assistive_text, ENOVOSAvatar as eds_avatar, ENOVOSBadge as eds_badge, ENOVOSCheckbox as eds_checkbox, ENOVOSChip as eds_chip, ENOVOSDropdown as eds_dropdown, ENOVOSInfoText as eds_info, ENOVOSInput as eds_input, ENOVOSLabel as eds_label, ENOVOSLink as eds_link, ENOVOSPositionedBadge as eds_positioned_badge, ENOVOSPositionedIcon as eds_positioned_icon, ENOVOSRadioButton as eds_radio_button, ENOVOSSelect as eds_select, ENOVOSSelectionControls as eds_selection_controls, ENOVOSSwitch as eds_switch, ENOVOSTabs as eds_tabs, ENOVOSFormItem as eds_text_field, ENOVOSTooltip as eds_tooltip };
