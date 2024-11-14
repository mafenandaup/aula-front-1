function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");  
}

const nome = document.getElementById('name-nl').value;
const email = document.getElementById('email-nl').value;

function isValidEmail(useremail, name) {
  if (useremail.includes("@")) {
    console.log(`${useremail} is a valid email`);
    document.getElementById('nl-message').textContent = `Obrigado por se inscrever, ${name} !`
  } else {
    console.log(`${useremail} is NOT a valid email`);
        document.getElementById('nl-message').textContent = 'Por favor, digite um email válido'
  }
}

document.getElementById('submit-nl').addEventListener('click', function() {
  isValidEmail(email, nome); 
});
