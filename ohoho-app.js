window.addEventListener('load', function () {

/*
================================================================================
MATTER.JS
================================================================================
*/
    // FETCH CANVAS

    //var canvas = document.getElementById('world');
    let canvas = document.getElementById('world');
    let ctx = canvas.getContext("2d");
    var timeOutFunctionId;

    // RESIZE CANVAS 

    window.addEventListener("resize", function () {
        clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(draw, 200);

    });

    function draw() {

        // SETUP / MATTER.JS

        var engine = Matter.Engine.create({
            enableSleeping: true
        }),
        world = engine.world;
        // CREATE RENDERER

        var render = Matter.Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                pixeRatio: 1,
                background: '#1E1E1C',
                wireframes: false,
                showAngleIndicator: false,
              //  showDebug: true,
/*
                hasBounds: false,
                enabled: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: true,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
                */
            }
        });

        // OLD RESIZE
        /*
     window.addEventListener('resize', () => { 
    render.bounds.max.x = window.innerWidth;
      render.bounds.max.y = window.innerHeight;
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
       
     */

        /* render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
           Matter.Runner.run(engine);
        Matter.Render.run(render);
    });
       */

        // RESIZE O + H

        // resize O
        function percentX(percent) {
            return Math.round(9.8 / 100 * window.innerWidth);
        }
        // resize H
        function percentY(percent) {
            return Math.round(19.3 / 100 * window.innerWidth);
        }

        // ADD OBJECTS

        // ADD O-1

        var o1 = Matter.Bodies.circle(50, 0, percentX(), {
            /*  force: { x: 1, y: 0 }, */
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#8E8E8E',
                strokeStyle: 'black',
                lineWidth: 0
            }
        });
        Matter.World.add(world, o1);

        // ADD H-1
        var ball = Matter.Bodies.rectangle(300, 0.1, percentY(), percentY(), {
            density: 0.04,
            friction: 0.01,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#8E8E8E',
                strokeStyle: 'black',
                lineWidth: 0
            }
        });
        Matter.World.add(world, ball);


        // ADD O-2
        var ball = Matter.Bodies.circle(400, 0.1, percentX(), {
            density: 0.04,
            friction: 0.01,
            //  frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#8E8E8E',
                strokeStyle: 'black',
                lineWidth: 0
            }
        });
        Matter.World.add(world, ball);


        // ADD H-2
        var ball = Matter.Bodies.rectangle(600, 0.1, percentY(), percentY(), {
            density: 0.04,
            friction: 0.01,
            // frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#8E8E8E',
                strokeStyle: 'black',
                lineWidth: 0
            }
        });
        Matter.World.add(world, ball);

        // ADD O-2
        var ball = Matter.Bodies.circle(800, 0.1, percentX(), {
            density: 0.04,
            friction: 0.01,
            //  frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: '#8E8E8E',
                strokeStyle: 'black',
                lineWidth: 0
            }
        });
        Matter.World.add(world, ball);


        // ADD A FLOOR

        var floor = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, {
            isStatic: true, //An immovable object
            render: {
                visible: false,
                fillStyle: '#ff0000'
            }
        });
        Matter.World.add(world, floor);


        // ADD A LEFT WALL

        var leftWall = Matter.Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, {
            isStatic: true, //An immovable object
            render: {
                visible: false,
                fillStyle: '#ff0000'
            }
        });
        Matter.World.add(world, leftWall);

        // ADD A RIGHT WALL

        var rightWall = Matter.Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, {
            isStatic: true, //An immovable object
            render: {
                visible: false,
                fillStyle: '#ff0000'
            }
        });
        Matter.World.add(world, rightWall);

        // ADD A CEILING

        var ceiling = Matter.Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, {
            isStatic: true, //An immovable object
            render: {
                visible: false,
                fillStyle: '#ff0000'
            }
        });
        Matter.World.add(world, ceiling);


        // GRAVITY

        engine.world.gravity.y = 0.4;

        // MAKE INTERACTIVE / MOUSE

        var mouse = Matter.Mouse.create(render.canvas),
        mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.9,
                render: {
                    visible: false
                }
            }
        });
  

        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);


        Matter.World.add(world, mouseConstraint);

        render.mouse = mouse;

        // START THE ENGINE

        Matter.Runner.run(engine);
        Matter.Render.run(render);


/*
================================================================================
MATTER.JS EVENTS
================================================================================
*/

/* SHAKE SCENE AFTER 5 SECONDS */

Matter.Events.on(engine, 'beforeUpdate', function(event) {
    var engine = event.source;

    // apply random forces every 5 secs
    if (event.timestamp % 5000 < 50)
        shakeScene(engine);
});


 var shakeScene = function(engine) {
    var bodies = Matter.Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];
// ovo ispod je bilo 500 pa nije radilo na smanjenim ekranima
        if (!body.isStatic && body.position.y >= 100) {
            var forceMagnitude = 0.0035 * body.mass;

            Matter.Body.applyForce(body, body.position, { 
                x: (forceMagnitude + Matter.Common.random() * forceMagnitude) * Matter.Common.choose([1, -1]), 
                y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
            });
        }
    }
};


