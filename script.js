const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const close = document.querySelector(".close");
const closeDiv = document.querySelector(".close-div");

hamburger.addEventListener("click", () => {
   navLink.classList.toggle("active")
   hamburger.classList.add("active")
   close.classList.add("active")
   closeDiv.classList.add("active-div")
});

close.addEventListener("click", () => {
navLink.classList.remove("active")
hamburger.classList.remove("active")
close.classList.remove("active")
closeDiv.classList.remove("active-div")
});
