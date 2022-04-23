/*GSAP 360*/
/*!
 * GSAP 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&ae}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(Tt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ea(e,r,i){var n,a=q(e[1]),s=(a?2:1)+(r<2?0:1),o=e[s];if(a&&(o.duration=e[1]),o.parent=i,r){for(n=o;i&&!("immediateRender"in n);)n=i.vars.defaults||{},i=t(i.vars.inherit)&&i.parent;o.immediateRender=t(n.immediateRender),r<2?o.runBackwards=1:o.startAt=e[s-1]}return o}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ka(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||F,i=e.keyframes?ka:ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=ca(t._start+(t._tDur/Math.abs(t._ts||t._rts||j)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ca(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||yt(0,e.totalDuration(),r)-e._tTime>j)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-j}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=ca(r+e._delay),e._end=ca(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Pt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ia(t,e,r,i){var n=t._repeat,a=ca(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ca(a*(n+1)+t._rDelay*n):a,s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ja(t){return t instanceof Bt?ta(t):Ia(t,t._dur)}function La(t,e){var r,i,n=t.labels,a=t._recent||vt,s=t.duration()>=U?a.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in n)?"<"===(r=e.charAt(0))||">"===r?("<"===r?a._start:a.endTime(0<=a._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in n||(n[e]=s),n[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?La(t,e.substr(0,r-1))+i:s+i):null==e?s:+e}function Ma(t,e){return t||0===t?e(t):e}function Oa(t){if("string"!=typeof t)return"";var e=st.exec(t);return e?t.substr(e.index+e[0].length):""}function Ra(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ua(t){return t.sort(function(){return.5-Math.random()})}function Va(t){if(p(t))return t;var _=s(t)?t:{each:t},m=Et(_.ease),g=_.from||0,v=parseFloat(_.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,T=_.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||_).length,c=y[d];if(!c){if(!(f="auto"===_.grid?0:(_.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=y[d]=[],i=b?Math.min(f,d)*w-.5:g%f,n=b?d*x/f-.5:g/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):J(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ua(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(_.amount)||parseFloat(_.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),c.b=d<0?v-d:v,c.u=Oa(_.amount||_.each)||0,m=m&&d<0?It(m):m}return d=(c[t]-c.min)/c.max||0,ca(c.b+(m?m(d):d)*c.v)+c.u}}function Wa(r){var i=r<1?Math.pow(10,(r+"").length-2):1;return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Oa(t))}}function Xa(u,t){var h,l,e=K(u);return!e&&s(u)&&(h=e=u.radius||U,u.values?(u=Tt(u.values),(l=!q(u[0]))&&(h*=h)):u=Wa(u.increment)),Ma(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=U,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Oa(t)}:Wa(u))}function Ya(t,e,r,i){return Ma(K(t)?!e:!0===r?!!(r=0):!i,function(){return K(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function ab(e,r,t){return Ma(t,function(t){return e[~~r(t)]})}function db(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+Ya(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function gb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function ib(t){return sa(t),t.progress()<1&&xt(t,"onInterrupt"),t}function nb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Ot+.5|0}function ob(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?q(t)?[t>>16,t>>8&Ot,t&Ot]:0:Mt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])c=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(c=parseInt(t.substr(1,6),16))>>16,c>>8&Ot,c&Ot,parseInt(t.substr(7),16)/255];c=[(t=parseInt(t.substr(1),16))>>16,t>>8&Ot,t&Ot]}else if("hsl"===t.substr(0,3))if(c=d=t.match(tt),e){if(~t.indexOf("="))return c=t.match(et),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=nb(s+1/3,i,n),c[1]=nb(s,i,n),c[2]=nb(s-1/3,i,n);else c=t.match(tt)||Mt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/Ot,n=c[1]/Ot,a=c[2]/Ot,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function pb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function qb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ob(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=pb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function tb(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Ct.test(r),t[1]=qb(t[1],e),t[0]=qb(t[0],e,pb(t[1])),!0}function Cb(t){var e=(t+"").split("("),r=St[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(zt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):St._CE&&Dt.test(t)?St._CE("",t):r}function Eb(t,e){for(var r,i=t._first;i;)i instanceof Bt?Eb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Eb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Gb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in St[t]=ot[t]=a,St[n=t.toLowerCase()]=r,a)St[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=St[t+"."+e]=a[e]}),a}function Hb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ib(r,t,e){function Cl(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?Cl:"in"===r?function(t){return 1-Cl(1-t)}:Hb(Cl);return n=X/n,s.config=function(t,e){return Ib(r,t,e)},s}function Jb(e,r){function Kl(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Kl:"in"===e?function(t){return 1-Kl(1-t)}:Hb(Kl);return t.config=function(t){return Jb(e,t)},t}var L,F,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,I,E,R,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},B={duration:.5,overwrite:!1,delay:0},U=1e8,j=1/U,X=2*Math.PI,G=X/4,V=0,J=Math.sqrt,W=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},K=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[#\-+.]*\b[a-z\d-=+%.]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},ct=30,pt=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt={_start:0,endTime:Q},yt=function _clamp(t,e,r){return r<t?t:e<r?e:r},bt=[].slice,Tt=function toArray(t,e){return!o(t)||e||!n&&At()?K(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ra(t,1)?r.push.apply(r,Tt(t)):r.push(t)})||r}(t,e):Ra(t)?bt.call(t,0):t?[t]:[]:bt.call(a.querySelectorAll(t),0)},wt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ma(n,function(t){return r+((t-e)/a*s||0)})},xt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},Ot=255,Mt={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ct=/hsl[a]?\(/,Pt=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){yk(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=ae,(i.gsapVersions||(i.gsapVersions=[])).push(ae.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,yk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){I.indexOf(t)<0&&I.push(t),At()},remove:function remove(t){var e;~(e=I.indexOf(t))&&I.splice(e,1)&&e<=w&&w--},_listeners:I=[]}),At=function _wake(){return!c&&Pt.wake()},St={},Dt=/^[\d.\-M][\d.\-,\s]/,zt=/["']/g,It=function _invertEase(e){return function(t){return 1-e(1-t)}},Et=function _parseEase(t,e){return t&&(p(t)?t:St[t]||Cb(t))||e};function yk(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(yk)),r)for(w=0;w<I.length;w++)I[w](i,T,n,t)}function _l(t){return t<R?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Gb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,Gb("Elastic",Ib("in"),Ib("out"),Ib()),E=7.5625,R=1/2.75,Gb("Bounce",function(t){return 1-_l(1-t)},_l),Gb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Gb("Circ",function(t){return-(J(1-t*t)-1)}),Gb("Sine",function(t){return 1===t?1:1-W(t*G)}),Gb("Back",Jb("in"),Jb("out"),Jb()),St.SteppedEase=St.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*yt(0,.99999999,t)|0)+n)*r}}},B.ease=St["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var Rt,Lt=function GSCache(t,e){this.id=V++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Wt},Ft=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(At(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===j||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-j?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-j?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(yt(-this._delay,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(At(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=j)&&Math.abs(this._zTime)!==j))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},Rt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ja(this)):-2===this._repeat?1/0:this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ja(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(e,r){return this.totalTime(La(this,e),t(r))},Rt.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-j:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-j,this},Rt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-j))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function rn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?rn():i._prom=rn})},Rt.kill=function kill(){ib(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,c||Pt.wake(),r&&Ca(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ja(Ft.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-j,_prom:0,_ps:!1,_rts:1});var Bt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e,r)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),i.parent&&Ba(i.parent,_assertThisInitialized(i)),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r,i){return new Gt(t,ea(arguments,0,this),La(this,q(e)?i:r)),this},e.from=function from(t,e,r,i){return new Gt(t,ea(arguments,1,this),La(this,q(e)?i:r)),this},e.fromTo=function fromTo(t,e,r,i,n){return new Gt(t,ea(arguments,2,this),La(this,q(e)?n:i)),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Gt(t,e,La(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Gt.delayedCall(0,t,e),La(this,r))},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Gt(t,r,La(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-j<t&&0<=t?m:t<j?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ca(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var b=c&&1&d,T=b===(c&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(p?0:ca(s*o)),e,!g)._lock=0,!e&&this.parent&&xt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Eb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ca(_),ca(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),_||!(i||!g&&0<=t)||e||xt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-j);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-j:j);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-j)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&xt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_||(xt(this,v===m?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=La(this,e)),!(t instanceof Ft)){if(K(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Gt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Gt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ca(Pt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=La(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Gt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,La(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=La(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=Tt(t),a=this._first,s=q(e);a;)a instanceof Gt?da(a._targets,n)&&(s?(!qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=La(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=e.immediateRender,u=Gt.to(r,ja({ease:"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||j,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());u._dur!==t&&Ia(u,t,0,1).render(u._time,!0,!0),a&&a.apply(u,s||[])}},e));return o?u.render(0):u},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:La(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),gb(this,La(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+j)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ia(a,a===F&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ga(F,ya(t,F)),f=Pt.frame),Pt.frame>=ct){ct+=Y.autoSleep||120;var e=F._first;if((!e||!e._ts)&&Y.autoSleep&&Pt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Pt.sleep()}}},Timeline}(Ft);ja(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Qb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Ut(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||K(t)||Z(t))return o(t)?Ut(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Ut(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ie(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}var qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Jt:Qt:Vt;if(o(i)&&(~i.indexOf("random(")&&(i=db(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Oa(d)||0))),d!==i)return isNaN(d*i)?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ie(this._pt,t,e,0,1,Zt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=db(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ie(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?$t:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Nt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,c,p,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,I=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!L,R=e.timeline;if(!R||C&&v||(v="none"),e._ease=Et(v,B.ease),e._yEase=k?It(Et(!0===k?v:k,B.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),!R){if(p=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&S.render(-1,!0).kill(),y){if(sa(e._startAt=Gt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),b)if(0<r)P||(e._startAt=0);else if(A&&!(r<0&&S))return void(r&&(e._zTime=r))}else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),p&&(a[l.prop]=p),sa(e._startAt=Gt.set(D,a)),b){if(!r)return}else _initTween(e._startAt,j);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),c=I===D?n:I.indexOf(o),l&&!1!==(f=new l).init(o,p||i,e,c,I)&&(e._pt=s=new ie(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)ft[a]&&(f=Qb(a,i,e,c,o,I))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],c,I,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(qt=e,F.killTweensOf(o,d,e.globalTime(0)),m=!e.parent,qt=0),e._pt&&T&&(lt[h.id]=1)}u&&re(e),e._onInit&&e._onInit(e)}e._from=!R&&!!g.runBackwards,e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m},Ut=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?db(t):t},jt=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(jt+",id,stagger,delay,duration,paused,scrollTrigger").split(","),Gt=function(A){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,c,p,_=(a=A.call(this,n?r:oa(r),i)||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=a.parent,P=(K(e)||Z(e)?q(e[0]):"length"in r)?[e]:Tt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,w)ja(o.vars.defaults,{ease:"none"}),w.forEach(function(t){return o.to(P,t,">")});else{if(l=P.length,c=b?Va(b):Q,s(b))for(f in b)~jt.indexOf(f)&&((p=p||{})[f]=b[f]);for(u=0;u<l;u++){for(f in h={},r)Xt.indexOf(f)<0&&(h[f]=r[f]);h.stagger=0,k&&(h.yoyoEase=k),p&&mt(h,p),d=P[u],h.duration=+Ut(m,_assertThisInitialized(a),u,d,P),h.delay=(+Ut(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,c(u,d,P))}o.duration()?m=g=0:a.timeline=0}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||L||(qt=_assertThisInitialized(a),F.killTweensOf(P),qt=0),C&&Ba(C,_assertThisInitialized(a)),(y||!m&&!w&&a._start===ca(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-j,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,A);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-j<t&&0<=t?c:t<j?0:t;if(p){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=ca(_%s),_===c?(a=this._repeat,i=p):((a=~~(_/s))&&a===_/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Eb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ca(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),!i||d||e||xt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-j:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),xt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&xt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(xt(this,_===c?"onComplete":"onReverseComplete",!0),!this._prom||_<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)||(t._ts<0||t._dp._ts<0)&&"isFromStart"!==t.data&&"isStart"!==t.data)?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=yt(0,t._tDur,e),a=gt(l,h),s=gt(t._tTime,h),t._yoyo&&1&a&&(u=1-u),a!==s&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===j||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?j:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||xt(t,"onStart"),n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&xt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&xt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(xt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?ib(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,qt&&!0!==qt.vars.overwrite)._first||ib(this),this.parent&&r!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?Tt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),ib(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=c[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&p&&ib(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ea(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ea(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Ft);ja(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Bt,e=bt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function _b(t,e,r){return t.setAttribute(e,r)}function hc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Vt=function _setterPlain(t,e,r){return t[e]=r},Qt=function _setterFunc(t,e,r){return t[e](r)},Jt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Wt=function _getSetter(t,e){return p(t[e])?Qt:r(t[e])&&t.setAttribute?_b:Vt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},$t=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},Kt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},te=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ee=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},re=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ie=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=hc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Vt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Gt,ot.TimelineLite=ot.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:B,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=tb;var ne={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:Kt,add:Yt,kill:ee,modifier:te,rawVars:0},a={targetTest:0,get:0,getSetter:Wt,aliases:{},register:0};if(At(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(ae,i,ie)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=Tt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Tt(r)).length){var n=r.map(function(t){return ae.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&Kt(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Et(t.ease,B.ease)),ma(B,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(Tt(t),ja(e||{},a),r)},r&&(Bt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){St[t]=Et(e)},parseEase:function parseEase(t,e){return arguments.length?Et(t,e):St},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Bt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),F.remove(a),a._dp=0,a._time=a._tTime=F._time,i=F._first;i;)n=i._next,!r&&!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(F,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return K(e)?ab(e,wrap(0,e.length),t):Ma(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return K(e)?ab(e,wrapYoyo(0,e.length-1),t):Ma(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Va,random:Ya,snap:Xa,normalize:function normalize(t,e,r){return wt(t,e,0,1,r)},getUnit:Oa,clamp:function clamp(e,r,t){return Ma(t,function(t){return yt(e,r,t)})},splitColor:ob,toArray:Tt,mapRange:wt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Oa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(K(e)&&!K(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(K(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return Kt(t,d)||(f?e.p:e)}}}return Ma(t,n)},shuffle:Ua},install:M,effects:dt,ticker:Pt,updateRoot:Bt.updateRoot,plugins:ft,globalTimeline:F,core:{PropTween:ie,globals:P,Tween:Gt,Timeline:Bt,Animation:Ft,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return L=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ne[t]=Gt[t]}),Pt.add(Bt.updateRoot),d=ne.to({},{duration:0});function lc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function nc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=lc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ae=ne.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},nc("roundProps",Wa),nc("modifiers"),nc("snap",Xa))||ne;Gt.version=Bt.version=ae.version="3.6.0",l=1,u()&&At();function Yc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Zc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function $c(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function _c(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ad(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function bd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function cd(t,e,r){return t.style[e]=r}function dd(t,e,r){return t.style.setProperty(e,r)}function ed(t,e,r){return t._gsap[e]=r}function fd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function gd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function hd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ld(t,e){var r=oe.createElementNS?oe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oe.createElement(t);return r.style?r:oe.createElement(t)}function md(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Le,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&md(t,je(e)||e,1)||""}function pd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(se=window,oe=se.document,ue=oe.documentElement,le=ld("div")||{style:{}},fe=ld("div"),Ye=je(Ye),Ne=Ye+"Origin",le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!je("perspective"),he=1)}function qd(t){var e,r=ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(ue.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=qd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ue.removeChild(r),this.style.cssText=a,e}function rd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function sd(e){var r;try{r=e.getBBox()}catch(t){r=qd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===qd||(r=qd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+rd(e,["x","cx","x1"])||0,y:+rd(e,["y","cy","y1"])||0,width:0,height:0}}function td(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!sd(t))}function ud(t,e){if(e){var r=t.style;e in ze&&e!==Ne&&(e=Ye),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Le,"-$1").toLowerCase())):r.removeAttribute(e)}}function vd(t,e,r,i,n,a){var s=new ie(t._pt,e,r,0,1,a?bd:ad);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function xd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=le.style,f=Fe.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,m="%"===i;return i===h||!u||Xe[i]||Xe[h]?u:("px"===h||p||(u=xd(t,e,r,"px")),o=t.getCTM&&td(t),!m&&"%"!==h||!ze[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==oe&&a.appendChild||(a=oe.body),(s=a._gsap)&&m&&s.width&&f&&s.time===Pt.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=md(t,"position")),a===t&&(l.position="static"),a.appendChild(le),n=le[c],a.removeChild(le),l.position="absolute",f&&m&&((s=_(a)).time=Pt.time,s.width=a[c]),ca(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[c],ca(m?u/n*100:u/100*n)))}function yd(t,e,r,i){var n;return he||pd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),ze[e]&&"transform"!==e?(n=We(t,i),n="transformOrigin"!==e?n[e]:He(md(t,Ne))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ve[e]&&Ve[e](t,e,r)||md(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?xd(t,e,n,r)+r:n}function zd(t,e,r,i){if(!r||"none"===r){var n=je(e,t,1),a=n&&md(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=md(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ie(this._pt,t.style,e,0,1,Zt),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=md(t,e)||i,t.style[e]=r),tb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=xd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===b?p:",",s:h,c:g?g*c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?bd:ad;return nt.test(i)&&(v.e=0),this._pt=v}function Bd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ge[r]||r,e[1]=Ge[i]||i,e.join(" ")}function Cd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ze[r]&&(i=1,r="transformOrigin"===r?Ne:Ye),ud(a,r);i&&(ud(a,Ye),u&&(u.svg&&a.removeAttribute("transform"),We(a,1),u.uncache=1))}}function Gd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Hd(t){var e=md(t,Ye);return Gd(e)?Qe:e.substr(7).match(et).map(ca)}function Id(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Hd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Qe:u:(u!==Qe||t.offsetParent||t===ue||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,ue.appendChild(t)),u=Hd(t),n?o.display=n:ud(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):ue.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Jd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Id(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Qe&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=sd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=c+(y*_+b*g)-y,h.yOffset=p+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ne]="0px 0px",a&&(vd(a,h,"xOrigin",f,w),vd(a,h,"yOrigin",d,x),vd(a,h,"xOffset",c,h.xOffset),vd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Md(t,e,r){var i=Oa(e);return ca(parseFloat(e)+parseFloat(xd(t,"x",r+"px",i)))+i}function Td(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ie:1),d=a?f*a:f-i,c=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ie(t._pt,e,r,i,d,Zc),u.e=c,u.u="deg",t._props.push(r),u}function Ud(t,e,r){var i,n,a,s,o,u,h,l=fe.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ye]=e,oe.body.appendChild(fe),i=We(fe,1),ze)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Oa(a)!==(h=Oa(s))?xd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ie(t._pt,f,n,o,u-o,Yc),t._pt.u=h||0,t._props.push(n));oe.body.removeChild(fe)}var se,oe,ue,he,le,fe,de,ce,pe=St.Power0,_e=St.Power1,me=St.Power2,ge=St.Power3,ve=St.Power4,ye=St.Linear,be=St.Quad,Te=St.Cubic,we=St.Quart,xe=St.Quint,Oe=St.Strong,Me=St.Elastic,ke=St.Back,Ce=St.SteppedEase,Pe=St.Bounce,Ae=St.Sine,Se=St.Expo,De=St.Circ,ze={},Ie=180/Math.PI,Ee=Math.PI/180,Re=Math.atan2,Le=/([A-Z])/g,Fe=/(?:left|right|width|margin|padding|x)/i,Be=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ye="transform",Ne=Ye+"Origin",Ue="O,Moz,ms,Ms,Webkit".split(","),je=function _checkPropPrefix(t,e,r){var i=(e||le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ue[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ue[n]:"")+t},Xe={deg:1,rad:1,turn:1},Ge={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ie(t._pt,e,r,0,0,Cd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Qe=[1,0,0,1,0,0],Je={},We=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,S,D,z,I,E,R=t.style,L=r.scaleX<0,F="deg",B=md(t,Ne)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!td(t)),m=Id(t,r.svg),r.svg&&(k=!r.uncache&&t.getAttribute("data-svg-origin"),Jd(t,k||B,!!k||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==Qe&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Ie:0,(f=w||x?Re(w,x)*Ie+u:0)&&(o*=Math.cos(f*Ee)),r.svg&&(i-=p-(p*b+_*w),n-=_-(p*T+_*x))):(E=m[6],z=m[7],A=m[8],S=m[9],D=m[10],I=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(E,D))*Ie,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=E*v+D*y,A=O*-y+A*v,S=M*-y+S*v,D=E*-y+D*v,I=z*-y+I*v,O=k,M=C,E=P),l=(g=Re(-w,D))*Ie,g&&(v=Math.cos(-g),I=x*(y=Math.sin(-g))+I*v,b=k=b*v-A*y,T=C=T*v-S*y,w=P=w*v-D*y),u=(g=Re(T,b))*Ie,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Re(O,M),f=2e-4<Math.abs(g)?g*Ie:0,c=I?1/(I<0?-I:I):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Gd(md(t,Ye)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+F,r.rotationX=ca(h)+F,r.rotationY=ca(l)+F,r.skewX=f+F,r.skewY=d+F,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(B.split(" ")[2])||0)&&(R[Ne]=He(B)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?rr:ce?er:$e,r.uncache=0,r},He=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},$e=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,er(t,e)},Ze="0deg",Ke="0px",tr=") ",er=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ze||h!==Ze)){var T,w=parseFloat(h)*Ee,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Ee,T=Math.cos(w),a=Md(g,a,x*T*-v),s=Md(g,s,-Math.sin(w)*-v),o=Md(g,o,O*T*-v+v)}_!==Ke&&(y+="perspective("+_+tr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===Ke&&s===Ke&&o===Ke||(y+=o!==Ke||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+tr),u!==Ze&&(y+="rotate("+u+tr),h!==Ze&&(y+="rotateY("+h+tr),l!==Ze&&(y+="rotateX("+l+tr),f===Ze&&d===Ze||(y+="skew("+f+", "+d+tr),1===c&&1===p||(y+="scale("+c+", "+p+tr),g.style[Ye]=y||"translate(0, 0)"},rr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=Ee,c*=Ee,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=Ee,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=xd(g,"x",l,"px"),O=xd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Ye]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var ir,nr,ar,sr={name:"css",register:pd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,b=this._props,T=t.style,w=r.vars.startAt;for(f in he||pd(),e)if("autoRound"!==f&&(s=e[f],!ft[f]||!Qb(f,e,r,i,t,n)))if(h=typeof s,l=Ve[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=db(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))a=(getComputedStyle(t).getPropertyValue(f)+"").trim(),s+="",d=Oa(a),(c=Oa(s))?d!==c&&(a=xd(t,f,a,c)+c):d&&(s+=d),this.add(T,"setProperty",a,s,i,n,0,0,f);else if("undefined"!==h){if(w&&f in w?(a="function"==typeof w[f]?w[f].call(r,i,t,n):w[f],f in Y.units&&!Oa(a)&&(a+=Y.units[f]),"="===(a+"").charAt(1)&&(a=yd(t,f))):a=yd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in qe&&("autoAlpha"===f&&(1===u&&"hidden"===yd(t,"visibility")&&o&&(u=0),vd(this,T,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=qe[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in ze)if(m||((g=t._gsap).renderTransform&&!e.parseTransform||We(t,e.parseTransform),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ie(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ie(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=Bd(s),g.svg?Jd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&vd(this,g,"zOrigin",g.zOrigin,c),vd(this,T,f,He(a),He(s)));continue}if("svgOrigin"===f){Jd(t,s,1,v,0,this);continue}if(f in Je){Td(this,g,f,u,s,p);continue}if("smoothOrigin"===f){vd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Ud(this,s,t);continue}}else f in T||(f=je(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in T)o=o||0,(d=(a+"").substr((u+"").length))!==(c=Oa(s)||(f in Y.units?Y.units[f]:d))&&(u=xd(t,f,a,c)),this._pt=new ie(this._pt,_?g:T,f,u,p?p*o:o-u,_||"px"!==c&&"zIndex"!==f||!1===e.autoRound?Yc:_c),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=$c);else if(f in T)zd.call(this,t,f,a,s);else{if(!(f in t)){N(f,s);continue}this.add(t,f,t[f],s,i,n)}b.push(f)}y&&re(this)},get:yd,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in ze&&e!==Ne&&(t._gsap.x||yd(t,"x"))?i&&de===i?"scale"===e?fd:ed:(de=i||{})&&("scale"===e?gd:hd):t.style&&!r(t.style[e])?cd:~e.indexOf("-")?dd:Wt(t,e)},core:{_removeProperty:ud,_getMatrix:Id}};ae.utils.checkPrefix=je,ar=ba((ir="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ze[t]=1}),ba(nr,function(t){Y.units[t]="deg",Je[t]=1}),qe[ar[13]]=ir+","+nr,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ar[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),ae.registerPlugin(sr);var or=ae.registerPlugin(sr)||ae,ur=or.core.Tween;e.Back=ke,e.Bounce=Pe,e.CSSPlugin=sr,e.Circ=De,e.Cubic=Te,e.Elastic=Me,e.Expo=Se,e.Linear=ye,e.Power0=pe,e.Power1=_e,e.Power2=me,e.Power3=ge,e.Power4=ve,e.Quad=be,e.Quart=we,e.Quint=xe,e.Sine=Ae,e.SteppedEase=Ce,e.Strong=Oe,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Gt,e.TweenMax=ur,e.default=or,e.gsap=or;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

/*PEP*/

