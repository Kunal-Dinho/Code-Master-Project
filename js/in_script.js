/* js/in_script.js
   For: Code Master — Dashboard
*/

/* ---------- Course navigation ---------- */
/* Expose buyCourse so inline onclick="buyCourse(...)" still works */
window.buyCourse = function(courseName) {
  const courseMap = {
    "C Programming Fundamentals": "c-course.html",
    "Complete Java Development": "java-course.html",
    "Modern JavaScript Mastery": "javascript-course.html",
    "Python For Everyone": "python_course.html" // <- added Python page
  };

  const target = courseMap[courseName];
  if (target) {
    // navigate (use relative path)
    window.location.href = target;
  } else {
    console.warn("Unknown course:", courseName);
  }
};

/* Progressive enhancement:
   If buttons use data-course attributes, attach listeners automatically.
   This is optional — it won't break inline onclick handlers.
*/
document.addEventListener("DOMContentLoaded", () => {
  // attach to buttons that have data-course attribute
  document.querySelectorAll("[data-course]").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-course");
      if (name) window.buyCourse(name);
    });
  });

  /* ---------- Modal (Sign In) ---------- */
  const signinBtn = document.getElementById("signinBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");
  const loginForm = document.getElementById("loginForm");

  function openModal() {
    if (modalOverlay) modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function hideModal() {
    if (modalOverlay) modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (signinBtn) signinBtn.addEventListener("click", openModal);
  if (closeModal) closeModal.addEventListener("click", hideModal);

  // close when clicking outside modal content
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) hideModal();
    });
  }

  // handle login submit (demo: prevent navigation and show console)
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Replace with real auth logic
      const form = e.currentTarget;
      const email = form.querySelector('input[type="email"]')?.value || "";
      // quick demo feedback
      console.log("Login attempt:", email);
      // close modal on "login"
      hideModal();
      // optionally show success toast / update UI
      alert("Logged in (demo).");
    });
  }

  /* ---------- Animated stats (students counter) ---------- */
  const statEls = document.querySelectorAll(".stat h3[data-target]");
  statEls.forEach(el => {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const duration = 1500; // ms total animation
    const frameRate = 30; // updates per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const initial = 0;
    const increment = (target - initial) / totalFrames;

    const counter = setInterval(() => {
      frame++;
      const value = Math.round(initial + increment * frame);
      el.textContent = value.toLocaleString();
      if (frame >= totalFrames) {
        el.textContent = target.toLocaleString();
        clearInterval(counter);
      }
    }, Math.round(1000 / frameRate));
  });

  /* Small accessibility improvement: make close button keyboard-accessible */
  if (closeModal) {
    closeModal.setAttribute("role", "button");
    closeModal.setAttribute("tabindex", "0");
    closeModal.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") hideModal();
    });
  }
});
