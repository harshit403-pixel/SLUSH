let wheelRotation = 0;
let lastScrollY = window.scrollY;
let lastTime = performance.now();
let stopTimer = null;

window.addEventListener('scroll', () => {
    const now = performance.now();
    const currentScrollY = window.scrollY;
    const velocity = (currentScrollY - lastScrollY) / (now - lastTime);

    wheelRotation += velocity * 20;

    gsap.to("#nav2 svg g[data-svg-origin]", {
        rotation: wheelRotation,
        transformOrigin: "center center",
        duration: 0.8,
        ease: "power3.out",
        overwrite: true
    });

    lastScrollY = currentScrollY;
    lastTime = now;

    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
        gsap.to("#nav2 svg g[data-svg-origin]", {
            rotation: wheelRotation,
            duration: 1.2,
            ease: "power3.out",
            overwrite: true
        });
    }, 100);
});


let lastScroll = 0;
let navState = "top";
let navTween = null;

window.addEventListener('scroll', () => {
    const current = window.scrollY;
    const scrollingDown = current > lastScroll;

    if (current <= 10) {
        if (navState !== "top") {
            if (navTween) navTween.kill();
            navTween = gsap.to("nav", {
                width: "100%", left: "0%", xPercent: 0, top: "0px",
                borderRadius: "0px", backgroundColor: "transparent",
                padding: "0px 40px", height: "15%",
                opacity: 1, duration: 0.5, ease: "expo.inOut"
            });
          
            navState = "top";
        }

    } else if (scrollingDown) {
        if (navState !== "hidden") {
            if (navTween) navTween.kill();
            if (navState === "top") {
                gsap.to("nav", {
                    width: "98%", left: "50%", xPercent: -50, top: "15px",
                    borderRadius: "20px", backgroundColor: "#ffffff",
                    padding: "10px 20px", height: "auto",
                    duration: 1, ease: "power3.in"
                });
            }
            navTween = gsap.to("nav", { width: "0%", opacity: 0, duration: 1, ease: "power3.in" });
           
            navState = "hidden";
        }

    } else {
        if (navState !== "pill") {
            if (navTween) navTween.kill();
            navTween = gsap.to("nav", {
                width: "98%", left: "50%", xPercent: -50, top: "15px",
                borderRadius: "20px", backgroundColor: "#ffffff",
                padding: "10px 20px", height: "auto",
                opacity: 1, duration: 1, ease: "power3.out"
            });
       
            navState = "pill";
        }
    }

    lastScroll = current;
});

