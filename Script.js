window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#020617";
    } else {
        navbar.style.background = "rgba(11,17,32,.9)";
    }

});const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});