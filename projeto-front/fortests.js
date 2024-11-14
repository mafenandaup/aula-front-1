

document.getElementById('submit-nl').addEventListener('click', function() {
  event.preventDefault();

  const nome = document.getElementById('name-nl').value;
  const email = document.getElementById('email-nl').value;

  function isValidEmail(useremail, name) {
    const messageElement = document.getElementById('nl-message');

    if(isNaN(useremail)|| isNaN(nome)){
      console.log(`${useremail} is NOT a valid email`);
      document.getElementById('name-nl').value = '';
      document.getElementById('email-nl').value = '';
      messageElement.textContent = 'Por favor, preencha ambos os campos.';
      messageElement.style.color = 'red'; 
      messageElement.style.fontSize = '12px';
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

