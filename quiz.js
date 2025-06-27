const questions = [
    // Math - Beginner
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 5 - 3?', options: ['2', '3', '4'], correctAnswer: '2', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 3 * 4?', options: ['10', '11', '12'], correctAnswer: '12', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 10 / 2?', options: ['2', '3', '5'], correctAnswer: '5', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is the square root of 16?', options: ['4', '5', '6'], correctAnswer: '4', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 4 squared?', options: ['16', '24', '32'], correctAnswer: '16', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 100 divided by 10?', options: ['10', '20', '30'], correctAnswer: '10', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 2 raised to the power of 3?', options: ['4', '6', '8'], correctAnswer: '8', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is 20 percent of 50?', options: ['10', '20', '30'], correctAnswer: '10', difficulty: 'Beginner', topic: 'Math' },
    { question: 'What is the next number in the sequence: 1, 3, 5, 7, ...?', options: ['8', '9', '10'], correctAnswer: '9', difficulty: 'Beginner', topic: 'Math' },
    
    // Math - Intermediate
    { question: 'What is the value of π (pi)?', options: ['3.14', '3.141', '3.14159'], correctAnswer: '3.14159', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the area of a square with side length 6?', options: ['12', '24', '36'], correctAnswer: '36', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the circumference of a circle with diameter 10?', options: ['20π', '10π', '5π'], correctAnswer: '10π', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the value of log10(100)?', options: ['1', '2', '3'], correctAnswer: '2', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the equation of a line with slope 2 and y-intercept 3?', options: ['y = 2x + 3', 'y = 3x + 2', 'y = 2x - 3'], correctAnswer: 'y = 2x + 3', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the value of cos(60°)?', options: ['1/2', '√3/2', '1'], correctAnswer: '1/2', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the value of sin(45°)?', options: ['1', '1/√2', '√3/2'], correctAnswer: '1/√2', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the solution to the equation x^2 - 4x + 4 = 0?', options: ['x = 2', 'x = 3', 'x = 4'], correctAnswer: 'x = 2', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the value of √64?', options: ['6', '7', '8'], correctAnswer: '8', difficulty: 'Intermediate', topic: 'Math' },
    { question: 'What is the area of a triangle with base 6 and height 8?', options: ['24', '30', '36'], correctAnswer: '24', difficulty: 'Intermediate', topic: 'Math' },

    // Math - Advanced
    { question: 'What is the derivative of sin(x)?', options: ['cos(x)', '-cos(x)', 'sin(x)'], correctAnswer: 'cos(x)', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the integral of x^2?', options: ['x', 'x^2/2', '2x'], correctAnswer: 'x^2/2', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of lim(x→∞) 1/x?', options: ['0', '1', '∞'], correctAnswer: '0', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of e^0?', options: ['0', '1', '∞'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of loge(e)?', options: ['0', '1', '∞'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the derivative of e^x?', options: ['e^x', 'e^-x', '1'], correctAnswer: 'e^x', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of lim(x→0) sin(x)/x?', options: ['0', '1', '∞'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of lim(x→0) (1 + x)^(1/x)?', options: ['0', '1', 'e'], correctAnswer: 'e', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the value of ∫(0 to π) sin(x) dx?', options: ['0', '1', '2'], correctAnswer: '2', difficulty: 'Advanced', topic: 'Math' },
    { question: 'What is the derivative of ln(x)?', options: ['1/x', 'x', '0'], correctAnswer: '1/x', difficulty: 'Advanced', topic: 'Math' },

    // Science - Beginner
    { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'NaCl'], correctAnswer: 'H2O', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the chemical symbol for oxygen?', options: ['O', 'O2', 'H2O'], correctAnswer: 'O2', difficulty: 'Beginner', topic: 'Science' },
    { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Jupiter', 'Venus'], correctAnswer: 'Mars', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the boiling point of water in Celsius?', options: ['100°C', '0°C', '-273°C'], correctAnswer: '100°C', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the freezing point of water in Fahrenheit?', options: ['0°F', '32°F', '100°F'], correctAnswer: '32°F', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the chemical symbol for carbon dioxide?', options: ['CO', 'CO2', 'C2O'], correctAnswer: 'CO2', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the largest planet in our solar system?', options: ['Jupiter', 'Saturn', 'Neptune'], correctAnswer: 'Jupiter', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Fe'], correctAnswer: 'Au', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the chemical symbol for silver?', options: ['Ag', 'Au', 'Fe'], correctAnswer: 'Ag', difficulty: 'Beginner', topic: 'Science' },
    { question: 'What is the chemical symbol for iron?', options: ['Fe', 'Au', 'Ag'], correctAnswer: 'Fe', difficulty: 'Beginner', topic: 'Science' },

    // Science - Intermediate
    { question: 'What is the atomic number of oxygen?', options: ['6', '7', '8'], correctAnswer: '8', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical formula for sodium chloride?', options: ['NaCl', 'KCl', 'CaCl2'], correctAnswer: 'NaCl', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the pH value of pure water?', options: ['6', '7', '8'], correctAnswer: '7', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical symbol for helium?', options: ['He', 'H', 'Au'], correctAnswer: 'He', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical formula for sulfuric acid?', options: ['H2SO4', 'HCl', 'HNO3'], correctAnswer: 'H2SO4', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the atomic number of carbon?', options: ['5', '6', '7'], correctAnswer: '6', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical formula for methane?', options: ['CH4', 'CO2', 'H2O'], correctAnswer: 'CH4', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical symbol for potassium?', options: ['K', 'P', 'Pt'], correctAnswer: 'K', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the atomic number of sodium?', options: ['10', '11', '12'], correctAnswer: '11', difficulty: 'Intermediate', topic: 'Science' },
    { question: 'What is the chemical formula for carbon dioxide?', options: ['CO2', 'CO', 'H2O'], correctAnswer: 'CO2', difficulty: 'Intermediate', topic: 'Science' },

    // Science - Advanced
    { question: 'What is the chemical formula for hydrochloric acid?', options: ['HCl', 'H2SO4', 'HNO3'], correctAnswer: 'HCl', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the atomic number of hydrogen?', options: ['0', '1', '2'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the chemical formula for ammonia?', options: ['NH3', 'NH4Cl', 'NH2'], correctAnswer: 'NH3', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the pH value of hydrochloric acid?', options: ['0', '1', '2'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the chemical formula for nitric acid?', options: ['HNO3', 'HCl', 'H2SO4'], correctAnswer: 'HNO3', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the atomic number of oxygen?', options: ['6', '7', '8'], correctAnswer: '8', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the chemical formula for sulfur dioxide?', options: ['SO2', 'SO3', 'S2O'], correctAnswer: 'SO2', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the pH value of sulfuric acid?', options: ['0', '1', '2'], correctAnswer: '1', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the chemical formula for nitrous oxide?', options: ['N2O', 'NO2', 'N2O3'], correctAnswer: 'N2O', difficulty: 'Advanced', topic: 'Science' },
    { question: 'What is the atomic number of carbon?', options: ['5', '6', '7'], correctAnswer: '6', difficulty: 'Advanced', topic: 'Science' },

    // History - Beginner
    { question: 'What year did Christopher Columbus discover America?', options: ['1492', '1500', '1600'], correctAnswer: '1492', difficulty: 'Beginner', topic: 'History' },
    { question: 'Who was the first president of the United States?', options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln'], correctAnswer: 'George Washington', difficulty: 'Beginner', topic: 'History' },
    { question: 'What event marked the start of World War I?', options: ['The assassination of Archduke Franz Ferdinand', 'The sinking of the Titanic', 'The signing of the Treaty of Versailles'], correctAnswer: 'The assassination of Archduke Franz Ferdinand', difficulty: 'Beginner', topic: 'History' },
    { question: 'Which ancient civilization built the pyramids?', options: ['Greek', 'Roman', 'Egyptian'], correctAnswer: 'Egyptian', difficulty: 'Beginner', topic: 'History' },
    { question: 'What year did the Titanic sink?', options: ['1912', '1920', '1930'], correctAnswer: '1912', difficulty: 'Beginner', topic: 'History' },
    { question: 'Who wrote the Declaration of Independence?', options: ['George Washington', 'Thomas Jefferson', 'Benjamin Franklin'], correctAnswer: 'Thomas Jefferson', difficulty: 'Beginner', topic: 'History' },
    { question: 'What was the capital of the Roman Empire?', options: ['Athens', 'Rome', 'Alexandria'], correctAnswer: 'Rome', difficulty: 'Beginner', topic: 'History' },
    { question: 'Who was the first man to step on the moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin'], correctAnswer: 'Neil Armstrong', difficulty: 'Beginner', topic: 'History' },
    { question: 'Who was the first female Prime Minister of the United Kingdom?', options: ['Margaret Thatcher', 'Queen Elizabeth I', 'Indira Gandhi'], correctAnswer: 'Margaret Thatcher', difficulty: 'Beginner', topic: 'History' },
    { question: 'Which city is known as the "City of Love"?', options: ['Rome', 'Paris', 'Venice'], correctAnswer: 'Paris', difficulty: 'Beginner', topic: 'History' },

    // History - Intermediate
    { question: 'Who was the first emperor of Rome?', options: ['Augustus', 'Julius Caesar', 'Nero'], correctAnswer: 'Augustus', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Which war was known as the "War to End All Wars"?', options: ['World War I', 'World War II', 'Vietnam War'], correctAnswer: 'World War I', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who painted the Mona Lisa?', options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'], correctAnswer: 'Leonardo da Vinci', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who founded the Mongol Empire?', options: ['Genghis Khan', 'Attila the Hun', 'Alexander the Great'], correctAnswer: 'Genghis Khan', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who wrote "The Communist Manifesto"?', options: ['Karl Marx', 'Vladimir Lenin', 'Joseph Stalin'], correctAnswer: 'Karl Marx', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who was the longest-reigning monarch in British history?', options: ['Queen Victoria', 'Queen Elizabeth II', 'King George III'], correctAnswer: 'Queen Victoria', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who was the first female President of India?', options: ['Indira Gandhi', 'Pratibha Patil', 'Sonia Gandhi'], correctAnswer: 'Pratibha Patil', difficulty: 'Intermediate', topic: 'History' },
    { question: 'What was the first country to grant women the right to vote?', options: ['United States', 'United Kingdom', 'New Zealand'], correctAnswer: 'New Zealand', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who founded the city of Rome according to legend?', options: ['Romulus and Remus', 'Julius Caesar', 'Nero'], correctAnswer: 'Romulus and Remus', difficulty: 'Intermediate', topic: 'History' },
    { question: 'Who was the first African American president of the United States?', options: ['Barack Obama', 'Martin Luther King Jr.', 'Malcolm X'], correctAnswer: 'Barack Obama', difficulty: 'Intermediate', topic: 'History' },

    // History - Advanced
    { question: 'Who was the last pharaoh of ancient Egypt?', options: ['Cleopatra', 'Hatshepsut', 'Nefertiti'], correctAnswer: 'Cleopatra', difficulty: 'Advanced', topic: 'History' },
    { question: 'What year did the Berlin Wall fall?', options: ['1989', '1990', '1991'], correctAnswer: '1989', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the longest-reigning monarch in European history?', options: ['Queen Victoria', 'Louis XIV', 'Queen Elizabeth II'], correctAnswer: 'Louis XIV', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the first emperor of China?', options: ['Qin Shi Huang', 'Han Wudi', 'Kangxi Emperor'], correctAnswer: 'Qin Shi Huang', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the first female president of Argentina?', options: ['Eva Perón', 'Isabel Perón', 'Cristina Fernández de Kirchner'], correctAnswer: 'Isabel Perón', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the first female prime minister of India?', options: ['Indira Gandhi', 'Sonia Gandhi', 'Margaret Thatcher'], correctAnswer: 'Indira Gandhi', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the first emperor of Japan?', options: ['Emperor Jimmu', 'Emperor Meiji', 'Emperor Taisho'], correctAnswer: 'Emperor Jimmu', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the longest-reigning monarch in Russian history?', options: ['Peter the Great', 'Catherine the Great', 'Nicholas II'], correctAnswer: 'Catherine the Great', difficulty: 'Advanced', topic: 'History' },
    { question: 'What was the first country to grant universal suffrage?', options: ['New Zealand', 'Australia', 'United States'], correctAnswer: 'New Zealand', difficulty: 'Advanced', topic: 'History' },
    { question: 'Who was the first woman to win a Nobel Prize?', options: ['Marie Curie', 'Rosa Parks', 'Mother Teresa'], correctAnswer: 'Marie Curie', difficulty: 'Advanced', topic: 'History' },
];


// Store state
let currentQuiz = [];
let currentIndex = 0;
let userAnswers = [];

// Toggle topic card selection
function toggleTopic(element, topic) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle("selected");
}

// Start quiz from setup section
function generateQuiz() {
    const selectedTopics = Array.from(document.querySelectorAll('input[name="topic"]:checked')).map(input => input.value);
    const difficulty = document.getElementById('difficulty').value;
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    if (selectedTopics.length === 0) {
        alert("Please select at least one topic.");
        return;
    }

    const filteredQuestions = questions.filter(q =>
        selectedTopics.includes(q.topic) && q.difficulty === difficulty
    );

    if (filteredQuestions.length < numQuestions) {
        alert("Not enough questions for this combination. Try a lower number.");
        return;
    }

    // Shuffle and pick N questions
    currentQuiz = [];
    const pool = [...filteredQuestions];
    for (let i = 0; i < numQuestions; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        currentQuiz.push(pool.splice(idx, 1)[0]);
    }

    userAnswers = new Array(currentQuiz.length).fill(null);
    currentIndex = 0;

    document.getElementById("setupSection").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    renderQuestion();
}

// Render one question
function renderQuestion() {
    const q = currentQuiz[currentIndex];
    const container = document.getElementById("quizContainer");

    const selectedAnswer = userAnswers[currentIndex];

    container.innerHTML = `
        <div class="question-card">
            <div class="question-text">${currentIndex + 1}. ${q.question}</div>
            <div class="options-grid">
                ${q.options.map(option => `
                    <div class="option-card ${selectedAnswer === option ? 'selected' : ''}" onclick="selectAnswer('${option}')">
                        <input type="radio" name="option" value="${option}" ${selectedAnswer === option ? 'checked' : ''}>
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="nav-buttons">
                <button class="nav-btn prev-btn" onclick="previousQuestion()" ${currentIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button class="nav-btn next-btn" onclick="nextQuestion()">
                    ${currentIndex === currentQuiz.length - 1 ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    `;
}

// Select an answer
function selectAnswer(answer) {
    userAnswers[currentIndex] = answer;
    renderQuestion();
}

// Go to previous question
function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

// Go to next or finish quiz
function nextQuestion() {
    if (currentIndex === currentQuiz.length - 1) {
        showResults();
    } else {
        currentIndex++;
        renderQuestion();
    }
}

// Show final score and feedback
function showResults() {
    const container = document.getElementById("quizContainer");
    let score = 0;

    const feedbackHtml = currentQuiz.map((q, i) => {
        const correct = q.correctAnswer === userAnswers[i];
        if (correct) score++;
        return `
            <p>${i + 1}. ${q.question}<br>
            Your answer: <strong>${userAnswers[i] || 'None'}</strong> — 
            ${correct ? '<span style="color: green">Correct</span>' : `<span style="color: red">Incorrect (Correct: ${q.correctAnswer})</span>`}
            </p>
        `;
    }).join("");

    container.innerHTML = `
        <div class="results-section">
            <div class="score-circle" style="--score-angle: ${Math.round((score / currentQuiz.length) * 360)}deg;">
                <div class="score-text">${score}/${currentQuiz.length}</div>
            </div>
            <h2 class="results-title">${score >= currentQuiz.length / 2 ? "Well done!" : "Keep practicing!"}</h2>
            <p class="results-subtitle">Here's how you did:</p>
            ${feedbackHtml}
            <button class="retry-btn" onclick="resetQuiz()">Try Again</button>
        </div>
    `;
}

// Restart the quiz
function resetQuiz() {
    currentQuiz = [];
    userAnswers = [];
    currentIndex = 0;

    document.getElementById("setupSection").style.display = "block";
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("quizContainer").innerHTML = "";
}

