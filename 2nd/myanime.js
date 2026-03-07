

const paths = [
    { el: document.querySelector('.z1'), tx: 0, ty: 0, toTx: 0, toTy: 9.3345 },
    { el: document.querySelector('.o1'), tx: 0, ty: 0, toTx: -19.03972, toTy: 9.3345 },
    { el: document.querySelector('.o2'), tx: 0, ty: 0, toTx: 0, toTy: -6.3345 },
    { el: document.querySelector('.x2'), tx: 0, ty: 0, toTx: 19.29, toTy: -6.3345 }
];

function setMatrix(p) {
    p.el.setAttribute('transform', `matrix(1,0,0,1,${p.tx},${p.ty})`);
}

const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.55, ease: 'power2.inOut' }
});

paths.forEach(p => {
    tl.to(p, {
        tx: p.toTx,
        ty: p.toTy,
        onUpdate: () => setMatrix(p)
    }, 0);
});

const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', () => tl.play());
logo.addEventListener('mouseleave', () => tl.reverse());


gsap.from(".section2 .section2-content", {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 80%",
        end: "top -150%",
        scrub: 2,
    }
})


ScrollTrigger.create({
    trigger: ".section2",
    scroller: "body",
    start: "top top",
    end: "+=800",       
    pin: true,
    pinSpacing: true,   
})


const pele = gsap.timeline({
  scrollTrigger:{
    trigger: ".section3",
    start: "top 80%",
    end: "top -20%",
    scrub: 1
  }
});

pele.from(".section3 .sec3-bg",{
  borderTopLeftRadius:400,
  borderTopRightRadius:400,
  scale:1.05
})

pele.to(".section3 .sec3-bg",{
  scale:1.05,
  duration:.8
});

gsap.to(".inner-sec3", {
  scrollTrigger: {
    trigger: ".section3",
    start: "top top",
    end: "bottom bottom",
    pin: ".inner-sec3",
    scrub: true
  }
});

gsap.from(".sec4-bg", {
    borderTopLeftRadius: "380px",
    borderTopRightRadius: "380px",
    scrollTrigger: {
        trigger: ".sec4-bg",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 2,
    }
});

window.addEventListener("scroll", () => {
    const rect1 = document.querySelector(".aeroplane-one").getBoundingClientRect();
    const rect2 = document.querySelector(".aeroplane-two").getBoundingClientRect();

    if (rect1.top < window.innerHeight && rect1.bottom > 0) {
        const offset1 = (window.innerHeight - rect1.top) * 0.15;
        document.querySelector(".aeroplane-one").style.transform = `translateX(${-offset1}px)`;
    }

    if (rect2.top < window.innerHeight && rect2.bottom > 0) {
        const offset2 = (window.innerHeight - rect2.top) * 0.1;
        document.querySelector(".aeroplane-two").style.transform = `translateX(${offset2}px)`;
    }
});