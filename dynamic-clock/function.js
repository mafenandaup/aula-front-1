const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let title = document.getElementById('title');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr =

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
 