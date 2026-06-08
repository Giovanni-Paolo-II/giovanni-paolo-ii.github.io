window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Wire ScrollTrigger to Lenis
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    document.querySelectorAll('.parallax-img').forEach((wrapper) => {
      const inner = wrapper.querySelector('.parallax-inner');
      if (!inner) return;

      gsap.set(inner, { scale: 1.15, transformOrigin: 'center center' });
      gsap.to(inner, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });
});
