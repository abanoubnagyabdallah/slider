const nextButton = document.querySelector(".slider__right");
const prevButton = document.querySelector(".slider__left");
const sliders = document.querySelectorAll(".slider__img");
const counter = document.querySelector(".current-counter");
const totalCounter = document.querySelector(".total-counter");
const paginationContent = document.querySelector(".slider__pagination");
let paginationBtn ;

// next button
let currentSlide = 0;
setUp();

nextButton.addEventListener("click", () => {
    sliders[currentSlide].classList.remove("slider__img--active");
    paginationBtn[currentSlide].classList.remove("slider__pagination-item--active");
    currentSlide++;
    if (currentSlide === sliders.length) {
        currentSlide = 0;
    }
    counter.textContent = currentSlide + 1;
    sliders[currentSlide].classList.add("slider__img--active");
    paginationBtn[currentSlide].classList.add("slider__pagination-item--active");
});

// previous button
prevButton.addEventListener("click", () => {
    sliders[currentSlide].classList.remove("slider__img--active");
    paginationBtn[currentSlide].classList.remove("slider__pagination-item--active");
    currentSlide--;
    if (currentSlide === -1) {
        currentSlide = sliders.length - 1;
    }
    counter.textContent = currentSlide + 1;
    sliders[currentSlide].classList.add("slider__img--active");
    paginationBtn[currentSlide].classList.add("slider__pagination-item--active");
});

function setUp() {
    totalCounter.textContent = sliders.length;
    if (currentSlide >= sliders.length) {
        currentSlide = sliders.length - 1;
    }
    if (currentSlide < 0) {
        currentSlide = 0;
    }
    counter.textContent = currentSlide + 1;
    sliders[currentSlide].classList.add("slider__img--active");
    for (let i = 0; i < sliders.length; i++) {
        paginationContent.innerHTML += `<div class="slider__pagination-item"></div>`;
    }
    paginationBtn=document.querySelectorAll(".slider__pagination-item");
    paginationBtn[currentSlide].classList.add("slider__pagination-item--active");
}

// pagination
