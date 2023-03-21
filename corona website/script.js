const searchEl = document.querySelector(".search-icon");

const searchpageEl = document.querySelector(".search-page");

const closeEl = document.querySelector(".close");

const searchpageiconEl = document.querySelector(".search-page-icon");


function myfunction() {

    searchEl.addEventListener("click", () => {
        searchpageEl.style.left = "0%";
    })

    closeEl.addEventListener("click", () => {
        searchpageEl.style.left = "-100%"
    })


    searchpageiconEl.addEventListener("click", () => {
        searchpageEl.style.left = "-100%";
    })
}

myfunction();



const contactcloseEl = document.querySelector(".contact-close")

const contactIconEl = document.querySelector(".contact-icon");

const ContactEl = document.querySelector(".contact-page");



function contactUS() {

    contactIconEl.addEventListener("click", () => {
        ContactEl.style.right = "0%";
    })

    contactcloseEl.addEventListener("click", () => {
        ContactEl.style.right = "-100%";

    })



}

contactUS();

const humburgerEl = document.querySelector(".humburger");
const menucloseEl = document.querySelector(".close-menu");
const navlinksEl = document.querySelector(".ul-links");


humburgerEl.addEventListener("click", () => {
    navlinksEl.style.left = "50%";
})
menucloseEl.addEventListener("click", () => {
    navlinksEl.style.left = "-150%";
})