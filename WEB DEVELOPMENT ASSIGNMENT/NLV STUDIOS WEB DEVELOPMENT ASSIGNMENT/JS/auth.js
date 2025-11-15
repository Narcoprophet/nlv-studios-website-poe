// === SIGN IN / SIGN UP ELEMENTS ===
const signInBox = document.getElementById("signInBox");
const signUpBox = document.getElementById("signUpBox");

const showSignUp = document.getElementById("showSignUp");
const showSignIn = document.getElementById("showSignIn");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginError = document.getElementById("loginError");
const signupError = document.getElementById("signupError");

// === SWITCH BETWEEN SIGN IN / SIGN UP ===
showSignUp.addEventListener("click", () => {
  signInBox.style.display = "none";
  signUpBox.style.display = "flex";
});

showSignIn.addEventListener("click", () => {
  signUpBox.style.display = "none";
  signInBox.style.display = "flex";
});

// === SIGN IN LOGIC ===
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  loginError.textContent = "";

  if (!email || !password) {
    loginError.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 4) {
    loginError.textContent = "Incorrect email or password.";
    return;
  }

  // Save login state
  localStorage.setItem("userLoggedIn", "true");

  // Hide auth link immediately
  const authLink = document.getElementById("authLink");
  if (authLink) authLink.style.display = "none";

  // Redirect to homepage
  window.location.href = "homepage.html";
});

// === SIGN UP LOGIC ===
signupBtn.addEventListener("click", () => {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  signupError.textContent = "";

  if (!name || !email || !password) {
    signupError.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 4) {
    signupError.textContent = "Password must be at least 4 characters.";
    return;
  }

  alert("Account created successfully!");

  // Save login state
  localStorage.setItem("userLoggedIn", "true");

  // Hide auth link immediately
  const authLink = document.getElementById("authLink");
  if (authLink) authLink.style.display = "none";

  // Optionally switch back to sign-in (or redirect)
  signUpBox.style.display = "none";
  signInBox.style.display = "flex";
});

// === ON PAGE LOAD, HIDE AUTH LINK IF LOGGED IN ===
document.addEventListener("DOMContentLoaded", () => {
  const authLink = document.getElementById("authLink");
  const isLoggedIn = localStorage.getItem("userLoggedIn");
  if (authLink && isLoggedIn === "true") {
    authLink.style.display = "none";
  }
});
