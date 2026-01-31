function onOrderButtonClick() {
    window.location.href = "Pages/menu.html";
}
// Use for all Home buttons through out the different pages of site 
function onHomeButtonClick() {
    window.location.href = "index.html";
}

/* ============================================
   CAROUSEL CONFIGURATION - EDITABLE SETTINGS
   ============================================ */

// EDIT THIS: Change auto-scroll speed (in milliseconds)
// 5000 = 5 seconds, 3000 = 3 seconds, 7000 = 7 seconds, etc.
const AUTO_SCROLL_SPEED = 5000;

// EDIT THIS: Set to false to disable auto-scrolling completely
const ENABLE_AUTO_SCROLL = true;

// EDIT THIS: Set to false to disable pause on hover
const PAUSE_ON_HOVER = true;

/* ============================================
   CAROUSEL FUNCTIONALITY - DO NOT EDIT BELOW
   ============================================ */

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Auto-advance carousel based on settings above
let carouselInterval;
if (ENABLE_AUTO_SCROLL) {
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, AUTO_SCROLL_SPEED);
}

function moveCarousel(direction) {
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset auto-advance timer
    if (ENABLE_AUTO_SCROLL) {
        resetCarouselInterval();
    }
}

function goToSlide(slideIndex) {
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Set new slide
    currentSlide = slideIndex;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset auto-advance timer
    if (ENABLE_AUTO_SCROLL) {
        resetCarouselInterval();
    }
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, AUTO_SCROLL_SPEED);
}

// Pause carousel on hover (if enabled)
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer && PAUSE_ON_HOVER && ENABLE_AUTO_SCROLL) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            resetCarouselInterval();
        });
    }
});