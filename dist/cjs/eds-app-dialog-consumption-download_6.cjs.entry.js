'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
const toString = require('./toString-a99a8519.js');
require('./toNumber-e6ce1248.js');
require('./isObject-110b878e.js');
const identity$4 = require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
const uniq = require('./uniq-b3cd4da7.js');
const set$2 = require('./set-82454825.js');
const _arrayEach = require('./_arrayEach-c0f7fc70.js');
require('./_baseFindIndex-4f56dd76.js');
const _hasPath = require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_setToArray-21e6bd5a.js');
const _baseEach = require('./_baseEach-0b5062cd.js');
const debounce = require('./debounce-504be00b.js');
const has = require('./has-c1d0fffa.js');
const isEqual = require('./isEqual-54b6e24e.js');
const uniqueId = require('./uniqueId-e50b94aa.js');
const themes = require('./themes-bd258a0a.js');
const isVisibleObservable = require('./isVisibleObservable-3f219690.js');
require('./v4-378e0891.js');
const DatalistItemPropsHelper = require('./DatalistItemPropsHelper-4572ca28.js');
const tapEvent = require('./tapEvent-39dbfe4f.js');
const ComponentPropsHelper = require('./ComponentPropsHelper-fe2f4a61.js');

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity$4.identity;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = toString.isArray(collection) ? _arrayEach.arrayEach : _baseEach.baseEach;
  return func(collection, castFunction(iteratee));
}

const appDialogConsumptionDownloadCss = "[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__header{display:flex;align-items:center;justify-content:space-between}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__body__fields{display:flex;align-items:flex-start;justify-content:space-between}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__body__fields>*{display:block;width:100%}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__body__fields>*:not(:first-child){margin-left:8px}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__body__fields>*:not(:last-child){margin-right:8px}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__body__buttons{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__footer{display:flex;align-items:flex-start;justify-content:space-between}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__footer__text{flex:1 0 auto;margin:0 16px}[name=app-dialog-consumption-download] .app-dialog-consumption-download__dialog__footer__button{-ms-grid-row-align:center;align-self:center}";

const ENOVOSAppDialogConsumptionDownload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.classNames = {
      EL: 'app-dialog-consumption-download',
      DIALOG: '__dialog',
      HEADER: '__header',
      BODY: '__body',
      FOOTER: '__footer',
      FIELDS: '__fields',
      BUTTONS: '__buttons',
      BUTTON: '__button',
      TEXT: '__text',
    };
  }
  async displayDialog(value) {
    const dialogEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DIALOG}`);
    if (dialogEl) {
      value ? dialogEl.open() : dialogEl.close();
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
    const dropdownFrequency = this.el.querySelector(`#dropdown-frequency`);
    if (dropdownFrequency) {
      dropdownFrequency.setData([
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130001',
          'label': 'Every quarter hour',
        },
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130002',
          'label': 'Every quarter day',
        },
        {
          'id': '4f321aba-6436-11ea-bc55-0242ac130003',
          'label': 'Every quarter week',
        },
      ]);
    }
  }
  fillDatePicker(e) {
    const textFieldRangePicker = this.el.querySelector('#text-field-range-picker');
    if (textFieldRangePicker) {
      textFieldRangePicker.dataValue = `From ${e.detail.formatted}`;
    }
  }
  fillDateFrequency(e) {
    const textFieldDropdown = this.el.querySelector('#text-field-dropdown-frequency');
    textFieldDropdown.dataValue = e.detail.label;
  }
  render() {
    return (index.h("eds-dialog", { class: `${this.classNames.EL}${this.classNames.DIALOG}`, disableScroll: true }, index.h("div", { slot: "dialog-header" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.HEADER}` }, index.h("eds-heading", { type: "h5", "font-weight": "bold", styles: "left secondary-500", content: "Consumption download" }), index.h("eds-button", { size: "sm", textOnly: true, styles: "secondary", onClickButton: () => this.displayDialog(false) }, index.h("eds-icon", { slot: "icon", icon: "times" }))), index.h("eds-paragraph", { type: "body-1", styles: "left secondary-500" }, "Download data from consumption chart and use it in software of your choice.")), index.h("div", { slot: "dialog-body" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}` }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}${this.classNames.FIELDS}` }, index.h("eds-date-picker", { id: "date-range-picker", "is-ranged": true, onClickDatePicker: e => this.fillDatePicker(e) }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { id: "text-field-range-picker", iconTrailing: "calendar-alt", labelInside: "Data timeline", type: "text" }))), index.h("eds-dropdown", { "autocomplete-on-focus": true, id: "dropdown-frequency", onClickDropdownItem: e => this.fillDateFrequency(e) }, index.h("div", { slot: "selector" }, index.h("eds-text-field", { id: "text-field-dropdown-frequency", iconTrailing: "question-circle", debounce: 300, labelInside: "Data frequency", type: "text" })))), index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.BODY}${this.classNames.BUTTONS}` }, index.h("eds-button", { content: "Download .csv", size: "md", styles: "primary" })))), index.h("div", { slot: "dialog-footer" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}` }, index.h("eds-icon", { slot: "icon", size: "3x", styles: "secondary-500", icon: "info-circle" }), index.h("div", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}${this.classNames.TEXT}` }, index.h("eds-paragraph", { type: "body-1", fontWeight: "bold", styles: "left secondary-500" }, "Do you want to download consumption for more contracts at once?"), index.h("eds-paragraph", { type: "body-2", styles: "left secondary-500" }, "Save time and gather data you need in one click.")), index.h("eds-button", { class: `${this.classNames.EL}${this.classNames.DIALOG}${this.classNames.FOOTER}${this.classNames.BUTTON}`, content: "Choose contracts", iconPosition: "right", outlined: true, onClickButton: () => this.displayDialog(false), styles: "secondary", size: "sm" }, index.h("eds-icon", { slot: "icon", icon: "chevron-right" }))))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSAppDialogConsumptionDownload.style = appDialogConsumptionDownloadCss;

const appPeriodicConsumptionCss = "@media (min-width: 640px){[name=app-periodic-consumption] .app-periodic-consumption__body{display:flex;align-items:center;justify-content:space-between}}@media (min-width: 640px){[name=app-periodic-consumption] .app-periodic-consumption__body__text{flex:0 0 50%}}[name=app-periodic-consumption] .app-periodic-consumption__body__text>div:not(:last-child){margin-bottom:8px}[name=app-periodic-consumption] .app-periodic-consumption__body__text__value{display:flex;align-items:center;justify-content:flex-start}[name=app-periodic-consumption] .app-periodic-consumption__body__text__value>*:not(:first-child){margin-left:8px}[name=app-periodic-consumption] .app-periodic-consumption__body__chart{flex:0 0 50%;margin-top:24px}@media (min-width: 640px){[name=app-periodic-consumption] .app-periodic-consumption__body__chart{margin-top:0}}";

