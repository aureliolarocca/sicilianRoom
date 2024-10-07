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
  const menuItems = menu.querySelectorAll("li"); // Seleziona tutti gli <li> all'interno del menu

  if (!hamMenu || !menu) {
    console.error("Elementi mancanti nel DOM");
    return;
  }

  function toggleMenu() {
    menu.classList.toggle("menu-active");
    hamMenu.classList.toggle("active"); // Aggiunge/rimuove la classe 'active' per trasformare gli span
  }

  function closeMenu() {
    menu.classList.remove("menu-active");
    hamMenu.classList.remove("active"); // Rimuove la classe 'active' per ripristinare gli span
  }

  hamMenu.addEventListener("click", toggleMenu);

  // Aggiungi un event listener per ogni elemento di menu
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});
///////
///////
// Funzione per mostrare la slide attuale
function showSlide(index) {
  // Calcola la posizione in base alla larghezza della slide
  const slideWidth = slides[0].offsetWidth;
  slider.scrollTo({
    left: slideWidth * index,
    behavior: "smooth",
  });

  // Aggiorna lo stile dei pulsanti per indicare quale slide è attiva
  buttons.forEach((button) => (button.style.backgroundColor = "grey"));
  buttons[index].style.backgroundColor = "#067377";
}

// Aggiungi un event listener ai pulsanti per cambiare slide
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Puoi anche aggiungere il supporto per lo swipe manuale (opzionale)
slider.addEventListener("scroll", () => {
  const slideWidth = slides[0].offsetWidth;
  currentIndex = Math.round(slider.scrollLeft / slideWidth);

  // Aggiorna lo stile dei pulsanti per indicare quale slide è attiva
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

  // Osserva gli elementi esistenti
  const articles = document.querySelectorAll("#recensioni .container-article");
  articles.forEach((article) => observer.observe(article));

  const cards = document.querySelectorAll(".container-card2-info");
  cards.forEach((card) => observer.observe(card));

  const contents = document.querySelectorAll(".contenitor-content");
  contents.forEach((content) => observer.observe(content));

  const sections = document.querySelectorAll(".container-section-content");
  sections.forEach((section) => observer.observe(section));

  // Aggiungi gli osservatori per .container-circle e footer
  const circles = document.querySelectorAll(".container-circle");

  circles.forEach((circle) => observer.observe(circle));

  const footer = document.querySelector("footer");
  if (footer) {
    observer.observe(footer);
  }
});
