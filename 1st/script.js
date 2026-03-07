const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let naving = document.querySelector("nav")

let lastScrollY = window.scrollY;
console.log(lastScrollY);

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {

    naving.classList.add("navhidden");
  } else {


    naving.classList.remove("navhidden");
  }

  lastScrollY = currentScrollY;
}); 