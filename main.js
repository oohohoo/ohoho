
   //loco scroll
   
   locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    getDirection: true,
    scrollFromAnywhere: true,
    touchMultiplier: 4,
   // scrollbarContainer: document.querySelector('#primary'),
    smartphone: {
          smooth: true,
      },
      tablet: {
          smooth: true,
      
      }
  });
/*
===
CANVAS BLOB
===
*/

let canvas, ctx;
let render, init;
let blob;

class Blob {
  constructor() {
    this.points = [];
  }
  
  init() {
    for(let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * ( i + 1 ), this);
      // point.acceleration = -1 + Math.random() * 2;
      this.push(point);
    }
  }
  
  render() {
    let canvas = this.canvas;
    let ctx = this.ctx;
    let position = this.position;
    let pointsArray = this.points;
    let radius = this.radius;
    let points = this.numPoints;
    let divisional = this.divisional;
    let center = this.center;
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    pointsArray[0].solveWith(pointsArray[points-1], pointsArray[1]);

    let p0 = pointsArray[points-1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo( (p0.x + p1.x) / 2, (p0.y + p1.y) / 2 );

    for(let i = 1; i < points; i++) {
      
      pointsArray[i].solveWith(pointsArray[i-1], pointsArray[i+1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(p2.x, p2.y);

      ctx.fillStyle = '#000000';
      // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    // ctx.lineTo(_p2.x, _p2.y);

    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = '#000000';
    // ctx.stroke();
    
/*
    ctx.fillStyle = '#000000';
    if(this.mousePos) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
    }
*/
    requestAnimationFrame(this.render.bind(this));
  }
  
  push(item) {
    if(item instanceof Point) {
      this.points.push(item);
    }
  }
  
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || '#B6FA00';
  }
  
  set canvas(value) {
    if(value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = canvas;
      this.ctx = this._canvas.getContext('2d');
    }
  }
  get canvas() {
    return this._canvas;
  }
  
  set numPoints(value) {
    if(value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }
  
  set radius(value) {
    if(value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 300;
  }
  
  set position(value) {
    if(typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }
  
  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }
  
  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }
  
  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }
}

class Point {
  constructor(azimuth, parent) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = { 
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };
    
    this.acceleration = -0.3 + Math.random() * 0.6;
  }
  
  solveWith(leftPoint, rightPoint) {
    this.acceleration = (-0.3 * this.radialEffect + ( leftPoint.radialEffect - this.radialEffect ) + ( rightPoint.radialEffect - this.radialEffect )) * this.elasticity - this.speed * this.friction;
  }
  
  set acceleration(value) {
    if(typeof value == 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }
  
  set speed(value) {
    if(typeof value == 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }
  
  set radialEffect(value) {
    if(typeof value == 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }
  
  get position() {
    return { 
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect), 
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect) 
    }
  }
  
  get components() {
    return this._components;
  }

  set elasticity(value) {
    if(typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }
  set friction(value) {
    if(typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0085;
  }
}

blob = new Blob;

init = function() {
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  let resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  let oldMousePoint = { x: 0, y: 0};
  let hover = false;
  let mouseMove = function(e) {
    
    let pos = blob.center;
    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt((diff.x * diff.x) + (diff.y * diff.y));
    let angle = null;
    
    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };
    
    if(dist < blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
      // blob.color = '#77FF00';
    } else if(dist > blob.radius && hover === true){ 
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
      blob.color = null;
    }
    
    if(typeof angle == 'number') {
      
      let nearestPoint = null;
      let distanceFromPoint = 100;
      
      blob.points.forEach((point)=> {
        if(Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
        
      });
      
      if(nearestPoint) {
        let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        strength = Math.sqrt((strength.x * strength.x) + (strength.y * strength.y)) * 10;
        if(strength > 100) strength = 100;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }
    
    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  }
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener('pointermove', mouseMove);
  
  blob.canvas = canvas;
  blob.init();
  blob.render();
}

init();
/*canvas.style.zIndex = 99;*/







// screen width and height
scr = {w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}
canvas.width = scr.w
canvas.height = scr.h



/*
====================================
RESIZE CANVAS IN VW
====================================
*/

function setUpCanvas() {
  canvas = document.getElementsByClassName("canvas_hangman")[0];
  ctx = canvas.getContext('2d');
  ctx.translate(0.5, 0.5);

  // Set display size (vw/vh).
  var sizeWidth = 80 * window.innerWidth / 100,
    sizeHeight = 100 * window.innerHeight / 100 || 766;

  //Setting the canvas site and width to be responsive 
  canvas.width = sizeWidth;
  canvas.height = sizeHeight;
  canvas.style.width = sizeWidth;
  canvas.style.height = sizeHeight;
}

window.onload = setUpCanvas();

console.log("HRESIZEDDD");
/*
====================================
DATE/TIME
====================================
*/

tday=new Array("S","M","T","W","T","F","S");
tmonth=new Array("01","02","03","04","05","06","07","08","09","10","11","12");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin
if(nsec<=9) nsec="0"+nsec;


document.getElementById('clockbox').innerHTML=""+tday[nday]+""+ndate+""+tmonth[nmonth]+""+nyear+" • "+nhour+""+nmin+""+nsec+"";

/*  document.getElementById('clockbox').innerHTML=""+nday+""+nmonth+""+nyear+" • "+nhour+""+nmin+""+nsec+""; */
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}



// FULLSCREEN MENU



let tl = gsap.timeline({ease: "power2.inOut"});



//document.addEventListener ('DOMContentLoaded', ()=> {

  // OPEN MENU FROM CLICK
  const openmenu = document.getElementById('openmenu');
  //const closemenu = document.getElementById('closemenu');

  
  
  
    // OPEN MENU
  const animation = gsap.timeline({defaults:{autoAlpha:1, ease: "power2.inOut"}})
  animation.paused( true ); 
  animation
  
 .to("canvas", {duration:2, scale:6})
 .to("#openmenu", {autoAlpha:0}, "<");
 
  // CLOSE MENU
  const aniout = gsap.timeline({defaults:{autoAlpha:0}})
  //aniout.paused( true ); 
  aniout
  //.from(".open", {autoAlpha:0, rotate:360, scale: 0.1})

  
  
  
  
  // EVENT LISTENERS
  openmenu.addEventListener("click", function(){ animation.restart(), animation.play(); });
  //closemenu.addEventListener("click", function(){aniout.restart(), aniout.play(); });
  
  
  
  
  
  
 