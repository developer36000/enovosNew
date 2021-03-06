import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c1ef9624.js';
import { c as compact } from './compact-c11bf240.js';
import { o as onChange, s as storeTheme } from './themes-9daeeb3d.js';
import { I as IsVisibleObservable } from './isVisibleObservable-5e7e7c3e.js';
import { T as TapEvent } from './tapEvent-8abcbf66.js';
import { C as ComponentPropsHelper } from './ComponentPropsHelper-9f5a3c88.js';

const cardCss = "[name=card]{position:relative;display:block;width:100%;height:inherit;border-radius:8px}[name=card] .card--bg--primary{background-color:#F76700 !important}[name=card] .card--bg--secondary{background-color:#5E5E5E !important}[name=card] .card--bg--tertiary{background-color:#004885 !important}[name=card] .card--bg--quaternary{background-color:#96C11F !important}[name=card] .card--bg--quinary{background-color:#EF7B0B !important}[name=card] .card--bg--senary{background-color:#CAA08D !important}[name=card] .card--bg--septenary{background-color:#6C887A !important}[name=card] .card--bg--grey{background-color:#757575 !important}[name=card] .card--bg--primary-900{background-color:#F76700 !important}[name=card] .card--bg--primary-800{background-color:#F76700 !important}[name=card] .card--bg--primary-700{background-color:#D52B1E !important}[name=card] .card--bg--primary-600{background-color:#C75300 !important}[name=card] .card--bg--primary-500{background-color:#F76700 !important}[name=card] .card--bg--primary-400{background-color:#FFA14C !important}[name=card] .card--bg--primary-300{background-color:#FFB673 !important}[name=card] .card--bg--primary-200{background-color:#FFDDBF !important}[name=card] .card--bg--primary-100{background-color:#FFF1E5 !important}[name=card] .card--bg--primary-50{background-color:#FFF1E5 !important}[name=card] .card--bg--secondary-900{background-color:#5E5E5E !important}[name=card] .card--bg--secondary-800{background-color:#5E5E5E !important}[name=card] .card--bg--secondary-700{background-color:#5E5E5E !important}[name=card] .card--bg--secondary-600{background-color:#5E5E5E !important}[name=card] .card--bg--secondary-500{background-color:#5E5E5E !important}[name=card] .card--bg--secondary-400{background-color:#8E8E8E !important}[name=card] .card--bg--secondary-300{background-color:#A7A7A7 !important}[name=card] .card--bg--secondary-200{background-color:#D7D7D7 !important}[name=card] .card--bg--secondary-100{background-color:#EEEEEE !important}[name=card] .card--bg--secondary-50{background-color:#EEEEEE !important}[name=card] .card--bg--tertiary-900{background-color:#004885 !important}[name=card] .card--bg--tertiary-800{background-color:#004885 !important}[name=card] .card--bg--tertiary-700{background-color:#004885 !important}[name=card] .card--bg--tertiary-600{background-color:#004885 !important}[name=card] .card--bg--tertiary-500{background-color:#004885 !important}[name=card] .card--bg--tertiary-400{background-color:#5C8AB1 !important}[name=card] .card--bg--tertiary-300{background-color:#85A8C5 !important}[name=card] .card--bg--tertiary-200{background-color:#C2D3E2 !important}[name=card] .card--bg--tertiary-100{background-color:#EBF1F6 !important}[name=card] .card--bg--tertiary-50{background-color:#EBF1F6 !important}[name=card] .card--bg--quaternary-900{background-color:#5A8D00 !important}[name=card] .card--bg--quaternary-800{background-color:#5A8D00 !important}[name=card] .card--bg--quaternary-700{background-color:#5A8D00 !important}[name=card] .card--bg--quaternary-600{background-color:#5A8D00 !important}[name=card] .card--bg--quaternary-500{background-color:#96C11F !important}[name=card] .card--bg--quaternary-400{background-color:#BCD870 !important}[name=card] .card--bg--quaternary-300{background-color:#CDE294 !important}[name=card] .card--bg--quaternary-200{background-color:#E6F0C9 !important}[name=card] .card--bg--quaternary-100{background-color:#F7FAED !important}[name=card] .card--bg--quaternary-50{background-color:#F7FAED !important}[name=card] .card--bg--quinary-900{background-color:#C75300 !important}[name=card] .card--bg--quinary-800{background-color:#C75300 !important}[name=card] .card--bg--quinary-700{background-color:#C75300 !important}[name=card] .card--bg--quinary-600{background-color:#C75300 !important}[name=card] .card--bg--quinary-500{background-color:#EF7B0B !important}[name=card] .card--bg--quinary-400{background-color:#FFA14C !important}[name=card] .card--bg--quinary-300{background-color:#FFB673 !important}[name=card] .card--bg--quinary-200{background-color:#FFDDBF !important}[name=card] .card--bg--quinary-100{background-color:#FFF1E5 !important}[name=card] .card--bg--quinary-50{background-color:#FFF1E5 !important}[name=card] .card--bg--senary-900{background-color:#602A10 !important}[name=card] .card--bg--senary-800{background-color:#95431D !important}[name=card] .card--bg--senary-700{background-color:#B66E4D !important}[name=card] .card--bg--senary-600{background-color:#B78670 !important}[name=card] .card--bg--senary-500{background-color:#CAA08D !important}[name=card] .card--bg--senary-400{background-color:#DEAE98 !important}[name=card] .card--bg--senary-300{background-color:#EEC3AF !important}[name=card] .card--bg--senary-200{background-color:#FAD5C5 !important}[name=card] .card--bg--senary-100{background-color:#FFE9DF !important}[name=card] .card--bg--senary-50{background-color:transparent !important}[name=card] .card--bg--septenary-900{background-color:transparent !important}[name=card] .card--bg--septenary-800{background-color:transparent !important}[name=card] .card--bg--septenary-700{background-color:transparent !important}[name=card] .card--bg--septenary-600{background-color:transparent !important}[name=card] .card--bg--septenary-500{background-color:#6C887A !important}[name=card] .card--bg--septenary-400{background-color:transparent !important}[name=card] .card--bg--septenary-300{background-color:transparent !important}[name=card] .card--bg--septenary-200{background-color:transparent !important}[name=card] .card--bg--septenary-100{background-color:transparent !important}[name=card] .card--bg--septenary-50{background-color:transparent !important}[name=card] .card--bg--grey-900{background-color:#1D1D1D !important}[name=card] .card--bg--grey-800{background-color:#333333 !important}[name=card] .card--bg--grey-700{background-color:#4D4D4D !important}[name=card] .card--bg--grey-600{background-color:#666666 !important}[name=card] .card--bg--grey-500{background-color:#757575 !important}[name=card] .card--bg--grey-400{background-color:#999999 !important}[name=card] .card--bg--grey-300{background-color:#B3B3B3 !important}[name=card] .card--bg--grey-200{background-color:#CCCCCC !important}[name=card] .card--bg--grey-100{background-color:#E6E6E6 !important}[name=card] .card--bg--grey-50{background-color:#F8F8F8 !important}[name=card] .card--bg--contextual-success{background-color:#00856A !important}[name=card] .card--bg--contextual-success-light{background-color:#E5F2F0 !important}[name=card] .card--bg--contextual-info{background-color:#2899A8 !important}[name=card] .card--bg--contextual-info-light{background-color:#DBF6FF !important}[name=card] .card--bg--contextual-warning{background-color:#F76700 !important}[name=card] .card--bg--contextual-warning-light{background-color:#FFF1E5 !important}[name=card] .card--bg--contextual-error{background-color:#EB0000 !important}[name=card] .card--bg--contextual-error-light{background-color:#FDE5E5 !important}[name=card] .card--bg--pfm-blue{background-color:#55A1D3 !important}[name=card] .card--bg--pfm-green{background-color:#8DDE54 !important}[name=card] .card--bg--pfm-yellow{background-color:#FFC600 !important}[name=card] .card--bg--pfm-orange{background-color:#FC912E !important}[name=card] .card--bg--pfm-red{background-color:#DF5036 !important}[name=card] .card--bg--external-bank-ing{background-color:#F58220 !important}[name=card] .card--bg--external-bank-bil{background-color:#71308B !important}[name=card] .card--bg--external-bank-bcee{background-color:#144093 !important}[name=card] .card--bg--external-bank-post{background-color:#FABC0B !important}[name=card] .card--bg--external-bank-raiffeisen{background-color:#112242 !important}[name=card] .card--bg--external-bank-bnp-paribas{background-color:#00915A !important}[name=card] .card--bg--white-15{background-color:rgba(255, 255, 255, 0.15) !important}[name=card] .card--bg--white-25{background-color:rgba(255, 255, 255, 0.25) !important}[name=card] .card--bg--white-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=card] .card--bg--brand-pfm-blue{background-color:#55A1D3 !important}[name=card] .card--bg--brand-pfm-green{background-color:#8DDE54 !important}[name=card] .card--bg--brand-pfm-yellow{background-color:#FFC600 !important}[name=card] .card--bg--brand-pfm-orange{background-color:#FC912E !important}[name=card] .card--bg--brand-pfm-red{background-color:#DF5036 !important}[name=card] .card--bg--brand-expressive-green-light{background-color:#4FB482 !important}[name=card] .card--bg--brand-expressive-green-dark{background-color:#133B2C !important}[name=card] .card--bg--brand-expressive-blue-light{background-color:#1B8DC0 !important}[name=card] .card--bg--brand-expressive-blue-dark{background-color:#0A324B !important}[name=card] .card--bg--brand-expressive-yellow-light{background-color:#F0BE21 !important}[name=card] .card--bg--brand-expressive-yellow-dark{background-color:#B77918 !important}[name=card] .card--bg--brand-expressive-orange-light{background-color:#F3B969 !important}[name=card] .card--bg--brand-expressive-orange-dark{background-color:#EF7D00 !important}[name=card] .card--bg--brand-expressive-pink-light{background-color:#C03152 !important}[name=card] .card--bg--brand-expressive-pink-dark{background-color:#4F0F15 !important}[name=card] .card--bg--brand-expressive-red-light{background-color:#F7B7AF !important}[name=card] .card--bg--brand-expressive-red-dark{background-color:#E62D32 !important}[name=card] .card--bg--brand-expressive-orange-dark-900{background-color:#4D2800 !important}[name=card] .card--bg--brand-expressive-orange-dark-800{background-color:#804200 !important}[name=card] .card--bg--brand-expressive-orange-dark-700{background-color:#B35C00 !important}[name=card] .card--bg--brand-expressive-orange-dark-600{background-color:#CC6A00 !important}[name=card] .card--bg--brand-expressive-orange-dark-500{background-color:#EF7D00 !important}[name=card] .card--bg--brand-expressive-orange-dark-400{background-color:#FC8823 !important}[name=card] .card--bg--brand-expressive-orange-dark-300{background-color:#FC9E4C !important}[name=card] .card--bg--brand-expressive-orange-dark-200{background-color:#FFB675 !important}[name=card] .card--bg--brand-expressive-orange-dark-100{background-color:#FFD1A8 !important}[name=card] .card--bg--brand-expressive-orange-dark-50{background-color:transparent !important}[name=card] .card--bg--brand-expressive-blue-light-900{background-color:#0C4159 !important}[name=card] .card--bg--brand-expressive-blue-light-800{background-color:#105373 !important}[name=card] .card--bg--brand-expressive-blue-light-700{background-color:#14668C !important}[name=card] .card--bg--brand-expressive-blue-light-600{background-color:#1779A6 !important}[name=card] .card--bg--brand-expressive-blue-light-500{background-color:#1B8DC0 !important}[name=card] .card--bg--brand-expressive-blue-light-400{background-color:#1D9AD1 !important}[name=card] .card--bg--brand-expressive-blue-light-300{background-color:#2AAEEB !important}[name=card] .card--bg--brand-expressive-blue-light-200{background-color:#56BFF0 !important}[name=card] .card--bg--brand-expressive-blue-light-100{background-color:#7FCFF5 !important}[name=card] .card--bg--brand-expressive-blue-light-50{background-color:transparent !important}[name=card] .card--bg--brand-expressive-green-light-900{background-color:#224D37 !important}[name=card] .card--bg--brand-expressive-green-light-800{background-color:#2D6649 !important}[name=card] .card--bg--brand-expressive-green-light-700{background-color:#39805C !important}[name=card] .card--bg--brand-expressive-green-light-600{background-color:#43996E !important}[name=card] .card--bg--brand-expressive-green-light-500{background-color:#4FB482 !important}[name=card] .card--bg--brand-expressive-green-light-400{background-color:#55C28C !important}[name=card] .card--bg--brand-expressive-green-light-300{background-color:#60D199 !important}[name=card] .card--bg--brand-expressive-green-light-200{background-color:#69DBA2 !important}[name=card] .card--bg--brand-expressive-green-light-100{background-color:#85E6B5 !important}[name=card] .card--bg--brand-expressive-green-light-50{background-color:transparent !important}[name=card] .card--bg--brand-expressive-yellow-light-900{background-color:#6B550F !important}[name=card] .card--bg--brand-expressive-yellow-light-800{background-color:#8F7214 !important}[name=card] .card--bg--brand-expressive-yellow-light-700{background-color:#AD8B19 !important}[name=card] .card--bg--brand-expressive-yellow-light-600{background-color:#D1A71D !important}[name=card] .card--bg--brand-expressive-yellow-light-500{background-color:#F0BE21 !important}[name=card] .card--bg--brand-expressive-yellow-light-400{background-color:#FCCA23 !important}[name=card] .card--bg--brand-expressive-yellow-light-300{background-color:#FCD742 !important}[name=card] .card--bg--brand-expressive-yellow-light-200{background-color:#FCDD60 !important}[name=card] .card--bg--brand-expressive-yellow-light-100{background-color:#FCE483 !important}[name=card] .card--bg--brand-expressive-yellow-light-50{background-color:transparent !important}[name=card] .card--bg--brand-expressive-yellow-dark-900{background-color:#52360B !important}[name=card] .card--bg--brand-expressive-yellow-dark-800{background-color:#6B470E !important}[name=card] .card--bg--brand-expressive-yellow-dark-700{background-color:#855811 !important}[name=card] .card--bg--brand-expressive-yellow-dark-600{background-color:#9E6915 !important}[name=card] .card--bg--brand-expressive-yellow-dark-500{background-color:#B77918 !important}[name=card] .card--bg--brand-expressive-yellow-dark-400{background-color:#D18A1B !important}[name=card] .card--bg--brand-expressive-yellow-dark-300{background-color:#EB9B1F !important}[name=card] .card--bg--brand-expressive-yellow-dark-200{background-color:#FAAA2D !important}[name=card] .card--bg--brand-expressive-yellow-dark-100{background-color:#FABA55 !important}[name=card] .card--bg--brand-expressive-yellow-dark-50{background-color:transparent !important}[name=card] .card--bg--white-opacity-50{background-color:rgba(255, 255, 255, 0.5) !important}[name=card] .card--bg--white{background-color:#FFFFFF !important}[name=card] .card--bg--black{background-color:#000000 !important}[name=card] .card--bg--transparent{background-color:transparent !important}[name=card] .card--bg--gradient-primary-light-left{background-image:linear-gradient(to left, #FFB673, #F76700) !important}[name=card] .card--bg--gradient-primary-light-right{background-image:linear-gradient(to right, #FFB673, #F76700) !important}[name=card] .card--bg--gradient-primary-light{background-image:linear-gradient(to bottom, #FFB673, #F76700) !important}[name=card] .card--bg--gradient-primary-light-bottom{background-image:linear-gradient(to bottom, #FFB673, #F76700) !important}[name=card] .card--bg--gradient-primary-light-top{background-image:linear-gradient(to top, #FFB673, #F76700) !important}[name=card] .card--bg--gradient-primary-dark-left{background-image:linear-gradient(to left, #F76700, #D52B1E) !important}[name=card] .card--bg--gradient-primary-dark-right{background-image:linear-gradient(to right, #F76700, #D52B1E) !important}[name=card] .card--bg--gradient-primary-dark{background-image:linear-gradient(to bottom, #F76700, #D52B1E) !important}[name=card] .card--bg--gradient-primary-dark-bottom{background-image:linear-gradient(to bottom, #F76700, #D52B1E) !important}[name=card] .card--bg--gradient-primary-dark-top{background-image:linear-gradient(to top, #F76700, #D52B1E) !important}[name=card] .card--bg--gradient-primary-500-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=card] .card--bg--gradient-primary-500-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=card] .card--bg--gradient-primary-500{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-primary-500-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-primary-500-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-light-left{background-image:linear-gradient(to left, #004885, #5E5E5E) !important}[name=card] .card--bg--gradient-secondary-light-right{background-image:linear-gradient(to right, #004885, #5E5E5E) !important}[name=card] .card--bg--gradient-secondary-light{background-image:linear-gradient(to bottom, #004885, #5E5E5E) !important}[name=card] .card--bg--gradient-secondary-light-bottom{background-image:linear-gradient(to bottom, #004885, #5E5E5E) !important}[name=card] .card--bg--gradient-secondary-light-top{background-image:linear-gradient(to top, #004885, #5E5E5E) !important}[name=card] .card--bg--gradient-secondary-dark-left{background-image:linear-gradient(to left, #5E5E5E, #000000) !important}[name=card] .card--bg--gradient-secondary-dark-right{background-image:linear-gradient(to right, #5E5E5E, #000000) !important}[name=card] .card--bg--gradient-secondary-dark{background-image:linear-gradient(to bottom, #5E5E5E, #000000) !important}[name=card] .card--bg--gradient-secondary-dark-bottom{background-image:linear-gradient(to bottom, #5E5E5E, #000000) !important}[name=card] .card--bg--gradient-secondary-dark-top{background-image:linear-gradient(to top, #5E5E5E, #000000) !important}[name=card] .card--bg--gradient-secondary-500-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-500-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-500{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-500-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-500-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-300-left{background-image:linear-gradient(to left, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-300-right{background-image:linear-gradient(to right, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-300{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-300-bottom{background-image:linear-gradient(to bottom, transparent, transparent) !important}[name=card] .card--bg--gradient-secondary-300-top{background-image:linear-gradient(to top, transparent, transparent) !important}[name=card] .card--bg--gradient-tertiary-light-left{background-image:linear-gradient(to left, #5C8AB1, #004885) !important}[name=card] .card--bg--gradient-tertiary-light-right{background-image:linear-gradient(to right, #5C8AB1, #004885) !important}[name=card] .card--bg--gradient-tertiary-light{background-image:linear-gradient(to bottom, #5C8AB1, #004885) !important}[name=card] .card--bg--gradient-tertiary-light-bottom{background-image:linear-gradient(to bottom, #5C8AB1, #004885) !important}[name=card] .card--bg--gradient-tertiary-light-top{background-image:linear-gradient(to top, #5C8AB1, #004885) !important}[name=card] .card--bg--gradient-tertiary-dark-left{background-image:linear-gradient(to left, #004885, #004885) !important}[name=card] .card--bg--gradient-tertiary-dark-right{background-image:linear-gradient(to right, #004885, #004885) !important}[name=card] .card--bg--gradient-tertiary-dark{background-image:linear-gradient(to bottom, #004885, #004885) !important}[name=card] .card--bg--gradient-tertiary-dark-bottom{background-image:linear-gradient(to bottom, #004885, #004885) !important}[name=card] .card--bg--gradient-tertiary-dark-top{background-image:linear-gradient(to top, #004885, #004885) !important}[name=card] .card--bg--gradient-quaternary-light-left{background-image:linear-gradient(to left, #FFFFFF, #96C11F) !important}[name=card] .card--bg--gradient-quaternary-light-right{background-image:linear-gradient(to right, #FFFFFF, #96C11F) !important}[name=card] .card--bg--gradient-quaternary-light{background-image:linear-gradient(to bottom, #FFFFFF, #96C11F) !important}[name=card] .card--bg--gradient-quaternary-light-bottom{background-image:linear-gradient(to bottom, #FFFFFF, #96C11F) !important}[name=card] .card--bg--gradient-quaternary-light-top{background-image:linear-gradient(to top, #FFFFFF, #96C11F) !important}[name=card] .card--bg--gradient-quaternary-medium-left{background-image:linear-gradient(to left, #96C11F, #5A8D00) !important}[name=card] .card--bg--gradient-quaternary-medium-right{background-image:linear-gradient(to right, #96C11F, #5A8D00) !important}[name=card] .card--bg--gradient-quaternary-medium{background-image:linear-gradient(to bottom, #96C11F, #5A8D00) !important}[name=card] .card--bg--gradient-quaternary-medium-bottom{background-image:linear-gradient(to bottom, #96C11F, #5A8D00) !important}[name=card] .card--bg--gradient-quaternary-medium-top{background-image:linear-gradient(to top, #96C11F, #5A8D00) !important}[name=card] .card--bg--gradient-quaternary-dark-left{background-image:linear-gradient(to left, #96C11F, #004885) !important}[name=card] .card--bg--gradient-quaternary-dark-right{background-image:linear-gradient(to right, #96C11F, #004885) !important}[name=card] .card--bg--gradient-quaternary-dark{background-image:linear-gradient(to bottom, #96C11F, #004885) !important}[name=card] .card--bg--gradient-quaternary-dark-bottom{background-image:linear-gradient(to bottom, #96C11F, #004885) !important}[name=card] .card--bg--gradient-quaternary-dark-top{background-image:linear-gradient(to top, #96C11F, #004885) !important}[name=card] .card--bg--gradient-quinary-light-left{background-image:linear-gradient(to left, #FFB673, #EF7B0B) !important}[name=card] .card--bg--gradient-quinary-light-right{background-image:linear-gradient(to right, #FFB673, #EF7B0B) !important}[name=card] .card--bg--gradient-quinary-light{background-image:linear-gradient(to bottom, #FFB673, #EF7B0B) !important}[name=card] .card--bg--gradient-quinary-light-bottom{background-image:linear-gradient(to bottom, #FFB673, #EF7B0B) !important}[name=card] .card--bg--gradient-quinary-light-top{background-image:linear-gradient(to top, #FFB673, #EF7B0B) !important}[name=card] .card--bg--gradient-quinary-dark-left{background-image:linear-gradient(to left, #EF7B0B, #C75300) !important}[name=card] .card--bg--gradient-quinary-dark-right{background-image:linear-gradient(to right, #EF7B0B, #C75300) !important}[name=card] .card--bg--gradient-quinary-dark{background-image:linear-gradient(to bottom, #EF7B0B, #C75300) !important}[name=card] .card--bg--gradient-quinary-dark-bottom{background-image:linear-gradient(to bottom, #EF7B0B, #C75300) !important}[name=card] .card--bg--gradient-quinary-dark-top{background-image:linear-gradient(to top, #EF7B0B, #C75300) !important}[name=card] .card--bg--gradient-contextual-success-left{background-image:linear-gradient(to left, #E5F2F0, #00856A) !important}[name=card] .card--bg--gradient-contextual-success-right{background-image:linear-gradient(to right, #E5F2F0, #00856A) !important}[name=card] .card--bg--gradient-contextual-success{background-image:linear-gradient(to bottom, #E5F2F0, #00856A) !important}[name=card] .card--bg--gradient-contextual-success-bottom{background-image:linear-gradient(to bottom, #E5F2F0, #00856A) !important}[name=card] .card--bg--gradient-contextual-success-top{background-image:linear-gradient(to top, #E5F2F0, #00856A) !important}[name=card] .card--bg--gradient-contextual-info-left{background-image:linear-gradient(to left, #DBF6FF, #2899A8) !important}[name=card] .card--bg--gradient-contextual-info-right{background-image:linear-gradient(to right, #DBF6FF, #2899A8) !important}[name=card] .card--bg--gradient-contextual-info{background-image:linear-gradient(to bottom, #DBF6FF, #2899A8) !important}[name=card] .card--bg--gradient-contextual-info-bottom{background-image:linear-gradient(to bottom, #DBF6FF, #2899A8) !important}[name=card] .card--bg--gradient-contextual-info-top{background-image:linear-gradient(to top, #DBF6FF, #2899A8) !important}[name=card] .card--bg--gradient-contextual-warning-left{background-image:linear-gradient(to left, #FFF1E5, #F76700) !important}[name=card] .card--bg--gradient-contextual-warning-right{background-image:linear-gradient(to right, #FFF1E5, #F76700) !important}[name=card] .card--bg--gradient-contextual-warning{background-image:linear-gradient(to bottom, #FFF1E5, #F76700) !important}[name=card] .card--bg--gradient-contextual-warning-bottom{background-image:linear-gradient(to bottom, #FFF1E5, #F76700) !important}[name=card] .card--bg--gradient-contextual-warning-top{background-image:linear-gradient(to top, #FFF1E5, #F76700) !important}[name=card] .card--bg--gradient-contextual-error-left{background-image:linear-gradient(to left, #FDE5E5, #EB0000) !important}[name=card] .card--bg--gradient-contextual-error-right{background-image:linear-gradient(to right, #FDE5E5, #EB0000) !important}[name=card] .card--bg--gradient-contextual-error{background-image:linear-gradient(to bottom, #FDE5E5, #EB0000) !important}[name=card] .card--bg--gradient-contextual-error-bottom{background-image:linear-gradient(to bottom, #FDE5E5, #EB0000) !important}[name=card] .card--bg--gradient-contextual-error-top{background-image:linear-gradient(to top, #FDE5E5, #EB0000) !important}[name=card] .card--bg--gradient-brand-expressive-green-left{background-image:linear-gradient(to left, #4FB482, #133B2C) !important}[name=card] .card--bg--gradient-brand-expressive-green-right{background-image:linear-gradient(to right, #4FB482, #133B2C) !important}[name=card] .card--bg--gradient-brand-expressive-green{background-image:linear-gradient(to bottom, #4FB482, #133B2C) !important}[name=card] .card--bg--gradient-brand-expressive-green-bottom{background-image:linear-gradient(to bottom, #4FB482, #133B2C) !important}[name=card] .card--bg--gradient-brand-expressive-green-top{background-image:linear-gradient(to top, #4FB482, #133B2C) !important}[name=card] .card--bg--gradient-brand-expressive-blue-left{background-image:linear-gradient(to left, #1B8DC0, #0A324B) !important}[name=card] .card--bg--gradient-brand-expressive-blue-right{background-image:linear-gradient(to right, #1B8DC0, #0A324B) !important}[name=card] .card--bg--gradient-brand-expressive-blue{background-image:linear-gradient(to bottom, #1B8DC0, #0A324B) !important}[name=card] .card--bg--gradient-brand-expressive-blue-bottom{background-image:linear-gradient(to bottom, #1B8DC0, #0A324B) !important}[name=card] .card--bg--gradient-brand-expressive-blue-top{background-image:linear-gradient(to top, #1B8DC0, #0A324B) !important}[name=card] .card--bg--gradient-brand-expressive-yellow-left{background-image:linear-gradient(to left, #F0BE21, #B77918) !important}[name=card] .card--bg--gradient-brand-expressive-yellow-right{background-image:linear-gradient(to right, #F0BE21, #B77918) !important}[name=card] .card--bg--gradient-brand-expressive-yellow{background-image:linear-gradient(to bottom, #F0BE21, #B77918) !important}[name=card] .card--bg--gradient-brand-expressive-yellow-bottom{background-image:linear-gradient(to bottom, #F0BE21, #B77918) !important}[name=card] .card--bg--gradient-brand-expressive-yellow-top{background-image:linear-gradient(to top, #F0BE21, #B77918) !important}[name=card] .card--bg--gradient-brand-expressive-orange-left{background-image:linear-gradient(to left, #F3B969, #EF7D00) !important}[name=card] .card--bg--gradient-brand-expressive-orange-right{background-image:linear-gradient(to right, #F3B969, #EF7D00) !important}[name=card] .card--bg--gradient-brand-expressive-orange{background-image:linear-gradient(to bottom, #F3B969, #EF7D00) !important}[name=card] .card--bg--gradient-brand-expressive-orange-bottom{background-image:linear-gradient(to bottom, #F3B969, #EF7D00) !important}[name=card] .card--bg--gradient-brand-expressive-orange-top{background-image:linear-gradient(to top, #F3B969, #EF7D00) !important}[name=card] .card--bg--gradient-brand-expressive-pink-left{background-image:linear-gradient(to left, #C03152, #4F0F15) !important}[name=card] .card--bg--gradient-brand-expressive-pink-right{background-image:linear-gradient(to right, #C03152, #4F0F15) !important}[name=card] .card--bg--gradient-brand-expressive-pink{background-image:linear-gradient(to bottom, #C03152, #4F0F15) !important}[name=card] .card--bg--gradient-brand-expressive-pink-bottom{background-image:linear-gradient(to bottom, #C03152, #4F0F15) !important}[name=card] .card--bg--gradient-brand-expressive-pink-top{background-image:linear-gradient(to top, #C03152, #4F0F15) !important}[name=card] .card--bg--gradient-brand-expressive-red-left{background-image:linear-gradient(to left, #F7B7AF, #E62D32) !important}[name=card] .card--bg--gradient-brand-expressive-red-right{background-image:linear-gradient(to right, #F7B7AF, #E62D32) !important}[name=card] .card--bg--gradient-brand-expressive-red{background-image:linear-gradient(to bottom, #F7B7AF, #E62D32) !important}[name=card] .card--bg--gradient-brand-expressive-red-bottom{background-image:linear-gradient(to bottom, #F7B7AF, #E62D32) !important}[name=card] .card--bg--gradient-brand-expressive-red-top{background-image:linear-gradient(to top, #F7B7AF, #E62D32) !important}[name=card] .card--bg--gradient-brand-pfm-blue-left{background-image:linear-gradient(to left, #96D9FF, #55A1D3) !important}[name=card] .card--bg--gradient-brand-pfm-blue-right{background-image:linear-gradient(to right, #96D9FF, #55A1D3) !important}[name=card] .card--bg--gradient-brand-pfm-blue{background-image:linear-gradient(to bottom, #96D9FF, #55A1D3) !important}[name=card] .card--bg--gradient-brand-pfm-blue-bottom{background-image:linear-gradient(to bottom, #96D9FF, #55A1D3) !important}[name=card] .card--bg--gradient-brand-pfm-blue-top{background-image:linear-gradient(to top, #96D9FF, #55A1D3) !important}[name=card] .card--bg--gradient-brand-pfm-green-left{background-image:linear-gradient(to left, #8DDE54, #16A085) !important}[name=card] .card--bg--gradient-brand-pfm-green-right{background-image:linear-gradient(to right, #8DDE54, #16A085) !important}[name=card] .card--bg--gradient-brand-pfm-green{background-image:linear-gradient(to bottom, #8DDE54, #16A085) !important}[name=card] .card--bg--gradient-brand-pfm-green-bottom{background-image:linear-gradient(to bottom, #8DDE54, #16A085) !important}[name=card] .card--bg--gradient-brand-pfm-green-top{background-image:linear-gradient(to top, #8DDE54, #16A085) !important}[name=card] .card--bg--gradient-brand-pfm-yellow-left{background-image:linear-gradient(to left, #FFE13D, #FFC600) !important}[name=card] .card--bg--gradient-brand-pfm-yellow-right{background-image:linear-gradient(to right, #FFE13D, #FFC600) !important}[name=card] .card--bg--gradient-brand-pfm-yellow{background-image:linear-gradient(to bottom, #FFE13D, #FFC600) !important}[name=card] .card--bg--gradient-brand-pfm-yellow-bottom{background-image:linear-gradient(to bottom, #FFE13D, #FFC600) !important}[name=card] .card--bg--gradient-brand-pfm-yellow-top{background-image:linear-gradient(to top, #FFE13D, #FFC600) !important}[name=card] .card--bg--gradient-brand-pfm-orange-left{background-image:linear-gradient(to left, #FFB74D, #FC912E) !important}[name=card] .card--bg--gradient-brand-pfm-orange-right{background-image:linear-gradient(to right, #FFB74D, #FC912E) !important}[name=card] .card--bg--gradient-brand-pfm-orange{background-image:linear-gradient(to bottom, #FFB74D, #FC912E) !important}[name=card] .card--bg--gradient-brand-pfm-orange-bottom{background-image:linear-gradient(to bottom, #FFB74D, #FC912E) !important}[name=card] .card--bg--gradient-brand-pfm-orange-top{background-image:linear-gradient(to top, #FFB74D, #FC912E) !important}[name=card] .card--bg--gradient-brand-pfm-red-left{background-image:linear-gradient(to left, #DF5036, #B93C25) !important}[name=card] .card--bg--gradient-brand-pfm-red-right{background-image:linear-gradient(to right, #DF5036, #B93C25) !important}[name=card] .card--bg--gradient-brand-pfm-red{background-image:linear-gradient(to bottom, #DF5036, #B93C25) !important}[name=card] .card--bg--gradient-brand-pfm-red-bottom{background-image:linear-gradient(to bottom, #DF5036, #B93C25) !important}[name=card] .card--bg--gradient-brand-pfm-red-top{background-image:linear-gradient(to top, #DF5036, #B93C25) !important}.card{position:relative;display:flex;align-items:stretch;width:100%;height:inherit;border-style:solid;background-position:center center;background-repeat:no-repeat;background-size:cover;transition:background-color 150ms ease}.card__media,.card__content{position:relative;width:100%;padding:0;margin:0;border-radius:inherit;line-height:0;transition:all 150ms ease}.card__video{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.card__video--play{opacity:1}.card__media{height:100%;overflow:hidden}.card__media>*{height:inherit}.card__media img{-o-object-fit:cover !important;object-fit:cover !important}.card__media__container{position:relative;display:flex;align-items:center;flex-direction:column;justify-content:center;overflow:hidden}.card__media__container .card__media{display:flex;align-items:center;flex-direction:column;justify-content:center}.card__media__container .card__media>*{height:auto}.card__media__content{position:absolute;bottom:0}.card__media--top--left{position:absolute;z-index:1}.card__media--top--right{position:absolute;z-index:1}.card__media--bottom--left{position:absolute;z-index:1}.card__media--bottom--right{position:absolute;z-index:1}.card__content{display:flex;flex-direction:column;justify-content:space-between}.card__content--top{justify-content:flex-start}.card__content--center{justify-content:center}.card__content--bottom{justify-content:flex-end}.card--trailing-media{flex-direction:row-reverse}.card--media-only{min-width:100%}.card--media-only:before{display:block;padding-top:100%;content:\"\";}.card--no-border{border:none}.card--clickable{cursor:pointer}.card--has-overlay:before{position:absolute;left:0;top:0;width:100%;height:100%;background-image:linear-gradient(to bottom, transparent, #5E5E5E);content:\"\"}.card--has-overlay-media .card__media:before{position:absolute;left:0;top:0;width:100%;height:100%;content:\"\"}.card--vertical{flex-direction:column}.card--vertical.card--trailing-media{flex-direction:column-reverse}[name=card] .card.card{border-color:#D7D7D7;background-color:#FFFFFF}@media (hover: hover){[name=card] .card.card--clickable:hover{border-color:#A7A7A7;background-color:#FFFFFF}}[name=card] .card.card--has-overlay-media .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card] .card.card--has-overlay-media.card--media-content-only .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card] .card.card--primary{border-color:#F76700;background-color:#FFFFFF}@media (hover: hover){[name=card] .card.card--primary--clickable:hover{border-color:#F76700;background-color:#FFFFFF}}[name=card] .card.card--primary--has-overlay-media .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card] .card.card--primary--has-overlay-media.card--media-content-only .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card] .card.card--tertiary{border-color:#004885;background-color:#FFFFFF}@media (hover: hover){[name=card] .card.card--tertiary--clickable:hover{border-color:#004885;background-color:#FFFFFF}}[name=card] .card.card--tertiary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card--tertiary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card--quaternary{border-color:#96C11F;background-color:#FFFFFF}@media (hover: hover){[name=card] .card.card--quaternary--clickable:hover{border-color:#96C11F;background-color:#FFFFFF}}[name=card] .card.card--quaternary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card--quaternary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card--quinary{border-color:#EF7B0B;background-color:#FFFFFF}@media (hover: hover){[name=card] .card.card--quinary--clickable:hover{border-color:#EF7B0B;background-color:#FFFFFF}}[name=card] .card.card--quinary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card--quinary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card] .card.card{border-width:1px;border-radius:8px}[name=card] .card.card .card__content{padding:24px}[name=card] .card.card .card__media--top--left{left:24px;top:24px}[name=card] .card.card .card__media--top--right{right:24px;top:24px}[name=card] .card.card .card__media--bottom--left{left:24px;bottom:24px}[name=card] .card.card .card__media--bottom--right{right:24px;bottom:24px}[name=card] .card.card .card__media__content{padding:24px}[name=card] .card.card.card--media-content-only{border-radius:8px}[name=card] .card.card.card--media-content-only .card__media__container{border-radius:8px !important}[name=card] .card.card.card--no-border>.card__content{padding:25px}[name=card] .card.card.card--has-overlay:before{border-radius:8px}[name=card] .card.card.card--has-overlay-media .card__media{border-radius:8px 0 0 8px}[name=card] .card.card.card--has-overlay-media .card__media__container{border-radius:8px 0 0 8px}[name=card] .card.card.card--has-overlay-media .card__media:before{border-radius:8px 0 0 8px}[name=card] .card.card.card--has-overlay-media.card--vertical .card__media{border-radius:8px 8px 0 0}[name=card] .card.card.card--has-overlay-media.card--vertical .card__media__container{border-radius:8px 8px 0 0}[name=card] .card.card.card--has-overlay-media.card--vertical .card__media:before{border-radius:8px 8px 0 0}[name=card] .card.card.card--has-overlay-media.card--trailing-media .card__media{border-radius:0 8px 8px 0}[name=card] .card.card.card--has-overlay-media.card--trailing-media .card__media__container{border-radius:0 8px 8px 0}[name=card] .card.card.card--has-overlay-media.card--trailing-media .card__media:before{border-radius:0 8px 8px 0}[name=card] .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media{border-radius:0 0 8px 8px}[name=card] .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media__container{border-radius:0 0 8px 8px}[name=card] .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media:before{border-radius:0 0 8px 8px}[name=card] .card.card .card__video{border-radius:8px}[name=card] .card.card--sm{border-width:1px;border-radius:8px}[name=card] .card.card--sm .card__content{padding:12px}[name=card] .card.card--sm .card__media--top--left{left:12px;top:12px}[name=card] .card.card--sm .card__media--top--right{right:12px;top:12px}[name=card] .card.card--sm .card__media--bottom--left{left:12px;bottom:12px}[name=card] .card.card--sm .card__media--bottom--right{right:12px;bottom:12px}[name=card] .card.card--sm .card__media__content{padding:12px}[name=card] .card.card--sm.card--media-content-only{border-radius:8px}[name=card] .card.card--sm.card--media-content-only .card__media__container{border-radius:8px !important}[name=card] .card.card--sm.card--no-border>.card__content{padding:13px}[name=card] .card.card--sm.card--has-overlay:before{border-radius:8px}[name=card] .card.card--sm.card--has-overlay-media .card__media{border-radius:8px 0 0 8px}[name=card] .card.card--sm.card--has-overlay-media .card__media__container{border-radius:8px 0 0 8px}[name=card] .card.card--sm.card--has-overlay-media .card__media:before{border-radius:8px 0 0 8px}[name=card] .card.card--sm.card--has-overlay-media.card--vertical .card__media{border-radius:8px 8px 0 0}[name=card] .card.card--sm.card--has-overlay-media.card--vertical .card__media__container{border-radius:8px 8px 0 0}[name=card] .card.card--sm.card--has-overlay-media.card--vertical .card__media:before{border-radius:8px 8px 0 0}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media .card__media{border-radius:0 8px 8px 0}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media .card__media__container{border-radius:0 8px 8px 0}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media .card__media:before{border-radius:0 8px 8px 0}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media{border-radius:0 0 8px 8px}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media__container{border-radius:0 0 8px 8px}[name=card] .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media:before{border-radius:0 0 8px 8px}[name=card] .card.card--sm .card__video{border-radius:8px}[name=card].theme--dark .card.card{border-color:#D7D7D7;background-color:#FFFFFF}@media (hover: hover){[name=card].theme--dark .card.card--clickable:hover{border-color:#A7A7A7;background-color:#FFFFFF}}[name=card].theme--dark .card.card--has-overlay-media .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card].theme--dark .card.card--has-overlay-media.card--media-content-only .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card].theme--dark .card.card--primary{border-color:#F76700;background-color:#FFFFFF}@media (hover: hover){[name=card].theme--dark .card.card--primary--clickable:hover{border-color:#F76700;background-color:#FFFFFF}}[name=card].theme--dark .card.card--primary--has-overlay-media .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card].theme--dark .card.card--primary--has-overlay-media.card--media-content-only .card__media:before{background:transparent;background-color:transparent;opacity:0}[name=card].theme--dark .card.card--tertiary{border-color:#004885;background-color:#FFFFFF}@media (hover: hover){[name=card].theme--dark .card.card--tertiary--clickable:hover{border-color:#004885;background-color:#FFFFFF}}[name=card].theme--dark .card.card--tertiary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card--tertiary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card--quaternary{border-color:#96C11F;background-color:#FFFFFF}@media (hover: hover){[name=card].theme--dark .card.card--quaternary--clickable:hover{border-color:#96C11F;background-color:#FFFFFF}}[name=card].theme--dark .card.card--quaternary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card--quaternary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card--quinary{border-color:#EF7B0B;background-color:#FFFFFF}@media (hover: hover){[name=card].theme--dark .card.card--quinary--clickable:hover{border-color:#EF7B0B;background-color:#FFFFFF}}[name=card].theme--dark .card.card--quinary--has-overlay-media .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card--quinary--has-overlay-media.card--media-content-only .card__media:before{background:false;background-color:false;opacity:false}[name=card].theme--dark .card.card{border-width:1px;border-radius:8px}[name=card].theme--dark .card.card .card__content{padding:24px}[name=card].theme--dark .card.card .card__media--top--left{left:24px;top:24px}[name=card].theme--dark .card.card .card__media--top--right{right:24px;top:24px}[name=card].theme--dark .card.card .card__media--bottom--left{left:24px;bottom:24px}[name=card].theme--dark .card.card .card__media--bottom--right{right:24px;bottom:24px}[name=card].theme--dark .card.card .card__media__content{padding:24px}[name=card].theme--dark .card.card.card--media-content-only{border-radius:8px}[name=card].theme--dark .card.card.card--media-content-only .card__media__container{border-radius:8px !important}[name=card].theme--dark .card.card.card--no-border>.card__content{padding:25px}[name=card].theme--dark .card.card.card--has-overlay:before{border-radius:8px}[name=card].theme--dark .card.card.card--has-overlay-media .card__media{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card.card--has-overlay-media .card__media__container{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card.card--has-overlay-media .card__media:before{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card.card--has-overlay-media.card--vertical .card__media{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--vertical .card__media__container{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--vertical .card__media:before{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media .card__media{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media .card__media__container{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media .card__media:before{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media__container{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card.card--has-overlay-media.card--trailing-media.card--vertical .card__media:before{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card .card__video{border-radius:8px}[name=card].theme--dark .card.card--sm{border-width:1px;border-radius:8px}[name=card].theme--dark .card.card--sm .card__content{padding:12px}[name=card].theme--dark .card.card--sm .card__media--top--left{left:12px;top:12px}[name=card].theme--dark .card.card--sm .card__media--top--right{right:12px;top:12px}[name=card].theme--dark .card.card--sm .card__media--bottom--left{left:12px;bottom:12px}[name=card].theme--dark .card.card--sm .card__media--bottom--right{right:12px;bottom:12px}[name=card].theme--dark .card.card--sm .card__media__content{padding:12px}[name=card].theme--dark .card.card--sm.card--media-content-only{border-radius:8px}[name=card].theme--dark .card.card--sm.card--media-content-only .card__media__container{border-radius:8px !important}[name=card].theme--dark .card.card--sm.card--no-border>.card__content{padding:13px}[name=card].theme--dark .card.card--sm.card--has-overlay:before{border-radius:8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media .card__media{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media .card__media__container{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media .card__media:before{border-radius:8px 0 0 8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--vertical .card__media{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--vertical .card__media__container{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--vertical .card__media:before{border-radius:8px 8px 0 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media .card__media{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media .card__media__container{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media .card__media:before{border-radius:0 8px 8px 0}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media__container{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card--sm.card--has-overlay-media.card--trailing-media.card--vertical .card__media:before{border-radius:0 0 8px 8px}[name=card].theme--dark .card.card--sm .card__video{border-radius:8px}";

const ENOVOSCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickCard = createEvent(this, "clickCard", 7);
    this.trailingMedia = false; // Reverse media/content
    this.overlayMedia = '___SETTING_COMPONENTS_CARD_OVERLAY_MEDIA___';
    this.noBorder = false; // Remove card border
    this.overlay = false; // Display overlay
    this.videoPlay = false;
    this.videoAutoplay = false;
    this.videoLoop = false;
    this.clickable = false; // block
    this.direction = '___SETTING_COMPONENTS_CARD_DIRECTION___';
    this.classNames = {
      EL: 'card',
      MEDIA: '__media',
      CONTENT: '__content',
      VIDEO: '__video',
      CONTAINER: '__container',
      TRAILING_MEDIA: '--trailing-media',
      MEDIA_ONLY: '--media-only',
      MEDIA_CONTENT_ONLY: '--media-content-only',
      NO_BORDER: '--no-border',
      OVERLAY: '--has-overlay',
      OVERLAY_MEDIA: '--has-overlay-media',
      CLICKABLE: '--clickable',
      HORIZONTAL: '--horizontal',
      VERTICAL: '--vertical',
      TOP: '--top',
      BOTTOM: '--bottom',
      LEFT: '--left',
      RIGHT: '--right',
    };
  }
  /** INJECT_ANCHOR */
  async componentDidRender() {
    const cardMedia = this.el.querySelector(`[slot="card-media"]`);
    const cardMediaContent = this.el.querySelector(`[slot="card-media-content"]`);
    const cardMediaTopLeft = this.el.querySelector(`[slot="card-media-top-left"]`);
    const cardMediaTopRight = this.el.querySelector(`[slot="card-media-top-right"]`);
    const cardMediaBottomLeft = this.el.querySelector(`[slot="card-media-bottom-left"]`);
    const cardMediaBottomRight = this.el.querySelector(`[slot="card-media-bottom-right"]`);
    if (cardMedia) {
      let cardMediaClass = [`${this.classNames.EL}${this.classNames.MEDIA}`];
      cardMediaClass = cardMediaClass.concat(ComponentPropsHelper.setGlobalStyles(this.backgroundMedia, this.classNames.EL).split(' '));
      cardMedia.className = '';
      cardMedia.classList.add(...compact(cardMediaClass));
    }
    if (cardMediaContent) {
      const cardMediaContentClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTENT}`];
      cardMediaContent.classList.add(...compact(cardMediaContentClass));
    }
    if (cardMediaTopLeft) {
      const cardMediaTopLeftClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.TOP}${this.classNames.LEFT}`];
      cardMediaTopLeft.classList.add(...compact(cardMediaTopLeftClass));
    }
    if (cardMediaTopRight) {
      const cardMediaTopRightClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.TOP}${this.classNames.RIGHT}`];
      cardMediaTopRight.classList.add(...compact(cardMediaTopRightClass));
    }
    if (cardMediaBottomLeft) {
      const cardMediaBottomLeftClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.BOTTOM}${this.classNames.LEFT}`];
      cardMediaBottomLeft.classList.add(...compact(cardMediaBottomLeftClass));
    }
    if (cardMediaBottomRight) {
      const cardMediaBottomRightClass = [`${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.BOTTOM}${this.classNames.RIGHT}`];
      cardMediaBottomRight.classList.add(...compact(cardMediaBottomRightClass));
    }
    const cardContent = this.el.querySelector(`[slot="card-content"]`);
    if (cardContent) {
      let cardContentClass = [
        `${this.classNames.EL}${this.classNames.CONTENT}`,
        (['top', 'center', 'bottom'].includes(this.verticalAlignment)) ? `${this.classNames.EL}${this.classNames.CONTENT}--${this.verticalAlignment}` : '',
      ];
      cardContentClass = cardContentClass.concat(ComponentPropsHelper.setGlobalStyles(this.backgroundContent, this.classNames.EL).split(' '));
      cardContent.className = '';
      cardContent.classList.add(...compact(cardContentClass));
    }
    if (cardMedia && !cardContent && !cardMediaContent) {
      const card = this.el.querySelector(`.${this.classNames.EL}`);
      card.classList.add(`${this.classNames.EL}${this.classNames.MEDIA_ONLY}`);
    }
    if (cardMedia && !cardContent && cardMediaContent) {
      const card = this.el.querySelector(`.${this.classNames.EL}`);
      card.classList.add(`${this.classNames.EL}${this.classNames.MEDIA_CONTENT_ONLY}`);
    }
    if (this.videoLoop) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        video.videoLoop = true;
      }
    }
    if (this.videoAutoplay) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        video.videoAutoplay = true;
      }
    }
    if (this.videoPlay) {
      const video = this.el.querySelector(`.${this.classNames.EL}${this.classNames.VIDEO}`);
      if (video) {
        await video.play();
      }
    }
  }
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
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
    const sectionMedia = this.el.querySelector(`.${this.classNames.EL}${this.classNames.MEDIA}`);
    const sectionMediaContainer = this.el.querySelector(`.${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTAINER}`);
    const sectionContent = this.el.querySelector(`.${this.classNames.EL}${this.classNames.CONTENT}`);
    if (this.columns && this.columns > 0 && this.columnsMedia && this.columnsMedia > 0) {
      const widthLeft = (100 / this.columns) * this.columnsMedia;
      if (sectionMedia && sectionMediaContainer) {
        sectionMediaContainer.style.flex = `1 0 ${widthLeft}%`;
      }
      const widthRight = 100 - widthLeft;
      if (sectionContent) {
        sectionContent.style.flex = `1 0 ${widthRight}%`;
      }
    }
  }
  /**
   * @description Get card size
   */
  getSize() {
    return (this.size !== undefined) ? `${this.classNames.EL}--${this.size}` : '';
  }
  /** REMOVABLE START */
  render() {
    return (h("div", { class: [
        this.classNames.EL,
        (this.trailingMedia) ? `${this.classNames.EL}${this.classNames.TRAILING_MEDIA}` : '',
        (this.noBorder) ? `${this.classNames.EL}${this.classNames.NO_BORDER}` : '',
        (this.overlay) ? `${this.classNames.EL}${this.classNames.OVERLAY}` : '',
        (this.overlayMedia) ? `${this.classNames.EL}${this.classNames.OVERLAY_MEDIA}` : '',
        (this.clickable) ? `${this.classNames.EL}${this.classNames.CLICKABLE}` : '',
        (this.direction === 'vertical') ? `${this.classNames.EL}${this.classNames.VERTICAL}` : `${this.classNames.EL}${this.classNames.HORIZONTAL}`,
        this.getSize(),
        ComponentPropsHelper.setGlobalStyles(this.styles, this.classNames.EL),
      ].join(' '), onClick: () => (this.clickable) ? this.clickCard.emit() : false, style: (this.backgroundImage) ? { 'background-image': `url("${this.backgroundImage}")` } : {} }, h("div", { class: `${this.classNames.EL}${this.classNames.MEDIA}${this.classNames.CONTAINER}` }, h("slot", { name: "card-media" }), h("slot", { name: "card-media-content" }), h("slot", { name: "card-media-top-left" }), h("slot", { name: "card-media-top-right" }), h("slot", { name: "card-media-bottom-left" }), h("slot", { name: "card-media-bottom-right" })), h("slot", { name: "card-content" }), (this.video)
      ? h("eds-video", { type: "mp4", class: [
          `${this.classNames.EL}${this.classNames.VIDEO}`,
          (this.videoPlay) ? `${this.classNames.EL}${this.classNames.VIDEO}--play` : '',
        ].join(' '), cover: true, path: this.video })
      : ''));
  }
  get el() { return getElement(this); }
};
ENOVOSCard.style = cardCss;

