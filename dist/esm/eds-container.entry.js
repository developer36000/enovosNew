import { r as registerInstance, h, g as getElement } from './index-c1ef9624.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';

const containerCss = "[name=container] .container{width:1440px;max-width:100%;margin:0 auto}[name=container] .container--fluid{width:100% !important}[name=container] .container--full-height{height:100%}[name=container] .container--no-padding{padding-left:0 !important;padding-right:0 !important}[name=container] .container.container--force-xlg,[name=container] .container.container--force-lg,[name=container] .container.container--force-md,[name=container] .container.container--force-sm{width:100% !important}[name=container] .container--xlg{width:1440px !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--xlg.container--force-xlg{width:100% !important}[name=container] .container--lg{width:100% !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--lg.container--force-lg{width:100% !important}[name=container] .container--md{width:864px !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--md.container--force-md{width:100% !important}[name=container] .container--sm{width:640px !important;padding-left:12px !important;padding-right:12px !important}[name=container] .container--sm.container--force-sm{width:100% !important}[name=container] .container--xs{width:calc(100% - (24px * 2)) !important;padding-left:24px !important;padding-right:24px !important;margin:0 auto !important}[name=container] .container--xxs{width:calc(100% - (24px * 2)) !important;padding-left:24px !important;padding-right:24px !important;margin:0 auto !important}@media (min-width: 1440px){[name=container] .container{width:1440px;padding-left:16px;padding-right:16px}}@media (max-width: 1439px){[name=container] .container{width:100%;padding-left:16px;padding-right:16px}}@media (max-width: 1151px){[name=container] .container{width:864px;padding-left:16px;padding-right:16px}}@media (max-width: 863px){[name=container] .container{width:640px;padding-left:12px;padding-right:12px}}@media (max-width: 639px){[name=container] .container{width:calc(100% - (24px * 2));padding-left:0;padding-right:0;margin:0 auto}}@media (max-width: 320px){[name=container] .container{width:calc(100% - (24px * 2));padding-left:0;padding-right:0;margin:0 auto}}";

const ENOVOSContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fluid = false;
    this.fullHeight = true;
    this.noPadding = false;
    this.center = false;
    this.classNames = {
      EL: 'container',
    };
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
    onChange('theme', () => {
      handleThemeChange(storeTheme.get('theme'));
    });
    handleThemeChange(storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  // for fullscreen container
  getCenter() {
    return (this.center) ? `${this.classNames.EL}--center` : '';
  }
  // for 100% height container
  getFullHeight() {
    return (this.fullHeight) ? `${this.classNames.EL}--full-height` : '';
  }
  // for fullscreen container
  getFluid() {
    return (this.fluid) ? `${this.classNames.EL}--fluid` : '';
  }
  // for fullscreen container
  getNoPadding() {
    return (this.noPadding) ? `${this.classNames.EL}--no-padding` : '';
  }
  /**
   * @description Force container size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /**
   * @description Force container size
   */
  getFluidForce() {
    return (this.fluidForce !== undefined) ? `${this.classNames.EL}--force-${this.fluidForce}` : '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        this.getFluid(),
        this.getNoPadding(),
        this.getCenter(),
        this.getSize(),
        this.getFullHeight(),
        this.getFluidForce(),
      ].join(' ') }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
ENOVOSContainer.style = containerCss;

export { ENOVOSContainer as eds_container };
