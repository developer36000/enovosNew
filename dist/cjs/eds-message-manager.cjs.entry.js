'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c23a1aa0.js');
require('./_baseGetTag-1e305d19.js');
require('./isSymbol-04330316.js');
require('./toString-a99a8519.js');
require('./isObject-110b878e.js');
require('./identity-f5a941be.js');
require('./_MapCache-df8c2fa4.js');
require('./_baseIsEqual-c7788197.js');
require('./_hasPath-fb5594fa.js');
require('./_arrayPush-d8c0eb40.js');
require('./_setToArray-21e6bd5a.js');
require('./_baseIteratee-1cf7cbd5.js');
require('./_baseProperty-8fb55bc0.js');
require('./_baseEach-0b5062cd.js');
const filter = require('./filter-60267546.js');
const has = require('./has-c1d0fffa.js');
const message = require('./message-10c11095.js');
const themes = require('./themes-bd258a0a.js');
const anime_es = require('./anime.es-f0c8bd08.js');
require('./v4-378e0891.js');
const ComponentPropsHelper = require('./ComponentPropsHelper-fe2f4a61.js');

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

const managerCss = "[name=message-manager] [name=message-manager]{position:fixed;left:50%;z-index:8000;width:100%;padding:8px 0;transform:translateX(-50%)}[name=message-manager] [name=message-manager][position=top]{top:0}[name=message-manager] [name=message-manager][position=top] .message-manager__item{top:-50px}[name=message-manager] [name=message-manager][position=bottom]{bottom:0}[name=message-manager] [name=message-manager][position=bottom] .message-manager__item{bottom:-50px}[name=message-manager].message-manager--margin--0 [name=message-manager][position=top]{top:0px !important}[name=message-manager].message-manager--margin--0 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--0 [name=message-manager][position=bottom]{bottom:0px !important}[name=message-manager].message-manager--margin--0 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--1 [name=message-manager][position=top]{top:8px !important}[name=message-manager].message-manager--margin--1 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--1 [name=message-manager][position=bottom]{bottom:8px !important}[name=message-manager].message-manager--margin--1 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--2 [name=message-manager][position=top]{top:16px !important}[name=message-manager].message-manager--margin--2 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--2 [name=message-manager][position=bottom]{bottom:16px !important}[name=message-manager].message-manager--margin--2 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--3 [name=message-manager][position=top]{top:24px !important}[name=message-manager].message-manager--margin--3 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--3 [name=message-manager][position=bottom]{bottom:24px !important}[name=message-manager].message-manager--margin--3 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--4 [name=message-manager][position=top]{top:32px !important}[name=message-manager].message-manager--margin--4 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--4 [name=message-manager][position=bottom]{bottom:32px !important}[name=message-manager].message-manager--margin--4 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--5 [name=message-manager][position=top]{top:40px !important}[name=message-manager].message-manager--margin--5 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--5 [name=message-manager][position=bottom]{bottom:40px !important}[name=message-manager].message-manager--margin--5 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--6 [name=message-manager][position=top]{top:48px !important}[name=message-manager].message-manager--margin--6 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--6 [name=message-manager][position=bottom]{bottom:48px !important}[name=message-manager].message-manager--margin--6 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--7 [name=message-manager][position=top]{top:56px !important}[name=message-manager].message-manager--margin--7 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--7 [name=message-manager][position=bottom]{bottom:56px !important}[name=message-manager].message-manager--margin--7 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--8 [name=message-manager][position=top]{top:64px !important}[name=message-manager].message-manager--margin--8 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--8 [name=message-manager][position=bottom]{bottom:64px !important}[name=message-manager].message-manager--margin--8 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--9 [name=message-manager][position=top]{top:72px !important}[name=message-manager].message-manager--margin--9 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--9 [name=message-manager][position=bottom]{bottom:72px !important}[name=message-manager].message-manager--margin--9 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--10 [name=message-manager][position=top]{top:80px !important}[name=message-manager].message-manager--margin--10 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--10 [name=message-manager][position=bottom]{bottom:80px !important}[name=message-manager].message-manager--margin--10 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--11 [name=message-manager][position=top]{top:88px !important}[name=message-manager].message-manager--margin--11 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--11 [name=message-manager][position=bottom]{bottom:88px !important}[name=message-manager].message-manager--margin--11 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--12 [name=message-manager][position=top]{top:96px !important}[name=message-manager].message-manager--margin--12 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--12 [name=message-manager][position=bottom]{bottom:96px !important}[name=message-manager].message-manager--margin--12 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--13 [name=message-manager][position=top]{top:104px !important}[name=message-manager].message-manager--margin--13 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--13 [name=message-manager][position=bottom]{bottom:104px !important}[name=message-manager].message-manager--margin--13 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--14 [name=message-manager][position=top]{top:112px !important}[name=message-manager].message-manager--margin--14 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--14 [name=message-manager][position=bottom]{bottom:112px !important}[name=message-manager].message-manager--margin--14 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--15 [name=message-manager][position=top]{top:120px !important}[name=message-manager].message-manager--margin--15 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--15 [name=message-manager][position=bottom]{bottom:120px !important}[name=message-manager].message-manager--margin--15 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--16 [name=message-manager][position=top]{top:128px !important}[name=message-manager].message-manager--margin--16 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--16 [name=message-manager][position=bottom]{bottom:128px !important}[name=message-manager].message-manager--margin--16 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--17 [name=message-manager][position=top]{top:136px !important}[name=message-manager].message-manager--margin--17 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--17 [name=message-manager][position=bottom]{bottom:136px !important}[name=message-manager].message-manager--margin--17 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--18 [name=message-manager][position=top]{top:144px !important}[name=message-manager].message-manager--margin--18 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--18 [name=message-manager][position=bottom]{bottom:144px !important}[name=message-manager].message-manager--margin--18 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--19 [name=message-manager][position=top]{top:152px !important}[name=message-manager].message-manager--margin--19 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--19 [name=message-manager][position=bottom]{bottom:152px !important}[name=message-manager].message-manager--margin--19 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--20 [name=message-manager][position=top]{top:160px !important}[name=message-manager].message-manager--margin--20 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--20 [name=message-manager][position=bottom]{bottom:160px !important}[name=message-manager].message-manager--margin--20 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--21 [name=message-manager][position=top]{top:168px !important}[name=message-manager].message-manager--margin--21 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--21 [name=message-manager][position=bottom]{bottom:168px !important}[name=message-manager].message-manager--margin--21 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--22 [name=message-manager][position=top]{top:176px !important}[name=message-manager].message-manager--margin--22 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--22 [name=message-manager][position=bottom]{bottom:176px !important}[name=message-manager].message-manager--margin--22 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--23 [name=message-manager][position=top]{top:184px !important}[name=message-manager].message-manager--margin--23 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--23 [name=message-manager][position=bottom]{bottom:184px !important}[name=message-manager].message-manager--margin--23 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--24 [name=message-manager][position=top]{top:192px !important}[name=message-manager].message-manager--margin--24 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--24 [name=message-manager][position=bottom]{bottom:192px !important}[name=message-manager].message-manager--margin--24 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--25 [name=message-manager][position=top]{top:200px !important}[name=message-manager].message-manager--margin--25 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--25 [name=message-manager][position=bottom]{bottom:200px !important}[name=message-manager].message-manager--margin--25 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--26 [name=message-manager][position=top]{top:208px !important}[name=message-manager].message-manager--margin--26 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--26 [name=message-manager][position=bottom]{bottom:208px !important}[name=message-manager].message-manager--margin--26 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--27 [name=message-manager][position=top]{top:216px !important}[name=message-manager].message-manager--margin--27 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--27 [name=message-manager][position=bottom]{bottom:216px !important}[name=message-manager].message-manager--margin--27 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--28 [name=message-manager][position=top]{top:224px !important}[name=message-manager].message-manager--margin--28 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--28 [name=message-manager][position=bottom]{bottom:224px !important}[name=message-manager].message-manager--margin--28 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--29 [name=message-manager][position=top]{top:232px !important}[name=message-manager].message-manager--margin--29 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--29 [name=message-manager][position=bottom]{bottom:232px !important}[name=message-manager].message-manager--margin--29 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--30 [name=message-manager][position=top]{top:240px !important}[name=message-manager].message-manager--margin--30 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--30 [name=message-manager][position=bottom]{bottom:240px !important}[name=message-manager].message-manager--margin--30 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--31 [name=message-manager][position=top]{top:248px !important}[name=message-manager].message-manager--margin--31 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--31 [name=message-manager][position=bottom]{bottom:248px !important}[name=message-manager].message-manager--margin--31 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--32 [name=message-manager][position=top]{top:256px !important}[name=message-manager].message-manager--margin--32 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--32 [name=message-manager][position=bottom]{bottom:256px !important}[name=message-manager].message-manager--margin--32 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--33 [name=message-manager][position=top]{top:264px !important}[name=message-manager].message-manager--margin--33 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--33 [name=message-manager][position=bottom]{bottom:264px !important}[name=message-manager].message-manager--margin--33 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--34 [name=message-manager][position=top]{top:272px !important}[name=message-manager].message-manager--margin--34 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--34 [name=message-manager][position=bottom]{bottom:272px !important}[name=message-manager].message-manager--margin--34 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--35 [name=message-manager][position=top]{top:280px !important}[name=message-manager].message-manager--margin--35 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--35 [name=message-manager][position=bottom]{bottom:280px !important}[name=message-manager].message-manager--margin--35 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--36 [name=message-manager][position=top]{top:288px !important}[name=message-manager].message-manager--margin--36 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--36 [name=message-manager][position=bottom]{bottom:288px !important}[name=message-manager].message-manager--margin--36 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--37 [name=message-manager][position=top]{top:296px !important}[name=message-manager].message-manager--margin--37 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--37 [name=message-manager][position=bottom]{bottom:296px !important}[name=message-manager].message-manager--margin--37 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--38 [name=message-manager][position=top]{top:304px !important}[name=message-manager].message-manager--margin--38 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--38 [name=message-manager][position=bottom]{bottom:304px !important}[name=message-manager].message-manager--margin--38 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--39 [name=message-manager][position=top]{top:312px !important}[name=message-manager].message-manager--margin--39 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--39 [name=message-manager][position=bottom]{bottom:312px !important}[name=message-manager].message-manager--margin--39 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--40 [name=message-manager][position=top]{top:320px !important}[name=message-manager].message-manager--margin--40 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--40 [name=message-manager][position=bottom]{bottom:320px !important}[name=message-manager].message-manager--margin--40 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--41 [name=message-manager][position=top]{top:328px !important}[name=message-manager].message-manager--margin--41 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--41 [name=message-manager][position=bottom]{bottom:328px !important}[name=message-manager].message-manager--margin--41 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--42 [name=message-manager][position=top]{top:336px !important}[name=message-manager].message-manager--margin--42 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--42 [name=message-manager][position=bottom]{bottom:336px !important}[name=message-manager].message-manager--margin--42 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--43 [name=message-manager][position=top]{top:344px !important}[name=message-manager].message-manager--margin--43 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--43 [name=message-manager][position=bottom]{bottom:344px !important}[name=message-manager].message-manager--margin--43 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--44 [name=message-manager][position=top]{top:352px !important}[name=message-manager].message-manager--margin--44 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--44 [name=message-manager][position=bottom]{bottom:352px !important}[name=message-manager].message-manager--margin--44 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--45 [name=message-manager][position=top]{top:360px !important}[name=message-manager].message-manager--margin--45 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--45 [name=message-manager][position=bottom]{bottom:360px !important}[name=message-manager].message-manager--margin--45 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--46 [name=message-manager][position=top]{top:368px !important}[name=message-manager].message-manager--margin--46 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--46 [name=message-manager][position=bottom]{bottom:368px !important}[name=message-manager].message-manager--margin--46 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--47 [name=message-manager][position=top]{top:376px !important}[name=message-manager].message-manager--margin--47 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--47 [name=message-manager][position=bottom]{bottom:376px !important}[name=message-manager].message-manager--margin--47 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--48 [name=message-manager][position=top]{top:384px !important}[name=message-manager].message-manager--margin--48 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--48 [name=message-manager][position=bottom]{bottom:384px !important}[name=message-manager].message-manager--margin--48 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--49 [name=message-manager][position=top]{top:392px !important}[name=message-manager].message-manager--margin--49 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--49 [name=message-manager][position=bottom]{bottom:392px !important}[name=message-manager].message-manager--margin--49 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager].message-manager--margin--50 [name=message-manager][position=top]{top:400px !important}[name=message-manager].message-manager--margin--50 [name=message-manager][position=top] .message-manager__item{top:0}[name=message-manager].message-manager--margin--50 [name=message-manager][position=bottom]{bottom:400px !important}[name=message-manager].message-manager--margin--50 [name=message-manager][position=bottom] .message-manager__item{bottom:0}[name=message-manager] .message-manager{display:flex;flex-direction:column;width:100%}[name=message-manager] .message-manager:not(:last-child){margin-bottom:8px}[name=message-manager] .message-manager__item{position:relative;display:flex;align-items:center;justify-content:center;opacity:0}[name=message-manager] .message-manager__item:not(:last-child){margin-bottom:8px}@media (min-width : 1440px){[name=message-manager]{max-width:1440px}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"5\"] [name=message-manager]{width:calc( ((5 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"5\"][columns-fluid] [name=message-manager]{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"6\"] [name=message-manager]{width:calc( ((6 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"6\"][columns-fluid] [name=message-manager]{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"7\"] [name=message-manager]{width:calc( ((7 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"7\"][columns-fluid] [name=message-manager]{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"8\"] [name=message-manager]{width:calc( ((8 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"8\"][columns-fluid] [name=message-manager]{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"9\"] [name=message-manager]{width:calc( ((9 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"9\"][columns-fluid] [name=message-manager]{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"10\"] [name=message-manager]{width:calc( ((10 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"10\"][columns-fluid] [name=message-manager]{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"11\"] [name=message-manager]{width:calc( ((11 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"11\"][columns-fluid] [name=message-manager]{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"12\"] [name=message-manager]{width:calc( ((12 / 12) * 1440px) - ( 2 * 16px) );max-width:1440px;padding:8px 0}[name=message-manager][columns=\"12\"][columns-fluid] [name=message-manager]{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1440px;padding:8px 0}}@media (max-width : 1439px){[name=message-manager]{max-width:1152px}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"5\"] [name=message-manager]{width:calc( ((5 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"5\"][columns-fluid] [name=message-manager]{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"6\"] [name=message-manager]{width:calc( ((6 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"6\"][columns-fluid] [name=message-manager]{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"7\"] [name=message-manager]{width:calc( ((7 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"7\"][columns-fluid] [name=message-manager]{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"8\"] [name=message-manager]{width:calc( ((8 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"8\"][columns-fluid] [name=message-manager]{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"9\"] [name=message-manager]{width:calc( ((9 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"9\"][columns-fluid] [name=message-manager]{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"10\"] [name=message-manager]{width:calc( ((10 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"10\"][columns-fluid] [name=message-manager]{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"11\"] [name=message-manager]{width:calc( ((11 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"11\"][columns-fluid] [name=message-manager]{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"12\"] [name=message-manager]{width:calc( ((12 / 12) * 1152px) - ( 2 * 16px) );max-width:1152px;padding:8px 0}[name=message-manager][columns=\"12\"][columns-fluid] [name=message-manager]{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:1152px;padding:8px 0}}@media (max-width : 1151px){[name=message-manager]{max-width:864px}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"5\"] [name=message-manager]{width:calc( ((5 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"5\"][columns-fluid] [name=message-manager]{width:calc( ((5 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"6\"] [name=message-manager]{width:calc( ((6 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"6\"][columns-fluid] [name=message-manager]{width:calc( ((6 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"7\"] [name=message-manager]{width:calc( ((7 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"7\"][columns-fluid] [name=message-manager]{width:calc( ((7 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"8\"] [name=message-manager]{width:calc( ((8 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"8\"][columns-fluid] [name=message-manager]{width:calc( ((8 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"9\"] [name=message-manager]{width:calc( ((9 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"9\"][columns-fluid] [name=message-manager]{width:calc( ((9 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"10\"] [name=message-manager]{width:calc( ((10 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"10\"][columns-fluid] [name=message-manager]{width:calc( ((10 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"11\"] [name=message-manager]{width:calc( ((11 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"11\"][columns-fluid] [name=message-manager]{width:calc( ((11 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"12\"] [name=message-manager]{width:calc( ((12 / 12) * 864px) - ( 2 * 16px) );max-width:864px;padding:8px 0}[name=message-manager][columns=\"12\"][columns-fluid] [name=message-manager]{width:calc( ((12 / 12) * 100%) - ( 2 * 16px) );max-width:864px;padding:8px 0}}@media (max-width : 863px){[name=message-manager]{max-width:640px}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"5\"] [name=message-manager]{width:calc( ((5 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"5\"][columns-fluid] [name=message-manager]{width:calc( ((5 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"6\"] [name=message-manager]{width:calc( ((6 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"6\"][columns-fluid] [name=message-manager]{width:calc( ((6 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"7\"] [name=message-manager]{width:calc( ((7 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"7\"][columns-fluid] [name=message-manager]{width:calc( ((7 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"8\"] [name=message-manager]{width:calc( ((8 / 8) * 640px) - ( 2 * 12px) );max-width:640px;padding:8px 0}[name=message-manager][columns=\"8\"][columns-fluid] [name=message-manager]{width:calc( ((8 / 8) * 100%) - ( 2 * 12px) );max-width:640px;padding:8px 0}}@media (max-width : 639px){[name=message-manager]{max-width:321px}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 4) * 321px) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 4) * 321px) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 4) * 321px) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 4) * 321px) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 4) * 321px) - ( 2 * 24px) );max-width:321px;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:321px;padding:8px 0}}@media (max-width : 320px){[name=message-manager]{max-width:0}[name=message-manager][columns=\"0\"] [name=message-manager]{width:calc( ((0 / 4) * 0) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"0\"][columns-fluid] [name=message-manager]{width:calc( ((0 / 4) * 100%) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"1\"] [name=message-manager]{width:calc( ((1 / 4) * 0) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"1\"][columns-fluid] [name=message-manager]{width:calc( ((1 / 4) * 100%) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"2\"] [name=message-manager]{width:calc( ((2 / 4) * 0) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"2\"][columns-fluid] [name=message-manager]{width:calc( ((2 / 4) * 100%) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"3\"] [name=message-manager]{width:calc( ((3 / 4) * 0) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"3\"][columns-fluid] [name=message-manager]{width:calc( ((3 / 4) * 100%) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"4\"] [name=message-manager]{width:calc( ((4 / 4) * 0) - ( 2 * 24px) );max-width:0;padding:8px 0}[name=message-manager][columns=\"4\"][columns-fluid] [name=message-manager]{width:calc( ((4 / 4) * 100%) - ( 2 * 24px) );max-width:0;padding:8px 0}}";

