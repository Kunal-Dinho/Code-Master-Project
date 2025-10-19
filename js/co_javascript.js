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
            // Redirect to enrollment page (example: enroll.html)
            window.location.href = "enroll.html";
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

    // ℹ️ Note:
    // Sticky sidebar behavior (handled by CSS) does not require JS.
});

