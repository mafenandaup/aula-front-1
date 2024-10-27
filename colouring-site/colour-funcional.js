let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slider img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carouselSlider = document.querySelector('.carousel-slider');
    carouselSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bgsong');
    const muteBtn = document.getElementById('mute-btn');
    
    // Check if the mute state is stored in localStorage
    if (localStorage.getItem('isMuted') === 'true') {
        audio.muted = true;
        muteBtn.textContent = 'Unmute';
    }

    muteBtn.addEventListener('click', function () {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
        // Store the mute state in localStorage
        localStorage.setItem('isMuted', audio.muted);
    });
});
