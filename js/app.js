/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const navBuilder = () => {
  let nav = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDat = section.dataset.nav;
    nav += `<li><a class="menu__link" href="#${sectionID}">${sectionDat}</a></li>`;
  });
  navBar.innerHTML = nav;
};
navBuilder();
// Add class 'active' to section when near top of viewport
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
const removeActive = (section) => {
  section.classList.remove("your-active-class");
};
const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};
const sectionActive = () => {
  sections.forEach((section) => {
    const elementOffset = offset(section);
    viewport = () => elementOffset < 150 && elementOffset >= -150;
    removeActive(section);
    addActive(viewport(), section);
  });
};
s;
window.addEventListener("scroll", sectionActive);
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