const videoCss = "[name=video]{display:block;width:100%;height:100%;overflow:hidden}[name=video] .video{width:100%;height:100%}[name=video] .video.fullwidth{width:100vw;height:100vh;overflow:hidden;-o-object-fit:cover;object-fit:cover}[name=video] .video.fitted{position:absolute;-o-object-fit:contain;object-fit:contain}[name=video] .video.cover{-o-object-fit:cover;object-fit:cover}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){[name=video] .video{height:auto}[name=video] .video.fitted{top:50%;transform:translateY(-50%)}}";

const ENOVOSVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fitted = false;
    this.cover = false;
    this.playOnClick = false;
    this.videoFullWidth = false;
    this.videoMuted = false;
    this.videoLoop = false;
    this.videoControls = false;
    this.videoAutoplay = false;
    this.classNames = {
      EL: 'video',
    };
    this.video = undefined; // observer;
    this._videoObservable = undefined; // observer;
    this._clickHandler = undefined; // click event;
  }
  /** INJECT_ANCHOR */
  /**
   * Init the host element, move the dialog inside DOM to the body
   * The dialog is natively hidden
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
  async componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
    this.video = this.el.querySelector('video');
    this.setVideoAttributes();
    if (this.videoAutoplay === true) {
      this._videoObservable = new IsVisibleObservable(this.el, async (value) => {
        if (value === true) {
          await this.play();
          this._videoObservable.disconnectObserver();
        }
      }, {
        threshold: 0,
      });
    }
  }
  componentDidUpdate() {
    this.setVideoAttributes();
    if (this.videoAutoplay === false && this.video) {
      this.stop();
    }
  }
  async componentDidRender() {
    this.setVideoAttributes();
    if (this.videoAutoplay === true && this.video) {
      await this.play();
    }
    if (this.playOnClick === true) {
      this._clickHandler = new TapEvent(this.el, async () => {
        await this.play();
      });
    }
  }
  /**
   * @description Play the animation
   */
  async play() {
    if (this.video) {
      if (this.video.currentTime > 0) {
        this.video.pause();
        this.video.load();
        await this.video.play();
      }
      else {
        await this.video.play();
      }
    }
  }
  /**
   * @description Pause the animation
   */
  async pause() {
    if (this.video) {
      this.video.pause();
    }
  }
  /**
   * @description Stop the animation
   */
  async stop() {
    if (this.video) {
      this.video.pause();
      this.video.load();
    }
  }
  setVideoAttributes() {
    if (this.video) {
      if (this.videoAutoplay) {
        this.video.setAttribute('autoplay', true);
      }
      else if (this.video.hasAttribute('autoplay')) {
        this.video.removeAttribute('autoplay');
      }
      if (this.videoControls) {
        this.video.setAttribute('controls', true);
      }
      else if (this.video.hasAttribute('controls')) {
        this.video.removeAttribute('controls');
      }
      if (this.videoLoop) {
        this.video.setAttribute('loop', true);
      }
      else if (this.video.hasAttribute('loop')) {
        this.video.removeAttribute('loop');
      }
      if (this.videoMuted) {
        this.video.muted = true;
      }
      else if (this.video.hasAttribute('muted')) {
        this.video.muted = false;
      }
    }
  }
  getFullWidth() {
    if (this.videoFullWidth === true) {
      return 'fullwidth';
    }
  }
  getFitted() {
    if (this.fitted === true) {
      return 'fitted';
    }
  }
  getCover() {
    if (this.cover === true) {
      return 'cover';
    }
  }
  getType() {
    if (this.type) {
      return `video/${this.type}`;
    }
  }
  getClasses() {
    return [
      this.getFullWidth(),
      this.getFitted(),
      this.getCover(),
      this.classNames.EL,
    ].join(' ');
  }
  /** REMOVABLE START */
  render() {
    return (h("video", { height: this.height, width: this.width, poster: this.posterPath, preload: this.preload, class: this.getClasses(), muted: true, playsinline: true }, h("source", { src: this.path, type: this.getType() })));
  }
  get el() { return getElement(this); }
};
ENOVOSVideo.style = videoCss;

export { ENOVOSCard as eds_card, ENOVOSVideo as eds_video };
