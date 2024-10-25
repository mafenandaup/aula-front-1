document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgsong');
    const muteBtn = document.getElementById('mute-btn');

    if (localStorage.getItem('isMuted') === 'true') {
        music.muted = true;
        muteBtn.textContent = 'Unmute';
    }

    muteBtn.addEventListener('click', () => {
        music.muted = !music.muted;
        muteBtn.textContent = music.muted ? 'Unmute' : 'Mute';
        localStorage.setItem('isMuted', music.muted);
    });
});

