let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slider img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carouselSlider = document.querySelector('.carousel-slider');
    carouselSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
