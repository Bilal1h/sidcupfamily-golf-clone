// card1 starts here
var card1 = document.querySelector("#card1");
card1.addEventListener("mousemove", (event) => {
  card1.style.transform = `rotate3d(${event.clientX}, ${event.clientY}, 0, 20deg)`;
  card1.style.cursor = "default";
});
card1.addEventListener("mouseout", () => {
  card1.style.transform = "none";
});

// card1 ends here

// card2 starts here
var card2 = document.querySelector("#card2");
card2.addEventListener("mousemove", (event) => {
  card2.style.transform = `rotate3d(${event.clientX}, ${event.clientY}, 0, 20deg)`;
  card2.style.cursor = "default";
});
card2.addEventListener("mouseout", () => {
  card2.style.transform = "none";
});
// card2 ends here

// card3 starts here
var card3 = document.querySelector("#card3");
card3.addEventListener("mousemove", (event) => {
  card3.style.transform = `rotate3d(${event.clientY}, ${event.clientX},0, 20deg)`;
  card3.style.cursor = "default";
});

card3.addEventListener("mouseout", () => {
  card3.style.transform = "none";
});
// card3 ends here

var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets) => {
  crsrblur.style.left = dets.x - 200 + "px";
  crsrblur.style.top = dets.y - 200 + "px";
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", () => {
    crsr.style.cursor = "active";
    crsr.style.scale = 3;
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "1px solid white";
  });
  elem.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.backgroundColor = "#95c11e";
    crsr.style.border = "none";
  });
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 80%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 2,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from("#green-div", {
  y: 50,
  opacity: 0,
  duration: 2,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#green-div h4",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from("#colon1", {
  y: -50,
  x: -50,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -30%",
    end: "top -100%",
    scrub: 2,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});



var check = document.querySelector("#check");
var mobNav = document.querySelector("#mob-nav");

check.addEventListener("change", (e) => {
  if (e.target.checked) {
    mobNav.style.display = "block";
  } else {
    mobNav.style.display = "none";
  }
});
