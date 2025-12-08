document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".nav-overlay");
  const bars = document.querySelectorAll(".bars .bar");
  const links = document.querySelectorAll(".overlay-link");

  if (!menuToggle || !overlay) return;

  let menuOpen = false;

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power3.out"
    }
  });

  // 1. Hamburger (2 lijnen) → kruis
  tl.to(
    ".line-1",
    {
      y: 0,
      rotation: 45,
      duration: 0.3
    },
    0
  );

  tl.to(
    ".line-2",
    {
      y: 0,
      rotation: -45,
      duration: 0.3
    },
    0
  );

  // 2. Overlay fade-in
  tl.to(
    overlay,
    {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.35
    },
    0
  );

  // 3. Equalizer bars: van onder naar boven, random volgorde, vullen het scherm
  tl.fromTo(
    bars,
    {
      scaleY: 0
    },
    {
      duration: 0.7,
      scaleY: 1,
      transformOrigin: "bottom",
      ease: "expo.out",
      stagger: {
        each: 0.07,
        from: "random"
      }
    },
    0.05
  );

  // 4. Menu links over de bars heen, gecentreerd
  tl.to(
    links,
    {
      duration: 0.45,
      opacity: 1,
      y: 0,
      stagger: 0.06
    },
    "-=0.1"
  );

  // Toggle logica open / close met dezelfde knop (hamburger/X)
  menuToggle.addEventListener("click", () => {
    if (!menuOpen) {
      tl.play();
      menuOpen = true;
    } else {
      tl.reverse();
      menuOpen = false;
    }
  });
});
