// smooth scrolling
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

// form submission
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
  console.log(formData); // do something with the form data, like sending it to a server or displaying it on the page
  form.reset();
});
function validateForm() {
  // Get the values from the form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if any of the fields are empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Check if the email is in a valid format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If all checks pass, return true to submit the form
  return true;
}