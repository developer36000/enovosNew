let e,t,l,n=!1,o=!1,s=!1,i=!1,c=null,r=!1;const f="undefined"!=typeof window?window:{},a=f.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},d=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),p=(e,t,l)=>{l&&l.map(([l,n,o])=>{const s=b(e,l),i=m(t,o),c=h(l);u.ael(s,n,i,c),(t.o=t.o||[]).push(()=>u.rel(s,n,i,c))})},m=(e,t)=>l=>{256&e.t?e.s[t](l):(e.i=e.i||[]).push([t,l])},b=(e,t)=>8&t?f:e,h=e=>0!=(2&e),y=new WeakMap,w=e=>"sc-"+e.u,g={},v=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...l)=>{let n=null,o=null,s=null,i=!1,c=!1,r=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!v(n))&&(n+=""),i&&c?r[r.length-1].$+=n:r.push(i?j(null,n):n),c=i)};if(f(l),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=j(e,null);return a.p=t,r.length>0&&(a.m=r),a.h=o,a.g=s,a},j=(e,t)=>({t:0,v:e,$:t,k:null,m:null,p:null,h:null,g:null}),O={},S=(e,t,l,n,o,s)=>{if(l!==n){let i=ae(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=C(l),s=C(n);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=v(n);if((i||c&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{let o=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==o||(e[t]=o)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&s||o)&&!c&&e.setAttribute(t,n=!0===n?"":n)}else t="-"===t[2]?t.slice(3):ae(f,c)?c.slice(2):c[2]+t.slice(3),l&&u.rel(e,t,l,!1),n&&u.ael(e,t,n,!1)}},M=/\s/,C=e=>e?e.split(M):[],R=(e,t,l,n)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.p||g,i=t.p||g;for(n in s)n in i||S(o,n,s[n],void 0,l,t.t);for(n in i)S(o,n,s[n],i[n],l,t.t)},P=(o,c,r,f)=>{let u,d,$,p=c.m[r],m=0;if(n||(s=!0,"slot"===p.v&&(e&&f.classList.add(e+"-s"),p.t|=p.m?2:1)),null!==p.$)u=p.k=a.createTextNode(p.$);else if(1&p.t)u=p.k=a.createTextNode("");else{if(i||(i="svg"===p.v),u=p.k=a.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&p.t?"slot-fb":p.v),i&&"foreignObject"===p.v&&(i=!1),R(null,p,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),p.m)for(m=0;m<p.m.length;++m)d=P(o,p,m,u),d&&u.appendChild(d);"svg"===p.v?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=l,3&p.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=p.g||"",$=o&&o.m&&o.m[r],$&&$.v===p.v&&o.k&&T(o.k,!1)),u},T=(e,t)=>{u.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const o=n[e];o["s-hn"]!==l&&o["s-ol"]&&(D(o).insertBefore(o,U(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&T(o,t)}u.t&=-2},W=(e,t,n,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=P(null,n,s,e),c&&(o[s].k=c,r.insertBefore(c,U(t))))},x=(e,t,l,n,s)=>{for(;t<=l;++t)(n=e[t])&&(s=n.k,q(n),o=!0,s["s-ol"]?s["s-ol"].remove():T(s,!0),s.remove())},L=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),U=e=>e&&e["s-ol"]||e,D=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,E=(e,t)=>{const l=t.k=e.k,n=e.m,o=t.m,s=t.v,c=t.$;let r;null===c?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||R(e,t,i),null!==n&&null!==o?((e,t,l,n)=>{let o,s,i=0,c=0,r=0,f=0,a=t.length-1,u=t[0],d=t[a],$=n.length-1,p=n[0],m=n[$];for(;i<=a&&c<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==p)p=n[++c];else if(null==m)m=n[--$];else if(L(u,p))E(u,p),u=t[++i],p=n[++c];else if(L(d,m))E(d,m),d=t[--a],m=n[--$];else if(L(u,m))"slot"!==u.v&&"slot"!==m.v||T(u.k.parentNode,!1),E(u,m),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],m=n[--$];else if(L(d,p))"slot"!==u.v&&"slot"!==m.v||T(d.k.parentNode,!1),E(d,p),e.insertBefore(d.k,u.k),d=t[--a],p=n[++c];else{for(r=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===p.h){r=f;break}r>=0?(s=t[r],s.v!==p.v?o=P(t&&t[c],l,r,e):(E(s,p),t[r]=void 0,o=s.k),p=n[++c]):(o=P(t&&t[c],l,c,e),p=n[++c]),o&&D(u.k).insertBefore(o,U(u.k))}i>a?W(e,null==n[$+1]?null:n[$+1].k,l,n,c,$):c>$&&x(t,i,a)})(l,n,t,o):null!==o?(null!==e.$&&(l.textContent=""),W(l,null,t,o,0,o.length-1)):null!==n&&x(n,0,n.length-1),i&&"svg"===s&&(i=!1)):(r=l["s-cr"])?r.parentNode.textContent=c:e.$!==c&&(l.data=c)},A=e=>{let t,l,n,o,s,i,c=e.childNodes;for(l=0,n=c.length;l<n;l++)if(t=c[l],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<n;o++)if(c[o]["s-hn"]!==t["s-hn"])if(i=c[o].nodeType,""!==s){if(1===i&&s===c[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==c[o].textContent.trim()){t.hidden=!0;break}A(t)}},F=[],H=e=>{let t,l,n,s,i,c,r=0,f=e.childNodes,a=f.length;for(;r<a;r++){if(t=f[r],t["s-sr"]&&(l=t["s-cr"]))for(n=l.parentNode.childNodes,s=t["s-sn"],c=n.length-1;c>=0;c--)l=n[c],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(N(l,s)?(i=F.find(e=>e.j===l),o=!0,l["s-sn"]=l["s-sn"]||s,i?i.O=t:F.push({O:t,j:l}),l["s-sr"]&&F.map(e=>{N(e.j,l["s-sn"])&&(i=F.find(e=>e.j===l),i&&!e.O&&(e.O=i.O))})):F.some(e=>e.j===l)||F.push({j:l}));1===t.nodeType&&H(t)}},N=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,q=e=>{e.p&&e.p.ref&&e.p.ref(null),e.m&&e.m.map(q)},V=e=>ce(e).S,_=(e,t,l)=>{const n=V(e);return{emit:e=>z(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},z=(e,t,l)=>{const n=u.ce(t,l);return e.dispatchEvent(n),n},B=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},G=(e,t)=>{if(e.t|=16,!(4&e.t))return B(e,e.C),ve(()=>I(e,t));e.t|=512},I=(e,t)=>{const l=e.s;let n;return t?(e.t|=256,e.i&&(e.i.map(([e,t])=>ee(l,e,t)),e.i=null),n=ee(l,"componentWillLoad")):n=ee(l,"componentWillUpdate"),n=te(n,()=>ee(l,"componentWillRender")),te(n,()=>J(e,l,t))},J=async(i,c,r)=>{const f=i.S,d=f["s-rc"];r&&(e=>{const t=e.R,l=e.S,n=t.t,o=((e,t)=>{let l=w(t),n=pe.get(l);if(e=11===e.nodeType?e:a,n)if("string"==typeof n){let t,o=y.get(e=e.head||e);o||y.set(e,o=new Set),o.has(l)||(t=a.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=o,l.classList.add(o+"-h"))})(i);((i,c)=>{const r=i.S,f=i.R,d=i.P||j(null,null),$=(e=>e&&e.v===O)(c)?c:k(null,null,c);if(l=r.tagName,f.T&&($.p=$.p||{},f.T.map(([e,t])=>$.p[t]=r[e])),$.v=null,$.t|=4,i.P=$,$.k=d.k=r.shadowRoot||r,e=r["s-sc"],t=r["s-cr"],n=0!=(1&f.t),o=!1,E(d,$),u.t|=1,s){let e,t,l,n,o,s;H($.k);let i=0;for(;i<F.length;i++)e=F[i],t=e.j,t["s-ol"]||(l=a.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<F.length;i++)if(e=F[i],t=e.j,e.O){for(n=e.O.parentNode,o=e.O.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(s=l["s-nr"],s&&s["s-sn"]===t["s-sn"]&&n===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&n!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&A($.k),u.t&=-2,F.length=0})(i,K(i,c)),d&&(d.map(e=>e()),f["s-rc"]=void 0);{const e=f["s-p"],t=()=>X(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},K=(e,t)=>{try{c=t,t=t.render(),e.t&=-17,e.t|=2}catch(e){ue(e)}return c=null,t},Q=()=>c,X=e=>{const t=e.S,l=e.s,n=e.C;ee(l,"componentDidRender"),64&e.t?ee(l,"componentDidUpdate"):(e.t|=64,le(t),ee(l,"componentDidLoad"),e.W(t),n||Z()),e.L(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ge(()=>G(e,!1)),e.t&=-517},Y=e=>{{const t=ce(e),l=t.S.isConnected;return l&&2==(18&t.t)&&G(t,!1),l}},Z=()=>{le(a.documentElement),ge(()=>z(f,"appload",{detail:{namespace:"nwcl"}}))},ee=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){ue(e)}},te=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),ne=(e,t,l)=>{if(t.U){e.watchers&&(t.D=e.watchers);const n=Object.entries(t.U),o=e.prototype;if(n.map(([e,[n]])=>{31&n||2&l&&32&n?Object.defineProperty(o,e,{get(){return((e,t)=>ce(this).A.get(t))(0,e)},set(l){((e,t,l,n)=>{const o=ce(e),s=o.A.get(t),i=o.t,c=o.s;if(l=((e,t)=>null==e||v(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.U[t][0]),!(8&i&&void 0!==s||l===s)&&(o.A.set(t,l),c)){if(n.D&&128&i){const e=n.D[t];e&&e.map(e=>{try{c[e](l,s,t)}catch(e){ue(e)}})}2==(18&i)&&G(o,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0}):1&l&&64&n&&Object.defineProperty(o,e,{value(...t){const l=ce(this);return l.F.then(()=>l.s[e](...t))}})}),1&l){const l=new Map;o.attributeChangedCallback=function(e,t,n){u.jmp(()=>{const t=l.get(e);this[t]=(null!==n||"boolean"!=typeof this[t])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return l.set(o,e),512&n[0]&&t.T.push([e,o]),o})}}return e},oe=e=>{ee(e,"connectedCallback")},se=(e,t={})=>{const l=[],n=t.exclude||[],o=f.customElements,s=a.head,i=s.querySelector("meta[charset]"),c=a.createElement("style"),r=[];let d,m=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],U:t[2],H:t[3]};s.U=t[2],s.H=t[3],s.T=[],s.D={};const i=s.u,c=class extends HTMLElement{constructor(e){super(e),fe(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),m?r.push(this):u.jmp(()=>(e=>{if(0==(1&u.t)){const t=ce(e),l=t.R,n=()=>{};if(1&t.t)p(e,t,l.H),oe(t.s);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){B(t,t.C=l);break}}l.U&&Object.entries(l.U).map(([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}}),(async(e,t,l,n,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=$e(l)).then){const e=()=>{};o=await o,e()}o.isProxied||(l.D=o.watchers,ne(o,l,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){ue(e)}t.t&=-9,t.t|=128,e(),oe(t.s)}if(o.style){let e=o.style;const t=w(l);if(!pe.has(t)){const n=()=>{};((e,t,l)=>{let n=pe.get(e);$&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,pe.set(e,n)})(t,e,!!(1&l.t)),n()}}}const s=t.C,i=()=>G(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,l)}n()}})(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=ce(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),ee(t,"disconnectedCallback")}})())}componentOnReady(){return ce(this).N}};s.q=e[0],n.includes(i)||o.get(i)||(l.push(i),o.define(i,ne(c,s,1)))})),c.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,i?i.nextSibling:s.firstChild),m=!1,r.length?r.map(e=>e.connectedCallback()):u.jmp(()=>d=setTimeout(Z,30))},ie=new WeakMap,ce=e=>ie.get(e),re=(e,t)=>ie.set(t.s=e,t),fe=(e,t)=>{const l={t:0,S:e,R:t,A:new Map};return l.F=new Promise(e=>l.L=e),l.N=new Promise(e=>l.W=e),e["s-p"]=[],e["s-rc"]=[],p(e,l,t.H),ie.set(e,l)},ae=(e,t)=>t in e,ue=e=>console.error(e),de=new Map,$e=e=>{const t=e.u.replace(/-/g,"_"),l=e.q,n=de.get(l);return n?n[t]:import(`./${l}.entry.js`).then(e=>(de.set(l,e),e[t]),ue)},pe=new Map,me=[],be=[],he=(e,t)=>l=>{e.push(l),r||(r=!0,t&&4&u.t?ge(we):u.raf(we))},ye=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ue(e)}e.length=0},we=()=>{ye(me),ye(be),(r=me.length>0)&&u.raf(we)},ge=e=>d().then(e),ve=he(be,!0);export{O as H,Q as a,se as b,_ as c,Y as f,V as g,k as h,d as p,re as r}