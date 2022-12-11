const navList = document.getElementById("navbar__list"); // assuming ul exists
const documentFragment = document.createDocumentFragment();
const allSection = document.querySelectorAll("section");
const navMenu = document.getElementsByClassName("navbar__menu");
const btn = document.getElementById("btn-section");
//################################################//
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
const activeHead = document.querySelectorAll("h2");
function scroll() {
  window.onscroll = () => {
    allSection.forEach((bkDiv, head) => {
      if (
        bkDiv.getBoundingClientRect().top >= -500 &&
        bkDiv.getBoundingClientRect().top <= 200
      ) {
        bkDiv.classList.add("your-active-class");
      } else {
        bkDiv.classList.remove("your-active-class");
      }
    });
  };
}
scroll();
// function Hscroll() {
//   window.onscroll = () => {
//     activeHead.forEach((head) => {
//       if (
//         head.getBoundingClientRect().top >= -500 &&
//         head.getBoundingClientRect().top <= 200
//       ) {
//         head.classList.add("active");
//       } else {
//         head.classList.remove("active");
//       }
//     });
//   };
// }
// Hscroll();

//########################################################\\
const icon = document.querySelector("#icon");
icon.addEventListener("click", () => {
  navList.classList.toggle("active");
});
