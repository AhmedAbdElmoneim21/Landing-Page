//Here I have called all the variables that I will use to build the landing page
const navList = document.getElementById("navbar__list");
const documentFragment = document.createDocumentFragment();
const allSection = document.querySelectorAll("section");
const navMenu = document.getElementsByClassName("navbar__menu");
const btn = document.getElementById("btn-section");
//################################################//
//make function called all to create navigation dynamic with js
function all() {
  navList.innerHTML = "";
  allSection.forEach((section) => {
    const sectionID = section.id;
    const dataAtt = section.dataset.nav;
    const li = document.createElement("li");
    li.innerHTML = `<a class="menu__link" href="#${sectionID}">${dataAtt}</a>`;
    documentFragment.appendChild(li);
  });
  navList.appendChild(documentFragment);
}
all();
//################################################//
//make function to scroll in window to change background-color and make highlight in nav on the section is appear in window
function scroll() {
  const act_nav = document.querySelectorAll(".menu__link");
  window.onscroll = () => {
    allSection.forEach((bkDiv, element) => {
      if (
        bkDiv.getBoundingClientRect().top >= -500 &&
        bkDiv.getBoundingClientRect().top <= 200
      ) {
        bkDiv.classList.add("your-active-class");
        act_nav[element].classList.add("act-nav");
      } else {
        bkDiv.classList.remove("your-active-class");
        act_nav[element].classList.remove("act-nav");
      }
    });
  };
}
scroll();

//########################################################\\
//make arrow Function to make the page scroll is smooth when press a li in nav
const Smooth = (li, section) => {
  li.addEventListener("click", (ele) => {
    ele.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
};
//########################################################\\
//make function to responsive navigation
const icon = document.querySelector("#icon");
icon.addEventListener("click", () => {
  navList.classList.toggle("active");
});
