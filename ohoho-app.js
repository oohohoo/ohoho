window.addEventListener('load', function () {

/* 
=============================================  
FETCH CANVAS
=============================================
*/

    let canvas = document.getElementById('world');
    let ctx = canvas.getContext("2d");
    var timeOutFunctionId;

/* 
=============================================  
RESIZE CANVAS
=============================================
*/

window.addEventListener("resize", function () {
    // clearTimeOut() resets the setTimeOut() timer
    // due to this the function in setTimeout() is
    // fired after we are done resizing
    clearTimeout(timeOutFunctionId);
    // setTimeout returns the numeric ID which is used by
    // clearTimeOut to reset the timer
    timeOutFunctionId = setTimeout(draw, 200);

    });

    function draw() {

/* 
=============================================  
ENGINE
=============================================
*/

    var engine = Matter.Engine.create({
            enableSleeping: true
        }),
        world = engine.world;

/* 
=============================================  
RENDER
=============================================
*/

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
            }
        });

/* 
=============================================  
RESIZE O & H
=============================================
*/

    // resize O
    function percentX(percent) {
        return Math.round(9.8 / 100 * window.innerWidth);
    }
    // resize H
    function percentY(percent) {
        return Math.round(19.3 / 100 * window.innerWidth);
    }



/* 
=============================================  
DESKTOP vs MOBILE MATCHMEDIA
=============================================
*/
  
var mq = window.matchMedia( "(max-width: 800px)" );
if (mq.matches) {
  
  
  
/* 
=============================================  
O1 BODY 
=============================================
*/

var ball = Matter.Bodies.circle(0, 0, percentX(), {
  //  force: { x: 60, y: 0 },
 // position: { x: 1, y: 0 },
   density: 0.001,
   friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.2,
    render: {
        fillStyle: '#8E8E8E',
        strokeStyle: 'black',
        lineWidth: 0
    }
});
Matter.Composite.add(world, ball);

/* 
=============================================  
H1 BODY
=============================================
*/

var ball = Matter.Bodies.rectangle(2, 0, percentY(), percentY(), {
 //  position: { x: 2, y: 0 },
   density: 0.001,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.2,
    render: {
        fillStyle: '#8E8E8E',
        strokeStyle: 'black',
        lineWidth: 0
    }
});
Matter.Composite.add(world, ball);

/* 
=============================================  
O2 BODY
=============================================
*/

var ball = Matter.Bodies.circle(3, 0, percentX(), {
// position: { x: 3, y: 0 },
   density: 0.001,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.2,
    render: {
        fillStyle: '#8E8E8E',
        strokeStyle: 'black',
        lineWidth: 0
    }
});
Matter.Composite.add(world, ball);

/* 
=============================================  
H2 BODY
=============================================
*/

var ball = Matter.Bodies.rectangle(4, 0, percentY(), percentY(), {
 //position: { x: 4, y: 0 },
   density: 0.001,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.2,
    render: {
        fillStyle: '#8E8E8E',
        strokeStyle: 'black',
        lineWidth: 0
    }
});
Matter.Composite.add(world, ball);

/* 
=============================================  
O3 BODY
=============================================
*/

var ball = Matter.Bodies.circle(5, 0, percentX(), {
// position: { x: 5, y: 0 },
   density: 0.001,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.2,
    render: {
        fillStyle: '#8E8E8E',
        strokeStyle: 'black',
        lineWidth: 0
    }
});
Matter.Composite.add(world, ball);

  
  console.log("MOBILE!");
  
  
  
}
else {

/* 
=============================================  
O1 BODY 
=============================================
*/

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
    Matter.Composite.add(world, o1);

/* 
=============================================  
H1 BODY
=============================================
*/
    var ball = Matter.Bodies.rectangle(300, 0.1, percentY(), percentY(), {
        chamfer: { radius: 2 },
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
    Matter.Composite.add(world, ball);

/* 
=============================================  
O2 BODY
=============================================
*/
    var ball = Matter.Bodies.circle(400, 0.1, percentX(), {
        density: 0.04,
        friction: 0.01,
        //frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: '#8E8E8E',
            strokeStyle: 'black',
            lineWidth: 0
            }
        });
    Matter.Composite.add(world, ball);

/* 
=============================================  
H2 BODY
=============================================
*/
    var ball = Matter.Bodies.rectangle(600, 0.1, percentY(), percentY(), {
        chamfer: { radius: 2 },
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
    Matter.Composite.add(world, ball);

/* 
=============================================  
O3 BODY
=============================================
*/
    var ball = Matter.Bodies.circle(800, 0.1, percentX(), {
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
     Matter.Composite.add(world, ball);
  
   console.log("DESKTOP");
  
  
}

/* 
=============================================  
BORDERS
=============================================
*/

    var floor = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, {
        isStatic: true, //An immovable object
        render: {
            visible: false,
            fillStyle: '#ff0000'
        }
        });
    Matter.Composite.add(world, floor);

    var leftWall = Matter.Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true, //An immovable object
        render: {
            visible: false,
            fillStyle: '#ff0000'
        }
        });
    Matter.Composite.add(world, leftWall);

    var rightWall = Matter.Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true, //An immovable object
        render: {
            visible: false,
            fillStyle: '#ff0000'
            }
        });
    Matter.Composite.add(world, rightWall);

    var ceiling = Matter.Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, {
        isStatic: true, //An immovable object
        render: {
            visible: false,
            fillStyle: '#ff0000'
            }
        });
    Matter.Composite.add(world, ceiling);


