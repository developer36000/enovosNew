import{r as l,h as o,g as e}from"./p-a84c2a87.js";import{o as t,s as L}from"./p-9cd879e2.js";const F=class{constructor(o){l(this,o),this.variations=["black"],this.classNames={LOGO:"logo-bdl"}}getVariations(){return this.classNames.LOGO+" "+this.variations.map(l=>`${this.classNames.LOGO}--${l}`).join(" ")}getHeight(){return Number(this.height)>0?this.height:"auto"}getWidth(){return Number(this.width)>0?this.width:"auto"}getViewBox(){return this.viewBox?this.viewBox:""}handleTheme(){const l=l=>{Array.from(this.el.classList).filter(l=>l.startsWith("theme--")).forEach(l=>{this.el.classList.remove(l)}),this.el.classList.add("theme--"+l)};t("theme",()=>{l(L.get("theme"))}),l(L.get("theme"))}componentDidLoad(){this.handleTheme();const l=this.el.querySelector("svg");l&&(l.setAttribute("viewBox",this.getViewBox()),l.setAttribute("width",this.getWidth()),l.setAttribute("height",this.getHeight()))}render(){return o("svg",null,o("g",{id:"Logos/Banque-de-Luxembourg-on-Dark",class:this.getVariations(),stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("path",{d:"M27.9255151,0 L0,0 L0,9.39919893 L28.3502377,9.39919893 C38.3312203,9.39919893 46.4009509,14.4192256 46.4009509,24.5660881 C46.4009509,31.2950601 42.6846276,35.6742323 36.1014263,36.9559413 L36.1014263,37.1695594 C44.4896989,38.024032 49.1616482,44.9666222 49.1616482,52.3364486 C49.1616482,66.5420561 39.9239303,70.1735648 28.3502377,70.6008011 L28.2440571,70.6008011 L0,70.6008011 L0,80 L30.6862124,80 C54.3645008,80 67,66.1148198 67,40.0534045 C67,17.0894526 55.4263074,0 27.9255151,0",class:"logo-bdl__icon",id:"Icon-BD",fill:"#FFFFFF","fill-rule":"nonzero"}),o("polygon",{class:"logo-bdl__icon",id:"Icon-L",fill:"#FFFFFF","fill-rule":"nonzero",points:"0 19 0 61 21 61 21 51.3816794 9.85051546 51.3816794 9.85051546 19"}),o("path",{class:"logo-bdl__bank-letter",d:"M87.7619048,30.7627119 L87.7619048,14.2372881 L93.5820106,14.2372881 C94.005291,14.2372881 95.8042328,14.1313559 96.6507937,15.2966102 C97.7089947,16.5677966 97.1798942,18.2627119 96.968254,18.6864407 C95.9100529,20.9110169 92.6296296,22.0762712 92.6296296,22.0762712 C92.6296296,22.0762712 98.026455,23.8771186 98.026455,27.2669492 C98.026455,27.2669492 98.026455,29.1737288 96.6507937,30.0211864 C96.6507937,30.0211864 95.6984127,30.6567797 94.1111111,30.6567797 L87.7619048,30.6567797 L87.7619048,30.7627119 Z M103,27.9025424 C103,25.1483051 101.306878,22.8177966 98.978836,22.0762712 C100.777778,21.440678 102.259259,19.4279661 102.259259,16.779661 C102.259259,12.3305085 99.0846561,10 93.7936508,10 L83.3174603,10 L83,10 L83,35 L94.6402116,35 C99.8253968,35 103,32.4576271 103,27.9025424 Z",id:"B",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M129.891304,34.6822034 C129.130435,32.5635593 124.565217,20.2754237 119.673913,10 C119.673913,10 119.673913,10 119.673913,10 L115.326087,10 C110,21.2288136 105,35 105,35 L110,35 C110.217391,34.3644068 111.304348,32.0338983 112.5,28.9618644 L115.543478,28.9618644 L119.347826,28.9618644 L122.391304,28.9618644 C123.586957,31.9279661 124.673913,34.2584746 125,35 L130,35 C130,34.8940678 129.891304,34.7881356 129.891304,34.6822034 Z M119.130435,24.6186441 L119.021739,24.6186441 L115.978261,24.6186441 L115.869565,24.6186441 C114.782609,24.6186441 114.347826,24.8305085 114.23913,25.0423729 C114.456522,24.5127119 114.673913,23.8771186 114.891304,23.3474576 C115.108696,22.7118644 115.326087,22.0762712 115.543478,21.5466102 L117.5,16.25 C117.5,16.25 117.717391,16.9915254 118.26087,18.1567797 L118.695652,19.3220339 C119.130435,20.4872881 119.673913,21.7584746 120.217391,23.3474576 C120.434783,23.8771186 120.652174,24.5127119 120.869565,25.0423729 C120.76087,24.9364407 120.326087,24.6186441 119.130435,24.6186441 Z",id:"A",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M153.952968,31.5042373 L153.847144,10 L148.87346,10 L148.87346,26.9491525 C148.87346,26.9491525 148.344345,25.0423729 147.180291,23.3474576 L137.867861,10 L133.211646,10 C133.105823,11.1652542 133.105823,12.5423729 133,13.8135593 L133,35 L137.973684,35 L137.973684,17.309322 C137.973684,17.309322 138.396976,18.7923729 139.243561,20.1694915 L149.720045,35 L153.952968,35 C154.058791,33.940678 153.952968,32.3516949 153.952968,31.5042373",id:"N",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M177.642857,31.9712753 C177.957983,31.7555826 178.063025,31.5398899 178.063025,31.5398899 C180.163866,29.1672699 181.42437,25.931879 181.42437,22.1572563 C181.42437,14.5001645 176.592437,9 169.659664,9 C162.726891,9 158,14.5001645 158,22.1572563 C158,29.7065017 162.831933,35.3145126 169.659664,35.3145126 C170.920168,35.3145126 172.180672,35.0988198 173.336134,34.6674344 C173.651261,35.3145126 173.966387,35.8537444 174.176471,36.0694371 C174.911765,37.1479007 177.432773,40.3832916 183,38.3342107 C183,38.4420571 179.848739,37.3635935 177.642857,31.9712753 Z M175.121849,27.6574208 C173.966387,26.5789572 171.865546,25.5004935 168.39916,26.3632644 C168.39916,26.3632644 170.079832,27.8731135 171.340336,30.7849653 C170.710084,31.000658 170.184874,31.000658 169.764706,31.000658 C165.878151,31.000658 163.252101,27.2260353 163.252101,22.2651026 C163.252101,17.3041699 165.773109,13.6373936 169.764706,13.6373936 C173.756303,13.6373936 176.277311,17.3041699 176.277311,22.2651026 C176.277311,24.5298763 175.857143,26.2554181 175.121849,27.6574208 Z",id:"Q",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M206,10 L201.132275,10 L201.132275,24.0295359 C201.132275,28.2489451 199.227513,30.5696203 195.94709,30.5696203 C192.666667,30.5696203 190.761905,28.2489451 190.761905,24.0295359 L190.761905,10 L186,10 L186,24.1350211 C186,30.9915612 189.703704,35 195.94709,35 C202.190476,35 206,30.9915612 206,24.1350211 L206,10 Z",id:"U",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M228.89172,30.4449153 L216.872611,30.4449153 C216.980892,28.5381356 217.089172,26.5254237 217.089172,24.6186441 L225.318471,24.6186441 L225.318471,20.3813559 L217.089172,20.3813559 C217.089172,17.6271186 216.980892,15.5084746 216.872611,14.5550847 L228.350318,14.5550847 L229,10 L212,10 L212,35 L228.350318,35 L228.89172,30.4449153 Z",id:"E",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M249.571429,10 L241,10 L241,35 L249.571429,35 C257.178571,35 262,30.1271186 262,22.5 C262,14.8728814 257.178571,10 249.571429,10 Z M249.357143,30.4449153 L245.928571,30.4449153 C245.928571,30.4449153 245.928571,30.4449153 245.928571,30.4449153 C246.357143,24.1949153 246.035714,16.779661 245.928571,14.6610169 C245.928571,14.6610169 245.928571,14.6610169 245.928571,14.6610169 C245.928571,14.6610169 245.928571,14.6610169 245.928571,14.6610169 C245.928571,14.6610169 245.928571,14.6610169 245.928571,14.6610169 L249.357143,14.6610169 C254.178571,14.6610169 256.857143,17.6271186 256.857143,22.5 C256.75,27.3728814 254.178571,30.4449153 249.357143,30.4449153 Z",id:"D",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M282.89172,30.4449153 L270.872611,30.4449153 C270.980892,28.5381356 271.089172,26.5254237 271.089172,24.6186441 L279.318471,24.6186441 L279.318471,20.3813559 L271.089172,20.3813559 C271.089172,17.6271186 270.980892,15.5084746 270.872611,14.5550847 L282.350318,14.5550847 L283,10 L266,10 L266,35 L282.350318,35 L282.89172,30.4449153 Z",id:"E",fill:"#FFFFFF","fill-rule":"nonzero"}),o("polygon",{class:"logo-bdl__bank-letter",id:"L",fill:"#FFFFFF","fill-rule":"nonzero",points:"87.7682119 45 83 45 83 70 99 70 99 65.3586498 87.7682119 65.3586498"}),o("path",{class:"logo-bdl__bank-letter",d:"M116.132275,59.1806723 C116.132275,63.3823529 114.227513,65.6932773 110.94709,65.6932773 C107.666667,65.6932773 105.761905,63.3823529 105.761905,59.1806723 L105.761905,45 L101,45 L101,59.1806723 C101,66.0084034 104.703704,70 110.94709,70 C117.190476,70 121,66.0084034 121,59.1806723 L121,45 L116.132275,45 L116.132275,59.1806723 Z",id:"U",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M146.684932,45 L141.013699,45 L139.123288,47.8601695 C137.652968,50.190678 135.86758,53.1567797 135.657534,53.8983051 C135.552511,53.5805085 135.13242,52.6271186 134.712329,51.779661 C134.502283,51.3559322 130.826484,45.8474576 130.30137,45 L124.420091,45 L132.611872,57.2881356 L124,70 L129.671233,70 L132.086758,66.2923729 C133.557078,64.0677966 135.237443,61.3135593 135.447489,60.5720339 C135.86758,61.8432203 141.223744,70 141.223744,70 L147,70 L138.388128,57.1822034 L146.684932,45 Z",id:"X",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M168,45 L151,45 L151,70 L167.350318,70 L168,65.4449153 L155.980892,65.4449153 C156.089172,63.5381356 156.197452,61.5254237 156.197452,59.6186441 L164.426752,59.6186441 L164.426752,55.3813559 L156.197452,55.3813559 C156.197452,52.6271186 156.089172,50.5084746 155.980892,49.5550847 L167.350318,49.5550847 L168,45 Z",id:"E",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M196.818182,45 L192.893939,45 C192.893939,45 189.393939,50.0420168 185.893939,57.394958 C182.5,50.3571429 178.893939,45 178.893939,45 L175.075758,45 L172,69.789916 L177.409091,69.789916 C177.409091,69.789916 178.363636,58.6554622 178.363636,57.9201681 C178.469697,56.5546218 178.575758,54.6638655 178.575758,54.1386555 L185.893939,65.6932773 L193.318182,54.1386555 C193.318182,54.6638655 193.424242,55.8193277 193.530303,57.289916 C193.530303,57.9201681 194.590909,70 194.590909,70 L200,70 L196.818182,45 Z",id:"M",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M221.049436,57.0762712 C222.856326,56.440678 224.344354,54.4279661 224.344354,51.779661 C224.344354,47.3305085 221.155724,45 215.841341,45 L205.318863,45 L205,45 L205,70 L216.585355,70 C221.79345,70 224.98208,67.5635593 224.98208,62.9025424 C225.194655,60.1483051 223.494052,57.8177966 221.049436,57.0762712 Z M218.817395,65.1271186 C218.817395,65.1271186 217.860807,65.7627119 216.266492,65.7627119 L209.889232,65.7627119 L209.889232,49.2372881 L215.735053,49.2372881 C216.160204,49.2372881 217.967094,49.1313559 218.817395,50.2966102 C219.880272,51.5677966 219.348834,53.2627119 219.136258,53.6864407 C218.073382,55.9110169 214.778465,57.0762712 214.778465,57.0762712 C214.778465,57.0762712 220.199135,58.8771186 220.199135,62.2669492 C220.092847,62.2669492 220.092847,64.1737288 218.817395,65.1271186 Z",id:"B",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M239.946188,45 C232.843049,45 228,50.4344262 228,58 C228,65.4590164 232.950673,71 239.946188,71 C247.049327,71 252,65.4590164 252,58 C251.892377,50.4344262 246.941704,45 239.946188,45 Z M239.946188,66.5245902 C235.964126,66.5245902 233.273543,62.9016393 233.273543,58 C233.273543,53.0983607 235.856502,49.5819672 239.946188,49.5819672 C244.035874,49.5819672 246.618834,53.0983607 246.618834,58 C246.618834,62.9016393 243.928251,66.5245902 239.946188,66.5245902 Z",id:"O",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M270.132275,59.0756303 C270.132275,63.2773109 268.227513,65.5882353 264.94709,65.5882353 C261.666667,65.5882353 259.761905,63.2773109 259.761905,59.0756303 L259.761905,45 L255,45 L255,59.1806723 C255,66.0084034 258.703704,70 264.94709,70 C271.190476,70 275,66.0084034 275,59.1806723 L275,45 L270.132275,45 L270.132275,59.0756303 Z",id:"U",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M298.75,52.9113924 C298.75,47.8481013 295.3125,45 290.104167,45 L280,45 L280,70 L284.6875,70 L284.6875,49.4303797 L289.791667,49.4303797 C292.395833,49.4303797 293.645833,50.8016878 293.645833,52.9113924 C293.645833,55.021097 292.604167,56.7088608 290,56.7088608 L285.9375,56.7088608 L294.166667,70 L300,70 L293.4375,60.1898734 C296.979167,59.0295359 298.75,56.6033755 298.75,52.9113924",id:"R",fill:"#FFFFFF","fill-rule":"nonzero"}),o("path",{class:"logo-bdl__bank-letter",d:"M316.686567,56.0205761 L314.283582,60.3004115 L319.507463,60.3004115 L319.507463,65.1152263 C318.462687,65.9711934 317,66.399177 315.328358,66.399177 C310.940299,66.399177 308.223881,62.9753086 308.223881,58.0534979 C308.223881,53.0246914 311.358209,49.8148148 315.746269,49.8148148 C317.208955,49.8148148 318.567164,50.0288066 319.716418,50.563786 L321.910448,46.6049383 C320.238806,45.6419753 318.044776,45 315.641791,45 C308.223881,45 303,50.2427984 303,58.0534979 C303,65.6502058 307.701493,71 315.119403,71 C318.358209,71 321.597015,69.9300412 324,67.4691358 L324,56.0205761 L316.686567,56.0205761 Z",id:"G",fill:"#FFFFFF","fill-rule":"nonzero"})))}get el(){return e(this)}};F.style=".logo-bdl .logo-bdl__icon{fill:#F76700}.logo-bdl .logo-bdl__bank-letter,.logo-bdl .logo-bdl__design-system__letter{fill:#5E5E5E}.logo-bdl__bank-letter{opacity:1;transition:0.2s all}.logo-bdl--white .logo-bdl__icon,.logo-bdl--white .logo-bdl__bank-letter,.logo-bdl--white .logo-bdl__design-system__letter{fill:#FFFFFF}.logo-bdl--icon .logo-bdl__bank-letter,.logo-bdl--icon .logo-bdl__design-system__letter{opacity:0}";export{F as eds_logo}