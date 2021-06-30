import { EventEmitter } from '../../../stencil-public-runtime';
import moment from 'moment';
import 'moment/dist/locale/de';
import 'moment/dist/locale/fr';
/**
 * @name Date Picker
 * @description Date Picker allows user to pick a day or select a range a days. The calendar can be attached to a selector component in order to be displayed.
 * @path components
 * @documented true
 */
export declare class ENOVOSDatePicker {
  el: HTMLElement;
  clickDatePicker: EventEmitter;
  styles?: string;
  selectedDate: any;
  elevationLevel?: string;
  elevationStyles?: string;
  isRanged?: boolean;
  beginDate: any;
  endDate: any;
  locale?: string;
  minDate?: string;
  maxDate?: string;
  typeView: string;
  days: any[];
  months: any[];
  years: any[];
  interval: {
    min: moment.Moment;
    max: moment.Moment;
  };
  classNames: {
    EL: string;
    CONTAINER: string;
    WRAPPER: string;
    NAV: string;
    HEADER: string;
    BODY: string;
    CELL: string;
    BUTTON: string;
    PREVIOUS: string;
    PERIOD: string;
    NEXT: string;
    SELECTOR: string;
    SLOT: string;
    DISABLED: string;
    HAS_SELECTOR: string;
    START: string;
    MONTH: string;
    RANGED: string;
    VISIBLE: string;
    TEMPLATE_DAYS: string;
    TEMPLATE_MONTHS: string;
    TEMPLATE_YEARS: string;
  };
  timeout: any;
  timeoutValue: number;
  labels: any[];
  currentDate: moment.Moment;
  currentDayDate: string;
  currentDayButtonEl: any;
  tmpPeriod: moment.Moment;
  _restartRange: boolean;
  _clickSlotSelectorHandler: any;
  _onClickOutsideHandler: any;
  activeComponent: boolean;
  selectorAttachment: boolean;
  _onInputHandler: any;
  _observable: any;
  fieldSelector: any;
  /**
   * @description Reset date picker
   */
  reset(): Promise<void>;
  watchLocaleHandler(newLocale: string, oldLocale: string): void;
  handleIntervalDateChange(): void;
  handleFocusInput(): void;
  handleBlurInput(): void;
  /** INJECT_ANCHOR */
  /**
   * @description Init component variables. All date should have time to 00:00:00
   * Init day labels, days, month and years based on current date or selectedDate value
   */
  componentWillLoad(): void;
  /**
   * @description Init the host element and attach event
   */
  handleTheme(): void;
  componentDidLoad(): void;
  private setDaysLabels;
  private setInterval;
  private attachObservable;
  manageSelector(): void;
  setTopPosition(): void;
  setLeftPosition(): void;
  showComponent(visible: any): void;
  initClickOutsideHandler(): void;
  displayMonthView(event: any): void;
  displayYearView(event: any): void;
  displayDayView(event: any): void;
  setDay(event: any, date: any): void;
  updateView(event: any, direction: any): void;
  setMonth(event: any, month: any): void;
  setYear(event: any, year: any): void;
  setDays(currentDate: any): void;
  setYears(currentDate: any): void;
  setMonths(currentDate: any): void;
  getGridTemplate(): string;
  hasMaxDate(): boolean;
  hasMinDate(): boolean;
  isInRangeDate(day: any, endDate?: object): boolean;
  isInInterval(date: moment.Moment, view: 'day' | 'month' | 'year'): boolean;
  removeRangeClasses(): void;
  addRangeClasses(day: any, last?: boolean): void;
  setCurrentButtonAttributes(removeState: any): void;
  mouseEnterDay(e: any, day: any): void;
  mouseLeaveDay(e: any): void;
  /** REMOVABLE START */
  render(): any[];
}
