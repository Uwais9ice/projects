
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navSidebar = document.querySelector('.nav-sidebar');
    
    navToggle.addEventListener('click', function() {
        navSidebar.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBody = document.getElementById('leaderboard-body');

    // Sample leaderboard data
    const leaderboardData = [
        { rank: 1, name: 'Alice Johnson', score: 300, date: '2024-07-20' },
        { rank: 2, name: 'Bob Smith', score: 250, date: '2024-07-19' },
        { rank: 3, name: 'Carol Davis', score: 200, date: '2024-07-18' },
        { rank: 4, name: 'David Brown', score: 150, date: '2024-07-17' },
        { rank: 5, name: 'Eve White', score: 100, date: '2024-07-16' }
    ];

    // Populate leaderboard
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
            <td>${entry.date}</td>
        `;
        leaderboardBody.appendChild(row);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const gameContainer = document.getElementById('game-container');
    const timerElement = document.getElementById('timer');
    const riddleQuestion = document.getElementById('riddle-question');
    const riddleAnswerInput = document.getElementById('riddle-answer');
    const submitAnswerButton = document.getElementById('submit-answer');
    const feedbackMessage = document.getElementById('feedback');
    const scoreboardList = document.getElementById('scoreboard-list');
    const errorMessage = document.getElementById('error-message');
    const restartGameButton = document.getElementById('restart-game');
    const backToMenuButton = document.getElementById('back-to-menu');

    let timer;
    let timeLeft = 60; // Timer in seconds
    let score = 0;

    const riddles = [
        { question: "What has keys but can’t open locks?", answer: "piano" },
        { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo" },
        { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" }
    ];

    // Handle user form submission
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const age = document.getElementById('age').value;

        if (!firstName || !lastName || !age || age < 1) {
            errorMessage.textContent = 'Please fill out all fields correctly.';
            return;
        }

        errorMessage.textContent = '';
        userForm.style.display = 'none';
        gameContainer.style.display = 'block';

        // Start the game
        startGame();
    });

    // Start the game
    function startGame() {
        startTimer();

        let currentRiddleIndex = 0;

        function showRiddle() {
            if (currentRiddleIndex < riddles.length) {
                const riddle = riddles[currentRiddleIndex];
                riddleQuestion.textContent = riddle.question;
                feedbackMessage.textContent = '';
                riddleAnswerInput.value = '';
            } else {
                feedbackMessage.textContent = 'Congratulations! You have completed all riddles.';
                submitAnswerButton.disabled = true;
            }
        }

        showRiddle();

        submitAnswerButton.addEventListener('click', () => {
            const userAnswer = riddleAnswerInput.value.trim().toLowerCase();
            const currentRiddle = riddles[currentRiddleIndex];

            if (userAnswer === currentRiddle.answer) {
                feedbackMessage.textContent = 'Correct! Well done.';
                score += 10; // Example scoring
                updateScoreboard();
                currentRiddleIndex++;
                showRiddle();
            } else {
                feedbackMessage.textContent = 'Incorrect, try again.';
            }
        });

        // Restart game functionality
        restartGameButton.addEventListener('click', () => {
            resetGame();
            startGame();
        });

        // Back to menu functionality
        backToMenuButton.addEventListener('click', () => {
            location.href = 'index.html'; // Redirect to the main menu page
        });
    }

    // Start the timer
    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                feedbackMessage.textContent = 'Time is up! Game over.';
                submitAnswerButton.disabled = true;
            }
        }, 1000);
    }

    // Reset game
    function resetGame() {
        clearInterval(timer);
        timeLeft = 60;
        timerElement.textContent = timeLeft;
        score = 0;
        feedbackMessage.textContent = '';
        scoreboardList.innerHTML = '';
        riddleAnswerInput.value = '';
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('age').value = '';
        userForm.style.display = 'block';
        gameContainer.style.display = 'none';
    }

    // Update the scoreboard
    function updateScoreboard() {
        const userName = `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`;
        const scoreEntry = document.createElement('li');
        scoreEntry.textContent = `${userName}: ${score}`;
        scoreboardList.appendChild(scoreEntry);
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('sign-up-form');
    const signupMessage = document.getElementById('signup-message');
    const loginButton = document.getElementById('login-button');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const uniqueId = document.getElementById('unique-id').value;

        if (!name || !uniqueId) {
            signupMessage.textContent = 'Please fill out all fields.';
            signupMessage.style.color = 'red';
            return;
        }

        // Simulate a successful signup (e.g., save to database)
        alert('Sign Up Successful!');
        signupMessage.textContent = 'You have been signed up successfully!';
        signupMessage.style.color = 'green';
        loginButton.style.display = 'inline-block';
    });
});