const ENOVOSAppPeriodicConsumption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.chartMinValue = 0;
    this.chartMaxValue = 1000;
    this.styles = 'primary';
    this.classNames = {
      EL: 'app-periodic-consumption',
      BODY: '__body',
      TEXT: '__text',
      CHART: '__chart',
      VALUE: '__value',
    };
    this.renderCaption = (itemTitle, itemValue, itemCaptionIcon, itemCaptionStyles, itemCaptionText) => (index.h("div", null, index.h("eds-paragraph", { type: "body-2", fontWeight: "bold", content: itemTitle }), index.h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.TEXT}${this.classNames.VALUE}` }, index.h("eds-heading", { type: "h6", content: itemValue, styles: "secondary" }), itemCaptionIcon && itemCaptionStyles && itemCaptionText && [
      index.h("eds-icon", { icon: itemCaptionIcon, styles: itemCaptionStyles }),
      index.h("eds-paragraph", { type: "body-2", content: itemCaptionText }),
    ])));
  }
  /**
   * @description (Re-)calculate charts' width
   */
  async calculateChartsWidth() {
    const barCharts = this.el.querySelectorAll('[name="bar-chart"]');
    if (barCharts && barCharts.length > 0) {
      barCharts.forEach(barChart => {
        barChart.calculateWidth();
      });
    }
  }
  componentWillLoad() {
    this.el.setAttribute('name', this.classNames.EL);
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
  }
  render() {
    return (index.h("eds-card", null, index.h("div", { slot: "card-content" }, index.h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` }, index.h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.TEXT}` }, this.renderCaption(this.firstItemTitle, this.firstItemValue, this.firstItemCaptionIcon, this.firstItemCaptionStyles, this.firstItemCaptionText), this.renderCaption(this.secondItemTitle, this.secondItemValue, this.secondItemCaptionIcon, this.secondItemCaptionStyles, this.secondItemCaptionText)), index.h("div", { class: `${this.classNames.EL}${this.classNames.BODY}${this.classNames.CHART}` }, index.h("eds-bar-chart", { height: 130, "min-width": 100, data: {
        style: this.styles,
        items: [
          {
            value: this.chartValue,
            text: `${this.chartValue} kWh`,
          },
        ],
      }, "y-min-value": this.chartMinValue, "y-max-value": this.chartMaxValue }))))));
  }
  get el() { return index.getElement(this); }
};
ENOVOSAppPeriodicConsumption.style = appPeriodicConsumptionCss;

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => ascending(f(d), x);
}

function number(x) {
  return x === null ? NaN : +x;
}

const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
const bisectCenter = bisector(number).center;

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var slice = Array.prototype.slice;

function identity(x) {
  return x;
}

var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number$1(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number$1)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = slice.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";

const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function() {
    var group = select.apply(this, arguments);
    return group == null ? [] : array(group);
  };
}

function selection_selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant(x) {
  return function() {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = array(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(selection) {
  if (!(selection instanceof Selection)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  return Array.from(this);
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, options) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

const constant$1 = x => () => x;

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}

const interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set$1(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set$1(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}

function interpolate$1(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS$1(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set$1(this, id).ease = v;
  };
}

function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection$1 = selection.prototype.constructor;

function transition_selection() {
  return new Selection$1(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set$1(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove$1(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant$1(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set$1(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

const pi = Math.PI,
    tau = 2 * pi,
    epsilon$1 = 1e-6,
    tauEpsilon = tau - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};

function identity$2(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$2 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$2 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function constants(x) {
  return function() {
    return x;
  };
}

function number$2(x) {
  return +x;
}

var unit = [0, 1];

function identity$3(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity$3,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$3) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$2), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$3, rescale()) : clamp !== identity$3;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity$3, identity$3);
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function constant$2(x) {
  return function constant() {
    return x;
  };
}

var epsilon$2 = 1e-12;

function array$1(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function line(x$1, y$1) {
  var defined = constant$2(true),
      context = null,
      curve = curveLinear,
      output = null;

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant$2(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant$2(y$1);

  function line(data) {
    var i,
        n = (data = array$1(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$2(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$2(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$2(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area(x0, y0, y1) {
  var x1 = null,
      defined = constant$2(true),
      context = null,
      curve = curveLinear,
      output = null;

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x : constant$2(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant$2(0) : constant$2(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y : constant$2(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = array$1(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$2(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$2(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$2(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$2(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$2(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

function point$1(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$2) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$2) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

const catmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

const barChartCss = ".bar-chart{position:relative;display:block;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.bar-chart svg{position:absolute;left:0;top:0}.bar-chart.bar-chart .bar-chart__axis text{fill:#A7A7A7}.bar-chart.bar-chart .bar-chart__grid-line--x{stroke:#EEEEEE}.bar-chart.bar-chart .bar-chart__grid-line--y{stroke:#EEEEEE}.bar-chart.bar-chart .bar-chart__bar--default{fill:#F76700}.bar-chart.bar-chart .bar-chart__bar--primary{fill:#F76700}.bar-chart.bar-chart .bar-chart__bar--secondary{fill:#5E5E5E}.bar-chart.bar-chart .bar-chart__bar--tertiary{fill:#004885}.bar-chart.bar-chart .bar-chart__bar--quaternary{fill:#96C11F}.bar-chart.bar-chart .bar-chart__bar--quinary{fill:#EF7B0B}.bar-chart.bar-chart .bar-chart__axis text{font-family:\"Montserrat\", sans-serif;font-size:12px;font-weight:400}";

const defaultMargin = {
  top: 8,
  right: 0,
  bottom: 40,
  left: 72,
};
const ENOVOSBarChart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.barRadius = 12;
    this.minWidth = 500;
    this.renderDelay = 500;
    this.showHorizontalGridLines = true;
    this.showVerticalGridLines = false;
    this.barPadding = 0.2;
    this.classNames = {
      EL: 'bar-chart',
    };
    this.margin = defaultMargin;
    this.getWidth = () => {
      const width = this.el.getBoundingClientRect().width;
      return this.minWidth && width < this.minWidth ? this.minWidth : width;
    };
    this.onResizeEnd = () => {
      const width = this.getWidth();
      if (width !== this.width) {
        this.width = width;
        this.buildChart();
      }
    };
    this.buildBars = (svgContent, x, y) => {
      const bars = svgContent.selectAll('bar')
        .data(this.computedData.items)
        .enter()
        .append('g').attr('class', `${this.classNames.EL}__bar-container`)
        .attr('x', (_d, i) => x(this.computedXValues[i]))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => this.height - y(d.value) + this.barRadius);
      bars.append('rect')
        .attr('x', (_d, i) => x(this.computedXValues[i]))
        .attr('y', d => y(d.value))
        .attr('id', d => d.id)
        .attr('width', x.bandwidth())
        .attr('height', d => this.height - y(d.value) + this.barRadius)
        .attr('fill', 'black')
        .attr('rx', this.barRadius)
        .attr('ry', this.barRadius)
        .attr('clip-path', `url(#${this.idPrefix}-clip-path)`)
        .attr('class', `${this.classNames.EL}__bar ${this.classNames.EL}__bar--${this.computedData.style || 'default'}`);
      this.refreshTooltips();
    };
    this.buildChart = () => {
      const svgWrapper = select(this.el.querySelector(`.${this.classNames.EL}`))
        .attr('style', `height: ${this.height}px;`);
      const svg = svgWrapper.select('svg')
        .attr('width', this.width)
        .attr('height', this.height);
      // set dimensions of the clip-path used to make bar chart with border-top-radius only
      svg.select(`#${this.idPrefix}-clip-path rect`)
        .attr('width', this.width - this.margin.right - this.margin.left)
        .attr('height', this.height - this.margin.top - this.margin.bottom);
      const x = band()
        .domain(this.computedXValues)
        .range([this.margin.left, this.width - this.margin.right])
        .padding(this.barPadding);
      const y = linear$1()
        .domain([this.yMaxValue, this.yMinValue])
        .range([this.margin.top, this.height - this.margin.bottom]);
      const svgContent = svg.select(`.${this.classNames.EL}__svg-content`);
      svgContent.selectAll('*').remove();
      this.appendAxisBottom(svgContent, x);
      this.appendAxisLeft(svgContent, y);
      this.buildBars(svgContent, x, y);
    };
    this.refreshTooltips = () => {
      const tooltips = this.el.querySelectorAll(`.${this.classNames.EL}__tooltip > *`);
      if (tooltips) {
        tooltips.forEach((tooltip) => {
          tooltip.init();
        });
      }
    };
  }
  handleResize() {
    clearTimeout(this.resizeTimout);
    this.resizeTimout = setTimeout(this.onResizeEnd, 100);
  }
  /**
   * @description (Re-)calculate chart's width
   */
  async calculateWidth() {
    this.onResizeEnd();
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.onResizeEnd();
  }
  componentWillRender() {
    this.idPrefix = this.el.getAttribute('id');
    if (this.data) {
      this.computedData = Object.assign(Object.assign({}, this.data), { items: this.data.items.map((item) => {
          return Object.assign(Object.assign({}, item), { id: uniqueId.uniqueId(`${this.idPrefix}-`) });
        }) });
      this.computedXValues = !this.xValues ? this.data.items.map(() => '') : this.xValues;
      if (!this.xValues) {
        this.margin = Object.assign(Object.assign({}, this.margin), { bottom: 8 });
      }
    }
  }
  componentDidRender() {
    if (this.computedData) {
      setTimeout(() => {
        this.width = this.getWidth();
        this.buildChart();
      }, this.renderDelay);
    }
  }
  disconnectedCallback() {
    clearTimeout(this.resizeTimout);
  }
  appendAxisBottom(container, x) {
    const tick = container.append('g')
      .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--bottom`)
      .call(axisBottom(x).tickSize(24));
    if (this.showVerticalGridLines) {
      tick.selectAll('line')
        .attr('y2', -this.height + this.margin.top + this.margin.bottom)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--y`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  appendAxisLeft(container, y) {
    const tick = container.append('g')
      .attr('transform', `translate(${this.margin.left}, 0)`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--left`)
      .call(axisLeft(y).ticks(5).tickSize(8).tickFormat(format('.2~s')));
    if (this.showHorizontalGridLines) {
      tick.selectAll('line')
        .attr('x2', this.width - this.margin.right - this.margin.left)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--x`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  render() {
    return (index.h("div", { class: this.classNames.EL }, index.h("svg", null, index.h("defs", null, index.h("clipPath", { id: `${this.idPrefix}-clip-path` }, index.h("rect", { x: this.margin.left, y: this.margin.top })), index.h("filter", { id: `${this.idPrefix}-tooltip-shadow`, width: "200%", height: "200%" }, index.h("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8" }), index.h("feOffset", { dx: "0", dy: "4", result: "offsetblur" }), index.h("feComponentTransfer", null, index.h("feFuncA", { type: "linear", slope: "0.1" })), index.h("feMerge", null, index.h("feMergeNode", null), index.h("feMergeNode", { in: "SourceGraphic" })))), index.h("g", { class: `${this.classNames.EL}__svg-content` })), this.computedData && this.computedData.items && this.computedData.items.length > 0 && this.computedData.items.map((item) => {
      if (item.text) {
        return (index.h("span", { class: `${this.classNames.EL}__tooltip` }, index.h("eds-tooltip", { "auto-init": false, selector: `${item.id}`, size: "lg", text: item.text })));
      }
    })));
  }
  get el() { return index.getElement(this); }
};
ENOVOSBarChart.style = barChartCss;

const datalistCss = "[name=datalist]{display:block;width:100%;overflow:hidden;transition:opacity 0.2s ease-in-out 0s}[name=datalist] .datalist{transition:opacity 0.2s ease-in-out 0s}[name=datalist] .datalist__item{position:relative}[name=datalist] .datalist__item--indent::before{position:absolute;left:0;top:0;z-index:3;height:100%;content:\"\"}[name=datalist] .datalist__item__children{position:relative;max-height:500em;opacity:1;transition:max-height 1.2s ease-in-out 0.1s, opacity 0.6s ease-in-out 0.1s}[name=datalist] .datalist__item__children--collapsed{display:block;max-height:0;overflow:hidden;opacity:0;transition:max-height 0.6s ease-in-out 0s, opacity 0.6s ease-in-out 0s}[name=datalist] .datalist__item__children--accordion::before{position:absolute;left:0;top:0;z-index:3;height:100%;content:\"\"}[name=datalist] .datalist .datalist__item--indent::before{background-color:#F76700}[name=datalist] .datalist .datalist__item__children--accordion::before{background-color:#F76700}[name=datalist] .datalist--primary .datalist__item--indent::before{background-color:#F76700}[name=datalist] .datalist--primary .datalist__item__children--accordion::before{background-color:#F76700}[name=datalist] .datalist--success .datalist__item--indent::before{background-color:#00856A}[name=datalist] .datalist--success .datalist__item__children--accordion::before{background-color:#00856A}[name=datalist] .datalist--info .datalist__item--indent::before{background-color:#2899A8}[name=datalist] .datalist--info .datalist__item__children--accordion::before{background-color:#2899A8}[name=datalist] .datalist--warning .datalist__item--indent::before{background-color:#F76700}[name=datalist] .datalist--warning .datalist__item__children--accordion::before{background-color:#F76700}[name=datalist] .datalist--error .datalist__item--indent::before{background-color:#EB0000}[name=datalist] .datalist--error .datalist__item__children--accordion::before{background-color:#EB0000}[name=datalist] .datalist .datalist__item--indent::before{width:0}[name=datalist] .datalist .datalist__item__children--accordion::before{width:0}";

const ENOVOSDatalist = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickDatalist = index.createEvent(this, "clickDatalist", 7);
    this.clickable = false;
    this.alternate = false;
    this.alternateReverse = false;
    this.items = [];
    this.datalistItems = [];
    this.classNames = {
      EL: 'datalist',
      ITEM: '__item',
      CHILDREN: '__children',
      ACCORDION: '--accordion',
      COLLAPSED: '--collapsed',
      INDENT: '--indent',
      LEVEL: '--level',
    };
    this.animationDuration = 200;
    this.loaded = false;
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.initComponent(this.items);
  }
  /**
   * @description catch custom event and manage expandable children
   * if the parent is configurate as expandable element
   */
  expandableItems(event) {
    const item = event.detail;
    if (item && item instanceof DatalistItemPropsHelper.DatalistItem) {
      if (this.isAccordionConfig(item)) {
        event.preventDefault();
        const childrenContainer = this.el.querySelector(`#${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}_${item.getProp('uid')}`);
        childrenContainer.classList.toggle(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}${this.classNames.COLLAPSED}`);
      }
      this.clickDatalist.emit(item);
    }
  }
  /**
   * @description Init the dataitem
   */
  async setDatalistItems(items) {
    this.initComponent(items);
  }
  /**
   * @description Collapse item
   */
  async collapse(value) {
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => el.collapse(value));
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}`)
      .forEach((el) => {
      el.classList.toggle(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}${this.classNames.COLLAPSED}`);
    });
  }
  /**
   * @description Add datalist to the component
   * Replace the div container by a documentFragment in case there's a
   * new call to setDatalist for an update for example
   * @param {Object} data The data to be display
   */
  watchItemsHandler(newData, oldData) {
    if (!isEqual.isEqual(newData, oldData) && newData.length > 0) {
      this.initComponent(newData);
    }
  }
  initComponent(data) {
    let currentContainer = this.el.querySelector(`.${this.classNames.EL}`);
    // Create the document fragment which will contain the HTML data
    this.documentFragment = document.createDocumentFragment();
    const main = document.createElement('div');
    main.setAttribute('class', [
      `${this.classNames.EL}`,
      DatalistItemPropsHelper.DatalistItemPropsHelper.getStyles(this.styles, this.classNames.EL),
    ].join(' '));
    main.setAttribute('style', `opacity: ${(this.loaded) ? '0' : '1'}`);
    this.documentFragment.appendChild(main);
    // Create html list inside fragment
    this.initDatalist(data, undefined);
    // Doesn't apply styles animation the first time the datalist is set
    if (!this.loaded) {
      // Replace current container by the updated one
      this.el.replaceChild(this.documentFragment, currentContainer);
      this.loaded = true;
    }
    else {
      // Hide the current list container with opacity and set the current height
      // to the main container in order to avoiding gap when a change/update should be apply on data parameters
      currentContainer.style.opacity = '0';
      this.el.style.height = `${currentContainer.offsetHeight}px`;
      // Replace the old div container by the one containing the udpate list then
      // remove the fixed height to restore the normal container size
      setTimeout(() => {
        if (this.el.contains(currentContainer)) {
          this.el.replaceChild(this.documentFragment, currentContainer);
          // Restore height and opacity after node replacement
          setTimeout(() => {
            this.el.style.height = '';
            currentContainer = this.el.querySelector(`.${this.classNames.EL}`);
            currentContainer.style.opacity = '1';
          }, this.animationDuration);
        }
      }, this.animationDuration);
    }
  }
  /**
   * @description Loop each item and generate render the HTML
   * @param {data} The data object provide by API
   * @param {parentID} The ID of parent item
   * @param {level} The depth of the data item
   */
  initDatalist(data, parentID, level = 0, isAccordion = false) {
    let newItem;
    let datalistNode = this.documentFragment.querySelector(`.${this.classNames.EL}`);
    let isEven = true;
    forEach(data, (item) => {
      // Create a new object DatalistItem
      newItem = new DatalistItemPropsHelper.DatalistItem(item);
      if (this.alternate) {
        if (!newItem.hasProp('type')) {
          isEven = !isEven;
          newItem.setProp('type', (isEven) ? 'even' : 'odd');
        }
        else {
          isEven = true;
        }
      }
      else if (this.alternateReverse) {
        if (!newItem.hasProp('type')) {
          isEven = !isEven;
          newItem.setProp('type', (isEven) ? 'odd' : 'even');
        }
        else {
          isEven = true;
        }
      }
      isAccordion = ((newItem.hasProp('children') && newItem.getProp('children').length > 0) || level > 0)
        ? this.isAccordionConfig(newItem)
          ? true
          : isAccordion
        : false;
      if (parentID !== undefined) {
        newItem.setProp('parent', parentID);
        datalistNode = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM}_${parentID}`);
      }
      this.renderDatalist(newItem, datalistNode, level, isAccordion);
    });
  }
  /**
   * @description Render the html datalist
   */
  renderDatalist(item, nodeContainer, level = 0, isAccordion = false) {
    let dataItem;
    // Inset the component datalist item
    nodeContainer.insertAdjacentHTML('beforeend', this.getHTMLDatalistItem(item, level, isAccordion));
    // Get the create item by ID
    dataItem = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM}_${item.getProp('uid')}`);
    // Call the method to init data of component
    dataItem.setDatalistItem(item);
    // Move the dataitem inside div
    if (item.getProp('parent')) {
      // Inset the component datalist item
      const childrenContainer = this.documentFragment.querySelector(`#${this.classNames.EL + this.classNames.ITEM + this.classNames.CHILDREN}_${item.getProp('parent')}`);
      childrenContainer.appendChild(dataItem);
    }
    // If current item has children
    if (item.hasProp('children') && item.getProp('children').length > 0) {
      // Create the container div for children
      dataItem.insertAdjacentHTML('afterend', this.getHTMLDatalistChildrenContainer(item));
      this.initDatalist(item.getProp('children'), item.getProp('uid'), level + 1, isAccordion);
    }
  }
  isAccordionConfig(item) {
    return (item.hasProp('accordion') && item.getProp('accordion') === true);
  }
  /**
   * @description Generate HTML for DatalistItem component
   */
  getHTMLDatalistItem(item, level, isAccordion) {
    const className = `${this.classNames.EL}${this.classNames.ITEM}`;
    const classes = [className];
    if (isAccordion === true && !item.hasProp('type')) {
      item.setProp('type', 'collapsed');
    }
    if (item.hasProp('type') && ['heading', 'indented'].includes(item.getProp('type'))) {
      classes.push(`${this.classNames.EL}${this.classNames.ITEM}${this.classNames.INDENT}`);
    }
    return `<eds-datalist-item class="${classes.join(' ')}" indent=${level}
      padding=${this.padding}
      clickable=${this.clickable}
      id="${this.classNames.EL}${this.classNames.ITEM}_${item.getProp('uid')}">
    </eds-datalist-item>`;
  }
  /**
   * @description Generate HTML for DatalistItem children component
   */
  getHTMLDatalistChildrenContainer(item) {
    const className = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CHILDREN}`;
    const classes = [className];
    if (this.isAccordionConfig(item)) {
      classes.push(`${className}${this.classNames.ACCORDION}`);
      if (!item.hasProp('collapsed.open') || item.getProp('collapsed.open') === true) {
        classes.push(`${className}${this.classNames.COLLAPSED}`);
      }
    }
    return `<div class="${classes.join(' ')}"
      id="${className}_${item.getProp('uid')}">
    </div>`;
  }
  render() {
    return [
      index.h("div", { class: `${this.classNames.EL}` }),
    ];
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSDatalist.style = datalistCss;

const lineChartCss = ".font-family-1{font-family:\"Montserrat\", sans-serif !important}.font-family-2{font-family:\"Montserrat\", sans-serif !important}.line-chart{display:block}.line-chart__svg-container{display:block;overflow-x:auto;overflow-y:hidden}.line-chart__svg-container svg{display:block}.line-chart__average-line{opacity:0.7;transition:opacity 0.4s}.line-chart--has-dot-hovered .line-chart__average-line{opacity:0.3}.line-chart__area{transition:opacity 0.4s}.line-chart--has-dot-hovered .line-chart__area{opacity:0.3}.line-chart__line{opacity:1;transition:opacity 0.4s;stroke-width:2px}.line-chart--has-dot-hovered .line-chart__line{opacity:0.3}.line-chart__line-shadow{opacity:0.5;transition:opacity 0.4s}.line-chart--has-dot-hovered .line-chart__line-shadow{opacity:0.3}.line-chart__dot-circle{pointer-events:none;transform:scale(1);transition:stroke 0.4s;stroke-width:2px;r:6px}.line-chart__dot-circle--small{r:2px}.line-chart__dot-interactable-area:hover+g .line-chart__dot-circle{transform:scale(1.2);r:6px;stroke-width:4px;fill:#FFFFFF !important}.line-chart__dot-interactable-area{opacity:0;cursor:pointer}.line-chart__dot-line{display:none;pointer-events:none;stroke-width:1px}.line-chart__dot-interactable-area:hover+g .line-chart__dot-line{display:block}.line-chart__tooltip{display:none}.line-chart__tooltip--visible{display:block}.line-chart__tooltip-shape{stroke-width:0}.line-chart__tooltip-text{font-family:\"Montserrat\", sans-serif;fill:#5E5E5E}.line-chart__tooltip-secondary-text{fill:#5E5E5E;font-family:\"Montserrat\", sans-serif;font-weight:700}.line-chart__area-gradient stop:nth-child(1){stop-opacity:0.25}.line-chart__area-gradient stop:nth-child(2){stop-opacity:0}.line-chart__legend-icon{position:relative;display:block;width:24px;height:24px}.line-chart__legend-icon--dot:before{position:absolute;left:0;top:50%;display:block;width:100%;height:2px;margin-top:-1px;background-color:#000000;content:\"\"}.line-chart__legend-icon--dot:after{position:absolute;left:50%;top:50%;width:10px;height:10px;border:solid 2px #000000;border-radius:9999px;background-color:#FFFFFF;content:\"\";transform:translate(-50%, -50%)}.line-chart__legend-icon--line:before{position:absolute;left:0;top:50%;display:block;width:100%;height:1px;background-color:#FFFFFF;content:\"\"}.line-chart.line-chart .line-chart__axis text{fill:#A7A7A7}.line-chart.line-chart .line-chart__axis-title{fill:#A7A7A7}.line-chart.line-chart .line-chart__grid-line--x{stroke:#EEEEEE}.line-chart.line-chart .line-chart__grid-line--y{stroke:#EEEEEE}.line-chart.line-chart .line-chart__average-line{stroke:#D52B1E}.line-chart.line-chart .line-chart__line{stroke:#F76700}.line-chart.line-chart .line-chart__line-shadow{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--small{fill:#F76700}.line-chart.line-chart .line-chart__dot-line{stroke:#F76700}.line-chart.line-chart .line-chart__area-gradient stop:nth-child(1){stop-color:#F76700}.line-chart.line-chart .line-chart__area-gradient stop:nth-child(2){stop-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--average-line:before{background-color:#D52B1E}.line-chart.line-chart .line-chart__line--default{stroke:#F76700}.line-chart.line-chart .line-chart__line-shadow--default{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--default{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--default.line-chart__dot-circle--small{fill:#F76700}.line-chart.line-chart .line-chart__dot-line--default{stroke:#F76700}.line-chart.line-chart .line-chart__area-gradient--default stop:nth-child(1){stop-color:#F76700}.line-chart.line-chart .line-chart__area-gradient--default stop:nth-child(2){stop-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--default:before{background-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--default:after{border-color:#F76700}.line-chart.line-chart .line-chart__line--primary{stroke:#F76700}.line-chart.line-chart .line-chart__line-shadow--primary{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--primary{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--primary.line-chart__dot-circle--small{fill:#F76700}.line-chart.line-chart .line-chart__dot-line--primary{stroke:#F76700}.line-chart.line-chart .line-chart__area-gradient--primary stop:nth-child(1){stop-color:#F76700}.line-chart.line-chart .line-chart__area-gradient--primary stop:nth-child(2){stop-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--primary:before{background-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--primary:after{border-color:#F76700}.line-chart.line-chart .line-chart__line--secondary{stroke:#5E5E5E}.line-chart.line-chart .line-chart__line-shadow--secondary{stroke:#5E5E5E}.line-chart.line-chart .line-chart__dot-circle--secondary{stroke:#5E5E5E}.line-chart.line-chart .line-chart__dot-circle--secondary.line-chart__dot-circle--small{fill:#5E5E5E}.line-chart.line-chart .line-chart__dot-line--secondary{stroke:#5E5E5E}.line-chart.line-chart .line-chart__area-gradient--secondary stop:nth-child(1){stop-color:#5E5E5E}.line-chart.line-chart .line-chart__area-gradient--secondary stop:nth-child(2){stop-color:#5E5E5E}.line-chart.line-chart .line-chart__legend-icon--secondary:before{background-color:#5E5E5E}.line-chart.line-chart .line-chart__legend-icon--secondary:after{border-color:#5E5E5E}.line-chart.line-chart .line-chart__line--tertiary{stroke:#004885}.line-chart.line-chart .line-chart__line-shadow--tertiary{stroke:#004885}.line-chart.line-chart .line-chart__dot-circle--tertiary{stroke:#004885}.line-chart.line-chart .line-chart__dot-circle--tertiary.line-chart__dot-circle--small{fill:#004885}.line-chart.line-chart .line-chart__dot-line--tertiary{stroke:#004885}.line-chart.line-chart .line-chart__area-gradient--tertiary stop:nth-child(1){stop-color:#004885}.line-chart.line-chart .line-chart__area-gradient--tertiary stop:nth-child(2){stop-color:#004885}.line-chart.line-chart .line-chart__legend-icon--tertiary:before{background-color:#004885}.line-chart.line-chart .line-chart__legend-icon--tertiary:after{border-color:#004885}.line-chart.line-chart .line-chart__line--quaternary{stroke:#96C11F}.line-chart.line-chart .line-chart__line-shadow--quaternary{stroke:#96C11F}.line-chart.line-chart .line-chart__dot-circle--quaternary{stroke:#96C11F}.line-chart.line-chart .line-chart__dot-circle--quaternary.line-chart__dot-circle--small{fill:#96C11F}.line-chart.line-chart .line-chart__dot-line--quaternary{stroke:#96C11F}.line-chart.line-chart .line-chart__area-gradient--quaternary stop:nth-child(1){stop-color:#96C11F}.line-chart.line-chart .line-chart__area-gradient--quaternary stop:nth-child(2){stop-color:#96C11F}.line-chart.line-chart .line-chart__legend-icon--quaternary:before{background-color:#96C11F}.line-chart.line-chart .line-chart__legend-icon--quaternary:after{border-color:#96C11F}.line-chart.line-chart .line-chart__line--quinary{stroke:#EF7B0B}.line-chart.line-chart .line-chart__line-shadow--quinary{stroke:#EF7B0B}.line-chart.line-chart .line-chart__dot-circle--quinary{stroke:#EF7B0B}.line-chart.line-chart .line-chart__dot-circle--quinary.line-chart__dot-circle--small{fill:#EF7B0B}.line-chart.line-chart .line-chart__dot-line--quinary{stroke:#EF7B0B}.line-chart.line-chart .line-chart__area-gradient--quinary stop:nth-child(1){stop-color:#EF7B0B}.line-chart.line-chart .line-chart__area-gradient--quinary stop:nth-child(2){stop-color:#EF7B0B}.line-chart.line-chart .line-chart__legend-icon--quinary:before{background-color:#EF7B0B}.line-chart.line-chart .line-chart__legend-icon--quinary:after{border-color:#EF7B0B}.line-chart.line-chart .line-chart__line--style-1{stroke:#F76700}.line-chart.line-chart .line-chart__line-shadow--style-1{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--style-1{stroke:#F76700}.line-chart.line-chart .line-chart__dot-circle--style-1.line-chart__dot-circle--small{fill:#F76700}.line-chart.line-chart .line-chart__dot-line--style-1{stroke:#F76700}.line-chart.line-chart .line-chart__area-gradient--style-1 stop:nth-child(1){stop-color:#F76700}.line-chart.line-chart .line-chart__area-gradient--style-1 stop:nth-child(2){stop-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--style-1:before{background-color:#F76700}.line-chart.line-chart .line-chart__legend-icon--style-1:after{border-color:#F76700}.line-chart.line-chart .line-chart__line--style-2{stroke:#009FD4}.line-chart.line-chart .line-chart__line-shadow--style-2{stroke:#009FD4}.line-chart.line-chart .line-chart__dot-circle--style-2{stroke:#009FD4}.line-chart.line-chart .line-chart__dot-circle--style-2.line-chart__dot-circle--small{fill:#009FD4}.line-chart.line-chart .line-chart__dot-line--style-2{stroke:#009FD4}.line-chart.line-chart .line-chart__area-gradient--style-2 stop:nth-child(1){stop-color:#009FD4}.line-chart.line-chart .line-chart__area-gradient--style-2 stop:nth-child(2){stop-color:#009FD4}.line-chart.line-chart .line-chart__legend-icon--style-2:before{background-color:#009FD4}.line-chart.line-chart .line-chart__legend-icon--style-2:after{border-color:#009FD4}.line-chart.line-chart .line-chart__line--style-3{stroke:#025874}.line-chart.line-chart .line-chart__line-shadow--style-3{stroke:#025874}.line-chart.line-chart .line-chart__dot-circle--style-3{stroke:#025874}.line-chart.line-chart .line-chart__dot-circle--style-3.line-chart__dot-circle--small{fill:#025874}.line-chart.line-chart .line-chart__dot-line--style-3{stroke:#025874}.line-chart.line-chart .line-chart__area-gradient--style-3 stop:nth-child(1){stop-color:#025874}.line-chart.line-chart .line-chart__area-gradient--style-3 stop:nth-child(2){stop-color:#025874}.line-chart.line-chart .line-chart__legend-icon--style-3:before{background-color:#025874}.line-chart.line-chart .line-chart__legend-icon--style-3:after{border-color:#025874}.line-chart.line-chart .line-chart__line--style-4{stroke:#D52B1E}.line-chart.line-chart .line-chart__line-shadow--style-4{stroke:#D52B1E}.line-chart.line-chart .line-chart__dot-circle--style-4{stroke:#D52B1E}.line-chart.line-chart .line-chart__dot-circle--style-4.line-chart__dot-circle--small{fill:#D52B1E}.line-chart.line-chart .line-chart__dot-line--style-4{stroke:#D52B1E}.line-chart.line-chart .line-chart__area-gradient--style-4 stop:nth-child(1){stop-color:#D52B1E}.line-chart.line-chart .line-chart__area-gradient--style-4 stop:nth-child(2){stop-color:#D52B1E}.line-chart.line-chart .line-chart__legend-icon--style-4:before{background-color:#D52B1E}.line-chart.line-chart .line-chart__legend-icon--style-4:after{border-color:#D52B1E}.line-chart.line-chart .line-chart__axis text{font-family:\"Montserrat\", sans-serif;font-size:12px;font-weight:400;line-height:16px}.line-chart.line-chart .line-chart__axis-title{font-family:\"Montserrat\", sans-serif;font-size:14px;font-weight:400;line-height:24px}.line-chart.line-chart .line-chart__tooltip-secondary-text{font-size:12px}.line-chart.line-chart .line-chart__tooltip-text{font-size:16px}";

const defaultMargin$1 = {
  top: 8,
  right: 24,
  bottom: 56,
  left: 80,
};
const pathCurve = catmullRom.alpha(0.5);
const ENOVOSLineChart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.margin = defaultMargin$1;
    this.minWidth = 500;
    this.renderDelay = 500;
    this.showHorizontalGridLines = true;
    this.showVerticalGridLines = false;
    this.smallDots = false;
    this.xAxisTicks = 12;
    this.classNames = {
      EL: 'line-chart',
    };
    this.tooltip = {
      width: 120,
      height: 72,
      yOffset: 24,
      xOffset: 12,
    };
    this.usedStyles = ['default'];
    this.renderChart = () => {
      if (this.computedDatasets) {
        setTimeout(() => {
          this.width = this.getWidth();
          this.buildChart();
        }, this.renderDelay);
      }
    };
    this.getWidth = () => {
      const width = this.el.getBoundingClientRect().width;
      return this.minWidth && width < this.minWidth ? this.minWidth : width;
    };
    this.onResizeEnd = () => {
      const width = this.getWidth();
      if (width !== this.width) {
        this.width = width;
        this.buildChart();
      }
    };
    this.setComputedDatasets = () => {
      if (this.datasets) {
        this.computedDatasets = this.datasets.map((dataset) => {
          return Object.assign(Object.assign({}, dataset), { items: dataset.items.map((item) => {
              return Object.assign(Object.assign({}, item), { id: uniqueId.uniqueId(`${this.idPrefix}-dot-`) });
            }) });
        });
        const usedStyles = this.datasets.map((dataset) => {
          if (dataset.style) {
            return dataset.style;
          }
        });
        this.usedStyles = uniq.uniq([...usedStyles, 'default']);
        this.legendItems = this.getLegendItems();
      }
    };
    this.getYAverageValue = () => {
      let sumValues = 0;
      let itemsLength = 0;
      this.computedDatasets.forEach((computedDataset) => {
        computedDataset.items.forEach((computedDatasetItem) => {
          if (computedDatasetItem.value) {
            sumValues += computedDatasetItem.value;
          }
          itemsLength++;
        });
      });
      if (itemsLength > 0) {
        return Math.floor(sumValues / itemsLength);
      }
      return undefined;
    };
    this.buildDatasetLine = (computedDatasetItems, svgContent, x, y, style) => {
      // Add the area below the data line (background gradient)
      svgContent.append('path')
        .attr('d', area()
        .x((_d, i) => {
        return x(i);
      })
        .y0(this.height - this.margin.bottom)
        .y1(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'none')
        .attr('class', `${this.classNames.EL}__area`)
        .attr('fill', `url(#${this.idPrefix}-area-gradient--${style})`);
      // Add the data line shadow
      svgContent.append('path')
        .attr('d', line()
        .x((_d, i) => {
        return x(i);
      })
        .y(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'black')
        .attr('stroke-width', '2')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', `${this.classNames.EL}__line-shadow ${this.classNames.EL}__line-shadow--${style}`)
        .attr('filter', `url(#${this.idPrefix}-line-shadow)`);
      // Add the data line
      svgContent.append('path')
        .attr('d', line()
        .x((_d, i) => {
        return x(i);
      })
        .y(d => {
        return y(d.value || 0);
      })
        .curve(pathCurve)(computedDatasetItems))
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('class', `${this.classNames.EL}__line ${this.classNames.EL}__line--${style}`);
    };
    this.buildDatasetDots = (computedDatasetItems, svgContent, x, y, style) => {
      // Add data dots
      const dots = svgContent.selectAll('dots')
        .data(computedDatasetItems)
        .enter()
        .append('g')
        .attr('transform', (d, i) => { return `translate(${x(i)} ${y(d.value || 0)})`; });
      // Add data dots' interactable area
      dots.append('circle')
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 6)
        .attr('class', `${this.classNames.EL}__dot-interactable-area`)
        .attr('id', d => { return d.id; })
        .on('mouseover', e => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.add(`${this.classNames.EL}--has-dot-hovered`);
        document.getElementById(`${e.target.id}-tooltip`).classList.add(`${this.classNames.EL}__tooltip--visible`);
      })
        .on('mouseout', e => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}--has-dot-hovered`);
        document.getElementById(`${e.target.id}-tooltip`).classList.remove(`${this.classNames.EL}__tooltip--visible`);
      });
      const dotsShapes = dots.append('g').attr('class', `${this.classNames.EL}__dot`);
      // Add data dots vertical line visible on hover
      dotsShapes.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', this.width - this.margin.left - this.margin.right)
        .attr('y2', 0)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', (_d, i) => { return `translate(${-x(i) + this.margin.left} 0)`; })
        .attr('class', `${this.classNames.EL}__dot-line ${this.classNames.EL}__dot-line--x  ${this.classNames.EL}__dot-line--${style}`);
      // Add data dots horizontal line visible on hover
      dotsShapes.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', this.height - this.margin.top - this.margin.bottom)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', d => { return `translate(0 ${-y(d.value || 0) + this.margin.top})`; })
        .attr('class', `${this.classNames.EL}__dot-line ${this.classNames.EL}__dot-line--y  ${this.classNames.EL}__dot-line--${style}`);
      // Add data dots shape
      dotsShapes.append('circle')
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', this.smallDots ? 2 : 6)
        .attr('class', `${this.classNames.EL}__dot-circle ${this.classNames.EL}__dot-circle--${style} ${this.smallDots ? `${this.classNames.EL}__dot-circle--small` : ''}`);
    };
    this.buildDatasetTooltips = (computedDatasetItems, svgContent, x, y) => {
      // Add tooltips
      const tooltips = svgContent.selectAll('tooltips')
        .data(computedDatasetItems)
        .enter()
        .append('g')
        .attr('class', `${this.classNames.EL}__tooltip`)
        .attr('id', d => { return `${d.id}-tooltip`; })
        .attr('transform', (d, i) => {
        const positionX = x(i);
        const positionY = y(d.value || 0);
        let translateX = positionX - this.tooltip.width / 2;
        let translateY = positionY - (this.tooltip.height + this.tooltip.yOffset);
        if (positionY < this.tooltip.height + this.tooltip.yOffset) {
          translateY = positionY + this.tooltip.yOffset;
        }
        if (positionX > this.width - this.tooltip.width) {
          translateX = positionX - this.tooltip.width + this.tooltip.xOffset;
        }
        else if (positionX < this.tooltip.width / 2 + this.margin.left) {
          translateX = positionX - this.tooltip.xOffset;
        }
        return `translate(${translateX},${translateY})`;
      });
      // Tooltip shape (rectangle)
      tooltips.append('rect')
        .attr('width', this.tooltip.width)
        .attr('height', this.tooltip.height)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('rx', '8')
        .attr('ry', '8')
        .attr('class', `${this.classNames.EL}__tooltip-shape`)
        .attr('filter', `url(#${this.idPrefix}-tooltip-shadow)`);
      // Tooltip text
      tooltips.append('text')
        .attr('x', `${this.tooltip.width / 2}`)
        .attr('y', d => d.secondaryText ? `${this.tooltip.height / 2 + 12}` : `${this.tooltip.height / 2}`)
        .text(d => { return d.text; })
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('class', `${this.classNames.EL}__tooltip-text`);
      // Tooltip text
      tooltips.append('text')
        .attr('x', `${this.tooltip.width / 2}`)
        .attr('y', `${this.tooltip.height / 2 - 12}`)
        .text(d => { return d.secondaryText; })
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('class', `${this.classNames.EL}__tooltip-secondary-text`);
    };
    this.buildYAverageLine = (svgContent, y) => {
      // Add average line on Y axis (position is automatically computed based on all Y values)
      svgContent.append('line')
        .attr('x1', this.margin.left)
        .attr('y1', 0)
        .attr('x2', this.width - this.margin.right)
        .attr('y2', 0)
        .attr('stroke', 'black')
        .attr('stroke-width', '1px')
        .attr('transform', `translate(0 ${y(this.getYAverageValue())})`)
        .attr('class', `${this.classNames.EL}__average-line`);
    };
    this.buildChart = () => {
      const svg = select(this.el.querySelector('svg')).attr('width', this.width).attr('height', this.height);
      const svgContent = svg.select(`.${this.classNames.EL}__svg-content`);
      svgContent.selectAll('*').remove();
      const x = linear$1()
        .domain([0, this.xValues.length - 1])
        .range([this.margin.left, this.width - this.margin.right]);
      const y = linear$1()
        .domain([this.yMaxValue, this.yMinValue])
        .range([this.margin.top, this.height - this.margin.bottom]);
      this.appendAxisBottom(svgContent, x);
      this.appendAxisLeft(svgContent, y);
      if (this.xAxisTitle) {
        this.appendAxisBottomTitle(svgContent);
      }
      if (this.yAxisTitle) {
        this.appendAxisLeftTitle(svgContent);
      }
      // Clickable area used to hide tooltips showed on "mouseover". Required for touch devices.
      svgContent.append('rect')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('fill-opacity', '0')
        .on('click', () => {
        this.el.querySelector(`.${this.classNames.EL}`).classList.remove(`${this.classNames.EL}--has-dot-hovered`);
      });
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetLine(computedDataset.items, svgContent, x, y, computedDataset.style || 'default');
      });
      if (this.showYAverageLine) {
        this.buildYAverageLine(svgContent, y);
      }
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetDots(computedDataset.items, svgContent, x, y, computedDataset.style || 'default');
      });
      this.computedDatasets.forEach((computedDataset) => {
        this.buildDatasetTooltips(computedDataset.items, svgContent, x, y);
      });
    };
    this.getLegendItems = () => {
      let legendItems = [];
      this.computedDatasets.forEach((computedDataset) => {
        if (computedDataset.legend) {
          legendItems = [...legendItems, {
              icon: index.h("span", { class: `${this.classNames.EL}__legend-icon ${this.classNames.EL}__legend-icon--dot  ${this.classNames.EL}__legend-icon--${computedDataset.style || 'default'}` }),
              text: computedDataset.legend,
            }];
        }
      });
      if (this.showYAverageLine && this.yAverageLegend) {
        legendItems = [...legendItems, {
            icon: index.h("span", { class: `${this.classNames.EL}__legend-icon ${this.classNames.EL}__legend-icon--line  ${this.classNames.EL}__legend-icon--average-line` }),
            text: this.yAverageLegend,
          }];
      }
      return legendItems;
    };
  }
  handleResize() {
    clearTimeout(this.resizeTimout);
    this.resizeTimout = setTimeout(this.onResizeEnd, 100);
  }
  componentWillLoad() {
    this.idPrefix = this.el.getAttribute('id');
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentWillRender() {
    this.setComputedDatasets();
  }
  componentDidRender() {
    this.renderChart();
  }
  disconnectedCallback() {
    clearTimeout(this.resizeTimout);
  }
  appendAxisBottom(container, x) {
    const tick = container.append('g')
      .attr('transform', `translate(0, ${this.height - this.margin.bottom - 8})`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--bottom`)
      .call(axisBottom(x)
      .ticks(this.xAxisTicks)
      .tickFormat(d => this.xValues[d])
      .tickSize(24));
    if (this.showVerticalGridLines) {
      tick.selectAll('line')
        .attr('y2', -this.height + this.margin.top + this.margin.bottom)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--y`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  appendAxisLeft(container, y) {
    const tick = container.append('g')
      .attr('transform', `translate(${this.margin.left + 16}, 0)`)
      .attr('class', `${this.classNames.EL}__axis ${this.classNames.EL}__axis--left`)
      .call(axisLeft(y)
      .ticks(5)
      .tickSize(32)
      .tickFormat(format('.2~s')));
    if (this.showHorizontalGridLines) {
      tick.selectAll('line')
        .attr('x2', this.width - this.margin.right - this.margin.left)
        .attr('class', `${this.classNames.EL}__grid-line ${this.classNames.EL}__grid-line--x`);
    }
    else {
      tick.selectAll('line').remove();
    }
    tick.select('.domain').remove();
  }
  appendAxisBottomTitle(container) {
    container.append('text')
      .attr("text-anchor", "start")
      .attr("x", this.margin.left)
      .attr("y", this.height - 4)
      .attr('class', `${this.classNames.EL}__axis-title`)
      .text(this.xAxisTitle);
  }
  appendAxisLeftTitle(container) {
    container.append('text')
      .attr('text-anchor', 'start')
      .attr('transform', 'rotate(-90)')
      .attr('y', 20)
      .attr('x', -this.height + this.margin.bottom)
      .attr('class', `${this.classNames.EL}__axis-title`)
      .text(this.yAxisTitle);
  }
  render() {
    return [
      index.h("div", { class: this.classNames.EL }, index.h("div", { class: `${this.classNames.EL}__svg-container` }, index.h("svg", null, index.h("defs", null, this.usedStyles.map((style) => [
        index.h("linearGradient", { class: `${this.classNames.EL}__area-gradient ${this.classNames.EL}__area-gradient--${style}`, id: `${this.idPrefix}-area-gradient--${style}`, x1: "0%", y1: "0%", x2: "0%", y2: "100%" }, index.h("stop", { offset: "0%", "stop-color": "black", "stop-opacity": "1" }), index.h("stop", { offset: "100%", "stop-color": "black", "stop-opacity": "0" })),
        index.h("filter", { id: `${this.idPrefix}-line-shadow`, x: "0", y: "0", width: "200%", height: "200%" }, index.h("feOffset", { result: "offOut", in: "SourceGraphic", dx: "0", dy: "8" }), index.h("feGaussianBlur", { stdDeviation: "8" }), index.h("feBlend", { mode: "normal" })),
      ]), index.h("filter", { id: `${this.idPrefix}-tooltip-shadow`, width: "200%", height: "200%" }, index.h("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "8" }), index.h("feOffset", { dx: "0", dy: "4", result: "offsetblur" }), index.h("feComponentTransfer", null, index.h("feFuncA", { type: "linear", slope: "0.1" })), index.h("feMerge", null, index.h("feMergeNode", null), index.h("feMergeNode", { in: "SourceGraphic" })))), index.h("g", { class: `${this.classNames.EL}__svg-content` }))), this.legendItems && this.legendItems.length > 0 && index.h("eds-chart-legend", { items: this.legendItems }))
    ];
  }
  get el() { return index.getElement(this); }
};
ENOVOSLineChart.style = lineChartCss;

class NavigationItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof NavigationItem) {
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
    set$2.set(this, key, value);
  }
}

const navigationCss = "[name=navigation]{display:inline-block;height:100%}[name=navigation] .navigation--bg--primary{background-color:#F76700 !important}[name=navigation] .navigation--bg--secondary{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--tertiary{background-color:#004885 !important}[name=navigation] .navigation--bg--quaternary{background-color:#96C11F !important}[name=navigation] .navigation--bg--quinary{background-color:#EF7B0B !important}[name=navigation] .navigation--bg--senary{background-color:#CAA08D !important}[name=navigation] .navigation--bg--septenary{background-color:#6C887A !important}[name=navigation] .navigation--bg--grey{background-color:#757575 !important}[name=navigation] .navigation--bg--primary-900{background-color:#F76700 !important}[name=navigation] .navigation--bg--primary-800{background-color:#F76700 !important}[name=navigation] .navigation--bg--primary-700{background-color:#D52B1E !important}[name=navigation] .navigation--bg--primary-600{background-color:#C75300 !important}[name=navigation] .navigation--bg--primary-500{background-color:#F76700 !important}[name=navigation] .navigation--bg--primary-400{background-color:#FFA14C !important}[name=navigation] .navigation--bg--primary-300{background-color:#FFB673 !important}[name=navigation] .navigation--bg--primary-200{background-color:#FFDDBF !important}[name=navigation] .navigation--bg--primary-100{background-color:#FFF1E5 !important}[name=navigation] .navigation--bg--primary-50{background-color:#FFF1E5 !important}[name=navigation] .navigation--bg--secondary-900{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--secondary-800{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--secondary-700{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--secondary-600{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--secondary-500{background-color:#5E5E5E !important}[name=navigation] .navigation--bg--secondary-400{background-color:#8E8E8E !important}[name=navigation] .navigation--bg--secondary-300{background-color:#A7A7A7 !important}[name=navigation] .navigation--bg--secondary-200{background-color:#D7D7D7 !important}[name=navigation] .navigation--bg--secondary-100{background-color:#EEEEEE !important}[name=navigation] .navigation--bg--secondary-50{background-color:#EEEEEE !important}[name=navigation] .navigation--bg--tertiary-900{background-color:#004885 !important}[name=navigation] .navigation--bg--tertiary-800{background-color:#004885 !important}[name=navigation] .navigation--bg--tertiary-700{background-color:#004885 !important}[name=navigation] .navigation--bg--tertiary-600{background-color:#004885 !important}[name=navigation] .navigation--bg--tertiary-500{background-color:#004885 !important}[name=navigation] .navigation--bg--tertiary-400{background-color:#5C8AB1 !important}[name=navigation] .navigation--bg--tertiary-300{background-color:#85A8C5 !important}[name=navigation] .navigation--bg--tertiary-200{background-color:#C2D3E2 !important}[name=navigation] .navigation--bg--tertiary-100{background-color:#EBF1F6 !important}[name=navigation] .navigation--bg--tertiary-50{background-color:#EBF1F6 !important}[name=navigation] .navigation--bg--quaternary-900{background-color:#5A8D00 !important}[name=navigation] .navigation--bg--quaternary-800{background-color:#5A8D00 !important}[name=navigation] .navigation--bg--quaternary-700{background-color:#5A8D00 !important}[name=navigation] .navigation--bg--quaternary-600{background-color:#5A8D00 !important}[name=navigation] .navigation--bg--quaternary-500{background-color:#96C11F !important}[name=navigation] .navigation--bg--quaternary-400{background-color:#BCD870 !important}[name=navigation] .navigation--bg--quaternary-300{background-color:#CDE294 !important}[name=navigation] .navigation--bg--quaternary-200{background-color:#E6F0C9 !important}[name=navigation] .navigation--bg--quaternary-100{background-color:#F7FAED !important}[name=navigation] .navigation--bg--quaternary-50{background-color:#F7FAED !important}[name=navigation] .navigation--bg--quinary-900{background-color:#C75300 !important}[name=navigation] .navigation--bg--quinary-800{background-color:#C75300 !important}[name=navigation] .navigation--bg--quinary-700{background-color:#C75300 !important}[name=navigation] .navigation--bg--quinary-600{background-color:#C75300 !important}[name=navigation] .navigation--bg--quinary-500{background-color:#EF7B0B !important}[name=navigation] .navigation--bg--quinary-400{background-color:#FFA14C !important}[name=navigation] .navigation--bg--quinary-300{background-color:#FFB673 !important}[name=navigation] .navigation--bg--quinary-200{background-color:#FFDDBF !important}[name=navigation] .navigation--bg--quinary-100{background-color:#FFF1E5 !important}[name=navigation] .navigation--bg--quinary-50{background-color:#FFF1E5 !important}[name=navigation] .navigation--bg--senary-900{background-color:#602A10 !important}[name=navigation] .navigation--bg--senary-800{background-color:#95431D !important}[name=navigation] .navigation--bg--senary-700{background-color:#B66E4D !important}[name=navigation] .navigation--bg--senary-600{background-color:#B78670 !important}[name=navigation] .navigation--bg--senary-500{background-color:#CAA08D !important}[name=navigation] .navigation--bg--senary-400{background-color:#DEAE98 !important}[name=navigation] .navigation--bg--senary-300{background-color:#EEC3AF !important}[name=navigation] .navigation--bg--senary-200{background-color:#FAD5C5 !important}[name=navigation] .navigation--bg--senary-100{background-color:#FFE9DF !important}[name=navigation] .navigation--bg--senary-50{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-900{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-800{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-700{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-600{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-500{background-color:#6C887A !important}[name=navigation] .navigation--bg--septenary-400{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-300{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-200{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-100{background-color:transparent !important}[name=navigation] .navigation--bg--septenary-50{background-color:transparent !important}[name=navigation] .navigation--bg--grey-900{background-color:#1D1D1D !important}[name=navigation] .navigation--bg--grey-800{background-color:#333333 !important}[name=navigation] .navigation--bg--grey-700{background-color:#4D4D4D !important}[name=navigation] .navigation--bg--grey-600{background-color:#666666 !important}[name=navigation] .navigation--bg--grey-500{background-color:#757575 !important}[name=navigation] .navigation--bg--grey-400{background-color:#999999 !important}[name=navigation] .navigation--bg--grey-300{background-color:#B3B3B3 !important}[name=navigation] .navigation--bg--grey-200{background-color:#CCCCCC !important}[name=navigation] .navigation--bg--grey-100{background-color:#E6E6E6 !important}[name=navigation] .navigation--bg--grey-50{background-color:#F8F8F8 !important}[name=navigation] .navigation--bg--contextual-success{background-color:#00856A !important}[name=navigation] .navigation--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=navigation] .navigation--bg--contextual-info{background-color:#2899A8 !important}[name=navigation] .navigation--bg--contextual-info-light{background-color:#DBF6FF !important}[name=navigation] .navigation--bg--contextual-warning{background-color:#F76700 !important}[name=navigation] .navigation--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=navigation] .navigation--bg--contextual-error{background-color:#EB0000 !important}[name=navigation] .navigation--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=navigation] .navigation--bg--pfm-blue{background-color:#55A1D3 !important}[name=navigation] .navigation--bg--pfm-green{background-color:#8DDE54 !important}[name=navigation] .navigation--bg--pfm-yellow{background-color:#FFC600 !important}[name=navigation] .navigation--bg--pfm-orange{background-color:#FC912E !important}[name=navigation] .navigation--bg--pfm-red{background-color:#DF5036 !important}[name=navigation] .navigation--bg--external-bank-ing{background-color:#F58220 !important}[name=navigation] .navigation--bg--external-bank-bil{background-color:#71308B !important}[name=navigation] .navigation--bg--external-bank-bcee{background-color:#144093 !important}[name=navigation] .navigation--bg--external-bank-post{background-color:#FABC0B !important}[name=navigation] .navigation--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=navigation] .navigation--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=navigation] .navigation--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=navigation] .navigation--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=navigation] .navigation--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=navigation] .navigation--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=navigation] .navigation--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=navigation] .navigation--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=navigation] .navigation--bg--brand-pfm-orange{background-color:#FC912E !important}[name=navigation] .navigation--bg--brand-pfm-red{background-color:#DF5036 !important}[name=navigation] .navigation--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=navigation] .navigation--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=navigation] .navigation--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=navigation] .navigation--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=navigation] .navigation--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=navigation] .navigation--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=navigation] .navigation--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=navigation] .navigation--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=navigation] .navigation--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=navigation] .navigation--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=navigation] .navigation--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=navigation] .navigation--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=navigation] .navigation--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=navigation] .navigation--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=navigation] .navigation--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=navigation] .navigation--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=navigation] .navigation--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=navigation] .navigation--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=navigation] .navigation--bg--white{background-color:#FFFFFF !important}[name=navigation] .navigation--bg--black{background-color:#000000 !important}[name=navigation] .navigation--bg--transparent{background-color:transparent !important}[name=navigation] .navigation--bg--gradient-primary-light-left{background-image:linear-gradient(to left, #FFB673, #F76700) !important}[name=navigation] .navigation--bg--gradient-primary-light-right{background-image:linear-gradient(to right, #FFB673, #F76700) !important}[name=navigation] .navigation--bg--gradient-primary-light{background-image:linear-gradient(to bottom, #FFB673, #F76700) !important}[name=navigation] .navigation--bg--gradient-primary-light-bottom{background-image:linear-gradient(to bottom, #FFB673, #F76700) !important}[name=navigation] .navigation--bg--gradient-primary-light-top{background-image:linear-gradient(to top, #FFB673, #F76700) !important}[name=navigation] .navigation--bg--gradient-primary-dark-left{background-image:linear-gradient(to left, #F76700, #D52B1E) !important}[name=navigation] .navigation--bg--gradient-primary-dark-right{background-image:linear-gradient(to right, #F76700, #D52B1E) !important}[name=navigation] .navigation--bg--gradient-primary-dark{background-image:linear-gradient(to bottom, #F76700, #D52B1E) !important}[name=navigation] .navigation--bg--gradient-primary-dark-bottom{background-image:linear-gradient(to bottom, #F76700, #D52B1E) !important}[name=navigation] .navigation--bg--gradient-primary-dark-top{background-image:linear-gradient(to top, #F76700, #D52B1E) !important}[name=navigation] .navigation--bg--gradient-primary-500-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-primary-500-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-primary-500{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-primary-500-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-primary-500-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-light-left{background-image:linear-gradient(to left, #004885, #5E5E5E) !important}[name=navigation] .navigation--bg--gradient-secondary-light-right{background-image:linear-gradient(to right, #004885, #5E5E5E) !important}[name=navigation] .navigation--bg--gradient-secondary-light{background-image:linear-gradient(to bottom, #004885, #5E5E5E) !important}[name=navigation] .navigation--bg--gradient-secondary-light-bottom{background-image:linear-gradient(to bottom, #004885, #5E5E5E) !important}[name=navigation] .navigation--bg--gradient-secondary-light-top{background-image:linear-gradient(to top, #004885, #5E5E5E) !important}[name=navigation] .navigation--bg--gradient-secondary-dark-left{background-image:linear-gradient(to left, #5E5E5E, #000000) !important}[name=navigation] .navigation--bg--gradient-secondary-dark-right{background-image:linear-gradient(to right, #5E5E5E, #000000) !important}[name=navigation] .navigation--bg--gradient-secondary-dark{background-image:linear-gradient(to bottom, #5E5E5E, #000000) !important}[name=navigation] .navigation--bg--gradient-secondary-dark-bottom{background-image:linear-gradient(to bottom, #5E5E5E, #000000) !important}[name=navigation] .navigation--bg--gradient-secondary-dark-top{background-image:linear-gradient(to top, #5E5E5E, #000000) !important}[name=navigation] .navigation--bg--gradient-secondary-500-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-500-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-500{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-500-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-500-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-300-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-300-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-300{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-300-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-secondary-300-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=navigation] .navigation--bg--gradient-tertiary-light-left{background-image:linear-gradient(to left, #5C8AB1, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-light-right{background-image:linear-gradient(to right, #5C8AB1, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-light{background-image:linear-gradient(to bottom, #5C8AB1, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-light-bottom{background-image:linear-gradient(to bottom, #5C8AB1, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-light-top{background-image:linear-gradient(to top, #5C8AB1, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-dark-left{background-image:linear-gradient(to left, #004885, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-dark-right{background-image:linear-gradient(to right, #004885, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-dark{background-image:linear-gradient(to bottom, #004885, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-dark-bottom{background-image:linear-gradient(to bottom, #004885, #004885) !important}[name=navigation] .navigation--bg--gradient-tertiary-dark-top{background-image:linear-gradient(to top, #004885, #004885) !important}[name=navigation] .navigation--bg--gradient-quaternary-light-left{background-image:linear-gradient(to left, #FFFFFF, #96C11F) !important}[name=navigation] .navigation--bg--gradient-quaternary-light-right{background-image:linear-gradient(to right, #FFFFFF, #96C11F) !important}[name=navigation] .navigation--bg--gradient-quaternary-light{background-image:linear-gradient(to bottom, #FFFFFF, #96C11F) !important}[name=navigation] .navigation--bg--gradient-quaternary-light-bottom{background-image:linear-gradient(to bottom, #FFFFFF, #96C11F) !important}[name=navigation] .navigation--bg--gradient-quaternary-light-top{background-image:linear-gradient(to top, #FFFFFF, #96C11F) !important}[name=navigation] .navigation--bg--gradient-quaternary-medium-left{background-image:linear-gradient(to left, #96C11F, #5A8D00) !important}[name=navigation] .navigation--bg--gradient-quaternary-medium-right{background-image:linear-gradient(to right, #96C11F, #5A8D00) !important}[name=navigation] .navigation--bg--gradient-quaternary-medium{background-image:linear-gradient(to bottom, #96C11F, #5A8D00) !important}[name=navigation] .navigation--bg--gradient-quaternary-medium-bottom{background-image:linear-gradient(to bottom, #96C11F, #5A8D00) !important}[name=navigation] .navigation--bg--gradient-quaternary-medium-top{background-image:linear-gradient(to top, #96C11F, #5A8D00) !important}[name=navigation] .navigation--bg--gradient-quaternary-dark-left{background-image:linear-gradient(to left, #96C11F, #004885) !important}[name=navigation] .navigation--bg--gradient-quaternary-dark-right{background-image:linear-gradient(to right, #96C11F, #004885) !important}[name=navigation] .navigation--bg--gradient-quaternary-dark{background-image:linear-gradient(to bottom, #96C11F, #004885) !important}[name=navigation] .navigation--bg--gradient-quaternary-dark-bottom{background-image:linear-gradient(to bottom, #96C11F, #004885) !important}[name=navigation] .navigation--bg--gradient-quaternary-dark-top{background-image:linear-gradient(to top, #96C11F, #004885) !important}[name=navigation] .navigation--bg--gradient-quinary-light-left{background-image:linear-gradient(to left, #FFB673, #EF7B0B) !important}[name=navigation] .navigation--bg--gradient-quinary-light-right{background-image:linear-gradient(to right, #FFB673, #EF7B0B) !important}[name=navigation] .navigation--bg--gradient-quinary-light{background-image:linear-gradient(to bottom, #FFB673, #EF7B0B) !important}[name=navigation] .navigation--bg--gradient-quinary-light-bottom{background-image:linear-gradient(to bottom, #FFB673, #EF7B0B) !important}[name=navigation] .navigation--bg--gradient-quinary-light-top{background-image:linear-gradient(to top, #FFB673, #EF7B0B) !important}[name=navigation] .navigation--bg--gradient-quinary-dark-left{background-image:linear-gradient(to left, #EF7B0B, #C75300) !important}[name=navigation] .navigation--bg--gradient-quinary-dark-right{background-image:linear-gradient(to right, #EF7B0B, #C75300) !important}[name=navigation] .navigation--bg--gradient-quinary-dark{background-image:linear-gradient(to bottom, #EF7B0B, #C75300) !important}[name=navigation] .navigation--bg--gradient-quinary-dark-bottom{background-image:linear-gradient(to bottom, #EF7B0B, #C75300) !important}[name=navigation] .navigation--bg--gradient-quinary-dark-top{background-image:linear-gradient(to top, #EF7B0B, #C75300) !important}[name=navigation] .navigation--bg--gradient-contextual-success-left{background-image:linear-gradient(to left, #E5F2F0, #00856A) !important}[name=navigation] .navigation--bg--gradient-contextual-success-right{background-image:linear-gradient(to right, #E5F2F0, #00856A) !important}[name=navigation] .navigation--bg--gradient-contextual-success{background-image:linear-gradient(to bottom, #E5F2F0, #00856A) !important}[name=navigation] .navigation--bg--gradient-contextual-success-bottom{background-image:linear-gradient(to bottom, #E5F2F0, #00856A) !important}[name=navigation] .navigation--bg--gradient-contextual-success-top{background-image:linear-gradient(to top, #E5F2F0, #00856A) !important}[name=navigation] .navigation--bg--gradient-contextual-info-left{background-image:linear-gradient(to left, #DBF6FF, #2899A8) !important}[name=navigation] .navigation--bg--gradient-contextual-info-right{background-image:linear-gradient(to right, #DBF6FF, #2899A8) !important}[name=navigation] .navigation--bg--gradient-contextual-info{background-image:linear-gradient(to bottom, #DBF6FF, #2899A8) !important}[name=navigation] .navigation--bg--gradient-contextual-info-bottom{background-image:linear-gradient(to bottom, #DBF6FF, #2899A8) !important}[name=navigation] .navigation--bg--gradient-contextual-info-top{background-image:linear-gradient(to top, #DBF6FF, #2899A8) !important}[name=navigation] .navigation--bg--gradient-contextual-warning-left{background-image:linear-gradient(to left, #FFF1E5, #F76700) !important}[name=navigation] .navigation--bg--gradient-contextual-warning-right{background-image:linear-gradient(to right, #FFF1E5, #F76700) !important}[name=navigation] .navigation--bg--gradient-contextual-warning{background-image:linear-gradient(to bottom, #FFF1E5, #F76700) !important}[name=navigation] .navigation--bg--gradient-contextual-warning-bottom{background-image:linear-gradient(to bottom, #FFF1E5, #F76700) !important}[name=navigation] .navigation--bg--gradient-contextual-warning-top{background-image:linear-gradient(to top, #FFF1E5, #F76700) !important}[name=navigation] .navigation--bg--gradient-contextual-error-left{background-image:linear-gradient(to left, #FDE5E5, #EB0000) !important}[name=navigation] .navigation--bg--gradient-contextual-error-right{background-image:linear-gradient(to right, #FDE5E5, #EB0000) !important}[name=navigation] .navigation--bg--gradient-contextual-error{background-image:linear-gradient(to bottom, #FDE5E5, #EB0000) !important}[name=navigation] .navigation--bg--gradient-contextual-error-bottom{background-image:linear-gradient(to bottom, #FDE5E5, #EB0000) !important}[name=navigation] .navigation--bg--gradient-contextual-error-top{background-image:linear-gradient(to top, #FDE5E5, #EB0000) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-green-left{background-image:linear-gradient(to left, #4FB482, #133B2C) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-green-right{background-image:linear-gradient(to right, #4FB482, #133B2C) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-green{background-image:linear-gradient(to bottom, #4FB482, #133B2C) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-green-bottom{background-image:linear-gradient(to bottom, #4FB482, #133B2C) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-green-top{background-image:linear-gradient(to top, #4FB482, #133B2C) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-blue-left{background-image:linear-gradient(to left, #1B8DC0, #0A324B) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-blue-right{background-image:linear-gradient(to right, #1B8DC0, #0A324B) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-blue{background-image:linear-gradient(to bottom, #1B8DC0, #0A324B) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-blue-bottom{background-image:linear-gradient(to bottom, #1B8DC0, #0A324B) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-blue-top{background-image:linear-gradient(to top, #1B8DC0, #0A324B) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-yellow-left{background-image:linear-gradient(to left, #F0BE21, #B77918) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-yellow-right{background-image:linear-gradient(to right, #F0BE21, #B77918) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-yellow{background-image:linear-gradient(to bottom, #F0BE21, #B77918) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-yellow-bottom{background-image:linear-gradient(to bottom, #F0BE21, #B77918) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-yellow-top{background-image:linear-gradient(to top, #F0BE21, #B77918) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-orange-left{background-image:linear-gradient(to left, #F3B969, #EF7D00) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-orange-right{background-image:linear-gradient(to right, #F3B969, #EF7D00) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-orange{background-image:linear-gradient(to bottom, #F3B969, #EF7D00) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-orange-bottom{background-image:linear-gradient(to bottom, #F3B969, #EF7D00) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-orange-top{background-image:linear-gradient(to top, #F3B969, #EF7D00) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-pink-left{background-image:linear-gradient(to left, #C03152, #4F0F15) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-pink-right{background-image:linear-gradient(to right, #C03152, #4F0F15) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-pink{background-image:linear-gradient(to bottom, #C03152, #4F0F15) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-pink-bottom{background-image:linear-gradient(to bottom, #C03152, #4F0F15) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-pink-top{background-image:linear-gradient(to top, #C03152, #4F0F15) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-red-left{background-image:linear-gradient(to left, #F7B7AF, #E62D32) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-red-right{background-image:linear-gradient(to right, #F7B7AF, #E62D32) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-red{background-image:linear-gradient(to bottom, #F7B7AF, #E62D32) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-red-bottom{background-image:linear-gradient(to bottom, #F7B7AF, #E62D32) !important}[name=navigation] .navigation--bg--gradient-brand-expressive-red-top{background-image:linear-gradient(to top, #F7B7AF, #E62D32) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-blue-left{background-image:linear-gradient(to left, #96D9FF, #55A1D3) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-blue-right{background-image:linear-gradient(to right, #96D9FF, #55A1D3) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-blue{background-image:linear-gradient(to bottom, #96D9FF, #55A1D3) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-blue-bottom{background-image:linear-gradient(to bottom, #96D9FF, #55A1D3) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-blue-top{background-image:linear-gradient(to top, #96D9FF, #55A1D3) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-green-left{background-image:linear-gradient(to left, #8DDE54, #16A085) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-green-right{background-image:linear-gradient(to right, #8DDE54, #16A085) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-green{background-image:linear-gradient(to bottom, #8DDE54, #16A085) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-green-bottom{background-image:linear-gradient(to bottom, #8DDE54, #16A085) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-green-top{background-image:linear-gradient(to top, #8DDE54, #16A085) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-yellow-left{background-image:linear-gradient(to left, #FFE13D, #FFC600) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-yellow-right{background-image:linear-gradient(to right, #FFE13D, #FFC600) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-yellow{background-image:linear-gradient(to bottom, #FFE13D, #FFC600) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-yellow-bottom{background-image:linear-gradient(to bottom, #FFE13D, #FFC600) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-yellow-top{background-image:linear-gradient(to top, #FFE13D, #FFC600) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-orange-left{background-image:linear-gradient(to left, #FFB74D, #FC912E) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-orange-right{background-image:linear-gradient(to right, #FFB74D, #FC912E) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-orange{background-image:linear-gradient(to bottom, #FFB74D, #FC912E) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-orange-bottom{background-image:linear-gradient(to bottom, #FFB74D, #FC912E) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-orange-top{background-image:linear-gradient(to top, #FFB74D, #FC912E) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-red-left{background-image:linear-gradient(to left, #DF5036, #B93C25) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-red-right{background-image:linear-gradient(to right, #DF5036, #B93C25) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-red{background-image:linear-gradient(to bottom, #DF5036, #B93C25) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-red-bottom{background-image:linear-gradient(to bottom, #DF5036, #B93C25) !important}[name=navigation] .navigation--bg--gradient-brand-pfm-red-top{background-image:linear-gradient(to top, #DF5036, #B93C25) !important}[name=navigation][is-streched]{width:100%}[name=navigation]:not([is-streched]){width:auto}[name=navigation] .navigation{opacity:1;transition:opacity 0s ease-in-out}[name=navigation] .navigation--loading{opacity:0}[name=navigation] .navigation{position:relative;display:flex;align-items:flex-start;justify-content:center;height:100%;border-style:solid}[name=navigation] .navigation__underline{position:absolute;left:0;width:0;height:0;transition:left 0s}[name=navigation] .navigation__item{position:relative;display:flex;align-items:center;flex-basis:auto;flex-direction:column;flex-grow:1;flex-shrink:0;justify-content:center;height:100%;text-decoration:none;outline:none;transition:color 0s;cursor:pointer}[name=navigation] .navigation__item__icon-container{position:relative;pointer-events:none}[name=navigation] .navigation__item__icon{display:block;transition:color 0s}[name=navigation] .navigation__item__badge{position:absolute;right:-4px;top:0;display:flex}[name=navigation] .navigation__item__text-container{display:flex;flex-direction:row;justify-content:center;flex-wrap:nowrap;align-items:center}[name=navigation] .navigation__item__text{display:block;margin-top:4px;font-family:\"Montserrat\", sans-serif;text-align:center;text-decoration:none;line-height:16px;white-space:nowrap;pointer-events:none;transition:font-weight 0s}[name=navigation] .navigation__item__text--0{font-size:0px !important}[name=navigation] .navigation__item__text--1{font-size:8px !important}[name=navigation] .navigation__item__text--2{font-size:16px !important}[name=navigation] .navigation__item__text--3{font-size:24px !important}[name=navigation] .navigation__item__text--4{font-size:32px !important}[name=navigation] .navigation__item__text--5{font-size:40px !important}[name=navigation] .navigation__item__text--6{font-size:48px !important}[name=navigation] .navigation__item__text--7{font-size:56px !important}[name=navigation] .navigation__item__text--8{font-size:64px !important}[name=navigation] .navigation__item__text--9{font-size:72px !important}[name=navigation] .navigation__item__text--10{font-size:80px !important}[name=navigation] .navigation__item__text--100{font-weight:100 !important}[name=navigation] .navigation__item__text--200{font-weight:200 !important}[name=navigation] .navigation__item__text--300{font-weight:300 !important}[name=navigation] .navigation__item__text--400{font-weight:400 !important}[name=navigation] .navigation__item__text--500{font-weight:500 !important}[name=navigation] .navigation__item__text--600{font-weight:600 !important}[name=navigation] .navigation__item__text--700{font-weight:700 !important}[name=navigation] .navigation__item__text--800{font-weight:800 !important}[name=navigation] .navigation__item__text--900{font-weight:900 !important}[name=navigation] .navigation__item__text--thin{font-weight:100 !important}[name=navigation] .navigation__item__text--extra-light{font-weight:200 !important}[name=navigation] .navigation__item__text--light{font-weight:300 !important}[name=navigation] .navigation__item__text--regular{font-weight:400 !important}[name=navigation] .navigation__item__text--medium{font-weight:500 !important}[name=navigation] .navigation__item__text--semi-bold{font-weight:600 !important}[name=navigation] .navigation__item__text--bold{font-weight:700 !important}[name=navigation] .navigation__item__text--extra-bold{font-weight:800 !important}[name=navigation] .navigation__item__media{transition:300ms linear}[name=navigation] .navigation__item__media--trailing{margin:4px 0 0 8px}[name=navigation] .navigation__item__media--leading{margin:4px 8px 0 0}[name=navigation] .navigation__item__media--active.navigation__item__media--toggle{transform:rotate3d(1, 0, 0, 180deg)}[name=navigation] .navigation__item--disabled{cursor:not-allowed}[name=navigation] .navigation--no-border{border:none !important}[name=navigation] .navigation.navigation{border-color:transparent}[name=navigation] .navigation.navigation .navigation__underline{background-color:#F76700}[name=navigation] .navigation.navigation .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation .navigation__item__icon{color:#5E5E5E}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover:active{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):focus{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation .navigation__item:disabled,[name=navigation] .navigation.navigation .navigation__item--disabled{color:#A7A7A7}[name=navigation] .navigation.navigation .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation] .navigation.navigation--tertiary{border-color:transparent}[name=navigation] .navigation.navigation--tertiary .navigation__underline{background-color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation--tertiary .navigation__item__icon{color:#5E5E5E}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover:active{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):focus{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--tertiary .navigation__item:disabled,[name=navigation] .navigation.navigation--tertiary .navigation__item--disabled{color:#A7A7A7}[name=navigation] .navigation.navigation--tertiary .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--tertiary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation] .navigation.navigation--quaternary{border-color:transparent}[name=navigation] .navigation.navigation--quaternary .navigation__underline{background-color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation--quaternary .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover:active{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):focus{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--quaternary .navigation__item:disabled,[name=navigation] .navigation.navigation--quaternary .navigation__item--disabled{color:#A7A7A7}[name=navigation] .navigation.navigation--quaternary .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--quaternary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation] .navigation.navigation--quinary{border-color:transparent}[name=navigation] .navigation.navigation--quinary .navigation__underline{background-color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation--quinary .navigation__item__icon{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover:active{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):focus{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#EF7B0B}[name=navigation] .navigation.navigation--quinary .navigation__item:disabled,[name=navigation] .navigation.navigation--quinary .navigation__item--disabled{color:#A7A7A7}[name=navigation] .navigation.navigation--quinary .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--quinary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation] .navigation.navigation--primary-500{border-color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__underline{background-color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover:active{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):focus{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:disabled,[name=navigation] .navigation.navigation--primary-500 .navigation__item--disabled{color:transparent}[name=navigation] .navigation.navigation--primary-500 .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--primary-500 .navigation__item--disabled .navigation__item__icon{color:transparent}[name=navigation] .navigation.navigation--senary-800{border-color:#5A8D00}[name=navigation] .navigation.navigation--senary-800 .navigation__underline{background-color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation--senary-800 .navigation__item__icon{color:#5E5E5E}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover:active{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):focus{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#95431D}[name=navigation] .navigation.navigation--senary-800 .navigation__item:disabled,[name=navigation] .navigation.navigation--senary-800 .navigation__item--disabled{color:#96C11F}[name=navigation] .navigation.navigation--senary-800 .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--senary-800 .navigation__item--disabled .navigation__item__icon{color:#96C11F}[name=navigation] .navigation.navigation--tertiary-800{border-color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__underline{background-color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover:active{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):focus{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:disabled,[name=navigation] .navigation.navigation--tertiary-800 .navigation__item--disabled{color:\"\"}[name=navigation] .navigation.navigation--tertiary-800 .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--tertiary-800 .navigation__item--disabled .navigation__item__icon{color:\"\"}[name=navigation] .navigation.navigation--white{border-color:transparent}[name=navigation] .navigation.navigation--white .navigation__underline{background-color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item{color:#5E5E5E}[name=navigation] .navigation.navigation--white .navigation__item__icon{color:#5E5E5E}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover:active{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):focus{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#F76700}[name=navigation] .navigation.navigation--white .navigation__item:disabled,[name=navigation] .navigation.navigation--white .navigation__item--disabled{color:#A7A7A7}[name=navigation] .navigation.navigation--white .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--white .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation] .navigation.navigation--white-on-dark{border-color:transparent}[name=navigation] .navigation.navigation--white-on-dark .navigation__underline{background-color:#F76700}[name=navigation] .navigation.navigation--white-on-dark .navigation__item{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item__icon{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):hover{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):hover:active{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):focus{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#FFFFFF}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:disabled,[name=navigation] .navigation.navigation--white-on-dark .navigation__item--disabled{color:#EEEEEE}[name=navigation] .navigation.navigation--white-on-dark .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--white-on-dark .navigation__item--disabled .navigation__item__icon{color:#EEEEEE}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light{border-color:transparent}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__underline{background-color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item{color:#004885}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):hover{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):hover:active{color:#B35C00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#B35C00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):focus{color:#FC8823}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#FC8823}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:disabled,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item--disabled{color:#5A8D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-light .navigation__item--disabled .navigation__item__icon{color:#5A8D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark{border-color:transparent}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__underline{background-color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item{color:#5A8D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item__icon{color:#004885}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):hover{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):active,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):hover:active{color:#B35C00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#B35C00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):focus{color:#FC8823}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#FC8823}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#EF7D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:disabled,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item--disabled{color:#5A8D00}[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item:disabled .navigation__item__icon,[name=navigation] .navigation.navigation--brand-expressive-orange-dark-on-dark .navigation__item--disabled .navigation__item__icon{color:#5A8D00}[name=navigation] .navigation.navigation .navigation__underline{height:2px}[name=navigation] .navigation.navigation .navigation__item{padding:16px}[name=navigation] .navigation.navigation .navigation__item__icon-container{width:32px;height:32px}[name=navigation] .navigation.navigation .navigation__item__icon{width:32px;height:32px;font-size:32px}[name=navigation] .navigation.navigation .navigation__item__text{font-size:14px;font-weight:400;text-transform:none}[name=navigation] .navigation.navigation .navigation__item--active .navigation__item__text{font-weight:600}[name=navigation] .navigation.navigation.navigation--without-icon .navigation__item__text{font-size:14px}[name=navigation] .navigation.navigation.navigation--top{border-bottom-width:2px}[name=navigation] .navigation.navigation.navigation--top .navigation__underline{bottom:-2px}[name=navigation] .navigation.navigation.navigation--bottom{border-top-width:2px}[name=navigation] .navigation.navigation.navigation--bottom .navigation__underline{top:-2px}[name=navigation] .navigation.navigation:not(.navigation--streched) .navigation__item{padding:16px 12px 16px;margin:0}[name=navigation] .navigation.navigation.navigation--without-icon .navigation__item .navigation__item__text{text-transform:none}[name=navigation] .navigation.navigation--xlg .navigation__underline{height:1px}[name=navigation] .navigation.navigation--xlg .navigation__item{padding:0}[name=navigation] .navigation.navigation--xlg .navigation__item__icon-container{width:0;height:0}[name=navigation] .navigation.navigation--xlg .navigation__item__icon{width:0;height:0;font-size:0}[name=navigation] .navigation.navigation--xlg .navigation__item__text{font-size:14px;font-weight:400;text-transform:none}[name=navigation] .navigation.navigation--xlg .navigation__item--active .navigation__item__text{font-weight:400}[name=navigation] .navigation.navigation--xlg.navigation--without-icon .navigation__item__text{font-size:14px}[name=navigation] .navigation.navigation--xlg.navigation--top{border-bottom-width:1px}[name=navigation] .navigation.navigation--xlg.navigation--top .navigation__underline{bottom:-1px}[name=navigation] .navigation.navigation--xlg.navigation--bottom{border-top-width:1px}[name=navigation] .navigation.navigation--xlg.navigation--bottom .navigation__underline{top:-1px}[name=navigation] .navigation.navigation--xlg:not(.navigation--streched) .navigation__item{padding:0;margin:0}[name=navigation] .navigation.navigation--xlg.navigation--without-icon .navigation__item .navigation__item__text{text-transform:none}@media (max-width : 1439px){[name=navigation] .navigation.navigation:not(.navigation--streched) .navigation__item{padding:16px 12px 16px}}[name=navigation] .navigation--without-text .navigation__item .navigation__item__text{display:none}[name=navigation] .navigation--streched .navigation__item{flex-basis:0;flex-grow:1;flex-shrink:1}@media (max-width: 1151px){[name=navigation] .navigation.navigation--without-icon .navigation__item:not(.navigation__item--active){display:none}}[name=navigation].theme--dark .navigation{position:relative;display:flex;align-items:flex-start;justify-content:center;height:100%;border-style:solid}[name=navigation].theme--dark .navigation__underline{position:absolute;left:0;width:0;height:0;transition:left 0s}[name=navigation].theme--dark .navigation__item{position:relative;display:flex;align-items:center;flex-basis:auto;flex-direction:column;flex-grow:1;flex-shrink:0;justify-content:center;height:100%;text-decoration:none;outline:none;transition:color 0s;cursor:pointer}[name=navigation].theme--dark .navigation__item__icon-container{position:relative;pointer-events:none}[name=navigation].theme--dark .navigation__item__icon{display:block;transition:color 0s}[name=navigation].theme--dark .navigation__item__badge{position:absolute;right:-4px;top:0;display:flex}[name=navigation].theme--dark .navigation__item__text-container{display:flex;flex-direction:row;justify-content:center;flex-wrap:nowrap;align-items:center}[name=navigation].theme--dark .navigation__item__text{display:block;margin-top:4px;font-family:\"Montserrat\", sans-serif;text-align:center;text-decoration:none;line-height:16px;white-space:nowrap;pointer-events:none;transition:font-weight 0s}[name=navigation].theme--dark .navigation__item__text--0{font-size:0px !important}[name=navigation].theme--dark .navigation__item__text--1{font-size:8px !important}[name=navigation].theme--dark .navigation__item__text--2{font-size:16px !important}[name=navigation].theme--dark .navigation__item__text--3{font-size:24px !important}[name=navigation].theme--dark .navigation__item__text--4{font-size:32px !important}[name=navigation].theme--dark .navigation__item__text--5{font-size:40px !important}[name=navigation].theme--dark .navigation__item__text--6{font-size:48px !important}[name=navigation].theme--dark .navigation__item__text--7{font-size:56px !important}[name=navigation].theme--dark .navigation__item__text--8{font-size:64px !important}[name=navigation].theme--dark .navigation__item__text--9{font-size:72px !important}[name=navigation].theme--dark .navigation__item__text--10{font-size:80px !important}[name=navigation].theme--dark .navigation__item__text--100{font-weight:100 !important}[name=navigation].theme--dark .navigation__item__text--200{font-weight:200 !important}[name=navigation].theme--dark .navigation__item__text--300{font-weight:300 !important}[name=navigation].theme--dark .navigation__item__text--400{font-weight:400 !important}[name=navigation].theme--dark .navigation__item__text--500{font-weight:500 !important}[name=navigation].theme--dark .navigation__item__text--600{font-weight:600 !important}[name=navigation].theme--dark .navigation__item__text--700{font-weight:700 !important}[name=navigation].theme--dark .navigation__item__text--800{font-weight:800 !important}[name=navigation].theme--dark .navigation__item__text--900{font-weight:900 !important}[name=navigation].theme--dark .navigation__item__text--thin{font-weight:100 !important}[name=navigation].theme--dark .navigation__item__text--extra-light{font-weight:200 !important}[name=navigation].theme--dark .navigation__item__text--light{font-weight:300 !important}[name=navigation].theme--dark .navigation__item__text--regular{font-weight:400 !important}[name=navigation].theme--dark .navigation__item__text--medium{font-weight:500 !important}[name=navigation].theme--dark .navigation__item__text--semi-bold{font-weight:600 !important}[name=navigation].theme--dark .navigation__item__text--bold{font-weight:700 !important}[name=navigation].theme--dark .navigation__item__text--extra-bold{font-weight:800 !important}[name=navigation].theme--dark .navigation__item__media{transition:300ms linear}[name=navigation].theme--dark .navigation__item__media--trailing{margin:4px 0 0 8px}[name=navigation].theme--dark .navigation__item__media--leading{margin:4px 8px 0 0}[name=navigation].theme--dark .navigation__item__media--active.navigation__item__media--toggle{transform:rotate3d(1, 0, 0, 180deg)}[name=navigation].theme--dark .navigation__item--disabled{cursor:not-allowed}[name=navigation].theme--dark .navigation--no-border{border:none !important}[name=navigation].theme--dark .navigation.navigation{border-color:transparent}[name=navigation].theme--dark .navigation.navigation .navigation__underline{background-color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation .navigation__item__icon{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover:active{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):focus{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation .navigation__item--disabled{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--tertiary{border-color:transparent}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__underline{background-color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item__icon{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover:active{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):focus{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#004885}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item--disabled{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--tertiary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--quaternary{border-color:transparent}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__underline{background-color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover:active{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):focus{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item--disabled{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--quaternary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--quinary{border-color:transparent}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__underline{background-color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item__icon{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover:active{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):focus{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#EF7B0B}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item--disabled{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--quinary .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--primary-500{border-color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__underline{background-color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover:active{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):focus{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item--disabled{color:transparent}[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--primary-500 .navigation__item--disabled .navigation__item__icon{color:transparent}[name=navigation].theme--dark .navigation.navigation--senary-800{border-color:#5A8D00}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__underline{background-color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item__icon{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover:active{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):focus{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#95431D}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item--disabled{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--senary-800 .navigation__item--disabled .navigation__item__icon{color:#96C11F}[name=navigation].theme--dark .navigation.navigation--tertiary-800{border-color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__underline{background-color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover:active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):focus{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item--disabled{color:\"\"}[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--tertiary-800 .navigation__item--disabled .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white{border-color:transparent}[name=navigation].theme--dark .navigation.navigation--white .navigation__underline{background-color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--white .navigation__item__icon{color:#5E5E5E}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover:active{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):focus{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:#F76700}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--white .navigation__item--disabled{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--white .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--white .navigation__item--disabled .navigation__item__icon{color:#A7A7A7}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark{border-color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__underline{background-color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover:active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):focus{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item--disabled{color:\"\"}[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--white-on-theme-dark .navigation__item--disabled .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light{border-color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__underline{background-color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):hover{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):hover:active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):focus{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item--disabled{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-light .navigation__item--disabled .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark{border-color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__underline{background-color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):active,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover:active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):active .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):hover:active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):focus{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled):focus .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:not(.navigation__item--disabled).navigation__item--active .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:disabled,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item--disabled{color:\"\"}[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item:disabled .navigation__item__icon,[name=navigation].theme--dark .navigation.navigation--brand-expressive-orange-theme-dark-on-theme-dark .navigation__item--disabled .navigation__item__icon{color:\"\"}[name=navigation].theme--dark .navigation.navigation .navigation__underline{height:2px}[name=navigation].theme--dark .navigation.navigation .navigation__item{padding:16px}[name=navigation].theme--dark .navigation.navigation .navigation__item__icon-container{width:32px;height:32px}[name=navigation].theme--dark .navigation.navigation .navigation__item__icon{width:32px;height:32px;font-size:32px}[name=navigation].theme--dark .navigation.navigation .navigation__item__text{font-size:14px;font-weight:400;text-transform:none}[name=navigation].theme--dark .navigation.navigation .navigation__item--active .navigation__item__text{font-weight:600}[name=navigation].theme--dark .navigation.navigation.navigation--without-icon .navigation__item__text{font-size:14px}[name=navigation].theme--dark .navigation.navigation.navigation--top{border-bottom-width:2px}[name=navigation].theme--dark .navigation.navigation.navigation--top .navigation__underline{bottom:-2px}[name=navigation].theme--dark .navigation.navigation.navigation--bottom{border-top-width:2px}[name=navigation].theme--dark .navigation.navigation.navigation--bottom .navigation__underline{top:-2px}[name=navigation].theme--dark .navigation.navigation:not(.navigation--streched) .navigation__item{padding:16px 12px 16px;margin:0}[name=navigation].theme--dark .navigation.navigation.navigation--without-icon .navigation__item .navigation__item__text{text-transform:none}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__underline{height:1px}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__item{padding:0}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__item__icon-container{width:0;height:0}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__item__icon{width:0;height:0;font-size:0}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__item__text{font-size:14px;font-weight:400;text-transform:none}[name=navigation].theme--dark .navigation.navigation--xlg .navigation__item--active .navigation__item__text{font-weight:400}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--without-icon .navigation__item__text{font-size:14px}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--top{border-bottom-width:1px}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--top .navigation__underline{bottom:-1px}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--bottom{border-top-width:1px}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--bottom .navigation__underline{top:-1px}[name=navigation].theme--dark .navigation.navigation--xlg:not(.navigation--streched) .navigation__item{padding:0;margin:0}[name=navigation].theme--dark .navigation.navigation--xlg.navigation--without-icon .navigation__item .navigation__item__text{text-transform:none}@media (max-width : 1439px){[name=navigation].theme--dark .navigation.navigation:not(.navigation--streched) .navigation__item{padding:16px 12px 16px}}[name=navigation].theme--dark .navigation--without-text .navigation__item .navigation__item__text{display:none}[name=navigation].theme--dark .navigation--streched .navigation__item{flex-basis:0;flex-grow:1;flex-shrink:1}@media (max-width: 1151px){[name=navigation].theme--dark .navigation.navigation--without-icon .navigation__item:not(.navigation__item--active){display:none}}";

const ENOVOSNavigation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickNavItem = index.createEvent(this, "clickNavItem", 7);
    this.shrink = false; // Means the navigation size 100% of the container is false
    this.position = 'bottom';
    this.items = [];
    this.menuItems = [];
    this.classNames = {
      EL: 'navigation',
      ITEM: '__item',
      ICON__CONTAINER: '__icon-container',
      ICON: '__icon',
      BADGE: '__badge',
      TEXT__CONTAINER: '__text-container',
      TEXT: '__text',
      MEDIA: '__media',
      LEADING: '--leading',
      TRAILING: '--trailing',
      LOADING: '--loading',
    };
    this._clickNavItemHandler = [];
    this._observable = undefined; // observer;
    this.updateItems = false;
    this.launchResizeDebounce = debounce.debounce(() => {
      this.setBorderItemsAttribute();
      this.setActiveStatus();
      this.el.querySelector(`.${this.classNames.EL}`)
        .classList.remove(`${this.classNames.EL}${this.classNames.LOADING}`);
    }, 500);
  }
  componentWillLoad() {
    this.initData();
    this.attachObservable();
  }
  /**
   * @description Init component variables
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
    if (!this.shrink) {
      this.el.setAttribute('is-streched', '');
    }
    this.attachEvents();
  }
  handleResize() {
    if (this.el.querySelector(`.${this.classNames.EL}`)) {
      this.el.querySelector(`.${this.classNames.EL}`)
        .classList.add(`${this.classNames.EL}${this.classNames.LOADING}`);
      this.launchResizeDebounce();
    }
  }
  async setItems(data) {
    this.items = data;
  }
  async setActiveItem(id) {
    this.activeItem = id;
    this.setBorderItemsAttribute();
    this.setActiveStatus();
  }
  watchItemsHandler(newData, oldData) {
    if (!isEqual.isEqual(newData, oldData) && newData.length > 0) {
      this.initData();
    }
  }
  /**
   * @description Update event on menu items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidRender() {
    if (this.updateItems === true) {
      this.setBorderItemsAttribute();
      this.attachEvents();
      this.updateItems = false;
    }
    this.setActiveStatus();
  }
  initData() {
    const menuItems = [];
    this.items.map(item => menuItems.push(new NavigationItem(item)));
    this.menuItems = menuItems;
    this.updateItems = true;
  }
  attachEvents() {
    this.menuItems.map((menuItem, index) => {
      if (menuItem.hasProp('id')) {
        const item = this.el.querySelector(`#navigation_${menuItem.getProp('id')}`);
        if (item) {
          if (this._clickNavItemHandler[index] && typeof this._clickNavItemHandler[index] === 'object') {
            this._clickNavItemHandler[index].removeEvent();
          }
          this._clickNavItemHandler[index] = new tapEvent.TapEvent(item, e => {
            this.clickNavItemHandler(e, menuItem);
          });
        }
      }
    });
  }
  attachObservable() {
    this._observable = new isVisibleObservable.IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.setBorderItemsAttribute();
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  /**
   * @description Define the event on menu items
   */
  clickNavItemHandler(e, item) {
    e.preventDefault();
    if (item.getProp('disabled') !== true) {
      this.clickNavItem.emit(item);
    }
    return false;
  }
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  isIconOnlyClass() {
    return (this.iconOnly) ? `${this.classNames.EL}--without-text` : '';
  }
  /**
   * @description Set the icon only class to the component
   * @return {string}
   */
  isTextOnlyClass() {
    return (this.textOnly) ? `${this.classNames.EL}--without-icon` : '';
  }
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  isShrinkClass() {
    return (!this.shrink) ? `${this.classNames.EL}--streched` : '';
  }
  /**
   * @description Set the streched only class to the component
   * @return {string}
   */
  isNoBorderClass() {
    return (this.noBorder) ? `${this.classNames.EL}--no-border` : '';
  }
  /**
   * @description Set the disabled item class depending the item property
   * @return {string}
   */
  isDisabledItemClass(item) {
    return (item.getProp('disabled') === true) ? `${this.classNames.EL}${this.classNames.ITEM}--disabled` : '';
  }
  /**
   * @description Set the position class
   * @return {string}
   */
  positionClass() {
    return (['top', 'bottom'].includes(this.position)) ? `${this.classNames.EL}--${this.position}` : '';
  }
  /**
   * @description Get component size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  setActiveStatus() {
    const activeClass = `${this.classNames.EL}${this.classNames.ITEM}--active`;
    // Remove active class on all items
    this.el.querySelectorAll(`.${activeClass}`)
      .forEach(el => el.classList.remove(`${activeClass}`));
    const underline = this.el.querySelector(`.${this.classNames.EL}__underline`);
    const activeItem = this.el.querySelector(`#navigation_${this.activeItem}`);
    if (activeItem) {
      activeItem.classList.add(`${activeClass}`);
      underline.style.width = `${activeItem.dataset.width}px`;
      underline.style.left = `${activeItem.dataset.left}px`;
    }
  }
  /**
   * @return true if item in param is currently active
   */
  isActiveItem(item) {
    return item.getProp('id') === this.activeItem;
  }
  /**
   * @description Init width of element to avoid gap when changing the font fontWeight
   * and set data attribute to correctly set the border position and size
   */
  setBorderItemsAttribute() {
    let originLeft = 0;
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => {
      el.removeAttribute('style');
    });
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.ITEM}`)
      .forEach((el) => {
      const style = getComputedStyle(el);
      const marginLeft = parseInt(style.marginLeft, 10);
      const marginRight = parseInt(style.marginRight, 10);
      const boundingClientRect = el.getBoundingClientRect();
      const widthEl = Math.ceil(boundingClientRect.width);
      el.dataset.width = widthEl.toString();
      el.dataset.left = (marginLeft + originLeft).toString();
      el.style.width = `${widthEl}px`;
      originLeft += widthEl + marginLeft + marginRight;
    });
  }
  // Get size
  getFontSize() {
    if (this.fontSize !== undefined) {
      const regex = /(px|x)?(\d*\.?\d+)(px|x)?/gi;
      const regexMatch = regex.exec(this.fontSize);
      if (regexMatch && regexMatch.length === 4) {
        const ratio = (regexMatch[1] !== undefined) ? regexMatch[1] : regexMatch[3];
        let size = parseInt(regexMatch[2], 10);
        if (ratio !== undefined && ratio.toLowerCase() === 'px') {
          // @ts-ignore
          size = Math.round(size / 8);
        }
        if (size > 0) {
          return `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}--${size}`;
        }
      }
    }
    return '';
  }
  // Get size
  getFontWeight() {
    if (this.fontWeight !== undefined) {
      return `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}--${this.fontWeight}`;
    }
    return '';
  }
  /**
   * @return true if media has state defined
   */
  hasMediaState(media, state) {
    return (media.states && media.states.hasOwnProperty(state));
  }
  /**
   * @return states and styles classes for each states as string array
   */
  getMediaStates(item, media) {
    const states = {
      classes: [],
      styles: [],
    };
    const mediaClass = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`;
    if (this.hasMediaState(media, 'active') && this.isActiveItem(item)) {
      states.classes.push(`${mediaClass}--active`);
      states.classes.push(...this.getMediaStateStyles(media, 'active').classes);
      states.styles.push(...this.getMediaStateStyles(media, 'active').styles);
    }
    if (this.hasMediaState(media, 'default') && !this.isActiveItem(item)) {
      states.classes.push(`${mediaClass}--default`);
      states.classes.push(...this.getMediaStateStyles(media, 'default').classes);
      states.styles.push(...this.getMediaStateStyles(media, 'default').styles);
    }
    return states;
  }
  /**
   * @return styles classes for one state as string array
   */
  getMediaStateStyles(media, state) {
    const styles = { classes: [], styles: [] };
    const mediaClass = `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`;
    if (media.states[state].styles) {
      styles.styles.push(media.states[state].styles);
    }
    if (media.states[state].toggle) {
      styles.classes.push(`${mediaClass}--toggle`);
    }
    return styles;
  }
  /**
   * @return main styles classes as string array
   */
  getMediaStyles(media) {
    const styles = [];
    if (media === null || media === void 0 ? void 0 : media.styles) {
      styles.push(media.styles);
    }
    return styles;
  }
  /**
   * @return trailing or leading configured icon as preact string
   */
  getPositionnedMedia(item, position) {
    if (item.hasProp('medias')) {
      const media = item.medias.find(el => el.position === position);
      if (media) {
        return (index.h("div", { class: [
            `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}`,
            `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.MEDIA}${this.classNames[position.toUpperCase()]}`,
            ...this.getMediaStates(item, media).classes,
          ].join(' ') }, index.h("eds-icon", { icon: media.value, styles: [
            ...this.getMediaStyles(media),
            ...this.getMediaStates(item, media).styles,
          ].join(' ') })));
      }
    }
  }
  render() {
    return (index.h("div", { class: [
        this.classNames.EL,
        this.positionClass(),
        this.isIconOnlyClass(),
        this.isTextOnlyClass(),
        this.isShrinkClass(),
        this.isNoBorderClass(),
        this.getSize(),
        ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' ') }, this.menuItems.map(item => {
      if (item.hasProp('id')) {
        return (index.h("a", { id: `navigation_${item.getProp('id')}`, class: [
            `${this.classNames.EL}${this.classNames.ITEM}`,
            this.isDisabledItemClass(item),
          ].join(' ') }, item.hasProp('icon') && !this.textOnly
          ? index.h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON__CONTAINER}` }, index.h("eds-icon", { class: [
              `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.ICON}`,
            ].join(' '), icon: item.getProp('icon') }), item.hasProp('badge')
            ? index.h("eds-badge", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}`, size: "xxs", styles: item.getProp('badgeStyles') })
            : '')
          : '', index.h("div", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT__CONTAINER}` }, this.getPositionnedMedia(item, 'leading'), index.h("div", { class: [
            `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.TEXT}`,
            this.getFontSize(),
            this.getFontWeight(),
          ].join(' ') }, item.getProp('text')), this.getPositionnedMedia(item, 'trailing'))));
      }
    }), index.h("div", { class: `${this.classNames.EL}__underline` })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"]
  }; }
};
ENOVOSNavigation.style = navigationCss;

exports.eds_app_dialog_consumption_download = ENOVOSAppDialogConsumptionDownload;
exports.eds_app_periodic_consumption = ENOVOSAppPeriodicConsumption;
exports.eds_bar_chart = ENOVOSBarChart;
exports.eds_datalist = ENOVOSDatalist;
exports.eds_line_chart = ENOVOSLineChart;
exports.eds_navigation = ENOVOSNavigation;
