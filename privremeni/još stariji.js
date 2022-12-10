fillStyle: '#' + Math.floor(Math.random() * 16777215).toString(16),


how to dynamically change predefined multiple color scheme on background and foreground color on every browser window refresh in this code var o1 = Matter.Bodies.circle(50, 0.1, percentX(), { /* force: { x: 1, y: 0 }, */ density: 0.04, /* friction: 0.01, */ /* frictionAir: 0.00001, */ restitution: 0.5, render: { fillStyle: '#8E8E8E', strokeStyle: 'black', lineWidth: 0 } }); var render = Matter.Render.create({ canvas: canvas, engine: engine, options: { width: window.innerWidth, height: window.innerHeight, pixeRatio: 1, background: '#1E1E1C', wireframes: false, showAngleIndicator: false, // showDebug: true, } });


how to dynamically change predefined multiple color scheme on background and foreground color on every browser window refresh in this code var o1 = Matter.Bodies.circle(50, 0.1, percentX(), { /* force: { x: 1, y: 0 }, */ density: 0.04, /* friction: 0.01, */ /* frictionAir: 0.00001, */ restitution: 0.5, render: { fillStyle: '#8E8E8E', strokeStyle: 'black', lineWidth: 0 } }); var render = Matter.Render.create({ canvas: canvas, engine: engine, options: { width: window.innerWidth, height: window.innerHeight, pixeRatio: 1, background: '#1E1E1C', wireframes: false, showAngleIndicator: false, // showDebug: true, } });


I don't want random colours, but predefined colour combinations



// Generate a random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Create the circle object with the initial color scheme
  var o1 = Matter.Bodies.circle(50, 0.1, percentX(), {
    density: 0.04,
    restitution: 0.5,
    render: {
      fillStyle: '#8E8E8E',
      strokeStyle: 'black',
      lineWidth: 0
    }
  });
  
  // Create the Matter.js renderer with the initial background color
  var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: 1,
      background: '#1E1E1C',
      wireframes: false,
      showAngleIndicator: false
    }
  });
  
  // Function to update the colors of the circle and the background
  function updateColors() {
    // Generate new colors for the circle and the background
    var circleFill = randomColor();
    var circleStroke = randomColor();
    var background = randomColor();
  
    // Update the colors of the circle and the background
    o1.render.fillStyle = circleFill;
    o1.render.strokeStyle = circleStroke;
    render.options.background = background;
  }
  
  // Update the colors every time the page is refreshed
  window.addEventListener('beforeunload', updateColors);

  




  ///////////////////////


  // define CSS variables
:root {
    --color1: #8E8E8E;
    --color2: #1E1E1C;
    --color3: #F0F0F0;
    --color4: #CCCCCC;
  }
  
  // define JavaScript variables
  var color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1');
  var color2 = getComputedStyle(document.documentElement).getPropertyValue('--color2');
  var color3 = getComputedStyle(document.documentElement).getPropertyValue('--color3');
  var color4 = getComputedStyle(document.documentElement).getPropertyValue('--color4');
  
  // create object with initial color
  var o1 = Matter.Bodies.circle(50, 0.1, percentX(), {
    // force: { x: 1, y: 0 },
    density: 0.04,
    // friction: 0.01,
    // frictionAir: 0.00001,
    restitution: 0.5,
    render: {
      fillStyle: color1,
      strokeStyle: 'black',
      lineWidth: 0
    }
  });
  
  // create render with initial background color
  var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      pixeRatio: 1,
      background: color2,
      wireframes: false,
      showAngleIndicator: false,
      // showDebug: true,
    }
  });
  
  window.onload = function() {
    // generate random number
    var rand = Math.random();
  
    // change color scheme based on random number
    if (rand < 0.25) {
      // set color scheme 1
      o1.render.fillStyle = color1;
      render.options.background = color2;
    } else if (rand < 0.5) {
      // set color scheme 2
      o1.render.fillStyle = color3;
      render.options.background = color4;
    }
  }
  



  /////