document.addEventListener('DOMContentLoaded', () => {

    // ✅ Try Quiz button — takes user to Python quiz page
    const tryQuizBtn = document.querySelector('.try-quiz-btn');
    if (tryQuizBtn) {
        tryQuizBtn.addEventListener('click', () => {
            // Redirect to quiz page (create this file if not made yet)
            window.location.href = "python_quiz.html";
        });
    }

    // ✅ Enroll button — takes user to enrollment/checkout page
    const enrollBtn = document.querySelector('.enroll-btn');

if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
        alert("Enroll successfully!");
    });
}


    // ✅ Handle "View Course" navigation from Dashboard
    window.buyCourse = function(courseName) {
        if (courseName === "Python for Everyone") {
            window.location.href = "python_course.html";
        } else if (courseName === "Modern JavaScript Mastery") {
            window.location.href = "javascript_course.html";
        } else {
            alert("Course not found!");
        }
    };

    // Show/Hide Modal Logic
const modal = document.getElementById('signInModal');
const showBtn = document.getElementById('showSignIn');
const closeBtn = document.getElementById('closeModal');
const registerBtn = document.getElementById('registerBtn');

showBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

registerBtn.addEventListener('click', () => {
  alert("Redirect to registration page or open another modal.");
  // window.location.href = "register.html";
});

document.getElementById('signInForm').addEventListener('submit', function(event){
  event.preventDefault();
  // Validate and sign in logic here
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if(email === "" || password === ""){
    alert("Please fill all fields.");
    return;
  }
  // TODO: Replace this with your sign-in authentication logic
  alert("Signed in as " + email);
  modal.style.display = 'none';
});

    // ℹ️ Note:
    // Sticky sidebar behavior (handled by CSS) does not require JS.
});

