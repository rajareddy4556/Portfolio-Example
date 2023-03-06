
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  console.log(formData); 
  form.reset();
});
function validateForm() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

