document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const muteBtn = document.getElementById('mute-btn');

    // Check if the mute state is stored in localStorage
    if (localStorage.getItem('isMuted') === 'true') {
        music.muted = true;
        muteBtn.textContent = 'Unmute';
    }

    muteBtn.addEventListener('click', () => {
        music.muted = !music.muted;
        muteBtn.textContent = music.muted ? 'Unmute' : 'Mute';
        // Store the mute state in localStorage
        localStorage.setItem('isMuted', music.muted);
    });
});

