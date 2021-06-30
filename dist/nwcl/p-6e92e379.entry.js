import{r as t,h as n,g as i}from"./p-a84c2a87.js";import{o as a,s as e}from"./p-9cd879e2.js";const r=class{constructor(n){t(this,n),this.fluid=!1,this.fullHeight=!0,this.noPadding=!1,this.center=!1,this.classNames={EL:"container"}}handleTheme(){const t=t=>{Array.from(this.el.classList).filter(t=>t.startsWith("theme--")).forEach(t=>{this.el.classList.remove(t)}),this.el.classList.add("theme--"+t)};a("theme",()=>{t(e.get("theme"))}),t(e.get("theme"))}componentDidLoad(){this.handleTheme(),this.el.setAttribute("name",this.classNames.EL)}getCenter(){return this.center?this.classNames.EL+"--center":""}getFullHeight(){return this.fullHeight?this.classNames.EL+"--full-height":""}getFluid(){return this.fluid?this.classNames.EL+"--fluid":""}getNoPadding(){return this.noPadding?this.classNames.EL+"--no-padding":""}getSize(){return void 0!==this.size?`${this.classNames.EL}--${this.size}`:""}getFluidForce(){return void 0!==this.fluidForce?`${this.classNames.EL}--force-${this.fluidForce}`:""}render(){return n("div",{class:[this.classNames.EL,this.getFluid(),this.getNoPadding(),this.getCenter(),this.getSize(),this.getFullHeight(),this.getFluidForce()].join(" ")},n("slot",null))}get el(){return i(this)}};r.style="[name=container] .container{width:1440px;max-width:100%;margin:0 auto}[name=container] .container--fluid{width:100% !important}[name=container] .container--full-height{height:100%}[name=container] .container--no-padding{padding-left:0 !important;padding-right:0 !important}[name=container] .container.container--force-xlg,[name=container] .container.container--force-lg,[name=container] .container.container--force-md,[name=container] .container.container--force-sm{width:100% !important}[name=container] .container--xlg{width:1440px !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--xlg.container--force-xlg{width:100% !important}[name=container] .container--lg{width:100% !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--lg.container--force-lg{width:100% !important}[name=container] .container--md{width:864px !important;padding-left:16px !important;padding-right:16px !important}[name=container] .container--md.container--force-md{width:100% !important}[name=container] .container--sm{width:640px !important;padding-left:12px !important;padding-right:12px !important}[name=container] .container--sm.container--force-sm{width:100% !important}[name=container] .container--xs{width:calc(100% - (24px * 2)) !important;padding-left:24px !important;padding-right:24px !important;margin:0 auto !important}[name=container] .container--xxs{width:calc(100% - (24px * 2)) !important;padding-left:24px !important;padding-right:24px !important;margin:0 auto !important}@media (min-width: 1440px){[name=container] .container{width:1440px;padding-left:16px;padding-right:16px}}@media (max-width: 1439px){[name=container] .container{width:100%;padding-left:16px;padding-right:16px}}@media (max-width: 1151px){[name=container] .container{width:864px;padding-left:16px;padding-right:16px}}@media (max-width: 863px){[name=container] .container{width:640px;padding-left:12px;padding-right:12px}}@media (max-width: 639px){[name=container] .container{width:calc(100% - (24px * 2));padding-left:0;padding-right:0;margin:0 auto}}@media (max-width: 320px){[name=container] .container{width:calc(100% - (24px * 2));padding-left:0;padding-right:0;margin:0 auto}}";export{r as eds_container}