document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.getElementById("signinBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");
  const loginForm = document.getElementById("loginForm");

  // open modal
  signInBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });

  // close modal
  closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  // click outside to close
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = "none";
  });

  // fake login handler
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    modalOverlay.style.display = "none";
  });

  // counter animation
  const counter = document.querySelector("[data-target]");
  if (counter) {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 1000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / speed, 1);
      count = Math.floor(progress * target);
      counter.textContent = count.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
  
  // 🔽 Add this below the counter animation
  function buyCourse(courseName) {
    const userName = prompt(`You're about to enroll in "${courseName}".\nPlease enter your name to proceed:`);

    if (userName) {
      alert(`Thanks, ${userName}! You're now being redirected to the "${courseName}" course page.`);
      // Simulated redirect (replace with actual URL if needed)
      // window.location.href = `/courses/${courseName.toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      alert("Enrollment cancelled. You can explore other courses anytime!");
    }
  }
});
