let modofacil = document.getElementById('facilbtn');
let modomedio = document.getElementById('mediobtn');
let mododificil = document.getElementById('dificilbtn');

document.getElementById('facilbtn').onclick = function ezmode() {
    window.location.href = 'diffacil.html';
};
document.getElementById('mediobtn').onclick = function medmode() {
    window.location.href = 'difmedia.html';
};
document.getElementById('dificilbtn').onclick = function hardmode() {
    window.location.href = 'dificilmesmo.html';
};