/* SHAKE SCENU NA CLICK */

Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
    var mousePosition = event.mouse.position;
        console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
    shakeScene(engine);
});



  /* MOUSE EVENT DRAG*/
  
  // an example of using mouse events on a mouse
  Matter.Events.on(mouseConstraint, 'startdrag', function(event) {
   // ball.render.fillStyle = '#b6fa00';
    ball.render.fillStyle = '#6fb000';
  });


// an example of using mouse events on a mouse
  Matter.Events.on(mouseConstraint, 'enddrag', function(event) {
    //   ball.render.fillStyle = '#8E8E8E';
       ball.render.fillStyle = '#8E8E8E';
  });
  


/*
  let logo = document.getElementById('logo-wrapper');

  logo.addEventListener('click', () => {
    //const query = Matter.Query.point(ball, mouseConstraint.position)
   // ball.render.fillStyle = '#ff0000';
   engine.world.gravity.y = -0.3;
   // console.log(mouseConstraint.position);
   // console.log(query);
  });
*/

var clicked = false;

function toggleBtnClick() {
  var logo = document.getElementById('logo-wrapper');
  if (clicked) {
    engine.world.gravity.y = '-0.8';
    clicked = false;
  } else {
    engine.world.gravity.y = '0.8';
    clicked = true;
  }
}

toggleBtnClick();
/*

logo.addEventListener("click", function(ev){

    if(engine.world.gravity.y == '-0.8'){
        engine.world.gravity.y = '-0.8';
    }else if(engine.world.gravity.y == '0.8'){
        engine.world.gravity.y = '0.8';
    }

});

*/
/*
================================================================================
RESIZE CANVAS
================================================================================
*/

        // Get current 
        let viewSizes = [canvas.width = window.innerWidth, canvas.height = window.innerHeight];

        // Reset the canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transformation
        ctx.clearRect(0, 0, ...viewSizes); // wipe

        // Determine scale factor
        let worldSizes = [window.innerWidth, window.innerHeight];
        let scales = worldSizes.map((worldSize, i) => viewSizes[i] / worldSize);
        let minScale = Math.min(...scales);

        // Determine shift in order to center the content
        let shift = scales.map((scale, i) => (viewSizes[i] - minScale * worldSizes[i]) / 2);
        ctx.setTransform(minScale, 0, 0, minScale, ...shift);

    }

    draw();

});


/*
================================================================================
ROLLING TEXT ON HOVER
================================================================================
*/

let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
    let innerText = element.innerText;
    element.innerHTML = '';

    let textContainer = document.createElement('div');
    textContainer.classList.add('block');

    for (let letter of innerText) {
        let span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0' : letter;
        span.classList.add('letter');
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});


/*
================================================================================
ENCODEMAIL
================================================================================
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).DataProtect=e()}}((function(){return function e(t,n,o){function r(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};t[s][0].call(d.exports,(function(e){return r(t[s][1][e]||e)}),d,d.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t,n){const o={defaultConfig:{key:"secret key",x:5,delimiter:"-",suppressConsole:!1},_options:function(e){e=e||{};const t=this;return Object.keys(this.defaultConfig).forEach((function(n){void 0===e[n]&&(e[n]=JSON.parse(JSON.stringify(t.defaultConfig[n])))})),e.key=""==e.key?this.defaultConfig.key:e.key,e.key!=this.defaultConfig.key||e.suppressConsole||console.warn("It is highly recommended that you set a key and do not use the default key"),e.key.length<8&&!e.suppressConsole&&console.warn("It is recommended to use a key with length longer than 8"),e.key=e.key.toString(),""==e.delimiter&&(e.delimiter="-",e.suppressConsole||console.warn('Delimiter should not be "", changed to "-"')),e.x%1==1||e.suppressConsole||console.warn("x rounded to nearest whole number, x should not be set to a floating point number"),e.x=Math.round(e.x),e},encodeData:function(e,t){return t=this._options(t),(e=function(e,t){k=0;for(let n=0;n<e.length;n++)n>t.key.length-1&&k>t.key.length-1&&(k=0),e[n]=e[n].toString().charCodeAt()+t.key.charCodeAt(k)*t.x,k++;return e}(e.toString().split(""),t)).join(t.delimiter)},decodeData:function(e,t){return t=this._options(t),(e=function(e,t){k=0;for(let n=0;n<e.length;n++)n>t.key.length-1&&k>t.key.length-1&&(k=0),e[n]=String.fromCharCode(e[n]-t.key.charCodeAt(k)*t.x),k++;return e}(e.split(t.delimiter),t)).join("")}};t.exports={DataProtect:o}},{}]},{},[1])(1)}));


DataProtect = DataProtect.DataProtect

const options = {
  key: 'u2138SJAl', // just a random string
  x: 5
}

window.setTimeout(() => {
  document.querySelectorAll('[data-decode-email]').forEach(e => {
    const decoded = DataProtect.decodeData(e.getAttribute('data-decode-email'), options)
    e.href = "mailto:" + decoded
    e.textContent = decoded
  })
}, 3000) // set delay here



// use this to encode the email and then paste this value into the attribute data-decode-email
console.log(DataProtect.encodeData('hello@ohoho.ooo', options))
// and then obviously delete this line when your done

