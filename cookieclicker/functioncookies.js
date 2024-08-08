let cookie = document.getElementById('cookieclick');
let clickCount = 0;

cookie.addEventListener('click', function() {
    clickCount++;
    if (clickCount <= 50) {
        let currentHeight = cookie.clientHeight;
        let currentWidth = cookie.clientWidth;
        cookie.style.height = (currentHeight + 10) + 'px';
        cookie.style.width = (currentWidth + 10) + 'px';
    } else {
        window.location.href = 'index3.html'; 
    }
});
