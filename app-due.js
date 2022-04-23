/*!
 * matter-js 0.15.0 by @liabru 2020-12-26
 * http://brm.io/matter-js/
 * License MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(function(){try{return require("poly-decomp")}catch(e){}}()):"function"==typeof define&&define.amd?define("Matter",["poly-decomp"],t):"object"==typeof exports?exports.Matter=t(function(){try{return require("poly-decomp")}catch(e){}}()):e.Matter=t(e.decomp)}(this,(function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){var n={};e.exports=n,function(){n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n.extend=function(e,t){var i,o;"boolean"==typeof t?(i=2,o=t):(i=1,o=!0);for(var r=i;r<arguments.length;r++){var s=arguments[r];if(s)for(var a in s)o&&s[a]&&s[a].constructor===Object?e[a]&&e[a].constructor!==Object?e[a]=s[a]:(e[a]=e[a]||{},n.extend(e[a],o,s[a])):e[a]=s[a]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),i=0;i<n.length;i++)t.push(e[n[i]]);return t}for(var o in e)t.push(e[o]);return t},n.get=function(e,t,n,i){t=t.split(".").slice(n,i);for(var o=0;o<t.length;o+=1)e=e[t[o]];return e},n.set=function(e,t,i,o,r){var s=t.split(".").slice(o,r);return n.get(e,t,0,-1)[s[s.length-1]]=i,i},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(n.random()*(t+1)),o=e[t];e[t]=e[i],e[i]=o}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.isFunction=function(e){return"function"==typeof e},n.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},n.isString=function(e){return"[object String]"===toString.call(e)},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-n._nowStartTime},n.random=function(t,n){return n=void 0!==n?n:1,(t=void 0!==t?t:0)+e()*(n-t)};var e=function(){return n._seed=(9301*n._seed+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n},n.topologicalSort=function(e){var t=[],i=[],o=[];for(var r in e)i[r]||o[r]||n._topologicalSort(r,i,o,e,t);return t},n._topologicalSort=function(e,t,i,o,r){var s=o[e]||[];i[e]=!0;for(var a=0;a<s.length;a+=1){var l=s[a];i[l]||(t[l]||n._topologicalSort(l,t,i,o,r))}i[e]=!1,t[e]=!0,r.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var i=function(){for(var t,n=new Array(arguments.length),i=0,o=arguments.length;i<o;i++)n[i]=arguments[i];for(i=0;i<e.length;i+=1){var r=e[i].apply(t,n);void 0!==r&&(t=r)}return t};return i._chained=e,i},n.chainPathBefore=function(e,t,i){return n.set(e,t,n.chain(i,n.get(e,t)))},n.chainPathAfter=function(e,t,i){return n.set(e,t,n.chain(n.get(e,t),i))}}()},function(e,t){var n={};e.exports=n,n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var i=0;i<t.length;i++){var o=t[i];o.x>e.max.x&&(e.max.x=o.x),o.x<e.min.x&&(e.min.x=o.x),o.y>e.max.y&&(e.max.y=o.y),o.y<e.min.y&&(e.min.y=o.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,i=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+i}},function(e,t){var n={};e.exports=n,n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var i=Math.cos(t),o=Math.sin(t);n||(n={});var r=e.x*i-e.y*o;return n.y=e.x*o+e.y*i,n.x=r,n},n.rotateAbout=function(e,t,n,i){var o=Math.cos(t),r=Math.sin(t);i||(i={});var s=n.x+((e.x-n.x)*o-(e.y-n.y)*r);return i.y=n.y+((e.x-n.x)*r+(e.y-n.y)*o),i.x=s,i},n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return{x:(t=!0===t?-1:1)*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.create=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i],r={x:o.x,y:o.y,index:i,body:t,isInternal:!1};n.push(r)}return n},i.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,(function(e,t,i){n.push({x:parseFloat(t),y:parseFloat(i)})})),i.create(n,t)},i.centre=function(e){for(var t,n,r,s=i.area(e,!0),a={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=o.cross(e[l],e[r]),n=o.mult(o.add(e[l],e[r]),t),a=o.add(a,n);return o.div(a,6*s)},i.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return o.div(t,e.length)},i.area=function(e,t){for(var n=0,i=e.length-1,o=0;o<e.length;o++)n+=(e[i].x-e[o].x)*(e[i].y+e[o].y),i=o;return t?n/2:Math.abs(n)/2},i.inertia=function(e,t){for(var n,i,r=0,s=0,a=e,l=0;l<a.length;l++)i=(l+1)%a.length,r+=(n=Math.abs(o.cross(a[i],a[l])))*(o.dot(a[i],a[i])+o.dot(a[i],a[l])+o.dot(a[l],a[l])),s+=n;return t/6*(r/s)},i.translate=function(e,t,n){var i;if(n)for(i=0;i<e.length;i++)e[i].x+=t.x*n,e[i].y+=t.y*n;else for(i=0;i<e.length;i++)e[i].x+=t.x,e[i].y+=t.y;return e},i.rotate=function(e,t,n){if(0!==t){for(var i=Math.cos(t),o=Math.sin(t),r=0;r<e.length;r++){var s=e[r],a=s.x-n.x,l=s.y-n.y;s.x=n.x+(a*i-l*o),s.y=n.y+(a*o+l*i)}return e}},i.contains=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=e[(n+1)%e.length];if((t.x-i.x)*(o.y-i.y)+(t.y-i.y)*(i.x-o.x)>0)return!1}return!0},i.scale=function(e,t,n,r){if(1===t&&1===n)return e;var s,a;r=r||i.centre(e);for(var l=0;l<e.length;l++)s=e[l],a=o.sub(s,r),e[l].x=r.x+a.x*t,e[l].y=r.y+a.y*n;return e},i.chamfer=function(e,t,n,i,s){t="number"==typeof t?[t]:t||[8],n=void 0!==n?n:-1,i=i||2,s=s||14;for(var a=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],d=e[l],u=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0!==p){var f=o.normalise({x:d.y-c.y,y:c.x-d.x}),v=o.normalise({x:u.y-d.y,y:d.x-u.x}),m=Math.sqrt(2*Math.pow(p,2)),y=o.mult(r.clone(f),p),g=o.normalise(o.mult(o.add(f,v),.5)),x=o.sub(d,o.mult(g,m)),h=n;-1===n&&(h=1.75*Math.pow(p,.32)),(h=r.clamp(h,i,s))%2==1&&(h+=1);for(var b=Math.acos(o.dot(f,v))/h,w=0;w<h;w++)a.push(o.add(o.rotate(y,b*w),x))}else a.push(d)}return a},i.clockwiseSort=function(e){var t=i.mean(e);return e.sort((function(e,n){return o.angle(t,e)-o.angle(t,n)})),e},i.isConvex=function(e){var t,n,i,o,r=0,s=e.length;if(s<3)return null;for(t=0;t<s;t++)if(i=(t+2)%s,o=(e[n=(t+1)%s].x-e[t].x)*(e[i].y-e[n].y),(o-=(e[n].y-e[t].y)*(e[i].x-e[n].x))<0?r|=1:o>0&&(r|=2),3===r)return!1;return 0!==r||null},i.hull=function(e){var t,n,i=[],r=[];for((e=e.slice(0)).sort((function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y})),n=0;n<e.length;n+=1){for(t=e[n];r.length>=2&&o.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(n=e.length-1;n>=0;n-=1){for(t=e[n];i.length>=2&&o.cross3(i[i.length-2],i[i.length-1],t)<=0;)i.pop();i.push(t)}return i.pop(),r.pop(),i.concat(r)}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.on=function(e,t,n){for(var i,o=t.split(" "),r=0;r<o.length;r++)i=o[r],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},i.off=function(e,t,n){if(t){"function"==typeof t&&(n=t,t=o.keys(e.events).join(" "));for(var i=t.split(" "),r=0;r<i.length;r++){var s=e.events[i[r]],a=[];if(n&&s)for(var l=0;l<s.length;l++)s[l]!==n&&a.push(s[l]);e.events[i[r]]=a}}else e.events={}},i.trigger=function(e,t,n){var i,r,s,a,l=e.events;if(l&&o.keys(l).length>0){n||(n={}),i=t.split(" ");for(var c=0;c<i.length;c++)if(s=l[r=i[c]]){(a=o.clone(n,!1)).name=r,a.source=e;for(var d=0;d<s.length;d++)s[d].apply(e,[a])}}}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(0),s=n(1),a=n(6);i.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},e)},i.setModified=function(e,t,n,o){if(e.isModified=t,n&&e.parent&&i.setModified(e.parent,t,n,o),o)for(var r=0;r<e.composites.length;r++){var s=e.composites[r];i.setModified(s,t,n,o)}},i.add=function(e,t){var n=[].concat(t);o.trigger(e,"beforeAdd",{object:t});for(var s=0;s<n.length;s++){var a=n[s];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(e,a);break;case"constraint":i.addConstraint(e,a);break;case"composite":i.addComposite(e,a);break;case"mouseConstraint":i.addConstraint(e,a.constraint)}}return o.trigger(e,"afterAdd",{object:t}),e},i.remove=function(e,t,n){var r=[].concat(t);o.trigger(e,"beforeRemove",{object:t});for(var s=0;s<r.length;s++){var a=r[s];switch(a.type){case"body":i.removeBody(e,a,n);break;case"constraint":i.removeConstraint(e,a,n);break;case"composite":i.removeComposite(e,a,n);break;case"mouseConstraint":i.removeConstraint(e,a.constraint)}}return o.trigger(e,"afterRemove",{object:t}),e},i.addComposite=function(e,t){return e.composites.push(t),t.parent=e,i.setModified(e,!0,!0,!1),e},i.removeComposite=function(e,t,n){var o=r.indexOf(e.composites,t);if(-1!==o&&(i.removeCompositeAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)i.removeComposite(e.composites[s],t,!0);return e},i.removeCompositeAt=function(e,t){return e.composites.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addBody=function(e,t){return e.bodies.push(t),i.setModified(e,!0,!0,!1),e},i.removeBody=function(e,t,n){var o=r.indexOf(e.bodies,t);if(-1!==o&&(i.removeBodyAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)i.removeBody(e.composites[s],t,!0);return e},i.removeBodyAt=function(e,t){return e.bodies.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addConstraint=function(e,t){return e.constraints.push(t),i.setModified(e,!0,!0,!1),e},i.removeConstraint=function(e,t,n){var o=r.indexOf(e.constraints,t);if(-1!==o&&i.removeConstraintAt(e,o),n)for(var s=0;s<e.composites.length;s++)i.removeConstraint(e.composites[s],t,!0);return e},i.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),i.setModified(e,!0,!0,!1),e},i.clear=function(e,t,n){if(n)for(var o=0;o<e.composites.length;o++)i.clear(e.composites[o],t,!0);return t?e.bodies=e.bodies.filter((function(e){return e.isStatic})):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,i.setModified(e,!0,!0,!1),e},i.allBodies=function(e){for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(i.allBodies(e.composites[n]));return t},i.allConstraints=function(e){for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(i.allConstraints(e.composites[n]));return t},i.allComposites=function(e){for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(i.allComposites(e.composites[n]));return t},i.get=function(e,t,n){var o,r;switch(n){case"body":o=i.allBodies(e);break;case"constraint":o=i.allConstraints(e);break;case"composite":o=i.allComposites(e).concat(e)}return o?0===(r=o.filter((function(e){return e.id.toString()===t.toString()}))).length?null:r[0]:null},i.move=function(e,t,n){return i.remove(e,t),i.add(n,t),e},i.rebase=function(e){for(var t=i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return i.setModified(e,!0,!0,!1),e},i.translate=function(e,t,n){for(var o=n?i.allBodies(e):e.bodies,r=0;r<o.length;r++)a.translate(o[r],t);return i.setModified(e,!0,!0,!1),e},i.rotate=function(e,t,n,o){for(var r=Math.cos(t),s=Math.sin(t),l=o?i.allBodies(e):e.bodies,c=0;c<l.length;c++){var d=l[c],u=d.position.x-n.x,p=d.position.y-n.y;a.setPosition(d,{x:n.x+(u*r-p*s),y:n.y+(u*s+p*r)}),a.rotate(d,t)}return i.setModified(e,!0,!0,!1),e},i.scale=function(e,t,n,o,r){for(var s=r?i.allBodies(e):e.bodies,l=0;l<s.length;l++){var c=s[l],d=c.position.x-o.x,u=c.position.y-o.y;a.setPosition(c,{x:o.x+d*t,y:o.y+u*n}),a.scale(c,t,n)}return i.setModified(e,!0,!0,!1),e},i.bounds=function(e){for(var t=i.allBodies(e),n=[],o=0;o<t.length;o+=1){var r=t[o];n.push(r.bounds.min,r.bounds.max)}return s.create(n)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(7),a=(n(10),n(0)),l=n(1),c=n(15);!function(){i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i.create=function(t){var n={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},i=a.extend(n,t);return e(i,t),i},i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var e=function(e,t){t=t||{},i.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),o.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),s=e.isStatic?"#555":"#ccc",d=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||s,e.render.lineWidth=e.render.lineWidth||d,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};i.set=function(e,t,n){var o;for(o in"string"==typeof t&&(o=t,(t={})[o]=n),t)if(Object.prototype.hasOwnProperty.call(t,o))switch(n=t[o],o){case"isStatic":i.setStatic(e,n);break;case"isSleeping":s.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[o]=n}},i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var i=e.parts[n];i.isStatic=t,t?(i._original={restitution:i.restitution,friction:i.friction,mass:i.mass,inertia:i.inertia,density:i.density,inverseMass:i.inverseMass,inverseInertia:i.inverseInertia},i.restitution=0,i.friction=1,i.mass=i.inertia=i.density=1/0,i.inverseMass=i.inverseInertia=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.angularVelocity=0,i.speed=0,i.angularSpeed=0,i.motion=0):i._original&&(i.restitution=i._original.restitution,i.friction=i._original.friction,i.mass=i._original.mass,i.inertia=i._original.inertia,i.density=i._original.density,i.inverseMass=i._original.inverseMass,i.inverseInertia=i._original.inverseInertia,i._original=null)}},i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=o.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=o.area(e.vertices),i.setMass(e,e.density*e.area);var n=o.centre(e.vertices);o.translate(e.vertices,n,-1),i.setInertia(e,i._inertiaScale*o.inertia(e.vertices,e.mass)),o.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},i.setParts=function(e,t,n){var r;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var s=t[r];s!==e&&(s.parent=e,e.parts.push(s))}if(1!==e.parts.length){if(n=void 0===n||n){var a=[];for(r=0;r<t.length;r++)a=a.concat(t[r].vertices);o.clockwiseSort(a);var l=o.hull(a),c=o.centre(l);i.setVertices(e,l),o.translate(e.vertices,c)}var d=i._totalProperties(e);e.area=d.area,e.parent=e,e.position.x=d.centre.x,e.position.y=d.centre.y,e.positionPrev.x=d.centre.x,e.positionPrev.y=d.centre.y,i.setMass(e,d.mass),i.setInertia(e,d.inertia),i.setPosition(e,d.centre)}},i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},i.setPosition=function(e,t){var n=r.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.position.x+=n.x,s.position.y+=n.y,o.translate(s.vertices,n),l.update(s.bounds,s.vertices,e.velocity)}},i.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.angle+=n,o.rotate(s.vertices,n,e.position),c.rotate(s.axes,n),l.update(s.bounds,s.vertices,e.velocity),i>0&&r.rotateAbout(s.position,n,e.position,s.position)}},i.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=r.magnitude(e.velocity)},i.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},i.translate=function(e,t){i.setPosition(e,r.add(e.position,t))},i.rotate=function(e,t,n){if(n){var o=Math.cos(t),r=Math.sin(t),s=e.position.x-n.x,a=e.position.y-n.y;i.setPosition(e,{x:n.x+(s*o-a*r),y:n.y+(s*r+a*o)}),i.setAngle(e,e.angle+t)}else i.setAngle(e,e.angle+t)},i.scale=function(e,t,n,r){var s=0,a=0;r=r||e.position;for(var d=0;d<e.parts.length;d++){var u=e.parts[d];o.scale(u.vertices,t,n,r),u.axes=c.fromVertices(u.vertices),u.area=o.area(u.vertices),i.setMass(u,e.density*u.area),o.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),i.setInertia(u,i._inertiaScale*o.inertia(u.vertices,u.mass)),o.translate(u.vertices,{x:u.position.x,y:u.position.y}),d>0&&(s+=u.area,a+=u.inertia),u.position.x=r.x+(u.position.x-r.x)*t,u.position.y=r.y+(u.position.y-r.y)*n,l.update(u.bounds,u.vertices,e.velocity)}e.parts.length>1&&(e.area=s,e.isStatic||(i.setMass(e,e.density*s),i.setInertia(e,a))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},i.update=function(e,t,n,i){var s=Math.pow(t*n*e.timeScale,2),a=1-e.frictionAir*n*e.timeScale,d=e.position.x-e.positionPrev.x,u=e.position.y-e.positionPrev.y;e.velocity.x=d*a*i+e.force.x/e.mass*s,e.velocity.y=u*a*i+e.force.y/e.mass*s,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*a*i+e.torque/e.inertia*s,e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=r.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var p=0;p<e.parts.length;p++){var f=e.parts[p];o.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},i.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var i=t.x-e.position.x,o=t.y-e.position.y;e.torque+=i*n.y-o*n.x},i._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var i=e.parts[n],o=i.mass!==1/0?i.mass:1;t.mass+=o,t.area+=i.area,t.inertia+=i.inertia,t.centre=r.add(t.centre,r.mult(i.position,o))}return t.centre=r.div(t.centre,t.mass),t}}()},function(e,t,n){var i={};e.exports=i;var o=n(4);i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o],s=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var a=Math.min(r.motion,s),l=Math.max(r.motion,s);r.motion=i._minBias*a+(1-i._minBias)*l,r.sleepThreshold>0&&r.motion<i._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&i.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else i.set(r,!1)}},i.afterCollisions=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o];if(r.isActive){var s=r.collision,a=s.bodyA.parent,l=s.bodyB.parent;if(!(a.isSleeping&&l.isSleeping||a.isStatic||l.isStatic)&&(a.isSleeping||l.isSleeping)){var c=a.isSleeping&&!a.isStatic?a:l,d=c===a?l:a;!c.isStatic&&d.motion>i._motionWakeThreshold*n&&i.set(c,!1)}}}},i.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||o.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&o.trigger(e,"sleepEnd"))}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(7),a=n(1),l=n(15),c=n(0);i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?r.add(t.bodyA.position,t.pointA):t.pointA,i=t.bodyB?r.add(t.bodyB.position,t.pointB):t.pointB,o=r.magnitude(r.sub(n,i));t.length=void 0!==t.length?t.length:o,t.id=t.id||c.nextId(),t.label=t.label||"Constraint",t.type="constraint",t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var s={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===t.length&&t.stiffness>.1?(s.type="pin",s.anchors=!1):t.stiffness<.9&&(s.type="spring"),t.render=c.extend(s,t.render),t},i.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],i=n.constraintImpulse;n.isStatic||0===i.x&&0===i.y&&0===i.angle||(n.position.x+=i.x,n.position.y+=i.y,n.angle+=i.angle)}},i.solveAll=function(e,t){for(var n=0;n<e.length;n+=1){var o=e[n],r=!o.bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic;(r||s)&&i.solve(e[n],t)}for(n=0;n<e.length;n+=1)r=!(o=e[n]).bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic,r||s||i.solve(e[n],t)},i.solve=function(e,t){var n=e.bodyA,o=e.bodyB,s=e.pointA,a=e.pointB;if(n||o){n&&!n.isStatic&&(r.rotate(s,n.angle-e.angleA,s),e.angleA=n.angle),o&&!o.isStatic&&(r.rotate(a,o.angle-e.angleB,a),e.angleB=o.angle);var l=s,c=a;if(n&&(l=r.add(n.position,s)),o&&(c=r.add(o.position,a)),l&&c){var d=r.sub(l,c),u=r.magnitude(d);u<i._minLength&&(u=i._minLength);var p,f,v,m,y,g=(u-e.length)/u,x=e.stiffness<1?e.stiffness*t:e.stiffness,h=r.mult(d,g*x),b=(n?n.inverseMass:0)+(o?o.inverseMass:0),w=b+((n?n.inverseInertia:0)+(o?o.inverseInertia:0));if(e.damping){var S=r.create();v=r.div(d,u),y=r.sub(o&&r.sub(o.position,o.positionPrev)||S,n&&r.sub(n.position,n.positionPrev)||S),m=r.dot(v,y)}n&&!n.isStatic&&(f=n.inverseMass/b,n.constraintImpulse.x-=h.x*f,n.constraintImpulse.y-=h.y*f,n.position.x-=h.x*f,n.position.y-=h.y*f,e.damping&&(n.positionPrev.x-=e.damping*v.x*m*f,n.positionPrev.y-=e.damping*v.y*m*f),p=r.cross(s,h)/w*i._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),o&&!o.isStatic&&(f=o.inverseMass/b,o.constraintImpulse.x+=h.x*f,o.constraintImpulse.y+=h.y*f,o.position.x+=h.x*f,o.position.y+=h.y*f,e.damping&&(o.positionPrev.x+=e.damping*v.x*m*f,o.positionPrev.y+=e.damping*v.y*m*f),p=r.cross(a,h)/w*i._torqueDampen*o.inverseInertia*(1-e.angularStiffness),o.constraintImpulse.angle+=p,o.angle+=p)}}},i.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],c=n.constraintImpulse;if(!(n.isStatic||0===c.x&&0===c.y&&0===c.angle)){s.set(n,!1);for(var d=0;d<n.parts.length;d++){var u=n.parts[d];o.translate(u.vertices,c),d>0&&(u.position.x+=c.x,u.position.y+=c.y),0!==c.angle&&(o.rotate(u.vertices,c.angle,n.position),l.rotate(u.axes,c.angle),d>0&&r.rotateAbout(u.position,c.angle,n.position,u.position)),a.update(u.bounds,u.vertices,n.velocity)}c.angle*=i._warming,c.x*=i._warming,c.y*=i._warming}}},i.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+e.pointA.x,y:(e.bodyA?e.bodyA.position.y:0)+e.pointA.y}},i.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+e.pointB.x,y:(e.bodyB?e.bodyB.position.y:0)+e.pointB.y}}},function(e,t,n){var i={};e.exports=i;var o=n(18);i.create=function(e,t){var n=e.bodyA,o=e.bodyB,r=e.parentA,s=e.parentB,a={id:i.id(n,o),bodyA:n,bodyB:o,contacts:{},activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||o.isSensor,timeCreated:t,timeUpdated:t,inverseMass:r.inverseMass+s.inverseMass,friction:Math.min(r.friction,s.friction),frictionStatic:Math.max(r.frictionStatic,s.frictionStatic),restitution:Math.max(r.restitution,s.restitution),slop:Math.max(r.slop,s.slop)};return i.update(a,e,t),a},i.update=function(e,t,n){var r=e.contacts,s=t.supports,a=e.activeContacts,l=t.parentA,c=t.parentB;if(e.collision=t,e.inverseMass=l.inverseMass+c.inverseMass,e.friction=Math.min(l.friction,c.friction),e.frictionStatic=Math.max(l.frictionStatic,c.frictionStatic),e.restitution=Math.max(l.restitution,c.restitution),e.slop=Math.max(l.slop,c.slop),a.length=0,t.collided){for(var d=0;d<s.length;d++){var u=s[d],p=o.id(u),f=r[p];f?a.push(f):a.push(r[p]=o.create(u))}e.separation=t.depth,i.setActive(e,!0,n)}else!0===e.isActive&&i.setActive(e,!1,n)},i.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},i.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id}},function(e,t,n){var i={};e.exports=i;var o=n(0),r=n(5),s=n(1),a=n(4),l=n(11),c=n(2),d=n(14);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(o.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i.create=function(e){var t={controller:i,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},r=o.extend(t,e);return r.canvas&&(r.canvas.width=r.options.width||r.canvas.width,r.canvas.height=r.options.height||r.canvas.height),r.mouse=e.mouse,r.engine=e.engine,r.canvas=r.canvas||n(r.options.width,r.options.height),r.context=r.canvas.getContext("2d"),r.textures={},r.bounds=r.bounds||{min:{x:0,y:0},max:{x:r.canvas.width,y:r.canvas.height}},1!==r.options.pixelRatio&&i.setPixelRatio(r,r.options.pixelRatio),o.isElement(r.element)?r.element.appendChild(r.canvas):r.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),r},i.run=function(t){!function n(o){t.frameRequestId=e(n),i.world(t)}()},i.stop=function(e){t(e.frameRequestId)},i.setPixelRatio=function(e,t){var n=e.options,i=e.canvas;"auto"===t&&(t=u(i)),n.pixelRatio=t,i.setAttribute("data-pixel-ratio",t),i.width=n.width*t,i.height=n.height*t,i.style.width=n.width+"px",i.style.height=n.height+"px"},i.lookAt=function(e,t,n,i){i=void 0===i||i,t=o.isArray(t)?t:[t],n=n||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},s=0;s<t.length;s+=1){var a=t[s],l=a.bounds?a.bounds.min:a.min||a.position||a,c=a.bounds?a.bounds.max:a.max||a.position||a;l&&c&&(l.x<r.min.x&&(r.min.x=l.x),c.x>r.max.x&&(r.max.x=c.x),l.y<r.min.y&&(r.min.y=l.y),c.y>r.max.y&&(r.max.y=c.y))}var u=r.max.x-r.min.x+2*n.x,p=r.max.y-r.min.y+2*n.y,f=e.canvas.height,v=e.canvas.width/f,m=u/p,y=1,g=1;m>v?g=m/v:y=v/m,e.options.hasBounds=!0,e.bounds.min.x=r.min.x,e.bounds.max.x=r.min.x+u*y,e.bounds.min.y=r.min.y,e.bounds.max.y=r.min.y+p*g,i&&(e.bounds.min.x+=.5*u-u*y*.5,e.bounds.max.x+=.5*u-u*y*.5,e.bounds.min.y+=.5*p-p*g*.5,e.bounds.max.y+=.5*p-p*g*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),d.setOffset(e.mouse,e.bounds.min))},i.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,i=t/e.options.width,o=n/e.options.height;e.context.setTransform(e.options.pixelRatio/i,0,0,e.options.pixelRatio/o,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},i.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},i.world=function(e){var t,n=e.engine,o=n.world,u=e.canvas,p=e.context,v=e.options,m=r.allBodies(o),y=r.allConstraints(o),g=v.wireframes?v.wireframeBackground:v.background,x=[],h=[],b={timestamp:n.timing.timestamp};if(a.trigger(e,"beforeRender",b),e.currentBackground!==g&&f(e,g),p.globalCompositeOperation="source-in",p.fillStyle="transparent",p.fillRect(0,0,u.width,u.height),p.globalCompositeOperation="source-over",v.hasBounds){for(t=0;t<m.length;t++){var w=m[t];s.overlaps(w.bounds,e.bounds)&&x.push(w)}for(t=0;t<y.length;t++){var S=y[t],A=S.bodyA,P=S.bodyB,C=S.pointA,M=S.pointB;A&&(C=c.add(A.position,S.pointA)),P&&(M=c.add(P.position,S.pointB)),C&&M&&((s.contains(e.bounds,C)||s.contains(e.bounds,M))&&h.push(S))}i.startViewTransform(e),e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),d.setOffset(e.mouse,e.bounds.min))}else h=y,x=m,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!v.wireframes||n.enableSleeping&&v.showSleeping?i.bodies(e,x,p):(v.showConvexHulls&&i.bodyConvexHulls(e,x,p),i.bodyWireframes(e,x,p)),v.showBounds&&i.bodyBounds(e,x,p),(v.showAxes||v.showAngleIndicator)&&i.bodyAxes(e,x,p),v.showPositions&&i.bodyPositions(e,x,p),v.showVelocity&&i.bodyVelocity(e,x,p),v.showIds&&i.bodyIds(e,x,p),v.showSeparations&&i.separations(e,n.pairs.list,p),v.showCollisions&&i.collisions(e,n.pairs.list,p),v.showVertexNumbers&&i.vertexNumbers(e,x,p),v.showMousePosition&&i.mousePosition(e,e.mouse,p),i.constraints(h,p),v.showBroadphase&&n.broadphase.controller===l&&i.grid(e,n.broadphase,p),v.showDebug&&i.debug(e,p),v.hasBounds&&i.endViewTransform(e),a.trigger(e,"afterRender",b)},i.debug=function(e,t){var n=t,i=e.engine,o=i.world,s=i.metrics,a=e.options,c=r.allBodies(o);if(i.timing.timestamp-(e.debugTimestamp||0)>=500){var d="";s.timing&&(d+="fps: "+Math.round(s.timing.fps)+"    "),s.extended&&(s.timing&&(d+="delta: "+s.timing.delta.toFixed(3)+"    ",d+="correction: "+s.timing.correction.toFixed(3)+"    "),d+="bodies: "+c.length+"    ",i.broadphase.controller===l&&(d+="buckets: "+s.buckets+"    "),d+="\n",d+="collisions: "+s.collisions+"    ",d+="pairs: "+i.pairs.list.length+"    ",d+="broad: "+s.broadEff+"    ",d+="mid: "+s.midEff+"    ",d+="narrow: "+s.narrowEff+"    "),e.debugString=d,e.debugTimestamp=i.timing.timestamp}if(e.debugString){n.font="12px Arial",a.wireframes?n.fillStyle="rgba(255,255,255,0.5)":n.fillStyle="rgba(0,0,0,0.5)";for(var u=e.debugString.split("\n"),p=0;p<u.length;p++)n.fillText(u[p],50,50+18*p)}},i.constraints=function(e,t){for(var n=t,i=0;i<e.length;i++){var r=e[i];if(r.render.visible&&r.pointA&&r.pointB){var s,a,l=r.bodyA,d=r.bodyB;if(s=l?c.add(l.position,r.pointA):r.pointA,"pin"===r.render.type)n.beginPath(),n.arc(s.x,s.y,3,0,2*Math.PI),n.closePath();else{if(a=d?c.add(d.position,r.pointB):r.pointB,n.beginPath(),n.moveTo(s.x,s.y),"spring"===r.render.type)for(var u,p=c.sub(a,s),f=c.perp(c.normalise(p)),v=Math.ceil(o.clamp(r.length/5,12,20)),m=1;m<v;m+=1)u=m%2==0?1:-1,n.lineTo(s.x+p.x*(m/v)+f.x*u*4,s.y+p.y*(m/v)+f.y*u*4);n.lineTo(a.x,a.y)}r.render.lineWidth&&(n.lineWidth=r.render.lineWidth,n.strokeStyle=r.render.strokeStyle,n.stroke()),r.render.anchors&&(n.fillStyle=r.render.strokeStyle,n.beginPath(),n.arc(s.x,s.y,3,0,2*Math.PI),n.arc(a.x,a.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},i.bodyShadows=function(e,t,n){for(var i=n,o=(e.engine,0);o<t.length;o++){var r=t[o];if(r.render.visible){if(r.circleRadius)i.beginPath(),i.arc(r.position.x,r.position.y,r.circleRadius,0,2*Math.PI),i.closePath();else{i.beginPath(),i.moveTo(r.vertices[0].x,r.vertices[0].y);for(var s=1;s<r.vertices.length;s++)i.lineTo(r.vertices[s].x,r.vertices[s].y);i.closePath()}var a=r.position.x-.5*e.options.width,l=r.position.y-.2*e.options.height,c=Math.abs(a)+Math.abs(l);i.shadowColor="rgba(0,0,0,0.15)",i.shadowOffsetX=.05*a,i.shadowOffsetY=.05*l,i.shadowBlur=1+12*Math.min(1,c/1e3),i.fill(),i.shadowColor=null,i.shadowOffsetX=null,i.shadowOffsetY=null,i.shadowBlur=null}}},i.bodies=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=i.parts.length>1?1:0;s<i.parts.length;s++)if((o=i.parts[s]).render.visible){if(l.showSleeping&&i.isSleeping?a.globalAlpha=.5*o.render.opacity:1!==o.render.opacity&&(a.globalAlpha=o.render.opacity),o.render.sprite&&o.render.sprite.texture&&!l.wireframes){var d=o.render.sprite,u=p(e,d.texture);a.translate(o.position.x,o.position.y),a.rotate(o.angle),a.drawImage(u,u.width*-d.xOffset*d.xScale,u.height*-d.yOffset*d.yScale,u.width*d.xScale,u.height*d.yScale),a.rotate(-o.angle),a.translate(-o.position.x,-o.position.y)}else{if(o.circleRadius)a.beginPath(),a.arc(o.position.x,o.position.y,o.circleRadius,0,2*Math.PI);else{a.beginPath(),a.moveTo(o.vertices[0].x,o.vertices[0].y);for(var f=1;f<o.vertices.length;f++)!o.vertices[f-1].isInternal||c?a.lineTo(o.vertices[f].x,o.vertices[f].y):a.moveTo(o.vertices[f].x,o.vertices[f].y),o.vertices[f].isInternal&&!c&&a.moveTo(o.vertices[(f+1)%o.vertices.length].x,o.vertices[(f+1)%o.vertices.length].y);a.lineTo(o.vertices[0].x,o.vertices[0].y),a.closePath()}l.wireframes?(a.lineWidth=1,a.strokeStyle="#bbb",a.stroke()):(a.fillStyle=o.render.fillStyle,o.render.lineWidth&&(a.lineWidth=o.render.lineWidth,a.strokeStyle=o.render.strokeStyle,a.stroke()),a.fill())}a.globalAlpha=1}},i.bodyWireframes=function(e,t,n){var i,o,r,s,a,l=n,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=i.parts.length>1?1:0;a<i.parts.length;a++){for(o=i.parts[a],l.moveTo(o.vertices[0].x,o.vertices[0].y),s=1;s<o.vertices.length;s++)!o.vertices[s-1].isInternal||c?l.lineTo(o.vertices[s].x,o.vertices[s].y):l.moveTo(o.vertices[s].x,o.vertices[s].y),o.vertices[s].isInternal&&!c&&l.moveTo(o.vertices[(s+1)%o.vertices.length].x,o.vertices[(s+1)%o.vertices.length].y);l.lineTo(o.vertices[0].x,o.vertices[0].y)}l.lineWidth=1,l.strokeStyle="#bbb",l.stroke()},i.bodyConvexHulls=function(e,t,n){var i,o,r,s=n;for(s.beginPath(),o=0;o<t.length;o++)if((i=t[o]).render.visible&&1!==i.parts.length){for(s.moveTo(i.vertices[0].x,i.vertices[0].y),r=1;r<i.vertices.length;r++)s.lineTo(i.vertices[r].x,i.vertices[r].y);s.lineTo(i.vertices[0].x,i.vertices[0].y)}s.lineWidth=1,s.strokeStyle="rgba(255,255,255,0.2)",s.stroke()},i.vertexNumbers=function(e,t,n){var i,o,r,s=n;for(i=0;i<t.length;i++){var a=t[i].parts;for(r=a.length>1?1:0;r<a.length;r++){var l=a[r];for(o=0;o<l.vertices.length;o++)s.fillStyle="rgba(255,255,255,0.2)",s.fillText(i+"_"+o,l.position.x+.8*(l.vertices[o].x-l.position.x),l.position.y+.8*(l.vertices[o].y-l.position.y))}}},i.mousePosition=function(e,t,n){var i=n;i.fillStyle="rgba(255,255,255,0.8)",i.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},i.bodyBounds=function(e,t,n){var i=n,o=(e.engine,e.options);i.beginPath();for(var r=0;r<t.length;r++){if(t[r].render.visible)for(var s=t[r].parts,a=s.length>1?1:0;a<s.length;a++){var l=s[a];i.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}}o.wireframes?i.strokeStyle="rgba(255,255,255,0.08)":i.strokeStyle="rgba(0,0,0,0.1)",i.lineWidth=1,i.stroke()},i.bodyAxes=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),o=0;o<t.length;o++){var c=t[o],d=c.parts;if(c.render.visible)if(l.showAxes)for(r=d.length>1?1:0;r<d.length;r++)for(i=d[r],s=0;s<i.axes.length;s++){var u=i.axes[s];a.moveTo(i.position.x,i.position.y),a.lineTo(i.position.x+20*u.x,i.position.y+20*u.y)}else for(r=d.length>1?1:0;r<d.length;r++)for(i=d[r],s=0;s<i.axes.length;s++)a.moveTo(i.position.x,i.position.y),a.lineTo((i.vertices[0].x+i.vertices[i.vertices.length-1].x)/2,(i.vertices[0].y+i.vertices[i.vertices.length-1].y)/2)}l.wireframes?(a.strokeStyle="indianred",a.lineWidth=1):(a.strokeStyle="rgba(255, 255, 255, 0.4)",a.globalCompositeOperation="overlay",a.lineWidth=2),a.stroke(),a.globalCompositeOperation="source-over"},i.bodyPositions=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=0;s<i.parts.length;s++)o=i.parts[s],a.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),a.closePath();for(l.wireframes?a.fillStyle="indianred":a.fillStyle="rgba(0,0,0,0.5)",a.fill(),a.beginPath(),r=0;r<t.length;r++)(i=t[r]).render.visible&&(a.arc(i.positionPrev.x,i.positionPrev.y,2,0,2*Math.PI,!1),a.closePath());a.fillStyle="rgba(255,165,0,0.8)",a.fill()},i.bodyVelocity=function(e,t,n){var i=n;i.beginPath();for(var o=0;o<t.length;o++){var r=t[o];r.render.visible&&(i.moveTo(r.position.x,r.position.y),i.lineTo(r.position.x+2*(r.position.x-r.positionPrev.x),r.position.y+2*(r.position.y-r.positionPrev.y)))}i.lineWidth=3,i.strokeStyle="cornflowerblue",i.stroke()},i.bodyIds=function(e,t,n){var i,o,r=n;for(i=0;i<t.length;i++)if(t[i].render.visible){var s=t[i].parts;for(o=s.length>1?1:0;o<s.length;o++){var a=s[o];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(a.id,a.position.x+10,a.position.y-10)}}},i.collisions=function(e,t,n){var i,o,r,s,a=n,l=e.options;for(a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive)for(o=i.collision,s=0;s<i.activeContacts.length;s++){var c=i.activeContacts[s].vertex;a.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?a.fillStyle="rgba(255,255,255,0.7)":a.fillStyle="orange",a.fill(),a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive&&(o=i.collision,i.activeContacts.length>0)){var d=i.activeContacts[0].vertex.x,u=i.activeContacts[0].vertex.y;2===i.activeContacts.length&&(d=(i.activeContacts[0].vertex.x+i.activeContacts[1].vertex.x)/2,u=(i.activeContacts[0].vertex.y+i.activeContacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||!0===o.bodyA.isStatic?a.moveTo(d-8*o.normal.x,u-8*o.normal.y):a.moveTo(d+8*o.normal.x,u+8*o.normal.y),a.lineTo(d,u)}l.wireframes?a.strokeStyle="rgba(255,165,0,0.7)":a.strokeStyle="orange",a.lineWidth=1,a.stroke()},i.separations=function(e,t,n){var i,o,r,s,a,l=n,c=e.options;for(l.beginPath(),a=0;a<t.length;a++)if((i=t[a]).isActive){r=(o=i.collision).bodyA;var d=1;(s=o.bodyB).isStatic||r.isStatic||(d=.5),s.isStatic&&(d=0),l.moveTo(s.position.x,s.position.y),l.lineTo(s.position.x-o.penetration.x*d,s.position.y-o.penetration.y*d),d=1,s.isStatic||r.isStatic||(d=.5),r.isStatic&&(d=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+o.penetration.x*d,r.position.y+o.penetration.y*d)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},i.grid=function(e,t,n){var i=n;e.options.wireframes?i.strokeStyle="rgba(255,180,0,0.1)":i.strokeStyle="rgba(255,180,0,0.5)",i.beginPath();for(var r=o.keys(t.buckets),s=0;s<r.length;s++){var a=r[s];if(!(t.buckets[a].length<2)){var l=a.split(/C|R/);i.rect(.5+parseInt(l[1],10)*t.bucketWidth,.5+parseInt(l[2],10)*t.bucketHeight,t.bucketWidth,t.bucketHeight)}}i.lineWidth=1,i.stroke()},i.inspector=function(e,t){e.engine;var n,i=e.selected,o=e.render,r=o.options;if(r.hasBounds){var s=o.bounds.max.x-o.bounds.min.x,a=o.bounds.max.y-o.bounds.min.y,l=s/o.options.width,c=a/o.options.height;t.scale(1/l,1/c),t.translate(-o.bounds.min.x,-o.bounds.min.y)}for(var d=0;d<i.length;d++){var u=i[d].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),u.type){case"body":n=u.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var p=u.pointA;u.bodyA&&(p=u.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},u=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},p=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t,n)},f=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(12),s=n(0);i.create=function(e){var t={controller:i,detector:r.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(t,e)},i.update=function(e,t,n,o){var r,s,a,l,c,d=n.world,u=e.buckets,p=!1,f=n.metrics;for(f.broadphaseTests=0,r=0;r<t.length;r++){var v=t[r];if((!v.isSleeping||o)&&!(v.bounds.max.x<d.bounds.min.x||v.bounds.min.x>d.bounds.max.x||v.bounds.max.y<d.bounds.min.y||v.bounds.min.y>d.bounds.max.y)){var m=i._getRegion(e,v);if(!v.region||m.id!==v.region.id||o){f.broadphaseTests+=1,v.region&&!o||(v.region=m);var y=i._regionUnion(m,v.region);for(s=y.startCol;s<=y.endCol;s++)for(a=y.startRow;a<=y.endRow;a++){l=u[c=i._getBucketId(s,a)];var g=s>=m.startCol&&s<=m.endCol&&a>=m.startRow&&a<=m.endRow,x=s>=v.region.startCol&&s<=v.region.endCol&&a>=v.region.startRow&&a<=v.region.endRow;!g&&x&&x&&l&&i._bucketRemoveBody(e,l,v),(v.region===m||g&&!x||o)&&(l||(l=i._createBucket(u,c)),i._bucketAddBody(e,l,v))}v.region=m,p=!0}}}p&&(e.pairsList=i._createActivePairsList(e))},i.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},i._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),o=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),s=Math.max(e.endRow,t.endRow);return i._createRegion(n,o,r,s)},i._getRegion=function(e,t){var n=t.bounds,o=Math.floor(n.min.x/e.bucketWidth),r=Math.floor(n.max.x/e.bucketWidth),s=Math.floor(n.min.y/e.bucketHeight),a=Math.floor(n.max.y/e.bucketHeight);return i._createRegion(o,r,s,a)},i._createRegion=function(e,t,n,i){return{id:e+","+t+","+n+","+i,startCol:e,endCol:t,startRow:n,endRow:i}},i._getBucketId=function(e,t){return"C"+e+"R"+t},i._createBucket=function(e,t){return e[t]=[]},i._bucketAddBody=function(e,t,n){for(var i=0;i<t.length;i++){var r=t[i];if(!(n.id===r.id||n.isStatic&&r.isStatic)){var s=o.id(n,r),a=e.pairs[s];a?a[2]+=1:e.pairs[s]=[n,r,1]}}t.push(n)},i._bucketRemoveBody=function(e,t,n){t.splice(s.indexOf(t,n),1);for(var i=0;i<t.length;i++){var r=t[i],a=o.id(n,r),l=e.pairs[a];l&&(l[2]-=1)}},i._createActivePairsList=function(e){var t,n,i=[];t=s.keys(e.pairs);for(var o=0;o<t.length;o++)(n=e.pairs[t[o]])[2]>0?i.push(n):delete e.pairs[t[o]];return i}},function(e,t,n){var i={};e.exports=i;var o=n(13),r=n(9),s=n(1);i.collisions=function(e,t){for(var n=[],a=t.pairs.table,l=t.metrics,c=0;c<e.length;c++){var d=e[c][0],u=e[c][1];if((!d.isStatic&&!d.isSleeping||!u.isStatic&&!u.isSleeping)&&i.canCollide(d.collisionFilter,u.collisionFilter)&&(l.midphaseTests+=1,s.overlaps(d.bounds,u.bounds)))for(var p=d.parts.length>1?1:0;p<d.parts.length;p++)for(var f=d.parts[p],v=u.parts.length>1?1:0;v<u.parts.length;v++){var m=u.parts[v];if(f===d&&m===u||s.overlaps(f.bounds,m.bounds)){var y,g=a[r.id(f,m)];y=g&&g.isActive?g.collision:null;var x=o.collides(f,m,y);l.narrowphaseTests+=1,x.reused&&(l.narrowReuseCount+=1),x.collided&&(n.push(x),l.narrowDetections+=1)}}}return n},i.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!=(e.mask&t.category)&&0!=(t.mask&e.category)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2);i.collides=function(e,t,n){var s,a,l,c,d=!1;if(n){var u=e.parent,p=t.parent,f=u.speed*u.speed+u.angularSpeed*u.angularSpeed+p.speed*p.speed+p.angularSpeed*p.angularSpeed;d=n&&n.collided&&f<.2,c=n}else c={collided:!1,bodyA:e,bodyB:t};if(n&&d){var v=c.axisBody,m=v===e?t:e,y=[v.axes[n.axisNumber]];if(l=i._overlapAxes(v.vertices,m.vertices,y),c.reused=!0,l.overlap<=0)return c.collided=!1,c}else{if((s=i._overlapAxes(e.vertices,t.vertices,e.axes)).overlap<=0)return c.collided=!1,c;if((a=i._overlapAxes(t.vertices,e.vertices,t.axes)).overlap<=0)return c.collided=!1,c;s.overlap<a.overlap?(l=s,c.axisBody=e):(l=a,c.axisBody=t),c.axisNumber=l.axisNumber}c.bodyA=e.id<t.id?e:t,c.bodyB=e.id<t.id?t:e,c.collided=!0,c.depth=l.overlap,c.parentA=c.bodyA.parent,c.parentB=c.bodyB.parent,e=c.bodyA,t=c.bodyB,r.dot(l.axis,r.sub(t.position,e.position))<0?c.normal={x:l.axis.x,y:l.axis.y}:c.normal={x:-l.axis.x,y:-l.axis.y},c.tangent=r.perp(c.normal),c.penetration=c.penetration||{},c.penetration.x=c.normal.x*c.depth,c.penetration.y=c.normal.y*c.depth;var g=i._findSupports(e,t,c.normal),x=[];if(o.contains(e.vertices,g[0])&&x.push(g[0]),o.contains(e.vertices,g[1])&&x.push(g[1]),x.length<2){var h=i._findSupports(t,e,r.neg(c.normal));o.contains(t.vertices,h[0])&&x.push(h[0]),x.length<2&&o.contains(t.vertices,h[1])&&x.push(h[1])}return x.length<1&&(x=[g[0]]),c.supports=x,c},i._overlapAxes=function(e,t,n){for(var o,s,a=r._temp[0],l=r._temp[1],c={overlap:Number.MAX_VALUE},d=0;d<n.length;d++){if(s=n[d],i._projectToAxis(a,e,s),i._projectToAxis(l,t,s),(o=Math.min(a.max-l.min,l.max-a.min))<=0)return c.overlap=o,c;o<c.overlap&&(c.overlap=o,c.axis=s,c.axisNumber=d)}return c},i._projectToAxis=function(e,t,n){for(var i=r.dot(t[0],n),o=i,s=1;s<t.length;s+=1){var a=r.dot(t[s],n);a>o?o=a:a<i&&(i=a)}e.min=i,e.max=o},i._findSupports=function(e,t,n){for(var i,o,s,a,l=Number.MAX_VALUE,c=r._temp[0],d=t.vertices,u=e.position,p=0;p<d.length;p++)o=d[p],c.x=o.x-u.x,c.y=o.y-u.y,(i=-r.dot(n,c))<l&&(l=i,s=o);return o=d[s.index-1>=0?s.index-1:d.length-1],c.x=o.x-u.x,c.y=o.y-u.y,l=-r.dot(n,c),a=o,o=d[(s.index+1)%d.length],c.x=o.x-u.x,c.y=o.y-u.y,(i=-r.dot(n,c))<l&&(a=o),[s,a]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.create=function(e){var t={};return e||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},i.setElement(t,t.element),t},i.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},i.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},i.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i._getRelativeMousePosition=function(e,t,n){var i,o,r=t.getBoundingClientRect(),s=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageXOffset?window.pageXOffset:s.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:s.scrollTop,c=e.changedTouches;return c?(i=c[0].pageX-r.left-a,o=c[0].pageY-r.top-l):(i=e.pageX-r.left-a,o=e.pageY-r.top-l),{x:i/(t.clientWidth/(t.width||t.clientWidth)*n),y:o/(t.clientHeight/(t.height||t.clientHeight)*n)}}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var i=(n+1)%e.length,s=o.normalise({x:e[i].y-e[n].y,y:e[n].x-e[i].x}),a=0===s.y?1/0:s.x/s.y;t[a=a.toFixed(3).toString()]=s}return r.values(t)},i.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),i=Math.sin(t),o=0;o<e.length;o++){var r,s=e[o];r=s.x*n-s.y*i,s.y=s.x*i+s.y*n,s.x=r}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(0),s=n(6),a=n(1),l=n(2);i.rectangle=function(e,t,n,i,a){a=a||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:o.fromPath("L 0 0 L "+n+" 0 L "+n+" "+i+" L 0 "+i)};if(a.chamfer){var c=a.chamfer;l.vertices=o.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return s.create(r.extend({},l,a))},i.trapezoid=function(e,t,n,i,a,l){l=l||{};var c,d=n*(a*=.5),u=d+(1-2*a)*n,p=u+d;c=a<.5?"L 0 0 L "+d+" "+-i+" L "+u+" "+-i+" L "+p+" 0":"L 0 0 L "+u+" "+-i+" L "+p+" 0";var f={label:"Trapezoid Body",position:{x:e,y:t},vertices:o.fromPath(c)};if(l.chamfer){var v=l.chamfer;f.vertices=o.chamfer(f.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete l.chamfer}return s.create(r.extend({},f,l))},i.circle=function(e,t,n,o,s){o=o||{};var a={label:"Circle Body",circleRadius:n};s=s||25;var l=Math.ceil(Math.max(10,Math.min(s,n)));return l%2==1&&(l+=1),i.polygon(e,t,l,n,r.extend({},a,o))},i.polygon=function(e,t,n,a,l){if(l=l||{},n<3)return i.circle(e,t,a,l);for(var c=2*Math.PI/n,d="",u=.5*c,p=0;p<n;p+=1){var f=u+p*c,v=Math.cos(f)*a,m=Math.sin(f)*a;d+="L "+v.toFixed(3)+" "+m.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:e,y:t},vertices:o.fromPath(d)};if(l.chamfer){var g=l.chamfer;y.vertices=o.chamfer(y.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return s.create(r.extend({},y,l))},i.fromVertices=function(e,t,i,c,d,u,p){var f,v,m,y,g,x,h,b,w,S,A="undefined"!=typeof global?global:window;try{f=A.decomp||n(27)}catch(e){}for(c=c||{},m=[],d=void 0!==d&&d,u=void 0!==u?u:.01,p=void 0!==p?p:10,f||r.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),r.isArray(i[0])||(i=[i]),w=0;w<i.length;w+=1)if(g=i[w],(y=o.isConvex(g))||!f)g=y?o.clockwiseSort(g):o.hull(g),m.push({position:{x:e,y:t},vertices:g});else{var P=g.map((function(e){return[e.x,e.y]}));f.makeCCW(P),!1!==u&&f.removeCollinearPoints(P,u);var C=f.quickDecomp(P);for(x=0;x<C.length;x++){var M=C[x].map((function(e){return{x:e[0],y:e[1]}}));p>0&&o.area(M)<p||m.push({position:o.centre(M),vertices:M})}}for(x=0;x<m.length;x++)m[x]=s.create(r.extend(m[x],c));if(d)for(x=0;x<m.length;x++){var k=m[x];for(h=x+1;h<m.length;h++){var B=m[h];if(a.overlaps(k.bounds,B.bounds)){var I=k.vertices,_=B.vertices;for(b=0;b<k.vertices.length;b++)for(S=0;S<B.vertices.length;S++){var T=l.magnitudeSquared(l.sub(I[(b+1)%I.length],_[S])),R=l.magnitudeSquared(l.sub(I[b],_[(S+1)%_.length]));T<5&&R<5&&(I[b].isInternal=!0,_[S].isInternal=!0)}}}}return m.length>1?(v=s.create(r.extend({parts:m.slice(0)},c)),s.setPosition(v,{x:e,y:t}),v):m[0]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i._registry={},i.register=function(e){if(i.isPlugin(e)||o.warn("Plugin.register:",i.toString(e),"does not implement all required fields."),e.name in i._registry){var t=i._registry[e.name],n=i.versionParse(e.version).number,r=i.versionParse(t.version).number;n>r?(o.warn("Plugin.register:",i.toString(t),"was upgraded to",i.toString(e)),i._registry[e.name]=e):n<r?o.warn("Plugin.register:",i.toString(t),"can not be downgraded to",i.toString(e)):e!==t&&o.warn("Plugin.register:",i.toString(e),"is already registered to different plugin object")}else i._registry[e.name]=e;return e},i.resolve=function(e){return i._registry[i.dependencyParse(e).name]},i.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},i.isPlugin=function(e){return e&&e.name&&e.version&&e.install},i.isUsed=function(e,t){return e.used.indexOf(t)>-1},i.isFor=function(e,t){var n=e.for&&i.dependencyParse(e.for);return!e.for||t.name===n.name&&i.versionSatisfies(t.version,n.range)},i.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0!==e.uses.length){for(var n=i.dependencies(e),r=o.topologicalSort(n),s=[],a=0;a<r.length;a+=1)if(r[a]!==e.name){var l=i.resolve(r[a]);l?i.isUsed(e,l.name)||(i.isFor(l,e)||(o.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(e)+"."),l._warned=!0),l.install?l.install(e):(o.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(s.push("🔶 "+i.toString(l)),delete l._warned):s.push("✅ "+i.toString(l)),e.used.push(l.name)):s.push("❌ "+r[a])}s.length>0&&o.info(s.join("  "))}else o.warn("Plugin.use:",i.toString(e),"does not specify any dependencies to install.")},i.dependencies=function(e,t){var n=i.dependencyParse(e),r=n.name;if(!(r in(t=t||{}))){e=i.resolve(e)||e,t[r]=o.map(e.uses||[],(function(t){i.isPlugin(t)&&i.register(t);var r=i.dependencyParse(t),s=i.resolve(t);return s&&!i.versionSatisfies(s.version,r.range)?(o.warn("Plugin.dependencies:",i.toString(s),"does not satisfy",i.toString(r),"used by",i.toString(n)+"."),s._warned=!0,e._warned=!0):s||(o.warn("Plugin.dependencies:",i.toString(t),"used by",i.toString(n),"could not be resolved."),e._warned=!0),r.name}));for(var s=0;s<t[r].length;s+=1)i.dependencies(t[r][s],t);return t}},i.dependencyParse=function(e){return o.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e)||o.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},i.versionParse=function(e){/^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/.test(e)||o.warn("Plugin.versionParse:",e,"is not a valid version or range.");var t=e.split("-");e=t[0];var n=isNaN(Number(e[0])),i=n?e.substr(1):e,r=o.map(i.split("."),(function(e){return Number(e)}));return{isRange:n,version:i,range:e,operator:n?e[0]:"",parts:r,prerelease:t[1],number:1e8*r[0]+1e4*r[1]+r[2]}},i.versionSatisfies=function(e,t){t=t||"*";var n=i.versionParse(t),o=n.parts,r=i.versionParse(e),s=r.parts;if(n.isRange){if("*"===n.operator||"*"===e)return!0;if("~"===n.operator)return s[0]===o[0]&&s[1]===o[1]&&s[2]>=o[2];if("^"===n.operator)return o[0]>0?s[0]===o[0]&&r.number>=n.number:o[1]>0?s[1]===o[1]&&s[2]>=o[2]:s[2]===o[2]}return e===t||"*"===e}},function(e,t){var n={};e.exports=n,n.create=function(e){return{id:n.id(e),vertex:e,normalImpulse:0,tangentImpulse:0}},n.id=function(e){return e.body.id+"_"+e.index}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=(n(8),n(0));i.create=function(e){var t=o.create(),n={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return r.extend(t,n,e)}},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0);i._pairMaxIdleLife=1e3,i.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},i.update=function(e,t,n){var i,r,s,a,l=e.list,c=e.table,d=e.collisionStart,u=e.collisionEnd,p=e.collisionActive;for(d.length=0,u.length=0,p.length=0,a=0;a<l.length;a++)l[a].confirmedActive=!1;for(a=0;a<t.length;a++)(i=t[a]).collided&&((s=c[r=o.id(i.bodyA,i.bodyB)])?(s.isActive?p.push(s):d.push(s),o.update(s,i,n),s.confirmedActive=!0):(s=o.create(i,n),c[r]=s,d.push(s),l.push(s)));for(a=0;a<l.length;a++)(s=l[a]).isActive&&!s.confirmedActive&&(o.setActive(s,!1,n),u.push(s))},i.removeOld=function(e,t){var n,o,r,s,a=e.list,l=e.table,c=[];for(s=0;s<a.length;s++)(o=(n=a[s]).collision).bodyA.isSleeping||o.bodyB.isSleeping?n.timeUpdated=t:t-n.timeUpdated>i._pairMaxIdleLife&&c.push(s);for(s=0;s<c.length;s++)delete l[(n=a[r=c[s]-s]).id],a.splice(r,1)},i.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(0),a=n(1);i._restingThresh=4,i._restingThreshTangent=6,i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i.preSolvePosition=function(e){var t,n,i;for(t=0;t<e.length;t++)(n=e[t]).isActive&&(i=n.activeContacts.length,n.collision.parentA.totalContacts+=i,n.collision.parentB.totalContacts+=i)},i.solvePosition=function(e,t){var n,o,s,a,l,c,d,u,p,f=r._temp[0],v=r._temp[1],m=r._temp[2],y=r._temp[3];for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(s=o.collision).parentA,l=s.parentB,c=s.normal,d=r.sub(r.add(l.positionImpulse,l.position,f),r.add(a.positionImpulse,r.sub(l.position,s.penetration,v),m),y),o.separation=r.dot(c,d));for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(s=o.collision).parentA,l=s.parentB,c=s.normal,p=(o.separation-o.slop)*t,(a.isStatic||l.isStatic)&&(p*=2),a.isStatic||a.isSleeping||(u=i._positionDampen/a.totalContacts,a.positionImpulse.x+=c.x*p*u,a.positionImpulse.y+=c.y*p*u),l.isStatic||l.isSleeping||(u=i._positionDampen/l.totalContacts,l.positionImpulse.x-=c.x*p*u,l.positionImpulse.y-=c.y*p*u))},i.postSolvePosition=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.totalContacts=0,0!==n.positionImpulse.x||0!==n.positionImpulse.y){for(var s=0;s<n.parts.length;s++){var l=n.parts[s];o.translate(l.vertices,n.positionImpulse),a.update(l.bounds,l.vertices,n.velocity),l.position.x+=n.positionImpulse.x,l.position.y+=n.positionImpulse.y}n.positionPrev.x+=n.positionImpulse.x,n.positionPrev.y+=n.positionImpulse.y,r.dot(n.positionImpulse,n.velocity)<0?(n.positionImpulse.x=0,n.positionImpulse.y=0):(n.positionImpulse.x*=i._positionWarming,n.positionImpulse.y*=i._positionWarming)}}},i.preSolveVelocity=function(e){var t,n,i,o,s,a,l,c,d,u,p,f,v,m,y=r._temp[0],g=r._temp[1];for(t=0;t<e.length;t++)if((i=e[t]).isActive&&!i.isSensor)for(o=i.activeContacts,a=(s=i.collision).parentA,l=s.parentB,c=s.normal,d=s.tangent,n=0;n<o.length;n++)p=(u=o[n]).vertex,f=u.normalImpulse,v=u.tangentImpulse,0===f&&0===v||(y.x=c.x*f+d.x*v,y.y=c.y*f+d.y*v,a.isStatic||a.isSleeping||(m=r.sub(p,a.position,g),a.positionPrev.x+=y.x*a.inverseMass,a.positionPrev.y+=y.y*a.inverseMass,a.anglePrev+=r.cross(m,y)*a.inverseInertia),l.isStatic||l.isSleeping||(m=r.sub(p,l.position,g),l.positionPrev.x-=y.x*l.inverseMass,l.positionPrev.y-=y.y*l.inverseMass,l.anglePrev-=r.cross(m,y)*l.inverseInertia))},i.solveVelocity=function(e,t){for(var n=t*t,o=r._temp[0],a=r._temp[1],l=r._temp[2],c=r._temp[3],d=r._temp[4],u=r._temp[5],p=0;p<e.length;p++){var f=e[p];if(f.isActive&&!f.isSensor){var v=f.collision,m=v.parentA,y=v.parentB,g=v.normal,x=v.tangent,h=f.activeContacts,b=1/h.length;m.velocity.x=m.position.x-m.positionPrev.x,m.velocity.y=m.position.y-m.positionPrev.y,y.velocity.x=y.position.x-y.positionPrev.x,y.velocity.y=y.position.y-y.positionPrev.y,m.angularVelocity=m.angle-m.anglePrev,y.angularVelocity=y.angle-y.anglePrev;for(var w=0;w<h.length;w++){var S=h[w],A=S.vertex,P=r.sub(A,m.position,a),C=r.sub(A,y.position,l),M=r.add(m.velocity,r.mult(r.perp(P),m.angularVelocity),c),k=r.add(y.velocity,r.mult(r.perp(C),y.angularVelocity),d),B=r.sub(M,k,u),I=r.dot(g,B),_=r.dot(x,B),T=Math.abs(_),R=s.sign(_),L=(1+f.restitution)*I,O=s.clamp(f.separation+I,0,1)*i._frictionNormalMultiplier,E=_,F=1/0;T>f.friction*f.frictionStatic*O*n&&(F=T,E=s.clamp(f.friction*R*n,-F,F));var V=r.cross(P,g),W=r.cross(C,g),q=b/(m.inverseMass+y.inverseMass+m.inverseInertia*V*V+y.inverseInertia*W*W);if(L*=q,E*=q,I<0&&I*I>i._restingThresh*n)S.normalImpulse=0;else{var j=S.normalImpulse;S.normalImpulse=Math.min(S.normalImpulse+L,0),L=S.normalImpulse-j}if(_*_>i._restingThreshTangent*n)S.tangentImpulse=0;else{var D=S.tangentImpulse;S.tangentImpulse=s.clamp(S.tangentImpulse+E,-F,F),E=S.tangentImpulse-D}o.x=g.x*L+x.x*E,o.y=g.y*L+x.y*E,m.isStatic||m.isSleeping||(m.positionPrev.x+=o.x*m.inverseMass,m.positionPrev.y+=o.y*m.inverseMass,m.anglePrev+=r.cross(P,o)*m.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=o.x*y.inverseMass,y.positionPrev.y-=o.y*y.inverseMass,y.anglePrev-=r.cross(C,o)*y.inverseInertia)}}}}},function(e,t,n){var i={};e.exports=i;var o=n(19),r=n(7),s=n(21),a=n(10),l=n(20),c=n(23),d=n(11),u=n(4),p=n(5),f=n(8),v=n(0),m=n(6);i.create=function(e,t){t=(t=v.isElement(e)?t:e)||{},((e=v.isElement(e)?e:null)||t.render)&&v.warn("Engine.create: engine.render is deprecated (see docs)");var n={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:d}},i=v.extend(n,t);if(e||i.render){var r={element:e,controller:a};i.render=v.extend(r,i.render)}return i.render&&i.render.controller&&(i.render=i.render.controller.create(i.render)),i.render&&(i.render.engine=i),i.world=t.world||o.create(i.world),i.pairs=l.create(),i.broadphase=i.broadphase.controller.create(i.broadphase),i.metrics=i.metrics||{extended:!1},i.metrics=c.create(i.metrics),i},i.update=function(e,t,n){t=t||1e3/60,n=n||1;var o,a=e.world,d=e.timing,v=e.broadphase,m=[];d.timestamp+=t*d.timeScale;var y={timestamp:d.timestamp};u.trigger(e,"beforeUpdate",y);var g=p.allBodies(a),x=p.allConstraints(a);for(c.reset(e.metrics),e.enableSleeping&&r.update(g,d.timeScale),i._bodiesApplyGravity(g,a.gravity),i._bodiesUpdate(g,t,d.timeScale,n,a.bounds),f.preSolveAll(g),o=0;o<e.constraintIterations;o++)f.solveAll(x,d.timeScale);f.postSolveAll(g),v.controller?(a.isModified&&v.controller.clear(v),v.controller.update(v,g,e,a.isModified),m=v.pairsList):m=g,a.isModified&&p.setModified(a,!1,!1,!0);var h=v.detector(m,e),b=e.pairs,w=d.timestamp;for(l.update(b,h,w),l.removeOld(b,w),e.enableSleeping&&r.afterCollisions(b.list,d.timeScale),b.collisionStart.length>0&&u.trigger(e,"collisionStart",{pairs:b.collisionStart}),s.preSolvePosition(b.list),o=0;o<e.positionIterations;o++)s.solvePosition(b.list,d.timeScale);for(s.postSolvePosition(g),f.preSolveAll(g),o=0;o<e.constraintIterations;o++)f.solveAll(x,d.timeScale);for(f.postSolveAll(g),s.preSolveVelocity(b.list),o=0;o<e.velocityIterations;o++)s.solveVelocity(b.list,d.timeScale);return b.collisionActive.length>0&&u.trigger(e,"collisionActive",{pairs:b.collisionActive}),b.collisionEnd.length>0&&u.trigger(e,"collisionEnd",{pairs:b.collisionEnd}),c.update(e.metrics,e),i._bodiesClearForces(g),u.trigger(e,"afterUpdate",y),e},i.merge=function(e,t){if(v.extend(e,t),t.world){e.world=t.world,i.clear(e);for(var n=p.allBodies(e.world),o=0;o<n.length;o++){var s=n[o];r.set(s,!1),s.id=v.nextId()}}},i.clear=function(e){var t=e.world;l.clear(e.pairs);var n=e.broadphase;if(n.controller){var i=p.allBodies(t);n.controller.clear(n),n.controller.update(n,i,e,!0)}},i._bodiesClearForces=function(e){for(var t=0;t<e.length;t++){var n=e[t];n.force.x=0,n.force.y=0,n.torque=0}},i._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var i=0;i<e.length;i++){var o=e[i];o.isStatic||o.isSleeping||(o.force.y+=o.mass*t.y*n,o.force.x+=o.mass*t.x*n)}},i._bodiesUpdate=function(e,t,n,i,o){for(var r=0;r<e.length;r++){var s=e[r];s.isStatic||s.isSleeping||m.update(s,t,n,i)}}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(0);i.create=function(e){return r.extend({extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0},!1,e)},i.reset=function(e){e.extended&&(e.narrowDetections=0,e.narrowphaseTests=0,e.narrowReuse=0,e.narrowReuseCount=0,e.midphaseTests=0,e.broadphaseTests=0,e.narrowEff=0,e.midEff=0,e.broadEff=0,e.collisions=0,e.buckets=0,e.pairs=0,e.bodies=0)},i.update=function(e,t){if(e.extended){var n=t.world,i=o.allBodies(n);e.collisions=e.narrowDetections,e.pairs=t.pairs.list.length,e.bodies=i.length,e.midEff=(e.narrowDetections/(e.midphaseTests||1)).toFixed(2),e.narrowEff=(e.narrowDetections/(e.narrowphaseTests||1)).toFixed(2),e.broadEff=(1-e.broadphaseTests/(i.length||1)).toFixed(2),e.narrowReuse=(e.narrowReuseCount/(e.narrowphaseTests||1)).toFixed(2)}}},function(e,t,n){var i=e.exports=n(25);i.Body=n(6),i.Composite=n(5),i.World=n(19),i.Contact=n(18),i.Detector=n(12),i.Grid=n(11),i.Pairs=n(20),i.Pair=n(9),i.Query=n(26),i.Resolver=n(21),i.SAT=n(13),i.Constraint=n(8),i.MouseConstraint=n(28),i.Common=n(0),i.Engine=n(22),i.Events=n(4),i.Mouse=n(14),i.Runner=n(29),i.Sleeping=n(7),i.Plugin=n(17),i.Metrics=n(23),i.Bodies=n(16),i.Composites=n(30),i.Axes=n(15),i.Bounds=n(1),i.Svg=n(31),i.Vector=n(2),i.Vertices=n(3),i.Render=n(10),i.RenderPixi=n(32),i.World.add=i.Composite.add,i.World.remove=i.Composite.remove,i.World.addComposite=i.Composite.addComposite,i.World.addBody=i.Composite.addBody,i.World.addConstraint=i.Composite.addConstraint,i.World.clear=i.Composite.clear,i.Engine.run=i.Runner.run},function(e,t,n){var i={};e.exports=i;var o=n(17),r=n(0);i.name="matter-js",i.version="0.15.0",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(i,e,t)},i.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(i,e,t)}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(13),s=n(1),a=n(16),l=n(3);i.collides=function(e,t){for(var n=[],i=0;i<t.length;i++){var o=t[i];if(s.overlaps(o.bounds,e.bounds))for(var a=1===o.parts.length?0:1;a<o.parts.length;a++){var l=o.parts[a];if(s.overlaps(l.bounds,e.bounds)){var c=r.collides(l,e);if(c.collided){n.push(c);break}}}}return n},i.ray=function(e,t,n,r){r=r||1e-100;for(var s=o.angle(t,n),l=o.magnitude(o.sub(t,n)),c=.5*(n.x+t.x),d=.5*(n.y+t.y),u=a.rectangle(c,d,l,r,{angle:s}),p=i.collides(u,e),f=0;f<p.length;f+=1){var v=p[f];v.body=v.bodyB=v.bodyA}return p},i.region=function(e,t,n){for(var i=[],o=0;o<e.length;o++){var r=e[o],a=s.overlaps(r.bounds,t);(a&&!n||!a&&n)&&i.push(r)}return i},i.point=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i];if(s.contains(o.bounds,t))for(var r=1===o.parts.length?0:1;r<o.parts.length;r++){var a=o.parts[r];if(s.contains(a.bounds,t)&&l.contains(a.vertices,t)){n.push(o);break}}}return n}},function(t,n){if(void 0===e){var i=new Error("Cannot find module 'undefined'");throw i.code="MODULE_NOT_FOUND",i}t.exports=e},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(7),s=n(14),a=n(4),l=n(12),c=n(8),d=n(5),u=n(0),p=n(1);i.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=s.create(e.render.canvas):t&&t.element?n=s.create(t.element):(n=s.create(),u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var o={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},r=u.extend(o,t);return a.on(e,"beforeUpdate",(function(){var t=d.allBodies(e.world);i.update(r,t),i._triggerEvents(r)})),r},i.update=function(e,t){var n=e.mouse,i=e.constraint,s=e.body;if(0===n.button){if(i.bodyB)r.set(i.bodyB,!1),i.pointA=n.position;else for(var c=0;c<t.length;c++)if(s=t[c],p.contains(s.bounds,n.position)&&l.canCollide(s.collisionFilter,e.collisionFilter))for(var d=s.parts.length>1?1:0;d<s.parts.length;d++){var u=s.parts[d];if(o.contains(u.vertices,n.position)){i.pointA=n.position,i.bodyB=e.body=s,i.pointB={x:n.position.x-s.position.x,y:n.position.y-s.position.y},i.angleB=s.angle,r.set(s,!1),a.trigger(e,"startdrag",{mouse:n,body:s});break}}}else i.bodyB=e.body=null,i.pointB=null,s&&a.trigger(e,"enddrag",{mouse:n,body:s})},i._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&a.trigger(e,"mousemove",{mouse:t}),n.mousedown&&a.trigger(e,"mousedown",{mouse:t}),n.mouseup&&a.trigger(e,"mouseup",{mouse:t}),s.clearSourceEvents(t)}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(22),s=n(0);!function(){var e,t,n;("undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e)||(e=function(e){n=setTimeout((function(){e(s.now())}),1e3/60)},t=function(){clearTimeout(n)});i.create=function(e){var t=s.extend({fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},i.run=function(t,n){return void 0!==t.positionIterations&&(n=t,t=i.create()),function o(r){t.frameRequestId=e(o),r&&t.enabled&&i.tick(t,n,r)}(),t},i.tick=function(e,t,n){var i,s=t.timing,a=1,l={timestamp:s.timestamp};o.trigger(e,"beforeTick",l),o.trigger(t,"beforeTick",l),e.isFixed?i=e.delta:(i=n-e.timePrev||e.delta,e.timePrev=n,e.deltaHistory.push(i),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),a=(i=(i=(i=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:i)>e.deltaMax?e.deltaMax:i)/e.delta,e.delta=i),0!==e.timeScalePrev&&(a*=s.timeScale/e.timeScalePrev),0===s.timeScale&&(a=0),e.timeScalePrev=s.timeScale,e.correction=a,e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),o.trigger(e,"tick",l),o.trigger(t,"tick",l),t.world.isModified&&t.render&&t.render.controller&&t.render.controller.clear&&t.render.controller.clear(t.render),o.trigger(e,"beforeUpdate",l),r.update(t,i,a),o.trigger(e,"afterUpdate",l),t.render&&t.render.controller&&(o.trigger(e,"beforeRender",l),o.trigger(t,"beforeRender",l),t.render.controller.world(t.render),o.trigger(e,"afterRender",l),o.trigger(t,"afterRender",l)),o.trigger(e,"afterTick",l),o.trigger(t,"afterTick",l)},i.stop=function(e){t(e.frameRequestId)},i.start=function(e,t){i.run(e,t)}}()},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(8),s=n(0),a=n(6),l=n(16);i.stack=function(e,t,n,i,r,s,l){for(var c,d=o.create({label:"Stack"}),u=e,p=t,f=0,v=0;v<i;v++){for(var m=0,y=0;y<n;y++){var g=l(u,p,y,v,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>m&&(m=x),a.translate(g,{x:.5*h,y:.5*x}),u=g.bounds.max.x+r,o.addBody(d,g),c=g,f+=1}else u+=r}p+=m+s,u=e}return d},i.chain=function(e,t,n,i,a,l){for(var c=e.bodies,d=1;d<c.length;d++){var u=c[d-1],p=c[d],f=u.bounds.max.y-u.bounds.min.y,v=u.bounds.max.x-u.bounds.min.x,m=p.bounds.max.y-p.bounds.min.y,y={bodyA:u,pointA:{x:v*t,y:f*n},bodyB:p,pointB:{x:(p.bounds.max.x-p.bounds.min.x)*i,y:m*a}},g=s.extend(y,l);o.addConstraint(e,r.create(g))}return e.label+=" Chain",e},i.mesh=function(e,t,n,i,a){var l,c,d,u,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)d=f[c-1+l*t],u=f[c+l*t],o.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a)));if(l>0)for(c=0;c<t;c++)d=f[c+(l-1)*t],u=f[c+l*t],o.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a))),i&&c>0&&(p=f[c-1+(l-1)*t],o.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:u},a)))),i&&c<t-1&&(p=f[c+1+(l-1)*t],o.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:u},a))))}return e.label+=" Mesh",e},i.pyramid=function(e,t,n,o,r,s,l){return i.stack(e,t,n,o,r,s,(function(t,i,s,c,d,u){var p=Math.min(o,Math.ceil(n/2)),f=d?d.bounds.max.x-d.bounds.min.x:0;if(!(c>p||s<(c=p-c)||s>n-1-c))return 1===u&&a.translate(d,{x:(s+(n%2==1?1:-1))*f,y:0}),l(e+(d?s*f:0)+s*r,i,s,c,d,u)}))},i.newtonsCradle=function(e,t,n,i,s){for(var a=o.create({label:"Newtons Cradle"}),c=0;c<n;c++){var d=l.circle(e+c*(1.9*i),t+s,i,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),u=r.create({pointA:{x:e+c*(1.9*i),y:t},bodyB:d});o.addBody(a,d),o.addConstraint(a,u)}return a},i.car=function(e,t,n,i,s){var c=a.nextGroup(!0),d=.5*-n+20,u=.5*n-20,p=o.create({label:"Car"}),f=l.rectangle(e,t,n,i,{collisionFilter:{group:c},chamfer:{radius:.5*i},density:2e-4}),v=l.circle(e+d,t+0,s,{collisionFilter:{group:c},friction:.8}),m=l.circle(e+u,t+0,s,{collisionFilter:{group:c},friction:.8}),y=r.create({bodyB:f,pointB:{x:d,y:0},bodyA:v,stiffness:1,length:0}),g=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:m,stiffness:1,length:0});return o.addBody(p,f),o.addBody(p,v),o.addBody(p,m),o.addConstraint(p,y),o.addConstraint(p,g),p},i.softBody=function(e,t,n,o,r,a,c,d,u,p){u=s.extend({inertia:1/0},u),p=s.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var f=i.stack(e,t,n,o,r,a,(function(e,t){return l.circle(e,t,d,u)}));return i.mesh(f,n,o,c,p),f.label="Soft Body",f}},function(e,t,n){var i={};e.exports=i;n(1);var o=n(0);i.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var n,r,s,a,l,c,d,u,p,f,v,m=[],y=0,g=0,x=0;t=t||15;var h=function(e,t,n){var i=n%2==1&&n>1;if(!p||e!=p.x||t!=p.y){p&&i?(f=p.x,v=p.y):(f=0,v=0);var o={x:f+e,y:v+t};!i&&p||(p=o),m.push(o),g=f+e,x=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(i._svgPathToAbsolute(e),s=e.getTotalLength(),c=[],n=0;n<e.pathSegList.numberOfItems;n+=1)c.push(e.pathSegList.getItem(n));for(d=c.concat();y<s;){if((l=c[e.getPathSegAtLength(y)])!=u){for(;d.length&&d[0]!=l;)b(d.shift());u=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=e.getPointAtLength(y),h(a.x,a.y,0)}y+=t}for(n=0,r=d.length;n<r;++n)b(d[n]);return m},i._svgPathToAbsolute=function(e){for(var t,n,i,o,r,s,a=e.pathSegList,l=0,c=0,d=a.numberOfItems,u=0;u<d;++u){var p=a.getItem(u),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(i=l+p.x1),"x2"in p&&(r=l+p.x2),"y1"in p&&(o=c+p.y1),"y2"in p&&(s=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":a.replaceItem(e.createSVGPathSegMovetoAbs(l,c),u);break;case"l":a.replaceItem(e.createSVGPathSegLinetoAbs(l,c),u);break;case"h":a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),u);break;case"v":a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),u);break;case"c":a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,i,o,r,s),u);break;case"s":a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,s),u);break;case"q":a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,i,o),u);break;case"t":a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),u);break;case"a":a.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),u);break;case"z":case"Z":l=t,c=n}"M"!=f&&"m"!=f||(t=l,n=c)}}},function(e,t,n){var i={};e.exports=i;var o=n(1),r=n(5),s=n(0),a=n(4),l=n(2);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(s.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i.create=function(e){s.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");var t={controller:i,engine:null,element:null,frameRequestId:null,canvas:null,renderer:null,container:null,spriteContainer:null,pixiOptions:null,options:{width:800,height:600,background:"#fafafa",wireframeBackground:"#222",hasBounds:!1,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1}},n=s.extend(t,e),o=!n.options.wireframes&&"transparent"===n.options.background;return n.pixiOptions=n.pixiOptions||{view:n.canvas,transparent:o,antialias:!0,backgroundColor:e.background},n.mouse=e.mouse,n.engine=e.engine,n.renderer=n.renderer||new PIXI.WebGLRenderer(n.options.width,n.options.height,n.pixiOptions),n.container=n.container||new PIXI.Container,n.spriteContainer=n.spriteContainer||new PIXI.Container,n.canvas=n.canvas||n.renderer.view,n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.options.width,y:n.options.height}},a.on(n.engine,"beforeUpdate",(function(){i.clear(n)})),n.textures={},n.sprites={},n.primitives={},n.container.addChild(n.spriteContainer),s.isElement(n.element)?n.element.appendChild(n.canvas):s.warn('No "render.element" passed, "render.canvas" was not inserted into document.'),n.canvas.oncontextmenu=function(){return!1},n.canvas.onselectstart=function(){return!1},n},i.run=function(t){!function n(o){t.frameRequestId=e(n),i.world(t)}()},i.stop=function(e){t(e.frameRequestId)},i.clear=function(e){for(var t=e.container,n=e.spriteContainer;t.children[0];)t.removeChild(t.children[0]);for(;n.children[0];)n.removeChild(n.children[0]);var i=e.sprites["bg-0"];e.textures={},e.sprites={},e.primitives={},e.sprites["bg-0"]=i,i&&t.addChildAt(i,0),e.container.addChild(e.spriteContainer),e.currentBackground=null,t.scale.set(1,1),t.position.set(0,0)},i.setBackground=function(e,t){if(e.currentBackground!==t){var n=t.indexOf&&-1!==t.indexOf("#"),i=e.sprites["bg-0"];if(n){var o=s.colorToNumber(t);e.renderer.backgroundColor=o,i&&e.container.removeChild(i)}else if(!i){var r=d(e,t);(i=e.sprites["bg-0"]=new PIXI.Sprite(r)).position.x=0,i.position.y=0,e.container.addChildAt(i,0)}e.currentBackground=t}},i.world=function(e){var t,n=e.engine.world,s=e.renderer,a=e.container,c=e.options,d=r.allBodies(n),u=r.allConstraints(n),p=[];c.wireframes?i.setBackground(e,c.wireframeBackground):i.setBackground(e,c.background);var f=e.bounds.max.x-e.bounds.min.x,v=e.bounds.max.y-e.bounds.min.y,m=f/e.options.width,y=v/e.options.height;if(c.hasBounds){for(t=0;t<d.length;t++){var g=d[t];g.render.sprite.visible=o.overlaps(g.bounds,e.bounds)}for(t=0;t<u.length;t++){var x=u[t],h=x.bodyA,b=x.bodyB,w=x.pointA,S=x.pointB;h&&(w=l.add(h.position,x.pointA)),b&&(S=l.add(b.position,x.pointB)),w&&S&&((o.contains(e.bounds,w)||o.contains(e.bounds,S))&&p.push(x))}a.scale.set(1/m,1/y),a.position.set(-e.bounds.min.x*(1/m),-e.bounds.min.y*(1/y))}else p=u;for(t=0;t<d.length;t++)i.body(e,d[t]);for(t=0;t<p.length;t++)i.constraint(e,p[t]);s.render(a)},i.constraint=function(e,t){e.engine;var n=t.bodyA,i=t.bodyB,o=t.pointA,r=t.pointB,a=e.container,l=t.render,c="c-"+t.id,d=e.primitives[c];d||(d=e.primitives[c]=new PIXI.Graphics),l.visible&&t.pointA&&t.pointB?(-1===s.indexOf(a.children,d)&&a.addChild(d),d.clear(),d.beginFill(0,0),d.lineStyle(l.lineWidth,s.colorToNumber(l.strokeStyle),1),n?d.moveTo(n.position.x+o.x,n.position.y+o.y):d.moveTo(o.x,o.y),i?d.lineTo(i.position.x+r.x,i.position.y+r.y):d.lineTo(r.x,r.y),d.endFill()):d.clear()},i.body=function(e,t){e.engine;var i=t.render;if(i.visible)if(i.sprite&&i.sprite.texture){var o="b-"+t.id,r=e.sprites[o],a=e.spriteContainer;r||(r=e.sprites[o]=n(e,t)),-1===s.indexOf(a.children,r)&&a.addChild(r),r.position.x=t.position.x,r.position.y=t.position.y,r.rotation=t.angle,r.scale.x=i.sprite.xScale||1,r.scale.y=i.sprite.yScale||1}else{var l="b-"+t.id,d=e.primitives[l],u=e.container;d||((d=e.primitives[l]=c(e,t)).initialAngle=t.angle),-1===s.indexOf(u.children,d)&&u.addChild(d),d.position.x=t.position.x,d.position.y=t.position.y,d.rotation=t.angle-d.initialAngle}};var n=function(e,t){var n=t.render.sprite.texture,i=d(e,n),o=new PIXI.Sprite(i);return o.anchor.x=t.render.sprite.xOffset,o.anchor.y=t.render.sprite.yOffset,o},c=function(e,t){var n,i=t.render,o=e.options,r=new PIXI.Graphics,a=s.colorToNumber(i.fillStyle),l=s.colorToNumber(i.strokeStyle),c=s.colorToNumber(i.strokeStyle),d=s.colorToNumber("#bbb"),u=s.colorToNumber("#CD5C5C");r.clear();for(var p=t.parts.length>1?1:0;p<t.parts.length;p++){n=t.parts[p],o.wireframes?(r.beginFill(0,0),r.lineStyle(1,d,1)):(r.beginFill(a,1),r.lineStyle(i.lineWidth,l,1)),r.moveTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y);for(var f=1;f<n.vertices.length;f++)r.lineTo(n.vertices[f].x-t.position.x,n.vertices[f].y-t.position.y);r.lineTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y),r.endFill(),(o.showAngleIndicator||o.showAxes)&&(r.beginFill(0,0),o.wireframes?r.lineStyle(1,u,1):r.lineStyle(1,c),r.moveTo(n.position.x-t.position.x,n.position.y-t.position.y),r.lineTo((n.vertices[0].x+n.vertices[n.vertices.length-1].x)/2-t.position.x,(n.vertices[0].y+n.vertices[n.vertices.length-1].y)/2-t.position.y),r.endFill())}return r},d=function(e,t){var n=e.textures[t];return n||(n=e.textures[t]=PIXI.Texture.fromImage(t)),n}}()}])}));



/* DODATNA SKRIPTA MATTER JS*/


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