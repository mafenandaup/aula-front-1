

document.getElementById('submit-nl').addEventListener('click', function() {
  event.preventDefault();

  const nome = document.getElementById('name-nl').value;
  const email = document.getElementById('email-nl').value;

  function isValidEmail(useremail, name) {
    const messageElement = document.getElementById('nl-message');

    if (!useremail || !name) {
      console.log(`Please fill in both fields.`);
      document.getElementById('name-nl').value = '';
      document.getElementById('email-nl').value = '';
      messageElement.textContent = 'Por favor, preencha ambos os campos.';
      messageElement.style.color = 'red';
      messageElement.style.fontSize = '12px';
      return;
    }
    
    if (useremail.includes("@")) {
      console.log(`${useremail} is a valid email`);
      messageElement.textContent = `Obrigado por se inscrever, ${name}!`;
      messageElement.style.color = 'green'; 
      messageElement.style.fontSize = '12px';
    } else {
      console.log(`${useremail} is NOT a valid email`);
      document.getElementById('name-nl').value = '';
      document.getElementById('email-nl').value = '';
      messageElement.textContent = 'Por favor, digite um email válido';
      messageElement.style.color = 'red'; 
      messageElement.style.fontSize = '12px';
    }
  }

  isValidEmail(email, nome);
});

        
const hamburger = document.querySelector('.hamburger');
const popupContainer = document.querySelector('.hamb-popup'); // Removed the dot from ID selector
const menuItems = document.querySelectorAll('.popup-menu a');
const closePopup = document.getElementById('closePopup');

// dá visibilidade ao popup quando clica no hamburguer
popupContainer.classList.toggle('none');
hamburger.addEventListener('click', () => {
    popupContainer.classList.toggle('active');
});

// quando clicar em qq item, o popup fecha
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        popupContainer.classList.remove('active');
    });
});

// quando clicar no 'x', o popup fecha
closePopup.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});


// CODIGO : CARDS 3D 
const cards = document.querySelectorAll('.flip-container');

// seleciona a propriedade pra cada uma das cartas com o querySelector
cards.forEach(card => {
  const flipArea = card.querySelector('.monthly-flip');
  const flipButtons = card.querySelectorAll('.flip-button');

  // mesma coisa aqui pros botões, quando tem um evento de click, a carta muda
  // o seu estado para flipped (ver propiedade no css)
  
  flipButtons.forEach(button => {
    button.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});