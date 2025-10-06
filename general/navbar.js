var prevScrollpos = window.pageYOffset;
var nav = document.querySelector(".nav");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.classList.remove("nav-hidden");
    nav.classList.add("nav-shown");
  } else {
    nav.classList.remove("nav-shown");
    nav.classList.add("nav-hidden");
  }
  prevScrollpos = currentScrollPos;
};