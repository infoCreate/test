gsap.registerPlugin(ScrollTrigger);

// LENIS
const lenis = new Lenis({
  duration: 1.2,
});

// синхронизация Lenis + ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// элемент
const line = document.querySelector(".line");

// анимация
gsap.from(line, {
  scrollTrigger: {
    trigger: line,
    scrub: true,
    start: "top bottom",
    end: "top top",
    markers: true,
  },

  clipPath: "inset(0 100% 0 0 round 999px)",

  ease: "none",
});