/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.PointerEventsPolyfill = factory());
  }(this, function () { 'use strict';
  
    /**
     * This is the constructor for new PointerEvents.
     *
     * New Pointer Events must be given a type, and an optional dictionary of
     * initialization properties.
     *
     * Due to certain platform requirements, events returned from the constructor
     * identify as MouseEvents.
     *
     * @constructor
     * @param {String} inType The type of the event to create.
     * @param {Object} [inDict] An optional dictionary of initial event properties.
     * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
     */
    var MOUSE_PROPS = [
      'bubbles',
      'cancelable',
      'view',
      'detail',
      'screenX',
      'screenY',
      'clientX',
      'clientY',
      'ctrlKey',
      'altKey',
      'shiftKey',
      'metaKey',
      'button',
      'relatedTarget',
      'pageX',
      'pageY'
    ];
  
    var MOUSE_DEFAULTS = [
      false,
      false,
      null,
      null,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null,
      0,
      0
    ];
  
    function PointerEvent(inType, inDict) {
      inDict = inDict || Object.create(null);
  
      var e = document.createEvent('Event');
      e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);
  
      // define inherited MouseEvent properties
      // skip bubbles and cancelable since they're set above in initEvent()
      for (var i = 2, p; i < MOUSE_PROPS.length; i++) {
        p = MOUSE_PROPS[i];
        e[p] = inDict[p] || MOUSE_DEFAULTS[i];
      }
      e.buttons = inDict.buttons || 0;
  
      // Spec requires that pointers without pressure specified use 0.5 for down
      // state and 0 for up state.
      var pressure = 0;
  
      if (inDict.pressure && e.buttons) {
        pressure = inDict.pressure;
      } else {
        pressure = e.buttons ? 0.5 : 0;
      }
  
      // add x/y properties aliased to clientX/Y
      e.x = e.clientX;
      e.y = e.clientY;
  
      // define the properties of the PointerEvent interface
      e.pointerId = inDict.pointerId || 0;
      e.width = inDict.width || 0;
      e.height = inDict.height || 0;
      e.pressure = pressure;
      e.tiltX = inDict.tiltX || 0;
      e.tiltY = inDict.tiltY || 0;
      e.twist = inDict.twist || 0;
      e.tangentialPressure = inDict.tangentialPressure || 0;
      e.pointerType = inDict.pointerType || '';
      e.hwTimestamp = inDict.hwTimestamp || 0;
      e.isPrimary = inDict.isPrimary || false;
      return e;
    }
  
    /**
     * This module implements a map of pointer states
     */
    var USE_MAP = window.Map && window.Map.prototype.forEach;
    var PointerMap = USE_MAP ? Map : SparseArrayMap;
  
    function SparseArrayMap() {
      this.array = [];
      this.size = 0;
    }
  
    SparseArrayMap.prototype = {
      set: function(k, v) {
        if (v === undefined) {
          return this.delete(k);
        }
        if (!this.has(k)) {
          this.size++;
        }
        this.array[k] = v;
      },
      has: function(k) {
        return this.array[k] !== undefined;
      },
      delete: function(k) {
        if (this.has(k)) {
          delete this.array[k];
          this.size--;
        }
      },
      get: function(k) {
        return this.array[k];
      },
      clear: function() {
        this.array.length = 0;
        this.size = 0;
      },
  
      // return value, key, map
      forEach: function(callback, thisArg) {
        return this.array.forEach(function(v, k) {
          callback.call(thisArg, v, k, this);
        }, this);
      }
    };
  
    var CLONE_PROPS = [
  
      // MouseEvent
      'bubbles',
      'cancelable',
      'view',
      'detail',
      'screenX',
      'screenY',
      'clientX',
      'clientY',
      'ctrlKey',
      'altKey',
      'shiftKey',
      'metaKey',
      'button',
      'relatedTarget',
  
      // DOM Level 3
      'buttons',
  
      // PointerEvent
      'pointerId',
      'width',
      'height',
      'pressure',
      'tiltX',
      'tiltY',
      'pointerType',
      'hwTimestamp',
      'isPrimary',
  
      // event instance
      'type',
      'target',
      'currentTarget',
      'which',
      'pageX',
      'pageY',
      'timeStamp'
    ];
  
    var CLONE_DEFAULTS = [
  
      // MouseEvent
      false,
      false,
      null,
      null,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null,
  
      // DOM Level 3
      0,
  
      // PointerEvent
      0,
      0,
      0,
      0,
      0,
      0,
      '',
      0,
      false,
  
      // event instance
      '',
      null,
      null,
      0,
      0,
      0,
      0
    ];
  
    var BOUNDARY_EVENTS = {
      'pointerover': 1,
      'pointerout': 1,
      'pointerenter': 1,
      'pointerleave': 1
    };
  
    var HAS_SVG_INSTANCE = (typeof SVGElementInstance !== 'undefined');
  
    /**
     * This module is for normalizing events. Mouse and Touch events will be
     * collected here, and fire PointerEvents that have the same semantics, no
     * matter the source.
     * Events fired:
     *   - pointerdown: a pointing is added
     *   - pointerup: a pointer is removed
     *   - pointermove: a pointer is moved
     *   - pointerover: a pointer crosses into an element
     *   - pointerout: a pointer leaves an element
     *   - pointercancel: a pointer will no longer generate events
     */
    var dispatcher = {
      pointermap: new PointerMap(),
      eventMap: Object.create(null),
      captureInfo: Object.create(null),
  
      // Scope objects for native events.
      // This exists for ease of testing.
      eventSources: Object.create(null),
      eventSourceList: [],
      /**
       * Add a new event source that will generate pointer events.
       *
       * `inSource` must contain an array of event names named `events`, and
       * functions with the names specified in the `events` array.
       * @param {string} name A name for the event source
       * @param {Object} source A new source of platform events.
       */
      registerSource: function(name, source) {
        var s = source;
        var newEvents = s.events;
        if (newEvents) {
          newEvents.forEach(function(e) {
            if (s[e]) {
              this.eventMap[e] = s[e].bind(s);
            }
          }, this);
          this.eventSources[name] = s;
          this.eventSourceList.push(s);
        }
      },
      register: function(element) {
        var l = this.eventSourceList.length;
        for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {
  
          // call eventsource register
          es.register.call(es, element);
        }
      },
      unregister: function(element) {
        var l = this.eventSourceList.length;
        for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {
  
          // call eventsource register
          es.unregister.call(es, element);
        }
      },
      contains: /*scope.external.contains || */function(container, contained) {
        try {
          return container.contains(contained);
        } catch (ex) {
  
          // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
          return false;
        }
      },
  
      // EVENTS
      down: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointerdown', inEvent);
      },
      move: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointermove', inEvent);
      },
      up: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointerup', inEvent);
      },
      enter: function(inEvent) {
        inEvent.bubbles = false;
        this.fireEvent('pointerenter', inEvent);
      },
      leave: function(inEvent) {
        inEvent.bubbles = false;
        this.fireEvent('pointerleave', inEvent);
      },
      over: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointerover', inEvent);
      },
      out: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointerout', inEvent);
      },
      cancel: function(inEvent) {
        inEvent.bubbles = true;
        this.fireEvent('pointercancel', inEvent);
      },
      leaveOut: function(event) {
        this.out(event);
        this.propagate(event, this.leave, false);
      },
      enterOver: function(event) {
        this.over(event);
        this.propagate(event, this.enter, true);
      },
  
      // LISTENER LOGIC
      eventHandler: function(inEvent) {
  
        // This is used to prevent multiple dispatch of pointerevents from
        // platform events. This can happen when two elements in different scopes
        // are set up to create pointer events, which is relevant to Shadow DOM.
        if (inEvent._handledByPE) {
          return;
        }
        var type = inEvent.type;
        var fn = this.eventMap && this.eventMap[type];
        if (fn) {
          fn(inEvent);
        }
        inEvent._handledByPE = true;
      },
  
      // set up event listeners
      listen: function(target, events) {
        events.forEach(function(e) {
          this.addEvent(target, e);
        }, this);
      },
  
      // remove event listeners
      unlisten: function(target, events) {
        events.forEach(function(e) {
          this.removeEvent(target, e);
        }, this);
      },
      addEvent: /*scope.external.addEvent || */function(target, eventName) {
        target.addEventListener(eventName, this.boundHandler);
      },
      removeEvent: /*scope.external.removeEvent || */function(target, eventName) {
        target.removeEventListener(eventName, this.boundHandler);
      },
  
      // EVENT CREATION AND TRACKING
      /**
       * Creates a new Event of type `inType`, based on the information in
       * `inEvent`.
       *
       * @param {string} inType A string representing the type of event to create
       * @param {Event} inEvent A platform event with a target
       * @return {Event} A PointerEvent of type `inType`
       */
      makeEvent: function(inType, inEvent) {
  
        // relatedTarget must be null if pointer is captured
        if (this.captureInfo[inEvent.pointerId]) {
          inEvent.relatedTarget = null;
        }
        var e = new PointerEvent(inType, inEvent);
        if (inEvent.preventDefault) {
          e.preventDefault = inEvent.preventDefault;
        }
        e._target = e._target || inEvent.target;
        return e;
      },
  
      // make and dispatch an event in one call
      fireEvent: function(inType, inEvent) {
        var e = this.makeEvent(inType, inEvent);
        return this.dispatchEvent(e);
      },
      /**
       * Returns a snapshot of inEvent, with writable properties.
       *
       * @param {Event} inEvent An event that contains properties to copy.
       * @return {Object} An object containing shallow copies of `inEvent`'s
       *    properties.
       */
      cloneEvent: function(inEvent) {
        var eventCopy = Object.create(null);
        var p;
        for (var i = 0; i < CLONE_PROPS.length; i++) {
          p = CLONE_PROPS[i];
          eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];
  
          // Work around SVGInstanceElement shadow tree
          // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
          // This is the behavior implemented by Firefox.
          if (HAS_SVG_INSTANCE && (p === 'target' || p === 'relatedTarget')) {
            if (eventCopy[p] instanceof SVGElementInstance) {
              eventCopy[p] = eventCopy[p].correspondingUseElement;
            }
          }
        }
  
        // keep the semantics of preventDefault
        if (inEvent.preventDefault) {
          eventCopy.preventDefault = function() {
            inEvent.preventDefault();
          };
        }
        return eventCopy;
      },
      getTarget: function(inEvent) {
        var capture = this.captureInfo[inEvent.pointerId];
        if (!capture) {
          return inEvent._target;
        }
        if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) {
          return capture;
        }
      },
      propagate: function(event, fn, propagateDown) {
        var target = event.target;
        var targets = [];
  
        // Order of conditions due to document.contains() missing in IE.
        while (target !== document && !target.contains(event.relatedTarget)) {
          targets.push(target);
          target = target.parentNode;
  
          // Touch: Do not propagate if node is detached.
          if (!target) {
            return;
          }
        }
        if (propagateDown) {
          targets.reverse();
        }
        targets.forEach(function(target) {
          event.target = target;
          fn.call(this, event);
        }, this);
      },
      setCapture: function(inPointerId, inTarget, skipDispatch) {
        if (this.captureInfo[inPointerId]) {
          this.releaseCapture(inPointerId, skipDispatch);
        }
  
        this.captureInfo[inPointerId] = inTarget;
        this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
        document.addEventListener('pointerup', this.implicitRelease);
        document.addEventListener('pointercancel', this.implicitRelease);
  
        var e = new PointerEvent('gotpointercapture');
        e.pointerId = inPointerId;
        e._target = inTarget;
  
        if (!skipDispatch) {
          this.asyncDispatchEvent(e);
        }
      },
      releaseCapture: function(inPointerId, skipDispatch) {
        var t = this.captureInfo[inPointerId];
        if (!t) {
          return;
        }
  
        this.captureInfo[inPointerId] = undefined;
        document.removeEventListener('pointerup', this.implicitRelease);
        document.removeEventListener('pointercancel', this.implicitRelease);
  
        var e = new PointerEvent('lostpointercapture');
        e.pointerId = inPointerId;
        e._target = t;
  
        if (!skipDispatch) {
          this.asyncDispatchEvent(e);
        }
      },
      /**
       * Dispatches the event to its target.
       *
       * @param {Event} inEvent The event to be dispatched.
       * @return {Boolean} True if an event handler returns true, false otherwise.
       */
      dispatchEvent: /*scope.external.dispatchEvent || */function(inEvent) {
        var t = this.getTarget(inEvent);
        if (t) {
          return t.dispatchEvent(inEvent);
        }
      },
      asyncDispatchEvent: function(inEvent) {
        requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
      }
    };
    dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);
  
    var targeting = {
      shadow: function(inEl) {
        if (inEl) {
          return inEl.shadowRoot || inEl.webkitShadowRoot;
        }
      },
      canTarget: function(shadow) {
        return shadow && Boolean(shadow.elementFromPoint);
      },
      targetingShadow: function(inEl) {
        var s = this.shadow(inEl);
        if (this.canTarget(s)) {
          return s;
        }
      },
      olderShadow: function(shadow) {
        var os = shadow.olderShadowRoot;
        if (!os) {
          var se = shadow.querySelector('shadow');
          if (se) {
            os = se.olderShadowRoot;
          }
        }
        return os;
      },
      allShadows: function(element) {
        var shadows = [];
        var s = this.shadow(element);
        while (s) {
          shadows.push(s);
          s = this.olderShadow(s);
        }
        return shadows;
      },
      searchRoot: function(inRoot, x, y) {
        if (inRoot) {
          var t = inRoot.elementFromPoint(x, y);
          var st, sr;
  
          // is element a shadow host?
          sr = this.targetingShadow(t);
          while (sr) {
  
            // find the the element inside the shadow root
            st = sr.elementFromPoint(x, y);
            if (!st) {
  
              // check for older shadows
              sr = this.olderShadow(sr);
            } else {
  
              // shadowed element may contain a shadow root
              var ssr = this.targetingShadow(st);
              return this.searchRoot(ssr, x, y) || st;
            }
          }
  
          // light dom element is the target
          return t;
        }
      },
      owner: function(element) {
        var s = element;
  
        // walk up until you hit the shadow root or document
        while (s.parentNode) {
          s = s.parentNode;
        }
  
        // the owner element is expected to be a Document or ShadowRoot
        if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          s = document;
        }
        return s;
      },
      findTarget: function(inEvent) {
        var x = inEvent.clientX;
        var y = inEvent.clientY;
  
        // if the listener is in the shadow root, it is much faster to start there
        var s = this.owner(inEvent.target);
  
        // if x, y is not in this root, fall back to document search
        if (!s.elementFromPoint(x, y)) {
          s = document;
        }
        return this.searchRoot(s, x, y);
      }
    };
  
    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    var map = Array.prototype.map.call.bind(Array.prototype.map);
    var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
    var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
    var MO = window.MutationObserver || window.WebKitMutationObserver;
    var SELECTOR = '[touch-action]';
    var OBSERVER_INIT = {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ['touch-action']
    };
  
    function Installer(add, remove, changed, binder) {
      this.addCallback = add.bind(binder);
      this.removeCallback = remove.bind(binder);
      this.changedCallback = changed.bind(binder);
      if (MO) {
        this.observer = new MO(this.mutationWatcher.bind(this));
      }
    }
  
    Installer.prototype = {
      watchSubtree: function(target) {
  
        // Only watch scopes that can target find, as these are top-level.
        // Otherwise we can see duplicate additions and removals that add noise.
        //
        // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
        // a removal without an insertion when a node is redistributed among
        // shadows. Since it all ends up correct in the document, watching only
        // the document will yield the correct mutations to watch.
        if (this.observer && targeting.canTarget(target)) {
          this.observer.observe(target, OBSERVER_INIT);
        }
      },
      enableOnSubtree: function(target) {
        this.watchSubtree(target);
        if (target === document && document.readyState !== 'complete') {
          this.installOnLoad();
        } else {
          this.installNewSubtree(target);
        }
      },
      installNewSubtree: function(target) {
        forEach(this.findElements(target), this.addElement, this);
      },
      findElements: function(target) {
        if (target.querySelectorAll) {
          return target.querySelectorAll(SELECTOR);
        }
        return [];
      },
      removeElement: function(el) {
        this.removeCallback(el);
      },
      addElement: function(el) {
        this.addCallback(el);
      },
      elementChanged: function(el, oldValue) {
        this.changedCallback(el, oldValue);
      },
      concatLists: function(accum, list) {
        return accum.concat(toArray(list));
      },
  
      // register all touch-action = none nodes on document load
      installOnLoad: function() {
        document.addEventListener('readystatechange', function() {
          if (document.readyState === 'complete') {
            this.installNewSubtree(document);
          }
        }.bind(this));
      },
      isElement: function(n) {
        return n.nodeType === Node.ELEMENT_NODE;
      },
      flattenMutationTree: function(inNodes) {
  
        // find children with touch-action
        var tree = map(inNodes, this.findElements, this);
  
        // make sure the added nodes are accounted for
        tree.push(filter(inNodes, this.isElement));
  
        // flatten the list
        return tree.reduce(this.concatLists, []);
      },
      mutationWatcher: function(mutations) {
        mutations.forEach(this.mutationHandler, this);
      },
      mutationHandler: function(m) {
        if (m.type === 'childList') {
          var added = this.flattenMutationTree(m.addedNodes);
          added.forEach(this.addElement, this);
          var removed = this.flattenMutationTree(m.removedNodes);
          removed.forEach(this.removeElement, this);
        } else if (m.type === 'attributes') {
          this.elementChanged(m.target, m.oldValue);
        }
      }
    };
  
    function shadowSelector(v) {
      return 'body /shadow-deep/ ' + selector(v);
    }
    function selector(v) {
      return '[touch-action="' + v + '"]';
    }
    function rule(v) {
      return '{ -ms-touch-action: ' + v + '; touch-action: ' + v + '; }';
    }
    var attrib2css = [
      'none',
      'auto',
      'pan-x',
      'pan-y',
      {
        rule: 'pan-x pan-y',
        selectors: [
          'pan-x pan-y',
          'pan-y pan-x'
        ]
      }
    ];
    var styles = '';
  
    // only install stylesheet if the browser has touch action support
    var hasNativePE = window.PointerEvent || window.MSPointerEvent;
  
    // only add shadow selectors if shadowdom is supported
    var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;
  
    function applyAttributeStyles() {
      if (hasNativePE) {
        attrib2css.forEach(function(r) {
          if (String(r) === r) {
            styles += selector(r) + rule(r) + '\n';
            if (hasShadowRoot) {
              styles += shadowSelector(r) + rule(r) + '\n';
            }
          } else {
            styles += r.selectors.map(selector) + rule(r.rule) + '\n';
            if (hasShadowRoot) {
              styles += r.selectors.map(shadowSelector) + rule(r.rule) + '\n';
            }
          }
        });
  
        var el = document.createElement('style');
        el.textContent = styles;
        document.head.appendChild(el);
      }
    }
  
    var pointermap = dispatcher.pointermap;
  
    // radius around touchend that swallows mouse events
    var DEDUP_DIST = 25;
  
    // left, middle, right, back, forward
    var BUTTON_TO_BUTTONS = [1, 4, 2, 8, 16];
  
    var HAS_BUTTONS = false;
    try {
      HAS_BUTTONS = new MouseEvent('test', { buttons: 1 }).buttons === 1;
    } catch (e) {}
  
    // handler block for native mouse events
    var mouseEvents = {
      POINTER_ID: 1,
      POINTER_TYPE: 'mouse',
      events: [
        'mousedown',
        'mousemove',
        'mouseup',
        'mouseover',
        'mouseout'
      ],
      register: function(target) {
        dispatcher.listen(target, this.events);
      },
      unregister: function(target) {
        dispatcher.unlisten(target, this.events);
      },
      lastTouches: [],
  
      // collide with the global mouse listener
      isEventSimulatedFromTouch: function(inEvent) {
        var lts = this.lastTouches;
        var x = inEvent.clientX;
        var y = inEvent.clientY;
        for (var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++) {
  
          // simulated mouse events will be swallowed near a primary touchend
          var dx = Math.abs(x - t.x);
          var dy = Math.abs(y - t.y);
          if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) {
            return true;
          }
        }
      },
      prepareEvent: function(inEvent) {
        var e = dispatcher.cloneEvent(inEvent);
  
        // forward mouse preventDefault
        var pd = e.preventDefault;
        e.preventDefault = function() {
          inEvent.preventDefault();
          pd();
        };
        e.pointerId = this.POINTER_ID;
        e.isPrimary = true;
        e.pointerType = this.POINTER_TYPE;
        return e;
      },
      prepareButtonsForMove: function(e, inEvent) {
        var p = pointermap.get(this.POINTER_ID);
  
        // Update buttons state after possible out-of-document mouseup.
        if (inEvent.which === 0 || !p) {
          e.buttons = 0;
        } else {
          e.buttons = p.buttons;
        }
        inEvent.buttons = e.buttons;
      },
      mousedown: function(inEvent) {
        if (!this.isEventSimulatedFromTouch(inEvent)) {
          var p = pointermap.get(this.POINTER_ID);
          var e = this.prepareEvent(inEvent);
          if (!HAS_BUTTONS) {
            e.buttons = BUTTON_TO_BUTTONS[e.button];
            if (p) { e.buttons |= p.buttons; }
            inEvent.buttons = e.buttons;
          }
          pointermap.set(this.POINTER_ID, inEvent);
          if (!p || p.buttons === 0) {
            dispatcher.down(e);
          } else {
            dispatcher.move(e);
          }
        }
      },
      mousemove: function(inEvent) {
        if (!this.isEventSimulatedFromTouch(inEvent)) {
          var e = this.prepareEvent(inEvent);
          if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
          e.button = -1;
          pointermap.set(this.POINTER_ID, inEvent);
          dispatcher.move(e);
        }
      },
      mouseup: function(inEvent) {
        if (!this.isEventSimulatedFromTouch(inEvent)) {
          var p = pointermap.get(this.POINTER_ID);
          var e = this.prepareEvent(inEvent);
          if (!HAS_BUTTONS) {
            var up = BUTTON_TO_BUTTONS[e.button];
  
            // Produces wrong state of buttons in Browsers without `buttons` support
            // when a mouse button that was pressed outside the document is released
            // inside and other buttons are still pressed down.
            e.buttons = p ? p.buttons & ~up : 0;
            inEvent.buttons = e.buttons;
          }
          pointermap.set(this.POINTER_ID, inEvent);
  
          // Support: Firefox <=44 only
          // FF Ubuntu includes the lifted button in the `buttons` property on
          // mouseup.
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
          e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
          if (e.buttons === 0) {
            dispatcher.up(e);
          } else {
            dispatcher.move(e);
          }
        }
      },
      mouseover: function(inEvent) {
        if (!this.isEventSimulatedFromTouch(inEvent)) {
          var e = this.prepareEvent(inEvent);
          if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
          e.button = -1;
          pointermap.set(this.POINTER_ID, inEvent);
          dispatcher.enterOver(e);
        }
      },
      mouseout: function(inEvent) {
        if (!this.isEventSimulatedFromTouch(inEvent)) {
          var e = this.prepareEvent(inEvent);
          if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
          e.button = -1;
          dispatcher.leaveOut(e);
        }
      },
      cancel: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.cancel(e);
        this.deactivateMouse();
      },
      deactivateMouse: function() {
        pointermap.delete(this.POINTER_ID);
      }
    };
  
    var captureInfo = dispatcher.captureInfo;
    var findTarget = targeting.findTarget.bind(targeting);
    var allShadows = targeting.allShadows.bind(targeting);
    var pointermap$1 = dispatcher.pointermap;
  
    // This should be long enough to ignore compat mouse events made by touch
    var DEDUP_TIMEOUT = 2500;
    var CLICK_COUNT_TIMEOUT = 200;
    var ATTRIB = 'touch-action';
    var INSTALLER;
  
    // handler block for native touch events
    var touchEvents = {
      events: [
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel'
      ],
      register: function(target) {
        INSTALLER.enableOnSubtree(target);
      },
      unregister: function() {
  
        // TODO(dfreedman): is it worth it to disconnect the MO?
      },
      elementAdded: function(el) {
        var a = el.getAttribute(ATTRIB);
        var st = this.touchActionToScrollType(a);
        if (st) {
          el._scrollType = st;
          dispatcher.listen(el, this.events);
  
          // set touch-action on shadows as well
          allShadows(el).forEach(function(s) {
            s._scrollType = st;
            dispatcher.listen(s, this.events);
          }, this);
        }
      },
      elementRemoved: function(el) {
        el._scrollType = undefined;
        dispatcher.unlisten(el, this.events);
  
        // remove touch-action from shadow
        allShadows(el).forEach(function(s) {
          s._scrollType = undefined;
          dispatcher.unlisten(s, this.events);
        }, this);
      },
      elementChanged: function(el, oldValue) {
        var a = el.getAttribute(ATTRIB);
        var st = this.touchActionToScrollType(a);
        var oldSt = this.touchActionToScrollType(oldValue);
  
        // simply update scrollType if listeners are already established
        if (st && oldSt) {
          el._scrollType = st;
          allShadows(el).forEach(function(s) {
            s._scrollType = st;
          }, this);
        } else if (oldSt) {
          this.elementRemoved(el);
        } else if (st) {
          this.elementAdded(el);
        }
      },
      scrollTypes: {
        EMITTER: 'none',
        XSCROLLER: 'pan-x',
        YSCROLLER: 'pan-y',
        SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
      },
      touchActionToScrollType: function(touchAction) {
        var t = touchAction;
        var st = this.scrollTypes;
        if (t === 'none') {
          return 'none';
        } else if (t === st.XSCROLLER) {
          return 'X';
        } else if (t === st.YSCROLLER) {
          return 'Y';
        } else if (st.SCROLLER.exec(t)) {
          return 'XY';
        }
      },
      POINTER_TYPE: 'touch',
      firstTouch: null,
      isPrimaryTouch: function(inTouch) {
        return this.firstTouch === inTouch.identifier;
      },
      setPrimaryTouch: function(inTouch) {
  
        // set primary touch if there no pointers, or the only pointer is the mouse
        if (pointermap$1.size === 0 || (pointermap$1.size === 1 && pointermap$1.has(1))) {
          this.firstTouch = inTouch.identifier;
          this.firstXY = { X: inTouch.clientX, Y: inTouch.clientY };
          this.scrolling = false;
          this.cancelResetClickCount();
        }
      },
      removePrimaryPointer: function(inPointer) {
        if (inPointer.isPrimary) {
          this.firstTouch = null;
          this.firstXY = null;
          this.resetClickCount();
        }
      },
      clickCount: 0,
      resetId: null,
      resetClickCount: function() {
        var fn = function() {
          this.clickCount = 0;
          this.resetId = null;
        }.bind(this);
        this.resetId = setTimeout(fn, CLICK_COUNT_TIMEOUT);
      },
      cancelResetClickCount: function() {
        if (this.resetId) {
          clearTimeout(this.resetId);
        }
      },
      typeToButtons: function(type) {
        var ret = 0;
        if (type === 'touchstart' || type === 'touchmove') {
          ret = 1;
        }
        return ret;
      },
      touchToPointer: function(inTouch) {
        var cte = this.currentTouchEvent;
        var e = dispatcher.cloneEvent(inTouch);
  
        // We reserve pointerId 1 for Mouse.
        // Touch identifiers can start at 0.
        // Add 2 to the touch identifier for compatibility.
        var id = e.pointerId = inTouch.identifier + 2;
        e.target = captureInfo[id] || findTarget(e);
        e.bubbles = true;
        e.cancelable = true;
        e.detail = this.clickCount;
        e.button = 0;
        e.buttons = this.typeToButtons(cte.type);
        e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
        e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
        e.pressure = inTouch.force || inTouch.webkitForce || 0.5;
        e.isPrimary = this.isPrimaryTouch(inTouch);
        e.pointerType = this.POINTER_TYPE;
  
        // forward modifier keys
        e.altKey = cte.altKey;
        e.ctrlKey = cte.ctrlKey;
        e.metaKey = cte.metaKey;
        e.shiftKey = cte.shiftKey;
  
        // forward touch preventDefaults
        var self = this;
        e.preventDefault = function() {
          self.scrolling = false;
          self.firstXY = null;
          cte.preventDefault();
        };
        return e;
      },
      processTouches: function(inEvent, inFunction) {
        var tl = inEvent.changedTouches;
        this.currentTouchEvent = inEvent;
        for (var i = 0, t; i < tl.length; i++) {
          t = tl[i];
          inFunction.call(this, this.touchToPointer(t));
        }
      },
  
      // For single axis scrollers, determines whether the element should emit
      // pointer events or behave as a scroller
      shouldScroll: function(inEvent) {
        if (this.firstXY) {
          var ret;
          var scrollAxis = inEvent.currentTarget._scrollType;
          if (scrollAxis === 'none') {
  
            // this element is a touch-action: none, should never scroll
            ret = false;
          } else if (scrollAxis === 'XY') {
  
            // this element should always scroll
            ret = true;
          } else {
            var t = inEvent.changedTouches[0];
  
            // check the intended scroll axis, and other axis
            var a = scrollAxis;
            var oa = scrollAxis === 'Y' ? 'X' : 'Y';
            var da = Math.abs(t['client' + a] - this.firstXY[a]);
            var doa = Math.abs(t['client' + oa] - this.firstXY[oa]);
  
            // if delta in the scroll axis > delta other axis, scroll instead of
            // making events
            ret = da >= doa;
          }
          this.firstXY = null;
          return ret;
        }
      },
      findTouch: function(inTL, inId) {
        for (var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++) {
          if (t.identifier === inId) {
            return true;
          }
        }
      },
  
      // In some instances, a touchstart can happen without a touchend. This
      // leaves the pointermap in a broken state.
      // Therefore, on every touchstart, we remove the touches that did not fire a
      // touchend event.
      // To keep state globally consistent, we fire a
      // pointercancel for this "abandoned" touch
      vacuumTouches: function(inEvent) {
        var tl = inEvent.touches;
  
        // pointermap.size should be < tl.length here, as the touchstart has not
        // been processed yet.
        if (pointermap$1.size >= tl.length) {
          var d = [];
          pointermap$1.forEach(function(value, key) {
  
            // Never remove pointerId == 1, which is mouse.
            // Touch identifiers are 2 smaller than their pointerId, which is the
            // index in pointermap.
            if (key !== 1 && !this.findTouch(tl, key - 2)) {
              var p = value.out;
              d.push(p);
            }
          }, this);
          d.forEach(this.cancelOut, this);
        }
      },
      touchstart: function(inEvent) {
        this.vacuumTouches(inEvent);
        this.setPrimaryTouch(inEvent.changedTouches[0]);
        this.dedupSynthMouse(inEvent);
        if (!this.scrolling) {
          this.clickCount++;
          this.processTouches(inEvent, this.overDown);
        }
      },
      overDown: function(inPointer) {
        pointermap$1.set(inPointer.pointerId, {
          target: inPointer.target,
          out: inPointer,
          outTarget: inPointer.target
        });
        dispatcher.enterOver(inPointer);
        dispatcher.down(inPointer);
      },
      touchmove: function(inEvent) {
        if (!this.scrolling) {
          if (this.shouldScroll(inEvent)) {
            this.scrolling = true;
            this.touchcancel(inEvent);
          } else {
            inEvent.preventDefault();
            this.processTouches(inEvent, this.moveOverOut);
          }
        }
      },
      moveOverOut: function(inPointer) {
        var event = inPointer;
        var pointer = pointermap$1.get(event.pointerId);
  
        // a finger drifted off the screen, ignore it
        if (!pointer) {
          return;
        }
        var outEvent = pointer.out;
        var outTarget = pointer.outTarget;
        dispatcher.move(event);
        if (outEvent && outTarget !== event.target) {
          outEvent.relatedTarget = event.target;
          event.relatedTarget = outTarget;
  
          // recover from retargeting by shadow
          outEvent.target = outTarget;
          if (event.target) {
            dispatcher.leaveOut(outEvent);
            dispatcher.enterOver(event);
          } else {
  
            // clean up case when finger leaves the screen
            event.target = outTarget;
            event.relatedTarget = null;
            this.cancelOut(event);
          }
        }
        pointer.out = event;
        pointer.outTarget = event.target;
      },
      touchend: function(inEvent) {
        this.dedupSynthMouse(inEvent);
        this.processTouches(inEvent, this.upOut);
      },
      upOut: function(inPointer) {
        if (!this.scrolling) {
          dispatcher.up(inPointer);
          dispatcher.leaveOut(inPointer);
        }
        this.cleanUpPointer(inPointer);
      },
      touchcancel: function(inEvent) {
        this.processTouches(inEvent, this.cancelOut);
      },
      cancelOut: function(inPointer) {
        dispatcher.cancel(inPointer);
        dispatcher.leaveOut(inPointer);
        this.cleanUpPointer(inPointer);
      },
      cleanUpPointer: function(inPointer) {
        pointermap$1.delete(inPointer.pointerId);
        this.removePrimaryPointer(inPointer);
      },
  
      // prevent synth mouse events from creating pointer events
      dedupSynthMouse: function(inEvent) {
        var lts = mouseEvents.lastTouches;
        var t = inEvent.changedTouches[0];
  
        // only the primary finger will synth mouse events
        if (this.isPrimaryTouch(t)) {
  
          // remember x/y of last touch
          var lt = { x: t.clientX, y: t.clientY };
          lts.push(lt);
          var fn = (function(lts, lt) {
            var i = lts.indexOf(lt);
            if (i > -1) {
              lts.splice(i, 1);
            }
          }).bind(null, lts, lt);
          setTimeout(fn, DEDUP_TIMEOUT);
        }
      }
    };
  
    INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved,
      touchEvents.elementChanged, touchEvents);
  
    var pointermap$2 = dispatcher.pointermap;
    var HAS_BITMAP_TYPE = window.MSPointerEvent &&
      typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === 'number';
    var msEvents = {
      events: [
        'MSPointerDown',
        'MSPointerMove',
        'MSPointerUp',
        'MSPointerOut',
        'MSPointerOver',
        'MSPointerCancel',
        'MSGotPointerCapture',
        'MSLostPointerCapture'
      ],
      register: function(target) {
        dispatcher.listen(target, this.events);
      },
      unregister: function(target) {
        dispatcher.unlisten(target, this.events);
      },
      POINTER_TYPES: [
        '',
        'unavailable',
        'touch',
        'pen',
        'mouse'
      ],
      prepareEvent: function(inEvent) {
        var e = inEvent;
        if (HAS_BITMAP_TYPE) {
          e = dispatcher.cloneEvent(inEvent);
          e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
        }
        return e;
      },
      cleanup: function(id) {
        pointermap$2.delete(id);
      },
      MSPointerDown: function(inEvent) {
        pointermap$2.set(inEvent.pointerId, inEvent);
        var e = this.prepareEvent(inEvent);
        dispatcher.down(e);
      },
      MSPointerMove: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.move(e);
      },
      MSPointerUp: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.up(e);
        this.cleanup(inEvent.pointerId);
      },
      MSPointerOut: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.leaveOut(e);
      },
      MSPointerOver: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.enterOver(e);
      },
      MSPointerCancel: function(inEvent) {
        var e = this.prepareEvent(inEvent);
        dispatcher.cancel(e);
        this.cleanup(inEvent.pointerId);
      },
      MSLostPointerCapture: function(inEvent) {
        var e = dispatcher.makeEvent('lostpointercapture', inEvent);
        dispatcher.dispatchEvent(e);
      },
      MSGotPointerCapture: function(inEvent) {
        var e = dispatcher.makeEvent('gotpointercapture', inEvent);
        dispatcher.dispatchEvent(e);
      }
    };
  
    function applyPolyfill() {
  
      // only activate if this platform does not have pointer events
      if (!window.PointerEvent) {
        window.PointerEvent = PointerEvent;
  
        if (window.navigator.msPointerEnabled) {
          var tp = window.navigator.msMaxTouchPoints;
          Object.defineProperty(window.navigator, 'maxTouchPoints', {
            value: tp,
            enumerable: true
          });
          dispatcher.registerSource('ms', msEvents);
        } else {
          Object.defineProperty(window.navigator, 'maxTouchPoints', {
            value: 0,
            enumerable: true
          });
          dispatcher.registerSource('mouse', mouseEvents);
          if (window.ontouchstart !== undefined) {
            dispatcher.registerSource('touch', touchEvents);
          }
        }
  
        dispatcher.register(document);
      }
    }
  
    var n = window.navigator;
    var s;
    var r;
    var h;
    function assertActive(id) {
      if (!dispatcher.pointermap.has(id)) {
        var error = new Error('InvalidPointerId');
        error.name = 'InvalidPointerId';
        throw error;
      }
    }
    function assertConnected(elem) {
      var parent = elem.parentNode;
      while (parent && parent !== elem.ownerDocument) {
        parent = parent.parentNode;
      }
      if (!parent) {
        var error = new Error('InvalidStateError');
        error.name = 'InvalidStateError';
        throw error;
      }
    }
    function inActiveButtonState(id) {
      var p = dispatcher.pointermap.get(id);
      return p.buttons !== 0;
    }
    if (n.msPointerEnabled) {
      s = function(pointerId) {
        assertActive(pointerId);
        assertConnected(this);
        if (inActiveButtonState(pointerId)) {
          dispatcher.setCapture(pointerId, this, true);
          this.msSetPointerCapture(pointerId);
        }
      };
      r = function(pointerId) {
        assertActive(pointerId);
        dispatcher.releaseCapture(pointerId, true);
        this.msReleasePointerCapture(pointerId);
      };
    } else {
      s = function setPointerCapture(pointerId) {
        assertActive(pointerId);
        assertConnected(this);
        if (inActiveButtonState(pointerId)) {
          dispatcher.setCapture(pointerId, this);
        }
      };
      r = function releasePointerCapture(pointerId) {
        assertActive(pointerId);
        dispatcher.releaseCapture(pointerId);
      };
    }
    h = function hasPointerCapture(pointerId) {
      return !!dispatcher.captureInfo[pointerId];
    };
  
    function applyPolyfill$1() {
      if (window.Element && !Element.prototype.setPointerCapture) {
        Object.defineProperties(Element.prototype, {
          'setPointerCapture': {
            value: s
          },
          'releasePointerCapture': {
            value: r
          },
          'hasPointerCapture': {
            value: h
          }
        });
      }
    }
  
    applyAttributeStyles();
    applyPolyfill();
    applyPolyfill$1();
  
    var pointerevents = {
      dispatcher: dispatcher,
      Installer: Installer,
      PointerEvent: PointerEvent,
      PointerMap: PointerMap,
      targetFinding: targeting
    };
  
    return pointerevents;
  
  }));


  /////
  /* BARBA 2.9.7 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));

// --- BARBA Prefetch 2.1.10
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).barbaPrefetch=i()}(this,function(){var t="2.1.10",i=window.requestIdleCallback||function(t){var i=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-i))}})},1)};return new(function(){function n(){this.name="@barba/prefetch",this.version=t,this.toPrefetch=new Set}var e=n.prototype;return e.install=function(t,i){var n=void 0===i?{}:i,e=n.root,o=void 0===e?document.body:e,r=n.timeout,s=void 0===r?2e3:r;this.logger=new t.Logger(this.name),this.logger.info(this.version),this.barba=t,this.root=o,this.timeout=s},e.init=function(){var t=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(i){i.forEach(function(i){if(i.isIntersecting){var n=i.target,e=t.barba.dom.getHref(n);t.toPrefetch.has(e)&&(t.observer.unobserve(n),t.barba.cache.has(e)?t.barba.cache.update(e,{action:"prefetch"}):t.barba.cache.set(e,t.barba.request(e,t.barba.timeout,t.barba.onRequestError.bind(t.barba,"barba")).catch(function(i){t.logger.error(i)}),"prefetch"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},e.observe=function(){var t=this;i(function(){t.root.querySelectorAll("a").forEach(function(i){var n=i,e=t.barba.dom.getHref(n);t.barba.cache.has(e)||t.barba.prevent.checkHref(e)||t.barba.prevent.checkLink(n,{},e)||(t.observer.observe(i),t.toPrefetch.add(e))})},{timeout:this.timeout})},n}())});
//# sourceMappingURL=barba-prefetch.umd.js.map

/*LOCOMOTIVE SCROLL 4.0.6*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=r(t);if(e){var n=r(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var l,r=t[Symbol.iterator]();!(s=(l=r.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetHeight,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(l){var r=f(l,2),a=r[0],c=r[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||r,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,l,r=(o()-e.startTime)/468;l=r=r>1?1:r,i=.5*(1-Math.cos(Math.PI*l)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,l){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=r),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:l})}}}})),S=(x.polyfill,function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=x,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(r(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(r(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,l=e.dataset[t.name+"Class"]||t.class,r="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;"#header"===d&&console.log(s,f),c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:r,class:l,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[r]=v,e.classList.contains(l)&&t.setInView(t.els[r],r)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,l=o+n.targetEl.offsetHeight,r=t.getRelativeOffset(n.offset);t.els[s].top=o+r[0],t.els[s].bottom=l-r[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if(i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i,s){i=i.toFixed();var n=function t(){window.pageYOffset.toFixed()===i&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",n)}window.scrollTo({top:i,behavior:"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var l in i=Object(arguments[o]))T.call(i,l)&&(n[l]=i[l]);if(k){s=k(i);for(var r=0;r<s.length;r++)E.call(i,s[r])&&(n[s[r]]=i[s[r]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,l=s.length;o<l;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,l,r;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),r=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),l=r/s.length,n=o/i.length,Math.abs(l)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,Y=37,P=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case Y:case P:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function l(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var l=s+.1*((e-n[o])/(n[o+1]-n[o])),r=Q(l,t,i);return r>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,l,t,i):0===r?l:function(t,e,i,s,n){var o,l,r=0;do{(o=J(l=e+(i-e)/2,s,n)-t)>0?i=l:e=l}while(Math.abs(o)>1e-7&&++r<10);return l}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(l(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,lt=34,rt=36,at=35,ct=function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:0,y:0}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(r(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.instance.delta[this.directionAxis]-=240;break;case it:this.instance.delta[this.directionAxis]+=240;break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(e){var i=f(e,2),s=(i[0],i[1]);s.persistent||t.instance.scroll[t.directionAxis]>s.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<s.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(s.el,-t.instance.scroll[t.directionAxis],0):t.transform(s.el,0,-t.instance.scroll[t.directionAxis]),s.inView||(s.inView=!0,s.el.style.opacity=1,s.el.style.pointerEvents="all",s.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):(s.inView&&(s.inView=!1,s.el.style.opacity=0,s.el.style.pointerEvents="none",s.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(s.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(r(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,l=K(e),r=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return l.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===r||r.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(r.el).y-q(o).y,n=w.left-q(r.el).x-q(o).x);var x=s+o.offsetHeight,S=n+o.offsetWidth,k={x:(S-n)/2+n,y:(x-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,x=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((S=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(x-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],S-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],x-=D[1]}var L={el:e,id:c,class:a,section:r,top:s,middle:k,bottom:x,left:n,right:S,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},l={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},r="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:l,inView:!1,persistent:r,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),l=F(o.x,e,s),r=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l,",").concat(r,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(l){var r=f(l,2),a=(r[0],r[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=i.duration||1e3,o=i.easing||[.25,0,.35,1],l=!!i.disableLerp,r=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){l?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var x=Date.now(),S=function t(){var i=(Date.now()-x)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),r&&r()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};S()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new S(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));



/*!
 * matter-js 0.18.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Matter",[],t):"object"==typeof exports?exports.Matter=t():e.Matter=t()}(this,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){var n={};e.exports=n,function(){n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n._warnedOnce={},n._decomp=null,n.extend=function(e,t){var i,o;"boolean"==typeof t?(i=2,o=t):(i=1,o=!0);for(var r=i;r<arguments.length;r++){var a=arguments[r];if(a)for(var s in a)o&&a[s]&&a[s].constructor===Object?e[s]&&e[s].constructor!==Object?e[s]=a[s]:(e[s]=e[s]||{},n.extend(e[s],o,a[s])):e[s]=a[s]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),i=0;i<n.length;i++)t.push(e[n[i]]);return t}for(var o in e)t.push(e[o]);return t},n.get=function(e,t,n,i){t=t.split(".").slice(n,i);for(var o=0;o<t.length;o+=1)e=e[t[o]];return e},n.set=function(e,t,i,o,r){var a=t.split(".").slice(o,r);return n.get(e,t,0,-1)[a[a.length-1]]=i,i},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(n.random()*(t+1)),o=e[t];e[t]=e[i],e[i]=o}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.isFunction=function(e){return"function"==typeof e},n.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},n.isString=function(e){return"[object String]"===toString.call(e)},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-n._nowStartTime},n.random=function(t,n){return n=void 0!==n?n:1,(t=void 0!==t?t:0)+e()*(n-t)};var e=function(){return n._seed=(9301*n._seed+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(" ");n._warnedOnce[e]||(n.warn(e),n._warnedOnce[e]=!0)},n.deprecated=function(e,t,i){e[t]=n.chain((function(){n.warnOnce("🔅 deprecated 🔅",i)}),e[t])},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n},n.topologicalSort=function(e){var t=[],i=[],o=[];for(var r in e)i[r]||o[r]||n._topologicalSort(r,i,o,e,t);return t},n._topologicalSort=function(e,t,i,o,r){var a=o[e]||[];i[e]=!0;for(var s=0;s<a.length;s+=1){var l=a[s];i[l]||(t[l]||n._topologicalSort(l,t,i,o,r))}i[e]=!1,t[e]=!0,r.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var i=function(){for(var t,n=new Array(arguments.length),i=0,o=arguments.length;i<o;i++)n[i]=arguments[i];for(i=0;i<e.length;i+=1){var r=e[i].apply(t,n);void 0!==r&&(t=r)}return t};return i._chained=e,i},n.chainPathBefore=function(e,t,i){return n.set(e,t,n.chain(i,n.get(e,t)))},n.chainPathAfter=function(e,t,i){return n.set(e,t,n.chain(n.get(e,t),i))},n.setDecomp=function(e){n._decomp=e},n.getDecomp=function(){var e=n._decomp;try{e||"undefined"==typeof window||(e=window.decomp),e||"undefined"==typeof global||(e=global.decomp)}catch(t){e=null}return e}}()},function(e,t){var n={};e.exports=n,n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var i=0;i<t.length;i++){var o=t[i];o.x>e.max.x&&(e.max.x=o.x),o.x<e.min.x&&(e.min.x=o.x),o.y>e.max.y&&(e.max.y=o.y),o.y<e.min.y&&(e.min.y=o.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,i=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+i}},function(e,t){var n={};e.exports=n,n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var i=Math.cos(t),o=Math.sin(t);n||(n={});var r=e.x*i-e.y*o;return n.y=e.x*o+e.y*i,n.x=r,n},n.rotateAbout=function(e,t,n,i){var o=Math.cos(t),r=Math.sin(t);i||(i={});var a=n.x+((e.x-n.x)*o-(e.y-n.y)*r);return i.y=n.y+((e.x-n.x)*r+(e.y-n.y)*o),i.x=a,i},n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return{x:(t=!0===t?-1:1)*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.create=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i],r={x:o.x,y:o.y,index:i,body:t,isInternal:!1};n.push(r)}return n},i.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,(function(e,t,i){n.push({x:parseFloat(t),y:parseFloat(i)})})),i.create(n,t)},i.centre=function(e){for(var t,n,r,a=i.area(e,!0),s={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=o.cross(e[l],e[r]),n=o.mult(o.add(e[l],e[r]),t),s=o.add(s,n);return o.div(s,6*a)},i.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return o.div(t,e.length)},i.area=function(e,t){for(var n=0,i=e.length-1,o=0;o<e.length;o++)n+=(e[i].x-e[o].x)*(e[i].y+e[o].y),i=o;return t?n/2:Math.abs(n)/2},i.inertia=function(e,t){for(var n,i,r=0,a=0,s=e,l=0;l<s.length;l++)i=(l+1)%s.length,r+=(n=Math.abs(o.cross(s[i],s[l])))*(o.dot(s[i],s[i])+o.dot(s[i],s[l])+o.dot(s[l],s[l])),a+=n;return t/6*(r/a)},i.translate=function(e,t,n){n=void 0!==n?n:1;var i,o=e.length,r=t.x*n,a=t.y*n;for(i=0;i<o;i++)e[i].x+=r,e[i].y+=a;return e},i.rotate=function(e,t,n){if(0!==t){var i,o,r,a,s=Math.cos(t),l=Math.sin(t),c=n.x,u=n.y,d=e.length;for(a=0;a<d;a++)o=(i=e[a]).x-c,r=i.y-u,i.x=c+(o*s-r*l),i.y=u+(o*l+r*s);return e}},i.contains=function(e,t){for(var n,i=t.x,o=t.y,r=e.length,a=e[r-1],s=0;s<r;s++){if(n=e[s],(i-a.x)*(n.y-a.y)+(o-a.y)*(a.x-n.x)>0)return!1;a=n}return!0},i.scale=function(e,t,n,r){if(1===t&&1===n)return e;var a,s;r=r||i.centre(e);for(var l=0;l<e.length;l++)a=e[l],s=o.sub(a,r),e[l].x=r.x+s.x*t,e[l].y=r.y+s.y*n;return e},i.chamfer=function(e,t,n,i,a){t="number"==typeof t?[t]:t||[8],n=void 0!==n?n:-1,i=i||2,a=a||14;for(var s=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],u=e[l],d=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0!==p){var f=o.normalise({x:u.y-c.y,y:c.x-u.x}),v=o.normalise({x:d.y-u.y,y:u.x-d.x}),y=Math.sqrt(2*Math.pow(p,2)),m=o.mult(r.clone(f),p),g=o.normalise(o.mult(o.add(f,v),.5)),x=o.sub(u,o.mult(g,y)),h=n;-1===n&&(h=1.75*Math.pow(p,.32)),(h=r.clamp(h,i,a))%2==1&&(h+=1);for(var b=Math.acos(o.dot(f,v))/h,S=0;S<h;S++)s.push(o.add(o.rotate(m,b*S),x))}else s.push(u)}return s},i.clockwiseSort=function(e){var t=i.mean(e);return e.sort((function(e,n){return o.angle(t,e)-o.angle(t,n)})),e},i.isConvex=function(e){var t,n,i,o,r=0,a=e.length;if(a<3)return null;for(t=0;t<a;t++)if(i=(t+2)%a,o=(e[n=(t+1)%a].x-e[t].x)*(e[i].y-e[n].y),(o-=(e[n].y-e[t].y)*(e[i].x-e[n].x))<0?r|=1:o>0&&(r|=2),3===r)return!1;return 0!==r||null},i.hull=function(e){var t,n,i=[],r=[];for((e=e.slice(0)).sort((function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y})),n=0;n<e.length;n+=1){for(t=e[n];r.length>=2&&o.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(n=e.length-1;n>=0;n-=1){for(t=e[n];i.length>=2&&o.cross3(i[i.length-2],i[i.length-1],t)<=0;)i.pop();i.push(t)}return i.pop(),r.pop(),i.concat(r)}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.on=function(e,t,n){for(var i,o=t.split(" "),r=0;r<o.length;r++)i=o[r],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},i.off=function(e,t,n){if(t){"function"==typeof t&&(n=t,t=o.keys(e.events).join(" "));for(var i=t.split(" "),r=0;r<i.length;r++){var a=e.events[i[r]],s=[];if(n&&a)for(var l=0;l<a.length;l++)a[l]!==n&&s.push(a[l]);e.events[i[r]]=s}}else e.events={}},i.trigger=function(e,t,n){var i,r,a,s,l=e.events;if(l&&o.keys(l).length>0){n||(n={}),i=t.split(" ");for(var c=0;c<i.length;c++)if(a=l[r=i[c]]){(s=o.clone(n,!1)).name=r,s.source=e;for(var u=0;u<a.length;u++)a[u].apply(e,[s])}}}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(0),a=n(1),s=n(6);i.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},i.setModified=function(e,t,n,o){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),n&&e.parent&&i.setModified(e.parent,t,n,o),o)for(var r=0;r<e.composites.length;r++){var a=e.composites[r];i.setModified(a,t,n,o)}},i.add=function(e,t){var n=[].concat(t);o.trigger(e,"beforeAdd",{object:t});for(var a=0;a<n.length;a++){var s=n[a];switch(s.type){case"body":if(s.parent!==s){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(e,s);break;case"constraint":i.addConstraint(e,s);break;case"composite":i.addComposite(e,s);break;case"mouseConstraint":i.addConstraint(e,s.constraint)}}return o.trigger(e,"afterAdd",{object:t}),e},i.remove=function(e,t,n){var r=[].concat(t);o.trigger(e,"beforeRemove",{object:t});for(var a=0;a<r.length;a++){var s=r[a];switch(s.type){case"body":i.removeBody(e,s,n);break;case"constraint":i.removeConstraint(e,s,n);break;case"composite":i.removeComposite(e,s,n);break;case"mouseConstraint":i.removeConstraint(e,s.constraint)}}return o.trigger(e,"afterRemove",{object:t}),e},i.addComposite=function(e,t){return e.composites.push(t),t.parent=e,i.setModified(e,!0,!0,!1),e},i.removeComposite=function(e,t,n){var o=r.indexOf(e.composites,t);if(-1!==o&&i.removeCompositeAt(e,o),n)for(var a=0;a<e.composites.length;a++)i.removeComposite(e.composites[a],t,!0);return e},i.removeCompositeAt=function(e,t){return e.composites.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addBody=function(e,t){return e.bodies.push(t),i.setModified(e,!0,!0,!1),e},i.removeBody=function(e,t,n){var o=r.indexOf(e.bodies,t);if(-1!==o&&i.removeBodyAt(e,o),n)for(var a=0;a<e.composites.length;a++)i.removeBody(e.composites[a],t,!0);return e},i.removeBodyAt=function(e,t){return e.bodies.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addConstraint=function(e,t){return e.constraints.push(t),i.setModified(e,!0,!0,!1),e},i.removeConstraint=function(e,t,n){var o=r.indexOf(e.constraints,t);if(-1!==o&&i.removeConstraintAt(e,o),n)for(var a=0;a<e.composites.length;a++)i.removeConstraint(e.composites[a],t,!0);return e},i.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),i.setModified(e,!0,!0,!1),e},i.clear=function(e,t,n){if(n)for(var o=0;o<e.composites.length;o++)i.clear(e.composites[o],t,!0);return t?e.bodies=e.bodies.filter((function(e){return e.isStatic})):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,i.setModified(e,!0,!0,!1),e},i.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(i.allBodies(e.composites[n]));return e.cache&&(e.cache.allBodies=t),t},i.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(i.allConstraints(e.composites[n]));return e.cache&&(e.cache.allConstraints=t),t},i.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(i.allComposites(e.composites[n]));return e.cache&&(e.cache.allComposites=t),t},i.get=function(e,t,n){var o,r;switch(n){case"body":o=i.allBodies(e);break;case"constraint":o=i.allConstraints(e);break;case"composite":o=i.allComposites(e).concat(e)}return o?0===(r=o.filter((function(e){return e.id.toString()===t.toString()}))).length?null:r[0]:null},i.move=function(e,t,n){return i.remove(e,t),i.add(n,t),e},i.rebase=function(e){for(var t=i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return e},i.translate=function(e,t,n){for(var o=n?i.allBodies(e):e.bodies,r=0;r<o.length;r++)s.translate(o[r],t);return e},i.rotate=function(e,t,n,o){for(var r=Math.cos(t),a=Math.sin(t),l=o?i.allBodies(e):e.bodies,c=0;c<l.length;c++){var u=l[c],d=u.position.x-n.x,p=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*r-p*a),y:n.y+(d*a+p*r)}),s.rotate(u,t)}return e},i.scale=function(e,t,n,o,r){for(var a=r?i.allBodies(e):e.bodies,l=0;l<a.length;l++){var c=a[l],u=c.position.x-o.x,d=c.position.y-o.y;s.setPosition(c,{x:o.x+u*t,y:o.y+d*n}),s.scale(c,t,n)}return e},i.bounds=function(e){for(var t=i.allBodies(e),n=[],o=0;o<t.length;o+=1){var r=t[o];n.push(r.bounds.min,r.bounds.max)}return a.create(n)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),a=n(7),s=(n(16),n(0)),l=n(1),c=n(11);!function(){i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i.create=function(t){var n={id:s.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},i=s.extend(n,t);return e(i,t),i},i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var e=function(e,t){t=t||{},i.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),o.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?"#14151f":s.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),a=e.isStatic?"#555":"#ccc",u=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||a,e.render.lineWidth=e.render.lineWidth||u,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};i.set=function(e,t,n){var o;for(o in"string"==typeof t&&(o=t,(t={})[o]=n),t)if(Object.prototype.hasOwnProperty.call(t,o))switch(n=t[o],o){case"isStatic":i.setStatic(e,n);break;case"isSleeping":a.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[o]=n}},i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var i=e.parts[n];i.isStatic=t,t?(i._original={restitution:i.restitution,friction:i.friction,mass:i.mass,inertia:i.inertia,density:i.density,inverseMass:i.inverseMass,inverseInertia:i.inverseInertia},i.restitution=0,i.friction=1,i.mass=i.inertia=i.density=1/0,i.inverseMass=i.inverseInertia=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.angularVelocity=0,i.speed=0,i.angularSpeed=0,i.motion=0):i._original&&(i.restitution=i._original.restitution,i.friction=i._original.friction,i.mass=i._original.mass,i.inertia=i._original.inertia,i.density=i._original.density,i.inverseMass=i._original.inverseMass,i.inverseInertia=i._original.inverseInertia,i._original=null)}},i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=o.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=o.area(e.vertices),i.setMass(e,e.density*e.area);var n=o.centre(e.vertices);o.translate(e.vertices,n,-1),i.setInertia(e,i._inertiaScale*o.inertia(e.vertices,e.mass)),o.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},i.setParts=function(e,t,n){var r;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var a=t[r];a!==e&&(a.parent=e,e.parts.push(a))}if(1!==e.parts.length){if(n=void 0===n||n){var s=[];for(r=0;r<t.length;r++)s=s.concat(t[r].vertices);o.clockwiseSort(s);var l=o.hull(s),c=o.centre(l);i.setVertices(e,l),o.translate(e.vertices,c)}var u=i._totalProperties(e);e.area=u.area,e.parent=e,e.position.x=u.centre.x,e.position.y=u.centre.y,e.positionPrev.x=u.centre.x,e.positionPrev.y=u.centre.y,i.setMass(e,u.mass),i.setInertia(e,u.inertia),i.setPosition(e,u.centre)}},i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},i.setPosition=function(e,t){var n=r.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.position.x+=n.x,a.position.y+=n.y,o.translate(a.vertices,n),l.update(a.bounds,a.vertices,e.velocity)}},i.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.angle+=n,o.rotate(a.vertices,n,e.position),c.rotate(a.axes,n),l.update(a.bounds,a.vertices,e.velocity),i>0&&r.rotateAbout(a.position,n,e.position,a.position)}},i.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=r.magnitude(e.velocity)},i.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},i.translate=function(e,t){i.setPosition(e,r.add(e.position,t))},i.rotate=function(e,t,n){if(n){var o=Math.cos(t),r=Math.sin(t),a=e.position.x-n.x,s=e.position.y-n.y;i.setPosition(e,{x:n.x+(a*o-s*r),y:n.y+(a*r+s*o)}),i.setAngle(e,e.angle+t)}else i.setAngle(e,e.angle+t)},i.scale=function(e,t,n,r){var a=0,s=0;r=r||e.position;for(var u=0;u<e.parts.length;u++){var d=e.parts[u];o.scale(d.vertices,t,n,r),d.axes=c.fromVertices(d.vertices),d.area=o.area(d.vertices),i.setMass(d,e.density*d.area),o.translate(d.vertices,{x:-d.position.x,y:-d.position.y}),i.setInertia(d,i._inertiaScale*o.inertia(d.vertices,d.mass)),o.translate(d.vertices,{x:d.position.x,y:d.position.y}),u>0&&(a+=d.area,s+=d.inertia),d.position.x=r.x+(d.position.x-r.x)*t,d.position.y=r.y+(d.position.y-r.y)*n,l.update(d.bounds,d.vertices,e.velocity)}e.parts.length>1&&(e.area=a,e.isStatic||(i.setMass(e,e.density*a),i.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},i.update=function(e,t,n,i){var a=Math.pow(t*n*e.timeScale,2),s=1-e.frictionAir*n*e.timeScale,u=e.position.x-e.positionPrev.x,d=e.position.y-e.positionPrev.y;e.velocity.x=u*s*i+e.force.x/e.mass*a,e.velocity.y=d*s*i+e.force.y/e.mass*a,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*s*i+e.torque/e.inertia*a,e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=r.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var p=0;p<e.parts.length;p++){var f=e.parts[p];o.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},i.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var i=t.x-e.position.x,o=t.y-e.position.y;e.torque+=i*n.y-o*n.x},i._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var i=e.parts[n],o=i.mass!==1/0?i.mass:1;t.mass+=o,t.area+=i.area,t.inertia+=i.inertia,t.centre=r.add(t.centre,r.mult(i.position,o))}return t.centre=r.div(t.centre,t.mass),t}}()},function(e,t,n){var i={};e.exports=i;var o=n(4);i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o],a=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var s=Math.min(r.motion,a),l=Math.max(r.motion,a);r.motion=i._minBias*s+(1-i._minBias)*l,r.sleepThreshold>0&&r.motion<i._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&i.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else i.set(r,!1)}},i.afterCollisions=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o];if(r.isActive){var a=r.collision,s=a.bodyA.parent,l=a.bodyB.parent;if(!(s.isSleeping&&l.isSleeping||s.isStatic||l.isStatic)&&(s.isSleeping||l.isSleeping)){var c=s.isSleeping&&!s.isStatic?s:l,u=c===s?l:s;!c.isStatic&&u.motion>i._motionWakeThreshold*n&&i.set(c,!1)}}}},i.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||o.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&o.trigger(e,"sleepEnd"))}},function(e,t,n){var i={};e.exports=i;var o,r,a,s=n(3),l=n(9);o=[],r={overlap:0,axis:null},a={overlap:0,axis:null},i.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},i.collides=function(e,t,n){if(i._overlapAxes(r,e.vertices,t.vertices,e.axes),r.overlap<=0)return null;if(i._overlapAxes(a,t.vertices,e.vertices,t.axes),a.overlap<=0)return null;var o,c,u=n&&n.table[l.id(e,t)];u?o=u.collision:((o=i.create(e,t)).collided=!0,o.bodyA=e.id<t.id?e:t,o.bodyB=e.id<t.id?t:e,o.parentA=o.bodyA.parent,o.parentB=o.bodyB.parent),e=o.bodyA,t=o.bodyB,c=r.overlap<a.overlap?r:a;var d=o.normal,p=o.supports,f=c.axis,v=f.x,y=f.y;v*(t.position.x-e.position.x)+y*(t.position.y-e.position.y)<0?(d.x=v,d.y=y):(d.x=-v,d.y=-y),o.tangent.x=-d.y,o.tangent.y=d.x,o.depth=c.overlap,o.penetration.x=d.x*o.depth,o.penetration.y=d.y*o.depth;var m=i._findSupports(e,t,d,1),g=0;if(s.contains(e.vertices,m[0])&&(p[g++]=m[0]),s.contains(e.vertices,m[1])&&(p[g++]=m[1]),g<2){var x=i._findSupports(t,e,d,-1);s.contains(t.vertices,x[0])&&(p[g++]=x[0]),g<2&&s.contains(t.vertices,x[1])&&(p[g++]=x[1])}return 0===g&&(p[g++]=m[0]),p.length=g,o},i._overlapAxes=function(e,t,n,i){var o,r,a,s,l,c,u=t.length,d=n.length,p=t[0].x,f=t[0].y,v=n[0].x,y=n[0].y,m=i.length,g=Number.MAX_VALUE,x=0;for(l=0;l<m;l++){var h=i[l],b=h.x,S=h.y,w=p*b+f*S,A=v*b+y*S,P=w,C=A;for(c=1;c<u;c+=1)(s=t[c].x*b+t[c].y*S)>P?P=s:s<w&&(w=s);for(c=1;c<d;c+=1)(s=n[c].x*b+n[c].y*S)>C?C=s:s<A&&(A=s);if((o=(r=P-A)<(a=C-w)?r:a)<g&&(g=o,x=l,o<=0))break}e.axis=i[x],e.overlap=g},i._projectToAxis=function(e,t,n){for(var i=t[0].x*n.x+t[0].y*n.y,o=i,r=1;r<t.length;r+=1){var a=t[r].x*n.x+t[r].y*n.y;a>o?o=a:a<i&&(i=a)}e.min=i,e.max=o},i._findSupports=function(e,t,n,i){var r,a,s,l,c,u=t.vertices,d=u.length,p=e.position.x,f=e.position.y,v=n.x*i,y=n.y*i,m=Number.MAX_VALUE;for(c=0;c<d;c+=1)(l=v*(p-(a=u[c]).x)+y*(f-a.y))<m&&(m=l,r=a);return m=v*(p-(s=u[(d+r.index-1)%d]).x)+y*(f-s.y),v*(p-(a=u[(r.index+1)%d]).x)+y*(f-a.y)<m?(o[0]=r,o[1]=a,o):(o[0]=r,o[1]=s,o)}},function(e,t,n){var i={};e.exports=i;var o=n(17);i.create=function(e,t){var n=e.bodyA,o=e.bodyB,r={id:i.id(n,o),bodyA:n,bodyB:o,collision:e,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||o.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(r,e,t),r},i.update=function(e,t,n){var i=e.contacts,r=t.supports,a=e.activeContacts,s=t.parentA,l=t.parentB,c=s.vertices.length;e.isActive=!0,e.timeUpdated=n,e.collision=t,e.separation=t.depth,e.inverseMass=s.inverseMass+l.inverseMass,e.friction=s.friction<l.friction?s.friction:l.friction,e.frictionStatic=s.frictionStatic>l.frictionStatic?s.frictionStatic:l.frictionStatic,e.restitution=s.restitution>l.restitution?s.restitution:l.restitution,e.slop=s.slop>l.slop?s.slop:l.slop,t.pair=e,a.length=0;for(var u=0;u<r.length;u++){var d=r[u],p=d.body===s?d.index:c+d.index,f=i[p];f?a.push(f):a.push(i[p]=o.create(d))}},i.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},i.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),a=n(7),s=n(1),l=n(11),c=n(0);i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?r.add(t.bodyA.position,t.pointA):t.pointA,i=t.bodyB?r.add(t.bodyB.position,t.pointB):t.pointB,o=r.magnitude(r.sub(n,i));t.length=void 0!==t.length?t.length:o,t.id=t.id||c.nextId(),t.label=t.label||"Constraint",t.type="constraint",t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var a={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===t.length&&t.stiffness>.1?(a.type="pin",a.anchors=!1):t.stiffness<.9&&(a.type="spring"),t.render=c.extend(a,t.render),t},i.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],i=n.constraintImpulse;n.isStatic||0===i.x&&0===i.y&&0===i.angle||(n.position.x+=i.x,n.position.y+=i.y,n.angle+=i.angle)}},i.solveAll=function(e,t){for(var n=0;n<e.length;n+=1){var o=e[n],r=!o.bodyA||o.bodyA&&o.bodyA.isStatic,a=!o.bodyB||o.bodyB&&o.bodyB.isStatic;(r||a)&&i.solve(e[n],t)}for(n=0;n<e.length;n+=1)r=!(o=e[n]).bodyA||o.bodyA&&o.bodyA.isStatic,a=!o.bodyB||o.bodyB&&o.bodyB.isStatic,r||a||i.solve(e[n],t)},i.solve=function(e,t){var n=e.bodyA,o=e.bodyB,a=e.pointA,s=e.pointB;if(n||o){n&&!n.isStatic&&(r.rotate(a,n.angle-e.angleA,a),e.angleA=n.angle),o&&!o.isStatic&&(r.rotate(s,o.angle-e.angleB,s),e.angleB=o.angle);var l=a,c=s;if(n&&(l=r.add(n.position,a)),o&&(c=r.add(o.position,s)),l&&c){var u=r.sub(l,c),d=r.magnitude(u);d<i._minLength&&(d=i._minLength);var p,f,v,y,m,g=(d-e.length)/d,x=e.stiffness<1?e.stiffness*t:e.stiffness,h=r.mult(u,g*x),b=(n?n.inverseMass:0)+(o?o.inverseMass:0),S=b+((n?n.inverseInertia:0)+(o?o.inverseInertia:0));if(e.damping){var w=r.create();v=r.div(u,d),m=r.sub(o&&r.sub(o.position,o.positionPrev)||w,n&&r.sub(n.position,n.positionPrev)||w),y=r.dot(v,m)}n&&!n.isStatic&&(f=n.inverseMass/b,n.constraintImpulse.x-=h.x*f,n.constraintImpulse.y-=h.y*f,n.position.x-=h.x*f,n.position.y-=h.y*f,e.damping&&(n.positionPrev.x-=e.damping*v.x*y*f,n.positionPrev.y-=e.damping*v.y*y*f),p=r.cross(a,h)/S*i._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),o&&!o.isStatic&&(f=o.inverseMass/b,o.constraintImpulse.x+=h.x*f,o.constraintImpulse.y+=h.y*f,o.position.x+=h.x*f,o.position.y+=h.y*f,e.damping&&(o.positionPrev.x+=e.damping*v.x*y*f,o.positionPrev.y+=e.damping*v.y*y*f),p=r.cross(s,h)/S*i._torqueDampen*o.inverseInertia*(1-e.angularStiffness),o.constraintImpulse.angle+=p,o.angle+=p)}}},i.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],c=n.constraintImpulse;if(!(n.isStatic||0===c.x&&0===c.y&&0===c.angle)){a.set(n,!1);for(var u=0;u<n.parts.length;u++){var d=n.parts[u];o.translate(d.vertices,c),u>0&&(d.position.x+=c.x,d.position.y+=c.y),0!==c.angle&&(o.rotate(d.vertices,c.angle,n.position),l.rotate(d.axes,c.angle),u>0&&r.rotateAbout(d.position,c.angle,n.position,d.position)),s.update(d.bounds,d.vertices,n.velocity)}c.angle*=i._warming,c.x*=i._warming,c.y*=i._warming}}},i.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+e.pointA.x,y:(e.bodyA?e.bodyA.position.y:0)+e.pointA.y}},i.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+e.pointB.x,y:(e.bodyB?e.bodyB.position.y:0)+e.pointB.y}}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var i=(n+1)%e.length,a=o.normalise({x:e[i].y-e[n].y,y:e[n].x-e[i].x}),s=0===a.y?1/0:a.x/a.y;t[s=s.toFixed(3).toString()]=a}return r.values(t)},i.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),i=Math.sin(t),o=0;o<e.length;o++){var r,a=e[o];r=a.x*n-a.y*i,a.y=a.x*i+a.y*n,a.x=r}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(0),a=n(6),s=n(1),l=n(2);i.rectangle=function(e,t,n,i,s){s=s||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:o.fromPath("L 0 0 L "+n+" 0 L "+n+" "+i+" L 0 "+i)};if(s.chamfer){var c=s.chamfer;l.vertices=o.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete s.chamfer}return a.create(r.extend({},l,s))},i.trapezoid=function(e,t,n,i,s,l){l=l||{};var c,u=n*(s*=.5),d=u+(1-2*s)*n,p=d+u;c=s<.5?"L 0 0 L "+u+" "+-i+" L "+d+" "+-i+" L "+p+" 0":"L 0 0 L "+d+" "+-i+" L "+p+" 0";var f={label:"Trapezoid Body",position:{x:e,y:t},vertices:o.fromPath(c)};if(l.chamfer){var v=l.chamfer;f.vertices=o.chamfer(f.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete l.chamfer}return a.create(r.extend({},f,l))},i.circle=function(e,t,n,o,a){o=o||{};var s={label:"Circle Body",circleRadius:n};a=a||25;var l=Math.ceil(Math.max(10,Math.min(a,n)));return l%2==1&&(l+=1),i.polygon(e,t,l,n,r.extend({},s,o))},i.polygon=function(e,t,n,s,l){if(l=l||{},n<3)return i.circle(e,t,s,l);for(var c=2*Math.PI/n,u="",d=.5*c,p=0;p<n;p+=1){var f=d+p*c,v=Math.cos(f)*s,y=Math.sin(f)*s;u+="L "+v.toFixed(3)+" "+y.toFixed(3)+" "}var m={label:"Polygon Body",position:{x:e,y:t},vertices:o.fromPath(u)};if(l.chamfer){var g=l.chamfer;m.vertices=o.chamfer(m.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return a.create(r.extend({},m,l))},i.fromVertices=function(e,t,n,i,c,u,d,p){var f,v,y,m,g,x,h,b,S,w,A=r.getDecomp();for(f=Boolean(A&&A.quickDecomp),i=i||{},y=[],c=void 0!==c&&c,u=void 0!==u?u:.01,d=void 0!==d?d:10,p=void 0!==p?p:.01,r.isArray(n[0])||(n=[n]),S=0;S<n.length;S+=1)if(g=n[S],!(m=o.isConvex(g))&&!f&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),m||!f)g=m?o.clockwiseSort(g):o.hull(g),y.push({position:{x:e,y:t},vertices:g});else{var P=g.map((function(e){return[e.x,e.y]}));A.makeCCW(P),!1!==u&&A.removeCollinearPoints(P,u),!1!==p&&A.removeDuplicatePoints&&A.removeDuplicatePoints(P,p);var C=A.quickDecomp(P);for(x=0;x<C.length;x++){var M=C[x].map((function(e){return{x:e[0],y:e[1]}}));d>0&&o.area(M)<d||y.push({position:o.centre(M),vertices:M})}}for(x=0;x<y.length;x++)y[x]=a.create(r.extend(y[x],i));if(c)for(x=0;x<y.length;x++){var B=y[x];for(h=x+1;h<y.length;h++){var k=y[h];if(s.overlaps(B.bounds,k.bounds)){var _=B.vertices,I=k.vertices;for(b=0;b<B.vertices.length;b++)for(w=0;w<k.vertices.length;w++){var T=l.magnitudeSquared(l.sub(_[(b+1)%_.length],I[w])),R=l.magnitudeSquared(l.sub(_[b],I[(w+1)%I.length]));T<5&&R<5&&(_[b].isInternal=!0,I[w].isInternal=!0)}}}}return y.length>1?(v=a.create(r.extend({parts:y.slice(0)},i)),a.setPosition(v,{x:e,y:t}),v):y[0]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.create=function(e){var t={};return e||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},i.setElement(t,t.element),t},i.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},i.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},i.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i._getRelativeMousePosition=function(e,t,n){var i,o,r=t.getBoundingClientRect(),a=document.documentElement||document.body.parentNode||document.body,s=void 0!==window.pageXOffset?window.pageXOffset:a.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:a.scrollTop,c=e.changedTouches;return c?(i=c[0].pageX-r.left-s,o=c[0].pageY-r.top-l):(i=e.pageX-r.left-s,o=e.pageY-r.top-l),{x:i/(t.clientWidth/(t.width||t.clientWidth)*n),y:o/(t.clientHeight/(t.height||t.clientHeight)*n)}}},function(e,t,n){var i={};e.exports=i;var o=n(0),r=n(8);i.create=function(e){return o.extend({bodies:[],pairs:null},e)},i.setBodies=function(e,t){e.bodies=t.slice(0)},i.clear=function(e){e.bodies=[]},i.collisions=function(e){var t,n,o=[],a=e.pairs,s=e.bodies,l=s.length,c=i.canCollide,u=r.collides;for(s.sort(i._compareBoundsX),t=0;t<l;t++){var d=s[t],p=d.bounds,f=d.bounds.max.x,v=d.bounds.max.y,y=d.bounds.min.y,m=d.isStatic||d.isSleeping,g=d.parts.length,x=1===g;for(n=t+1;n<l;n++){var h=s[n];if((B=h.bounds).min.x>f)break;if(!(v<B.min.y||y>B.max.y)&&(!m||!h.isStatic&&!h.isSleeping)&&c(d.collisionFilter,h.collisionFilter)){var b=h.parts.length;if(x&&1===b)(C=u(d,h,a))&&o.push(C);else for(var S=b>1?1:0,w=g>1?1:0;w<g;w++)for(var A=d.parts[w],P=(p=A.bounds,S);P<b;P++){var C,M=h.parts[P],B=M.bounds;p.min.x>B.max.x||p.max.x<B.min.x||p.max.y<B.min.y||p.min.y>B.max.y||(C=u(A,M,a))&&o.push(C)}}}}return o},i.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!=(e.mask&t.category)&&0!=(t.mask&e.category)},i._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x}},function(e,t,n){var i={};e.exports=i;var o=n(0);i._registry={},i.register=function(e){if(i.isPlugin(e)||o.warn("Plugin.register:",i.toString(e),"does not implement all required fields."),e.name in i._registry){var t=i._registry[e.name],n=i.versionParse(e.version).number,r=i.versionParse(t.version).number;n>r?(o.warn("Plugin.register:",i.toString(t),"was upgraded to",i.toString(e)),i._registry[e.name]=e):n<r?o.warn("Plugin.register:",i.toString(t),"can not be downgraded to",i.toString(e)):e!==t&&o.warn("Plugin.register:",i.toString(e),"is already registered to different plugin object")}else i._registry[e.name]=e;return e},i.resolve=function(e){return i._registry[i.dependencyParse(e).name]},i.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},i.isPlugin=function(e){return e&&e.name&&e.version&&e.install},i.isUsed=function(e,t){return e.used.indexOf(t)>-1},i.isFor=function(e,t){var n=e.for&&i.dependencyParse(e.for);return!e.for||t.name===n.name&&i.versionSatisfies(t.version,n.range)},i.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0!==e.uses.length){for(var n=i.dependencies(e),r=o.topologicalSort(n),a=[],s=0;s<r.length;s+=1)if(r[s]!==e.name){var l=i.resolve(r[s]);l?i.isUsed(e,l.name)||(i.isFor(l,e)||(o.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(e)+"."),l._warned=!0),l.install?l.install(e):(o.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(a.push("🔶 "+i.toString(l)),delete l._warned):a.push("✅ "+i.toString(l)),e.used.push(l.name)):a.push("❌ "+r[s])}a.length>0&&o.info(a.join("  "))}else o.warn("Plugin.use:",i.toString(e),"does not specify any dependencies to install.")},i.dependencies=function(e,t){var n=i.dependencyParse(e),r=n.name;if(!(r in(t=t||{}))){e=i.resolve(e)||e,t[r]=o.map(e.uses||[],(function(t){i.isPlugin(t)&&i.register(t);var r=i.dependencyParse(t),a=i.resolve(t);return a&&!i.versionSatisfies(a.version,r.range)?(o.warn("Plugin.dependencies:",i.toString(a),"does not satisfy",i.toString(r),"used by",i.toString(n)+"."),a._warned=!0,e._warned=!0):a||(o.warn("Plugin.dependencies:",i.toString(t),"used by",i.toString(n),"could not be resolved."),e._warned=!0),r.name}));for(var a=0;a<t[r].length;a+=1)i.dependencies(t[r][a],t);return t}},i.dependencyParse=function(e){return o.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||o.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},i.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||o.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=t.exec(e),i=Number(n[4]),r=Number(n[5]),a=Number(n[6]);return{isRange:Boolean(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||"",major:i,minor:r,patch:a,parts:[i,r,a],prerelease:n[7],number:1e8*i+1e4*r+a}},i.versionSatisfies=function(e,t){t=t||"*";var n=i.versionParse(t),o=i.versionParse(e);if(n.isRange){if("*"===n.operator||"*"===e)return!0;if(">"===n.operator)return o.number>n.number;if(">="===n.operator)return o.number>=n.number;if("~"===n.operator)return o.major===n.major&&o.minor===n.minor&&o.patch>=n.patch;if("^"===n.operator)return n.major>0?o.major===n.major&&o.number>=n.number:n.minor>0?o.minor===n.minor&&o.patch>=n.patch:o.patch===n.patch}return e===t||"*"===e}},function(e,t,n){var i={};e.exports=i;var o=n(0),r=n(5),a=n(1),s=n(4),l=n(2),c=n(13);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(o.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(e){var t={controller:i,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=o.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||d(n.options.width,n.options.height),n.context=n.canvas.getContext("2d"),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},n.options.showBroadphase=!1,1!==n.options.pixelRatio&&i.setPixelRatio(n,n.options.pixelRatio),o.isElement(n.element)?n.element.appendChild(n.canvas):n.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),n},i.run=function(t){!function o(r){t.frameRequestId=e(o),n(t,r),i.world(t,r),(t.options.showStats||t.options.showDebug)&&i.stats(t,t.context,r),(t.options.showPerformance||t.options.showDebug)&&i.performance(t,t.context,r)}()},i.stop=function(e){t(e.frameRequestId)},i.setPixelRatio=function(e,t){var n=e.options,i=e.canvas;"auto"===t&&(t=p(i)),n.pixelRatio=t,i.setAttribute("data-pixel-ratio",t),i.width=n.width*t,i.height=n.height*t,i.style.width=n.width+"px",i.style.height=n.height+"px"},i.lookAt=function(e,t,n,i){i=void 0===i||i,t=o.isArray(t)?t:[t],n=n||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},a=0;a<t.length;a+=1){var s=t[a],l=s.bounds?s.bounds.min:s.min||s.position||s,u=s.bounds?s.bounds.max:s.max||s.position||s;l&&u&&(l.x<r.min.x&&(r.min.x=l.x),u.x>r.max.x&&(r.max.x=u.x),l.y<r.min.y&&(r.min.y=l.y),u.y>r.max.y&&(r.max.y=u.y))}var d=r.max.x-r.min.x+2*n.x,p=r.max.y-r.min.y+2*n.y,f=e.canvas.height,v=e.canvas.width/f,y=d/p,m=1,g=1;y>v?g=y/v:m=v/y,e.options.hasBounds=!0,e.bounds.min.x=r.min.x,e.bounds.max.x=r.min.x+d*m,e.bounds.min.y=r.min.y,e.bounds.max.y=r.min.y+p*g,i&&(e.bounds.min.x+=.5*d-d*m*.5,e.bounds.max.x+=.5*d-d*m*.5,e.bounds.min.y+=.5*p-p*g*.5,e.bounds.max.y+=.5*p-p*g*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(c.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),c.setOffset(e.mouse,e.bounds.min))},i.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,i=t/e.options.width,o=n/e.options.height;e.context.setTransform(e.options.pixelRatio/i,0,0,e.options.pixelRatio/o,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},i.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},i.world=function(e,t){var n,u=o.now(),d=e.engine,p=d.world,f=e.canvas,y=e.context,m=e.options,g=e.timing,x=r.allBodies(p),h=r.allConstraints(p),b=m.wireframes?m.wireframeBackground:m.background,S=[],w=[],A={timestamp:d.timing.timestamp};if(s.trigger(e,"beforeRender",A),e.currentBackground!==b&&v(e,b),y.globalCompositeOperation="source-in",y.fillStyle="transparent",y.fillRect(0,0,f.width,f.height),y.globalCompositeOperation="source-over",m.hasBounds){for(n=0;n<x.length;n++){var P=x[n];a.overlaps(P.bounds,e.bounds)&&S.push(P)}for(n=0;n<h.length;n++){var C=h[n],M=C.bodyA,B=C.bodyB,k=C.pointA,_=C.pointB;M&&(k=l.add(M.position,C.pointA)),B&&(_=l.add(B.position,C.pointB)),k&&_&&((a.contains(e.bounds,k)||a.contains(e.bounds,_))&&w.push(C))}i.startViewTransform(e),e.mouse&&(c.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),c.setOffset(e.mouse,e.bounds.min))}else w=h,S=x,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!m.wireframes||d.enableSleeping&&m.showSleeping?i.bodies(e,S,y):(m.showConvexHulls&&i.bodyConvexHulls(e,S,y),i.bodyWireframes(e,S,y)),m.showBounds&&i.bodyBounds(e,S,y),(m.showAxes||m.showAngleIndicator)&&i.bodyAxes(e,S,y),m.showPositions&&i.bodyPositions(e,S,y),m.showVelocity&&i.bodyVelocity(e,S,y),m.showIds&&i.bodyIds(e,S,y),m.showSeparations&&i.separations(e,d.pairs.list,y),m.showCollisions&&i.collisions(e,d.pairs.list,y),m.showVertexNumbers&&i.vertexNumbers(e,S,y),m.showMousePosition&&i.mousePosition(e,e.mouse,y),i.constraints(w,y),m.hasBounds&&i.endViewTransform(e),s.trigger(e,"afterRender",A),g.lastElapsed=o.now()-u},i.stats=function(e,t,n){for(var i=e.engine,o=i.world,a=r.allBodies(o),s=0,l=0,c=0;c<a.length;c+=1)s+=a[c].parts.length;var u={Part:s,Body:a.length,Cons:r.allConstraints(o).length,Comp:r.allComposites(o).length,Pair:i.pairs.list.length};for(var d in t.fillStyle="#0e0f19",t.fillRect(l,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",u){var p=u[d];t.fillStyle="#aaa",t.fillText(d,l+55,8),t.fillStyle="#eee",t.fillText(p,l+55,26),l+=55}},i.performance=function(e,t){var n=e.engine,o=e.timing,r=o.deltaHistory,a=o.elapsedHistory,s=o.timestampElapsedHistory,l=o.engineDeltaHistory,c=o.engineElapsedHistory,d=n.timing.lastDelta,p=u(r),f=u(a),v=u(l),y=u(c),m=u(s)/p||0,g=1e3/p||0;t.fillStyle="#0e0f19",t.fillRect(0,50,370,34),i.status(t,10,69,60,4,r.length,Math.round(g)+" fps",g/i._goodFps,(function(e){return r[e]/p-1})),i.status(t,82,69,60,4,l.length,d.toFixed(2)+" dt",i._goodDelta/d,(function(e){return l[e]/v-1})),i.status(t,154,69,60,4,c.length,y.toFixed(2)+" ut",1-y/i._goodFps,(function(e){return c[e]/y-1})),i.status(t,226,69,60,4,a.length,f.toFixed(2)+" rt",1-f/i._goodFps,(function(e){return a[e]/f-1})),i.status(t,298,69,60,4,s.length,m.toFixed(2)+" x",m*m*m,(function(e){return(s[e]/r[e]/m||0)-1}))},i.status=function(e,t,n,i,r,a,s,l,c){e.strokeStyle="#888",e.fillStyle="#444",e.lineWidth=1,e.fillRect(t,n+7,i,1),e.beginPath(),e.moveTo(t,n+7-r*o.clamp(.4*c(0),-2,2));for(var u=0;u<i;u+=1)e.lineTo(t+u,n+7-(u<a?r*o.clamp(.4*c(u),-2,2):0));e.stroke(),e.fillStyle="hsl("+o.clamp(25+95*l,0,120)+",100%,60%)",e.fillRect(t,n-7,4,4),e.font="12px Arial",e.textBaseline="middle",e.textAlign="right",e.fillStyle="#eee",e.fillText(s,t+i,n-5)},i.constraints=function(e,t){for(var n=t,i=0;i<e.length;i++){var r=e[i];if(r.render.visible&&r.pointA&&r.pointB){var a,s,c=r.bodyA,u=r.bodyB;if(a=c?l.add(c.position,r.pointA):r.pointA,"pin"===r.render.type)n.beginPath(),n.arc(a.x,a.y,3,0,2*Math.PI),n.closePath();else{if(s=u?l.add(u.position,r.pointB):r.pointB,n.beginPath(),n.moveTo(a.x,a.y),"spring"===r.render.type)for(var d,p=l.sub(s,a),f=l.perp(l.normalise(p)),v=Math.ceil(o.clamp(r.length/5,12,20)),y=1;y<v;y+=1)d=y%2==0?1:-1,n.lineTo(a.x+p.x*(y/v)+f.x*d*4,a.y+p.y*(y/v)+f.y*d*4);n.lineTo(s.x,s.y)}r.render.lineWidth&&(n.lineWidth=r.render.lineWidth,n.strokeStyle=r.render.strokeStyle,n.stroke()),r.render.anchors&&(n.fillStyle=r.render.strokeStyle,n.beginPath(),n.arc(a.x,a.y,3,0,2*Math.PI),n.arc(s.x,s.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},i.bodies=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=i.parts.length>1?1:0;a<i.parts.length;a++)if((o=i.parts[a]).render.visible){if(l.showSleeping&&i.isSleeping?s.globalAlpha=.5*o.render.opacity:1!==o.render.opacity&&(s.globalAlpha=o.render.opacity),o.render.sprite&&o.render.sprite.texture&&!l.wireframes){var u=o.render.sprite,d=f(e,u.texture);s.translate(o.position.x,o.position.y),s.rotate(o.angle),s.drawImage(d,d.width*-u.xOffset*u.xScale,d.height*-u.yOffset*u.yScale,d.width*u.xScale,d.height*u.yScale),s.rotate(-o.angle),s.translate(-o.position.x,-o.position.y)}else{if(o.circleRadius)s.beginPath(),s.arc(o.position.x,o.position.y,o.circleRadius,0,2*Math.PI);else{s.beginPath(),s.moveTo(o.vertices[0].x,o.vertices[0].y);for(var p=1;p<o.vertices.length;p++)!o.vertices[p-1].isInternal||c?s.lineTo(o.vertices[p].x,o.vertices[p].y):s.moveTo(o.vertices[p].x,o.vertices[p].y),o.vertices[p].isInternal&&!c&&s.moveTo(o.vertices[(p+1)%o.vertices.length].x,o.vertices[(p+1)%o.vertices.length].y);s.lineTo(o.vertices[0].x,o.vertices[0].y),s.closePath()}l.wireframes?(s.lineWidth=1,s.strokeStyle="#bbb",s.stroke()):(s.fillStyle=o.render.fillStyle,o.render.lineWidth&&(s.lineWidth=o.render.lineWidth,s.strokeStyle=o.render.strokeStyle,s.stroke()),s.fill())}s.globalAlpha=1}},i.bodyWireframes=function(e,t,n){var i,o,r,a,s,l=n,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=i.parts.length>1?1:0;s<i.parts.length;s++){for(o=i.parts[s],l.moveTo(o.vertices[0].x,o.vertices[0].y),a=1;a<o.vertices.length;a++)!o.vertices[a-1].isInternal||c?l.lineTo(o.vertices[a].x,o.vertices[a].y):l.moveTo(o.vertices[a].x,o.vertices[a].y),o.vertices[a].isInternal&&!c&&l.moveTo(o.vertices[(a+1)%o.vertices.length].x,o.vertices[(a+1)%o.vertices.length].y);l.lineTo(o.vertices[0].x,o.vertices[0].y)}l.lineWidth=1,l.strokeStyle="#bbb",l.stroke()},i.bodyConvexHulls=function(e,t,n){var i,o,r,a=n;for(a.beginPath(),o=0;o<t.length;o++)if((i=t[o]).render.visible&&1!==i.parts.length){for(a.moveTo(i.vertices[0].x,i.vertices[0].y),r=1;r<i.vertices.length;r++)a.lineTo(i.vertices[r].x,i.vertices[r].y);a.lineTo(i.vertices[0].x,i.vertices[0].y)}a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.2)",a.stroke()},i.vertexNumbers=function(e,t,n){var i,o,r,a=n;for(i=0;i<t.length;i++){var s=t[i].parts;for(r=s.length>1?1:0;r<s.length;r++){var l=s[r];for(o=0;o<l.vertices.length;o++)a.fillStyle="rgba(255,255,255,0.2)",a.fillText(i+"_"+o,l.position.x+.8*(l.vertices[o].x-l.position.x),l.position.y+.8*(l.vertices[o].y-l.position.y))}}},i.mousePosition=function(e,t,n){var i=n;i.fillStyle="rgba(255,255,255,0.8)",i.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},i.bodyBounds=function(e,t,n){var i=n,o=(e.engine,e.options);i.beginPath();for(var r=0;r<t.length;r++){if(t[r].render.visible)for(var a=t[r].parts,s=a.length>1?1:0;s<a.length;s++){var l=a[s];i.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}}o.wireframes?i.strokeStyle="rgba(255,255,255,0.08)":i.strokeStyle="rgba(0,0,0,0.1)",i.lineWidth=1,i.stroke()},i.bodyAxes=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options);for(s.beginPath(),o=0;o<t.length;o++){var c=t[o],u=c.parts;if(c.render.visible)if(l.showAxes)for(r=u.length>1?1:0;r<u.length;r++)for(i=u[r],a=0;a<i.axes.length;a++){var d=i.axes[a];s.moveTo(i.position.x,i.position.y),s.lineTo(i.position.x+20*d.x,i.position.y+20*d.y)}else for(r=u.length>1?1:0;r<u.length;r++)for(i=u[r],a=0;a<i.axes.length;a++)s.moveTo(i.position.x,i.position.y),s.lineTo((i.vertices[0].x+i.vertices[i.vertices.length-1].x)/2,(i.vertices[0].y+i.vertices[i.vertices.length-1].y)/2)}l.wireframes?(s.strokeStyle="indianred",s.lineWidth=1):(s.strokeStyle="rgba(255, 255, 255, 0.4)",s.globalCompositeOperation="overlay",s.lineWidth=2),s.stroke(),s.globalCompositeOperation="source-over"},i.bodyPositions=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options);for(s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=0;a<i.parts.length;a++)o=i.parts[a],s.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),s.closePath();for(l.wireframes?s.fillStyle="indianred":s.fillStyle="rgba(0,0,0,0.5)",s.fill(),s.beginPath(),r=0;r<t.length;r++)(i=t[r]).render.visible&&(s.arc(i.positionPrev.x,i.positionPrev.y,2,0,2*Math.PI,!1),s.closePath());s.fillStyle="rgba(255,165,0,0.8)",s.fill()},i.bodyVelocity=function(e,t,n){var i=n;i.beginPath();for(var o=0;o<t.length;o++){var r=t[o];r.render.visible&&(i.moveTo(r.position.x,r.position.y),i.lineTo(r.position.x+2*(r.position.x-r.positionPrev.x),r.position.y+2*(r.position.y-r.positionPrev.y)))}i.lineWidth=3,i.strokeStyle="cornflowerblue",i.stroke()},i.bodyIds=function(e,t,n){var i,o,r=n;for(i=0;i<t.length;i++)if(t[i].render.visible){var a=t[i].parts;for(o=a.length>1?1:0;o<a.length;o++){var s=a[o];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(s.id,s.position.x+10,s.position.y-10)}}},i.collisions=function(e,t,n){var i,o,r,a,s=n,l=e.options;for(s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive)for(o=i.collision,a=0;a<i.activeContacts.length;a++){var c=i.activeContacts[a].vertex;s.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?s.fillStyle="rgba(255,255,255,0.7)":s.fillStyle="orange",s.fill(),s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive&&(o=i.collision,i.activeContacts.length>0)){var u=i.activeContacts[0].vertex.x,d=i.activeContacts[0].vertex.y;2===i.activeContacts.length&&(u=(i.activeContacts[0].vertex.x+i.activeContacts[1].vertex.x)/2,d=(i.activeContacts[0].vertex.y+i.activeContacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||!0===o.bodyA.isStatic?s.moveTo(u-8*o.normal.x,d-8*o.normal.y):s.moveTo(u+8*o.normal.x,d+8*o.normal.y),s.lineTo(u,d)}l.wireframes?s.strokeStyle="rgba(255,165,0,0.7)":s.strokeStyle="orange",s.lineWidth=1,s.stroke()},i.separations=function(e,t,n){var i,o,r,a,s,l=n,c=e.options;for(l.beginPath(),s=0;s<t.length;s++)if((i=t[s]).isActive){r=(o=i.collision).bodyA;var u=1;(a=o.bodyB).isStatic||r.isStatic||(u=.5),a.isStatic&&(u=0),l.moveTo(a.position.x,a.position.y),l.lineTo(a.position.x-o.penetration.x*u,a.position.y-o.penetration.y*u),u=1,a.isStatic||r.isStatic||(u=.5),r.isStatic&&(u=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+o.penetration.x*u,r.position.y+o.penetration.y*u)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},i.inspector=function(e,t){e.engine;var n,i=e.selected,o=e.render,r=o.options;if(r.hasBounds){var a=o.bounds.max.x-o.bounds.min.x,s=o.bounds.max.y-o.bounds.min.y,l=a/o.options.width,c=s/o.options.height;t.scale(1/l,1/c),t.translate(-o.bounds.min.x,-o.bounds.min.y)}for(var u=0;u<i.length;u++){var d=i[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),d.type){case"body":n=d.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var p=d.pointA;d.bodyA&&(p=d.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=e.engine,o=e.timing,r=o.historySize,a=n.timing.timestamp;o.delta=t-o.lastTime||i._goodDelta,o.lastTime=t,o.timestampElapsed=a-o.lastTimestamp||0,o.lastTimestamp=a,o.deltaHistory.unshift(o.delta),o.deltaHistory.length=Math.min(o.deltaHistory.length,r),o.engineDeltaHistory.unshift(n.timing.lastDelta),o.engineDeltaHistory.length=Math.min(o.engineDeltaHistory.length,r),o.timestampElapsedHistory.unshift(o.timestampElapsed),o.timestampElapsedHistory.length=Math.min(o.timestampElapsedHistory.length,r),o.engineElapsedHistory.unshift(n.timing.lastElapsed),o.engineElapsedHistory.length=Math.min(o.engineElapsedHistory.length,r),o.elapsedHistory.unshift(o.lastElapsed),o.elapsedHistory.length=Math.min(o.elapsedHistory.length,r)},u=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},d=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},p=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},f=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t,n)},v=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},function(e,t){var n={};e.exports=n,n.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}},function(e,t,n){var i={};e.exports=i;var o=n(7),r=n(19),a=n(14),s=n(20),l=n(4),c=n(5),u=n(10),d=n(0),p=n(6);i.create=function(e){e=e||{};var t=d.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},e);return t.world=e.world||c.create({label:"World"}),t.pairs=e.pairs||s.create(),t.detector=e.detector||a.create(),t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},i.update=function(e,t,n){var p=d.now();t=t||1e3/60,n=n||1;var f,v=e.world,y=e.detector,m=e.pairs,g=e.timing,x=g.timestamp;g.timestamp+=t*g.timeScale,g.lastDelta=t*g.timeScale;var h={timestamp:g.timestamp};l.trigger(e,"beforeUpdate",h);var b=c.allBodies(v),S=c.allConstraints(v);for(v.isModified&&a.setBodies(y,b),v.isModified&&c.setModified(v,!1,!1,!0),e.enableSleeping&&o.update(b,g.timeScale),i._bodiesApplyGravity(b,e.gravity),i._bodiesUpdate(b,t,g.timeScale,n,v.bounds),u.preSolveAll(b),f=0;f<e.constraintIterations;f++)u.solveAll(S,g.timeScale);u.postSolveAll(b),y.pairs=e.pairs;var w=a.collisions(y);for(s.update(m,w,x),e.enableSleeping&&o.afterCollisions(m.list,g.timeScale),m.collisionStart.length>0&&l.trigger(e,"collisionStart",{pairs:m.collisionStart}),r.preSolvePosition(m.list),f=0;f<e.positionIterations;f++)r.solvePosition(m.list,g.timeScale);for(r.postSolvePosition(b),u.preSolveAll(b),f=0;f<e.constraintIterations;f++)u.solveAll(S,g.timeScale);for(u.postSolveAll(b),r.preSolveVelocity(m.list),f=0;f<e.velocityIterations;f++)r.solveVelocity(m.list,g.timeScale);return m.collisionActive.length>0&&l.trigger(e,"collisionActive",{pairs:m.collisionActive}),m.collisionEnd.length>0&&l.trigger(e,"collisionEnd",{pairs:m.collisionEnd}),i._bodiesClearForces(b),l.trigger(e,"afterUpdate",h),e.timing.lastElapsed=d.now()-p,e},i.merge=function(e,t){if(d.extend(e,t),t.world){e.world=t.world,i.clear(e);for(var n=c.allBodies(e.world),r=0;r<n.length;r++){var a=n[r];o.set(a,!1),a.id=d.nextId()}}},i.clear=function(e){s.clear(e.pairs),a.clear(e.detector)},i._bodiesClearForces=function(e){for(var t=0;t<e.length;t++){var n=e[t];n.force.x=0,n.force.y=0,n.torque=0}},i._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var i=0;i<e.length;i++){var o=e[i];o.isStatic||o.isSleeping||(o.force.y+=o.mass*t.y*n,o.force.x+=o.mass*t.x*n)}},i._bodiesUpdate=function(e,t,n,i,o){for(var r=0;r<e.length;r++){var a=e[r];a.isStatic||a.isSleeping||p.update(a,t,n,i)}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(1);i._restingThresh=4,i._restingThreshTangent=6,i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i.preSolvePosition=function(e){var t,n,i,o=e.length;for(t=0;t<o;t++)(n=e[t]).isActive&&(i=n.activeContacts.length,n.collision.parentA.totalContacts+=i,n.collision.parentB.totalContacts+=i)},i.solvePosition=function(e,t){var n,o,r,a,s,l,c,u,d=i._positionDampen,p=e.length;for(n=0;n<p;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(r=o.collision).parentA,s=r.parentB,l=r.normal,o.separation=l.x*(s.positionImpulse.x+r.penetration.x-a.positionImpulse.x)+l.y*(s.positionImpulse.y+r.penetration.y-a.positionImpulse.y));for(n=0;n<p;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(r=o.collision).parentA,s=r.parentB,l=r.normal,u=(o.separation-o.slop)*t,(a.isStatic||s.isStatic)&&(u*=2),a.isStatic||a.isSleeping||(c=d/a.totalContacts,a.positionImpulse.x+=l.x*u*c,a.positionImpulse.y+=l.y*u*c),s.isStatic||s.isSleeping||(c=d/s.totalContacts,s.positionImpulse.x-=l.x*u*c,s.positionImpulse.y-=l.y*u*c))},i.postSolvePosition=function(e){for(var t=i._positionWarming,n=e.length,a=o.translate,s=r.update,l=0;l<n;l++){var c=e[l],u=c.positionImpulse,d=u.x,p=u.y,f=c.velocity;if(c.totalContacts=0,0!==d||0!==p){for(var v=0;v<c.parts.length;v++){var y=c.parts[v];a(y.vertices,u),s(y.bounds,y.vertices,f),y.position.x+=d,y.position.y+=p}c.positionPrev.x+=d,c.positionPrev.y+=p,d*f.x+p*f.y<0?(u.x=0,u.y=0):(u.x*=t,u.y*=t)}}},i.preSolveVelocity=function(e){var t,n,i=e.length;for(t=0;t<i;t++){var o=e[t];if(o.isActive&&!o.isSensor){var r=o.activeContacts,a=r.length,s=o.collision,l=s.parentA,c=s.parentB,u=s.normal,d=s.tangent;for(n=0;n<a;n++){var p=r[n],f=p.vertex,v=p.normalImpulse,y=p.tangentImpulse;if(0!==v||0!==y){var m=u.x*v+d.x*y,g=u.y*v+d.y*y;l.isStatic||l.isSleeping||(l.positionPrev.x+=m*l.inverseMass,l.positionPrev.y+=g*l.inverseMass,l.anglePrev+=l.inverseInertia*((f.x-l.position.x)*g-(f.y-l.position.y)*m)),c.isStatic||c.isSleeping||(c.positionPrev.x-=m*c.inverseMass,c.positionPrev.y-=g*c.inverseMass,c.anglePrev-=c.inverseInertia*((f.x-c.position.x)*g-(f.y-c.position.y)*m))}}}}},i.solveVelocity=function(e,t){var n,o,r,a,s=t*t,l=i._restingThresh*s,c=i._frictionNormalMultiplier,u=i._restingThreshTangent*s,d=Number.MAX_VALUE,p=e.length;for(r=0;r<p;r++){var f=e[r];if(f.isActive&&!f.isSensor){var v=f.collision,y=v.parentA,m=v.parentB,g=y.velocity,x=m.velocity,h=v.normal.x,b=v.normal.y,S=v.tangent.x,w=v.tangent.y,A=f.activeContacts,P=A.length,C=1/P,M=y.inverseMass+m.inverseMass,B=f.friction*f.frictionStatic*c*s;for(g.x=y.position.x-y.positionPrev.x,g.y=y.position.y-y.positionPrev.y,x.x=m.position.x-m.positionPrev.x,x.y=m.position.y-m.positionPrev.y,y.angularVelocity=y.angle-y.anglePrev,m.angularVelocity=m.angle-m.anglePrev,a=0;a<P;a++){var k=A[a],_=k.vertex,I=_.x-y.position.x,T=_.y-y.position.y,R=_.x-m.position.x,E=_.y-m.position.y,V=g.x-T*y.angularVelocity,L=g.y+I*y.angularVelocity,O=V-(x.x-E*m.angularVelocity),D=L-(x.y+R*m.angularVelocity),F=h*O+b*D,H=S*O+w*D,j=f.separation+F,q=Math.min(j,1),W=(q=j<0?0:q)*B;H>W||-H>W?(o=H>0?H:-H,(n=f.friction*(H>0?1:-1)*s)<-o?n=-o:n>o&&(n=o)):(n=H,o=d);var G=I*b-T*h,N=R*b-E*h,U=C/(M+y.inverseInertia*G*G+m.inverseInertia*N*N),z=(1+f.restitution)*F*U;if(n*=U,F*F>l&&F<0)k.normalImpulse=0;else{var X=k.normalImpulse;k.normalImpulse+=z,k.normalImpulse=Math.min(k.normalImpulse,0),z=k.normalImpulse-X}if(H*H>u)k.tangentImpulse=0;else{var Q=k.tangentImpulse;k.tangentImpulse+=n,k.tangentImpulse<-o&&(k.tangentImpulse=-o),k.tangentImpulse>o&&(k.tangentImpulse=o),n=k.tangentImpulse-Q}var Y=h*z+S*n,Z=b*z+w*n;y.isStatic||y.isSleeping||(y.positionPrev.x+=Y*y.inverseMass,y.positionPrev.y+=Z*y.inverseMass,y.anglePrev+=(I*Z-T*Y)*y.inverseInertia),m.isStatic||m.isSleeping||(m.positionPrev.x-=Y*m.inverseMass,m.positionPrev.y-=Z*m.inverseMass,m.anglePrev-=(R*Z-E*Y)*m.inverseInertia)}}}}},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0);i.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},i.update=function(e,t,n){var i,r,a,s,l=e.list,c=l.length,u=e.table,d=t.length,p=e.collisionStart,f=e.collisionEnd,v=e.collisionActive;for(p.length=0,f.length=0,v.length=0,s=0;s<c;s++)l[s].confirmedActive=!1;for(s=0;s<d;s++)(a=(i=t[s]).pair)?(a.isActive?v.push(a):p.push(a),o.update(a,i,n),a.confirmedActive=!0):(u[(a=o.create(i,n)).id]=a,p.push(a),l.push(a));var y=[];for(c=l.length,s=0;s<c;s++)(a=l[s]).confirmedActive||(o.setActive(a,!1,n),f.push(a),a.collision.bodyA.isSleeping||a.collision.bodyB.isSleeping||y.push(s));for(s=0;s<y.length;s++)a=l[r=y[s]-s],l.splice(r,1),delete u[a.id]},i.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}},function(e,t,n){var i=e.exports=n(22);i.Axes=n(11),i.Bodies=n(12),i.Body=n(6),i.Bounds=n(1),i.Collision=n(8),i.Common=n(0),i.Composite=n(5),i.Composites=n(23),i.Constraint=n(10),i.Contact=n(17),i.Detector=n(14),i.Engine=n(18),i.Events=n(4),i.Grid=n(24),i.Mouse=n(13),i.MouseConstraint=n(25),i.Pair=n(9),i.Pairs=n(20),i.Plugin=n(15),i.Query=n(26),i.Render=n(16),i.Resolver=n(19),i.Runner=n(27),i.SAT=n(28),i.Sleeping=n(7),i.Svg=n(29),i.Vector=n(2),i.Vertices=n(3),i.World=n(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(e,t,n){var i={};e.exports=i;var o=n(15),r=n(0);i.name="matter-js",i.version="0.18.0",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(i,e,t)},i.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(i,e,t)}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(10),a=n(0),s=n(6),l=n(12),c=a.deprecated;i.stack=function(e,t,n,i,r,a,l){for(var c,u=o.create({label:"Stack"}),d=e,p=t,f=0,v=0;v<i;v++){for(var y=0,m=0;m<n;m++){var g=l(d,p,m,v,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>y&&(y=x),s.translate(g,{x:.5*h,y:.5*x}),d=g.bounds.max.x+r,o.addBody(u,g),c=g,f+=1}else d+=r}p+=y+a,d=e}return u},i.chain=function(e,t,n,i,s,l){for(var c=e.bodies,u=1;u<c.length;u++){var d=c[u-1],p=c[u],f=d.bounds.max.y-d.bounds.min.y,v=d.bounds.max.x-d.bounds.min.x,y=p.bounds.max.y-p.bounds.min.y,m={bodyA:d,pointA:{x:v*t,y:f*n},bodyB:p,pointB:{x:(p.bounds.max.x-p.bounds.min.x)*i,y:y*s}},g=a.extend(m,l);o.addConstraint(e,r.create(g))}return e.label+=" Chain",e},i.mesh=function(e,t,n,i,s){var l,c,u,d,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)u=f[c-1+l*t],d=f[c+l*t],o.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s)));if(l>0)for(c=0;c<t;c++)u=f[c+(l-1)*t],d=f[c+l*t],o.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s))),i&&c>0&&(p=f[c-1+(l-1)*t],o.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s)))),i&&c<t-1&&(p=f[c+1+(l-1)*t],o.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s))))}return e.label+=" Mesh",e},i.pyramid=function(e,t,n,o,r,a,l){return i.stack(e,t,n,o,r,a,(function(t,i,a,c,u,d){var p=Math.min(o,Math.ceil(n/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(c>p||a<(c=p-c)||a>n-1-c))return 1===d&&s.translate(u,{x:(a+(n%2==1?1:-1))*f,y:0}),l(e+(u?a*f:0)+a*r,i,a,c,u,d)}))},i.newtonsCradle=function(e,t,n,i,a){for(var s=o.create({label:"Newtons Cradle"}),c=0;c<n;c++){var u=l.circle(e+c*(1.9*i),t+a,i,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),d=r.create({pointA:{x:e+c*(1.9*i),y:t},bodyB:u});o.addBody(s,u),o.addConstraint(s,d)}return s},c(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(e,t,n,i,a){var c=s.nextGroup(!0),u=.5*-n+20,d=.5*n-20,p=o.create({label:"Car"}),f=l.rectangle(e,t,n,i,{collisionFilter:{group:c},chamfer:{radius:.5*i},density:2e-4}),v=l.circle(e+u,t+0,a,{collisionFilter:{group:c},friction:.8}),y=l.circle(e+d,t+0,a,{collisionFilter:{group:c},friction:.8}),m=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:v,stiffness:1,length:0}),g=r.create({bodyB:f,pointB:{x:d,y:0},bodyA:y,stiffness:1,length:0});return o.addBody(p,f),o.addBody(p,v),o.addBody(p,y),o.addConstraint(p,m),o.addConstraint(p,g),p},c(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(e,t,n,o,r,s,c,u,d,p){d=a.extend({inertia:1/0},d),p=a.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var f=i.stack(e,t,n,o,r,s,(function(e,t){return l.circle(e,t,u,d)}));return i.mesh(f,n,o,c,p),f.label="Soft Body",f},c(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0),a=r.deprecated;i.create=function(e){return r.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},i.update=function(e,t,n,o){var r,a,s,l,c,u=n.world,d=e.buckets,p=!1;for(r=0;r<t.length;r++){var f=t[r];if((!f.isSleeping||o)&&(!u.bounds||!(f.bounds.max.x<u.bounds.min.x||f.bounds.min.x>u.bounds.max.x||f.bounds.max.y<u.bounds.min.y||f.bounds.min.y>u.bounds.max.y))){var v=i._getRegion(e,f);if(!f.region||v.id!==f.region.id||o){f.region&&!o||(f.region=v);var y=i._regionUnion(v,f.region);for(a=y.startCol;a<=y.endCol;a++)for(s=y.startRow;s<=y.endRow;s++){l=d[c=i._getBucketId(a,s)];var m=a>=v.startCol&&a<=v.endCol&&s>=v.startRow&&s<=v.endRow,g=a>=f.region.startCol&&a<=f.region.endCol&&s>=f.region.startRow&&s<=f.region.endRow;!m&&g&&g&&l&&i._bucketRemoveBody(e,l,f),(f.region===v||m&&!g||o)&&(l||(l=i._createBucket(d,c)),i._bucketAddBody(e,l,f))}f.region=v,p=!0}}}p&&(e.pairsList=i._createActivePairsList(e))},a(i,"update","Grid.update ➤ replaced by Matter.Detector"),i.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},a(i,"clear","Grid.clear ➤ replaced by Matter.Detector"),i._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),o=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),a=Math.max(e.endRow,t.endRow);return i._createRegion(n,o,r,a)},i._getRegion=function(e,t){var n=t.bounds,o=Math.floor(n.min.x/e.bucketWidth),r=Math.floor(n.max.x/e.bucketWidth),a=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return i._createRegion(o,r,a,s)},i._createRegion=function(e,t,n,i){return{id:e+","+t+","+n+","+i,startCol:e,endCol:t,startRow:n,endRow:i}},i._getBucketId=function(e,t){return"C"+e+"R"+t},i._createBucket=function(e,t){return e[t]=[]},i._bucketAddBody=function(e,t,n){var i,r=e.pairs,a=o.id,s=t.length;for(i=0;i<s;i++){var l=t[i];if(!(n.id===l.id||n.isStatic&&l.isStatic)){var c=a(n,l),u=r[c];u?u[2]+=1:r[c]=[n,l,1]}}t.push(n)},i._bucketRemoveBody=function(e,t,n){var i,a=e.pairs,s=o.id;t.splice(r.indexOf(t,n),1);var l=t.length;for(i=0;i<l;i++){var c=a[s(n,t[i])];c&&(c[2]-=1)}},i._createActivePairsList=function(e){var t,n,i=e.pairs,o=r.keys(i),a=o.length,s=[];for(n=0;n<a;n++)(t=i[o[n]])[2]>0?s.push(t):delete i[o[n]];return s}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(7),a=n(13),s=n(4),l=n(14),c=n(10),u=n(5),d=n(0),p=n(1);i.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=a.create(e.render.canvas):t&&t.element?n=a.create(t.element):(n=a.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var o={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},r=d.extend(o,t);return s.on(e,"beforeUpdate",(function(){var t=u.allBodies(e.world);i.update(r,t),i._triggerEvents(r)})),r},i.update=function(e,t){var n=e.mouse,i=e.constraint,a=e.body;if(0===n.button){if(i.bodyB)r.set(i.bodyB,!1),i.pointA=n.position;else for(var c=0;c<t.length;c++)if(a=t[c],p.contains(a.bounds,n.position)&&l.canCollide(a.collisionFilter,e.collisionFilter))for(var u=a.parts.length>1?1:0;u<a.parts.length;u++){var d=a.parts[u];if(o.contains(d.vertices,n.position)){i.pointA=n.position,i.bodyB=e.body=a,i.pointB={x:n.position.x-a.position.x,y:n.position.y-a.position.y},i.angleB=a.angle,r.set(a,!1),s.trigger(e,"startdrag",{mouse:n,body:a});break}}}else i.bodyB=e.body=null,i.pointB=null,a&&s.trigger(e,"enddrag",{mouse:n,body:a})},i._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,"mousemove",{mouse:t}),n.mousedown&&s.trigger(e,"mousedown",{mouse:t}),n.mouseup&&s.trigger(e,"mouseup",{mouse:t}),a.clearSourceEvents(t)}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(8),a=n(1),s=n(12),l=n(3);i.collides=function(e,t){for(var n=[],i=t.length,o=e.bounds,s=r.collides,l=a.overlaps,c=0;c<i;c++){var u=t[c],d=u.parts.length,p=1===d?0:1;if(l(u.bounds,o))for(var f=p;f<d;f++){var v=u.parts[f];if(l(v.bounds,o)){var y=s(v,e);if(y){n.push(y);break}}}}return n},i.ray=function(e,t,n,r){r=r||1e-100;for(var a=o.angle(t,n),l=o.magnitude(o.sub(t,n)),c=.5*(n.x+t.x),u=.5*(n.y+t.y),d=s.rectangle(c,u,l,r,{angle:a}),p=i.collides(d,e),f=0;f<p.length;f+=1){var v=p[f];v.body=v.bodyB=v.bodyA}return p},i.region=function(e,t,n){for(var i=[],o=0;o<e.length;o++){var r=e[o],s=a.overlaps(r.bounds,t);(s&&!n||!s&&n)&&i.push(r)}return i},i.point=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i];if(a.contains(o.bounds,t))for(var r=1===o.parts.length?0:1;r<o.parts.length;r++){var s=o.parts[r];if(a.contains(s.bounds,t)&&l.contains(s.vertices,t)){n.push(o);break}}}return n}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(18),a=n(0);!function(){var e,t,n;("undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e)||(e=function(e){n=setTimeout((function(){e(a.now())}),1e3/60)},t=function(){clearTimeout(n)});i.create=function(e){var t=a.extend({fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},i.run=function(t,n){return void 0!==t.positionIterations&&(n=t,t=i.create()),function o(r){t.frameRequestId=e(o),r&&t.enabled&&i.tick(t,n,r)}(),t},i.tick=function(e,t,n){var i,a=t.timing,s=1,l={timestamp:a.timestamp};o.trigger(e,"beforeTick",l),e.isFixed?i=e.delta:(i=n-e.timePrev||e.delta,e.timePrev=n,e.deltaHistory.push(i),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),s=(i=(i=(i=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:i)>e.deltaMax?e.deltaMax:i)/e.delta,e.delta=i),0!==e.timeScalePrev&&(s*=a.timeScale/e.timeScalePrev),0===a.timeScale&&(s=0),e.timeScalePrev=a.timeScale,e.correction=s,e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),o.trigger(e,"tick",l),o.trigger(e,"beforeUpdate",l),r.update(t,i,s),o.trigger(e,"afterUpdate",l),o.trigger(e,"afterTick",l)},i.stop=function(e){t(e.frameRequestId)},i.start=function(e,t){i.run(e,t)}}()},function(e,t,n){var i={};e.exports=i;var o=n(8),r=n(0).deprecated;i.collides=function(e,t){return o.collides(e,t)},r(i,"collides","SAT.collides ➤ replaced by Collision.collides")},function(e,t,n){var i={};e.exports=i;n(1);var o=n(0);i.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var n,r,a,s,l,c,u,d,p,f,v,y=[],m=0,g=0,x=0;t=t||15;var h=function(e,t,n){var i=n%2==1&&n>1;if(!p||e!=p.x||t!=p.y){p&&i?(f=p.x,v=p.y):(f=0,v=0);var o={x:f+e,y:v+t};!i&&p||(p=o),y.push(o),g=f+e,x=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(i._svgPathToAbsolute(e),a=e.getTotalLength(),c=[],n=0;n<e.pathSegList.numberOfItems;n+=1)c.push(e.pathSegList.getItem(n));for(u=c.concat();m<a;){if((l=c[e.getPathSegAtLength(m)])!=d){for(;u.length&&u[0]!=l;)b(u.shift());d=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":s=e.getPointAtLength(m),h(s.x,s.y,0)}m+=t}for(n=0,r=u.length;n<r;++n)b(u[n]);return y},i._svgPathToAbsolute=function(e){for(var t,n,i,o,r,a,s=e.pathSegList,l=0,c=0,u=s.numberOfItems,d=0;d<u;++d){var p=s.getItem(d),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(i=l+p.x1),"x2"in p&&(r=l+p.x2),"y1"in p&&(o=c+p.y1),"y2"in p&&(a=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":s.replaceItem(e.createSVGPathSegMovetoAbs(l,c),d);break;case"l":s.replaceItem(e.createSVGPathSegLinetoAbs(l,c),d);break;case"h":s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),d);break;case"v":s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),d);break;case"c":s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,i,o,r,a),d);break;case"s":s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,a),d);break;case"q":s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,i,o),d);break;case"t":s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),d);break;case"a":s.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),d);break;case"z":case"Z":l=t,c=n}"M"!=f&&"m"!=f||(t=l,n=c)}}},function(e,t,n){var i={};e.exports=i;var o=n(5);n(0);i.create=o.create,i.add=o.add,i.remove=o.remove,i.clear=o.clear,i.addComposite=o.addComposite,i.addBody=o.addBody,i.addConstraint=o.addConstraint}])}));











// MATTER.JS neka dodatna skripta

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.decomp=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
  module.exports = {
      decomp: polygonDecomp,
      quickDecomp: polygonQuickDecomp,
      isSimple: polygonIsSimple,
      removeCollinearPoints: polygonRemoveCollinearPoints,
      makeCCW: polygonMakeCCW
  };
  
  /**
   * Compute the intersection between two lines.
   * @static
   * @method lineInt
   * @param  {Array}  l1          Line vector 1
   * @param  {Array}  l2          Line vector 2
   * @param  {Number} precision   Precision to use when checking if the lines are parallel
   * @return {Array}              The intersection point.
   */
  function lineInt(l1,l2,precision){
      precision = precision || 0;
      var i = [0,0]; // point
      var a1, b1, c1, a2, b2, c2, det; // scalars
      a1 = l1[1][1] - l1[0][1];
      b1 = l1[0][0] - l1[1][0];
      c1 = a1 * l1[0][0] + b1 * l1[0][1];
      a2 = l2[1][1] - l2[0][1];
      b2 = l2[0][0] - l2[1][0];
      c2 = a2 * l2[0][0] + b2 * l2[0][1];
      det = a1 * b2 - a2*b1;
      if (!scalar_eq(det, 0, precision)) { // lines are not parallel
          i[0] = (b2 * c1 - b1 * c2) / det;
          i[1] = (a1 * c2 - a2 * c1) / det;
      }
      return i;
  }
  
  /**
   * Checks if two line segments intersects.
   * @method segmentsIntersect
   * @param {Array} p1 The start vertex of the first line segment.
   * @param {Array} p2 The end vertex of the first line segment.
   * @param {Array} q1 The start vertex of the second line segment.
   * @param {Array} q2 The end vertex of the second line segment.
   * @return {Boolean} True if the two line segments intersect
   */
  function lineSegmentsIntersect(p1, p2, q1, q2){
    var dx = p2[0] - p1[0];
    var dy = p2[1] - p1[1];
    var da = q2[0] - q1[0];
    var db = q2[1] - q1[1];
  
    // segments are parallel
    if((da*dy - db*dx) === 0){
      return false;
    }
  
    var s = (dx * (q1[1] - p1[1]) + dy * (p1[0] - q1[0])) / (da * dy - db * dx);
    var t = (da * (p1[1] - q1[1]) + db * (q1[0] - p1[0])) / (db * dx - da * dy);
  
    return (s>=0 && s<=1 && t>=0 && t<=1);
  }
  
  /**
   * Get the area of a triangle spanned by the three given points. Note that the area will be negative if the points are not given in counter-clockwise order.
   * @static
   * @method area
   * @param  {Array} a
   * @param  {Array} b
   * @param  {Array} c
   * @return {Number}
   */
  function triangleArea(a,b,c){
      return (((b[0] - a[0])*(c[1] - a[1]))-((c[0] - a[0])*(b[1] - a[1])));
  }
  
  function isLeft(a,b,c){
      return triangleArea(a,b,c) > 0;
  }
  
  function isLeftOn(a,b,c) {
      return triangleArea(a, b, c) >= 0;
  }
  
  function isRight(a,b,c) {
      return triangleArea(a, b, c) < 0;
  }
  
  function isRightOn(a,b,c) {
      return triangleArea(a, b, c) <= 0;
  }
  
  var tmpPoint1 = [],
      tmpPoint2 = [];
  
  /**
   * Check if three points are collinear
   * @method collinear
   * @param  {Array} a
   * @param  {Array} b
   * @param  {Array} c
   * @param  {Number} [thresholdAngle=0] Threshold angle to use when comparing the vectors. The function will return true if the angle between the resulting vectors is less than this value. Use zero for max precision.
   * @return {Boolean}
   */
  function collinear(a,b,c,thresholdAngle) {
      if(!thresholdAngle){
          return triangleArea(a, b, c) === 0;
      } else {
          var ab = tmpPoint1,
              bc = tmpPoint2;
  
          ab[0] = b[0]-a[0];
          ab[1] = b[1]-a[1];
          bc[0] = c[0]-b[0];
          bc[1] = c[1]-b[1];
  
          var dot = ab[0]*bc[0] + ab[1]*bc[1],
              magA = Math.sqrt(ab[0]*ab[0] + ab[1]*ab[1]),
              magB = Math.sqrt(bc[0]*bc[0] + bc[1]*bc[1]),
              angle = Math.acos(dot/(magA*magB));
          return angle < thresholdAngle;
      }
  }
  
  function sqdist(a,b){
      var dx = b[0] - a[0];
      var dy = b[1] - a[1];
      return dx * dx + dy * dy;
  }
  
  /**
   * Get a vertex at position i. It does not matter if i is out of bounds, this function will just cycle.
   * @method at
   * @param  {Number} i
   * @return {Array}
   */
  function polygonAt(polygon, i){
      var s = polygon.length;
      return polygon[i < 0 ? i % s + s : i % s];
  }
  
  /**
   * Clear the polygon data
   * @method clear
   * @return {Array}
   */
  function polygonClear(polygon){
      polygon.length = 0;
  }
  
  /**
   * Append points "from" to "to"-1 from an other polygon "poly" onto this one.
   * @method append
   * @param {Polygon} poly The polygon to get points from.
   * @param {Number}  from The vertex index in "poly".
   * @param {Number}  to The end vertex index in "poly". Note that this vertex is NOT included when appending.
   * @return {Array}
   */
  function polygonAppend(polygon, poly, from, to){
      for(var i=from; i<to; i++){
          polygon.push(poly[i]);
      }
  }
  
  /**
   * Make sure that the polygon vertices are ordered counter-clockwise.
   * @method makeCCW
   */
  function polygonMakeCCW(polygon){
      var br = 0,
          v = polygon;
  
      // find bottom right point
      for (var i = 1; i < polygon.length; ++i) {
          if (v[i][1] < v[br][1] || (v[i][1] === v[br][1] && v[i][0] > v[br][0])) {
              br = i;
          }
      }
  
      // reverse poly if clockwise
      if (!isLeft(polygonAt(polygon, br - 1), polygonAt(polygon, br), polygonAt(polygon, br + 1))) {
          polygonReverse(polygon);
      }
  }
  
  /**
   * Reverse the vertices in the polygon
   * @method reverse
   */
  function polygonReverse(polygon){
      var tmp = [];
      var N = polygon.length;
      for(var i=0; i!==N; i++){
          tmp.push(polygon.pop());
      }
      for(var i=0; i!==N; i++){
      polygon[i] = tmp[i];
      }
  }
  
  /**
   * Check if a point in the polygon is a reflex point
   * @method isReflex
   * @param  {Number}  i
   * @return {Boolean}
   */
  function polygonIsReflex(polygon, i){
      return isRight(polygonAt(polygon, i - 1), polygonAt(polygon, i), polygonAt(polygon, i + 1));
  }
  
  var tmpLine1=[],
      tmpLine2=[];
  
  /**
   * Check if two vertices in the polygon can see each other
   * @method canSee
   * @param  {Number} a Vertex index 1
   * @param  {Number} b Vertex index 2
   * @return {Boolean}
   */
  function polygonCanSee(polygon, a,b) {
      var p, dist, l1=tmpLine1, l2=tmpLine2;
  
      if (isLeftOn(polygonAt(polygon, a + 1), polygonAt(polygon, a), polygonAt(polygon, b)) && isRightOn(polygonAt(polygon, a - 1), polygonAt(polygon, a), polygonAt(polygon, b))) {
          return false;
      }
      dist = sqdist(polygonAt(polygon, a), polygonAt(polygon, b));
      for (var i = 0; i !== polygon.length; ++i) { // for each edge
          if ((i + 1) % polygon.length === a || i === a){ // ignore incident edges
              continue;
          }
          if (isLeftOn(polygonAt(polygon, a), polygonAt(polygon, b), polygonAt(polygon, i + 1)) && isRightOn(polygonAt(polygon, a), polygonAt(polygon, b), polygonAt(polygon, i))) { // if diag intersects an edge
              l1[0] = polygonAt(polygon, a);
              l1[1] = polygonAt(polygon, b);
              l2[0] = polygonAt(polygon, i);
              l2[1] = polygonAt(polygon, i + 1);
              p = lineInt(l1,l2);
              if (sqdist(polygonAt(polygon, a), p) < dist) { // if edge is blocking visibility to b
                  return false;
              }
          }
      }
  
      return true;
  }
  
  /**
   * Copy the polygon from vertex i to vertex j.
   * @method copy
   * @param  {Number} i
   * @param  {Number} j
   * @param  {Polygon} [targetPoly]   Optional target polygon to save in.
   * @return {Polygon}                The resulting copy.
   */
  function polygonCopy(polygon, i,j,targetPoly){
      var p = targetPoly || [];
      polygonClear(p);
      if (i < j) {
          // Insert all vertices from i to j
          for(var k=i; k<=j; k++){
              p.push(polygon[k]);
          }
  
      } else {
  
          // Insert vertices 0 to j
          for(var k=0; k<=j; k++){
              p.push(polygon[k]);
          }
  
          // Insert vertices i to end
          for(var k=i; k<polygon.length; k++){
              p.push(polygon[k]);
          }
      }
  
      return p;
  }
  
  /**
   * Decomposes the polygon into convex pieces. Returns a list of edges [[p1,p2],[p2,p3],...] that cuts the polygon.
   * Note that this algorithm has complexity O(N^4) and will be very slow for polygons with many vertices.
   * @method getCutEdges
   * @return {Array}
   */
  function polygonGetCutEdges(polygon) {
      var min=[], tmp1=[], tmp2=[], tmpPoly = [];
      var nDiags = Number.MAX_VALUE;
  
      for (var i = 0; i < polygon.length; ++i) {
          if (polygonIsReflex(polygon, i)) {
              for (var j = 0; j < polygon.length; ++j) {
                  if (polygonCanSee(polygon, i, j)) {
                      tmp1 = polygonGetCutEdges(polygonCopy(polygon, i, j, tmpPoly));
                      tmp2 = polygonGetCutEdges(polygonCopy(polygon, j, i, tmpPoly));
  
                      for(var k=0; k<tmp2.length; k++){
                          tmp1.push(tmp2[k]);
                      }
  
                      if (tmp1.length < nDiags) {
                          min = tmp1;
                          nDiags = tmp1.length;
                          min.push([polygonAt(polygon, i), polygonAt(polygon, j)]);
                      }
                  }
              }
          }
      }
  
      return min;
  }
  
  /**
   * Decomposes the polygon into one or more convex sub-Polygons.
   * @method decomp
   * @return {Array} An array or Polygon objects.
   */
  function polygonDecomp(polygon){
      var edges = polygonGetCutEdges(polygon);
      if(edges.length > 0){
          return polygonSlice(polygon, edges);
      } else {
          return [polygon];
      }
  }
  
  /**
   * Slices the polygon given one or more cut edges. If given one, this function will return two polygons (false on failure). If many, an array of polygons.
   * @method slice
   * @param {Array} cutEdges A list of edges, as returned by .getCutEdges()
   * @return {Array}
   */
  function polygonSlice(polygon, cutEdges){
      if(cutEdges.length === 0){
      return [polygon];
      }
      if(cutEdges instanceof Array && cutEdges.length && cutEdges[0] instanceof Array && cutEdges[0].length===2 && cutEdges[0][0] instanceof Array){
  
          var polys = [polygon];
  
          for(var i=0; i<cutEdges.length; i++){
              var cutEdge = cutEdges[i];
              // Cut all polys
              for(var j=0; j<polys.length; j++){
                  var poly = polys[j];
                  var result = polygonSlice(poly, cutEdge);
                  if(result){
                      // Found poly! Cut and quit
                      polys.splice(j,1);
                      polys.push(result[0],result[1]);
                      break;
                  }
              }
          }
  
          return polys;
      } else {
  
          // Was given one edge
          var cutEdge = cutEdges;
          var i = polygon.indexOf(cutEdge[0]);
          var j = polygon.indexOf(cutEdge[1]);
  
          if(i !== -1 && j !== -1){
              return [polygonCopy(polygon, i,j),
                      polygonCopy(polygon, j,i)];
          } else {
              return false;
          }
      }
  }
  
  /**
   * Checks that the line segments of this polygon do not intersect each other.
   * @method isSimple
   * @param  {Array} path An array of vertices e.g. [[0,0],[0,1],...]
   * @return {Boolean}
   * @todo Should it check all segments with all others?
   */
  function polygonIsSimple(polygon){
      var path = polygon, i;
      // Check
      for(i=0; i<path.length-1; i++){
          for(var j=0; j<i-1; j++){
              if(lineSegmentsIntersect(path[i], path[i+1], path[j], path[j+1] )){
                  return false;
              }
          }
      }
  
      // Check the segment between the last and the first point to all others
      for(i=1; i<path.length-2; i++){
          if(lineSegmentsIntersect(path[0], path[path.length-1], path[i], path[i+1] )){
              return false;
          }
      }
  
      return true;
  }
  
  function getIntersectionPoint(p1, p2, q1, q2, delta){
    delta = delta || 0;
    var a1 = p2[1] - p1[1];
    var b1 = p1[0] - p2[0];
    var c1 = (a1 * p1[0]) + (b1 * p1[1]);
    var a2 = q2[1] - q1[1];
    var b2 = q1[0] - q2[0];
    var c2 = (a2 * q1[0]) + (b2 * q1[1]);
    var det = (a1 * b2) - (a2 * b1);
  
    if(!scalar_eq(det,0,delta)){
      return [((b2 * c1) - (b1 * c2)) / det, ((a1 * c2) - (a2 * c1)) / det];
    } else {
      return [0,0];
      }
  }
  
  /**
   * Quickly decompose the Polygon into convex sub-polygons.
   * @method quickDecomp
   * @param  {Array} result
   * @param  {Array} [reflexVertices]
   * @param  {Array} [steinerPoints]
   * @param  {Number} [delta]
   * @param  {Number} [maxlevel]
   * @param  {Number} [level]
   * @return {Array}
   */
  function polygonQuickDecomp(polygon, result,reflexVertices,steinerPoints,delta,maxlevel,level){
      maxlevel = maxlevel || 100;
      level = level || 0;
      delta = delta || 25;
      result = typeof(result)!=="undefined" ? result : [];
      reflexVertices = reflexVertices || [];
      steinerPoints = steinerPoints || [];
  
      var upperInt=[0,0], lowerInt=[0,0], p=[0,0]; // Points
      var upperDist=0, lowerDist=0, d=0, closestDist=0; // scalars
      var upperIndex=0, lowerIndex=0, closestIndex=0; // Integers
      var lowerPoly=[], upperPoly=[]; // polygons
      var poly = polygon,
          v = polygon;
  
      if(v.length < 3){
      return result;
      }
  
      level++;
      if(level > maxlevel){
          console.warn("quickDecomp: max level ("+maxlevel+") reached.");
          return result;
      }
  
      for (var i = 0; i < polygon.length; ++i) {
          if (polygonIsReflex(poly, i)) {
              reflexVertices.push(poly[i]);
              upperDist = lowerDist = Number.MAX_VALUE;
  
  
              for (var j = 0; j < polygon.length; ++j) {
                  if (isLeft(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j)) && isRightOn(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j - 1))) { // if line intersects with an edge
                      p = getIntersectionPoint(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j), polygonAt(poly, j - 1)); // find the point of intersection
                      if (isRight(polygonAt(poly, i + 1), polygonAt(poly, i), p)) { // make sure it's inside the poly
                          d = sqdist(poly[i], p);
                          if (d < lowerDist) { // keep only the closest intersection
                              lowerDist = d;
                              lowerInt = p;
                              lowerIndex = j;
                          }
                      }
                  }
                  if (isLeft(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j + 1)) && isRightOn(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j))) {
                      p = getIntersectionPoint(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j), polygonAt(poly, j + 1));
                      if (isLeft(polygonAt(poly, i - 1), polygonAt(poly, i), p)) {
                          d = sqdist(poly[i], p);
                          if (d < upperDist) {
                              upperDist = d;
                              upperInt = p;
                              upperIndex = j;
                          }
                      }
                  }
              }
  
              // if there are no vertices to connect to, choose a point in the middle
              if (lowerIndex === (upperIndex + 1) % polygon.length) {
                  //console.log("Case 1: Vertex("+i+"), lowerIndex("+lowerIndex+"), upperIndex("+upperIndex+"), poly.size("+polygon.length+")");
                  p[0] = (lowerInt[0] + upperInt[0]) / 2;
                  p[1] = (lowerInt[1] + upperInt[1]) / 2;
                  steinerPoints.push(p);
  
                  if (i < upperIndex) {
                      //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.begin() + upperIndex + 1);
                      polygonAppend(lowerPoly, poly, i, upperIndex+1);
                      lowerPoly.push(p);
                      upperPoly.push(p);
                      if (lowerIndex !== 0){
                          //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.end());
                          polygonAppend(upperPoly, poly,lowerIndex,poly.length);
                      }
                      //upperPoly.insert(upperPoly.end(), poly.begin(), poly.begin() + i + 1);
                      polygonAppend(upperPoly, poly,0,i+1);
                  } else {
                      if (i !== 0){
                          //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.end());
                          polygonAppend(lowerPoly, poly,i,poly.length);
                      }
                      //lowerPoly.insert(lowerPoly.end(), poly.begin(), poly.begin() + upperIndex + 1);
                      polygonAppend(lowerPoly, poly,0,upperIndex+1);
                      lowerPoly.push(p);
                      upperPoly.push(p);
                      //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.begin() + i + 1);
                      polygonAppend(upperPoly, poly,lowerIndex,i+1);
                  }
              } else {
                  // connect to the closest point within the triangle
                  //console.log("Case 2: Vertex("+i+"), closestIndex("+closestIndex+"), poly.size("+polygon.length+")\n");
  
                  if (lowerIndex > upperIndex) {
                      upperIndex += polygon.length;
                  }
                  closestDist = Number.MAX_VALUE;
  
                  if(upperIndex < lowerIndex){
                      return result;
                  }
  
                  for (var j = lowerIndex; j <= upperIndex; ++j) {
                      if (isLeftOn(polygonAt(poly, i - 1), polygonAt(poly, i), polygonAt(poly, j)) && isRightOn(polygonAt(poly, i + 1), polygonAt(poly, i), polygonAt(poly, j))) {
                          d = sqdist(polygonAt(poly, i), polygonAt(poly, j));
                          if (d < closestDist) {
                              closestDist = d;
                              closestIndex = j % polygon.length;
                          }
                      }
                  }
  
                  if (i < closestIndex) {
                      polygonAppend(lowerPoly, poly,i,closestIndex+1);
                      if (closestIndex !== 0){
                          polygonAppend(upperPoly, poly,closestIndex,v.length);
                      }
                      polygonAppend(upperPoly, poly,0,i+1);
                  } else {
                      if (i !== 0){
                          polygonAppend(lowerPoly, poly,i,v.length);
                      }
                      polygonAppend(lowerPoly, poly,0,closestIndex+1);
                      polygonAppend(upperPoly, poly,closestIndex,i+1);
                  }
              }
  
              // solve smallest poly first
              if (lowerPoly.length < upperPoly.length) {
                  polygonQuickDecomp(lowerPoly,result,reflexVertices,steinerPoints,delta,maxlevel,level);
                  polygonQuickDecomp(upperPoly,result,reflexVertices,steinerPoints,delta,maxlevel,level);
              } else {
                  polygonQuickDecomp(upperPoly,result,reflexVertices,steinerPoints,delta,maxlevel,level);
                  polygonQuickDecomp(lowerPoly,result,reflexVertices,steinerPoints,delta,maxlevel,level);
              }
  
              return result;
          }
      }
      result.push(polygon);
  
      return result;
  }
  
  /**
   * Remove collinear points in the polygon.
   * @method removeCollinearPoints
   * @param  {Number} [precision] The threshold angle to use when determining whether two edges are collinear. Use zero for finest precision.
   * @return {Number}           The number of points removed
   */
  function polygonRemoveCollinearPoints(polygon, precision){
      var num = 0;
      for(var i=polygon.length-1; polygon.length>3 && i>=0; --i){
          if(collinear(polygonAt(polygon, i-1),polygonAt(polygon, i),polygonAt(polygon, i+1),precision)){
              // Remove the middle point
              polygon.splice(i%polygon.length,1);
              num++;
          }
      }
      return num;
  }
  
  /**
   * Check if two scalars are equal
   * @static
   * @method eq
   * @param  {Number} a
   * @param  {Number} b
   * @param  {Number} [precision]
   * @return {Boolean}
   */
  function scalar_eq(a,b,precision){
      precision = precision || 0;
      return Math.abs(a-b) < precision;
  }
  
  },{}]},{},[1])
  (1)
  });
  
  // SVGPathSeg API polyfill
  // https://github.com/progers/pathseg
  //
  // This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
  // SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
  // changes which were implemented in Firefox 43 and Chrome 46.
  
  (function() { "use strict";
      if (!("SVGPathSeg" in window)) {
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
          window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
              this.pathSegType = type;
              this.pathSegTypeAsLetter = typeAsLetter;
              this._owningPathSegList = owningPathSegList;
          }
  
          window.SVGPathSeg.prototype.classname = "SVGPathSeg";
  
          window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
          window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
          window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
          window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
          window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
          window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
          window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
          window.SVGPathSeg.PATHSEG_ARC_REL = 11;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
          window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
          window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
          window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
          window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
  
          // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
          window.SVGPathSeg.prototype._segmentChanged = function() {
              if (this._owningPathSegList)
                  this._owningPathSegList.segmentChanged(this);
          }
  
          window.SVGPathSegClosePath = function(owningPathSegList) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
          }
          window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
          window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
          window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(undefined); }
  
          window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
          window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
          window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
          window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
          window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x1 = x1;
              this._y1 = y1;
              this._x2 = x2;
              this._y2 = y2;
          }
          window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
          window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x1 = x1;
              this._y1 = y1;
              this._x2 = x2;
              this._y2 = y2;
          }
          window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
          window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x1 = x1;
              this._y1 = y1;
          }
          window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
          window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x1 = x1;
              this._y1 = y1;
          }
          window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
          window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
              this._x = x;
              this._y = y;
              this._r1 = r1;
              this._r2 = r2;
              this._angle = angle;
              this._largeArcFlag = largeArcFlag;
              this._sweepFlag = sweepFlag;
          }
          window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
          window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
          window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
              this._x = x;
              this._y = y;
              this._r1 = r1;
              this._r2 = r2;
              this._angle = angle;
              this._largeArcFlag = largeArcFlag;
              this._sweepFlag = sweepFlag;
          }
          window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
          window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
          window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
              this._x = x;
          }
          window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
          window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
          window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
          Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
              this._x = x;
          }
          window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
          window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
          window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x); }
          Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
              this._y = y;
          }
          window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
          window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
          window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y); }
          Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
              this._y = y;
          }
          window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
          window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
          window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(undefined, this._y); }
          Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x2 = x2;
              this._y2 = y2;
          }
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
              this._x = x;
              this._y = y;
              this._x2 = x2;
              this._y2 = y2;
          }
          window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
          window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
              window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
              this._x = x;
              this._y = y;
          }
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
          window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
          Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
  
          // Add createSVGPathSeg* functions to window.SVGPathElement.
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
          window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(undefined); }
          window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new window.SVGPathSegMovetoAbs(undefined, x, y); }
          window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new window.SVGPathSegMovetoRel(undefined, x, y); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new window.SVGPathSegLinetoAbs(undefined, x, y); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new window.SVGPathSegLinetoRel(undefined, x, y); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
          window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
          window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new window.SVGPathSegLinetoHorizontalAbs(undefined, x); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new window.SVGPathSegLinetoHorizontalRel(undefined, x); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new window.SVGPathSegLinetoVerticalAbs(undefined, y); }
          window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new window.SVGPathSegLinetoVerticalRel(undefined, y); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
          window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }
  
          if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
              // Add getPathSegAtLength to SVGPathElement.
              // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
              // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
              window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                  if (distance === undefined || !isFinite(distance))
                      throw "Invalid arguments.";
  
                  var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  measurementElement.setAttribute("d", this.getAttribute("d"));
                  var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;
  
                  // If the path is empty, return 0.
                  if (lastPathSegment <= 0)
                      return 0;
  
                  do {
                      measurementElement.pathSegList.removeItem(lastPathSegment);
                      if (distance > measurementElement.getTotalLength())
                          break;
                      lastPathSegment--;
                  } while (lastPathSegment > 0);
                  return lastPathSegment;
              }
          }
      }
  
      // Checking for SVGPathSegList in window checks for the case of an implementation without the
      // SVGPathSegList API.
      // The second check for appendItem is specific to Firefox 59+ which removed only parts of the
      // SVGPathSegList API (e.g., appendItem). In this case we need to re-implement the entire API
      // so the polyfill data (i.e., _list) is used throughout.
      if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
          window.SVGPathSegList = function(pathElement) {
              this._pathElement = pathElement;
              this._list = this._parsePath(this._pathElement.getAttribute("d"));
  
              // Use a MutationObserver to catch changes to the path's "d" attribute.
              this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
              this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
              this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          }
  
          window.SVGPathSegList.prototype.classname = "SVGPathSegList";
  
          Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
              get: function() {
                  this._checkPathSynchronizedToList();
                  return this._list.length;
              },
              enumerable: true
          });
  
          // Add the pathSegList accessors to window.SVGPathElement.
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
          Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
              get: function() {
                  if (!this._pathSegList)
                      this._pathSegList = new window.SVGPathSegList(this);
                  return this._pathSegList;
              },
              enumerable: true
          });
          // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
          Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
          Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
  
          // Process any pending mutations to the path element and update the list as needed.
          // This should be the first call of all public functions and is needed because
          // MutationObservers are not synchronous so we can have pending asynchronous mutations.
          window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
              this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
          }
  
          window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
              if (!this._pathElement)
                  return;
              var hasPathMutations = false;
              mutationRecords.forEach(function(record) {
                  if (record.attributeName == "d")
                      hasPathMutations = true;
              });
              if (hasPathMutations)
                  this._list = this._parsePath(this._pathElement.getAttribute("d"));
          }
  
          // Serialize the list and update the path's 'd' attribute.
          window.SVGPathSegList.prototype._writeListToPath = function() {
              this._pathElementMutationObserver.disconnect();
              this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
              this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
          }
  
          // When a path segment changes the list needs to be synchronized back to the path element.
          window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
              this._writeListToPath();
          }
  
          window.SVGPathSegList.prototype.clear = function() {
              this._checkPathSynchronizedToList();
  
              this._list.forEach(function(pathSeg) {
                  pathSeg._owningPathSegList = null;
              });
              this._list = [];
              this._writeListToPath();
          }
  
          window.SVGPathSegList.prototype.initialize = function(newItem) {
              this._checkPathSynchronizedToList();
  
              this._list = [newItem];
              newItem._owningPathSegList = this;
              this._writeListToPath();
              return newItem;
          }
  
          window.SVGPathSegList.prototype._checkValidIndex = function(index) {
              if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                  throw "INDEX_SIZE_ERR";
          }
  
          window.SVGPathSegList.prototype.getItem = function(index) {
              this._checkPathSynchronizedToList();
  
              this._checkValidIndex(index);
              return this._list[index];
          }
  
          window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
              this._checkPathSynchronizedToList();
  
              // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
              if (index > this.numberOfItems)
                  index = this.numberOfItems;
              if (newItem._owningPathSegList) {
                  // SVG2 spec says to make a copy.
                  newItem = newItem.clone();
              }
              this._list.splice(index, 0, newItem);
              newItem._owningPathSegList = this;
              this._writeListToPath();
              return newItem;
          }
  
          window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
              this._checkPathSynchronizedToList();
  
              if (newItem._owningPathSegList) {
                  // SVG2 spec says to make a copy.
                  newItem = newItem.clone();
              }
              this._checkValidIndex(index);
              this._list[index] = newItem;
              newItem._owningPathSegList = this;
              this._writeListToPath();
              return newItem;
          }
  
          window.SVGPathSegList.prototype.removeItem = function(index) {
              this._checkPathSynchronizedToList();
  
              this._checkValidIndex(index);
              var item = this._list[index];
              this._list.splice(index, 1);
              this._writeListToPath();
              return item;
          }
  
          window.SVGPathSegList.prototype.appendItem = function(newItem) {
              this._checkPathSynchronizedToList();
  
              if (newItem._owningPathSegList) {
                  // SVG2 spec says to make a copy.
                  newItem = newItem.clone();
              }
              this._list.push(newItem);
              newItem._owningPathSegList = this;
              // TODO: Optimize this to just append to the existing attribute.
              this._writeListToPath();
              return newItem;
          }
  
          window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
              var string = "";
              var first = true;
              pathSegArray.forEach(function(pathSeg) {
                  if (first) {
                      first = false;
                      string += pathSeg._asPathString();
                  } else {
                      string += " " + pathSeg._asPathString();
                  }
              });
              return string;
          }
  
          // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
          window.SVGPathSegList.prototype._parsePath = function(string) {
              if (!string || string.length == 0)
                  return [];
  
              var owningPathSegList = this;
  
              var Builder = function() {
                  this.pathSegList = [];
              }
  
              Builder.prototype.appendSegment = function(pathSeg) {
                  this.pathSegList.push(pathSeg);
              }
  
              var Source = function(string) {
                  this._string = string;
                  this._currentIndex = 0;
                  this._endIndex = this._string.length;
                  this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;
  
                  this._skipOptionalSpaces();
              }
  
              Source.prototype._isCurrentSpace = function() {
                  var character = this._string[this._currentIndex];
                  return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
              }
  
              Source.prototype._skipOptionalSpaces = function() {
                  while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                      this._currentIndex++;
                  return this._currentIndex < this._endIndex;
              }
  
              Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                  if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                      return false;
                  if (this._skipOptionalSpaces()) {
                      if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                          this._currentIndex++;
                          this._skipOptionalSpaces();
                      }
                  }
                  return this._currentIndex < this._endIndex;
              }
  
              Source.prototype.hasMoreData = function() {
                  return this._currentIndex < this._endIndex;
              }
  
              Source.prototype.peekSegmentType = function() {
                  var lookahead = this._string[this._currentIndex];
                  return this._pathSegTypeFromChar(lookahead);
              }
  
              Source.prototype._pathSegTypeFromChar = function(lookahead) {
                  switch (lookahead) {
                  case "Z":
                  case "z":
                      return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                  case "M":
                      return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                  case "m":
                      return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                  case "L":
                      return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                  case "l":
                      return window.SVGPathSeg.PATHSEG_LINETO_REL;
                  case "C":
                      return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                  case "c":
                      return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                  case "Q":
                      return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                  case "q":
                      return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                  case "A":
                      return window.SVGPathSeg.PATHSEG_ARC_ABS;
                  case "a":
                      return window.SVGPathSeg.PATHSEG_ARC_REL;
                  case "H":
                      return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                  case "h":
                      return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                  case "V":
                      return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                  case "v":
                      return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                  case "S":
                      return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                  case "s":
                      return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                  case "T":
                      return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                  case "t":
                      return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                  default:
                      return window.SVGPathSeg.PATHSEG_UNKNOWN;
                  }
              }
  
              Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                  // Check for remaining coordinates in the current command.
                  if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                      if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                          return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                      if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                          return window.SVGPathSeg.PATHSEG_LINETO_REL;
                      return previousCommand;
                  }
                  return window.SVGPathSeg.PATHSEG_UNKNOWN;
              }
  
              Source.prototype.initialCommandIsMoveTo = function() {
                  // If the path is empty it is still valid, so return true.
                  if (!this.hasMoreData())
                      return true;
                  var command = this.peekSegmentType();
                  // Path must start with moveTo.
                  return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
              }
  
              // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
              // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
              Source.prototype._parseNumber = function() {
                  var exponent = 0;
                  var integer = 0;
                  var frac = 1;
                  var decimal = 0;
                  var sign = 1;
                  var expsign = 1;
  
                  var startIndex = this._currentIndex;
  
                  this._skipOptionalSpaces();
  
                  // Read the sign.
                  if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                      this._currentIndex++;
                  else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                      this._currentIndex++;
                      sign = -1;
                  }
  
                  if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                      // The first character of a number must be one of [0-9+-.].
                      return undefined;
  
                  // Read the integer part, build right-to-left.
                  var startIntPartIndex = this._currentIndex;
                  while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                      this._currentIndex++; // Advance to first non-digit.
  
                  if (this._currentIndex != startIntPartIndex) {
                      var scanIntPartIndex = this._currentIndex - 1;
                      var multiplier = 1;
                      while (scanIntPartIndex >= startIntPartIndex) {
                          integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                          multiplier *= 10;
                      }
                  }
  
                  // Read the decimals.
                  if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                      this._currentIndex++;
  
                      // There must be a least one digit following the .
                      if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                          return undefined;
                      while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                          frac *= 10;
                          decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                          this._currentIndex += 1;
                      }
                  }
  
                  // Read the exponent part.
                  if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                      this._currentIndex++;
  
                      // Read the sign of the exponent.
                      if (this._string.charAt(this._currentIndex) == "+") {
                          this._currentIndex++;
                      } else if (this._string.charAt(this._currentIndex) == "-") {
                          this._currentIndex++;
                          expsign = -1;
                      }
  
                      // There must be an exponent.
                      if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                          return undefined;
  
                      while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                          exponent *= 10;
                          exponent += (this._string.charAt(this._currentIndex) - "0");
                          this._currentIndex++;
                      }
                  }
  
                  var number = integer + decimal;
                  number *= sign;
  
                  if (exponent)
                      number *= Math.pow(10, expsign * exponent);
  
                  if (startIndex == this._currentIndex)
                      return undefined;
  
                  this._skipOptionalSpacesOrDelimiter();
  
                  return number;
              }
  
              Source.prototype._parseArcFlag = function() {
                  if (this._currentIndex >= this._endIndex)
                      return undefined;
                  var flag = false;
                  var flagChar = this._string.charAt(this._currentIndex++);
                  if (flagChar == "0")
                      flag = false;
                  else if (flagChar == "1")
                      flag = true;
                  else
                      return undefined;
  
                  this._skipOptionalSpacesOrDelimiter();
                  return flag;
              }
  
              Source.prototype.parseSegment = function() {
                  var lookahead = this._string[this._currentIndex];
                  var command = this._pathSegTypeFromChar(lookahead);
                  if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                      // Possibly an implicit command. Not allowed if this is the first command.
                      if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                          return null;
                      command = this._nextCommandHelper(lookahead, this._previousCommand);
                      if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                          return null;
                  } else {
                      this._currentIndex++;
                  }
  
                  this._previousCommand = command;
  
                  switch (command) {
                  case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                      return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                      return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_REL:
                      return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                      return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                      return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                      return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                      return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                      return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                      this._skipOptionalSpaces();
                      return new window.SVGPathSegClosePath(owningPathSegList);
                  case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                  case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                  case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                      var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                  case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                      var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                  case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                  case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                  case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                      return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                      return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                  case window.SVGPathSeg.PATHSEG_ARC_REL:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                  case window.SVGPathSeg.PATHSEG_ARC_ABS:
                      var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                      return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                  default:
                      throw "Unknown path seg type."
                  }
              }
  
              var builder = new Builder();
              var source = new Source(string);
  
              if (!source.initialCommandIsMoveTo())
                  return [];
              while (source.hasMoreData()) {
                  var pathSeg = source.parseSegment();
                  if (!pathSeg)
                      return [];
                  builder.appendSegment(pathSeg);
              }
  
              return builder.pathSegList;
          }
      }
  }());
