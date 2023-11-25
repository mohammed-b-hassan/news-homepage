document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".header__nav-open-btn").addEventListener("click", (e) => {
        document.querySelector(".header__navbar").classList.add("header__navbar--open");
        document.querySelector("body").classList.add("navbar-opened")
    });
    document.querySelector(".header__nav-close-btn").addEventListener("click", (e) => {
        document.querySelector(".header__navbar").classList.remove("header__navbar--open");
        document.querySelector("body").classList.remove("navbar-opened")
    });
});