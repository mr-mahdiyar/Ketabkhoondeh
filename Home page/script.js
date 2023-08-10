const txtsearchinput = document.querySelector(".header-nav-txtsearch");

txtsearchinput.addEventListener("click", () => {
  txtsearchinput.style.border = "1px solid #fe4902";
});

document.addEventListener("click", (event) => {
  if (!txtsearchinput.contains(event.target)) {
    txtsearchinput.style.border = ""; // Reverts to the default border color
  }
});



const burger = document.querySelector(".menu-bar-icon");
const navLinks = document.querySelector(".header-nav-small");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
});

// Close the nav menu when a link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("show-menu");
});