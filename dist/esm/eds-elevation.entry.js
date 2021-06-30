import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const elevationCss = "[name=elevation]{display:block;height:inherit}[name=elevation] .elevation.elevation--0{box-shadow:0 0 0 0 rgba(0, 0, 0, 0) !important}[name=elevation] .elevation.elevation--0.elevation--reverse{box-shadow:0 -0 0 0 rgba(0, 0, 0, 0) !important}[name=elevation] .elevation.elevation--1{box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--1.elevation--reverse{box-shadow:0 -1px 4px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--2{box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--2.elevation--reverse{box-shadow:0 -2px 4px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--3{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--3.elevation--reverse{box-shadow:0 -4px 8px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--4{box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--4.elevation--reverse{box-shadow:0 -8px 16px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--5{box-shadow:0 16px 24px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--5.elevation--reverse{box-shadow:0 -16px 24px 0 rgba(0, 0, 0, 0.1) !important}[name=elevation] .elevation.elevation--dark--0{box-shadow:0 0 0 0 rgba(0, 0, 0, 0) !important}[name=elevation] .elevation.elevation--dark--0.elevation--reverse{box-shadow:0 -0 0 0 rgba(0, 0, 0, 0) !important}[name=elevation] .elevation.elevation--dark--1{box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--1.elevation--reverse{box-shadow:0 -1px 4px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--2{box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--2.elevation--reverse{box-shadow:0 -2px 4px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--3{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--3.elevation--reverse{box-shadow:0 -4px 8px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--4{box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--4.elevation--reverse{box-shadow:0 -8px 16px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--5{box-shadow:0 16px 24px 0 rgba(0, 0, 0, 0.25) !important}[name=elevation] .elevation.elevation--dark--5.elevation--reverse{box-shadow:0 -16px 24px 0 rgba(0, 0, 0, 0.25) !important}";

const ENOVOSElevation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.level = '0';
    this.styles = '';
    this.classNames = {
      EL: 'elevation',
      LEVEL: '--level-',
      REVERSE: '--reverse',
    };
  }
  /** INJECT_ANCHOR */
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
  // Get elevation class
  getStyles() {
    const variationStyles = ['dark'];
    const regex = new RegExp(`(${variationStyles.join('|')})`);
    const maxLevels = 5;
    const stylesList = this.styles.split(' ');
    const variationClasses = [];
    let componentClasses = [];
    // Init level
    if (!this.level || (Number(this.level) < 0 && Number(this.level) > maxLevels)) {
      this.level = '0';
    }
    // Set variation classes
    stylesList.forEach((style) => {
      if (regex.test(style)) {
        variationClasses.push(style);
      }
    });
    if (variationClasses.length > 0) {
      componentClasses = componentClasses.concat(variationClasses.map((variationClassName) => `${this.classNames.EL}--${variationClassName}--${this.level}`));
    }
    else {
      componentClasses.push(`${this.classNames.EL}--${this.level}`);
    }
    if (this.reverse) {
      componentClasses.push(`${this.classNames.EL}${this.classNames.REVERSE}`);
    }
    return componentClasses;
  }
  componentDidRender() {
    const firstChild = this.el.firstElementChild;
    if (firstChild) {
      const classesToKeep = Array.from(firstChild.classList).filter(className => {
        return String(className).match(/elevation--(dark)?(--)?((\d))?/) === null;
      });
      firstChild.removeAttribute('class');
      classesToKeep.forEach(className => {
        firstChild.classList.remove(className);
      });
      firstChild.classList.add(this.classNames.EL);
      const classes = classesToKeep.concat(this.getStyles());
      if (firstChild && classes.length > 0) {
        classes.forEach((className) => {
          firstChild.classList.add(className);
        });
      }
    }
  }
  /** REMOVABLE START */
  render() {
    return (h("slot", null));
  }
  get el() { return getElement(this); }
};
ENOVOSElevation.style = elevationCss;

export { ENOVOSElevation as eds_elevation };
