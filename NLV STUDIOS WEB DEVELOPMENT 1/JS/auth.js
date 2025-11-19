document.addEventListener("DOMContentLoaded", () => {
  // ================= Elements =================
  const signInBox = document.getElementById("signInBox");
  const signUpBox = document.getElementById("signUpBox");
  const showSignUp = document.getElementById("showSignUp");
  const showSignIn = document.getElementById("showSignIn");

  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const signupName = document.getElementById("signupName");
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");

  const loginError = document.getElementById("loginError");
  const signupError = document.getElementById("signupError");

  // Navbar
  const authLink = document.getElementById("authLink");
  const userProfile = document.getElementById("userProfile");
  const profileInitials = document.getElementById("profileInitials");
  const profileName = document.getElementById("profileName");
  const profileDropdown = document.getElementById("profileDropdown");
  const logoutBtn = document.getElementById("logoutBtn");
  const profileCircle = document.getElementById("profileCircle");

  // ================= Users =================
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // ================= Functions =================
  function updateNavbar() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      if (authLink) authLink.style.display = "none";
      if (userProfile) {
        userProfile.style.display = "flex";
        const initials = user.name.split(" ").map(n => n[0]).join("").toUpperCase();
        profileInitials.textContent = initials;
        profileName.textContent = user.name;
      }
      if (signInBox) signInBox.style.display = "none";
      if (signUpBox) signUpBox.style.display = "none";
    } else {
      if (authLink) authLink.style.display = "block";
      if (userProfile) userProfile.style.display = "none";
      if (signInBox) signInBox.style.display = "block";
      if (signUpBox) signUpBox.style.display = "none";
    }
  }

  // ================= Initial Page Load =================
  updateNavbar();

  // ================= Switch Forms =================
  if (showSignUp && showSignIn) {
    showSignUp.addEventListener("click", (e) => {
      e.preventDefault();
      if (signInBox) signInBox.style.display = "none";
      if (signUpBox) signUpBox.style.display = "block";
      if (loginError) loginError.textContent = "";
    });

    showSignIn.addEventListener("click", (e) => {
      e.preventDefault();
      if (signUpBox) signUpBox.style.display = "none";
      if (signInBox) signInBox.style.display = "block";
      if (signupError) signupError.textContent = "";
    });
  }

  // ================= Sign Up =================
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const name = signupName.value.trim();
      const email = signupEmail.value.trim();
      const password = signupPassword.value.trim();

      if (!name || !email || !password) {
        if (signupError) signupError.textContent = "All fields are required.";
        return;
      }

      if (users.find(user => user.email === email)) {
        if (signupError) signupError.textContent = "Email already registered.";
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created successfully!");
      signupName.value = "";
      signupEmail.value = "";
      signupPassword.value = "";

      if (signUpBox) signUpBox.style.display = "none";
      if (signInBox) signInBox.style.display = "block";
    });
  }

  // ================= Sign In =================
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();

      if (!email || !password) {
        if (loginError) loginError.textContent = "Please enter both email and password.";
        return;
      }

      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        updateNavbar();
        // Redirect to homepage (adjust path)
        window.location.href = "../PAGES/index.html";
      } else {
        if (loginError) loginError.textContent = "Invalid email or password.";
      }
    });
  }

  // ================= Profile Dropdown =================
  if (profileCircle) {
    profileCircle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (profileDropdown)
        profileDropdown.style.display = profileDropdown.style.display === "none" ? "block" : "none";
    });
  }

  document.addEventListener("click", () => {
    if (profileDropdown) profileDropdown.style.display = "none";
  });

  // ================= Logout =================
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      updateNavbar();
      alert("You have logged out.");
    });
  }
});

