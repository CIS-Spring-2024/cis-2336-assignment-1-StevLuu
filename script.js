
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

var loginBtn = document.querySelector(".login-btn");
var registerBtn = document.querySelector(".register-btn");

var closeButtons = document.querySelectorAll(".close");

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

closeButtons.forEach(function(btn) {
  btn.onclick = function() {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
}
