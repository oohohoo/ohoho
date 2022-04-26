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
            return Math.round(10 / 100 * window.innerWidth);
        }
        // resize H
        function percentY(percent) {
            return Math.round(19.5 / 100 * window.innerWidth);
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
                visible: false
            }
        });
        Matter.World.add(world, floor);


        // ADD A LEFT WALL

        var leftWall = Matter.Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, {
            isStatic: true, //An immovable object
            render: {
                visible: false
            }
        });
        Matter.World.add(world, leftWall);

        // ADD A RIGHT WALL

        var rightWall = Matter.Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, {
            isStatic: true, //An immovable object
            render: {
                visible: false
            }
        });
        Matter.World.add(world, rightWall);

        // ADD A CEILING

        var ceiling = Matter.Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, {
            isStatic: true, //An immovable object
            render: {
                visible: false
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
                stiffness: 0.2,
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
    if (event.timestamp % 15000 < 50)
        shakeScene(engine);
});


 var shakeScene = function(engine) {
    var bodies = Matter.Composite.allBodies(engine.world);

    for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];

        if (!body.isStatic && body.position.y >= 500) {
            var forceMagnitude = 0.0025 * body.mass;

            Matter.Body.applyForce(body, body.position, { 
                x: (forceMagnitude + Matter.Common.random() * forceMagnitude) * Matter.Common.choose([1, -1]), 
                y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
            });
        }
    }
};


  /* MOUSE EVENT DRAG*/
  
  // an example of using mouse events on a mouse
  Matter.Events.on(mouseConstraint, 'startdrag', function(event) {
   // ball.render.fillStyle = '#b6fa00';
    o1.render.fillStyle = '#6fb000';
  });


// an example of using mouse events on a mouse
  Matter.Events.on(mouseConstraint, 'enddrag', function(event) {
    //   ball.render.fillStyle = '#8E8E8E';
       o1.render.fillStyle = '#8E8E8E';
  });
  





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