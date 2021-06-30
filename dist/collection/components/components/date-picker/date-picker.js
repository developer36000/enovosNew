import { Component, Element, Event, Listen, Method, Prop, State, Watch, h } from '@stencil/core';
import { padStart } from 'lodash-es';
import moment from 'moment';
import 'moment/dist/locale/de';
import 'moment/dist/locale/fr';
import { onChange as themeOnChange, storeTheme } from '../../../store/themes';
import { StylePropsHelper } from '../../../utils/StylePropsHelper';
import { IsInternetExplorer } from '../../../utils/isInternetExplorer';
import { IsVisibleObservable } from '../../../utils/isVisibleObservable';
import { TapEvent } from '../../../utils/tapEvent';
/**
 * @name Date Picker
 * @description Date Picker allows user to pick a day or select a range a days. The calendar can be attached to a selector component in order to be displayed.
 * @path components
 * @documented true
 */
export class ENOVOSDatePicker {
  constructor() {
    this.styles = 'primary';
    this.elevationLevel = '2';
    this.elevationStyles = 'dark';
    this.isRanged = false;
    this.locale = 'en';
    this.typeView = 'day';
    this.days = [];
    this.months = [];
    this.years = [];
    this.classNames = {
      EL: 'date-picker',
      CONTAINER: '__container',
      WRAPPER: '__wrapper',
      NAV: '__nav',
      HEADER: '__header',
      BODY: '__body',
      CELL: '__cell',
      BUTTON: '__button',
      PREVIOUS: '__previous',
      PERIOD: '__period',
      NEXT: '__next',
      SELECTOR: '__selector',
      SLOT: '__slot',
      DISABLED: '--disabled',
      HAS_SELECTOR: '--has-selector',
      START: '--start',
      MONTH: '--month',
      RANGED: '--ranged',
      VISIBLE: '--visible',
      TEMPLATE_DAYS: '--template-days',
      TEMPLATE_MONTHS: '--template-months',
      TEMPLATE_YEARS: '--template-years',
    };
    this.timeoutValue = 10000;
    this.labels = [];
    this.currentDate = moment();
    this.currentDayDate = moment().format('DD');
    this.currentDayButtonEl = undefined;
    this.tmpPeriod = moment();
    this._restartRange = false;
    this._clickSlotSelectorHandler = undefined;
    this._onClickOutsideHandler = undefined;
    this.activeComponent = false;
    this.selectorAttachment = false;
    this._observable = undefined; // observer;
    this.fieldSelector = undefined; // Target on which the tooltip should be attached
  }
  /**
   * @description Reset date picker
   */
  async reset() {
    this.selectedDate = undefined;
    this.beginDate = undefined;
    this.endDate = undefined;
  }
  watchLocaleHandler(newLocale, oldLocale) {
    if (newLocale !== oldLocale) {
      this.setDaysLabels();
    }
  }
  handleIntervalDateChange() {
    this.setInterval();
  }
  handleFocusInput() {
    this.showComponent(true);
  }
  handleBlurInput() {
    if (!this.activeComponent) {
      this.showComponent(false);
    }
  }
  /** INJECT_ANCHOR */
  /**
   * @description Init component variables. All date should have time to 00:00:00
   * Init day labels, days, month and years based on current date or selectedDate value
   */
  componentWillLoad() {
    const dateTime = moment();
    const objectDate = {
      year: dateTime.year(),
      month: dateTime.month(),
      day: dateTime.date(),
    };
    this.currentDate = moment(objectDate);
    this.tmpPeriod = moment(objectDate);
    this.setDays(moment(objectDate));
    this.setDaysLabels();
    for (let i = 0; i < 12; i++) {
      this.months.push(moment(objectDate).month(i));
    }
    this.setInterval();
    this.setYears(moment(objectDate));
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
  setDaysLabels() {
    const labels = [];
    for (let i = 1; i <= 7; i++) {
      labels.push(moment().locale(this.locale).day(i).format('ddd'));
    }
    this.labels = labels;
  }
  setInterval() {
    this.interval = {
      min: this.minDate ? moment(this.minDate) : undefined,
      max: this.maxDate ? moment(this.maxDate) : undefined,
    };
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.manageSelector();
        this.setTopPosition();
        if (IsInternetExplorer.isIE11()) {
          this.setLeftPosition();
        }
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  manageSelector() {
    const elementContainer = this.el.querySelector(`.${this.classNames.EL}`);
    const elementWrapper = this.el.querySelector(`.${this.classNames.EL}${this.classNames.WRAPPER}`);
    const hasSlotSelector = !!this.el.querySelector(`[slot="selector"]`);
    if (hasSlotSelector) {
      const slotSelectorElement = this.el.querySelector('[slot=selector]');
      this.selectorAttachment = true;
      slotSelectorElement.classList.add(`${this.classNames.EL}${this.classNames.SELECTOR}${this.classNames.SLOT}`);
      elementWrapper.classList.add(`${this.classNames.EL}${this.classNames.HAS_SELECTOR}`);
      const inputNodes = slotSelectorElement.getElementsByTagName('input');
      if (inputNodes.length <= 0) {
        if (this._clickSlotSelectorHandler && typeof this._clickSlotSelectorHandler === 'object') {
          this._clickSlotSelectorHandler.removeEvent();
        }
        this._clickSlotSelectorHandler = new TapEvent(slotSelectorElement, () => {
          this.showComponent((elementContainer.classList.contains(`${this.classNames.EL}${this.classNames.VISIBLE}`)) ? false : true);
        });
      }
    }
    else {
      this.selectorAttachment = false;
      elementContainer.classList.add(`${this.classNames.EL}${this.classNames.VISIBLE}`);
    }
  }
  setTopPosition() {
    const slotSelector = this.el.querySelector(`.${this.classNames.EL}${this.classNames.SELECTOR}${this.classNames.SLOT}`);
    const container = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HAS_SELECTOR}`);
    if (slotSelector && container) {
      const boundingClientRect = slotSelector.getBoundingClientRect();
      container.style.top = `${boundingClientRect.height}px`;
    }
  }
  setLeftPosition() {
    const container = this.el.querySelector(`.${this.classNames.EL}${this.classNames.HAS_SELECTOR}`);
    if (container) {
      const boundingClientRect = container.getBoundingClientRect();
      container.style.left = `calc(50% - ${boundingClientRect.width / 2}px)`;
    }
  }
  showComponent(visible) {
    this.activeComponent = visible;
    this._restartRange = visible;
    const elementContainer = this.el.querySelector(`.${this.classNames.EL}`);
    const slotSelector = this.el.querySelector('[slot=selector]');
    if (slotSelector) {
      slotSelector.classList.add(`${this.classNames.EL}${this.classNames.SELECTOR}${this.classNames.SLOT}`);
      const elementWrapper = this.el.querySelector(`.${this.classNames.EL}${this.classNames.WRAPPER}`);
      if (elementWrapper) {
        elementWrapper.classList.add(`${this.classNames.EL}${this.classNames.HAS_SELECTOR}`);
      }
      if (visible === true) {
        elementContainer.style.minWidth = `${slotSelector.offsetWidth}px`;
        elementContainer.classList.add(`${this.classNames.EL}${this.classNames.VISIBLE}`);
      }
      else {
        elementContainer.classList.remove(`${this.classNames.EL}${this.classNames.VISIBLE}`);
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
      this.showComponent(false);
    }, false);
  }
  displayMonthView(event) {
    event.preventDefault();
    this.typeView = 'month';
    this.setMonths(this.tmpPeriod);
  }
  displayYearView(event) {
    event.preventDefault();
    this.typeView = 'year';
    this.setYears(this.tmpPeriod);
  }
  displayDayView(event) {
    event.preventDefault();
    this.typeView = 'day';
  }
  setDay(event, date) {
    event.preventDefault();
    const data = {
      date: undefined,
      range: {
        begin: undefined,
        end: undefined,
      },
      formatted: undefined,
    };
    if (this.isRanged) {
      if (this._restartRange === true) {
        this._restartRange = false;
        this.beginDate = undefined;
      }
      if (this.beginDate === undefined) {
        this.beginDate = date;
        this.endDate = undefined;
        data.formatted = `${this.beginDate.format('DD/MM/YYYY')}`;
      }
      else {
        if (moment(date).isBefore(moment(this.beginDate)) || moment(date).isSame(moment(this.beginDate))) {
          this.beginDate = date;
          this.endDate = undefined;
          data.formatted = `${this.beginDate.format('DD/MM/YYYY')}`;
        }
        else {
          this.endDate = date;
          data.formatted = `${this.beginDate.format('DD/MM/YYYY')} - ${this.endDate.format('DD/MM/YYYY')}`;
          this.showComponent(false);
        }
      }
      data.range.begin = this.beginDate;
      data.range.end = this.endDate;
    }
    else {
      this.selectedDate = date;
      data.date = date;
      data.formatted = date.format('DD/MM/YYYY');
      this.showComponent(false);
    }
    this.clickDatePicker.emit(data);
  }
  updateView(event, direction) {
    event.preventDefault();
    const increment = (direction === 'previous') ? -1 : 1;
    switch (this.typeView) {
      case 'year':
        if (direction === 'previous') {
          this.setYears(this.tmpPeriod.year(this.years[0].format('YYYY')));
        }
        else {
          this.setYears(this.tmpPeriod.year(parseInt(this.years[this.years.length - 1].format('YYYY'), 10) + 15));
        }
        break;
      case 'month':
        this.tmpPeriod.year(parseInt(this.tmpPeriod.format('YYYY'), 10) + increment);
        this.setMonths(this.tmpPeriod);
        this.setDays(this.tmpPeriod);
        break;
      case 'day':
      default:
        this.tmpPeriod.month((parseInt(this.tmpPeriod.format('M'), 10) - 1) + increment);
        this.setDays(this.tmpPeriod);
        break;
    }
  }
  setMonth(event, month) {
    event.preventDefault();
    this.removeRangeClasses();
    this.tmpPeriod.month(month.format('M') - 1);
    this.setDays(this.tmpPeriod);
    this.displayDayView(event);
  }
  setYear(event, year) {
    event.preventDefault();
    this.removeRangeClasses();
    this.tmpPeriod.year(year.format('YYYY'));
    this.setDays(this.tmpPeriod);
    this.displayMonthView(event);
  }
  setDays(currentDate) {
    const daysInMonth = moment(currentDate).daysInMonth();
    const firstDayDate = moment(currentDate).startOf('month');
    const previousMonth = moment(currentDate).subtract(1, 'month');
    const previousMonthDays = previousMonth.daysInMonth();
    const nextsMonth = moment(currentDate).add(1, 'month');
    this.days = [];
    for (let i = firstDayDate.day() === 0 ? 7 : firstDayDate.day(); i > 1; i--) {
      previousMonth.date(previousMonthDays - i + 2);
      this.days.push(moment(previousMonth));
    }
    for (let i = 1; i <= daysInMonth; i++) {
      currentDate.date(i);
      this.days.push(moment(currentDate));
    }
    const daysCount = this.days.length;
    for (let i = 1; i <= (42 - daysCount); i++) {
      nextsMonth.date(i);
      this.days.push(moment(nextsMonth));
    }
  }
  setYears(currentDate) {
    this.years = [];
    for (let i = 15; i >= 0; i--) {
      this.years.push(moment(currentDate).subtract(i, 'year'));
    }
  }
  setMonths(currentDate) {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      this.months.push(moment(currentDate).month(i));
    }
  }
  getGridTemplate() {
    switch (this.typeView) {
      case 'year':
        return `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.TEMPLATE_YEARS}`;
      case 'month':
        return `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.TEMPLATE_MONTHS}`;
      default:
        return `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.TEMPLATE_DAYS}`;
    }
  }
  hasMaxDate() {
    return !!this.maxDate;
  }
  hasMinDate() {
    return !!this.minDate;
  }
  isInRangeDate(day, endDate) {
    endDate = (endDate === undefined) ? this.endDate : endDate;
    return (this.typeView === 'day' &&
      this.beginDate &&
      endDate &&
      moment(day).isBetween(moment(this.beginDate), moment(endDate)))
      ? true
      : false;
  }
  isInInterval(date, view) {
    if (!this.hasMaxDate() && !this.hasMinDate()) {
      return true;
    }
    switch (view) {
      case 'day':
        return !((this.hasMinDate() && date.isBefore(this.interval.min)) ||
          (this.hasMaxDate() && date.isAfter(this.interval.max)));
      case 'month':
        return !((this.hasMinDate() && date.isBefore(this.interval.min.format('YYYY-MM-DD'), 'month')) ||
          (this.hasMaxDate() && date.isAfter(this.interval.max.format('YYYY-MM-DD'), 'month')));
      case 'year':
        return !((this.hasMinDate() && date.isBefore(this.interval.min.format('YYYY-MM-DD'), 'year')) ||
          (this.hasMaxDate() && date.isAfter(this.interval.max.format('YYYY-MM-DD'), 'year')));
    }
  }
  removeRangeClasses() {
    this.setCurrentButtonAttributes(false); // Restaure current day configuration (outlined version)
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.RANGED}`).forEach((el) => {
      el.classList.remove(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.RANGED}`);
    });
  }
  addRangeClasses(day, last = false) {
    if (this.beginDate && day.isAfter(this.beginDate)) {
      const startDate = this.beginDate.isSame(this.tmpPeriod, 'month') && this.beginDate.isSame(this.tmpPeriod, 'year') ? parseInt(moment(this.beginDate).format('DD'), 10) + 1 : 1;
      for (let i = startDate; i <= parseInt(moment(day).format('DD'), 10) - (last === true ? 0 : 1); i++) {
        const dayValue = padStart(i.toString(), 2, '0');
        const item = this.el.querySelector(`[data-day="${dayValue}"]`);
        if (this.currentDayDate === dayValue) {
          if (this.isInRangeDate(this.currentDate, day)) {
            this.setCurrentButtonAttributes(true); // Remove current day configuration (outlined version)
          }
        }
        if (item) {
          item.classList.add(`${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.RANGED}`);
        }
      }
    }
  }
  setCurrentButtonAttributes(removeState) {
    if (this.currentDate.isSame(this.tmpPeriod, 'month') && this.currentDate.isSame(this.tmpPeriod, 'year')) {
      this.currentDayButtonEl = this.el.querySelector(`[data-day="${moment().format('DD')}"] .${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.BUTTON}`);
      if (this.currentDayButtonEl) {
        this.currentDayButtonEl.outlined = (removeState) ? false : true;
        this.currentDayButtonEl.textOnly = (removeState) ? true : false;
      }
    }
  }
  mouseEnterDay(e, day) {
    e.preventDefault();
    this.addRangeClasses(day);
  }
  mouseLeaveDay(e) {
    e.preventDefault();
    if (this.beginDate) {
      this.removeRangeClasses();
    }
    if (this.endDate) {
      if (this.typeView === 'day' && this.beginDate && this.endDate.isAfter(this.beginDate)) {
        if (this.endDate.isSame(this.tmpPeriod, 'month') && this.endDate.isSame(this.tmpPeriod, 'year')) {
          this.addRangeClasses(this.endDate);
        }
        else if (!this.endDate.isBefore(this.tmpPeriod)) {
          const daysInMonth = moment(this.tmpPeriod).daysInMonth();
          this.addRangeClasses(moment(this.tmpPeriod).date(daysInMonth), true);
        }
      }
    }
  }
  /** REMOVABLE START */
  render() {
    return [
      h("slot", { name: "selector" }),
      h("eds-elevation", { class: `${this.classNames.EL}${this.classNames.WRAPPER}`, styles: this.elevationStyles, level: this.elevationLevel },
        h("div", { class: [
            this.classNames.EL,
            StylePropsHelper.getStyles(this.styles, this.classNames.EL),
          ].join(' ') },
          h("div", { class: `${this.classNames.EL}${this.classNames.NAV}` },
            h("div", { class: `${this.classNames.EL}${this.classNames.NAV}${this.classNames.PREVIOUS}` },
              h("eds-button", { styles: this.styles, "text-only": true, size: "md", onClick: e => this.updateView(e, 'previous') },
                h("eds-icon", { slot: "icon", icon: "chevron-left" }))),
            h("div", { class: `${this.classNames.EL}${this.classNames.NAV}${this.classNames.PERIOD}` }, (() => {
              switch (this.typeView) {
                case 'year':
                  return h("eds-paragraph", { type: "body-2", styles: "secondary-500", content: `${moment(this.years[0]).format('YYYY')} - ${moment(this.years[this.years.length - 1]).format('YYYY')}` });
                case 'month':
                  return h("eds-button", { styles: this.styles, content: moment(this.tmpPeriod).format('YYYY'), onClick: e => this.displayYearView(e), "text-only": true, size: "md" });
                default:
                  return [
                    h("eds-button", { content: moment(this.tmpPeriod).locale(this.locale).format('MMMM'), styles: this.styles, onClick: e => this.displayMonthView(e), "text-only": true, size: "md", class: `${this.classNames.EL}${this.classNames.NAV}${this.classNames.MONTH}` }),
                    h("eds-button", { content: moment(this.tmpPeriod).format('YYYY'), styles: this.styles, onClick: e => this.displayYearView(e), "text-only": true, size: "md" }),
                  ];
              }
            })()),
            h("div", { class: `${this.classNames.EL}${this.classNames.NAV}${this.classNames.NEXT}` },
              h("eds-button", { styles: this.styles, "text-only": true, size: "md", onClick: e => this.updateView(e, 'next') },
                h("eds-icon", { slot: "icon", icon: "chevron-right" })))),
          h("div", { class: `${this.classNames.EL}${this.classNames.CONTAINER}` },
            (this.typeView === 'day') ?
              h("div", { class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.HEADER}` }, this.labels.map(label => h("div", { class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.HEADER}${this.classNames.CELL}` }, label.charAt(0))))
              : '',
            h("div", { class: [
                `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}`,
                this.getGridTemplate(),
              ].join(' ') }, (() => {
              switch (this.typeView) {
                case 'year':
                  return this.years.map(year => h("div", { class: [
                      `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}`,
                      !this.isInInterval(year, 'year') ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.DISABLED}` : '',
                    ].join(' ') },
                    h("eds-button", { content: year.format('YYYY'), class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.BUTTON}`, expand: true, size: "md", onClick: e => this.isInInterval(year, 'year') ? this.setYear(e, year) : false, "text-only": !year.isSame(this.currentDate, 'year') && !year.isSame(this.selectedDate, 'year'), outlined: year.isSame(this.currentDate, 'year') && !year.isSame(this.selectedDate, 'year'), styles: year.isSame(this.selectedDate, 'year') ? this.styles : '', disabled: !this.isInInterval(year, 'year') })));
                case 'month':
                  return this.months.map(month => h("div", { class: [
                      `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}`,
                      !this.isInInterval(month, 'month') ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.DISABLED}` : '',
                    ].join(' ') },
                    h("eds-button", { content: month.locale(this.locale).format('MMMM'), class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.BUTTON}`, expand: true, size: "md", onClick: e => this.isInInterval(month, 'month') ? this.setMonth(e, month) : false, "text-only": !month.isSame(this.currentDate, 'month') && !month.isSame(this.selectedDate, 'month'), outlined: month.isSame(this.currentDate, 'month') && !month.isSame(this.selectedDate, 'month'), styles: month.isSame(this.selectedDate, 'month') ? this.styles : '', disabled: !this.isInInterval(month, 'month') })));
                default:
                  return this.days.map(day => h("div", { class: [
                      `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}`,
                      !day.isSame(this.tmpPeriod, 'month') || !this.isInInterval(day, 'day') ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.DISABLED}` : '',
                      this.isInRangeDate(day) ? `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.RANGED}` : '',
                    ].join(' '), "data-day": (day.isSame(this.tmpPeriod, 'month')) ? `${moment(day).format('DD')}` : '', onMouseEnter: e => (this.typeView === 'day' && this.beginDate && day.isAfter(this.beginDate) && day.isSame(this.tmpPeriod, 'month') && day.isSame(this.tmpPeriod, 'year')) ? this.mouseEnterDay(e, day) : false, onMouseLeave: e => this.typeView === 'day' ? this.mouseLeaveDay(e) : false },
                    h("eds-button", { content: moment(day).format('DD'), class: `${this.classNames.EL}${this.classNames.CONTAINER}${this.classNames.BODY}${this.classNames.CELL}${this.classNames.BUTTON}`, size: "md", "data-moment": day, onClick: e => (day.isSame(this.tmpPeriod, 'month')) && this.isInInterval(day, 'day') ? this.setDay(e, day) : false, "text-only": (!day.isSame(this.currentDate) || this.isInRangeDate(day)) && !day.isSame(this.selectedDate) && !day.isSame(this.beginDate) && !day.isSame(this.endDate), outlined: day.isSame(this.currentDate) && !this.isInRangeDate(day) && !day.isSame(this.selectedDate) && !day.isSame(this.beginDate) && !day.isSame(this.endDate), rounded: true, styles: (this.selectedDate && day.isSame(this.selectedDate)) || (this.beginDate && day.isSame(this.beginDate)) || (this.endDate && day.isSame(this.endDate)) ? this.styles : '', disabled: !day.isSame(this.tmpPeriod, 'month') || !this.isInInterval(day, 'day') })));
              }
            })())))),
    ];
  }
  static get is() { return "eds-date-picker"; }
  static get originalStyleUrls() { return {
    "$": ["date-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["date-picker.css"]
  }; }
  static get properties() { return {
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
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "selectedDate": {
      "type": "any",
      "mutable": true,
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
      "attribute": "selected-date",
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
    "isRanged": {
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
      "attribute": "is-ranged",
      "reflect": false,
      "defaultValue": "false"
    },
    "beginDate": {
      "type": "any",
      "mutable": true,
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
      "attribute": "begin-date",
      "reflect": false
    },
    "endDate": {
      "type": "any",
      "mutable": true,
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
      "attribute": "end-date",
      "reflect": false
    },
    "locale": {
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
      "attribute": "locale",
      "reflect": false,
      "defaultValue": "'en'"
    },
    "minDate": {
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
      "attribute": "min-date",
      "reflect": false
    },
    "maxDate": {
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
      "attribute": "max-date",
      "reflect": false
    }
  }; }
  static get states() { return {
    "typeView": {},
    "days": {},
    "months": {},
    "years": {},
    "interval": {}
  }; }
  static get events() { return [{
      "method": "clickDatePicker",
      "name": "clickDatePicker",
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
    "reset": {
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
        "tags": [{
            "name": "description",
            "text": "Reset date picker"
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "locale",
      "methodName": "watchLocaleHandler"
    }, {
      "propName": "maxDate",
      "methodName": "handleIntervalDateChange"
    }, {
      "propName": "minDate",
      "methodName": "handleIntervalDateChange"
    }]; }
  static get listeners() { return [{
      "name": "focusInput",
      "method": "handleFocusInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "blurInput",
      "method": "handleBlurInput",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