/* 
=============================================  
GRAVITY
=============================================
*/

    engine.world.gravity.y = 0.4;


/* 
=============================================  
DEVICE ORIENTATION
=============================================
*/

if (typeof window !== 'undefined') {
    var updateGravity = function(event) {
        var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
            gravity = engine.gravity;

        if (orientation === 0) {
            gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Matter.Common.clamp(event.beta, -90, 90) / 90;
        } else if (orientation === 180) {
            gravity.x = Matter.Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Matter.Common.clamp(-event.beta, -90, 90) / 90;
        } else if (orientation === 90) {
            gravity.x = Matter.Common.clamp(event.beta, -90, 90) / 90;
            gravity.y = Matter.Common.clamp(-event.gamma, -90, 90) / 90;
        } else if (orientation === -90) {
            gravity.x = Matter.Common.clamp(-event.beta, -90, 90) / 90;
            gravity.y = Matter.Common.clamp(event.gamma, -90, 90) / 90;
        }
    };

    window.addEventListener('deviceorientation', updateGravity);
}


/* 
=============================================  
MOUSE CONSTRAINT
=============================================
*/

    var mouse = Matter.Mouse.create(render.canvas),
        mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.9,
                lenght: 0.1,
                render: {
                    visible: false
                }
            }
        });


    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);


    Matter.Composite.add(world, mouseConstraint);

    render.mouse = mouse;

/* 
=============================================  
START THE ENGINE
=============================================
*/

    Matter.Runner.run(engine);
    Matter.Render.run(render);


/* 
=============================================  
EVENTS
=============================================
*/

/* 
=============================================  
SHAKE SCENE EVERY X SECONDS
=============================================
*/

    Matter.Events.on(engine, 'beforeUpdate', function (event) {
        var engine = event.source;

        // apply random forces every 5 secs
        if (event.timestamp % 15000 < 50)
            shakeScene(engine);
    });

        var shakeScene = function (engine) {
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


/* 
=============================================  
SHAKE SCENE ON CLICK
=============================================
*/

    Matter.Events.on(mouseConstraint, 'mousedown', function (event) {
        var mousePosition = event.mouse.position;
        console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
        shakeScene(engine);
    });



        /* MOUSE EVENT DRAG*/

        // an example of using mouse events on a mouse
        Matter.Events.on(mouseConstraint, 'startdrag', function (event) {
            // ball.render.fillStyle = '#b6fa00';
            ball.render.fillStyle = '#6fb000';
        });


        // an example of using mouse events on a mouse
        Matter.Events.on(mouseConstraint, 'enddrag', function (event) {
            //   ball.render.fillStyle = '#8E8E8E';
            ball.render.fillStyle = '#8E8E8E';
        });



/* 
=============================================  
CHANGE GRAVITY ON LOGO CLICK
=============================================
*/

    let logo = document.getElementById('logo-wrapper');
        logo.addEventListener('click', () => {
            if (engine.world.gravity.y == "-0.4") {
                engine.world.gravity.y = 0.4;
            } else {
                engine.world.gravity.y = -0.4;
            }
    });



/* 
=============================================  
CANVAS RESIZE
=============================================
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
