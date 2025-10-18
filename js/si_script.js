// -------------------------------
// LOGIN FORM HANDLER
// -------------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.querySelector("#email").value.trim();
    const password = loginForm.querySelector("#password").value.trim();

    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
      return;
    }

    // Example success action
    alert(`Welcome back, ${email}! Redirecting to your dashboard...`);
    window.location.href = "dashboard.html"; // Replace with your actual page
  });
}

// -------------------------------
// REGISTER FORM HANDLER
// -------------------------------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = registerForm.querySelector("#email").value.trim();
    const phone = registerForm.querySelector("#phone").value.trim();
    const address = registerForm.querySelector("#address").value.trim();
    const password = registerForm.querySelector("#password").value.trim();
    const confirmPassword = registerForm.querySelector("#confirmPassword").value.trim();
    const gender = registerForm.querySelector("#gender").value;

    // Basic validation
    if (!email || !phone || !address || !password || !confirmPassword || !gender) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // Example success message
    alert(`Registration successful for ${email}! Redirecting to login page...`);
    window.location.href = "login.html"; // ✅ Redirect to login page
  });
}
