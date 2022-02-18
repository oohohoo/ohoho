


// SCROLL TO TOP
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



/* gsap.to("#circle",{duration: 3, strokeWidth:30, repeat:200, yoyo:true}) */

/*H ANIMACIJA*/
gsap.to("#di", {
  morphSVG: {
    shape: "#sq"
  },
  duration: 0.4,
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  ease: 'power2.out'
});


gsap.utils.toArray(".o-hover").forEach(container => {
  let circle = container.querySelector(".hoverio"),
     /*  silhouette = container.querySelector(".silhouette .cover"), */
      tl = gsap.timeline({ paused: true });
  
  tl.to(circle, { duration: 0.4, strokeWidth:280, ease: 'power3.inOut' })
  
    /* .to(silhouette, { opacity: 0 }, 0); */
  
  container.addEventListener("mouseenter", () => tl.play() );
  container.addEventListener("mouseleave", () => tl.reverse(10) );
});


/*

// HOVER O
function hovero() {
  document.querySelectorAll('.o-hover').forEach(button => {  
  
  let tween = gsap.to(button, {
    duration: 3, strokeWidth:250, repeat:200, yoyo:true
  });
  
  
  button.addEventListener('mouseenter', () => {
    gsap.to("#circle", {duration: 1, strokeWidth:250, time: tween.duration(), ease: 'power3.inOut'});
  });
  button.addEventListener('mouseleave', () => {
    gsap.to("#circle", {strokeWidth:58, duration: 2, delay: 3, time: 0, ease: 'power3.inOut', clearProps:"all"});
  });
  
  });
  }
  hovero(); 
*/

// HOVER BUTTON
function buttomer() {
document.querySelectorAll('.svg-sizer').forEach(button => {  

let tween = gsap.to(button, {
  //scale: randomNumber(0.1, 0.9),
  rotate: -90,
  //ease: 'power4.out',
  paused: true,
 // background:"white",
 //x: randomNumber(-120, 120),
  //y: randomNumber(-120, 120),
});


button.addEventListener('mouseenter', () => {
  gsap.to(tween, {duration: 1, time: tween.duration(), ease: 'power3.inOut'});
});
button.addEventListener('mouseleave', () => {
  gsap.to(tween, {duration: 2, delay: 3, time: 0, ease: 'power3.inOut', clearProps:"all"});
});

});
}
buttomer(); 


// MOUSE TRAIL
gsap.defaults({ease: 'none'});

var svgns = "http://www.w3.org/2000/svg";
var root = document.querySelector("#trag");
var ease = 0.75;
 
var pointer = { 
  x: window.innerWidth  / 2, 
  y: window.innerHeight / 2 
};

window.addEventListener("mousemove", function(event) {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

var leader = pointer;

var total = 100;
for (var i = 0; i < total; i++) {
  leader = createLine(leader, i);
}

function createLine(leader, i) {
  
  var line = document.createElementNS(svgns, "line");
  root.appendChild(line);
  
  gsap.set(line, { x: -15, y: -15, alpha: (total - i) / total });
  
  gsap.to(line, {
    duration: 1000,
    x: "+=1",
    y: "+=1",
    repeat: -1,
    modifiers: {
      x: function() {
        let posX = gsap.getProperty(line, "x");
        let leaderX = gsap.getProperty(leader, "x");
        
        var x = posX + (leaderX - posX) * ease;
        line.setAttribute("x2", leaderX - x);
        return x;
      },
      y: function() {
        let posY = gsap.getProperty(line, "y");
        let leaderY = gsap.getProperty(leader, "y");
        
        var y = posY + (leaderY - posY) * ease;
        line.setAttribute("y2", leaderY - y);
        return y;
      }
    }
  });  
  
  return line;
}

// FLICKER

gsap.timeline()
	//  .fromTo(".lajna", {height: "0%"}, {height: "100%", stagger:0.15, duration:0.8, ease: Power3.easeOut});
var boxes = document.querySelectorAll(".col");
for (i = 0; i < boxes.length; i++) {
  animateMe(boxes[i]);
}
function animateMe(box) {
 gsap.to(box, {duration: randomNumber(1, 2),opacity: 1, delay: randomNumber(1, 3),
    repeatDelay: randomNumber(1, 6), repeat: 1,
    //yoyoEase: true, 
    onComplete: animateMe,
    ease: RoughEase.ease.config({ template:  Power2.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}),
    onCompleteParams: [box]
  });
}
//animateMe(document.querySelector("h1"));
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// SMMOTH SCROLLER

gsap.registerPlugin(ScrollTrigger);

/* 
Setup: wrap your content <div> in another <div> that will serve as the viewport.
Call this function FIRST (before you create your ScrollTriggers); it sets the 
default "scroller" for you (otherwise it'd be the window/body, but it should be 
the content <div>) 
*/
smoothScroll("#content");

// pin each box for 300px when they hit the top
// gsap.utils.toArray(".box").forEach(box => {
//   ScrollTrigger.create({
//     trigger: box,
//     pin: true,
//     start: "top top",
//     end: "+=300"
//   });
// });


/* ScrollTrigger.create({
  trigger: ".box-a",
  pin: true,
  end: "max"
})
 */


// this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
function smoothScroll(content, viewport, smoothness) {
	content = gsap.utils.toArray(content)[0];
	smoothness = smoothness || 1;

	gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
	gsap.set(content, {overflow: "visible", width: "100%"});

	let getProp = gsap.getProperty(content),
		setProp = gsap.quickSetter(content, "y", "px"),
		setScroll = ScrollTrigger.getScrollFunc(window),
		removeScroll = () => content.style.overflow = "visible",
		killScrub = trigger => {
			let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
			scrub && scrub.kill();
			trigger.animation.progress(trigger.progress);
		},
		height, isProxyScrolling;

	function refreshHeight() {
		height = content.clientHeight;
		content.style.overflow = "visible"
		document.body.style.height = height + "px";
    return height - document.documentElement.clientHeight;
	}

	ScrollTrigger.addEventListener("refresh", () => {
		removeScroll();
		requestAnimationFrame(removeScroll);
	})
	ScrollTrigger.defaults({scroller: content});
	ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

	ScrollTrigger.scrollerProxy(content, {
		scrollTop(value) {
			if (arguments.length) {
				isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
				setProp(-value);
				setScroll(value);
				return;
			}
			return -getProp("y");
		},
    scrollHeight: () => document.body.scrollHeight,
		getBoundingClientRect() {
			return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
		}
	});

	return ScrollTrigger.create({
		animation: gsap.fromTo(content, {y:0}, {
			y: () => document.documentElement.clientHeight - height,
			ease: "none",
			onUpdate: ScrollTrigger.update
		}),
		scroller: window,
		invalidateOnRefresh: true,
		start: 0,
		end: refreshHeight,
    refreshPriority: -999,
		scrub: smoothness,
		onUpdate: self => {
			if (isProxyScrolling) {
				killScrub(self);
				isProxyScrolling = false;
			}
		},
		onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
	});
}

/* OHOHO SCROLLER*/

// for a horizontal version, see https://codepen.io/GreenSock/pen/rNmQPpa?editors=0010
/*
gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  // SET ANIMATION
  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 60,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }

          return y;
        })
      }
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "section",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  }
});


*/