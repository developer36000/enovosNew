import{r as e,c as t,h as s,g as i}from"./p-a84c2a87.js";import{o as h,s as o}from"./p-9cd879e2.js";import{T as d}from"./p-708526be.js";const n=class{constructor(s){e(this,s),this.closeSideSheetHandler=t(this,"closeSideSheetHandler",7),this.ignoreBackdropClick=!1,this.backdrop=!0,this.position="right",this.elevationStyle="dark",this.elevationLevel="4",this.backdropEl=void 0,this.availablePosition=["left","right","bottom right"],this.animationDuration=250,this._clickBackdropHandler=void 0,this.classNames={EL:"side-sheet",WRAPPER:"__wrapper",CONTENT:"__content",ON:"--on-",BACKDROP:"__backdrop",FADE_IN:"fade-in",OPEN:"--open"}}async open(){this.el.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`),this.createBackdrop()}async close(){this.el.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`),this.deleteBackdrop(),this.closeSideSheetHandler.emit()}handleTheme(){const e=e=>{Array.from(this.el.classList).filter(e=>e.startsWith("theme--")).forEach(e=>{this.el.classList.remove(e)}),this.el.classList.add("theme--"+e)};h("theme",()=>{e(o.get("theme"))}),e(o.get("theme"))}componentDidLoad(){this.handleTheme(),this.el.setAttribute("name",this.classNames.EL),this.el.classList.add(""+this.classNames.EL)}componentWillRender(){this.availablePosition.map(e=>{e.split(" ").map(e=>{this.el.classList.remove(`${this.classNames.EL}${this.classNames.ON}${e}`)})}),this.availablePosition.includes(this.position)&&this.position.split(" ").map(e=>{this.el.classList.add(`${this.classNames.EL}${this.classNames.ON}${e}`)}),void 0!==this.size&&null!==/\d+(%|px\b)/g.exec(this.size)&&(this.el.style.width=this.size)}createBackdrop(){!0===this.backdrop&&(this.backdropEl||(this.backdropEl=document.createElement("div"),this.backdropEl.className=`${this.classNames.EL}${this.classNames.BACKDROP}`,document.body.classList.add(`${this.classNames.EL}${this.classNames.OPEN}`),this.el.querySelector("."+this.classNames.EL).appendChild(this.backdropEl),this.handleEvent()),setTimeout(()=>{this.backdropEl.classList.add(""+this.classNames.FADE_IN)},1))}deleteBackdrop(){!0===this.backdrop&&(this.backdropEl.classList.remove(""+this.classNames.FADE_IN),setTimeout(()=>{this.backdropEl&&(this.el.querySelector("."+this.classNames.EL).removeChild(this.backdropEl),this.backdropEl=void 0,document.body.classList.remove(`${this.classNames.EL}${this.classNames.OPEN}`))},this.animationDuration))}handleEvent(){const e=this.el.querySelector(`.${this.classNames.EL}${this.classNames.BACKDROP}`);!1===this.ignoreBackdropClick&&e&&(this._clickBackdropHandler&&"object"==typeof this._clickBackdropHandler&&this._clickBackdropHandler.removeEvent(),this._clickBackdropHandler=new d(e,()=>{this.close()}))}render(){return s("eds-elevation",{styles:this.elevationStyle,level:this.elevationLevel,class:this.classNames.EL},s("div",{class:`${this.classNames.EL}${this.classNames.WRAPPER}`},s("div",{class:`${this.classNames.EL}${this.classNames.CONTENT}`},s("slot",null))))}get el(){return i(this)}};n.style="body.side-sheet--open{overflow:hidden}[name=side-sheet]{position:fixed;top:0;bottom:0;z-index:6002;display:block;width:50%;height:100%;opacity:0;visibility:hidden;transition:all 0.3s ease-in-out}[name=side-sheet].side-sheet--open{opacity:1;visibility:visible}[name=side-sheet].side-sheet--on-right{right:-100%}[name=side-sheet].side-sheet--on-right.side-sheet--open{right:0}[name=side-sheet].side-sheet--on-right.side-sheet--on-bottom{right:0;top:inherit;bottom:-100%}[name=side-sheet].side-sheet--on-right.side-sheet--on-bottom.side-sheet--open{bottom:0}[name=side-sheet].side-sheet--on-left{left:-100%}[name=side-sheet].side-sheet--on-left.side-sheet--open{left:0}[name=side-sheet] .side-sheet__wrapper{position:relative;z-index:2;display:flex;flex-direction:column;width:100%;height:100%;line-height:initial}[name=side-sheet] .side-sheet__content{height:100%;overflow-x:hidden;overflow-y:auto;opacity:1;visibility:visible;transition:all 0.3s ease-in-out;-ms-scroll-chaining:none;overscroll-behavior:none;-webkit-overflow-scrolling:touch}[name=side-sheet] .side-sheet__backdrop{position:fixed;left:0;top:0;z-index:1;width:100vw;height:100vh;opacity:0;transition:opacity 0.3s linear}[name=side-sheet] .side-sheet__backdrop.fade-in{opacity:0.5}[name=side-sheet].side-sheet:after{background-color:#FFFFFF}[name=side-sheet].side-sheet .side-sheet__wrapper{background-color:#FFFFFF}[name=side-sheet].side-sheet .side-sheet__backdrop{background-color:#6D7278}[name=side-sheet].theme--dark.side-sheet:after{background-color:#FFFFFF}[name=side-sheet].theme--dark.side-sheet .side-sheet__wrapper{background-color:#FFFFFF}[name=side-sheet].theme--dark.side-sheet .side-sheet__backdrop{background-color:#6D7278}";export{n as eds_side_sheet}