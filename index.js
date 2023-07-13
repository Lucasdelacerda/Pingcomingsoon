   document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
   console.log("deu certo");
   })

   function verifyEmail () {
  var emailInput = document.getElementById("email-input");
  var email = emailInput.value;

  var padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var valido = padrao.test(email);

  if (valido) {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    console.log('valido');
  } 
  else {
      
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    document.getElementById("email-error-message").innerHTML="Please provide a valid email address"
  }
}