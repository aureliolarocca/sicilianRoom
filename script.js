const slider = document.querySelector(".container-card3-slider");
const slides = document.querySelectorAll(".container-card3-slider div");
const buttons = document.querySelectorAll(
  ".container-button-for-slider button"
);
let currentIndex = 0;

const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector(".ham-menu");
  const menu = document.querySelector(".menu");
  const menuItems = menu.querySelectorAll("li");

  if (!hamMenu || !menu) {
    console.error("Elementi mancanti nel DOM");
    return;
  }

  function toggleMenu() {
    menu.classList.toggle("menu-active");
    hamMenu.classList.toggle("active");
  }

  function closeMenu() {
    menu.classList.remove("menu-active");
    hamMenu.classList.remove("active");
  }

  hamMenu.addEventListener("click", toggleMenu);

  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  slider.scrollTo({
    left: slideWidth * index,
    behavior: "smooth",
  });

  buttons.forEach((button) => (button.style.backgroundColor = "grey"));
  buttons[index].style.backgroundColor = "#067377";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

slider.addEventListener("scroll", () => {
  const slideWidth = slides[0].offsetWidth;
  currentIndex = Math.round(slider.scrollLeft / slideWidth);

  buttons.forEach((button) => (button.style.backgroundColor = "grey"));
  buttons[currentIndex].style.backgroundColor = "#067377";
});
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  const articles = document.querySelectorAll("#recensioni .container-article");
  articles.forEach((article) => observer.observe(article));

  const cards = document.querySelectorAll(".container-card2-info");
  cards.forEach((card) => observer.observe(card));

  const contents = document.querySelectorAll(".contenitor-content");
  contents.forEach((content) => observer.observe(content));

  const sections = document.querySelectorAll(".container-section-content");
  sections.forEach((section) => observer.observe(section));

  const circles = document.querySelectorAll(".container-circle");

  circles.forEach((circle) => observer.observe(circle));

  const footer = document.querySelector("footer");
  if (footer) {
    observer.observe(footer);
  }
});
