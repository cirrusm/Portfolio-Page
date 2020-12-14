const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger")
const navClose = document. querySelector(".close");
const navBar = document.querySelector(".nav")

const navLeft = menu.getBoundingClientRect().left;
const navLink = document.querySelector(".nav-link")


navOpen.addEventListener("click", () => {
  
    menu.classList.add("show");
document.body.classList.add("show");
navBar.classList.add("show")
  
});

navClose.addEventListener("click", () => {
  
    menu.classList.remove("show");
document.body.classList.remove("show");
navBar.classList.remove("show")
  
});

//Fix Nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
    navBar.classList.remove("fix-nav")
  }
})


new TypeIt('#type1', {
  speed: 160,
  loop: true,
  waitUntilVisible: true,
})
.type('Software Engineer', { delay: 400})
.pause(2000)
.delete(18)
.type('Full-Stack Developer', {delay: 400})
.pause(2000)
.delete(28)
.type('UCSB Graduate', {delay: 400})
.pause(2000)
.go()

//GSAP

gsap.from('.logo', {opacity: 0, duration: 1, delay: 0.5, y: -10})
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20})
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.5, x: -200})
gsap.from('.hero h3', {opacity: 0, duration: 1, delay: 2, y: -50})
gsap.from('.hero h1', {opacity: 0, duration: 1, delay: 2.5, y: -45})
gsap.from('.hero h4', {opacity: 0, duration: 1, delay: 3, y: -30})
gsap.from('.hero a', {opacity: 0, duration: 1, delay: 3, y: 50})
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2
})

gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 5.5,
  y: 30,
  stagger: 0.2
})