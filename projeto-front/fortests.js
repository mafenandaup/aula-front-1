

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

// Toggle popup visibility when clicking the hamburger
popupContainer.classList.toggle('none');
hamburger.addEventListener('click', () => {
    popupContainer.classList.toggle('active');
});

// Hide popup when any menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        popupContainer.classList.remove('active');
    });
});

// Hide popup when clicking the close button (optional if using a close icon)
closePopup.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});