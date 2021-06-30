import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './toNumber-30473e8a.js';
import './isObject-7039fcda.js';
import './toInteger-521653cd.js';
import './identity-5b806255.js';
import './_MapCache-a3ede28d.js';
import './_baseIsEqual-c6b81f6e.js';
import './_baseFindIndex-e57941fd.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_setToArray-60932de0.js';
import './_baseIteratee-93849f60.js';
import './_baseProperty-e57e2f20.js';
import './_createFind-3b4509e9.js';
import { f as findIndex } from './findIndex-98e7efdf.js';
import { f as find } from './find-5e7f0825.js';
import { h as has } from './has-1e48d487.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { I as IsVisibleObservable } from './isVisibleObservable-5e7e7c3e.js';

class ActionListItem {
  constructor(obj) {
    // make DatalistItemData idempotent
    if (obj instanceof ActionListItem) {
      return obj;
    }
    // Add props
    for (const name of Object.keys(obj)) {
      this[name] = obj[name];
    }
  }
  getProp(key) {
    return get(this, key);
  }
  hasProp(key) {
    return has(this, key);
  }
}

const actionListCss = "[name=action-list]{display:block;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;}[name=action-list]::-webkit-scrollbar{display:none;width:0;background:transparent}[name=action-list][nb-items=\"2\"]{padding:8px calc(2 * 8px)}[name=action-list][nb-items=\"3\"]{padding:8px calc(3 * 8px)}[name=action-list][nb-items=\"4\"]{padding:8px calc(4 * 8px)}[name=action-list][nb-items=\"5\"]{padding:8px calc(5 * 8px)}[name=action-list][nb-items=\"6\"]{padding:8px calc(6 * 8px)}[name=action-list][nb-items=\"7\"]{padding:8px calc(7 * 8px)}[name=action-list][nb-items=\"8\"]{padding:8px calc(8 * 8px)}[name=action-list][nb-items=\"9\"]{padding:8px calc(9 * 8px)}[name=action-list][nb-items=\"10\"]{padding:8px calc(10 * 8px)}[name=action-list][nb-items=\"11\"]{padding:8px calc(11 * 8px)}[name=action-list][nb-items=\"12\"]{padding:8px calc(12 * 8px)}[name=action-list][nb-items=\"13\"]{padding:8px calc(13 * 8px)}[name=action-list][nb-items=\"14\"]{padding:8px calc(14 * 8px)}[name=action-list][nb-items=\"15\"]{padding:8px calc(15 * 8px)}[name=action-list][nb-items=\"16\"]{padding:8px calc(16 * 8px)}[name=action-list][nb-items=\"17\"]{padding:8px calc(17 * 8px)}[name=action-list][nb-items=\"18\"]{padding:8px calc(18 * 8px)}[name=action-list][nb-items=\"19\"]{padding:8px calc(19 * 8px)}[name=action-list][nb-items=\"20\"]{padding:8px calc(20 * 8px)}.action-list{display:inline-flex;justify-content:space-between;width:100%}.action-list:not(.action-list--segmented)[data-nb=\"2\"]{width:calc(100% + ((2 * 2) * 8px)) !important;padding-right:32px !important}.action-list:not(.action-list--segmented)[data-nb=\"3\"]{width:calc(100% + ((3 * 2) * 8px)) !important;padding-right:48px !important}.action-list:not(.action-list--segmented)[data-nb=\"4\"]{width:calc(100% + ((4 * 2) * 8px)) !important;padding-right:64px !important}.action-list:not(.action-list--segmented)[data-nb=\"5\"]{width:calc(100% + ((5 * 2) * 8px)) !important;padding-right:80px !important}.action-list:not(.action-list--segmented)[data-nb=\"6\"]{width:calc(100% + ((6 * 2) * 8px)) !important;padding-right:96px !important}.action-list:not(.action-list--segmented)[data-nb=\"7\"]{width:calc(100% + ((7 * 2) * 8px)) !important;padding-right:112px !important}.action-list:not(.action-list--segmented)[data-nb=\"8\"]{width:calc(100% + ((8 * 2) * 8px)) !important;padding-right:128px !important}.action-list:not(.action-list--segmented)[data-nb=\"9\"]{width:calc(100% + ((9 * 2) * 8px)) !important;padding-right:144px !important}.action-list:not(.action-list--segmented)[data-nb=\"10\"]{width:calc(100% + ((10 * 2) * 8px)) !important;padding-right:160px !important}.action-list:not(.action-list--segmented)[data-nb=\"11\"]{width:calc(100% + ((11 * 2) * 8px)) !important;padding-right:176px !important}.action-list:not(.action-list--segmented)[data-nb=\"12\"]{width:calc(100% + ((12 * 2) * 8px)) !important;padding-right:192px !important}.action-list:not(.action-list--segmented)[data-nb=\"13\"]{width:calc(100% + ((13 * 2) * 8px)) !important;padding-right:208px !important}.action-list:not(.action-list--segmented)[data-nb=\"14\"]{width:calc(100% + ((14 * 2) * 8px)) !important;padding-right:224px !important}.action-list:not(.action-list--segmented)[data-nb=\"15\"]{width:calc(100% + ((15 * 2) * 8px)) !important;padding-right:240px !important}.action-list:not(.action-list--segmented)[data-nb=\"16\"]{width:calc(100% + ((16 * 2) * 8px)) !important;padding-right:256px !important}.action-list:not(.action-list--segmented)[data-nb=\"17\"]{width:calc(100% + ((17 * 2) * 8px)) !important;padding-right:272px !important}.action-list:not(.action-list--segmented)[data-nb=\"18\"]{width:calc(100% + ((18 * 2) * 8px)) !important;padding-right:288px !important}.action-list:not(.action-list--segmented)[data-nb=\"19\"]{width:calc(100% + ((19 * 2) * 8px)) !important;padding-right:304px !important}.action-list:not(.action-list--segmented)[data-nb=\"20\"]{width:calc(100% + ((20 * 2) * 8px)) !important;padding-right:320px !important}.action-list__item{white-space:nowrap}.action-list__item__container{position:relative}.action-list__item__container[data-nb=\"1\"]{flex:0 1 calc(100% / 1)}.action-list__item__container[data-nb=\"2\"]{flex:0 1 calc(100% / 2)}.action-list__item__container[data-nb=\"3\"]{flex:0 1 calc(100% / 3)}.action-list__item__container[data-nb=\"4\"]{flex:0 1 calc(100% / 4)}.action-list__item__container[data-nb=\"5\"]{flex:0 1 calc(100% / 5)}.action-list__item__container[data-nb=\"6\"]{flex:0 1 calc(100% / 6)}.action-list__item__container[data-nb=\"7\"]{flex:0 1 calc(100% / 7)}.action-list__item__container[data-nb=\"8\"]{flex:0 1 calc(100% / 8)}.action-list__item__container[data-nb=\"9\"]{flex:0 1 calc(100% / 9)}.action-list__item__container[data-nb=\"10\"]{flex:0 1 calc(100% / 10)}.action-list__item__container[data-nb=\"11\"]{flex:0 1 calc(100% / 11)}.action-list__item__container[data-nb=\"12\"]{flex:0 1 calc(100% / 12)}.action-list__item__container[data-nb=\"13\"]{flex:0 1 calc(100% / 13)}.action-list__item__container[data-nb=\"14\"]{flex:0 1 calc(100% / 14)}.action-list__item__container[data-nb=\"15\"]{flex:0 1 calc(100% / 15)}.action-list__item__container[data-nb=\"16\"]{flex:0 1 calc(100% / 16)}.action-list__item__container[data-nb=\"17\"]{flex:0 1 calc(100% / 17)}.action-list__item__container[data-nb=\"18\"]{flex:0 1 calc(100% / 18)}.action-list__item__container[data-nb=\"19\"]{flex:0 1 calc(100% / 19)}.action-list__item__container[data-nb=\"20\"]{flex:0 1 calc(100% / 20)}.action-list__item__container:not(:last-of-type){margin-right:8px}.action-list__item__container:not(:first-of-type){margin-left:8px}.action-list__item__badge{position:absolute;right:-8px;top:-8px}.action-list--fitted{justify-content:flex-start}.action-list--segmented{position:relative;width:100% !important;padding:4px;overflow:hidden}.action-list--segmented .action-list__item__container[data-nb=\"2\"]{width:calc(100% + (2 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"2\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"2\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"2\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"3\"]{width:calc(100% + (3 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"3\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"3\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"3\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"4\"]{width:calc(100% + (4 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"4\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"4\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"4\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"5\"]{width:calc(100% + (5 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"5\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"5\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"5\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"6\"]{width:calc(100% + (6 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"6\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"6\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"6\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"7\"]{width:calc(100% + (7 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"7\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"7\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"7\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"8\"]{width:calc(100% + (8 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"8\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"8\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"8\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"9\"]{width:calc(100% + (9 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"9\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"9\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"9\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"10\"]{width:calc(100% + (10 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"10\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"10\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"10\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"11\"]{width:calc(100% + (11 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"11\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"11\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"11\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"12\"]{width:calc(100% + (12 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"12\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"12\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"12\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"13\"]{width:calc(100% + (13 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"13\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"13\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"13\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"14\"]{width:calc(100% + (14 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"14\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"14\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"14\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"15\"]{width:calc(100% + (15 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"15\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"15\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"15\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"16\"]{width:calc(100% + (16 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"16\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"16\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"16\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"17\"]{width:calc(100% + (17 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"17\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"17\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"17\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"18\"]{width:calc(100% + (18 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"18\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"18\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"18\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"19\"]{width:calc(100% + (19 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"19\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"19\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"19\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__item__container[data-nb=\"20\"]{width:calc(100% + (20 * (8px / 4))) !important}.action-list--segmented .action-list__item__container[data-nb=\"20\"]:not(:last-of-type){margin-right:2px}.action-list--segmented .action-list__item__container[data-nb=\"20\"]:nth-child(2){margin-left:0 !important}.action-list--segmented .action-list__item__container[data-nb=\"20\"]:nth-child(n+2){margin-left:2px}.action-list--segmented .action-list__shape{position:absolute;left:4px;top:50%;width:auto;content:\"\";transform:translateY(-50%);transition:left 0.2s ease-in-out}.action-list--segmented .action-list__shape.action-list--bg--primary{background-color:#F76700 !important}.action-list--segmented .action-list__shape.action-list--bg--secondary{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary{background-color:#96C11F !important}.action-list--segmented .action-list__shape.action-list--bg--quinary{background-color:#EF7B0B !important}.action-list--segmented .action-list__shape.action-list--bg--senary{background-color:#CAA08D !important}.action-list--segmented .action-list__shape.action-list--bg--septenary{background-color:#6C887A !important}.action-list--segmented .action-list__shape.action-list--bg--grey{background-color:#757575 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-900{background-color:#F76700 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-800{background-color:#F76700 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-700{background-color:#D52B1E !important}.action-list--segmented .action-list__shape.action-list--bg--primary-600{background-color:#C75300 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-500{background-color:#F76700 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-400{background-color:#FFA14C !important}.action-list--segmented .action-list__shape.action-list--bg--primary-300{background-color:#FFB673 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-200{background-color:#FFDDBF !important}.action-list--segmented .action-list__shape.action-list--bg--primary-100{background-color:#FFF1E5 !important}.action-list--segmented .action-list__shape.action-list--bg--primary-50{background-color:#FFF1E5 !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-900{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-800{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-700{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-600{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-500{background-color:#5E5E5E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-400{background-color:#8E8E8E !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-300{background-color:#A7A7A7 !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-200{background-color:#D7D7D7 !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-100{background-color:#EEEEEE !important}.action-list--segmented .action-list__shape.action-list--bg--secondary-50{background-color:#EEEEEE !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-900{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-800{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-700{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-600{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-500{background-color:#004885 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-400{background-color:#5C8AB1 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-300{background-color:#85A8C5 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-200{background-color:#C2D3E2 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-100{background-color:#EBF1F6 !important}.action-list--segmented .action-list__shape.action-list--bg--tertiary-50{background-color:#EBF1F6 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-900{background-color:#5A8D00 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-800{background-color:#5A8D00 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-700{background-color:#5A8D00 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-600{background-color:#5A8D00 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-500{background-color:#96C11F !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-400{background-color:#BCD870 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-300{background-color:#CDE294 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-200{background-color:#E6F0C9 !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-100{background-color:#F7FAED !important}.action-list--segmented .action-list__shape.action-list--bg--quaternary-50{background-color:#F7FAED !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-900{background-color:#C75300 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-800{background-color:#C75300 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-700{background-color:#C75300 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-600{background-color:#C75300 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-500{background-color:#EF7B0B !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-400{background-color:#FFA14C !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-300{background-color:#FFB673 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-200{background-color:#FFDDBF !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-100{background-color:#FFF1E5 !important}.action-list--segmented .action-list__shape.action-list--bg--quinary-50{background-color:#FFF1E5 !important}.action-list--segmented .action-list__shape.action-list--bg--senary-900{background-color:#602A10 !important}.action-list--segmented .action-list__shape.action-list--bg--senary-800{background-color:#95431D !important}.action-list--segmented .action-list__shape.action-list--bg--senary-700{background-color:#B66E4D !important}.action-list--segmented .action-list__shape.action-list--bg--senary-600{background-color:#B78670 !important}.action-list--segmented .action-list__shape.action-list--bg--senary-500{background-color:#CAA08D !important}.action-list--segmented .action-list__shape.action-list--bg--senary-400{background-color:#DEAE98 !important}.action-list--segmented .action-list__shape.action-list--bg--senary-300{background-color:#EEC3AF !important}.action-list--segmented .action-list__shape.action-list--bg--senary-200{background-color:#FAD5C5 !important}.action-list--segmented .action-list__shape.action-list--bg--senary-100{background-color:#FFE9DF !important}.action-list--segmented .action-list__shape.action-list--bg--senary-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-900{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-800{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-700{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-600{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-500{background-color:#6C887A !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-400{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-300{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-200{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-100{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--septenary-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--grey-900{background-color:#1D1D1D !important}.action-list--segmented .action-list__shape.action-list--bg--grey-800{background-color:#333333 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-700{background-color:#4D4D4D !important}.action-list--segmented .action-list__shape.action-list--bg--grey-600{background-color:#666666 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-500{background-color:#757575 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-400{background-color:#999999 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-300{background-color:#B3B3B3 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-200{background-color:#CCCCCC !important}.action-list--segmented .action-list__shape.action-list--bg--grey-100{background-color:#E6E6E6 !important}.action-list--segmented .action-list__shape.action-list--bg--grey-50{background-color:#F8F8F8 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-success{background-color:#00856A !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-success-light{background-color:#E5F2F0 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-info{background-color:#2899A8 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-info-light{background-color:#DBF6FF !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-warning{background-color:#F76700 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-warning-light{background-color:#FFF1E5 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-error{background-color:#EB0000 !important}.action-list--segmented .action-list__shape.action-list--bg--contextual-error-light{background-color:#FDE5E5 !important}.action-list--segmented .action-list__shape.action-list--bg--pfm-blue{background-color:#55A1D3 !important}.action-list--segmented .action-list__shape.action-list--bg--pfm-green{background-color:#8DDE54 !important}.action-list--segmented .action-list__shape.action-list--bg--pfm-yellow{background-color:#FFC600 !important}.action-list--segmented .action-list__shape.action-list--bg--pfm-orange{background-color:#FC912E !important}.action-list--segmented .action-list__shape.action-list--bg--pfm-red{background-color:#DF5036 !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-ing{background-color:#F58220 !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-bil{background-color:#71308B !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-bcee{background-color:#144093 !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-post{background-color:#FABC0B !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-raiffeisen{background-color:#112242 !important}.action-list--segmented .action-list__shape.action-list--bg--external-bank-bnp-paribas{background-color:#00915A !important}.action-list--segmented .action-list__shape.action-list--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}.action-list--segmented .action-list__shape.action-list--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}.action-list--segmented .action-list__shape.action-list--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}.action-list--segmented .action-list__shape.action-list--bg--brand-pfm-blue{background-color:#55A1D3 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-pfm-green{background-color:#8DDE54 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-pfm-yellow{background-color:#FFC600 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-pfm-orange{background-color:#FC912E !important}.action-list--segmented .action-list__shape.action-list--bg--brand-pfm-red{background-color:#DF5036 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light{background-color:#4FB482 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-dark{background-color:#133B2C !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-dark{background-color:#0A324B !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-light{background-color:#F3B969 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-pink-light{background-color:#C03152 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-red-light{background-color:#F7B7AF !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-red-dark{background-color:#E62D32 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-orange-dark-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-800{background-color:#105373 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-700{background-color:#14668C !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-blue-light-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-900{background-color:#224D37 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-700{background-color:#39805C !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-600{background-color:#43996E !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-400{background-color:#55C28C !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-300{background-color:#60D199 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-green-light-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-light-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}.action-list--segmented .action-list__shape.action-list--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}.action-list--segmented .action-list__shape.action-list--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}.action-list--segmented .action-list__shape.action-list--bg--white{background-color:#FFFFFF !important}.action-list--segmented .action-list__shape.action-list--bg--black{background-color:#000000 !important}.action-list--segmented .action-list__shape.action-list--bg--transparent{background-color:transparent !important}.action-list.action-list.action-list--segmented{border-radius:calc(24px * 2)}.action-list.action-list .action-list__shape{height:48px;border-radius:24px}.action-list.action-list--md.action-list--segmented{border-radius:calc(20px * 2)}.action-list.action-list--md .action-list__shape{height:40px;border-radius:20px}.action-list.action-list--sm.action-list--segmented{border-radius:calc(12px * 2)}.action-list.action-list--sm .action-list__shape{height:24px;border-radius:12px}.action-list.action-list--segmented{border:1px solid #5A8D00}";

const ENOVOSActionList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickActionItem = createEvent(this, "clickActionItem", 7);
    this.fitted = false;
    this.segmented = false;
    this.actions = [];
    this.actionItems = [];
    this.classNames = {
      EL: 'action-list',
      CONTAINER: '__container',
      BADGE: '__badge',
      ITEM: '__item',
      SHAPE: '__shape',
      FITTED: '--fitted',
      SEGMENTED: '--segmented',
    };
    this.initEvents = false; // Event name
    this._clickItemHandler = [];
    this._observable = undefined; // observer;
  }
  /**
   * @description Init the dataitem
   */
  async setActionListItems(items) {
    this.actions = items;
  }
  async setActiveAction(id) {
    this.activeAction = id;
  }
  watchActionsHandler(newData, oldData) {
    if (newData !== oldData && newData.length > 0) {
      this.initActions();
    }
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        this.setShape();
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  componentWillLoad() {
    this.initActions();
    if (this.segmented) {
      this.attachObservable();
    }
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
    if (this.segmented) {
      this.attachObservable();
    }
    this.setEvents();
  }
  /**
   * @description Update event on items once they have been set
   * initEvents avoid to attach multiple event to items
   */
  componentDidUpdate() {
    if (!this.initEvents) {
      this.setEvents();
    }
    if (this.segmented) {
      this.attachObservable();
    }
  }
  componentDidRender() {
    this.el.setAttribute('nb-items', this.actionItems.length.toString());
  }
  /**
   * @description Define the event on items
   */
  clickItemHandler(item) {
    this.clickActionItem.emit(item);
  }
  initActions() {
    const actionItems = [];
    this.actions.map(action => actionItems.push(new ActionListItem(action)));
    this.actionItems = actionItems;
    this.initEvents = false;
  }
  setEvents() {
    this.actionItems.forEach((item, index) => {
      const itemEl = this.el.querySelector(`[data-id='${item.getProp('id')}']`);
      if (itemEl) {
        switch (item.getProp('type')) {
          case 'button':
            itemEl.removeEventListener('clickButton', this._clickItemHandler[index]);
            itemEl.addEventListener('clickButton', this._clickItemHandler[index] = () => {
              this.clickItemHandler(item);
            });
            break;
        }
      }
    });
    this.initEvents = true;
  }
  /**
   * @description Set the active item class depending the activeAction property
   * @return {string}
   */
  getActionConfiguration(item, propKey) {
    return (this.activeAction === item.getProp('id'))
      ? item.getProp(`${propKey}.active`)
      : item.getProp(`${propKey}.default`);
  }
  setShape() {
    const itemActiveEl = this.el.querySelector(`[data-id='${this.activeAction}']`);
    const shapeEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.SHAPE}`);
    if (itemActiveEl && shapeEl) {
      const elBoundingClientRect = itemActiveEl.getBoundingClientRect();
      shapeEl.style.left = `${Math.round(itemActiveEl.offsetLeft)}px`;
      const indexItem = findIndex(this.actionItems, (item) => item.getProp('id') === this.activeAction);
      shapeEl.dataset.active = indexItem;
      // Avoid shape appears outside the container when the size is higher the current button
      if (indexItem !== this.actionItems.length - 1) {
        setTimeout(() => {
          shapeEl.style.width = `${Math.round(elBoundingClientRect.width)}px`;
        }, 100);
      }
      else {
        shapeEl.style.width = `${Math.round(elBoundingClientRect.width)}px`;
      }
    }
  }
  getCurrentActionConfiguration(propKey) {
    const activeItem = find(this.actionItems, (item) => item.getProp('id') === this.activeAction);
    return (activeItem)
      ? activeItem.getProp(`${propKey}.active`)
      : '';
  }
  // Get size
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        (this.fitted) ? `${this.classNames.EL}${this.classNames.FITTED}` : '',
        (this.segmented) ? `${this.classNames.EL}${this.classNames.SEGMENTED}` : '',
        this.getSize(),
      ].join(' '), "data-nb": this.actionItems.length }, this.actionItems.length > 0 && this.segmented
      ? h("div", { class: [
          `${this.classNames.EL}${this.classNames.SHAPE}`,
          `${this.classNames.EL}--bg--${this.getCurrentActionConfiguration('styles')}`,
        ].join(' ') })
      : '', this.actionItems.map(item => {
      switch (item.getProp('type')) {
        case 'button':
          return h("div", { "data-id": `${item.getProp('id')}`, "data-nb": this.actionItems.length, class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.CONTAINER}` }, h("eds-button", { class: `${this.classNames.EL}${this.classNames.ITEM}`, size: this.size, expand: this.fitted === false ? true : false, outlined: this.getActionConfiguration(item, 'outlined'), textOnly: this.getActionConfiguration(item, 'textOnly') || (this.segmented && this.activeAction !== item.getProp('id')), content: item.getProp('content'), styles: this.getActionConfiguration(item, 'styles'), disabled: item.getProp('disabled') === true ? true : false, "icon-position": item.hasProp('iconPosition') ? item.getProp('iconPosition') : false }, item.hasProp('icon')
            ? h("eds-icon", { slot: "icon", icon: item.getProp('icon') })
            : ''), item.hasProp('badge')
            ? h("eds-badge", { class: `${this.classNames.EL}${this.classNames.ITEM}${this.classNames.BADGE}`, text: item.getProp('badge.text'), size: item.hasProp('badge.size') ? item.getProp('badge.size') : 'md', styles: item.hasProp('badge.styles') ? item.getProp('badge.styles') : 'success' })
            : '');
      }
    })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "actions": ["watchActionsHandler"]
  }; }
};
ENOVOSActionList.style = actionListCss;

export { ENOVOSActionList as eds_action_list };
