(window.webpackJsonp=window.webpackJsonp||[]).push([[6,198],{1012:function(t,e,n){!function(){function e(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function n(t,n){var r=function(t,n){var r=e(t)*e(n);if(0===r)return 0;var o=function(t,e){return t.x*e.x+t.y*e.y}(t,n)/r;return o>1&&(o=1),Math.acos(o)}(t,n);return function(t,e){return t.x*e.y-e.x*t.y}(t,n)>0&&(r*=-1),180*r/Math.PI}var r=function(t){this.handlers=[],this.el=t};function o(t,e){var n=new r(t);return n.add(e),n}r.prototype.add=function(t){this.handlers.push(t)},r.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},r.prototype.dispatch=function(){for(var i=0,t=this.handlers.length;i<t;i++){var e=this.handlers[i];"function"==typeof e&&e.apply(this.el,arguments)}};var h=function(t,option){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=o(this.element,option.rotate||e),this.touchStart=o(this.element,option.touchStart||e),this.multipointStart=o(this.element,option.multipointStart||e),this.multipointEnd=o(this.element,option.multipointEnd||e),this.pinch=o(this.element,option.pinch||e),this.swipe=o(this.element,option.swipe||e),this.tap=o(this.element,option.tap||e),this.doubleTap=o(this.element,option.doubleTap||e),this.longTap=o(this.element,option.longTap||e),this.singleTap=o(this.element,option.singleTap||e),this.pressMove=o(this.element,option.pressMove||e),this.twoFingerPressMove=o(this.element,option.twoFingerPressMove||e),this.touchMove=o(this.element,option.touchMove||e),this.touchEnd=o(this.element,option.touchEnd||e),this.touchCancel=o(this.element,option.touchCancel||e),this._cancelAllHandler=this.cancelAll.bind(this),window.removeEventListener("scroll",this._cancelAllHandler),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};h.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var n=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var r={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};n.x=r.x,n.y=r.y,this.pinchStartLen=e(n),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var r=this.preV,o=t.touches.length,h=t.touches[0].pageX,l=t.touches[0].pageY;if(this.isDoubleTap=!1,o>1){var c=t.touches[1].pageX,d=t.touches[1].pageY,f={x:t.touches[1].pageX-h,y:t.touches[1].pageY-l};null!==r.x&&(this.pinchStartLen>0&&(t.zoom=e(f)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=n(f,r),this.rotate.dispatch(t,this.element)),r.x=f.x,r.y=f.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(h-this.x2+c-this.sx2)/2,t.deltaY=(l-this.y2+d-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=c,this.sy2=d}else null!==this.x2?(t.deltaX=h-this.x2,t.deltaY=l-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.dispatch(t,this.element);this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=h,this.y2=l,o>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),clearTimeout(e.singleTapTimeout),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,n,r){return Math.abs(t-e)>=Math.abs(n-r)?t-e>0?"Left":"Right":n-r>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,null}},t.exports=h}()},1195:function(t,e,n){t.exports=function(){var t="undefined"!=typeof window,e="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||e&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(t){var e=t.event,n=t.handler;(0,t.middleware)(e)&&n(e)}function r(t,e){var r=function(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||function(t){return t},events:t.events||n,isActive:!(!1===t.isActive),detectIframe:!(!1===t.detectIframe)}}(e.value),o=r.handler,h=r.middleware,a=r.detectIframe;if(r.isActive){if(t["__v-click-outside"]=r.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(t){var e=t.el,n=t.event,r=t.handler,o=t.middleware,h=n.path||n.composedPath&&n.composedPath();(h?h.indexOf(e)<0:!e.contains(n.target))&&i({event:n,handler:r,middleware:o})}({el:t,event:e,handler:o,middleware:h})}}})),a){var l={event:"blur",srcTarget:window,handler:function(e){return function(t){var e=t.el,n=t.event,r=t.handler,o=t.middleware;setTimeout((function(){var t=document.activeElement;t&&"IFRAME"===t.tagName&&!e.contains(t)&&i({event:n,handler:r,middleware:o})}),0)}({el:t,event:e,handler:o,middleware:h})}};t["__v-click-outside"]=[].concat(t["__v-click-outside"],[l])}t["__v-click-outside"].forEach((function(e){var n=e.event,i=e.srcTarget,r=e.handler;return setTimeout((function(){t["__v-click-outside"]&&i.addEventListener(n,r,!1)}),0)}))}}function o(t){(t["__v-click-outside"]||[]).forEach((function(t){return t.srcTarget.removeEventListener(t.event,t.handler,!1)})),delete t["__v-click-outside"]}var h=t?{bind:r,update:function(t,e){var n=e.value,i=e.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(o(t),r(t,{value:n}))},unbind:o}:{};return{install:function(t){t.directive("click-outside",h)},directive:h}}()},916:function(t,e,n){function r(data){this.mode=h.MODE_8BIT_BYTE,this.data=data,this.parsedData=[];for(var i=0,t=this.data.length;i<t;i++){var e=[],code=this.data.charCodeAt(i);code>65536?(e[0]=240|(1835008&code)>>>18,e[1]=128|(258048&code)>>>12,e[2]=128|(4032&code)>>>6,e[3]=128|63&code):code>2048?(e[0]=224|(61440&code)>>>12,e[1]=128|(4032&code)>>>6,e[2]=128|63&code):code>128?(e[0]=192|(1984&code)>>>6,e[1]=128|63&code):e[0]=code,this.parsedData.push(e)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var i=0,e=this.parsedData.length;i<e;i++)t.put(this.parsedData[i],8)}},o.prototype={addData:function(data){var t=new r(data);this.dataList.push(t),this.dataCache=null},isDark:function(t,col){if(t<0||this.moduleCount<=t||col<0||this.moduleCount<=col)throw new Error(t+","+col);return this.modules[t][col]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[n][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,col){for(var e=-1;e<=7;e++)if(!(t+e<=-1||this.moduleCount<=t+e))for(var n=-1;n<=7;n++)col+n<=-1||this.moduleCount<=col+n||(this.modules[t+e][col+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var e=D.getLostPoint(this);(0==i||t>e)&&(t=e,pattern=i)}return pattern},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var o=0;o<this.modules.length;o++)for(var h=1*o,col=0;col<this.modules[o].length;col++){var l=1*col;this.modules[o][col]&&(r.beginFill(0,100),r.moveTo(l,h),r.lineTo(l+1,h),r.lineTo(l+1,h+1),r.lineTo(l,h+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=D.getPatternPosition(this.typeNumber),i=0;i<t.length;i++)for(var e=0;e<t.length;e++){var n=t[i],col=t[e];if(null==this.modules[n][col])for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.modules[n+r][col+o]=-2==r||2==r||-2==o||2==o||0==r&&0==o}},setupTypeNumber:function(t){for(var e=D.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n}for(i=0;i<18;i++){n=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var data=this.errorCorrectLevel<<3|e,n=D.getBCHTypeInfo(data),i=0;i<15;i++){var r=!t&&1==(n>>i&1);i<6?this.modules[i][8]=r:i<8?this.modules[i+1][8]=r:this.modules[this.moduleCount-15+i][8]=r}for(i=0;i<15;i++){r=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=r:i<9?this.modules[8][15-i-1+1]=r:this.modules[8][15-i-1]=r}this.modules[this.moduleCount-8][8]=!t},mapData:function(data,t){for(var e=-1,n=this.moduleCount-1,r=7,o=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var h=0;h<2;h++)if(null==this.modules[n][col-h]){var l=!1;o<data.length&&(l=1==(data[o]>>>r&1)),D.getMask(t,n,col-h)&&(l=!l),this.modules[n][col-h]=l,-1==--r&&(o++,r=7)}if((n+=e)<0||this.moduleCount<=n){n-=e,e=-e;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,n){for(var r=C.getRSBlocks(t,e),h=new A,i=0;i<n.length;i++){var data=n[i];h.put(data.mode,4),h.put(data.getLength(),D.getLengthInBits(data.mode,t)),data.write(h)}var l=0;for(i=0;i<r.length;i++)l+=r[i].dataCount;if(h.getLengthInBits()>8*l)throw new Error("code length overflow. ("+h.getLengthInBits()+">"+8*l+")");for(h.getLengthInBits()+4<=8*l&&h.put(0,4);h.getLengthInBits()%8!=0;)h.putBit(!1);for(;!(h.getLengthInBits()>=8*l||(h.put(o.PAD0,8),h.getLengthInBits()>=8*l));)h.put(o.PAD1,8);return o.createBytes(h,r)},o.createBytes=function(t,e){for(var n=0,r=0,o=0,h=new Array(e.length),l=new Array(e.length),c=0;c<e.length;c++){var d=e[c].dataCount,f=e[c].totalCount-d;r=Math.max(r,d),o=Math.max(o,f),h[c]=new Array(d);for(var i=0;i<h[c].length;i++)h[c][i]=255&t.buffer[i+n];n+=d;var m=D.getErrorCorrectPolynomial(f),v=new B(h[c],m.getLength()-1).mod(m);l[c]=new Array(m.getLength()-1);for(i=0;i<l[c].length;i++){var T=i+v.getLength()-l[c].length;l[c][i]=T>=0?v.get(T):0}}var w=0;for(i=0;i<e.length;i++)w+=e[i].totalCount;var data=new Array(w),E=0;for(i=0;i<r;i++)for(c=0;c<e.length;c++)i<h[c].length&&(data[E++]=h[c][i]);for(i=0;i<o;i++)for(c=0;c<e.length;c++)i<l[c].length&&(data[E++]=l[c][i]);return data};for(var h={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l=1,c=0,d=3,f=2,m=0,v=1,T=2,w=3,E=4,y=5,L=6,_=7,D={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var t=data<<10;D.getBCHDigit(t)-D.getBCHDigit(D.G15)>=0;)t^=D.G15<<D.getBCHDigit(t)-D.getBCHDigit(D.G15);return(data<<10|t)^D.G15_MASK},getBCHTypeNumber:function(data){for(var t=data<<12;D.getBCHDigit(t)-D.getBCHDigit(D.G18)>=0;)t^=D.G18<<D.getBCHDigit(t)-D.getBCHDigit(D.G18);return data<<12|t},getBCHDigit:function(data){for(var t=0;0!=data;)t++,data>>>=1;return t},getPatternPosition:function(t){return D.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,i,e){switch(t){case m:return(i+e)%2==0;case v:return i%2==0;case T:return e%3==0;case w:return(i+e)%3==0;case E:return(Math.floor(i/2)+Math.floor(e/3))%2==0;case y:return i*e%2+i*e%3==0;case L:return(i*e%2+i*e%3)%2==0;case _:return(i*e%3+(i+e)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var a=new B([1],0),i=0;i<t;i++)a=a.multiply(new B([1,M.gexp(i)],0));return a},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case h.MODE_NUMBER:return 10;case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:case h.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var col=0;col<e;col++){for(var o=0,h=t.isDark(r,col),l=-1;l<=1;l++)if(!(r+l<0||e<=r+l))for(var c=-1;c<=1;c++)col+c<0||e<=col+c||0==l&&0==c||h==t.isDark(r+l,col+c)&&o++;o>5&&(n+=3+o-5)}for(r=0;r<e-1;r++)for(col=0;col<e-1;col++){var d=0;t.isDark(r,col)&&d++,t.isDark(r+1,col)&&d++,t.isDark(r,col+1)&&d++,t.isDark(r+1,col+1)&&d++,0!=d&&4!=d||(n+=3)}for(r=0;r<e;r++)for(col=0;col<e-6;col++)t.isDark(r,col)&&!t.isDark(r,col+1)&&t.isDark(r,col+2)&&t.isDark(r,col+3)&&t.isDark(r,col+4)&&!t.isDark(r,col+5)&&t.isDark(r,col+6)&&(n+=40);for(col=0;col<e;col++)for(r=0;r<e-6;r++)t.isDark(r,col)&&!t.isDark(r+1,col)&&t.isDark(r+2,col)&&t.isDark(r+3,col)&&t.isDark(r+4,col)&&!t.isDark(r+5,col)&&t.isDark(r+6,col)&&(n+=40);var f=0;for(col=0;col<e;col++)for(r=0;r<e;r++)t.isDark(r,col)&&f++;return n+=10*(Math.abs(100*f/e/e-50)/5)}},M={glog:function(t){if(t<1)throw new Error("glog("+t+")");return M.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return M.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)M.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)M.EXP_TABLE[i]=M.EXP_TABLE[i-4]^M.EXP_TABLE[i-5]^M.EXP_TABLE[i-6]^M.EXP_TABLE[i-8];for(i=0;i<255;i++)M.LOG_TABLE[M.EXP_TABLE[i]]=i;function B(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}function C(t,e){this.totalCount=t,this.dataCount=e}function A(){this.buffer=[],this.length=0}B.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=M.gexp(M.glog(this.get(i))+M.glog(t.get(n)));return new B(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=M.glog(this.get(0))-M.glog(t.get(0)),n=new Array(this.getLength()),i=0;i<this.getLength();i++)n[i]=this.get(i);for(i=0;i<t.getLength();i++)n[i]^=M.gexp(M.glog(t.get(i))+e);return new B(n,0).mod(t)}},C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(t,e){var n=C.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=[],i=0;i<r;i++)for(var h=n[3*i+0],l=n[3*i+1],c=n[3*i+2],d=0;d<h;d++)o.push(new C(l,c));return o},C.getRsBlockTable=function(t,e){switch(e){case l:return C.RS_BLOCK_TABLE[4*(t-1)+0];case c:return C.RS_BLOCK_TABLE[4*(t-1)+1];case d:return C.RS_BLOCK_TABLE[4*(t-1)+2];case f:return C.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},A.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var P=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function k(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var i in t)this.options[i]=t[i];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var content=this.options.content,e=function(content,t){for(var e=function(content){var t=encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return t.length+(t.length!=content?3:0)}(content),n=1,r=0,i=0,o=P.length;i<=o;i++){var table=P[i];if(!table)throw new Error("Content too long: expected "+r+" but got "+e);switch(t){case"L":r=table[0];break;case"M":r=table[1];break;case"Q":r=table[2];break;case"H":r=table[3];break;default:throw new Error("Unknwon error correction level: "+t)}if(e<=r)break;n++}if(n>P.length)throw new Error("Content too long");return n}(content,this.options.ecl),n=function(t){switch(t){case"L":return l;case"M":return c;case"Q":return d;case"H":return f;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new o(e,n),this.qrcode.addData(content),this.qrcode.make()}k.prototype.svg=function(t){void 0===t&&(t={container:"svg"});for(var e=this.options,n=this.qrcode.modules,r=e.width,o=e.height,h=n.length,l=r/(h+2*e.padding),c=o/(h+2*e.padding),rect='<rect x="0" y="0" width="'+r+'" height="'+o+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>\r\n',d=0;d<h;d++)for(var f=0;f<h;f++){if(n[f][d])rect+='<rect x="'+(f*l+e.padding*l).toString()+'" y="'+(d*c+e.padding*c).toString()+'" width="'+l+'" height="'+c+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>\r\n'}var svg="";switch(t.container){case"svg":svg+='<?xml version="1.0" standalone="yes"?>\r\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+r+'" height="'+o+'">\r\n',svg+=rect,svg+="</svg>";break;case"g":svg+='<g width="'+r+'" height="'+o+'">\r\n',svg+=rect,svg+="</g>";break;default:svg+=rect}return svg},k.prototype.save=function(t,e){var data=this.svg();n(936).writeFile(t,data,e)},t.exports=k},935:function(t,e,n){"use strict";n(985)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},936:function(t,e){}}]);