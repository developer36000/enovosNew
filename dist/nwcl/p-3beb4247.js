for(var r,n=(function(r){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);r.exports=function(){return n(t),t}}else{var o=new Array(16);r.exports=function(){for(var r,n=0;n<16;n++)0==(3&n)&&(r=4294967296*Math.random()),o[n]=r>>>((3&n)<<3)&255;return o}}}(r={exports:{}}),r.exports),t=[],o=0;o<256;++o)t[o]=(o+256).toString(16).substr(1);var e=function(r,o,e){var f=o&&e||0;"string"==typeof r&&(o="binary"===r?new Array(16):null,r=null);var a=(r=r||{}).random||(r.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,o)for(var y=0;y<16;++y)o[f+y]=a[y];return o||function(r,n){var o=n||0;return[t[r[o++]],t[r[o++]],t[r[o++]],t[r[o++]],"-",t[r[o++]],t[r[o++]],"-",t[r[o++]],t[r[o++]],"-",t[r[o++]],t[r[o++]],"-",t[r[o++]],t[r[o++]],t[r[o++]],t[r[o++]],t[r[o++]],t[r[o++]]].join("")}(a)};export{e as v}