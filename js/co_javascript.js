document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for buttons, similar to previous example.

    const tryQuizBtn = document.querySelector('.try-quiz-btn');
    if (tryQuizBtn) {
        tryQuizBtn.addEventListener('click', () => {
            alert('Opening quiz for Modern JavaScript Mastery!');
            // In a real application, you'd navigate to a quiz page or open a modal.
        });
    }

    const enrollBtn = document.querySelector('.enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            alert('Proceeding to enrollment for Modern JavaScript Mastery!');
            // In a real application, this would lead to a checkout page.
        });
    }

    // No specific JavaScript is needed to make the right sidebar sticky,
    // as that's handled purely by CSS `position: sticky;` on `.sidebar-content`.
    // The `top` value in CSS determines when it becomes sticky.

    // If you needed more complex sticky behavior (e.g., stopping at a certain footer element),
    // you would use JavaScript and an Intersection Observer API. For a simple fixed-on-scroll,
    // CSS sticky is generally sufficient and performant.
});
