var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 10 + "px"
    cursor.style.top = dets.y + 10 + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3;
        cursor.style.border = '1px solid #ffffff4e',
            cursor.style.backgroundColor = 'transparent'
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.style.border = '0px solid #95C11E',
            cursor.style.backgroundColor = '#95C11E'
    })
})


gsap.to("#nav", {
    backgroundColor: "black",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: 'body',
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: 'top -80%',
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3,
    }
})

gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#colon1", {
    x: -70,
    y: -70,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top: 60%",
        end: "top 50%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    x: 70,
    y: 70,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top: 60%",
        end: "top 50%",
        scrub: 4,
    }
})

gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})