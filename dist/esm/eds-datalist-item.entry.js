import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import './_baseGetTag-accbac5b.js';
import './isSymbol-94e88fb4.js';
import './toString-e72a88e9.js';
import './isObject-7039fcda.js';
import './_MapCache-a3ede28d.js';
import './_copyArray-b32fb6e9.js';
import './set-913bca4c.js';
import { g as get } from './_hasPath-4dd0f44a.js';
import './_arrayPush-7955b731.js';
import './_baseFlatten-59c8d422.js';
import { c as concat } from './concat-13088df4.js';
import { h as has } from './has-1e48d487.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { I as IsVisibleObservable } from './isVisibleObservable-5e7e7c3e.js';
import './v4-4d460ace.js';
import { D as DatalistItem, a as DatalistItemData, b as DatalistItemPropsHelper } from './DatalistItemPropsHelper-ea0a035b.js';
import { T as TapEvent } from './tapEvent-8abcbf66.js';

const datalistItemCss = "[name=datalist-item] .datalist-item__right,[name=datalist-item] .datalist-item__second,[name=datalist-item] .datalist-item__third,[name=datalist-item] .datalist-item__left,[name=datalist-item] .datalist-item__first{display:flex;align-items:center;-ms-grid-row-align:stretch;align-self:stretch}[name=datalist-item]{display:block;width:100%}[name=datalist-item] .datalist-item--bg--primary{background-color:#F76700 !important}[name=datalist-item] .datalist-item--bg--secondary{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--tertiary{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--quaternary{background-color:#96C11F !important}[name=datalist-item] .datalist-item--bg--quinary{background-color:#EF7B0B !important}[name=datalist-item] .datalist-item--bg--senary{background-color:#CAA08D !important}[name=datalist-item] .datalist-item--bg--septenary{background-color:#6C887A !important}[name=datalist-item] .datalist-item--bg--grey{background-color:#757575 !important}[name=datalist-item] .datalist-item--bg--primary-900{background-color:#F76700 !important}[name=datalist-item] .datalist-item--bg--primary-800{background-color:#F76700 !important}[name=datalist-item] .datalist-item--bg--primary-700{background-color:#D52B1E !important}[name=datalist-item] .datalist-item--bg--primary-600{background-color:#C75300 !important}[name=datalist-item] .datalist-item--bg--primary-500{background-color:#F76700 !important}[name=datalist-item] .datalist-item--bg--primary-400{background-color:#FFA14C !important}[name=datalist-item] .datalist-item--bg--primary-300{background-color:#FFB673 !important}[name=datalist-item] .datalist-item--bg--primary-200{background-color:#FFDDBF !important}[name=datalist-item] .datalist-item--bg--primary-100{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item--bg--primary-50{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item--bg--secondary-900{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--secondary-800{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--secondary-700{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--secondary-600{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--secondary-500{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item--bg--secondary-400{background-color:#8E8E8E !important}[name=datalist-item] .datalist-item--bg--secondary-300{background-color:#A7A7A7 !important}[name=datalist-item] .datalist-item--bg--secondary-200{background-color:#D7D7D7 !important}[name=datalist-item] .datalist-item--bg--secondary-100{background-color:#EEEEEE !important}[name=datalist-item] .datalist-item--bg--secondary-50{background-color:#EEEEEE !important}[name=datalist-item] .datalist-item--bg--tertiary-900{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--tertiary-800{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--tertiary-700{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--tertiary-600{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--tertiary-500{background-color:#004885 !important}[name=datalist-item] .datalist-item--bg--tertiary-400{background-color:#5C8AB1 !important}[name=datalist-item] .datalist-item--bg--tertiary-300{background-color:#85A8C5 !important}[name=datalist-item] .datalist-item--bg--tertiary-200{background-color:#C2D3E2 !important}[name=datalist-item] .datalist-item--bg--tertiary-100{background-color:#EBF1F6 !important}[name=datalist-item] .datalist-item--bg--tertiary-50{background-color:#EBF1F6 !important}[name=datalist-item] .datalist-item--bg--quaternary-900{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item--bg--quaternary-800{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item--bg--quaternary-700{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item--bg--quaternary-600{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item--bg--quaternary-500{background-color:#96C11F !important}[name=datalist-item] .datalist-item--bg--quaternary-400{background-color:#BCD870 !important}[name=datalist-item] .datalist-item--bg--quaternary-300{background-color:#CDE294 !important}[name=datalist-item] .datalist-item--bg--quaternary-200{background-color:#E6F0C9 !important}[name=datalist-item] .datalist-item--bg--quaternary-100{background-color:#F7FAED !important}[name=datalist-item] .datalist-item--bg--quaternary-50{background-color:#F7FAED !important}[name=datalist-item] .datalist-item--bg--quinary-900{background-color:#C75300 !important}[name=datalist-item] .datalist-item--bg--quinary-800{background-color:#C75300 !important}[name=datalist-item] .datalist-item--bg--quinary-700{background-color:#C75300 !important}[name=datalist-item] .datalist-item--bg--quinary-600{background-color:#C75300 !important}[name=datalist-item] .datalist-item--bg--quinary-500{background-color:#EF7B0B !important}[name=datalist-item] .datalist-item--bg--quinary-400{background-color:#FFA14C !important}[name=datalist-item] .datalist-item--bg--quinary-300{background-color:#FFB673 !important}[name=datalist-item] .datalist-item--bg--quinary-200{background-color:#FFDDBF !important}[name=datalist-item] .datalist-item--bg--quinary-100{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item--bg--quinary-50{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item--bg--senary-900{background-color:#602A10 !important}[name=datalist-item] .datalist-item--bg--senary-800{background-color:#95431D !important}[name=datalist-item] .datalist-item--bg--senary-700{background-color:#B66E4D !important}[name=datalist-item] .datalist-item--bg--senary-600{background-color:#B78670 !important}[name=datalist-item] .datalist-item--bg--senary-500{background-color:#CAA08D !important}[name=datalist-item] .datalist-item--bg--senary-400{background-color:#DEAE98 !important}[name=datalist-item] .datalist-item--bg--senary-300{background-color:#EEC3AF !important}[name=datalist-item] .datalist-item--bg--senary-200{background-color:#FAD5C5 !important}[name=datalist-item] .datalist-item--bg--senary-100{background-color:#FFE9DF !important}[name=datalist-item] .datalist-item--bg--senary-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-900{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-800{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-700{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-600{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-500{background-color:#6C887A !important}[name=datalist-item] .datalist-item--bg--septenary-400{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-300{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-200{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-100{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--septenary-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--grey-900{background-color:#1D1D1D !important}[name=datalist-item] .datalist-item--bg--grey-800{background-color:#333333 !important}[name=datalist-item] .datalist-item--bg--grey-700{background-color:#4D4D4D !important}[name=datalist-item] .datalist-item--bg--grey-600{background-color:#666666 !important}[name=datalist-item] .datalist-item--bg--grey-500{background-color:#757575 !important}[name=datalist-item] .datalist-item--bg--grey-400{background-color:#999999 !important}[name=datalist-item] .datalist-item--bg--grey-300{background-color:#B3B3B3 !important}[name=datalist-item] .datalist-item--bg--grey-200{background-color:#CCCCCC !important}[name=datalist-item] .datalist-item--bg--grey-100{background-color:#E6E6E6 !important}[name=datalist-item] .datalist-item--bg--grey-50{background-color:#F8F8F8 !important}[name=datalist-item] .datalist-item--bg--contextual-success{background-color:#00856A !important}[name=datalist-item] .datalist-item--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=datalist-item] .datalist-item--bg--contextual-info{background-color:#2899A8 !important}[name=datalist-item] .datalist-item--bg--contextual-info-light{background-color:#DBF6FF !important}[name=datalist-item] .datalist-item--bg--contextual-warning{background-color:#F76700 !important}[name=datalist-item] .datalist-item--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item--bg--contextual-error{background-color:#EB0000 !important}[name=datalist-item] .datalist-item--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=datalist-item] .datalist-item--bg--pfm-blue{background-color:#55A1D3 !important}[name=datalist-item] .datalist-item--bg--pfm-green{background-color:#8DDE54 !important}[name=datalist-item] .datalist-item--bg--pfm-yellow{background-color:#FFC600 !important}[name=datalist-item] .datalist-item--bg--pfm-orange{background-color:#FC912E !important}[name=datalist-item] .datalist-item--bg--pfm-red{background-color:#DF5036 !important}[name=datalist-item] .datalist-item--bg--external-bank-ing{background-color:#F58220 !important}[name=datalist-item] .datalist-item--bg--external-bank-bil{background-color:#71308B !important}[name=datalist-item] .datalist-item--bg--external-bank-bcee{background-color:#144093 !important}[name=datalist-item] .datalist-item--bg--external-bank-post{background-color:#FABC0B !important}[name=datalist-item] .datalist-item--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=datalist-item] .datalist-item--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=datalist-item] .datalist-item--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=datalist-item] .datalist-item--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=datalist-item] .datalist-item--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=datalist-item] .datalist-item--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=datalist-item] .datalist-item--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=datalist-item] .datalist-item--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=datalist-item] .datalist-item--bg--brand-pfm-orange{background-color:#FC912E !important}[name=datalist-item] .datalist-item--bg--brand-pfm-red{background-color:#DF5036 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=datalist-item] .datalist-item--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=datalist-item] .datalist-item--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=datalist-item] .datalist-item--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=datalist-item] .datalist-item--bg--white{background-color:#FFFFFF !important}[name=datalist-item] .datalist-item--bg--black{background-color:#000000 !important}[name=datalist-item] .datalist-item--bg--transparent{background-color:transparent !important}[name=datalist-item].datalist-item--heading{z-index:1}[name=datalist-item] .datalist-item{position:relative;transition:opacity 0.2s ease-in-out;cursor:default}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary::after{background-color:#F76700 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary::after{background-color:#96C11F !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary::after{background-color:#EF7B0B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary::after{background-color:#CAA08D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary::after{background-color:#6C887A !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey::after{background-color:#757575 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-900::after{background-color:#F76700 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-800::after{background-color:#F76700 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-700::after{background-color:#D52B1E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-600::after{background-color:#C75300 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-500::after{background-color:#F76700 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-400::after{background-color:#FFA14C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-300::after{background-color:#FFB673 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-200::after{background-color:#FFDDBF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-100::after{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--primary-50::after{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-900::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-800::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-700::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-600::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-500::after{background-color:#5E5E5E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-400::after{background-color:#8E8E8E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-300::after{background-color:#A7A7A7 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-200::after{background-color:#D7D7D7 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-100::after{background-color:#EEEEEE !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--secondary-50::after{background-color:#EEEEEE !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-900::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-800::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-700::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-600::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-500::after{background-color:#004885 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-400::after{background-color:#5C8AB1 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-300::after{background-color:#85A8C5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-200::after{background-color:#C2D3E2 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-100::after{background-color:#EBF1F6 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--tertiary-50::after{background-color:#EBF1F6 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-900::after{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-800::after{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-700::after{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-600::after{background-color:#5A8D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-500::after{background-color:#96C11F !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-400::after{background-color:#BCD870 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-300::after{background-color:#CDE294 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-200::after{background-color:#E6F0C9 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-100::after{background-color:#F7FAED !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quaternary-50::after{background-color:#F7FAED !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-900::after{background-color:#C75300 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-800::after{background-color:#C75300 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-700::after{background-color:#C75300 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-600::after{background-color:#C75300 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-500::after{background-color:#EF7B0B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-400::after{background-color:#FFA14C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-300::after{background-color:#FFB673 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-200::after{background-color:#FFDDBF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-100::after{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--quinary-50::after{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-900::after{background-color:#602A10 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-800::after{background-color:#95431D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-700::after{background-color:#B66E4D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-600::after{background-color:#B78670 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-500::after{background-color:#CAA08D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-400::after{background-color:#DEAE98 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-300::after{background-color:#EEC3AF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-200::after{background-color:#FAD5C5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-100::after{background-color:#FFE9DF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--senary-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-900::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-800::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-700::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-600::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-500::after{background-color:#6C887A !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-400::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-300::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-200::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-100::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--septenary-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-900::after{background-color:#1D1D1D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-800::after{background-color:#333333 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-700::after{background-color:#4D4D4D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-600::after{background-color:#666666 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-500::after{background-color:#757575 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-400::after{background-color:#999999 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-300::after{background-color:#B3B3B3 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-200::after{background-color:#CCCCCC !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-100::after{background-color:#E6E6E6 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--grey-50::after{background-color:#F8F8F8 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-success::after{background-color:#00856A !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-success-light::after{background-color:#E5F2F0 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-info::after{background-color:#2899A8 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-info-light::after{background-color:#DBF6FF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-warning::after{background-color:#F76700 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-warning-light::after{background-color:#FFF1E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-error::after{background-color:#EB0000 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--contextual-error-light::after{background-color:#FDE5E5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--pfm-blue::after{background-color:#55A1D3 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--pfm-green::after{background-color:#8DDE54 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--pfm-yellow::after{background-color:#FFC600 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--pfm-orange::after{background-color:#FC912E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--pfm-red::after{background-color:#DF5036 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-ing::after{background-color:#F58220 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-bil::after{background-color:#71308B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-bcee::after{background-color:#144093 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-post::after{background-color:#FABC0B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-raiffeisen::after{background-color:#112242 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--external-bank-bnp-paribas::after{background-color:#00915A !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--white-15::after{background-color:rgba(255, 255, 255, 0.15) !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--white-25::after{background-color:rgba(255, 255, 255, 0.25) !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--white-50::after{background-color:rgba(255, 255, 255, 0.5) !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-pfm-blue::after{background-color:#55A1D3 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-pfm-green::after{background-color:#8DDE54 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-pfm-yellow::after{background-color:#FFC600 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-pfm-orange::after{background-color:#FC912E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-pfm-red::after{background-color:#DF5036 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light::after{background-color:#4FB482 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-dark::after{background-color:#133B2C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light::after{background-color:#1B8DC0 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-dark::after{background-color:#0A324B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light::after{background-color:#F0BE21 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark::after{background-color:#B77918 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-light::after{background-color:#F3B969 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark::after{background-color:#EF7D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-pink-light::after{background-color:#C03152 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-pink-dark::after{background-color:#4F0F15 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-red-light::after{background-color:#F7B7AF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-red-dark::after{background-color:#E62D32 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-900::after{background-color:#4D2800 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-800::after{background-color:#804200 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-700::after{background-color:#B35C00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-600::after{background-color:#CC6A00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-500::after{background-color:#EF7D00 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-400::after{background-color:#FC8823 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-300::after{background-color:#FC9E4C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-200::after{background-color:#FFB675 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-100::after{background-color:#FFD1A8 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-orange-dark-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-900::after{background-color:#0C4159 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-800::after{background-color:#105373 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-700::after{background-color:#14668C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-600::after{background-color:#1779A6 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-500::after{background-color:#1B8DC0 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-400::after{background-color:#1D9AD1 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-300::after{background-color:#2AAEEB !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-200::after{background-color:#56BFF0 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-100::after{background-color:#7FCFF5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-blue-light-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-900::after{background-color:#224D37 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-800::after{background-color:#2D6649 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-700::after{background-color:#39805C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-600::after{background-color:#43996E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-500::after{background-color:#4FB482 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-400::after{background-color:#55C28C !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-300::after{background-color:#60D199 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-200::after{background-color:#69DBA2 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-100::after{background-color:#85E6B5 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-green-light-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-900::after{background-color:#6B550F !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-800::after{background-color:#8F7214 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-700::after{background-color:#AD8B19 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-600::after{background-color:#D1A71D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-500::after{background-color:#F0BE21 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-400::after{background-color:#FCCA23 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-300::after{background-color:#FCD742 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-200::after{background-color:#FCDD60 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-100::after{background-color:#FCE483 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-light-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-900::after{background-color:#52360B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-800::after{background-color:#6B470E !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-700::after{background-color:#855811 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-600::after{background-color:#9E6915 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-500::after{background-color:#B77918 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-400::after{background-color:#D18A1B !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-300::after{background-color:#EB9B1F !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-200::after{background-color:#FAAA2D !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-100::after{background-color:#FABA55 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--brand-expressive-yellow-dark-50::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--white-opacity-50::after{background-color:rgba(255, 255, 255, 0.5) !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--white::after{background-color:#FFFFFF !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--black::after{background-color:#000000 !important}[name=datalist-item] .datalist-item.datalist-item--highlight.datalist-item--highlight--bg--transparent::after{background-color:transparent !important}[name=datalist-item] .datalist-item.datalist-item--highlight::after{position:absolute;left:0;top:0;z-index:3;width:4px;height:100%;content:\"\"}[name=datalist-item] .datalist-item:before{position:absolute;z-index:2;display:none;width:0;height:0;border-right-color:transparent;border-right-style:solid;border-left-color:transparent;border-left-style:solid;border-top-style:solid;content:\"\";opacity:0;transition:opacity 0.6s ease-in-out 0.1s}[name=datalist-item] .datalist-item__wrapper{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px}[name=datalist-item] .datalist-item__left,[name=datalist-item] .datalist-item__first{flex:1 1 auto;margin-right:8px}[name=datalist-item] .datalist-item__left .datalist-item__body,[name=datalist-item] .datalist-item__first .datalist-item__body{display:flex;align-items:flex-start;flex-direction:column;width:100%;text-align:left}[name=datalist-item] .datalist-item__main{width:100%}[name=datalist-item] .datalist-item__right,[name=datalist-item] .datalist-item__second,[name=datalist-item] .datalist-item__third{flex:0 0 auto;margin-left:8px}[name=datalist-item] .datalist-item__right .datalist-item__body,[name=datalist-item] .datalist-item__second .datalist-item__body,[name=datalist-item] .datalist-item__third .datalist-item__body{display:flex;align-items:flex-end;align-self:baseline;flex-direction:column;width:100%;text-align:right}[name=datalist-item] .datalist-item__second,[name=datalist-item] .datalist-item__third{flex:0 0 20%}[name=datalist-item] .datalist-item__second__header,[name=datalist-item] .datalist-item__second__body,[name=datalist-item] .datalist-item__third__header,[name=datalist-item] .datalist-item__third__body{display:flex;align-items:baseline;justify-content:flex-end}[name=datalist-item] .datalist-item__second__header:not(:last-child),[name=datalist-item] .datalist-item__second__body:not(:last-child),[name=datalist-item] .datalist-item__third__header:not(:last-child),[name=datalist-item] .datalist-item__third__body:not(:last-child){margin-bottom:8px}[name=datalist-item] .datalist-item__second__header>*:not(:first-child),[name=datalist-item] .datalist-item__second__body>*:not(:first-child),[name=datalist-item] .datalist-item__third__header>*:not(:first-child),[name=datalist-item] .datalist-item__third__body>*:not(:first-child){margin-left:8px}[name=datalist-item] .datalist-item__header-left{width:100%}[name=datalist-item] .datalist-item__body-left{width:100%}[name=datalist-item] .datalist-item__footer-left{width:100%}[name=datalist-item] .datalist-item__message{display:block;margin-top:16px}[name=datalist-item] .datalist-item__progress-bar{display:block;margin-top:16px}[name=datalist-item] .datalist-item__leadingRadio-button{margin-right:16px}[name=datalist-item] .datalist-item__trailingRadio-button{margin-left:16px}[name=datalist-item] .datalist-item__icon--collapse,[name=datalist-item] .datalist-item__dropdown__icon{transition:color 0.2s ease-in-out}[name=datalist-item] .datalist-item__tags{display:flex;align-items:center;margin-right:40px}[name=datalist-item] .datalist-item__tags__tag{display:flex;align-items:center}[name=datalist-item] .datalist-item__tags__tag:not(:last-child){margin-right:32px}[name=datalist-item] .datalist-item__tags__tag__icon{height:16px;margin-right:8px;font-size:16px}[name=datalist-item] .datalist-item--collapse{-webkit-tap-highlight-color:transparent}[name=datalist-item] .datalist-item--clickable{cursor:pointer}[name=datalist-item] .datalist-item--has-children{cursor:pointer}[name=datalist-item] .datalist-item--has-children:before{display:block;opacity:1}[name=datalist-item] .datalist-item--has-children.datalist-item--collapsed:before{opacity:0;transition:opacity 0.4s ease-in-out 0s}[name=datalist-item] .datalist-item--account .datalist-item__left .datalist-item__body>*:not(:last-child){margin-bottom:8px}[name=datalist-item] .datalist-item--account .datalist-item__right .datalist-item__body>*:not(:last-child){margin-bottom:6px}[name=datalist-item] .datalist-item--fund .datalist-item__left .datalist-item__body{width:auto}[name=datalist-item] .datalist-item--fund .datalist-item__left .datalist-item__body .datalist-item__header-left:not(:last-child){margin-bottom:8px}[name=datalist-item] .datalist-item--fund .datalist-item__left .datalist-item__button{margin-left:64px}[name=datalist-item] .datalist-item--document,[name=datalist-item] .datalist-item--selection-list{display:flex}[name=datalist-item] .datalist-item--document .datalist-item__right .datalist-item__body,[name=datalist-item] .datalist-item--selection-list .datalist-item__right .datalist-item__body{align-items:center;-ms-grid-row-align:center;align-self:center}[name=datalist-item] .datalist-item--default .datalist-item__wrapper{min-height:inherit}[name=datalist-item] .datalist-item--security-position .datalist-item__first__body__text{font-weight:600}[name=datalist-item] .datalist-item--notification,[name=datalist-item] .datalist-item--mail{padding-right:16px !important;padding-left:24px !important}[name=datalist-item] .datalist-item--notification .datalist-item,[name=datalist-item] .datalist-item--mail .datalist-item{position:relative}[name=datalist-item] .datalist-item--notification .datalist-item__main__header,[name=datalist-item] .datalist-item--mail .datalist-item__main__header{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%}[name=datalist-item] .datalist-item--notification .datalist-item__main__header__badge,[name=datalist-item] .datalist-item--mail .datalist-item__main__header__badge{position:absolute;left:-16px}[name=datalist-item] .datalist-item--notification .datalist-item__main__body,[name=datalist-item] .datalist-item--mail .datalist-item__main__body{position:relative;display:flex;align-items:baseline;justify-content:space-between;width:100%;margin-top:8px}[name=datalist-item] .datalist-item--notification .datalist-item__main__body__icon,[name=datalist-item] .datalist-item--mail .datalist-item__main__body__icon{position:absolute;left:-20px}[name=datalist-item] .datalist-item--notification .datalist-item__main__header__date{font-weight:600}[name=datalist-item] .datalist-item--notification .datalist-item__main__body__text{font-weight:400}[name=datalist-item] .datalist-item--mail .datalist-item__main__header__text{flex:0 0 80%;color:#5E5E5E;font-weight:600}[name=datalist-item] .datalist-item--mail .datalist-item__main__header__date{color:#004885;font-weight:400}[name=datalist-item] .datalist-item--mail .datalist-item__main__body__text{flex:0 0 80%;color:#004885;font-weight:400}[name=datalist-item] .datalist-item--table .datalist-item__wrapper{padding-left:0 !important}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div{flex-grow:1}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"0\"]{flex-basis:calc(100% / 0)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"1\"]{flex-basis:calc(100% / 1)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"2\"]{flex-basis:calc(100% / 2)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"3\"]{flex-basis:calc(100% / 3)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"4\"]{flex-basis:calc(100% / 4)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"5\"]{flex-basis:calc(100% / 5)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"6\"]{flex-basis:calc(100% / 6)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"7\"]{flex-basis:calc(100% / 7)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"8\"]{flex-basis:calc(100% / 8)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"9\"]{flex-basis:calc(100% / 9)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"10\"]{flex-basis:calc(100% / 10)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"11\"]{flex-basis:calc(100% / 11)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"12\"]{flex-basis:calc(100% / 12)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"13\"]{flex-basis:calc(100% / 13)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"14\"]{flex-basis:calc(100% / 14)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"15\"]{flex-basis:calc(100% / 15)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"16\"]{flex-basis:calc(100% / 16)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"17\"]{flex-basis:calc(100% / 17)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"18\"]{flex-basis:calc(100% / 18)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"19\"]{flex-basis:calc(100% / 19)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"20\"]{flex-basis:calc(100% / 20)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"21\"]{flex-basis:calc(100% / 21)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"22\"]{flex-basis:calc(100% / 22)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"23\"]{flex-basis:calc(100% / 23)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"24\"]{flex-basis:calc(100% / 24)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div[data-columns=\"25\"]{flex-basis:calc(100% / 25)}[name=datalist-item] .datalist-item--table .datalist-item__wrapper>div:not(:first-child){text-align:center}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--with-tags{display:flex;align-items:center;justify-content:center}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--with-tags .datalist-item__column__body__text{flex-basis:50%;flex-grow:0;text-align:right}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--with-tags .datalist-item__tags{flex-basis:50%;flex-grow:0;margin-right:0;margin-left:8px}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--has-collapse-icon{display:flex;align-items:center;justify-content:flex-start}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--has-collapse-icon .datalist-item__column__body__text{flex-basis:50%;flex-grow:0;text-align:left}[name=datalist-item] .datalist-item--table .datalist-item__column__body .datalist-item__column__body--has-collapse-icon .datalist-item__icon--collapse{flex-shrink:1;margin-right:0;margin-left:8px}[name=datalist-item] .slot-content-container{position:relative;opacity:1;transition:height 0.6s ease-in-out 0.1s, opacity 0.6s ease-in-out 0.1s}[name=datalist-item] .slot-content-container--collapsed{display:block;overflow:hidden;opacity:0;transition:height 0.6s ease-in-out 0s, opacity 1.2s ease-in-out 0s}[name=datalist-item] .slot-content-container---hidden{display:none}[name=datalist-item].datalist-item--heading{box-shadow:false}[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__dropdown__icon{color:#5E5E5E;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__dropdown__icon:hover{color:#5E5E5E}[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__dropdown__icon:focus{color:#5E5E5E}[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__dropdown__icon--active{color:#5E5E5E}[name=datalist-item].datalist-item--heading .datalist-item .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#5E5E5E;cursor:pointer}[name=datalist-item] .datalist-item{background-color:#FFFFFF}[name=datalist-item] .datalist-item:before{border-top-color:#FFFFFF}[name=datalist-item] .datalist-item .datalist-item__header-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__body-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__body-left-additional{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__footer-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__header-right{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__body-right{color:#5E5E5E !important}[name=datalist-item] .datalist-item .datalist-item__icon--collapse{color:false !important}[name=datalist-item] .datalist-item .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:false !important;cursor:pointer}[name=datalist-item].datalist-item--heading{box-shadow:0 0 8px 16px rgba(0, 0, 0, 0.05)}[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__dropdown__icon{color:#F76700;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__dropdown__icon:hover{color:#F76700}[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__dropdown__icon:focus{color:#F76700}[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__dropdown__icon--active{color:#F76700}[name=datalist-item].datalist-item--heading .datalist-item--secondary .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#F76700;cursor:pointer}[name=datalist-item] .datalist-item--secondary{background-color:#FFFFFF}[name=datalist-item] .datalist-item--secondary:before{border-top-color:transparent}[name=datalist-item] .datalist-item--secondary .datalist-item__header-left{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__body-left{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__body-left-additional{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__footer-left{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__header-right{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__body-right{color:#F76700 !important}[name=datalist-item] .datalist-item--secondary .datalist-item__icon--collapse{color:#5E5E5E !important}[name=datalist-item] .datalist-item--secondary .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#5E5E5E !important;cursor:pointer}[name=datalist-item].datalist-item--heading{box-shadow:false}[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__dropdown__icon{color:#004885;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__dropdown__icon:hover{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__dropdown__icon:focus{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__dropdown__icon--active{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#004885;cursor:pointer}[name=datalist-item] .datalist-item--quaternary{background-color:#EEEEEE}[name=datalist-item] .datalist-item--quaternary:before{border-top-color:#CDE294}[name=datalist-item] .datalist-item--quaternary .datalist-item__header-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__body-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__body-left-additional{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__footer-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__header-right{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__body-right{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__icon--collapse{color:false !important}[name=datalist-item] .datalist-item--quaternary .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:false !important;cursor:pointer}[name=datalist-item].datalist-item--heading{box-shadow:false}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__dropdown__icon{color:#004885;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__dropdown__icon:hover{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__dropdown__icon:focus{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__dropdown__icon--active{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-400 .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#004885;cursor:pointer}[name=datalist-item] .datalist-item--quaternary-400{background-color:#FFFFFF}[name=datalist-item] .datalist-item--quaternary-400:before{border-top-color:#BCD870}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__header-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__body-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__body-left-additional{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__footer-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__header-right{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__body-right{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__icon--collapse{color:false !important}[name=datalist-item] .datalist-item--quaternary-400 .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:false !important;cursor:pointer}[name=datalist-item].datalist-item--heading{box-shadow:false}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__dropdown__icon{color:#004885;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__dropdown__icon:hover{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__dropdown__icon:focus{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__dropdown__icon--active{color:#004885}[name=datalist-item].datalist-item--heading .datalist-item--quaternary-600 .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#004885;cursor:pointer}[name=datalist-item] .datalist-item--quaternary-600{background-color:#5A8D00}[name=datalist-item] .datalist-item--quaternary-600:before{border-top-color:#5A8D00}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__header-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__body-left{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__body-left-additional{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__footer-left{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__header-right{color:#004885 !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__body-right{color:#5E5E5E !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__icon--collapse{color:false !important}[name=datalist-item] .datalist-item--quaternary-600 .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:false !important;cursor:pointer}[name=datalist-item].datalist-item--heading{box-shadow:false}[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapsed,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__dropdown__icon{color:#FFFFFF;cursor:pointer}[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapsed:hover,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__dropdown__icon:hover{color:#EF7D00}[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapsed:focus,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__dropdown__icon:focus{color:#EF7D00}[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapsed:active,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapsed--active,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__dropdown__icon:active,[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__dropdown__icon--active{color:#EF7D00}[name=datalist-item].datalist-item--heading .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:#EF7D00;cursor:pointer}[name=datalist-item] .datalist-item--brand-expressive-orange-dark{background-color:#5E5E5E}[name=datalist-item] .datalist-item--brand-expressive-orange-dark:before{border-top-color:#5E5E5E}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__header-left{color:#FFFFFF !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__body-left{color:#F76700 !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__body-left-additional{color:#FFFFFF !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__footer-left{color:#FFFFFF !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__header-right{color:#004885 !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__body-right{color:#FFFFFF !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapse{color:false !important}[name=datalist-item] .datalist-item--brand-expressive-orange-dark .datalist-item__icon--collapse:not(.datalist-item__icon--collapsed){color:false !important;cursor:pointer}[name=datalist-item] .datalist-item{padding-top:0;padding-bottom:0}[name=datalist-item] .datalist-item:before{bottom:-8px;border-top-width:8px;border-right-width:8px;border-left-width:8px}[name=datalist-item] .datalist-item .datalist-item__badge{margin-right:8px}[name=datalist-item] .datalist-item .datalist-item__image{width:32px;height:32px;margin-right:8px}[name=datalist-item] .datalist-item .datalist-item__icon{height:false;margin-right:8px;font-size:24px}[name=datalist-item] .datalist-item.datalist-item--heading{padding-top:12px;padding-bottom:12px}@media (min-width : 1440px){[name=datalist-item] .datalist-item{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-16px + 8px)}[name=datalist-item] .datalist-item:before{left:16px}}@media (max-width : 1439px){[name=datalist-item] .datalist-item{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-16px + 8px)}[name=datalist-item] .datalist-item:before{left:16px}}@media (max-width : 1151px){[name=datalist-item] .datalist-item{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-16px + 8px)}[name=datalist-item] .datalist-item:before{left:16px}}@media (max-width : 863px){[name=datalist-item] .datalist-item{padding-left:12px;padding-right:12px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-12px + 8px)}[name=datalist-item] .datalist-item:before{left:12px}}@media (max-width : 639px){[name=datalist-item] .datalist-item{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-24px + 8px)}[name=datalist-item] .datalist-item:before{left:24px}}@media (max-width : 320px){[name=datalist-item] .datalist-item{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-0{padding-left:0px;padding-right:0px}[name=datalist-item] .datalist-item.datalist-item--padding-1{padding-left:8px;padding-right:8px}[name=datalist-item] .datalist-item.datalist-item--padding-2{padding-left:16px;padding-right:16px}[name=datalist-item] .datalist-item.datalist-item--padding-3{padding-left:24px;padding-right:24px}[name=datalist-item] .datalist-item.datalist-item--padding-4{padding-left:32px;padding-right:32px}[name=datalist-item] .datalist-item.datalist-item--padding-5{padding-left:40px;padding-right:40px}[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-0 .datalist-item__progress-bar{padding-left:0px}[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-1 .datalist-item__progress-bar{padding-left:8px}[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-2 .datalist-item__progress-bar{padding-left:16px}[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-3 .datalist-item__progress-bar{padding-left:24px}[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-4 .datalist-item__progress-bar{padding-left:32px}[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__wrapper,[name=datalist-item] .datalist-item.datalist-item--indent-5 .datalist-item__progress-bar{padding-left:40px}[name=datalist-item] .datalist-item .datalist-item__button--collapsed{margin-right:calc(-24px + 8px)}[name=datalist-item] .datalist-item:before{left:24px}}";

const ENOVOSDatalistItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickDatalistItem = createEvent(this, "clickDatalistItem", 7);
    this.clickable = false;
    this.collapsed = true;
    this.expandable = false;
    this.indent = 0;
    this.collapseContainerHeight = undefined;
    this.eventInit = false; // Event name
    this._clickItemHandler = undefined;
    this._observable = undefined; // observer;
    this.classNames = {
      EL: 'datalist-item',
      LEFT: '__left',
      RIGHT: '__right',
      FIRST: '__first',
      SECOND: '__second',
      THIRD: '__third',
      MAIN: '__main',
      WRAPPER: '__wrapper',
      HEADER: '__header',
      BODY: '__body',
      HEADER_LEFT: '__header-left',
      BODY_LEFT: '__body-left',
      BODY_LEFT_ADDITIONAL: '__body-left-additional',
      FOOTER_LEFT: '__footer-left',
      HEADER_RIGHT: '__header-right',
      BODY_RIGHT: '__body-right',
      FOOTER_RIGHT: '__footer-right',
      BUTTON: '__button',
      BADGE: '__badge',
      ICON: '__icon',
      TEXT: '__text',
      TAGS: '__tags',
      TAG: '__tag',
      DATE: '__date',
      IMAGE: '__image',
      MESSAGE: '__message',
      DROPDOWN: '__dropdown',
      PROGRESS_BAR: '__progress-bar',
      RADIO_BUTTON: '__radio-button',
      LEADING_RADIO_BUTTON: '__leadingRadio-button',
      TRAILING_RADIO_BUTTON: '__trailingRadio-button',
      COLUMN: '__column',
      WITH_TAGS: '--with-tags',
      COLLAPSED: '--collapsed',
      COLLAPSE: '--collapse',
      ACTIVE: '--active',
      HAS_COLLAPSE_ICON: '--has-collapse-icon',
    };
    this.mapping = {
      '1-column': {
        'notification': {
          'header': 'title',
          'body': 'text',
          'date': 'date',
          'badge': 'badge',
          'icon': 'icon',
        },
        'mail': {
          'header': 'title',
          'body': 'text',
          'date': 'date',
          'badge': 'badge',
          'icon': 'icon',
        },
      },
      '2-columns': {
        'left': {
          'default': {
            'text': 'text',
            'footer': 'caption',
            'badge': 'badge',
            'icon': 'icon',
          },
          'news': {
            'header': 'date',
            'text': 'text',
          },
          'account': {
            'badge': 'badge',
            'image': 'image',
            'header': 'date',
            'body': 'text',
            'body-additional': 'textAdditional',
            'footer': 'caption',
            'radio': 'leadingRadio',
          },
          'document': {
            'badge': 'badge',
            'header': 'date',
            'body': 'text',
            'footer': 'caption',
          },
          'selection-list': {
            'body': 'text',
          },
        },
        'right': {
          'default': {
            'text': 'value',
            'footer': 'captionValue',
            'link': 'link',
          },
          'account': {
            'header': 'currency',
            'body': 'amount',
            'radio': 'trailingRadio',
          },
          'document': {
            'button': 'button',
            'icon': 'icon',
          },
          'selection-list': {
            'icon': 'icon',
          },
          'fund': {
            'menu-dropdown': 'actions',
            'tags': 'states',
          },
        },
      },
      '3-columns': {
        'first': {
          'security-position': {
            'body': 'label',
            'image': 'image',
            'footer': 'caption',
          },
        },
        'second': {
          'security-position': {
            'header': 'currency',
            'body': 'currencyValue',
          },
        },
        'third': {
          'security-position': {
            'header': 'evaluation',
            'header-additional': 'evaluationAdditional',
            'body': 'evaluationValue',
            'body-additional': 'evaluationValueAdditional',
          },
        },
      },
      'table': {
        'badge': 'badge',
        'image': 'image',
        'header': 'date',
        'body': 'text',
        'body-additional': 'textAdditional',
        'footer': 'caption',
        'radio': 'leadingRadio',
        'tags': 'states',
      },
    };
  }
  /**
   * @description Init the dataitem
   */
  async setDatalistItem(item) {
    const dataItem = new DatalistItem(item);
    this.item = dataItem;
    this.templateName = this.item.getProp('template');
    this.type = this.item.getProp('type');
    this.alias = this.item.getProp('alias');
    this.highlight = this.item.hasProp('highlight') ? this.item.getProp('highlight') : false;
    this.collapsedConfig = this.item.getProp('collapsed');
    this.collapsed = this.item.getProp('collapsed.open');
    this.styles = this.item.getProp('styles');
    this.parameters = new DatalistItemData(this.item.getProp('data'));
    this.eventInit = false;
  }
  /**
   * @description Collapse item
   */
  async collapse(value) {
    this.collapsed = value;
  }
  /**
   * @description Init component
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
    this.attachObservable();
  }
  /**
   * @description Init component
   */
  componentDidRender() {
    if (this.type) {
      this.el.classList.add(`${this.classNames.EL}--${this.type}`);
    }
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      slotContentContainer.classList.remove(`slot-content-container-hidden`);
      slotContent.classList.add(`slot-content`);
      if (this.collapsed === false) {
        slotContentContainer.classList.add(`slot-content-container${this.classNames.COLLAPSED}`);
      }
      else {
        slotContentContainer.classList.remove(`slot-content-container${this.classNames.COLLAPSED}`);
      }
    }
    else if (slotContentContainer) {
      slotContentContainer.classList.add(`slot-content-container--hidden`);
    }
    const actionDropdown = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);
    if (actionDropdown) {
      // Kill attached events
      actionDropdown.removeEventListener('clickDropdownItem', this._clickActionDropdown, false);
      // Attach new event
      actionDropdown.addEventListener('clickDropdownItem', this._clickActionDropdown = () => {
        const actionDropdownIcon = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        actionDropdownIcon.classList.remove(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
      }, false);
      // Kill attached events
      actionDropdown.removeEventListener('activeSelectorItem', this._activeSelectorActionDropdown, false);
      // Attach new event
      actionDropdown.addEventListener('activeSelectorItem', this._activeSelectorActionDropdown = e => {
        const actionDropdownIcon = this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`);
        if (e.detail === true) {
          actionDropdownIcon.classList.add(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
        }
        else {
          actionDropdownIcon.classList.remove(`${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}${this.classNames.ACTIVE}`);
        }
      }, false);
    }
  }
  /**
   * @description Update event on items once they have been set
   * eventInit avoid to attach multiple event to items
   */
  componentDidUpdate() {
    if (!this.eventInit) {
      let itemEl = this.el.querySelector(`.${this.classNames.EL}`);
      if (this.isCollapsedConfig(this.item) === true && this.isAccordionConfig(this.item) !== true) {
        itemEl = this.el.querySelector(`.${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSE}`);
      }
      if (itemEl) {
        if (this._clickItemHandler && typeof this._clickItemHandler === 'object') {
          this._clickItemHandler.removeEvent();
        }
        this._clickItemHandler = new TapEvent(itemEl, () => {
          this.clickNavItemHandler();
        });
      }
      this.eventInit = true;
    }
  }
  /**
   * @description Define the click event on datalist item
   */
  clickNavItemHandler() {
    if (((this.item.hasProp('children') && this.item.getProp('children').length > 0
      && this.isAccordionConfig(this.item) === true))
      ||
        this.isCollapsedConfig(this.item) === true) {
      this.collapsed = !this.collapsed;
    }
    // Check/Uncheck available radio buttons
    this.el.querySelectorAll(`.${this.classNames.EL}${this.classNames.RADIO_BUTTON}`)
      .forEach((el) => el.activeRadioButton());
    // Toggle collapse content
    this.collapseContent();
    this.clickDatalistItem.emit(this.item);
  }
  collapseContent() {
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = !!this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      if (this.collapsed) {
        slotContentContainer.style.height = `${this.collapseContainerHeight}px`;
        slotContentContainer.classList.remove(`slot-content${this.classNames.COLLAPSED}`);
      }
      else {
        slotContentContainer.style.height = 0;
        slotContentContainer.classList.add(`slot-content${this.classNames.COLLAPSED}`);
      }
    }
  }
  attachObservable() {
    this._observable = new IsVisibleObservable(this.el, value => {
      if (value === true) {
        setTimeout(() => this.initCollapseHeight(), 1);
        this._observable.disconnectObserver();
      }
    }, {
      threshold: 1,
    });
  }
  initCollapseHeight() {
    const slotContentContainer = this.el.querySelector(`.slot-content-container`);
    const slotContent = !!this.el.querySelector(`[slot="content"]`);
    if (slotContent && slotContentContainer) {
      this.collapseContainerHeight = slotContentContainer.getBoundingClientRect().height;
      slotContentContainer.style.height = `${this.collapseContainerHeight}px`;
    }
  }
  /**
   * @description Generate a 2 columns template
   */
  oneColumnTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.MAIN}` }, this.getAliasTemplate('main')),
    ];
  }
  /**
   * @description Generate a 2 columns template
   */
  twoColumnsTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.LEFT}` }, this.getAliasTemplate('left')),
      h("section", { class: `${this.classNames.EL}${this.classNames.RIGHT}` }, this.getAliasTemplate('right')),
    ];
  }
  /**
   * @description Generate a 3 columns template
   */
  threeColumnsTemplate() {
    return [
      h("section", { class: `${this.classNames.EL}${this.classNames.FIRST}` }, this.getAliasTemplate('first')),
      h("section", { class: `${this.classNames.EL}${this.classNames.SECOND}` }, this.getAliasTemplate('second')),
      h("section", { class: `${this.classNames.EL}${this.classNames.THIRD}` }, this.getAliasTemplate('third')),
    ];
  }
  tableTemplate() {
    if (Array.isArray(Object.values(this.parameters))) {
      return Object.values(this.parameters).map((parameter, index) => {
        const parameterObject = new DatalistItemData(parameter);
        return h("div", { "data-columns": Object.values(this.parameters).length }, this.renderColumn(parameterObject, 'table', `${this.classNames.EL}${this.classNames.COLUMN}`, index));
      });
    }
    return '';
  }
  getAliasTemplate(key = 'main') {
    const objectPropriety = (key === 'main') ? `${this.templateName}.${this.alias}` : `${this.templateName}.${key}.${this.alias}`;
    switch (key) {
      case 'main':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.MAIN}`);
      case 'left':
        return this.renderDefault2ColumnsLeft(objectPropriety);
      case 'right':
        return this.renderDefault2ColumnsRight(objectPropriety);
      case 'first':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.FIRST}`);
      case 'second':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.SECOND}`);
      case 'third':
        return this.renderColumn(this.parameters, objectPropriety, `${this.classNames.EL}${this.classNames.THIRD}`);
    }
  }
  renderDefault2ColumnsLeft(objectPropriety) {
    const badge = get(this.mapping, `${objectPropriety}.badge`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const image = get(this.mapping, `${objectPropriety}.image`);
    const button = get(this.mapping, `${objectPropriety}.button`);
    const header = get(this.mapping, `${objectPropriety}.header`);
    const text = get(this.mapping, `${objectPropriety}.text`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const bodyAdditional = get(this.mapping, `${objectPropriety}.body-additional`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const radio = get(this.mapping, `${objectPropriety}.radio`);
    if (this.parameters === undefined) {
      return;
    }
    return [
      this.setCollapseIcon(this.item, 'leading'),
      this.parameters.hasProp(radio)
        ? h("eds-radio-button", { inputName: this.parameters.getProp(`${radio}.name`), value: this.parameters.getProp(`${radio}.value`), icon: this.parameters.getProp(`${radio}.icon`), selected: this.parameters.getProp(`${radio}.selected`), class: [
            `${this.classNames.EL}${this.classNames.RADIO_BUTTON}`,
            `${this.classNames.EL}${this.classNames.LEADING_RADIO_BUTTON}`,
          ].join(' ') })
        : '',
      this.parameters.hasProp(badge)
        ? h("eds-badge", { size: this.getItemSize(this.parameters, badge), styles: this.parameters.getProp(`${badge}.styles`), text: this.parameters.getProp(`${badge}.text`), class: `${this.classNames.EL}${this.classNames.BADGE}` })
        : '',
      this.parameters.hasProp(icon)
        ? h("eds-icon", { size: this.getItemSize(this.parameters, icon), styles: this.parameters.getProp(`${icon}.styles`), icon: this.parameters.getProp(`${icon}.icon`), class: `${this.classNames.EL}${this.classNames.ICON}` })
        : '',
      this.parameters.hasProp(image)
        ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMAGE}`, src: this.parameters.getProp(image) })
        : '',
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` }, this.parameters.hasProp(header)
        ? h("eds-paragraph", { type: this.parameters.hasProp(`${header}.type`) ? this.parameters.getProp(`${header}.type`) : 'body-2', fontWeight: this.parameters.hasProp(`${header}.fontWeight`) ? this.parameters.getProp(`${header}.fontWeight`) : 'regular', styles: [
            'line-height-body-2',
            this.parameters.hasProp(`${header}.styles`) ? this.parameters.getProp(`${header}.styles`) : this.getAdditionalStyles(this.parameters, header),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.HEADER_LEFT}` }, this.parameters.hasProp(`${header}.content`) ? this.parameters.getProp(`${header}.content`) : this.parameters.getProp(header))
        : '', this.parameters.hasProp(body)
        ? h("eds-paragraph", { type: this.parameters.hasProp(`${body}.type`) ? this.parameters.getProp(`${body}.type`) : 'body-2', styles: [
            'line-height-body-2',
            this.parameters.hasProp(`${body}.styles`) ? this.parameters.getProp(`${body}.styles`) : this.getAdditionalStyles(this.parameters, body),
          ].join(' '), clampLines: this.parameters.hasProp(`${body}.clampLines`) ? this.parameters.getProp(`${body}.clampLines`) : 2, fontWeight: this.parameters.hasProp(`${body}.fontWeight`) ? this.parameters.getProp(`${body}.fontWeight`) : 'semi-bold', class: `${this.classNames.EL}${this.classNames.BODY_LEFT}` }, this.parameters.hasProp(`${body}.content`) ? this.parameters.getProp(`${body}.content`) : this.parameters.getProp(body), this.parameters.hasProp(bodyAdditional)
          ? [
            h("span", null, " - "),
            h("span", { class: `${this.classNames.EL}${this.classNames.BODY_LEFT_ADDITIONAL}` }, this.parameters.getProp(bodyAdditional)),
          ]
          : '')
        : '', this.parameters.hasProp(text)
        ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${text}.clampLines`) ? this.parameters.getProp(`${text}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${text}.fontWeight`) ? this.parameters.getProp(`${text}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${text}.type`) ? this.parameters.getProp(`${text}.type`) : 'body-1', styles: [
            this.parameters.hasProp(`${text}.styles`) ? this.parameters.getProp(`${text}.styles`) : this.getAdditionalStyles(this.parameters, text),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_LEFT}` }, this.parameters.hasProp(`${text}.content`) ? this.parameters.getProp(`${text}.content`) : this.parameters.getProp(text))
        : '', this.parameters.hasProp(footer)
        ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${footer}.clampLines`) ? this.parameters.getProp(`${footer}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${footer}.fontWeight`) ? this.parameters.getProp(`${footer}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${footer}.type`) ? this.parameters.getProp(`${footer}.type`) : 'body-2', styles: [
            this.parameters.hasProp(`${footer}.type`) ? `line-height-${this.parameters.getProp(`${footer}.type`)}` : 'line-height-body-2',
            this.parameters.hasProp(`${footer}.styles`) ? this.parameters.getProp(`${footer}.styles`) : this.getAdditionalStyles(this.parameters, footer),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.FOOTER_LEFT}` }, this.parameters.hasProp(`${footer}.content`) ? this.parameters.getProp(`${footer}.content`) : this.parameters.getProp(footer))
        : ''),
      this.parameters.hasProp(button)
        ? h("eds-button", { styles: this.parameters.getProp(`${button}.styles`), id: this.parameters.getProp(`${button}.id`), content: this.parameters.getProp(`${button}.content`), size: this.parameters.getProp(`${button}.size`), outlined: this.parameters.getProp(`${button}.outlined`), "text-only": this.parameters.getProp(`${button}.text-only`), class: `${this.classNames.EL}${this.classNames.BUTTON}` })
        : '',
    ];
  }
  /**
   * @description Generate a 2 columns template
   */
  renderDefault2ColumnsRight(objectPropriety) {
    const header = get(this.mapping, `${objectPropriety}.header`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const text = get(this.mapping, `${objectPropriety}.text`);
    const link = get(this.mapping, `${objectPropriety}.link`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const button = get(this.mapping, `${objectPropriety}.button`);
    const radio = get(this.mapping, `${objectPropriety}.radio`);
    const menuDropdown = get(this.mapping, `${objectPropriety}.menu-dropdown`);
    const tags = get(this.mapping, `${objectPropriety}.tags`);
    if (this.parameters === undefined) {
      return;
    }
    return [
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` }, this.setCollapseIcon(this.item, 'trailing'), this.parameters.hasProp(header)
        ? h("eds-small", { styles: [
            'uppercase',
            'line-height-body-2',
            this.parameters.hasProp(`${header}.styles`) ? this.parameters.getProp(`${header}.styles`) : this.getAdditionalStyles(this.parameters, header),
          ].join(' '), content: this.parameters.hasProp(`${header}.content`) ? this.parameters.getProp(`${header}.content`) : '', class: `${this.classNames.EL}${this.classNames.HEADER_RIGHT}` })
        : '', this.parameters.hasProp(body)
        ? h("eds-heading", { type: "h6", "font-weight": "semi-bold", styles: [
            'line-height-body-2',
            this.parameters.hasProp(`${body}.styles`) ? this.parameters.getProp(`${body}.styles`) : this.getAdditionalStyles(this.parameters, body),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}`, content: this.parameters.hasProp(`${body}.content`) ? this.parameters.getProp(`${body}.content`) : '' })
        : '', this.parameters.hasProp(text)
        ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${text}.clampLines`) ? this.parameters.getProp(`${text}.clampLines`) : 0, type: this.parameters.hasProp(`${text}.type`) ? this.parameters.getProp(`${text}.type`) : 'body-1', fontWeight: this.parameters.hasProp(`${text}.fontWeight`) ? this.parameters.getProp(`${text}.fontWeight`) : 'semi-bold', styles: [
            this.parameters.hasProp(`${text}.styles`) ? this.parameters.getProp(`${text}.styles`) : this.getAdditionalStyles(this.parameters, text),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}` }, this.parameters.hasProp(`${text}.content`) ? this.parameters.getProp(`${text}.content`) : this.parameters.getProp(text))
        : '', this.parameters.hasProp(link)
        ? h("eds-link", { id: this.parameters.hasProp(`${link}.id`) ? this.parameters.getProp(`${link}.id`) : undefined, size: this.parameters.hasProp(`${link}.size`) ? this.parameters.getProp(`${link}.size`) : undefined, url: this.parameters.hasProp(`${link}.url`) ? this.parameters.getProp(`${link}.url`) : '#', mailto: this.parameters.hasProp(`${link}.mailto`) ? this.parameters.getProp(`${link}.mailto`) : undefined, content: this.parameters.hasProp(`${link}.content`) ? this.parameters.getProp(`${link}.content`) : '', iconPosition: this.parameters.hasProp(`${link}.iconPosition`) ? this.parameters.getProp(`${link}.iconPosition`) : undefined, styles: this.parameters.hasProp(`${link}.styles`) ? this.parameters.getProp(`${link}.styles`) : '', underline: this.parameters.hasProp(`${link}.underline`) ? this.parameters.getProp(`${link}.underline`) : false, target: this.parameters.hasProp(`${link}.target`) ? this.parameters.getProp(`${link}.target`) : '_self', class: `${this.classNames.EL}${this.classNames.BODY_RIGHT}` })
        : '', this.parameters.hasProp(footer)
        ? h("eds-paragraph", { clampLines: this.parameters.hasProp(`${footer}.clampLines`) ? this.parameters.getProp(`${footer}.clampLines`) : 0, fontWeight: this.parameters.hasProp(`${footer}.fontWeight`) ? this.parameters.getProp(`${footer}.fontWeight`) : 'regular', type: this.parameters.hasProp(`${footer}.type`) ? this.parameters.getProp(`${footer}.type`) : 'body-2', styles: [
            'line-height-body-2',
            this.parameters.hasProp(`${footer}.styles`) ? this.parameters.getProp(`${footer}.styles`) : this.getAdditionalStyles(this.parameters, footer),
          ].join(' '), class: `${this.classNames.EL}${this.classNames.FOOTER_RIGHT}` }, this.parameters.hasProp(`${footer}.content`) ? this.parameters.getProp(`${footer}.content`) : this.parameters.getProp(footer))
        : '', this.parameters.hasProp(button)
        ? h("eds-button", { styles: this.parameters.getProp(`${button}.styles`), size: this.parameters.getProp(`${button}.size`), outlined: this.parameters.getProp(`${button}.outlined`), "text-only": this.parameters.getProp(`${button}.text-only`), class: `${this.classNames.EL}${this.classNames.BUTTON}` }, h("eds-icon", { slot: "icon", icon: this.parameters.getProp(`${button}.icon`) }))
        : '', this.parameters.hasProp(icon)
        ? h("eds-icon", { styles: this.parameters.getProp(`${icon}.styles`), icon: this.parameters.getProp(`${icon}.icon`), size: this.parameters.getProp(`${icon}.size`), class: `${this.classNames.EL}${this.classNames.BUTTON}` })
        : ''),
      this.parameters.hasProp(tags) && this.parameters.getProp(tags).length > 0
        ? h("div", { class: [
            `${this.classNames.EL}${this.classNames.TAGS}`,
          ].join(' ') }, this.parameters.getProp(tags).map(tag => {
          return h("div", { class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}` }, h("eds-icon", { styles: get(tag, `icon.styles`), icon: get(tag, `icon.icon`), size: get(tag, `icon.size`), class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.ICON}` }), this.getTypoComponent(this.parameters, tag));
        }))
        : '',
      this.parameters.hasProp(radio)
        ? h("eds-radio-button", { inputName: this.parameters.getProp(`${radio}.name`), value: this.parameters.getProp(`${radio}.value`), icon: this.parameters.getProp(`${radio}.icon`), selected: this.parameters.getProp(`${radio}.selected`), class: [
            `${this.classNames.EL}${this.classNames.RADIO_BUTTON}`,
            `${this.classNames.EL}${this.classNames.TRAILING_RADIO_BUTTON}`,
          ].join(' ') })
        : '',
      this.parameters.hasProp(menuDropdown)
        ? h("eds-dropdown", { "align-right": true, class: `${this.classNames.EL}${this.classNames.DROPDOWN}`, data: this.parameters.getProp(`${menuDropdown}.data`) }, h("div", { slot: "selector" }, h("eds-icon", { slot: "icon", class: `${this.classNames.EL}${this.classNames.DROPDOWN}${this.classNames.ICON}`, styles: this.parameters.getProp(`${menuDropdown}.styles`), size: this.parameters.getProp(`${menuDropdown}.size`), icon: this.parameters.getProp(`${menuDropdown}.icon`) })))
        : '',
    ];
  }
  getTypoComponent(parameters, item, itemClass = '', styles = []) {
    return (() => {
      switch (parameters.getProp(`${item}.type`)) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return h("eds-heading", { type: parameters.hasProp(`${item}.type`) ? parameters.getProp(`${item}.type`) : 'h6', fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : 'semi-bold', styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), class: itemClass, content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item) });
        default:
        case 'body-1':
        case 'body-2':
        case 'body-3':
          return h("eds-paragraph", { type: parameters.hasProp(`${item}.type`) ? parameters.getProp(`${item}.type`) : 'body-2', styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), clampLines: parameters.hasProp(`${item}.clampLines`) ? parameters.getProp(`${item}.clampLines`) : 2, fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : '', class: itemClass, content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item) });
        case 'small':
          return h("eds-small", { styles: concat(parameters.hasProp(`${item}.styles`) ? parameters.getProp(`${item}.styles`) : '', styles).join(' '), fontWeight: parameters.hasProp(`${item}.fontWeight`) ? parameters.getProp(`${item}.fontWeight`) : 'regular', content: parameters.hasProp(`${item}.content`) ? parameters.getProp(`${item}.content`) : parameters.getProp(item), class: itemClass });
      }
    })();
  }
  renderColumn(parameters, objectPropriety, columnClass, indexColumn) {
    const image = get(this.mapping, `${objectPropriety}.image`);
    const badge = get(this.mapping, `${objectPropriety}.badge`);
    const header = get(this.mapping, `${objectPropriety}.header`);
    const headerAdditional = get(this.mapping, `${objectPropriety}.header-additional`);
    const icon = get(this.mapping, `${objectPropriety}.icon`);
    const body = get(this.mapping, `${objectPropriety}.body`);
    const bodyAdditional = get(this.mapping, `${objectPropriety}.body-additional`);
    const date = get(this.mapping, `${objectPropriety}.date`);
    const footer = get(this.mapping, `${objectPropriety}.footer`);
    const tags = get(this.mapping, `${objectPropriety}.tags`);
    return [
      parameters.hasProp(image)
        ? h("eds-image", { class: `${this.classNames.EL}${this.classNames.IMAGE}`, src: parameters.getProp(image) })
        : '',
      h("div", { class: `${this.classNames.EL}${this.classNames.BODY}` }, parameters.hasProp(header)
        ? h("div", { class: `${columnClass}${this.classNames.HEADER}` }, parameters.hasProp(badge)
          ? h("eds-badge", { size: parameters.hasProp(`${badge}.size`) ? this.getItemSize(parameters, badge) : 'xxs', styles: parameters.hasProp(`${badge}.styles`) ? parameters.getProp(`${badge}.styles`) : 'success', text: parameters.getProp(`${badge}.text`), class: `${columnClass}${this.classNames.HEADER}${this.classNames.BADGE}` })
          : '', this.getTypoComponent(parameters, header, `${columnClass}${this.classNames.HEADER}${this.classNames.TEXT}`, ['line-height-body-2']), parameters.hasProp(headerAdditional)
          ? this.getTypoComponent(parameters, headerAdditional, '', ['uppercase', 'line-height-body-2'])
          : '', parameters.hasProp(date)
          ? this.getTypoComponent(parameters, date, `${columnClass}${this.classNames.HEADER}${this.classNames.DATE}`, ['line-height-body-2'])
          : '')
        : '', parameters.hasProp(body)
        ? h("div", { class: `${columnClass}${this.classNames.BODY}` }, parameters.hasProp(icon)
          ? h("eds-icon", { size: parameters.hasProp(`${icon}.size`) ? this.getItemSize(parameters, icon) : '2x', styles: parameters.hasProp(`${icon}.styles`) ? parameters.getProp(`${icon}.styles`) : 'tertiary-500', icon: parameters.getProp(`${icon}.icon`), class: `${columnClass}${this.classNames.BODY}${this.classNames.ICON}` })
          : '', h("div", { class: [
            parameters.hasProp(tags) && parameters.getProp(tags).length > 0 ? `${columnClass}${this.classNames.BODY}${this.classNames.WITH_TAGS}` : '',
            this.hasCollapseIcon(this.item, 'leading') && indexColumn === 0 ? `${columnClass}${this.classNames.BODY}${this.classNames.HAS_COLLAPSE_ICON}` : '',
          ].join(' ') }, this.getTypoComponent(parameters, body, `${columnClass}${this.classNames.BODY}${this.classNames.TEXT}`, [(objectPropriety !== 'table') ? 'line-height-body-2' : '']), parameters.hasProp(tags) && parameters.getProp(tags).length > 0
          ? h("div", { class: [
              `${this.classNames.EL}${this.classNames.TAGS}`,
            ].join(' ') }, parameters.getProp(tags).map((tag, indexTag) => {
            return h("div", { class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}` }, h("eds-icon", { styles: get(tag, `icon.styles`), icon: get(tag, `icon.icon`), size: get(tag, `icon.size`), class: `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.ICON}` }), this.getTypoComponent(parameters, `${tags}[${indexTag}].text`, `${this.classNames.EL}${this.classNames.TAGS}${this.classNames.TAG}${this.classNames.TEXT}`));
          }))
          : '', (indexColumn === 0) ? this.setCollapseIcon(this.item, 'leading') : ''), parameters.hasProp(bodyAdditional)
          ? this.getTypoComponent(parameters, bodyAdditional, '', ['uppercase', 'line-height-body-2'])
          : '', parameters.hasProp(footer)
          ? this.getTypoComponent(parameters, footer, `${this.classNames.EL}${this.classNames.FOOTER_LEFT}`, ['line-height-body-2'])
          : '')
        : ''),
    ];
  }
  hasCollapseIcon(item, position) {
    return (this.isAccordionConfig(item) === true || this.isCollapsedConfig(item) === true)
      && has(this.collapsedConfig, `icons.${position}`);
  }
  setCollapseIcon(item, position) {
    return this.hasCollapseIcon(item, position)
      ? h("eds-icon", { slot: "icon", class: [
          `${this.classNames.EL}${this.classNames.ICON}`,
          `${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSE}`,
          (!this.collapsed) ? `${this.classNames.EL}${this.classNames.ICON}${this.classNames.COLLAPSED}` : '',
        ].join(' '), styles: (!this.collapsed) ?
          has(this.collapsedConfig, `icons.${position}.default.style`) ? get(this.collapsedConfig, `icons.${position}.default.style`) : ''
          :
            has(this.collapsedConfig, `icons.${position}.active.style`) ? get(this.collapsedConfig, `icons.${position}.active.style`) : '', icon: (!this.collapsed) ?
          has(this.collapsedConfig, `icons.${position}.default.icon`) ? get(this.collapsedConfig, `icons.${position}.default.icon`) : 'chevron-down'
          :
            has(this.collapsedConfig, `icons.${position}.active.icon`) ? get(this.collapsedConfig, `icons.${position}.active.icon`) : 'chevron-up' })
      : '';
  }
  getItemSize(parameters, item) {
    if (parameters.getProp(`${item}.size-xlg`) || parameters.getProp(`${item}.size`) === 'xlg') {
      return 'xlg';
    }
    if (parameters.getProp(`${item}.size-lg`) || parameters.getProp(`${item}.size`) === 'lg') {
      return 'lg';
    }
    if (parameters.getProp(`${item}.size-md`) || parameters.getProp(`${item}.size`) === 'md') {
      return 'md';
    }
    if (parameters.getProp(`${item}.size-sm`) || parameters.getProp(`${item}.size`) === 'sm') {
      return 'sm';
    }
    if (parameters.getProp(`${item}.size-xs`) || parameters.getProp(`${item}.size`) === 'xs') {
      return 'xs';
    }
    if (parameters.getProp(`${item}.size-xxs`) || parameters.getProp(`${item}.size`) === 'xxs') {
      return 'xxs';
    }
    return '';
  }
  getAdditionalStyles(parameters, propriety = '') {
    return get(parameters, `styles${(propriety !== '' ? `.${propriety}` : '')}`);
  }
  getLineStyles() {
    const classes = [];
    // General layout and colors background
    switch (this.type) {
      case 'heading':
        classes.push(`${this.classNames.EL}--secondary`);
        break;
      case 'even':
        classes.push(`${this.classNames.EL}--quaternary`);
        break;
      case 'indented':
        classes.push(`${this.classNames.EL}--quaternary-600`);
        break;
      case 'collapsed':
        classes.push(`${this.classNames.EL}--quaternary-400`);
        break;
    }
    classes.push(`${this.classNames.EL}--${this.type}`);
    if (this.item.hasProp('children') && this.item.getProp('children').length > 0) {
      classes.push(`${this.classNames.EL}--has-children`);
    }
    if (this.isAccordionConfig(this.item) === true || this.isCollapsedConfig(this.item) === true) {
      classes.push(`${this.classNames.EL}${this.classNames.COLLAPSE}`);
    }
    if (this.isAccordionConfig(this.item) === true && this.collapsed === true) {
      classes.push(`${this.classNames.EL}--collapsed`);
    }
    if (this.indent > 0) {
      classes.push(`${this.classNames.EL}--indent-${this.indent}`);
    }
    if (this.padding && this.padding !== 'undefined') {
      classes.push(`${this.classNames.EL}--padding-${this.padding}`);
    }
    if (this.clickable === true) {
      classes.push(`${this.classNames.EL}--clickable`);
    }
    if (this.highlight && this.highlight !== undefined) {
      classes.push(`${this.classNames.EL}--highlight`);
      classes.push(`${this.classNames.EL}--highlight--bg--${this.highlight}`);
    }
    return classes.join(' ');
  }
  isAccordionConfig(item) {
    return (item.hasProp('accordion') && item.getProp('accordion') === true);
  }
  isCollapsedConfig(item) {
    return item.hasProp('collapsed');
  }
  render() {
    if (this.item) {
      return [
        h("div", { class: [
            `${this.classNames.EL}`,
            `${this.classNames.EL}--${this.alias}`,
            this.getLineStyles(),
            DatalistItemPropsHelper.getStyles(this.styles, this.classNames.EL),
          ].join(' ') }, h("div", { class: `${this.classNames.EL}${this.classNames.WRAPPER}` }, (() => {
          switch (this.templateName) {
            case 'heading':
              return this.twoColumnsTemplate();
            case 'table':
              return this.tableTemplate();
            case '3-columns':
              return this.threeColumnsTemplate();
            case '1-column':
              return this.oneColumnTemplate();
            case '2-columns':
            default:
              return this.twoColumnsTemplate();
          }
        })()), has(this.parameters, 'progress-bar')
          ? h("eds-progress-bar", { progressMax: parseInt(this.parameters.getProp('progress-bar.progress-max'), 10), progressValue: parseInt(this.parameters.getProp('progress-bar.progress-value'), 10), "leading-text": this.parameters.getProp('progress-bar.leading-text'), "trailing-text": this.parameters.getProp('progress-bar.trailing-text'), class: `${this.classNames.EL}${this.classNames.PROGRESS_BAR}` })
          : '', has(this.parameters, 'message')
          ? h("eds-message", { class: `${this.classNames.EL}${this.classNames.MESSAGE}`, "icon-leading": this.parameters.getProp('message.icon-leading'), styles: this.parameters.getProp('message.styles') }, this.parameters.getProp('message.text'))
          : ''),
        h("div", { class: "slot-content-container" }, h("slot", { name: "content" })),
      ];
    }
    return (h("div", null));
  }
  get el() { return getElement(this); }
};
ENOVOSDatalistItem.style = datalistItemCss;

export { ENOVOSDatalistItem as eds_datalist_item };
