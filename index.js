// Reavealing Section Animation
// const allSections = document.querySelectorAll("section");
// const revealingSection = function (entries, observer) {
//   const entry = entries[0];
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
// };
// const sectionObserver = new IntersectionObserver(revealingSection, {
//   root: null,
//   threshold: 0.15,
// });
// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

// Tabbed Component
const tabs = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    const clicked = e.currentTarget;
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    // Displaying Content
    tabContents.forEach((tab) => tab.classList.add("hidden"));
    document
      .querySelector(`.tab__content-${clicked.dataset.tab}`)
      .classList.remove("hidden");
  })
);

// Slider Component
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
let currSlide = 0;
const maxSlide = slides.length - 1;
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
const nextSlide = function () {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
  activateDot(currSlide);
};
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
  activateDot(currSlide);
};

btnRight.addEventListener("click", function () {
  nextSlide();
});

btnLeft.addEventListener("click", function () {
  prevSlide();
});

// Slider Dots
const dots = document.querySelectorAll(".dots__dot");
const activateDot = function (slideNum) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slideNum}"]`)
    .classList.add("dots__dot--active");
};
activateDot(currSlide);

dots.forEach((dot) =>
  dot.addEventListener("click", function (e) {
    const slideNum = dot.dataset.slide;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNum)}%)`)
    );
    activateDot(slideNum);
  })
);
// KeyBoard Events
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
