const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milisegundos = document.getElementById('milisegundos');
let title = document.getElementById('title');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let ms = dateToday.getMilliseconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    milisegundos.textContent = ms;

    if (hr < 10) hr = '0' + hr;
    if (min< 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

})

 // Obtém a data atual
 const dataAtual = new Date();

 // Extrai o dia, mês e ano
 const dia = dataAtual.getDate();
 const mes = dataAtual.toLocaleString('pt-BR', { month: 'long' }); // Nome do mês
 const ano = dataAtual.getFullYear();
 
 // Formata a data
 const dataFormatada = `Hoje é ${dia} de ${mes} de ${ano}!`;
 
 // Insere no elemento HTML
     document.getElementById('title').textContent = dataFormatada;
 