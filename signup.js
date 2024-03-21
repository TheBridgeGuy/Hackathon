document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;

  // Store sign-up data in local storage
  var userData = {
    username: username,
    password: password,
    email: email
  };
  localStorage.setItem("userData", JSON.stringify(userData));

  document.getElementById("message").textContent = "Sign-up successful!";
});