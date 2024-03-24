document.addEventListener("DOMContentLoaded", function() {
    var storedData = localStorage.getItem("userData");
    if (storedData) {
      var userData = JSON.parse(storedData);
      document.getElementById("username").textContent = userData.username;
  
      // Handle adding a new grade
      document.getElementById("add-grade-btn").addEventListener("click", function(event) {
        event.preventDefault();
        var subject = prompt("Enter the subject:");
        var grade = prompt("Enter the grade:");
        if (subject && grade) {
          addGrade(subject, grade);
        }
      });
  
      // Handle adding a new achievement
      document.getElementById("add-achievement-btn").addEventListener("click", function(event) {
        event.preventDefault();
        var achievement = prompt("Enter a achievement:");
        if (achievement) {
          addAchievement(achievement);
        }
      });

      // Handle adding a new club
      document.getElementById("add-clubs-btn").addEventListener("click", function(event) {
        event.preventDefault();
        var clubs = prompt("Enter the clubs that you are in:");
        if (clubs) {
          addClub(clubs);
        }
      });

      // Handle adding a new interest
      document.getElementById("add-interest-btn").addEventListener("click", function(event) {
        event.preventDefault();
        var interests = prompt("Enter your interest:");
        if (interests) {
          addClub(interests);
        }
      });
    }
  });
  
  function addGrade(subject, grade) {
    var gradesList = document.getElementById("grades-list");
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + subject + "</td><td>" + grade + "</td>";
    gradesList.appendChild(tr);
  }
  
  function addAchievement(achievement) {
    var achievementsList = document.getElementById("achievements-list");
    var li = document.createElement("li");
    li.textContent = achievement;
    achievementsList.appendChild(li);
  }

  function addClub(clubs) {
    var clubsList = document.getElementById("clubs-list");
    var cl = document.createElement("cl");
    cl.textContent = achievement;
    achievementsList.appendChild(cl);
  }

  function addInterest(interest) {
    var interestList = document.getElementById("interest-list");
    var it = document.createElement("it");
    it.textContent = interest;
    interestList.appendChild(it);
  }

  // Function to handle the profile picture change
  function handleProfilePictureChange(event) {
    const file = event.target.files[0];
  
    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const profilePicture = document.getElementById('profile-picture');
        profilePicture.src = e.target.result;
        // Save the profile picture URL or send it to the server for further processing
        // Example: You can use localStorage or a backend API to save the profile picture URL
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  // Attach event listener to the profile picture
  const profilePicture = document.getElementById('profile-picture');
  profilePicture.addEventListener('click', function () {
    const fileInput = document.getElementById('profile-picture-input');
    fileInput.addEventListener('change', handleProfilePictureChange);
    fileInput.click();
  });
  
  // Get the username and display it
  const usernameSpan = document.getElementById('username');
  const username = getUsernameFromLocalStorage(); // Replace this with your logic to retrieve the username
  usernameSpan.textContent = username;