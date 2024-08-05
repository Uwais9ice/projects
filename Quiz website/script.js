
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const closeBtn = document.querySelector('.close-btn');

    navToggle.addEventListener('click', function() {
        sidebarNav.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebarNav.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        alert(`Your score is: ${score}/${questions.length}`);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        alert(`Your score is: ${score}/${questions.length}`);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultModal = document.getElementById('result-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultModal = document.getElementById('result-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultModal = document.getElementById('result-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function() {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultSection.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultSection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-quiz');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        let score = 0;
        const questions = document.querySelectorAll('.quiz-question');

        questions.forEach(question => {
            const correctAnswer = question.querySelector('input[data-correct="true"]');
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');

            if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
                score += 1;
            }
        });

        resultText.textContent = `You scored ${score} out of ${questions.length}`;
        resultSection.style.display = 'block';
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-quiz');
    const resultModal = document.getElementById('result-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const totalQuestions = 6;
        let score = 0;

        // Loop through each question
        for (let i = 1; i <= totalQuestions; i++) {
            const question = document.querySelector(`input[name="q${i}"]:checked`);
            if (question && question.hasAttribute('data-correct')) {
                score++;
            }
        }

        // Display the result in the modal
        resultText.textContent = `You scored ${score} out of ${totalQuestions}`;
        resultModal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function () {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', function () {
        resultModal.style.display = 'none';
        modalOverlay.style.display = 'none';
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-quiz');
    const resultSection = document.getElementById('result-section');
    const resultText = document.getElementById('result-text');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        const totalQuestions = 6;
        let score = 0;

        // Loop through each question
        for (let i = 1; i <= totalQuestions; i++) {
            const question = document.querySelector(`input[name="q${i}"]:checked`);
            if (question && question.hasAttribute('data-correct')) {
                score++;
            }
        }

        // Display the result in the result section
        resultText.textContent = `You scored ${score} out of ${totalQuestions}`;
        resultSection.style.display = 'block';
    });
});
