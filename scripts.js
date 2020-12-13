const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger")
const navClose = document. querySelector(".close");
const navBar = document.querySelector(".nav")

const navLeft = menu.getBoundingClientRect().left;


navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
document.body.classList.add("show");
navBar.classList.add("show")
  }
});

navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
document.body.classList.remove("show");
navBar.classList.remove("show")
  }
});



new TypeIt('#type1', {
  speed: 160,
  loop: false,
  waitUntilVisible: true,
}).type('Software Developer', { delay: 400})
.pause(1300)
.delete(9)
.type('Engineer', {delay: 400})
.pause(1300)
.go()