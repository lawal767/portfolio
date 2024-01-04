// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//

// scroll section activie link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.classList.remove("active");
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navbar when clock navbar Link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//   scroll reveal
scrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
  scrollReveal().reveal('.home-content, .heading', { origin: 'top'});
  scrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form', { origin: 'bottom'});
