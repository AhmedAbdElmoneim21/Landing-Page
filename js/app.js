const navList = document.getElementById("navbar__list"); // assuming ul exists
const documentFragment = document.createDocumentFragment();
const allSection = document.querySelectorAll("section");
const navMenu = document.getElementsByClassName("navbar__menu");

allSection.forEach((section) => {
  const dataAtt = section.dataset.nav;
  const li = document.createElement("li");
  li.innerHTML = `<a class="menu__link" href="#${section.id}">${dataAtt}</a>`;
  documentFragment.appendChild(li);
});

navList.appendChild(documentFragment);

function offset(element) {
  return Math.floor(element.getBoundingClientRect().top);
}
function removeActive(element) {
  element.classList.remove("your-active-class");
}
function addActive(attributes, element) {
  if (attributes) {
    element.classList.add("your-active-class");
  }
}
function sectionActive() {
  allSection.forEach((element) => {
    const elementOffset = offset(element);
    viewport = () => elementOffset < 120 && elementOffset >= -120;
    removeActive(element);
    addActive(viewport(), element);
  });
}
window.addEventListener("scroll", sectionActive);
