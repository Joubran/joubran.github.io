// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Set dynamic copyright year
    const year = new Date().getFullYear();
    const footerYear = document.querySelectorAll('footer p');
    footerYear.forEach(element => {
        element.textContent = `© ${year} GCanva `;
    });

    // Check if we are on the quiz page by looking for the quiz-container
    if (document.getElementById('quiz-container')) {
        // Quiz questions
        const quizData = [
            { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
            { question: "Who wrote 'Hamlet'?", options: ["Dante", "Shakespeare", "Homer", "Goethe"], answer: 1 },
            { question: "Which planet is closest to the sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
            { question: "What is the largest ocean on Earth?", options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"], answer: 1 },
            { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Oganesson", "Oxytocin"], answer: 0 }
        ];

        // Display quiz questions
        const quizContainer = document.getElementById('quiz-container');
        quizData.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('my-3');
            questionDiv.innerHTML = `
                <h5>Q${index + 1}: ${q.question}</h5>
                <div>
                    ${q.options.map((option, i) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question${index}" id="q${index}a${i}" value="${i}">
                            <label class="form-check-label" for="q${index}a${i}">${option}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            quizContainer.appendChild(questionDiv);
        });

        // Handle quiz submission
        document.getElementById('submit-quiz').addEventListener('click', function() {
            let score = 0;
            quizData.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
                if (selectedOption && parseInt(selectedOption.value) === q.answer) {
                    score++;
                }
            });
            const result = `You scored ${score} out of ${quizData.length}!`;
            document.getElementById('quiz-result').textContent = result;
        });
    }
});
