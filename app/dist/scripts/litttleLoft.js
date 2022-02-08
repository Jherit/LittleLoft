// Stop the subscribe form from submiting

const signupForm = document.getElementById('subscribeform');

signupForm.addEventListener("submit", function(event) {
    console.log(event);
    event.preventDefault();
  });