const ENOVOSMessageManager = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickMessageButtonItem = index.createEvent(this, "clickMessageButtonItem", 7);
    this.columnsFluid = false;
    this.messagesQueue = [];
    this.animationDuration = 400; // ms
    this.classNames = {
      EL: 'message-manager',
      ITEM: '__item',
      ICON_CLEANING: '__icon--cleaning',
      MARGIN: '--margin',
    };
  }
  /**
   * @description Listen button click from a message
   */
  clickButtonItemHandler(event) {
    this.clickMessageButtonItem.emit(event.detail);
  }
  /**
   * @description Add new message to the queue and display it in the view
   * @param {Object} options The different options to be used for the message (postion, showDuration,...)
   * @param {Object} message The message to be display
   */
  async setMessage(options, message$1) {
    // Create a new object message
    const newMessage = new message.Message(message$1);
    // Init message position
    this.position = (has.has(options, 'position') && ['top', 'bottom'].includes(options.position)) ? options.position : 'top';
    newMessage.setProp('position', this.position);
    newMessage.setProp('clickable', (options.clickable) ? true : false);
    // Launch the watcher and create the messagecontainer if doesn't exist
    this.messagesQueue = [...this.messagesQueue, newMessage];
    // Display the message in the specific container
    this.addMessage(newMessage, options);
  }
  /**
   * @description Empty the message queue
   * @param {Object} options The different options to be used for the message (position, showDuration,...)
   */
  async removeMessages(options) {
    this.position = (has.has(options, 'position') && ['top', 'bottom'].includes(options.position)) ? options.position : 'top';
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    if (messagesNode) {
      this.el.removeChild(messagesNode);
    }
  }
  watchColumnsFluidHandler(value) {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    if (messagesNode) {
      if (value === true) {
        messagesNode.classList.add(`${this.classNames.EL}--columns-fluid`);
      }
      else {
        messagesNode.classList.remove(`${this.classNames.EL}--columns-fluid`);
      }
    }
  }
  /**
   * @description Check if the message queue is empty or not.
   * If not empty, create the message container node
   * else remove it from the page
   * @return {boolean}
   */
  watchHandler() {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    // Get the message in the queue of the specific container, means depending his position
    const targetQueue = filter.filter(this.messagesQueue, message => {
      return message.getProp('position') === this.position;
    });
    if (targetQueue.length > 0) {
      if (isNull(messagesNode)) {
        this.el.insertAdjacentHTML('beforeend', this.setMessageContainerHTML());
      }
    }
    else {
      setTimeout(() => {
        if (!isNull(messagesNode)) {
          this.el.removeChild(messagesNode);
        }
      }, this.animationDuration);
    }
  }
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
    themes.onChange('theme', () => {
      handleThemeChange(themes.storeTheme.get('theme'));
    });
    handleThemeChange(themes.storeTheme.get('theme'));
  }
  componentDidLoad() {
    this.handleTheme();
    this.el.setAttribute('name', this.classNames.EL);
  }
  componentDidRender() {
    // Set additional margin
    if (this.verticalOffset || this.verticalOffset !== undefined) {
      let verticalOffset = this.verticalOffset;
      // By default it's possible to set only the additionalMargin empty. Init default value for empty additionalMargin
      if (this.verticalOffset.trim() === '') {
        verticalOffset = '0';
      }
      this.el.classList.add(ComponentPropsHelper.ComponentPropsHelper.getSize(verticalOffset, `${this.classNames.EL}${this.classNames.MARGIN}`));
    }
  }
  /**
   * @description Add the new message in the container node
   * @param {Object} message The message object to be display
   */
  addMessage(message$1, options) {
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    const uidMessage = message$1.getProp('uid');
    const positionMessage = message$1.getProp('position');
    const messageNode = `#message_${message$1.getProp('uid')}`;
    const htmlPosition = (this.position === 'bottom') ? 'afterbegin' : 'beforeend';
    // Insert the message in the list of message before or after the other
    // depending the position of the messages container
    messagesNode.insertAdjacentHTML(htmlPosition, this.getMessageHTML(message$1));
    if (!this.verticalOffset || this.verticalOffset === undefined) {
      anime_es.anime({
        targets: this.el.querySelector(`${messageNode}`),
        opacity: 1,
        top: (this.position === 'top') ? 0 : 'inherit',
        bottom: (this.position === 'bottom') ? 0 : 'inherit',
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      });
    }
    else {
      anime_es.anime({
        targets: this.el.querySelector(`${messageNode}`),
        opacity: 1,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      });
    }
    const messageItem = this.el.querySelector(`#message_component_${message$1.getProp('uid')}`);
    if (messageItem && message$1.hasProp('buttons')) {
      messageItem.setButtons(message$1.getProp('buttons'));
    }
    // Listen the click event on close icon
    this.el.querySelector(`${messageNode}.${this.classNames.EL + this.classNames.ITEM}`).addEventListener('click', () => {
      this.deleteMessage(uidMessage, positionMessage);
    });
    // In case the option show duration is define, the message should be hidden after a timelaps
    if (has.has(options, 'showDuration') && message.isNumber(options.showDuration)) {
      setTimeout(() => {
        this.deleteMessage(uidMessage, positionMessage);
      }, options.showDuration);
    }
  }
  /**
   * @description Remove the specific message from the list
   * @param {number} uid ID of the message
   * @param {string} position Position of the message in view, targeting the right container
   */
  deleteMessage(uid, position) {
    this.position = position; // Update position to target the right messages container
    const messagesNode = this.el.querySelector(`[name=${this.classNames.EL}][position=${this.position}]`);
    const messageNode = this.el.querySelector(`#message_${uid}`);
    // Remove the message from the queue
    this.messagesQueue = filter.filter(this.messagesQueue, message => {
      return message.getProp('uid') !== uid;
    });
    // Remove the "physical" node message from the queue
    if (!isNull(messagesNode)) {
      anime_es.anime({
        targets: messageNode,
        opacity: 0,
        height: 0,
        marginBottom: 0,
        translateY: (this.position === 'top') ? -50 : 50,
        duration: this.animationDuration,
        easing: 'easeInOutSine',
      }).finished.then(() => {
        if (messagesNode.contains(messageNode)) {
          messagesNode.removeChild(messageNode);
        }
      });
    }
  }
  /**
   * @description Generate the HTML node which should contain all messages
   * @return {string} The html node
   */
  setMessageContainerHTML() {
    return `<div name="${this.classNames.EL}" position="${this.position}" class="${this.columnsFluid ? `${this.classNames.EL}--columns-fluid` : ''}"></div>`;
  }
  /**
   * @description Generate the HTML node of a uniq message
   * @param {Object} message The message object to be display
   * @return {string} The html node
   */
  getMessageHTML(message) {
    let styles = message.getProp('styles');
    const classes = [
      this.classNames.EL + this.classNames.ITEM,
      ComponentPropsHelper.ComponentPropsHelper.setGlobalStyles(styles, this.classNames.EL + this.classNames.ITEM),
    ].join(' ');
    styles += ' with-cleaning-icon';
    message.setProp('styles', styles);
    return `<div id="${'message_' + message.getProp('uid')}" class="${classes}">

      <eds-message styles="${message.getProp('styles')}"
        id="${'message_component_' + message.getProp('uid')}"
        icon-leading="${message.getProp('iconLeading')}"
        ${message.getProp('clickable') ? 'clickable' : ''}>
        ${message.getProp('content')}

        <eds-icon slot="message-close-btn" class="${this.classNames.EL + this.classNames.ICON_CLEANING}"
          icon="times"></eds-icon>

      </eds-message>

    </div>`;
  }
  render() {
    return (index.h("slot", null));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "columnsFluid": ["watchColumnsFluidHandler"],
    "messagesQueue": ["watchHandler"]
  }; }
};
ENOVOSMessageManager.style = managerCss;

exports.eds_message_manager = ENOVOSMessageManager;
