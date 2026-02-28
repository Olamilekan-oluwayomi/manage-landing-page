const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav--container");

btnNavEl.addEventListener("click", function () {
  // match the modifier used in our stylesheet
  headerEl.classList.toggle("nav--open");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
