novi CHAT


make 3 groups of 3 color schemes, variables synchronized in css and js with getComputedStyle(), then change colors by group at each browser window reload

To make three groups of three color schemes, you can create variables for each color in CSS and JavaScript and use the getComputedStyle() method to synchronize the values. For example, in your CSS file you can have the following code:

Copy code
:root {
  --primary-color: #ff0000;
  --secondary-color: #00ff00;
  --tertiary-color: #0000ff;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

h1 {
  color: var(--tertiary-color);
}
In your JavaScript file, you can use the getComputedStyle() method to get the computed values for each of the color variables and store them in variables, like this:

Copy code
const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color');
const tertiaryColor = getComputedStyle(document.body).getPropertyValue('--tertiary-color');
Once you have the values stored in variables, you can use them to create three groups of three color schemes. For example:

Copy code
const colorSchemes = [
  [primaryColor, secondaryColor, tertiaryColor],
  [secondaryColor, tertiaryColor, primaryColor],
  [tertiaryColor, primaryColor, secondaryColor],
];
This will create an array of three color schemes, where each scheme is an array containing the three color variables in a different order.

To change the colors by group at each browser window reload, you can use the Math.random() method to generate a random number between 0 and 2, and use that number to select a color scheme from the colorSchemes array. Then, you can use the document.documentElement.style.setProperty() method to set the values of the color variables in the selected color scheme. For example:

Copy code
const randomIndex = Math.floor(Math.random() * 3);
const selectedColorScheme = colorSchemes[randomIndex];

document.documentElement.style.setProperty('--primary-color', selectedColorScheme[0]);
document.documentElement.style.setProperty('--secondary-color', selectedColorScheme[1]);
document.documentElement.style.setProperty('--tertiary-color', selectedColorScheme[2]);
This code will select a random color scheme from the colorSchemes array and set the values of the color variables to the colors in the selected scheme. This will change the colors of the elements on your page that use the color variables.




fs
make 3 groups of 3 colour schemes, variables synchronised in css and js with getComputedStyle(), then change colour group at each window refresh


To make three groups of three color schemes, you can create variables for each color in CSS and JavaScript and use the getComputedStyle() method to synchronize the values. For example, in your CSS file you can have the following code:

Copy code
:root {
  --primary-color: #ff0000;
  --secondary-color: #00ff00;
  --tertiary-color: #0000ff;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

h1 {
  color: var(--tertiary-color);
}
In your JavaScript file, you can use the getComputedStyle() method to get the computed values for each of the color variables and store them in variables, like this:

Copy code
const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color');
const tertiaryColor = getComputedStyle(document.body).getPropertyValue('--tertiary-color');
Once you have the values stored in variables, you can use them to create three groups of three color schemes. For example:

Copy code
const colorSchemes = [
  [primaryColor, secondaryColor, tertiaryColor],
  [secondaryColor, tertiaryColor, primaryColor],
  [tertiaryColor, primaryColor, secondaryColor],
];
This will create an array of three color schemes, where each scheme is an array containing the three color variables in a different order.

To change the color group at each window refresh, you can use the Math.random() method to generate a random number between 0 and 2, and use that number to select a color scheme from the colorSchemes array. Then, you can use the document.documentElement.style.setProperty() method to set the values of the color variables in the selected color scheme. For example:

Copy code
const randomIndex = Math.floor(Math.random() * 3);
const selectedColorScheme = colorSchemes[randomIndex];

document.documentElement.style.setProperty('--primary-color', selectedColorScheme[0]);
document.documentElement.style.setProperty('--secondary-color', selectedColorScheme[1]);
document.documentElement.style.setProperty('--tertiary-color', selectedColorScheme[2]);
This code will select a random color scheme from the colorSchemes array and set the values of the color variables to the colors in the selected scheme. This will change the colors of the elements on your page that use the color variables.




fs
make 3 groups of 3 colour schemes, variables synchronised in css and js with getComputedStyle(), then change colour group at each window reload with this code .color-scheme-1 {
    --bg-color: #09ed0c;
    --text-color: #00bdfb;
    --link-color: #f78400;
  }
  
  .color-scheme-2 {
    --bg-color: #000000;
    --text-color: #ffffff;
    --link-color: #0000ff;
  }
  
  .color-scheme-3 {
    --bg-color: #ffffff;
    --text-color: #000000;
    --link-color: #ff00cc;
  }

  var colorScheme1 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-1');
var colorScheme2 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-2');
var colorScheme3 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-3');
 

    // Remove the current color scheme classes
    document.documentElement.classList.remove('color-scheme-1');
    document.documentElement.classList.remove('color-scheme-2');
    document.documentElement.classList.remove('color-scheme-3');
  
    // Choose a new color scheme at random and add the corresponding class
    var colorScheme = Math.floor(Math.random() * 3) + 1;
    document.documentElement.classList.add('color-scheme-' + colorScheme);

To use the provided CSS code to create three groups of color schemes, you can add the .color-scheme-1, .color-scheme-2, and .color-scheme-3 classes to the :root element in your CSS file. This will define the values for the --bg-color, --text-color, and --link-color variables for each color scheme.

In your JavaScript file, you can use the getComputedStyle() method to get the values for the color scheme variables and store them in variables. For example:

Copy code
const colorScheme1 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-1');
const colorScheme2 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-2');
const colorScheme3 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-3');
Once you have the values for the color scheme variables, you can create three groups of three color schemes by storing the values in arrays. For example:

Copy code
const colorSchemes = [
  [colorScheme1, colorScheme2, colorScheme3],
  [colorScheme2, colorScheme3, colorScheme1],
  [colorScheme3, colorScheme1, colorScheme2],
];
This will create an array of three color schemes, where each scheme is an array containing the three color variables in a different order.

To change the color group at each window reload, you can use the code provided in the question to generate a random number between 1 and 3, and add the corresponding color scheme class to the document.documentElement element. This will change the values of the color variables and update the colors of the elements on your page that use the color variables.

Here is an example of how the complete code might look:

Copy code
:root {
  /* Add the color scheme classes to the :root element */
  &.color-scheme-1 {
    --bg-color: #09ed0c;
    --text-color: #00bdfb;
    --link-color: #f78400;
  }

  &.color-scheme-2 {
    --bg-color: #000000;
    --text-color: #ffffff;
    --link-color: #0000ff;
  }

  &.color-scheme-3 {
    --bg-color: #ffffff;
    --text-color: #000000;
    --link-color: #ff00cc;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

a {
  color: var(--link-color);
}
Copy code
const colorScheme1 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-1');
const colorScheme2 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-2');
const colorScheme3 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-3');

const colorSchemes = [
  [colorScheme



fs
code is not finished

Here is the complete code:

Copy code
:root {
  /* Add the color scheme classes to the :root element */
  &.color-scheme-1 {
    --bg-color: #09ed0c;
    --text-color: #00bdfb;
    --link-color: #f78400;
  }

  &.color-scheme-2 {
    --bg-color: #000000;
    --text-color: #ffffff;
    --link-color: #0000ff;
  }

  &.color-scheme-3 {
    --bg-color: #ffffff;
    --text-color: #000000;
    --link-color: #ff00cc;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

a {
  color: var(--link-color);
}
Copy code
const colorScheme1 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-1');
const colorScheme2 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-2');
const colorScheme3 = getComputedStyle(document.documentElement).getPropertyValue('--color-scheme-3');

const colorSchemes = [
  [colorScheme1, colorScheme2, colorScheme3],
  [colorScheme2, colorScheme3, colorScheme1],
  [colorScheme3, colorScheme1, colorScheme2],
];

// Remove the current color scheme classes
document.documentElement.classList.remove('color-scheme-1');
document.documentElement.classList.remove('color-scheme-2');
document.documentElement.classList.remove('color-scheme-3');

// Choose a new color scheme at random and add the corresponding class
var colorScheme = Math.floor(Math.random() * 3) + 1;
document.documentElement.classList.add('color-scheme-' + colorScheme);
This code will create three groups of three color schemes, synchronize the values of the color variables in CSS and JavaScript using the getComputedStyle() method, and change the color group at each window reload by adding a new color scheme class to the document.documentElement element.




fs
how to use it on this code   var render = Matter.Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            pixeRatio: 1,
            background: '#000000',
            wireframes: false,
            showAngleIndicator: false,
            //  showDebug: true,
            }
        });

To use the color scheme on the provided code, you can use the document.documentElement.style.setProperty() method to set the values of the color variables in the selected color scheme. For example:

Copy code
const randomIndex = Math.floor(Math.random() * 3);
const selectedColorScheme = colorSchemes[randomIndex];

document.documentElement.style.setProperty('--bg-color', selectedColorScheme[0]);
document.documentElement.style.setProperty('--text-color', selectedColorScheme[1]);
document.documentElement.style.setProperty('--link-color', selectedColorScheme[2]);
This code will select a random color scheme from the colorSchemes array and set the values of the color variables to the colors in the selected scheme.

Once the color variables have been set, you can use them in the render object to set the background color and the colors of other elements in the scene. For example:

Copy code
var render = Matter.Render.create({
  canvas: canvas,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    pixeRatio: 1,
    background: getComputedStyle(document.documentElement).getPropertyValue('--bg-color'),
    wireframes: false,
    showAngleIndicator: false,
    //  showDebug: true,
  }
});
This code will use the --bg-color variable to set the background color of the scene. You can also use the --text-color and --link-color variables to set the colors of other elements in the scene.