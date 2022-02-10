// Stop the subscribe form from submiting

const signupForm = document.getElementById('subscribeform');

signupForm.addEventListener("submit", function(event) {
    console.log(event);
    event.preventDefault();
  });

// Makes the Hero image do a little jump on mouseover

  const heroImage = document.getElementById('mainImage');
  const heroContent = document.getElementsByClassName('hero')[0];

  heroContent.addEventListener("mouseenter", function() {
    heroImage.classList.add("jumpup");
    setTimeout(function(){
      heroImage.classList.remove("jumpup");
   }, 2000);
  });
