import{r as t,h as i,g as s}from"./p-a84c2a87.js";import"./p-90c939fa.js";import"./p-75bc0e4e.js";import"./p-9e96164e.js";import"./p-53f148d3.js";import"./p-130f0ea0.js";import"./p-55fbfc8a.js";import"./p-db3dd3e2.js";import"./p-2b6de01b.js";import"./p-0a7ed1dd.js";import{b as e}from"./p-7b712a98.js";import{u as h}from"./p-763cc3ac.js";import"./p-07b360f8.js";import{s as r}from"./p-baeab690.js";import"./p-46f9fce3.js";import"./p-4a2417ad.js";import{d as p,g as a}from"./p-d6177411.js";import"./p-2015608a.js";import"./p-12645def.js";import{f as o}from"./p-8a654e44.js";import"./p-42efbddc.js";import"./p-c131701d.js";import{c}from"./p-d10ba972.js";import{c as d}from"./p-4f47901d.js";import{b as n}from"./p-e2889571.js";import"./p-acf9d4a9.js";import"./p-e51cf53b.js";import{b as m}from"./p-e410ff31.js";import{f as l}from"./p-5f02691b.js";import"./p-a1c472a5.js";import{f}from"./p-bc1c7e04.js";import{f as u}from"./p-a2cbaaea.js";import"./p-7d211186.js";import{m as j}from"./p-53a4e428.js";import{h as b}from"./p-c594624d.js";import{o as y,s as v}from"./p-9cd879e2.js";import{v as g}from"./p-3beb4247.js";var x=Array.prototype.splice;class k{constructor(t){if(t instanceof k)return t;this.uid=b(t,"id")?a(t,"id"):g();for(const i of Object.keys(t))this[i]=t[i]}getProp(t){return a(this,t)}hasProp(t){return b(this,t)}setProp(t,i){r(this,t,i)}}const C=class{constructor(i){t(this,i),this.data=[],this.size="sm",this.readOnly=!1,this.stacked=!1,this.trailingType="icon",this.trailingValue="times-circle",this.styles="tertiary",this.sizeAvatar="xxs",this.inputChipItems=[],this.classNames={EL:"input-chip",DROPDOWN:"__dropdown",ITEM:"__item",STACKED:"--stacked"},this.availableItems=[]}componentWillLoad(){this.setAvailableItems(this.data),this.setChipItems(),this.selectionControlType&&(this.selectionControls={type:this.selectionControlType,data:this.data})}handleTheme(){const t=t=>{Array.from(this.el.classList).filter(t=>t.startsWith("theme--")).forEach(t=>{this.el.classList.remove(t)}),this.el.classList.add("theme--"+t)};y("theme",()=>{t(v.get("theme"))}),t(v.get("theme"))}componentDidLoad(){this.handleTheme(),this.el.setAttribute("name",this.classNames.EL),this.setDropdownData()}clickTrailingHandler(t){t.detail.uid&&(this.selectChip(t.detail.uid,!1,void 0),"checkbox"===this.selectionControlType&&this.setDropdownData())}clickDropdownItemHandler(t){t.detail.uid&&this.selectChip(t.detail.uid,!0,void 0)}clickSelectionControlsItemHandler(t){b(t.detail,"currentItem.uid")&&this.selectChip(t.detail.currentItem.uid,!0===a(t.detail,"currentItem.selected"),t.detail.parent)}async setItems(t){this.data=t}watchHandler(t,i){t!==i&&(this.setAvailableItems(t),this.setChipItems(),this.selectionControlType&&(this.selectionControls={type:this.selectionControlType,data:this.data}),this.setDropdownData())}selectChip(t,i,s){const e=u(this.availableItems,i=>t===a(i,"uid"));if(e){if(!1===i)if("checkbox"===this.selectionControlType){if(this.removeCheckboxSelectedChip(t,i,e),s&&s.hasProp("children")&&s.getProp("children").length>0){this.removeSelectedChip(a(s,"uid"),i);const t=u(this.availableItems,t=>a(s,"uid")===a(t,"uid"));b(t,"children")&&t.children.length>0&&l(t.children,t=>!0===a(t,"selected")).map(t=>{this.setSelectedChip(t,!0)})}}else this.removeSelectedChip(t,i);else"checkbox"===this.selectionControlType?s&&s.hasProp("children")&&s.getProp("children").length>0&&l(s.getProp("children"),t=>!0===t.getProp("selected")).length===s.getProp("children").length?this.setCheckboxSelectedChip(u(this.availableItems,t=>a(s,"uid")===a(t,"uid"))):this.setCheckboxSelectedChip(e):this.setSelectedChip(e,!0);this.setDropdownData()}}setCheckboxSelectedChip(t){this.setSelectedChip(t,!0),b(t,"children")&&t.children.length>0&&t.children.map(i=>{this.removeSelectedChip(a(i,"uid"),!0===a(t,"selected"))})}updateAvailableItems(t,i){const s=f(this.availableItems,i=>t===a(i,"uid"));-1!==s&&r(this.availableItems[s],"selected",i)}setSelectedChip(t,i){this.updateAvailableItems(a(t,"uid"),i);const s=new k(t);this.formatChipItem(t,s),s.setProp("selected",i),s.setProp("readOnly",!!this.readOnly),this.inputChipItems=l([...this.inputChipItems,s],{selected:!0})}removeCheckboxSelectedChip(t,i,s){this.removeSelectedChip(t,i),b(s,"children")&&s.children.length>0&&s.children.map(t=>{this.removeSelectedChip(a(t,"uid"),!0===a(s,"selected"))})}removeSelectedChip(t,i){const s=u(this.inputChipItems,i=>t===i.getProp("uid"));s&&s.setProp("selected",i),this.updateAvailableItems(t,i),this.inputChipItems=function(t,i){var s=[];if(!t||!t.length)return s;var e=-1,h=[],r=t.length;for(i=n(i);++e<r;){var a=t[e];i(a,e,t)&&(s.push(a),h.push(e))}return function(t,i){for(var s=t?i.length:0,e=s-1;s--;){var h=i[s];if(s==e||h!==r){var r=h;p(h)?x.call(t,h,1):m(t,h)}}}(t,h),s}(this.inputChipItems,i=>t!==i.getProp("uid"))}setChipItems(){this.inputChipItems=[],Array.isArray(this.availableItems)&&this.availableItems.map(t=>{const i=new k(t);this.formatChipItem(t,i),r(t,"uid",i.getProp("uid")),i.setProp("readOnly",!!this.readOnly),!0===i.getProp("selected")&&this.inputChipItems.push(i)})}setAvailableItems(t){const i=e(t,4),s=h(o(j(i,"children")).slice().sort());this.availableItems=c(d(i,Array.isArray(s)?s:[]))}formatChipItem(t,i){b(t,"size")||i.setProp("size",this.size),b(t,"styles")||i.setProp("styles",this.styles),this.readOnly||(b(t,"trailingType")||i.setProp("trailing.type",this.trailingType),b(t,"trailingValue")||i.setProp("trailing.value",this.trailingValue)),b(t,"sizeAvatar")||i.setProp("sizeAvatar",this.sizeAvatar)}setDropdownData(){const t=this.el.querySelector(`.${this.classNames.EL}${this.classNames.DROPDOWN}`);t&&(this.selectionControls?(t.selectionControls={type:void 0,data:[]},t.selectionControls=this.selectionControls):(t.data=[],t.data=this.availableItems))}render(){return this.readOnly?i("eds-text-field",{"read-only":this.readOnly,"icon-leading":this.iconLeading,"icon-trailing":this.iconTrailing,type:"text",stacked:this.stacked,chips:this.inputChipItems}):i("eds-dropdown",{class:[`${this.classNames.EL}${this.classNames.DROPDOWN}`].join(" "),"autocomplete-on-focus":!0,selectionControls:this.selectionControls},i("div",{slot:"selector"},i("eds-text-field",{"icon-leading":this.iconLeading,"icon-trailing":this.iconTrailing,type:"text",stacked:this.stacked,chips:this.inputChipItems})))}get el(){return s(this)}static get watchers(){return{data:["watchHandler"]}}};C.style="[name=input-chip] .input-chip{display:flex;align-items:center;justify-content:flex-start}[name=input-chip] .input-chip__item:not(:last-child){margin-right:8px}[name=input-chip] .input-chip--stacked{flex-wrap:wrap}[name=input-chip] .input-chip--stacked .input-chip__item{margin-bottom:calc(4px + 1px)}";export{C as eds_input_chip}