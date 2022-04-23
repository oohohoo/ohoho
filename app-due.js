/**
* matter-js 0.12.0 by @liabru 2017-02-02
* http://brm.io/matter-js/
* License MIT
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Matter=e()}}(function(){return function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../geometry/Vector"),s=e("../core/Sleeping"),a=(e("../render/Render"),e("../core/Common")),l=e("../geometry/Bounds"),c=e("../geometry/Axes");!function(){o._inertiaScale=4,o._nextCollidingGroupId=1,
    o._nextNonCollidingGroupId=-1,o._nextCategory=1,o.create=function(t){var n={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0},lineWidth:0}},o=a.extend(n,t);return e(o,t),o},o.nextGroup=function(e){return e?o._nextNonCollidingGroupId--:o._nextCollidingGroupId++},o.nextCategory=function(){return o._nextCategory=o._nextCategory<<1,o._nextCategory};var e=function(e,t){t=t||{},o.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),
    anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),i.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),o.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?"#2e2b44":a.choose(["#006BA6","#0496FF","#FFBC42","#D81159","#8F2D56"]),s=a.shadeColor(n,-20);e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||s,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};o.set=function(e,t,n){var i;"string"==typeof t&&(i=t,t={},t[i]=n);for(i in t)if(n=t[i],t.hasOwnProperty(i))switch(i){case"isStatic":o.setStatic(e,n);break;case"isSleeping":s.set(e,n);break;case"mass":o.setMass(e,n);break;case"density":o.setDensity(e,n);break;case"inertia":o.setInertia(e,n);
    break;case"vertices":o.setVertices(e,n);break;case"position":o.setPosition(e,n);break;case"angle":o.setAngle(e,n);break;case"velocity":o.setVelocity(e,n);break;case"angularVelocity":o.setAngularVelocity(e,n);break;case"parts":o.setParts(e,n);break;default:e[i]=n}},o.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var o=e.parts[n];o.isStatic=t,t?(o._original={restitution:o.restitution,friction:o.friction,mass:o.mass,inertia:o.inertia,density:o.density,inverseMass:o.inverseMass,inverseInertia:o.inverseInertia},o.restitution=0,o.friction=1,o.mass=o.inertia=o.density=1/0,o.inverseMass=o.inverseInertia=0,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.anglePrev=o.angle,o.angularVelocity=0,o.speed=0,o.angularSpeed=0,o.motion=0):o._original&&(o.restitution=o._original.restitution,o.friction=o._original.friction,o.mass=o._original.mass,o.inertia=o._original.inertia,o.density=o._original.density,o.inverseMass=o._original.inverseMass,o.inverseInertia=o._original.inverseInertia,
    delete o._original)}},o.setMass=function(e,t){e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},o.setDensity=function(e,t){o.setMass(e,t*e.area),e.density=t},o.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},o.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=i.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=i.area(e.vertices),o.setMass(e,e.density*e.area);var n=i.centre(e.vertices);i.translate(e.vertices,n,-1),o.setInertia(e,o._inertiaScale*i.inertia(e.vertices,e.mass)),i.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},o.setParts=function(e,n,r){var s;for(n=n.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,s=0;s<n.length;s++){var a=n[s];a!==e&&(a.parent=e,e.parts.push(a))}if(1!==e.parts.length){if(r="undefined"==typeof r||r){var l=[];for(s=0;s<n.length;s++)l=l.concat(n[s].vertices);i.clockwiseSort(l);var c=i.hull(l),u=i.centre(c);o.setVertices(e,c),i.translate(e.vertices,u)}var d=t(e);e.area=d.area,e.parent=e,
    e.position.x=d.centre.x,e.position.y=d.centre.y,e.positionPrev.x=d.centre.x,e.positionPrev.y=d.centre.y,o.setMass(e,d.mass),o.setInertia(e,d.inertia),o.setPosition(e,d.centre)}},o.setPosition=function(e,t){var n=r.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.position.x+=n.x,s.position.y+=n.y,i.translate(s.vertices,n),l.update(s.bounds,s.vertices,e.velocity)}},o.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var o=0;o<e.parts.length;o++){var s=e.parts[o];s.angle+=n,i.rotate(s.vertices,n,e.position),c.rotate(s.axes,n),l.update(s.bounds,s.vertices,e.velocity),o>0&&r.rotateAbout(s.position,n,e.position,s.position)}},o.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=r.magnitude(e.velocity)},o.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},o.translate=function(e,t){
    o.setPosition(e,r.add(e.position,t))},o.rotate=function(e,t){o.setAngle(e,e.angle+t)},o.scale=function(e,n,r,s){for(var a=0;a<e.parts.length;a++){var u=e.parts[a];i.scale(u.vertices,n,r,e.position),u.axes=c.fromVertices(u.vertices),e.isStatic||(u.area=i.area(u.vertices),o.setMass(u,e.density*u.area),i.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),o.setInertia(u,i.inertia(u.vertices,u.mass)),i.translate(u.vertices,{x:u.position.x,y:u.position.y})),l.update(u.bounds,u.vertices,e.velocity)}if(e.circleRadius&&(n===r?e.circleRadius*=n:e.circleRadius=null),!e.isStatic){var d=t(e);e.area=d.area,o.setMass(e,d.mass),o.setInertia(e,d.inertia)}},o.update=function(e,t,n,o){var s=Math.pow(t*n*e.timeScale,2),a=1-e.frictionAir*n*e.timeScale,u=e.position.x-e.positionPrev.x,d=e.position.y-e.positionPrev.y;e.velocity.x=u*a*o+e.force.x/e.mass*s,e.velocity.y=d*a*o+e.force.y/e.mass*s,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*a*o+e.torque/e.inertia*s,
    e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=r.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var p=0;p<e.parts.length;p++){var f=e.parts[p];i.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(i.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},o.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var o={x:t.x-e.position.x,y:t.y-e.position.y};e.torque+=o.x*n.y-o.y*n.x};var t=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var o=e.parts[n];t.mass+=o.mass,t.area+=o.area,t.inertia+=o.inertia,t.centre=r.add(t.centre,r.mult(o.position,o.mass!==1/0?o.mass:1))}return t.centre=r.div(t.centre,t.mass!==1/0?t.mass:e.parts.length),t}}()},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,
    "../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31}],2:[function(e,t,n){var o={};t.exports=o;var i=e("../core/Events"),r=e("../core/Common"),s=e("./Body");!function(){o.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},e)},o.setModified=function(e,t,n,i){if(e.isModified=t,n&&e.parent&&o.setModified(e.parent,t,n,i),i)for(var r=0;r<e.composites.length;r++){var s=e.composites[r];o.setModified(s,t,n,i)}},o.add=function(e,t){var n=[].concat(t);i.trigger(e,"beforeAdd",{object:t});for(var s=0;s<n.length;s++){var a=n[s];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}o.addBody(e,a);break;case"constraint":o.addConstraint(e,a);break;case"composite":o.addComposite(e,a);break;case"mouseConstraint":o.addConstraint(e,a.constraint)}}return i.trigger(e,"afterAdd",{
    object:t}),e},o.remove=function(e,t,n){var r=[].concat(t);i.trigger(e,"beforeRemove",{object:t});for(var s=0;s<r.length;s++){var a=r[s];switch(a.type){case"body":o.removeBody(e,a,n);break;case"constraint":o.removeConstraint(e,a,n);break;case"composite":o.removeComposite(e,a,n);break;case"mouseConstraint":o.removeConstraint(e,a.constraint)}}return i.trigger(e,"afterRemove",{object:t}),e},o.addComposite=function(e,t){return e.composites.push(t),t.parent=e,o.setModified(e,!0,!0,!1),e},o.removeComposite=function(e,t,n){var i=r.indexOf(e.composites,t);if(i!==-1&&(o.removeCompositeAt(e,i),o.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)o.removeComposite(e.composites[s],t,!0);return e},o.removeCompositeAt=function(e,t){return e.composites.splice(t,1),o.setModified(e,!0,!0,!1),e},o.addBody=function(e,t){return e.bodies.push(t),o.setModified(e,!0,!0,!1),e},o.removeBody=function(e,t,n){var i=r.indexOf(e.bodies,t);if(i!==-1&&(o.removeBodyAt(e,i),o.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)o.removeBody(e.composites[s],t,!0);
    return e},o.removeBodyAt=function(e,t){return e.bodies.splice(t,1),o.setModified(e,!0,!0,!1),e},o.addConstraint=function(e,t){return e.constraints.push(t),o.setModified(e,!0,!0,!1),e},o.removeConstraint=function(e,t,n){var i=r.indexOf(e.constraints,t);if(i!==-1&&o.removeConstraintAt(e,i),n)for(var s=0;s<e.composites.length;s++)o.removeConstraint(e.composites[s],t,!0);return e},o.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),o.setModified(e,!0,!0,!1),e},o.clear=function(e,t,n){if(n)for(var i=0;i<e.composites.length;i++)o.clear(e.composites[i],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,o.setModified(e,!0,!0,!1),e},o.allBodies=function(e){for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(o.allBodies(e.composites[n]));return t},o.allConstraints=function(e){for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(o.allConstraints(e.composites[n]));
    return t},o.allComposites=function(e){for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(o.allComposites(e.composites[n]));return t},o.get=function(e,t,n){var i,r;switch(n){case"body":i=o.allBodies(e);break;case"constraint":i=o.allConstraints(e);break;case"composite":i=o.allComposites(e).concat(e)}return i?(r=i.filter(function(e){return e.id.toString()===t.toString()}),0===r.length?null:r[0]):null},o.move=function(e,t,n){return o.remove(e,t),o.add(n,t),e},o.rebase=function(e){for(var t=o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return o.setModified(e,!0,!0,!1),e},o.translate=function(e,t,n){for(var i=n?o.allBodies(e):e.bodies,r=0;r<i.length;r++)s.translate(i[r],t);return o.setModified(e,!0,!0,!1),e},o.rotate=function(e,t,n,i){for(var r=Math.cos(t),a=Math.sin(t),l=i?o.allBodies(e):e.bodies,c=0;c<l.length;c++){var u=l[c],d=u.position.x-n.x,p=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*r-p*a),y:n.y+(d*a+p*r)
    }),s.rotate(u,t)}return o.setModified(e,!0,!0,!1),e},o.scale=function(e,t,n,i,r){for(var a=r?o.allBodies(e):e.bodies,l=0;l<a.length;l++){var c=a[l],u=c.position.x-i.x,d=c.position.y-i.y;s.setPosition(c,{x:i.x+u*t,y:i.y+d*n}),s.scale(c,t,n)}return o.setModified(e,!0,!0,!1),e}}()},{"../core/Common":14,"../core/Events":16,"./Body":1}],3:[function(e,t,n){var o={};t.exports=o;var i=e("./Composite"),r=(e("../constraint/Constraint"),e("../core/Common"));!function(){o.create=function(e){var t=i.create(),n={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-(1/0),y:-(1/0)},max:{x:1/0,y:1/0}}};return r.extend(t,n,e)}}()},{"../constraint/Constraint":12,"../core/Common":14,"./Composite":2}],4:[function(e,t,n){var o={};t.exports=o,function(){o.create=function(e){return{id:o.id(e),vertex:e,normalImpulse:0,tangentImpulse:0}},o.id=function(e){return e.body.id+"_"+e.index}}()},{}],5:[function(e,t,n){var o={};t.exports=o;var i=e("./SAT"),r=e("./Pair"),s=e("../geometry/Bounds");!function(){o.collisions=function(e,t){
    for(var n=[],a=t.pairs.table,l=0;l<e.length;l++){var c=e[l][0],u=e[l][1];if((!c.isStatic&&!c.isSleeping||!u.isStatic&&!u.isSleeping)&&o.canCollide(c.collisionFilter,u.collisionFilter)&&s.overlaps(c.bounds,u.bounds))for(var d=c.parts.length>1?1:0;d<c.parts.length;d++)for(var p=c.parts[d],f=u.parts.length>1?1:0;f<u.parts.length;f++){var m=u.parts[f];if(p===c&&m===u||s.overlaps(p.bounds,m.bounds)){var v,y=r.id(p,m),g=a[y];v=g&&g.isActive?g.collision:null;var x=i.collides(p,m,v);x.collided&&n.push(x)}}}return n},o.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!==(e.mask&t.category)&&0!==(t.mask&e.category)}}()},{"../geometry/Bounds":26,"./Pair":7,"./SAT":11}],6:[function(e,t,n){var o={};t.exports=o;var i=e("./Pair"),r=e("./Detector"),s=e("../core/Common");!function(){o.create=function(e){var t={controller:o,detector:r.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(t,e)},o.update=function(n,o,i,r){var s,p,f,m,v,y=i.world,g=n.buckets,x=!1;
    for(s=0;s<o.length;s++){var h=o[s];if((!h.isSleeping||r)&&!(h.bounds.max.x<y.bounds.min.x||h.bounds.min.x>y.bounds.max.x||h.bounds.max.y<y.bounds.min.y||h.bounds.min.y>y.bounds.max.y)){var b=t(n,h);if(!h.region||b.id!==h.region.id||r){h.region&&!r||(h.region=b);var w=e(b,h.region);for(p=w.startCol;p<=w.endCol;p++)for(f=w.startRow;f<=w.endRow;f++){v=a(p,f),m=g[v];var S=p>=b.startCol&&p<=b.endCol&&f>=b.startRow&&f<=b.endRow,C=p>=h.region.startCol&&p<=h.region.endCol&&f>=h.region.startRow&&f<=h.region.endRow;!S&&C&&C&&m&&u(n,m,h),(h.region===b||S&&!C||r)&&(m||(m=l(g,v)),c(n,m,h))}h.region=b,x=!0}}}x&&(n.pairsList=d(n))},o.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]};var e=function(e,t){var o=Math.min(e.startCol,t.startCol),i=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),s=Math.max(e.endRow,t.endRow);return n(o,i,r,s)},t=function(e,t){var o=t.bounds,i=Math.floor(o.min.x/e.bucketWidth),r=Math.floor(o.max.x/e.bucketWidth),s=Math.floor(o.min.y/e.bucketHeight),a=Math.floor(o.max.y/e.bucketHeight);
    return n(i,r,s,a)},n=function(e,t,n,o){return{id:e+","+t+","+n+","+o,startCol:e,endCol:t,startRow:n,endRow:o}},a=function(e,t){return"C"+e+"R"+t},l=function(e,t){var n=e[t]=[];return n},c=function(e,t,n){for(var o=0;o<t.length;o++){var r=t[o];if(!(n.id===r.id||n.isStatic&&r.isStatic)){var s=i.id(n,r),a=e.pairs[s];a?a[2]+=1:e.pairs[s]=[n,r,1]}}t.push(n)},u=function(e,t,n){t.splice(s.indexOf(t,n),1);for(var o=0;o<t.length;o++){var r=t[o],a=i.id(n,r),l=e.pairs[a];l&&(l[2]-=1)}},d=function(e){var t,n,o=[];t=s.keys(e.pairs);for(var i=0;i<t.length;i++)n=e.pairs[t[i]],n[2]>0?o.push(n):delete e.pairs[t[i]];return o}}()},{"../core/Common":14,"./Detector":5,"./Pair":7}],7:[function(e,t,n){var o={};t.exports=o;var i=e("./Contact");!function(){o.create=function(e,t){var n=e.bodyA,i=e.bodyB,r=e.parentA,s=e.parentB,a={id:o.id(n,i),bodyA:n,bodyB:i,contacts:{},activeContacts:[],separation:0,isActive:!0,isSensor:n.isSensor||i.isSensor,timeCreated:t,timeUpdated:t,inverseMass:r.inverseMass+s.inverseMass,friction:Math.min(r.friction,s.friction),
    frictionStatic:Math.max(r.frictionStatic,s.frictionStatic),restitution:Math.max(r.restitution,s.restitution),slop:Math.max(r.slop,s.slop)};return o.update(a,e,t),a},o.update=function(e,t,n){var r=e.contacts,s=t.supports,a=e.activeContacts,l=t.parentA,c=t.parentB;if(e.collision=t,e.inverseMass=l.inverseMass+c.inverseMass,e.friction=Math.min(l.friction,c.friction),e.frictionStatic=Math.max(l.frictionStatic,c.frictionStatic),e.restitution=Math.max(l.restitution,c.restitution),e.slop=Math.max(l.slop,c.slop),a.length=0,t.collided){for(var u=0;u<s.length;u++){var d=s[u],p=i.id(d),f=r[p];f?a.push(f):a.push(r[p]=i.create(d))}e.separation=t.depth,o.setActive(e,!0,n)}else e.isActive===!0&&o.setActive(e,!1,n)},o.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},o.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id}}()},{"./Contact":4}],8:[function(e,t,n){var o={};t.exports=o;var i=e("./Pair"),r=e("../core/Common");!function(){var e=1e3;
    o.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},o.update=function(e,t,n){var o,s,a,l,c=e.list,u=e.table,d=e.collisionStart,p=e.collisionEnd,f=e.collisionActive,m=[];for(d.length=0,p.length=0,f.length=0,l=0;l<t.length;l++)o=t[l],o.collided&&(s=i.id(o.bodyA,o.bodyB),m.push(s),a=u[s],a?(a.isActive?f.push(a):d.push(a),i.update(a,o,n)):(a=i.create(o,n),u[s]=a,d.push(a),c.push(a)));for(l=0;l<c.length;l++)a=c[l],a.isActive&&r.indexOf(m,a.id)===-1&&(i.setActive(a,!1,n),p.push(a))},o.removeOld=function(t,n){var o,i,r,s,a=t.list,l=t.table,c=[];for(s=0;s<a.length;s++)o=a[s],i=o.collision,i.bodyA.isSleeping||i.bodyB.isSleeping?o.timeUpdated=n:n-o.timeUpdated>e&&c.push(s);for(s=0;s<c.length;s++)r=c[s]-s,o=a[r],delete l[o.id],a.splice(r,1)},o.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}}()},{"../core/Common":14,"./Pair":7}],9:[function(e,t,n){var o={};
    t.exports=o;var i=e("../geometry/Vector"),r=e("./SAT"),s=e("../geometry/Bounds"),a=e("../factory/Bodies"),l=e("../geometry/Vertices");!function(){o.ray=function(e,t,n,o){o=o||1e-100;for(var l=i.angle(t,n),c=i.magnitude(i.sub(t,n)),u=.5*(n.x+t.x),d=.5*(n.y+t.y),p=a.rectangle(u,d,c,o,{angle:l}),f=[],m=0;m<e.length;m++){var v=e[m];if(s.overlaps(v.bounds,p.bounds))for(var y=1===v.parts.length?0:1;y<v.parts.length;y++){var g=v.parts[y];if(s.overlaps(g.bounds,p.bounds)){var x=r.collides(g,p);if(x.collided){x.body=x.bodyA=x.bodyB=v,f.push(x);break}}}}return f},o.region=function(e,t,n){for(var o=[],i=0;i<e.length;i++){var r=e[i],a=s.overlaps(r.bounds,t);(a&&!n||!a&&n)&&o.push(r)}return o},o.point=function(e,t){for(var n=[],o=0;o<e.length;o++){var i=e[o];if(s.contains(i.bounds,t))for(var r=1===i.parts.length?0:1;r<i.parts.length;r++){var a=i.parts[r];if(s.contains(a.bounds,t)&&l.contains(a.vertices,t)){n.push(i);break}}}return n}}()},{"../factory/Bodies":23,"../geometry/Bounds":26,"../geometry/Vector":28,
    "../geometry/Vertices":29,"./SAT":11}],10:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../geometry/Vector"),s=e("../core/Common"),a=e("../geometry/Bounds");!function(){o._restingThresh=4,o._restingThreshTangent=6,o._positionDampen=.9,o._positionWarming=.8,o._frictionNormalMultiplier=5,o.preSolvePosition=function(e){var t,n,o;for(t=0;t<e.length;t++)n=e[t],n.isActive&&(o=n.activeContacts.length,n.collision.parentA.totalContacts+=o,n.collision.parentB.totalContacts+=o)},o.solvePosition=function(e,t){var n,i,s,a,l,c,u,d,p,f=r._temp[0],m=r._temp[1],v=r._temp[2],y=r._temp[3];for(n=0;n<e.length;n++)i=e[n],i.isActive&&!i.isSensor&&(s=i.collision,a=s.parentA,l=s.parentB,c=s.normal,u=r.sub(r.add(l.positionImpulse,l.position,f),r.add(a.positionImpulse,r.sub(l.position,s.penetration,m),v),y),i.separation=r.dot(c,u));for(n=0;n<e.length;n++)i=e[n],!i.isActive||i.isSensor||i.separation<0||(s=i.collision,a=s.parentA,l=s.parentB,c=s.normal,p=(i.separation-i.slop)*t,(a.isStatic||l.isStatic)&&(p*=2),
    a.isStatic||a.isSleeping||(d=o._positionDampen/a.totalContacts,a.positionImpulse.x+=c.x*p*d,a.positionImpulse.y+=c.y*p*d),l.isStatic||l.isSleeping||(d=o._positionDampen/l.totalContacts,l.positionImpulse.x-=c.x*p*d,l.positionImpulse.y-=c.y*p*d))},o.postSolvePosition=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.totalContacts=0,0!==n.positionImpulse.x||0!==n.positionImpulse.y){for(var s=0;s<n.parts.length;s++){var l=n.parts[s];i.translate(l.vertices,n.positionImpulse),a.update(l.bounds,l.vertices,n.velocity),l.position.x+=n.positionImpulse.x,l.position.y+=n.positionImpulse.y}n.positionPrev.x+=n.positionImpulse.x,n.positionPrev.y+=n.positionImpulse.y,r.dot(n.positionImpulse,n.velocity)<0?(n.positionImpulse.x=0,n.positionImpulse.y=0):(n.positionImpulse.x*=o._positionWarming,n.positionImpulse.y*=o._positionWarming)}}},o.preSolveVelocity=function(e){var t,n,o,i,s,a,l,c,u,d,p,f,m,v,y=r._temp[0],g=r._temp[1];for(t=0;t<e.length;t++)if(o=e[t],o.isActive&&!o.isSensor)for(i=o.activeContacts,
    s=o.collision,a=s.parentA,l=s.parentB,c=s.normal,u=s.tangent,n=0;n<i.length;n++)d=i[n],p=d.vertex,f=d.normalImpulse,m=d.tangentImpulse,0===f&&0===m||(y.x=c.x*f+u.x*m,y.y=c.y*f+u.y*m,a.isStatic||a.isSleeping||(v=r.sub(p,a.position,g),a.positionPrev.x+=y.x*a.inverseMass,a.positionPrev.y+=y.y*a.inverseMass,a.anglePrev+=r.cross(v,y)*a.inverseInertia),l.isStatic||l.isSleeping||(v=r.sub(p,l.position,g),l.positionPrev.x-=y.x*l.inverseMass,l.positionPrev.y-=y.y*l.inverseMass,l.anglePrev-=r.cross(v,y)*l.inverseInertia))},o.solveVelocity=function(e,t){for(var n=t*t,i=r._temp[0],a=r._temp[1],l=r._temp[2],c=r._temp[3],u=r._temp[4],d=r._temp[5],p=0;p<e.length;p++){var f=e[p];if(f.isActive&&!f.isSensor){var m=f.collision,v=m.parentA,y=m.parentB,g=m.normal,x=m.tangent,h=f.activeContacts,b=1/h.length;v.velocity.x=v.position.x-v.positionPrev.x,v.velocity.y=v.position.y-v.positionPrev.y,y.velocity.x=y.position.x-y.positionPrev.x,y.velocity.y=y.position.y-y.positionPrev.y,v.angularVelocity=v.angle-v.anglePrev,
    y.angularVelocity=y.angle-y.anglePrev;for(var w=0;w<h.length;w++){var S=h[w],C=S.vertex,A=r.sub(C,v.position,a),P=r.sub(C,y.position,l),B=r.add(v.velocity,r.mult(r.perp(A),v.angularVelocity),c),M=r.add(y.velocity,r.mult(r.perp(P),y.angularVelocity),u),k=r.sub(B,M,d),I=r.dot(g,k),T=r.dot(x,k),V=Math.abs(T),R=s.sign(T),_=(1+f.restitution)*I,E=s.clamp(f.separation+I,0,1)*o._frictionNormalMultiplier,F=T,O=1/0;V>f.friction*f.frictionStatic*E*n&&(O=V,F=s.clamp(f.friction*R*n,-O,O));var L=r.cross(A,g),W=r.cross(P,g),q=b/(v.inverseMass+y.inverseMass+v.inverseInertia*L*L+y.inverseInertia*W*W);if(_*=q,F*=q,I<0&&I*I>o._restingThresh*n)S.normalImpulse=0;else{var N=S.normalImpulse;S.normalImpulse=Math.min(S.normalImpulse+_,0),_=S.normalImpulse-N}if(T*T>o._restingThreshTangent*n)S.tangentImpulse=0;else{var D=S.tangentImpulse;S.tangentImpulse=s.clamp(S.tangentImpulse+F,-O,O),F=S.tangentImpulse-D}i.x=g.x*_+x.x*F,i.y=g.y*_+x.y*F,v.isStatic||v.isSleeping||(v.positionPrev.x+=i.x*v.inverseMass,v.positionPrev.y+=i.y*v.inverseMass,
    v.anglePrev+=r.cross(A,i)*v.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=i.x*y.inverseMass,y.positionPrev.y-=i.y*y.inverseMass,y.anglePrev-=r.cross(P,i)*y.inverseInertia)}}}}}()},{"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],11:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../geometry/Vector");!function(){o.collides=function(t,o,s){var a,l,c,u,d=!1;if(s){var p=t.parent,f=o.parent,m=p.speed*p.speed+p.angularSpeed*p.angularSpeed+f.speed*f.speed+f.angularSpeed*f.angularSpeed;d=s&&s.collided&&m<.2,u=s}else u={collided:!1,bodyA:t,bodyB:o};if(s&&d){var v=u.axisBody,y=v===t?o:t,g=[v.axes[s.axisNumber]];if(c=e(v.vertices,y.vertices,g),u.reused=!0,c.overlap<=0)return u.collided=!1,u}else{if(a=e(t.vertices,o.vertices,t.axes),a.overlap<=0)return u.collided=!1,u;if(l=e(o.vertices,t.vertices,o.axes),l.overlap<=0)return u.collided=!1,u;a.overlap<l.overlap?(c=a,u.axisBody=t):(c=l,u.axisBody=o),u.axisNumber=c.axisNumber;
    }u.bodyA=t.id<o.id?t:o,u.bodyB=t.id<o.id?o:t,u.collided=!0,u.depth=c.overlap,u.parentA=u.bodyA.parent,u.parentB=u.bodyB.parent,t=u.bodyA,o=u.bodyB,r.dot(c.axis,r.sub(o.position,t.position))<0?u.normal={x:c.axis.x,y:c.axis.y}:u.normal={x:-c.axis.x,y:-c.axis.y},u.tangent=r.perp(u.normal),u.penetration=u.penetration||{},u.penetration.x=u.normal.x*u.depth,u.penetration.y=u.normal.y*u.depth;var x=n(t,o,u.normal),h=[];if(i.contains(t.vertices,x[0])&&h.push(x[0]),i.contains(t.vertices,x[1])&&h.push(x[1]),h.length<2){var b=n(o,t,r.neg(u.normal));i.contains(o.vertices,b[0])&&h.push(b[0]),h.length<2&&i.contains(o.vertices,b[1])&&h.push(b[1])}return h.length<1&&(h=[x[0]]),u.supports=h,u};var e=function(e,n,o){for(var i,s,a=r._temp[0],l=r._temp[1],c={overlap:Number.MAX_VALUE},u=0;u<o.length;u++){if(s=o[u],t(a,e,s),t(l,n,s),i=Math.min(a.max-l.min,l.max-a.min),i<=0)return c.overlap=i,c;i<c.overlap&&(c.overlap=i,c.axis=s,c.axisNumber=u)}return c},t=function(e,t,n){for(var o=r.dot(t[0],n),i=o,s=1;s<t.length;s+=1){
    var a=r.dot(t[s],n);a>i?i=a:a<o&&(o=a)}e.min=o,e.max=i},n=function(e,t,n){for(var o,i,s,a,l=Number.MAX_VALUE,c=r._temp[0],u=t.vertices,d=e.position,p=0;p<u.length;p++)i=u[p],c.x=i.x-d.x,c.y=i.y-d.y,o=-r.dot(n,c),o<l&&(l=o,s=i);var f=s.index-1>=0?s.index-1:u.length-1;i=u[f],c.x=i.x-d.x,c.y=i.y-d.y,l=-r.dot(n,c),a=i;var m=(s.index+1)%u.length;return i=u[m],c.x=i.x-d.x,c.y=i.y-d.y,o=-r.dot(n,c),o<l&&(a=i),[s,a]}}()},{"../geometry/Vector":28,"../geometry/Vertices":29}],12:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../geometry/Vector"),s=e("../core/Sleeping"),a=e("../geometry/Bounds"),l=e("../geometry/Axes"),c=e("../core/Common");!function(){var e=1e-6,t=.001;o.create=function(t){var n=t;n.bodyA&&!n.pointA&&(n.pointA={x:0,y:0}),n.bodyB&&!n.pointB&&(n.pointB={x:0,y:0});var o=n.bodyA?r.add(n.bodyA.position,n.pointA):n.pointA,i=n.bodyB?r.add(n.bodyB.position,n.pointB):n.pointB,s=r.magnitude(r.sub(o,i));n.length=n.length||s||e;var a={visible:!0,lineWidth:2,strokeStyle:"#ffffff"
    };return n.render=c.extend(a,n.render),n.id=n.id||c.nextId(),n.label=n.label||"Constraint",n.type="constraint",n.stiffness=n.stiffness||1,n.angularStiffness=n.angularStiffness||0,n.angleA=n.bodyA?n.bodyA.angle:n.angleA,n.angleB=n.bodyB?n.bodyB.angle:n.angleB,n.plugin={},n},o.solveAll=function(e,t){for(var n=0;n<e.length;n++)o.solve(e[n],t)},o.solve=function(n,o){var i=n.bodyA,s=n.bodyB,a=n.pointA,l=n.pointB;i&&!i.isStatic&&(n.pointA=r.rotate(a,i.angle-n.angleA),n.angleA=i.angle),s&&!s.isStatic&&(n.pointB=r.rotate(l,s.angle-n.angleB),n.angleB=s.angle);var c=a,u=l;if(i&&(c=r.add(i.position,a)),s&&(u=r.add(s.position,l)),c&&u){var d=r.sub(c,u),p=r.magnitude(d);0===p&&(p=e);var f=(p-n.length)/p,m=r.div(d,p),v=r.mult(d,.5*f*n.stiffness*o*o);if(!(Math.abs(1-p/n.length)<t*o)){var y,g,x,h,b,w,S,C;i&&!i.isStatic?(x={x:c.x-i.position.x+v.x,y:c.y-i.position.y+v.y},i.velocity.x=i.position.x-i.positionPrev.x,i.velocity.y=i.position.y-i.positionPrev.y,i.angularVelocity=i.angle-i.anglePrev,y=r.add(i.velocity,r.mult(r.perp(x),i.angularVelocity)),
    b=r.dot(x,m),S=i.inverseMass+i.inverseInertia*b*b):(y={x:0,y:0},S=i?i.inverseMass:0),s&&!s.isStatic?(h={x:u.x-s.position.x-v.x,y:u.y-s.position.y-v.y},s.velocity.x=s.position.x-s.positionPrev.x,s.velocity.y=s.position.y-s.positionPrev.y,s.angularVelocity=s.angle-s.anglePrev,g=r.add(s.velocity,r.mult(r.perp(h),s.angularVelocity)),w=r.dot(h,m),C=s.inverseMass+s.inverseInertia*w*w):(g={x:0,y:0},C=s?s.inverseMass:0);var A=r.sub(g,y),P=r.dot(m,A)/(S+C);P>0&&(P=0);var B,M={x:m.x*P,y:m.y*P};i&&!i.isStatic&&(B=r.cross(x,M)*i.inverseInertia*(1-n.angularStiffness),i.constraintImpulse.x-=v.x,i.constraintImpulse.y-=v.y,i.constraintImpulse.angle+=B,i.position.x-=v.x,i.position.y-=v.y,i.angle+=B),s&&!s.isStatic&&(B=r.cross(h,M)*s.inverseInertia*(1-n.angularStiffness),s.constraintImpulse.x+=v.x,s.constraintImpulse.y+=v.y,s.constraintImpulse.angle-=B,s.position.x+=v.x,s.position.y+=v.y,s.angle-=B)}}},o.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],o=n.constraintImpulse;if(0!==o.x||0!==o.y||0!==o.angle){
    s.set(n,!1);for(var c=0;c<n.parts.length;c++){var u=n.parts[c];i.translate(u.vertices,o),c>0&&(u.position.x+=o.x,u.position.y+=o.y),0!==o.angle&&(i.rotate(u.vertices,o.angle,n.position),l.rotate(u.axes,o.angle),c>0&&r.rotateAbout(u.position,o.angle,n.position,u.position)),a.update(u.bounds,u.vertices,n.velocity)}o.angle=0,o.x=0,o.y=0}}}}()},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],13:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../core/Sleeping"),s=e("../core/Mouse"),a=e("../core/Events"),l=e("../collision/Detector"),c=e("./Constraint"),u=e("../body/Composite"),d=e("../core/Common"),p=e("../geometry/Bounds");!function(){o.create=function(t,n){var i=(t?t.mouse:null)||(n?n.mouse:null);i||(t&&t.render&&t.render.canvas?i=s.create(t.render.canvas):n&&n.element?i=s.create(n.element):(i=s.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
    var r=c.create({label:"Mouse Constraint",pointA:i.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),l={type:"mouseConstraint",mouse:i,element:null,body:null,constraint:r,collisionFilter:{category:1,mask:4294967295,group:0}},p=d.extend(l,n);return a.on(t,"beforeUpdate",function(){var n=u.allBodies(t.world);o.update(p,n),e(p)}),p},o.update=function(e,t){var n=e.mouse,o=e.constraint,s=e.body;if(0===n.button){if(o.bodyB)r.set(o.bodyB,!1),o.pointA=n.position;else for(var c=0;c<t.length;c++)if(s=t[c],p.contains(s.bounds,n.position)&&l.canCollide(s.collisionFilter,e.collisionFilter))for(var u=s.parts.length>1?1:0;u<s.parts.length;u++){var d=s.parts[u];if(i.contains(d.vertices,n.position)){o.pointA=n.position,o.bodyB=e.body=s,o.pointB={x:n.position.x-s.position.x,y:n.position.y-s.position.y},o.angleB=s.angle,r.set(s,!1),a.trigger(e,"startdrag",{mouse:n,body:s});break}}}else o.bodyB=e.body=null,o.pointB=null,s&&a.trigger(e,"enddrag",{
    mouse:n,body:s})};var e=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&a.trigger(e,"mousemove",{mouse:t}),n.mousedown&&a.trigger(e,"mousedown",{mouse:t}),n.mouseup&&a.trigger(e,"mouseup",{mouse:t}),s.clearSourceEvents(t)}}()},{"../body/Composite":2,"../collision/Detector":5,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../core/Sleeping":22,"../geometry/Bounds":26,"../geometry/Vertices":29,"./Constraint":12}],14:[function(e,t,n){var o={};t.exports=o,function(){o._nextId=0,o._seed=0,o.extend=function(e,t){var n,i;"boolean"==typeof t?(n=2,i=t):(n=1,i=!0);for(var r=n;r<arguments.length;r++){var s=arguments[r];if(s)for(var a in s)i&&s[a]&&s[a].constructor===Object?e[a]&&e[a].constructor!==Object?e[a]=s[a]:(e[a]=e[a]||{},o.extend(e[a],i,s[a])):e[a]=s[a]}return e},o.clone=function(e,t){return o.extend({},t,e)},o.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},o.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),o=0;o<n.length;o++)t.push(e[n[o]]);
    return t}for(var i in e)t.push(e[i]);return t},o.get=function(e,t,n,o){t=t.split(".").slice(n,o);for(var i=0;i<t.length;i+=1)e=e[t[i]];return e},o.set=function(e,t,n,i,r){var s=t.split(".").slice(i,r);return o.get(e,t,0,-1)[s[s.length-1]]=n,n},o.shadeColor=function(e,t){var n=parseInt(e.slice(1),16),o=Math.round(2.55*t),i=(n>>16)+o,r=(n>>8&255)+o,s=(255&n)+o;return"#"+(16777216+65536*(i<255?i<1?0:i:255)+256*(r<255?r<1?0:r:255)+(s<255?s<1?0:s:255)).toString(16).slice(1)},o.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(o.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e},o.choose=function(e){return e[Math.floor(o.random()*e.length)]},o.isElement=function(e){try{return e instanceof HTMLElement}catch(t){return"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}},o.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},o.isFunction=function(e){return"function"==typeof e},o.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object;
    },o.isString=function(e){return"[object String]"===toString.call(e)},o.clamp=function(e,t,n){return e<t?t:e>n?n:e},o.sign=function(e){return e<0?-1:1},o.now=function(){var e=window.performance||{};return e.now=function(){return e.now||e.webkitNow||e.msNow||e.oNow||e.mozNow||function(){return+new Date}}(),e.now()},o.random=function(t,n){return t="undefined"!=typeof t?t:0,n="undefined"!=typeof n?n:1,t+e()*(n-t)};var e=function(){return o._seed=(9301*o._seed+49297)%233280,o._seed/233280};o.colorToNumber=function(e){return e=e.replace("#",""),3==e.length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},o.logLevel=1,o.log=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.info=function(){console&&o.logLevel>0&&o.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.warn=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)));
    },o.nextId=function(){return o._nextId++},o.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},o.map=function(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n},o.topologicalSort=function(e){var n=[],o=[],i=[];for(var r in e)o[r]||i[r]||t(r,o,i,e,n);return n};var t=function(e,n,o,i,r){var s=i[e]||[];o[e]=!0;for(var a=0;a<s.length;a+=1){var l=s[a];o[l]||n[l]||t(l,n,o,i,r)}o[e]=!1,n[e]=!0,r.push(e)};o.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var o=function(){for(var t,n=new Array(arguments.length),o=0,i=arguments.length;o<i;o++)n[o]=arguments[o];for(o=0;o<e.length;o+=1){var r=e[o].apply(t,n);"undefined"!=typeof r&&(t=r)}return t};return o._chained=e,o},o.chainPathBefore=function(e,t,n){return o.set(e,t,o.chain(n,o.get(e,t)))},o.chainPathAfter=function(e,t,n){return o.set(e,t,o.chain(o.get(e,t),n))}}()},{}],
    15:[function(e,t,n){var o={};t.exports=o;var i=e("../body/World"),r=e("./Sleeping"),s=e("../collision/Resolver"),a=e("../render/Render"),l=e("../collision/Pairs"),c=(e("./Metrics"),e("../collision/Grid")),u=e("./Events"),d=e("../body/Composite"),p=e("../constraint/Constraint"),f=e("./Common"),m=e("../body/Body");!function(){o.create=function(e,t){t=f.isElement(e)?t:e,e=f.isElement(e)?e:null,t=t||{},(e||t.render)&&f.warn("Engine.create: engine.render is deprecated (see docs)");var n={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:c}},o=f.extend(n,t);if(e||o.render){var r={element:e,controller:a};o.render=f.extend(r,o.render)}return o.render&&o.render.controller&&(o.render=o.render.controller.create(o.render)),o.render&&(o.render.engine=o),o.world=t.world||i.create(o.world),o.pairs=l.create(),o.broadphase=o.broadphase.controller.create(o.broadphase),o.metrics=o.metrics||{extended:!1
    },o},o.update=function(o,i,a){i=i||1e3/60,a=a||1;var c,f=o.world,m=o.timing,v=o.broadphase,y=[];m.timestamp+=i*m.timeScale;var g={timestamp:m.timestamp};u.trigger(o,"beforeUpdate",g);var x=d.allBodies(f),h=d.allConstraints(f);for(o.enableSleeping&&r.update(x,m.timeScale),t(x,f.gravity),n(x,i,m.timeScale,a,f.bounds),c=0;c<o.constraintIterations;c++)p.solveAll(h,m.timeScale);p.postSolveAll(x),v.controller?(f.isModified&&v.controller.clear(v),v.controller.update(v,x,o,f.isModified),y=v.pairsList):y=x,f.isModified&&d.setModified(f,!1,!1,!0);var b=v.detector(y,o),w=o.pairs,S=m.timestamp;for(l.update(w,b,S),l.removeOld(w,S),o.enableSleeping&&r.afterCollisions(w.list,m.timeScale),w.collisionStart.length>0&&u.trigger(o,"collisionStart",{pairs:w.collisionStart}),s.preSolvePosition(w.list),c=0;c<o.positionIterations;c++)s.solvePosition(w.list,m.timeScale);for(s.postSolvePosition(x),s.preSolveVelocity(w.list),c=0;c<o.velocityIterations;c++)s.solveVelocity(w.list,m.timeScale);return w.collisionActive.length>0&&u.trigger(o,"collisionActive",{
    pairs:w.collisionActive}),w.collisionEnd.length>0&&u.trigger(o,"collisionEnd",{pairs:w.collisionEnd}),e(x),u.trigger(o,"afterUpdate",g),o},o.merge=function(e,t){if(f.extend(e,t),t.world){e.world=t.world,o.clear(e);for(var n=d.allBodies(e.world),i=0;i<n.length;i++){var s=n[i];r.set(s,!1),s.id=f.nextId()}}},o.clear=function(e){var t=e.world;l.clear(e.pairs);var n=e.broadphase;if(n.controller){var o=d.allBodies(t);n.controller.clear(n),n.controller.update(n,o,e,!0)}};var e=function(e){for(var t=0;t<e.length;t++){var n=e[t];n.force.x=0,n.force.y=0,n.torque=0}},t=function(e,t){var n="undefined"!=typeof t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var o=0;o<e.length;o++){var i=e[o];i.isStatic||i.isSleeping||(i.force.y+=i.mass*t.y*n,i.force.x+=i.mass*t.x*n)}},n=function(e,t,n,o,i){for(var r=0;r<e.length;r++){var s=e[r];s.isStatic||s.isSleeping||m.update(s,t,n,o)}}}()},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Grid":6,"../collision/Pairs":8,"../collision/Resolver":10,
    "../constraint/Constraint":12,"../render/Render":31,"./Common":14,"./Events":16,"./Metrics":18,"./Sleeping":22}],16:[function(e,t,n){var o={};t.exports=o;var i=e("./Common");!function(){o.on=function(e,t,n){for(var o,i=t.split(" "),r=0;r<i.length;r++)o=i[r],e.events=e.events||{},e.events[o]=e.events[o]||[],e.events[o].push(n);return n},o.off=function(e,t,n){if(!t)return void(e.events={});"function"==typeof t&&(n=t,t=i.keys(e.events).join(" "));for(var o=t.split(" "),r=0;r<o.length;r++){var s=e.events[o[r]],a=[];if(n&&s)for(var l=0;l<s.length;l++)s[l]!==n&&a.push(s[l]);e.events[o[r]]=a}},o.trigger=function(e,t,n){var o,r,s,a;if(e.events){n||(n={}),o=t.split(" ");for(var l=0;l<o.length;l++)if(r=o[l],s=e.events[r]){a=i.clone(n,!1),a.name=r,a.source=e;for(var c=0;c<s.length;c++)s[c].apply(e,[a])}}}}()},{"./Common":14}],17:[function(e,t,n){var o={};t.exports=o;var i=e("./Plugin"),r=e("./Common");!function(){o.name="matter-js",o.version="0.12.0",o.uses=[],o.used=[],o.use=function(){i.use(o,Array.prototype.slice.call(arguments));
    },o.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(o,e,t)},o.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(o,e,t)}}()},{"./Common":14,"./Plugin":20}],18:[function(e,t,n){},{"../body/Composite":2,"./Common":14}],19:[function(e,t,n){var o={};t.exports=o;var i=e("../core/Common");!function(){o.create=function(t){var n={};return t||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),n.element=t||document.body,n.absolute={x:0,y:0},n.position={x:0,y:0},n.mousedownPosition={x:0,y:0},n.mouseupPosition={x:0,y:0},n.offset={x:0,y:0},n.scale={x:1,y:1},n.wheelDelta=0,n.button=-1,n.pixelRatio=n.element.getAttribute("data-pixel-ratio")||1,n.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},n.mousemove=function(t){var o=e(t,n.element,n.pixelRatio),i=t.changedTouches;i&&(n.button=0,t.preventDefault()),n.absolute.x=o.x,n.absolute.y=o.y,n.position.x=n.absolute.x*n.scale.x+n.offset.x,n.position.y=n.absolute.y*n.scale.y+n.offset.y,
    n.sourceEvents.mousemove=t},n.mousedown=function(t){var o=e(t,n.element,n.pixelRatio),i=t.changedTouches;i?(n.button=0,t.preventDefault()):n.button=t.button,n.absolute.x=o.x,n.absolute.y=o.y,n.position.x=n.absolute.x*n.scale.x+n.offset.x,n.position.y=n.absolute.y*n.scale.y+n.offset.y,n.mousedownPosition.x=n.position.x,n.mousedownPosition.y=n.position.y,n.sourceEvents.mousedown=t},n.mouseup=function(t){var o=e(t,n.element,n.pixelRatio),i=t.changedTouches;i&&t.preventDefault(),n.button=-1,n.absolute.x=o.x,n.absolute.y=o.y,n.position.x=n.absolute.x*n.scale.x+n.offset.x,n.position.y=n.absolute.y*n.scale.y+n.offset.y,n.mouseupPosition.x=n.position.x,n.mouseupPosition.y=n.position.y,n.sourceEvents.mouseup=t},n.mousewheel=function(e){n.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},o.setElement(n,n.element),n},o.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),
    t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},o.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},o.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},o.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y};var e=function(e,t,n){var o,i,r=t.getBoundingClientRect(),s=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageXOffset?window.pageXOffset:s.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:s.scrollTop,c=e.changedTouches;return c?(o=c[0].pageX-r.left-a,i=c[0].pageY-r.top-l):(o=e.pageX-r.left-a,
    i=e.pageY-r.top-l),{x:o/(t.clientWidth/(t.width||t.clientWidth)*n),y:i/(t.clientHeight/(t.height||t.clientHeight)*n)}}}()},{"../core/Common":14}],20:[function(e,t,n){var o={};t.exports=o;var i=e("./Common");!function(){o._registry={},o.register=function(e){if(o.isPlugin(e)||i.warn("Plugin.register:",o.toString(e),"does not implement all required fields."),e.name in o._registry){var t=o._registry[e.name],n=o.versionParse(e.version).number,r=o.versionParse(t.version).number;n>r?(i.warn("Plugin.register:",o.toString(t),"was upgraded to",o.toString(e)),o._registry[e.name]=e):n<r?i.warn("Plugin.register:",o.toString(t),"can not be downgraded to",o.toString(e)):e!==t&&i.warn("Plugin.register:",o.toString(e),"is already registered to different plugin object")}else o._registry[e.name]=e;return e},o.resolve=function(e){return o._registry[o.dependencyParse(e).name]},o.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},o.isPlugin=function(e){return e&&e.name&&e.version&&e.install;
    },o.isUsed=function(e,t){return e.used.indexOf(t)>-1},o.isFor=function(e,t){var n=e.for&&o.dependencyParse(e.for);return!e.for||t.name===n.name&&o.versionSatisfies(t.version,n.range)},o.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0===e.uses.length)return void i.warn("Plugin.use:",o.toString(e),"does not specify any dependencies to install.");for(var n=o.dependencies(e),r=i.topologicalSort(n),s=[],a=0;a<r.length;a+=1)if(r[a]!==e.name){var l=o.resolve(r[a]);l?o.isUsed(e,l.name)||(o.isFor(l,e)||(i.warn("Plugin.use:",o.toString(l),"is for",l.for,"but installed on",o.toString(e)+"."),l._warned=!0),l.install?l.install(e):(i.warn("Plugin.use:",o.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(s.push("🔶 "+o.toString(l)),delete l._warned):s.push("✅ "+o.toString(l)),e.used.push(l.name)):s.push("❌ "+r[a])}s.length>0&&i.info(s.join("  "))},o.dependencies=function(e,t){var n=o.dependencyParse(e),r=n.name;if(t=t||{},!(r in t)){e=o.resolve(e)||e,t[r]=i.map(e.uses||[],function(t){
    o.isPlugin(t)&&o.register(t);var r=o.dependencyParse(t),s=o.resolve(t);return s&&!o.versionSatisfies(s.version,r.range)?(i.warn("Plugin.dependencies:",o.toString(s),"does not satisfy",o.toString(r),"used by",o.toString(n)+"."),s._warned=!0,e._warned=!0):s||(i.warn("Plugin.dependencies:",o.toString(t),"used by",o.toString(n),"could not be resolved."),e._warned=!0),r.name});for(var s=0;s<t[r].length;s+=1)o.dependencies(t[r][s],t);return t}},o.dependencyParse=function(e){if(i.isString(e)){var t=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;return t.test(e)||i.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}}return{name:e.name,range:e.range||e.version}},o.versionParse=function(e){var t=/^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;t.test(e)||i.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=e.split("-");e=n[0];var o=isNaN(Number(e[0])),r=o?e.substr(1):e,s=i.map(r.split("."),function(e){return Number(e);
    });return{isRange:o,version:r,range:e,operator:o?e[0]:"",parts:s,prerelease:n[1],number:1e8*s[0]+1e4*s[1]+s[2]}},o.versionSatisfies=function(e,t){t=t||"*";var n=o.versionParse(t),i=n.parts,r=o.versionParse(e),s=r.parts;if(n.isRange){if("*"===n.operator||"*"===e)return!0;if("~"===n.operator)return s[0]===i[0]&&s[1]===i[1]&&s[2]>=i[2];if("^"===n.operator)return i[0]>0?s[0]===i[0]&&r.number>=n.number:i[1]>0?s[1]===i[1]&&s[2]>=i[2]:s[2]===i[2]}return e===t||"*"===e}}()},{"./Common":14}],21:[function(e,t,n){var o={};t.exports=o;var i=e("./Events"),r=e("./Engine"),s=e("./Common");!function(){var e,t;if("undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!e){var n;e=function(e){n=setTimeout(function(){e(s.now())},1e3/60)},t=function(){clearTimeout(n)}}o.create=function(e){
    var t={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},n=s.extend(t,e);return n.delta=n.delta||1e3/n.fps,n.deltaMin=n.deltaMin||1e3/n.fps,n.deltaMax=n.deltaMax||1e3/(.5*n.fps),n.fps=1e3/n.delta,n},o.run=function(t,n){return"undefined"!=typeof t.positionIterations&&(n=t,t=o.create()),function i(r){t.frameRequestId=e(i),r&&t.enabled&&o.tick(t,n,r)}(),t},o.tick=function(e,t,n){var o,s=t.timing,a=1,l={timestamp:s.timestamp};i.trigger(e,"beforeTick",l),i.trigger(t,"beforeTick",l),e.isFixed?o=e.delta:(o=n-e.timePrev||e.delta,e.timePrev=n,e.deltaHistory.push(o),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),o=Math.min.apply(null,e.deltaHistory),o=o<e.deltaMin?e.deltaMin:o,o=o>e.deltaMax?e.deltaMax:o,a=o/e.delta,e.delta=o),0!==e.timeScalePrev&&(a*=s.timeScale/e.timeScalePrev),0===s.timeScale&&(a=0),e.timeScalePrev=s.timeScale,e.correction=a,e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),
    e.counterTimestamp=n,e.frameCounter=0),i.trigger(e,"tick",l),i.trigger(t,"tick",l),t.world.isModified&&t.render&&t.render.controller&&t.render.controller.clear&&t.render.controller.clear(t.render),i.trigger(e,"beforeUpdate",l),r.update(t,o,a),i.trigger(e,"afterUpdate",l),t.render&&t.render.controller&&(i.trigger(e,"beforeRender",l),i.trigger(t,"beforeRender",l),t.render.controller.world(t.render),i.trigger(e,"afterRender",l),i.trigger(t,"afterRender",l)),i.trigger(e,"afterTick",l),i.trigger(t,"afterTick",l)},o.stop=function(e){t(e.frameRequestId)},o.start=function(e,t){o.run(e,t)}}()},{"./Common":14,"./Engine":15,"./Events":16}],22:[function(e,t,n){var o={};t.exports=o;var i=e("./Events");!function(){o._motionWakeThreshold=.18,o._motionSleepThreshold=.08,o._minBias=.9,o.update=function(e,t){for(var n=t*t*t,i=0;i<e.length;i++){var r=e[i],s=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var a=Math.min(r.motion,s),l=Math.max(r.motion,s);r.motion=o._minBias*a+(1-o._minBias)*l,
    r.sleepThreshold>0&&r.motion<o._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&o.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else o.set(r,!1)}},o.afterCollisions=function(e,t){for(var n=t*t*t,i=0;i<e.length;i++){var r=e[i];if(r.isActive){var s=r.collision,a=s.bodyA.parent,l=s.bodyB.parent;if(!(a.isSleeping&&l.isSleeping||a.isStatic||l.isStatic)&&(a.isSleeping||l.isSleeping)){var c=a.isSleeping&&!a.isStatic?a:l,u=c===a?l:a;!c.isStatic&&u.motion>o._motionWakeThreshold*n&&o.set(c,!1)}}}},o.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||i.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&i.trigger(e,"sleepEnd"))}}()},{"./Events":16}],23:[function(e,t,n){(function(n){var o={};t.exports=o;var i=e("../geometry/Vertices"),r=e("../core/Common"),s=e("../body/Body"),a=e("../geometry/Bounds"),l=e("../geometry/Vector"),c="undefined"!=typeof window?window.decomp:"undefined"!=typeof n?n.decomp:null;
    !function(){o.rectangle=function(e,t,n,o,a){a=a||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:i.fromPath("L 0 0 L "+n+" 0 L "+n+" "+o+" L 0 "+o)};if(a.chamfer){var c=a.chamfer;l.vertices=i.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return s.create(r.extend({},l,a))},o.trapezoid=function(e,t,n,o,a,l){l=l||{},a*=.5;var c,u=(1-2*a)*n,d=n*a,p=d+u,f=p+d;c=a<.5?"L 0 0 L "+d+" "+-o+" L "+p+" "+-o+" L "+f+" 0":"L 0 0 L "+p+" "+-o+" L "+f+" 0";var m={label:"Trapezoid Body",position:{x:e,y:t},vertices:i.fromPath(c)};if(l.chamfer){var v=l.chamfer;m.vertices=i.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete l.chamfer}return s.create(r.extend({},m,l))},o.circle=function(e,t,n,i,s){i=i||{};var a={label:"Circle Body",circleRadius:n};s=s||25;var l=Math.ceil(Math.max(10,Math.min(s,n)));return l%2===1&&(l+=1),o.polygon(e,t,l,n,r.extend({},a,i))},o.polygon=function(e,t,n,a,l){if(l=l||{},n<3)return o.circle(e,t,a,l);for(var c=2*Math.PI/n,u="",d=.5*c,p=0;p<n;p+=1){
    var f=d+p*c,m=Math.cos(f)*a,v=Math.sin(f)*a;u+="L "+m.toFixed(3)+" "+v.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:e,y:t},vertices:i.fromPath(u)};if(l.chamfer){var g=l.chamfer;y.vertices=i.chamfer(y.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return s.create(r.extend({},y,l))},o.fromVertices=function(e,t,n,o,u,d,p){var f,m,v,y,g,x,h,b,w;for(o=o||{},m=[],u="undefined"!=typeof u&&u,d="undefined"!=typeof d?d:.01,p="undefined"!=typeof p?p:10,c||r.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),r.isArray(n[0])||(n=[n]),b=0;b<n.length;b+=1)if(y=n[b],v=i.isConvex(y),v||!c)y=v?i.clockwiseSort(y):i.hull(y),m.push({position:{x:e,y:t},vertices:y});else{var S=y.map(function(e){return[e.x,e.y]});c.makeCCW(S),d!==!1&&c.removeCollinearPoints(S,d);var C=c.quickDecomp(S);for(g=0;g<C.length;g++){var A=C[g],P=A.map(function(e){return{x:e[0],y:e[1]}});p>0&&i.area(P)<p||m.push({position:i.centre(P),vertices:P
    })}}for(g=0;g<m.length;g++)m[g]=s.create(r.extend(m[g],o));if(u){var B=5;for(g=0;g<m.length;g++){var M=m[g];for(x=g+1;x<m.length;x++){var k=m[x];if(a.overlaps(M.bounds,k.bounds)){var I=M.vertices,T=k.vertices;for(h=0;h<M.vertices.length;h++)for(w=0;w<k.vertices.length;w++){var V=l.magnitudeSquared(l.sub(I[(h+1)%I.length],T[w])),R=l.magnitudeSquared(l.sub(I[h],T[(w+1)%T.length]));V<B&&R<B&&(I[h].isInternal=!0,T[w].isInternal=!0)}}}}}return m.length>1?(f=s.create(r.extend({parts:m.slice(0)},o)),s.setPosition(f,{x:e,y:t}),f):m[0]}}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../body/Body":1,"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],24:[function(e,t,n){var o={};t.exports=o;var i=e("../body/Composite"),r=e("../constraint/Constraint"),s=e("../core/Common"),a=e("../body/Body"),l=e("./Bodies");!function(){o.stack=function(e,t,n,o,r,s,l){for(var c,u=i.create({label:"Stack"
    }),d=e,p=t,f=0,m=0;m<o;m++){for(var v=0,y=0;y<n;y++){var g=l(d,p,y,m,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>v&&(v=x),a.translate(g,{x:.5*h,y:.5*x}),d=g.bounds.max.x+r,i.addBody(u,g),c=g,f+=1}else d+=r}p+=v+s,d=e}return u},o.chain=function(e,t,n,o,a,l){for(var c=e.bodies,u=1;u<c.length;u++){var d=c[u-1],p=c[u],f=d.bounds.max.y-d.bounds.min.y,m=d.bounds.max.x-d.bounds.min.x,v=p.bounds.max.y-p.bounds.min.y,y=p.bounds.max.x-p.bounds.min.x,g={bodyA:d,pointA:{x:m*t,y:f*n},bodyB:p,pointB:{x:y*o,y:v*a}},x=s.extend(g,l);i.addConstraint(e,r.create(x))}return e.label+=" Chain",e},o.mesh=function(e,t,n,o,a){var l,c,u,d,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)u=f[c-1+l*t],d=f[c+l*t],i.addConstraint(e,r.create(s.extend({bodyA:u,bodyB:d},a)));if(l>0)for(c=0;c<t;c++)u=f[c+(l-1)*t],d=f[c+l*t],i.addConstraint(e,r.create(s.extend({bodyA:u,bodyB:d},a))),o&&c>0&&(p=f[c-1+(l-1)*t],i.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:d},a)))),o&&c<t-1&&(p=f[c+1+(l-1)*t],
    i.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:d},a))))}return e.label+=" Mesh",e},o.pyramid=function(e,t,n,i,r,s,l){return o.stack(e,t,n,i,r,s,function(t,o,s,c,u,d){var p=Math.min(i,Math.ceil(n/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(c>p)){c=p-c;var m=c,v=n-1-c;if(!(s<m||s>v)){1===d&&a.translate(u,{x:(s+(n%2===1?1:-1))*f,y:0});var y=u?s*f:0;return l(e+y+s*r,o,s,c,u,d)}}})},o.newtonsCradle=function(e,t,n,o,s){for(var a=i.create({label:"Newtons Cradle"}),c=0;c<n;c++){var u=1.9,d=l.circle(e+c*(o*u),t+s,o,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),p=r.create({pointA:{x:e+c*(o*u),y:t},bodyB:d});i.addBody(a,d),i.addConstraint(a,p)}return a},o.car=function(e,t,n,o,s){var c=a.nextGroup(!0),u=-20,d=.5*-n+u,p=.5*n-u,f=0,m=i.create({label:"Car"}),v=l.trapezoid(e,t,n,o,.3,{collisionFilter:{group:c},friction:.01,chamfer:{radius:10}}),y=l.circle(e+d,t+f,s,{collisionFilter:{group:c},friction:.8,density:.01}),g=l.circle(e+p,t+f,s,{collisionFilter:{group:c},friction:.8,density:.01
    }),x=r.create({bodyA:v,pointA:{x:d,y:f},bodyB:y,stiffness:.2,render:{lineWidth:0}}),h=r.create({bodyA:v,pointA:{x:p,y:f},bodyB:g,stiffness:.2,render:{lineWidth:0}});return i.addBody(m,v),i.addBody(m,y),i.addBody(m,g),i.addConstraint(m,x),i.addConstraint(m,h),m},o.softBody=function(e,t,n,i,r,a,c,u,d,p){d=s.extend({inertia:1/0},d),p=s.extend({stiffness:.4},p);var f=o.stack(e,t,n,i,r,a,function(e,t){return l.circle(e,t,u,d)});return o.mesh(f,n,i,c,p),f.label="Soft Body",f}}()},{"../body/Body":1,"../body/Composite":2,"../constraint/Constraint":12,"../core/Common":14,"./Bodies":23}],25:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vector"),r=e("../core/Common");!function(){o.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var o=(n+1)%e.length,s=i.normalise({x:e[o].y-e[n].y,y:e[n].x-e[o].x}),a=0===s.y?1/0:s.x/s.y;a=a.toFixed(3).toString(),t[a]=s}return r.values(t)},o.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),o=Math.sin(t),i=0;i<e.length;i++){var r,s=e[i];r=s.x*n-s.y*o,
    s.y=s.x*o+s.y*n,s.x=r}}}()},{"../core/Common":14,"../geometry/Vector":28}],26:[function(e,t,n){var o={};t.exports=o,function(){o.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&o.update(t,e),t},o.update=function(e,t,n){e.min.x=1/0,e.max.x=-(1/0),e.min.y=1/0,e.max.y=-(1/0);for(var o=0;o<t.length;o++){var i=t[o];i.x>e.max.x&&(e.max.x=i.x),i.x<e.min.x&&(e.min.x=i.x),i.y>e.max.y&&(e.max.y=i.y),i.y<e.min.y&&(e.min.y=i.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},o.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},o.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},o.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},o.shift=function(e,t){var n=e.max.x-e.min.x,o=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+o}}()},{}],27:[function(e,t,n){var o={};t.exports=o;e("../geometry/Bounds");!function(){o.pathToVertices=function(t,n){
    var o,i,r,s,a,l,c,u,d,p,f,m,v=[],y=0,g=0,x=0;n=n||15;var h=function(e,t,n){var o=n%2===1&&n>1;if(!d||e!=d.x||t!=d.y){d&&o?(f=d.x,m=d.y):(f=0,m=0);var i={x:f+e,y:m+t};!o&&d||(d=i),v.push(i),g=f+e,x=m+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(e(t),r=t.getTotalLength(),l=[],o=0;o<t.pathSegList.numberOfItems;o+=1)l.push(t.pathSegList.getItem(o));for(c=l.concat();y<r;){if(p=t.getPathSegAtLength(y),a=l[p],a!=u){for(;c.length&&c[0]!=a;)b(c.shift());u=a}switch(a.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":s=t.getPointAtLength(y),h(s.x,s.y,0)}y+=n}for(o=0,i=c.length;o<i;++o)b(c[o]);return v};var e=function(e){for(var t,n,o,i,r,s,a=e.pathSegList,l=0,c=0,u=a.numberOfItems,d=0;d<u;++d){var p=a.getItem(d),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(o=l+p.x1),
    "x2"in p&&(r=l+p.x2),"y1"in p&&(i=c+p.y1),"y2"in p&&(s=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":a.replaceItem(e.createSVGPathSegMovetoAbs(l,c),d);break;case"l":a.replaceItem(e.createSVGPathSegLinetoAbs(l,c),d);break;case"h":a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),d);break;case"v":a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),d);break;case"c":a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,o,i,r,s),d);break;case"s":a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,s),d);break;case"q":a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,o,i),d);break;case"t":a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),d);break;case"a":a.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),d);break;case"z":case"Z":l=t,c=n}"M"!=f&&"m"!=f||(t=l,n=c)}}}()},{"../geometry/Bounds":26}],28:[function(e,t,n){var o={};t.exports=o,function(){o.create=function(e,t){return{x:e||0,y:t||0}},o.clone=function(e){return{
    x:e.x,y:e.y}},o.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},o.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},o.rotate=function(e,t){var n=Math.cos(t),o=Math.sin(t);return{x:e.x*n-e.y*o,y:e.x*o+e.y*n}},o.rotateAbout=function(e,t,n,o){var i=Math.cos(t),r=Math.sin(t);o||(o={});var s=n.x+((e.x-n.x)*i-(e.y-n.y)*r);return o.y=n.y+((e.x-n.x)*r+(e.y-n.y)*i),o.x=s,o},o.normalise=function(e){var t=o.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},o.dot=function(e,t){return e.x*t.x+e.y*t.y},o.cross=function(e,t){return e.x*t.y-e.y*t.x},o.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},o.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},o.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},o.mult=function(e,t){return{x:e.x*t,y:e.y*t}},o.div=function(e,t){return{x:e.x/t,y:e.y/t}},o.perp=function(e,t){return t=t===!0?-1:1,{x:t*-e.y,y:t*e.x}},o.neg=function(e){return{x:-e.x,y:-e.y}},o.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x);
    },o._temp=[o.create(),o.create(),o.create(),o.create(),o.create(),o.create()]}()},{}],29:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Vector"),r=e("../core/Common");!function(){o.create=function(e,t){for(var n=[],o=0;o<e.length;o++){var i=e[o],r={x:i.x,y:i.y,index:o,body:t,isInternal:!1};n.push(r)}return n},o.fromPath=function(e,t){var n=/L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi,i=[];return e.replace(n,function(e,t,n){i.push({x:parseFloat(t),y:parseFloat(n)})}),o.create(i,t)},o.centre=function(e){for(var t,n,r,s=o.area(e,!0),a={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=i.cross(e[l],e[r]),n=i.mult(i.add(e[l],e[r]),t),a=i.add(a,n);return i.div(a,6*s)},o.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return i.div(t,e.length)},o.area=function(e,t){for(var n=0,o=e.length-1,i=0;i<e.length;i++)n+=(e[o].x-e[i].x)*(e[o].y+e[i].y),o=i;return t?n/2:Math.abs(n)/2},o.inertia=function(e,t){for(var n,o,r=0,s=0,a=e,l=0;l<a.length;l++)o=(l+1)%a.length,n=Math.abs(i.cross(a[o],a[l])),
    r+=n*(i.dot(a[o],a[o])+i.dot(a[o],a[l])+i.dot(a[l],a[l])),s+=n;return t/6*(r/s)},o.translate=function(e,t,n){var o;if(n)for(o=0;o<e.length;o++)e[o].x+=t.x*n,e[o].y+=t.y*n;else for(o=0;o<e.length;o++)e[o].x+=t.x,e[o].y+=t.y;return e},o.rotate=function(e,t,n){if(0!==t){for(var o=Math.cos(t),i=Math.sin(t),r=0;r<e.length;r++){var s=e[r],a=s.x-n.x,l=s.y-n.y;s.x=n.x+(a*o-l*i),s.y=n.y+(a*i+l*o)}return e}},o.contains=function(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=e[(n+1)%e.length];if((t.x-o.x)*(i.y-o.y)+(t.y-o.y)*(o.x-i.x)>0)return!1}return!0},o.scale=function(e,t,n,r){if(1===t&&1===n)return e;r=r||o.centre(e);for(var s,a,l=0;l<e.length;l++)s=e[l],a=i.sub(s,r),e[l].x=r.x+a.x*t,e[l].y=r.y+a.y*n;return e},o.chamfer=function(e,t,n,o,s){t=t||[8],t.length||(t=[t]),n="undefined"!=typeof n?n:-1,o=o||2,s=s||14;for(var a=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],u=e[l],d=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0!==p){var f=i.normalise({x:u.y-c.y,y:c.x-u.x}),m=i.normalise({x:d.y-u.y,
    y:u.x-d.x}),v=Math.sqrt(2*Math.pow(p,2)),y=i.mult(r.clone(f),p),g=i.normalise(i.mult(i.add(f,m),.5)),x=i.sub(u,i.mult(g,v)),h=n;n===-1&&(h=1.75*Math.pow(p,.32)),h=r.clamp(h,o,s),h%2===1&&(h+=1);for(var b=Math.acos(i.dot(f,m)),w=b/h,S=0;S<h;S++)a.push(i.add(i.rotate(y,w*S),x))}else a.push(u)}return a},o.clockwiseSort=function(e){var t=o.mean(e);return e.sort(function(e,n){return i.angle(t,e)-i.angle(t,n)}),e},o.isConvex=function(e){var t,n,o,i,r=0,s=e.length;if(s<3)return null;for(t=0;t<s;t++)if(n=(t+1)%s,o=(t+2)%s,i=(e[n].x-e[t].x)*(e[o].y-e[n].y),i-=(e[n].y-e[t].y)*(e[o].x-e[n].x),i<0?r|=1:i>0&&(r|=2),3===r)return!1;return 0!==r||null},o.hull=function(e){var t,n,o=[],r=[];for(e=e.slice(0),e.sort(function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y}),n=0;n<e.length;n++){for(t=e[n];r.length>=2&&i.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(n=e.length-1;n>=0;n--){for(t=e[n];o.length>=2&&i.cross3(o[o.length-2],o[o.length-1],t)<=0;)o.pop();o.push(t)}return o.pop(),r.pop(),
    o.concat(r)}}()},{"../core/Common":14,"../geometry/Vector":28}],30:[function(e,t,n){var o=t.exports=e("../core/Matter");o.Body=e("../body/Body"),o.Composite=e("../body/Composite"),o.World=e("../body/World"),o.Contact=e("../collision/Contact"),o.Detector=e("../collision/Detector"),o.Grid=e("../collision/Grid"),o.Pairs=e("../collision/Pairs"),o.Pair=e("../collision/Pair"),o.Query=e("../collision/Query"),o.Resolver=e("../collision/Resolver"),o.SAT=e("../collision/SAT"),o.Constraint=e("../constraint/Constraint"),o.MouseConstraint=e("../constraint/MouseConstraint"),o.Common=e("../core/Common"),o.Engine=e("../core/Engine"),o.Events=e("../core/Events"),o.Mouse=e("../core/Mouse"),o.Runner=e("../core/Runner"),o.Sleeping=e("../core/Sleeping"),o.Plugin=e("../core/Plugin"),o.Bodies=e("../factory/Bodies"),o.Composites=e("../factory/Composites"),o.Axes=e("../geometry/Axes"),o.Bounds=e("../geometry/Bounds"),o.Svg=e("../geometry/Svg"),o.Vector=e("../geometry/Vector"),o.Vertices=e("../geometry/Vertices"),
    o.Render=e("../render/Render"),o.RenderPixi=e("../render/RenderPixi"),o.World.add=o.Composite.add,o.World.remove=o.Composite.remove,o.World.addComposite=o.Composite.addComposite,o.World.addBody=o.Composite.addBody,o.World.addConstraint=o.Composite.addConstraint,o.World.clear=o.Composite.clear,o.Engine.run=o.Runner.run},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Contact":4,"../collision/Detector":5,"../collision/Grid":6,"../collision/Pair":7,"../collision/Pairs":8,"../collision/Query":9,"../collision/Resolver":10,"../collision/SAT":11,"../constraint/Constraint":12,"../constraint/MouseConstraint":13,"../core/Common":14,"../core/Engine":15,"../core/Events":16,"../core/Matter":17,"../core/Metrics":18,"../core/Mouse":19,"../core/Plugin":20,"../core/Runner":21,"../core/Sleeping":22,"../factory/Bodies":23,"../factory/Composites":24,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Svg":27,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31,
    "../render/RenderPixi":32}],31:[function(e,t,n){var o={};t.exports=o;var i=e("../core/Common"),r=e("../body/Composite"),s=e("../geometry/Bounds"),a=e("../core/Events"),l=e("../collision/Grid"),c=e("../geometry/Vector"),u=e("../core/Mouse");!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(i.now())},1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),o.create=function(e){var t={controller:o,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,options:{width:800,height:600,pixelRatio:1,background:"#18181d",wireframeBackground:"#0f0f13",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,
    showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},r=i.extend(t,e);return r.canvas&&(r.canvas.width=r.options.width||r.canvas.width,r.canvas.height=r.options.height||r.canvas.height),r.mouse=e.mouse,r.engine=e.engine,r.canvas=r.canvas||n(r.options.width,r.options.height),r.context=r.canvas.getContext("2d"),r.textures={},r.bounds=r.bounds||{min:{x:0,y:0},max:{x:r.canvas.width,y:r.canvas.height}},1!==r.options.pixelRatio&&o.setPixelRatio(r,r.options.pixelRatio),i.isElement(r.element)?r.element.appendChild(r.canvas):i.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),r},o.run=function(t){!function n(i){t.frameRequestId=e(n),o.world(t)}()},o.stop=function(e){t(e.frameRequestId)},o.setPixelRatio=function(e,t){var n=e.options,o=e.canvas;"auto"===t&&(t=d(o)),n.pixelRatio=t,o.setAttribute("data-pixel-ratio",t),o.width=n.width*t,o.height=n.height*t,o.style.width=n.width+"px",
    o.style.height=n.height+"px",e.context.scale(t,t)},o.lookAt=function(e,t,n,o){o="undefined"==typeof o||o,t=i.isArray(t)?t:[t],n=n||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-(1/0),y:-(1/0)}},s=0;s<t.length;s+=1){var a=t[s],l=a.bounds?a.bounds.min:a.min||a.position||a,c=a.bounds?a.bounds.max:a.max||a.position||a;l&&c&&(l.x<r.min.x&&(r.min.x=l.x),c.x>r.max.x&&(r.max.x=c.x),l.y<r.min.y&&(r.min.y=l.y),c.y>r.max.y&&(r.max.y=c.y))}var d=r.max.x-r.min.x+2*n.x,p=r.max.y-r.min.y+2*n.y,f=e.canvas.height,m=e.canvas.width,v=m/f,y=d/p,g=1,x=1;y>v?x=y/v:g=v/y,e.options.hasBounds=!0,e.bounds.min.x=r.min.x,e.bounds.max.x=r.min.x+d*g,e.bounds.min.y=r.min.y,e.bounds.max.y=r.min.y+p*x,o&&(e.bounds.min.x+=.5*d-d*g*.5,e.bounds.max.x+=.5*d-d*g*.5,e.bounds.min.y+=.5*p-p*x*.5,e.bounds.max.y+=.5*p-p*x*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height
    }),u.setOffset(e.mouse,e.bounds.min))},o.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,o=t/e.options.width,i=n/e.options.height;e.context.scale(1/o,1/i),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},o.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},o.world=function(e){var t,n=e.engine,i=n.world,d=e.canvas,p=e.context,m=e.options,v=r.allBodies(i),y=r.allConstraints(i),g=m.wireframes?m.wireframeBackground:m.background,x=[],h=[],b={timestamp:n.timing.timestamp};if(a.trigger(e,"beforeRender",b),e.currentBackground!==g&&f(e,g),p.globalCompositeOperation="source-in",p.fillStyle="transparent",p.fillRect(0,0,d.width,d.height),p.globalCompositeOperation="source-over",m.hasBounds){for(t=0;t<v.length;t++){var w=v[t];s.overlaps(w.bounds,e.bounds)&&x.push(w)}for(t=0;t<y.length;t++){var S=y[t],C=S.bodyA,A=S.bodyB,P=S.pointA,B=S.pointB;C&&(P=c.add(C.position,S.pointA)),A&&(B=c.add(A.position,S.pointB)),
    P&&B&&(s.contains(e.bounds,P)||s.contains(e.bounds,B))&&h.push(S)}o.startViewTransform(e),e.mouse&&(u.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),u.setOffset(e.mouse,e.bounds.min))}else h=y,x=v;!m.wireframes||n.enableSleeping&&m.showSleeping?o.bodies(e,x,p):(m.showConvexHulls&&o.bodyConvexHulls(e,x,p),o.bodyWireframes(e,x,p)),m.showBounds&&o.bodyBounds(e,x,p),(m.showAxes||m.showAngleIndicator)&&o.bodyAxes(e,x,p),m.showPositions&&o.bodyPositions(e,x,p),m.showVelocity&&o.bodyVelocity(e,x,p),m.showIds&&o.bodyIds(e,x,p),m.showSeparations&&o.separations(e,n.pairs.list,p),m.showCollisions&&o.collisions(e,n.pairs.list,p),m.showVertexNumbers&&o.vertexNumbers(e,x,p),m.showMousePosition&&o.mousePosition(e,e.mouse,p),o.constraints(h,p),m.showBroadphase&&n.broadphase.controller===l&&o.grid(e,n.broadphase,p),m.showDebug&&o.debug(e,p),m.hasBounds&&o.endViewTransform(e),a.trigger(e,"afterRender",b)},o.debug=function(e,t){var n=t,o=e.engine,i=o.world,s=o.metrics,a=e.options,l=(r.allBodies(i),
    "    ");if(o.timing.timestamp-(e.debugTimestamp||0)>=500){var c="";s.timing&&(c+="fps: "+Math.round(s.timing.fps)+l),e.debugString=c,e.debugTimestamp=o.timing.timestamp}if(e.debugString){n.font="12px Arial",a.wireframes?n.fillStyle="rgba(255,255,255,0.5)":n.fillStyle="rgba(0,0,0,0.5)";for(var u=e.debugString.split("\n"),d=0;d<u.length;d++)n.fillText(u[d],50,50+18*d)}},o.constraints=function(e,t){for(var n=t,o=0;o<e.length;o++){var i=e[o];if(i.render.visible&&i.pointA&&i.pointB){var r=i.bodyA,s=i.bodyB;r?(n.beginPath(),n.moveTo(r.position.x+i.pointA.x,r.position.y+i.pointA.y)):(n.beginPath(),n.moveTo(i.pointA.x,i.pointA.y)),s?n.lineTo(s.position.x+i.pointB.x,s.position.y+i.pointB.y):n.lineTo(i.pointB.x,i.pointB.y),i.render.lineWidth&&(n.lineWidth=i.render.lineWidth,n.strokeStyle=i.render.strokeStyle,n.stroke())}}},o.bodyShadows=function(e,t,n){for(var o=n,i=(e.engine,0);i<t.length;i++){var r=t[i];if(r.render.visible){if(r.circleRadius)o.beginPath(),o.arc(r.position.x,r.position.y,r.circleRadius,0,2*Math.PI),
    o.closePath();else{o.beginPath(),o.moveTo(r.vertices[0].x,r.vertices[0].y);for(var s=1;s<r.vertices.length;s++)o.lineTo(r.vertices[s].x,r.vertices[s].y);o.closePath()}var a=r.position.x-.5*e.options.width,l=r.position.y-.2*e.options.height,c=Math.abs(a)+Math.abs(l);o.shadowColor="rgba(0,0,0,0.15)",o.shadowOffsetX=.05*a,o.shadowOffsetY=.05*l,o.shadowBlur=1+12*Math.min(1,c/1e3),o.fill(),o.shadowColor=null,o.shadowOffsetX=null,o.shadowOffsetY=null,o.shadowBlur=null}}},o.bodies=function(e,t,n){var o,i,r,s,a=n,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if(o=t[r],o.render.visible)for(s=o.parts.length>1?1:0;s<o.parts.length;s++)if(i=o.parts[s],i.render.visible){if(l.showSleeping&&o.isSleeping?a.globalAlpha=.5*i.render.opacity:1!==i.render.opacity&&(a.globalAlpha=i.render.opacity),i.render.sprite&&i.render.sprite.texture&&!l.wireframes){var u=i.render.sprite,d=p(e,u.texture);a.translate(i.position.x,i.position.y),a.rotate(i.angle),a.drawImage(d,d.width*-u.xOffset*u.xScale,d.height*-u.yOffset*u.yScale,d.width*u.xScale,d.height*u.yScale),
    a.rotate(-i.angle),a.translate(-i.position.x,-i.position.y)}else{if(i.circleRadius)a.beginPath(),a.arc(i.position.x,i.position.y,i.circleRadius,0,2*Math.PI);else{a.beginPath(),a.moveTo(i.vertices[0].x,i.vertices[0].y);for(var f=1;f<i.vertices.length;f++)!i.vertices[f-1].isInternal||c?a.lineTo(i.vertices[f].x,i.vertices[f].y):a.moveTo(i.vertices[f].x,i.vertices[f].y),i.vertices[f].isInternal&&!c&&a.moveTo(i.vertices[(f+1)%i.vertices.length].x,i.vertices[(f+1)%i.vertices.length].y);a.lineTo(i.vertices[0].x,i.vertices[0].y),a.closePath()}l.wireframes?(a.lineWidth=1,a.strokeStyle="#bbb",a.stroke()):(a.fillStyle=i.render.fillStyle,i.render.lineWidth&&(a.lineWidth=i.render.lineWidth,a.strokeStyle=i.render.strokeStyle,a.stroke()),a.fill())}a.globalAlpha=1}},o.bodyWireframes=function(e,t,n){var o,i,r,s,a,l=n,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if(o=t[r],o.render.visible)for(a=o.parts.length>1?1:0;a<o.parts.length;a++){for(i=o.parts[a],l.moveTo(i.vertices[0].x,i.vertices[0].y),
    s=1;s<i.vertices.length;s++)!i.vertices[s-1].isInternal||c?l.lineTo(i.vertices[s].x,i.vertices[s].y):l.moveTo(i.vertices[s].x,i.vertices[s].y),i.vertices[s].isInternal&&!c&&l.moveTo(i.vertices[(s+1)%i.vertices.length].x,i.vertices[(s+1)%i.vertices.length].y);l.lineTo(i.vertices[0].x,i.vertices[0].y)}l.lineWidth=1,l.strokeStyle="#bbb",l.stroke()},o.bodyConvexHulls=function(e,t,n){var o,i,r,s=n;for(s.beginPath(),i=0;i<t.length;i++)if(o=t[i],o.render.visible&&1!==o.parts.length){for(s.moveTo(o.vertices[0].x,o.vertices[0].y),r=1;r<o.vertices.length;r++)s.lineTo(o.vertices[r].x,o.vertices[r].y);s.lineTo(o.vertices[0].x,o.vertices[0].y)}s.lineWidth=1,s.strokeStyle="rgba(255,255,255,0.2)",s.stroke()},o.vertexNumbers=function(e,t,n){var o,i,r,s=n;for(o=0;o<t.length;o++){var a=t[o].parts;for(r=a.length>1?1:0;r<a.length;r++){var l=a[r];for(i=0;i<l.vertices.length;i++)s.fillStyle="rgba(255,255,255,0.2)",s.fillText(o+"_"+i,l.position.x+.8*(l.vertices[i].x-l.position.x),l.position.y+.8*(l.vertices[i].y-l.position.y));
    }}},o.mousePosition=function(e,t,n){var o=n;o.fillStyle="rgba(255,255,255,0.8)",o.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},o.bodyBounds=function(e,t,n){var o=n,i=(e.engine,e.options);o.beginPath();for(var r=0;r<t.length;r++){var s=t[r];if(s.render.visible)for(var a=t[r].parts,l=a.length>1?1:0;l<a.length;l++){var c=a[l];o.rect(c.bounds.min.x,c.bounds.min.y,c.bounds.max.x-c.bounds.min.x,c.bounds.max.y-c.bounds.min.y)}}i.wireframes?o.strokeStyle="rgba(255,255,255,0.08)":o.strokeStyle="rgba(0,0,0,0.1)",o.lineWidth=1,o.stroke()},o.bodyAxes=function(e,t,n){var o,i,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),i=0;i<t.length;i++){var c=t[i],u=c.parts;if(c.render.visible)if(l.showAxes)for(r=u.length>1?1:0;r<u.length;r++)for(o=u[r],s=0;s<o.axes.length;s++){var d=o.axes[s];a.moveTo(o.position.x,o.position.y),a.lineTo(o.position.x+20*d.x,o.position.y+20*d.y)}else for(r=u.length>1?1:0;r<u.length;r++)for(o=u[r],s=0;s<o.axes.length;s++)a.moveTo(o.position.x,o.position.y),
    a.lineTo((o.vertices[0].x+o.vertices[o.vertices.length-1].x)/2,(o.vertices[0].y+o.vertices[o.vertices.length-1].y)/2)}l.wireframes?(a.strokeStyle="indianred",a.lineWidth=1):(a.strokeStyle="rgba(255, 255, 255, 0.4)",a.globalCompositeOperation="overlay",a.lineWidth=2),a.stroke(),a.globalCompositeOperation="source-over"},o.bodyPositions=function(e,t,n){var o,i,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),r=0;r<t.length;r++)if(o=t[r],o.render.visible)for(s=0;s<o.parts.length;s++)i=o.parts[s],a.arc(i.position.x,i.position.y,3,0,2*Math.PI,!1),a.closePath();for(l.wireframes?a.fillStyle="indianred":a.fillStyle="rgba(0,0,0,0.5)",a.fill(),a.beginPath(),r=0;r<t.length;r++)o=t[r],o.render.visible&&(a.arc(o.positionPrev.x,o.positionPrev.y,2,0,2*Math.PI,!1),a.closePath());a.fillStyle="rgba(255,165,0,0.8)",a.fill()},o.bodyVelocity=function(e,t,n){var o=n;o.beginPath();for(var i=0;i<t.length;i++){var r=t[i];r.render.visible&&(o.moveTo(r.position.x,r.position.y),o.lineTo(r.position.x+2*(r.position.x-r.positionPrev.x),r.position.y+2*(r.position.y-r.positionPrev.y)));
    }o.lineWidth=3,o.strokeStyle="cornflowerblue",o.stroke()},o.bodyIds=function(e,t,n){var o,i,r=n;for(o=0;o<t.length;o++)if(t[o].render.visible){var s=t[o].parts;for(i=s.length>1?1:0;i<s.length;i++){var a=s[i];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(a.id,a.position.x+10,a.position.y-10)}}},o.collisions=function(e,t,n){var o,i,r,s,a=n,l=e.options;for(a.beginPath(),r=0;r<t.length;r++)if(o=t[r],o.isActive)for(i=o.collision,s=0;s<o.activeContacts.length;s++){var c=o.activeContacts[s],u=c.vertex;a.rect(u.x-1.5,u.y-1.5,3.5,3.5)}for(l.wireframes?a.fillStyle="rgba(255,255,255,0.7)":a.fillStyle="orange",a.fill(),a.beginPath(),r=0;r<t.length;r++)if(o=t[r],o.isActive&&(i=o.collision,o.activeContacts.length>0)){var d=o.activeContacts[0].vertex.x,p=o.activeContacts[0].vertex.y;2===o.activeContacts.length&&(d=(o.activeContacts[0].vertex.x+o.activeContacts[1].vertex.x)/2,p=(o.activeContacts[0].vertex.y+o.activeContacts[1].vertex.y)/2),i.bodyB===i.supports[0].body||i.bodyA.isStatic===!0?a.moveTo(d-8*i.normal.x,p-8*i.normal.y):a.moveTo(d+8*i.normal.x,p+8*i.normal.y),
    a.lineTo(d,p)}l.wireframes?a.strokeStyle="rgba(255,165,0,0.7)":a.strokeStyle="orange",a.lineWidth=1,a.stroke()},o.separations=function(e,t,n){var o,i,r,s,a,l=n,c=e.options;for(l.beginPath(),a=0;a<t.length;a++)if(o=t[a],o.isActive){i=o.collision,r=i.bodyA,s=i.bodyB;var u=1;s.isStatic||r.isStatic||(u=.5),s.isStatic&&(u=0),l.moveTo(s.position.x,s.position.y),l.lineTo(s.position.x-i.penetration.x*u,s.position.y-i.penetration.y*u),u=1,s.isStatic||r.isStatic||(u=.5),r.isStatic&&(u=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+i.penetration.x*u,r.position.y+i.penetration.y*u)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},o.grid=function(e,t,n){var o=n,r=e.options;r.wireframes?o.strokeStyle="rgba(255,180,0,0.1)":o.strokeStyle="rgba(255,180,0,0.5)",o.beginPath();for(var s=i.keys(t.buckets),a=0;a<s.length;a++){var l=s[a];if(!(t.buckets[l].length<2)){var c=l.split(/C|R/);o.rect(.5+parseInt(c[1],10)*t.bucketWidth,.5+parseInt(c[2],10)*t.bucketHeight,t.bucketWidth,t.bucketHeight);
    }}o.lineWidth=1,o.stroke()},o.inspector=function(e,t){var n,o=(e.engine,e.selected),i=e.render,r=i.options;if(r.hasBounds){var s=i.bounds.max.x-i.bounds.min.x,a=i.bounds.max.y-i.bounds.min.y,l=s/i.options.width,c=a/i.options.height;t.scale(1/l,1/c),t.translate(-i.bounds.min.x,-i.bounds.min.y)}for(var u=0;u<o.length;u++){var d=o[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),d.type){case"body":n=d.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var p=d.pointA;d.bodyA&&(p=d.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),
    t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},d=function(e){var t=e.getContext("2d"),n=window.devicePixelRatio||1,o=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return n/o},p=function(e,t){var n=e.textures[t];return n?n:(n=e.textures[t]=new Image,n.src=t,n)},f=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},{"../body/Composite":2,"../collision/Grid":6,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../geometry/Bounds":26,"../geometry/Vector":28}],32:[function(e,t,n){var o={};t.exports=o;var i=e("../geometry/Bounds"),r=e("../body/Composite"),s=e("../core/Common"),a=e("../core/Events"),l=e("../geometry/Vector");
    !function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(s.now())},1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),o.create=function(e){s.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");var t={controller:o,engine:null,element:null,frameRequestId:null,canvas:null,renderer:null,container:null,spriteContainer:null,pixiOptions:null,options:{width:800,height:600,background:"#fafafa",wireframeBackground:"#222",hasBounds:!1,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1}},n=s.extend(t,e),i=!n.options.wireframes&&"transparent"===n.options.background;return n.pixiOptions=n.pixiOptions||{
    view:n.canvas,transparent:i,antialias:!0,backgroundColor:e.background},n.mouse=e.mouse,n.engine=e.engine,n.renderer=n.renderer||new PIXI.WebGLRenderer(n.options.width,n.options.height,n.pixiOptions),n.container=n.container||new PIXI.Container,n.spriteContainer=n.spriteContainer||new PIXI.Container,n.canvas=n.canvas||n.renderer.view,n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.options.width,y:n.options.height}},a.on(n.engine,"beforeUpdate",function(){o.clear(n)}),n.textures={},n.sprites={},n.primitives={},n.container.addChild(n.spriteContainer),s.isElement(n.element)?n.element.appendChild(n.canvas):s.warn('No "render.element" passed, "render.canvas" was not inserted into document.'),n.canvas.oncontextmenu=function(){return!1},n.canvas.onselectstart=function(){return!1},n},o.run=function(t){!function n(i){t.frameRequestId=e(n),o.world(t)}()},o.stop=function(e){t(e.frameRequestId)},o.clear=function(e){for(var t=e.container,n=e.spriteContainer;t.children[0];)t.removeChild(t.children[0]);for(;n.children[0];)n.removeChild(n.children[0]);
    var o=e.sprites["bg-0"];e.textures={},e.sprites={},e.primitives={},e.sprites["bg-0"]=o,o&&t.addChildAt(o,0),e.container.addChild(e.spriteContainer),e.currentBackground=null,t.scale.set(1,1),t.position.set(0,0)},o.setBackground=function(e,t){if(e.currentBackground!==t){var n=t.indexOf&&t.indexOf("#")!==-1,o=e.sprites["bg-0"];if(n){var i=s.colorToNumber(t);e.renderer.backgroundColor=i,o&&e.container.removeChild(o)}else if(!o){var r=u(e,t);o=e.sprites["bg-0"]=new PIXI.Sprite(r),o.position.x=0,o.position.y=0,e.container.addChildAt(o,0)}e.currentBackground=t}},o.world=function(e){var t,n=e.engine,s=n.world,a=e.renderer,c=e.container,u=e.options,d=r.allBodies(s),p=r.allConstraints(s),f=[];u.wireframes?o.setBackground(e,u.wireframeBackground):o.setBackground(e,u.background);var m=e.bounds.max.x-e.bounds.min.x,v=e.bounds.max.y-e.bounds.min.y,y=m/e.options.width,g=v/e.options.height;if(u.hasBounds){for(t=0;t<d.length;t++){var x=d[t];x.render.sprite.visible=i.overlaps(x.bounds,e.bounds)}for(t=0;t<p.length;t++){
    var h=p[t],b=h.bodyA,w=h.bodyB,S=h.pointA,C=h.pointB;b&&(S=l.add(b.position,h.pointA)),w&&(C=l.add(w.position,h.pointB)),S&&C&&(i.contains(e.bounds,S)||i.contains(e.bounds,C))&&f.push(h)}c.scale.set(1/y,1/g),c.position.set(-e.bounds.min.x*(1/y),-e.bounds.min.y*(1/g))}else f=p;for(t=0;t<d.length;t++)o.body(e,d[t]);for(t=0;t<f.length;t++)o.constraint(e,f[t]);a.render(c)},o.constraint=function(e,t){var n=(e.engine,t.bodyA),o=t.bodyB,i=t.pointA,r=t.pointB,a=e.container,l=t.render,c="c-"+t.id,u=e.primitives[c];return u||(u=e.primitives[c]=new PIXI.Graphics),l.visible&&t.pointA&&t.pointB?(s.indexOf(a.children,u)===-1&&a.addChild(u),u.clear(),u.beginFill(0,0),u.lineStyle(l.lineWidth,s.colorToNumber(l.strokeStyle),1),n?u.moveTo(n.position.x+i.x,n.position.y+i.y):u.moveTo(i.x,i.y),o?u.lineTo(o.position.x+r.x,o.position.y+r.y):u.lineTo(r.x,r.y),void u.endFill()):void u.clear()},o.body=function(e,t){var o=(e.engine,t.render);if(o.visible)if(o.sprite&&o.sprite.texture){var i="b-"+t.id,r=e.sprites[i],a=e.spriteContainer;
    r||(r=e.sprites[i]=n(e,t)),s.indexOf(a.children,r)===-1&&a.addChild(r),r.position.x=t.position.x,r.position.y=t.position.y,r.rotation=t.angle,r.scale.x=o.sprite.xScale||1,r.scale.y=o.sprite.yScale||1}else{var l="b-"+t.id,u=e.primitives[l],d=e.container;u||(u=e.primitives[l]=c(e,t),u.initialAngle=t.angle),s.indexOf(d.children,u)===-1&&d.addChild(u),u.position.x=t.position.x,u.position.y=t.position.y,u.rotation=t.angle-u.initialAngle}};var n=function(e,t){var n=t.render,o=n.sprite.texture,i=u(e,o),r=new PIXI.Sprite(i);return r.anchor.x=t.render.sprite.xOffset,r.anchor.y=t.render.sprite.yOffset,r},c=function(e,t){var n,o=t.render,i=e.options,r=new PIXI.Graphics,a=s.colorToNumber(o.fillStyle),l=s.colorToNumber(o.strokeStyle),c=s.colorToNumber(o.strokeStyle),u=s.colorToNumber("#bbb"),d=s.colorToNumber("#CD5C5C");r.clear();for(var p=t.parts.length>1?1:0;p<t.parts.length;p++){n=t.parts[p],i.wireframes?(r.beginFill(0,0),r.lineStyle(1,u,1)):(r.beginFill(a,1),r.lineStyle(o.lineWidth,l,1)),r.moveTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y);
    for(var f=1;f<n.vertices.length;f++)r.lineTo(n.vertices[f].x-t.position.x,n.vertices[f].y-t.position.y);r.lineTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y),r.endFill(),(i.showAngleIndicator||i.showAxes)&&(r.beginFill(0,0),i.wireframes?r.lineStyle(1,d,1):r.lineStyle(1,c),r.moveTo(n.position.x-t.position.x,n.position.y-t.position.y),r.lineTo((n.vertices[0].x+n.vertices[n.vertices.length-1].x)/2-t.position.x,(n.vertices[0].y+n.vertices[n.vertices.length-1].y)/2-t.position.y),r.endFill())}return r},u=function(e,t){var n=e.textures[t];return n||(n=e.textures[t]=PIXI.Texture.fromImage(t)),n}}()},{"../body/Composite":2,"../core/Common":14,"../core/Events":16,"../geometry/Bounds":26,"../geometry/Vector":28}]},{},[30])(30)});
    







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
