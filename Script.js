const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((el) => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

});


// Contact form demo

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! We will contact you soon.");

});