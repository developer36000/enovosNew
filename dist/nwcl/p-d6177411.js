import{b as n}from"./p-90c939fa.js";import{i as r,a as t}from"./p-75bc0e4e.js";import{i as e,t as u}from"./p-9e96164e.js";import{M as o}from"./p-2b6de01b.js";var i=/^(?:0|[1-9]\d*)$/;function a(n,r){var t=typeof n;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&i.test(n))&&n>-1&&n%1==0&&n<r}function f(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}function c(t){return r(t)&&"[object Arguments]"==n(t)}var s=Object.prototype,l=s.hasOwnProperty,p=s.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(n){return r(n)&&l.call(n,"callee")&&!p.call(n,"callee")},b=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,m=/^\w*$/;function d(n,r){if(e(n))return!1;var u=typeof n;return!("number"!=u&&"symbol"!=u&&"boolean"!=u&&null!=n&&!t(n))||m.test(n)||!b.test(n)||null!=r&&n in Object(r)}function y(n,r){if("function"!=typeof n||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var e=arguments,u=r?r.apply(this,e):e[0],o=t.cache;if(o.has(u))return o.get(u);var i=n.apply(this,e);return t.cache=o.set(u,i)||o,i};return t.cache=new(y.Cache||o),t}y.Cache=o;var j,g,h,w=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/\\(\\)?/g,x=(j=function(n){var r=[];return 46===n.charCodeAt(0)&&r.push(""),n.replace(w,(function(n,t,e,u){r.push(e?u.replace($,"$1"):t||n)})),r},g=y(j,(function(n){return 500===h.size&&h.clear(),n})),h=g.cache,g);function E(n,r){return e(n)?n:d(n,r)?[n]:x(u(n))}function O(n){if("string"==typeof n||t(n))return n;var r=n+"";return"0"==r&&1/n==-1/0?"-0":r}function k(n,r){for(var t=0,e=(r=E(r,n)).length;null!=n&&t<e;)n=n[O(r[t++])];return t&&t==e?n:void 0}function A(n,r,t){var e=null==n?void 0:k(n,r);return void 0===e?t:e}function M(n,r,t){for(var u=-1,o=(r=E(r,n)).length,i=!1;++u<o;){var c=O(r[u]);if(!(i=null!=n&&t(n,c)))break;n=n[c]}return i||++u!=o?i:!!(o=null==n?0:n.length)&&f(o)&&a(c,o)&&(e(n)||v(n))}export{f as a,k as b,v as c,a as d,E as e,A as g,M as h,d as i,O as t}