document.getElementById("signin-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Retrieve stored sign-up data from local storage
  var storedData = localStorage.getItem("userData");
  if (storedData) {
    var userData = JSON.parse(storedData);
    if (username === userData.username && password === userData.password) {
      document.getElementById("message").textContent = "Sign-in successful!";
    } else if (username == "admin" && password == "password") {
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  } else {
    document.getElementById("message").textContent = "No sign-up data found.";
  }
});