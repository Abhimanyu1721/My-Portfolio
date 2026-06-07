   // typing animation
let text = "B.Tech CSE Student | Web Developer | Problem Solver";
let i = 0;

function typeEffect(){
    let el = document.querySelector(".typing");
    if(!el) return;

    el.textContent = text.slice(0,i);
    i++;
    if(i > text.length){
        i = 0;
    }
}
setInterval(typeEffect, 150);


// scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;

        if(top > offset){
            sec.classList.add("show");
        }
    });
});


// navbar active link
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));

        if(section &&
           section.offsetTop <= fromTop + 100 &&
           section.offsetTop + section.offsetHeight > fromTop + 100){

            link.classList.add("active");

        } else {
            link.classList.remove("active");
        }
    });
});