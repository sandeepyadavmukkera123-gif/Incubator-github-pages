// CIP Innovation & Incubation Hub — shared script for every page


// MOBILE MENU (all pages)

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

}


// HERO SLIDESHOW (home page only)

const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".slide-dot")];
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

if (slides.length) {

  let activeSlide = 0;
  let rotation;

  function showSlide(index) {

    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === activeSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeSlide);
      dot.setAttribute("aria-pressed", String(i === activeSlide));
    });

  }

  function startRotation() {

    clearInterval(rotation);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rotation = setInterval(() => showSlide(activeSlide + 1), 3500);
    }

  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
      startRotation();
    });
  });

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      showSlide(activeSlide - 1);
      startRotation();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showSlide(activeSlide + 1);
      startRotation();
    });
  }

  // Pause while the visitor is hovering or using the controls
  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", () => clearInterval(rotation));
  hero.addEventListener("mouseleave", startRotation);
  hero.addEventListener("focusin", () => clearInterval(rotation));
  hero.addEventListener("focusout", startRotation);

  showSlide(0);
  startRotation();

}