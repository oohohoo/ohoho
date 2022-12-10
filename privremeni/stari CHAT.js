CILI CHAT

To change the color scheme on every browser window refresh, you can use the Math.random() function to generate a random number between 0 and 1, and then use a series of if statements to check the value of the random number and set the color scheme accordingly. For example:

Copy code
var rand = Math.random();
if (rand < 0.25) {
  // set color scheme 1
  o1.render.fillStyle = '#8E8E8E';
  render.options.background = '#1E1E1C';
} else if (rand < 0.5) {
  // set color scheme 2
  o1.render.fillStyle = '#F0F0F0';
  render.options.background = '#CCCCCC';
} else if (rand < 0.75) {
  // set color scheme 3
  o1.render.fillStyle = '#000000';
  render.options.background = '#FFFFFF';
} else {
  // set color scheme 4
  o1.render.fillStyle = '#FF0000';
  render.options.background = '#00FF00';
}
In this example, we generate a random number and then use a series of if statements to check its value and set the color scheme accordingly. You can add more if statements and color schemes as needed.




fs
can i define colours in variables in previous code?

Yes, you can define colors in variables in the previous code. Instead of setting the colors directly in the code, you can create variables to hold the colors, and then use the variables to set the colors. For example:

Copy code
var color1 = '#8E8E8E';
var color2 = '#1E1E1C';
var color3 = '#F0F0F0';
var color4 = '#CCCCCC';

var rand = Math.random();
if (rand < 0.25) {
  // set color scheme 1
  o1.render.fillStyle = color1;
  render.options.background = color2;
} else if (rand < 0.5) {
  // set color scheme 2
  o1.render.fillStyle = color3;
  render.options.background = color4;
}
In this example, we have defined four variables to hold the colors, and then we use those variables to set the colors in the code. This makes it easier to change the colors later, because you only need to change the values in the variables, instead of searching for and replacing the colors in the code.




fs
can i also use same variables in css?

Yes, you can use the same variables in CSS as well. To use a variable in CSS, you can define the variable in a :root selector, and then use the var() function to reference the variable in your CSS rules. For example:

Copy code
:root {
  --color1: #8E8E8E;
  --color2: #1E1E1C;
  --color3: #F0F0F0;
  --color4: #CCCCCC;
}

.element1 {
  color: var(--color1);
  background-color: var(--color2);
}

.element2 {
  color: var(--color3);
  background-color: var(--color4);
}
In this example, we have defined four variables in the :root selector, and then we use the var() function to reference those variables in the CSS rules for the .element1 and .element2 classes. You can use the var() function in any CSS property that accepts a color value.




fs
can js and css variables be synchronised?

Yes, JavaScript and CSS variables can be synchronized by using the getComputedStyle() method in JavaScript to get the computed value of a CSS variable, and then using that value in JavaScript. For example:

Copy code
var color1 = getComputedStyle(document.documentElement).getPropertyValue('--color1');

// use 'color1' in JavaScript code
In this example, we use the getComputedStyle() method to get the computed value of the --color1 CSS variable, and then we store that value in the color1 JavaScript variable. This allows us to use the same value in both our CSS and JavaScript code.




fs
can you combine all this code into one piece?

Yes, you can combine all of this code into a single piece of code. Here is an example of how that might look:

Copy code
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
In this example, we have defined the CSS variables in the :root selector, and then we have defined the corresponding JavaScript variables by using the getComputedStyle() method. We have also combined the code for creating the o1 object and the render object, and added the code for generating a random number and changing the color scheme based on that number. This code should produce the same result as the previous examples.




fs
can colour scheme in this code change on every browser refresh?

Yes, the color scheme in this code can change on every browser refresh. To do this, you can use the window.onload event to run the code for changing the color scheme when the page loads. For example:

Copy code
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
In this example, we have added the code for changing the color scheme inside a function that is executed when the window.onload event is triggered. This means that the code will run when the page loads, and the color scheme will be changed accordingly. This will cause the color scheme to change on every browser refresh.




fs
can you combine last code with previous?

Yes, you can combine the last code with the previous code. Here is an example of how that might look:

Copy code
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
In this example, we have combined the previous code with the last code. This code should define the CSS and JavaScript variables, create the o1 object and the render object, and then change the color scheme on every browser refresh. You can add more color schemes and if statements as needed.




fs
change code to have 15 colours

To change the code to have 15 colors, you can add more if statements to the window.onload function, and specify the colors for each color scheme. Here is an example of how that might look:

Copy code
window.onload = function() {
  // generate random number
  var rand = Math.random();

  // change color scheme based on random number
  if (rand < 0.0625) {
    // set color scheme 1
    o1.render.fillStyle = '#8E8E8E';
    render.options.background = '#1E1E1C';
  } else if (rand < 0.125) {
    // set color scheme 2
    o1.render.fillStyle = '#F0F0F0';
    render.options.background = '#CCCCCC';
  } else if (rand < 0.1875) {
    // set color scheme 3
    o1.render.fillStyle = '#000000';
    render.options.background = '#FFFFFF';
  } else if (rand < 0.25) {
    // set color scheme 4
    o1.render.fillStyle = '#FF0000';
    render.options.background = '#00FF00';
  } else if (rand < 0.3125) {
    // set color scheme 5
    o1.render.fillStyle = '#0000FF';
    render.options.background = '#FF00FF';
  } else if (rand < 0.375) {
    // set color scheme 6
    o1.render.fillStyle = '#00FFFF';
    render.options.background = '#FFFF00';
  } else if (rand < 0.4375) {
    // set color scheme 7
    o1.render.fillStyle = '#C0C0C0';
    render.options.background = '#808080';
  } else if (rand < 0.5) {
    // set color scheme 8
    o1.render.fillStyle = '#808080';
    render.options.background = '#C0C0C0';
  } else if (rand < 0.5625) {
    // set color scheme 9
    o1.render.fillStyle = '#800000';
    render.options.background = '#008000';
  } else if (rand < 0.625) {
    // set color scheme 10
    o1.render.fillStyle = '#808000';
    render.options.background = '#008080';
  } else if (rand < 0.6875) {
    // set color scheme 11
    o1.render.fillStyle = '#800080';
    render.options.background = '#008080';
  } else if (rand < 0.75) {
    // set color scheme 12
    o1.render.fillStyle = '#008080';
    render.options.background = '#800080';
  } else if (rand < 0.8125) {
    // set color scheme 13
    o1.render.fillStyle = '#000080';
    render.options.background = '#800080';
  } else if (rand < 0.875) {
    // set color scheme 14
    o1.render.



fs
increase colours to 6 in this code and change code to use colours in group of 3 as separate colour scheme // define CSS variables
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


