let currentQuestions = [];
let userAnswers = {};
let currentQIndex = 0;
let timerInterval;

const app = {
    // 1. Navigation Flow
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex';
        this.showScreen('screen-subjects');
    },
    logout: function() {
        location.reload(); // Simple Reset
    },
    showScreen: function(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        document.getElementById('mySidebar').classList.remove('active'); // Close mobile menu
    },
    toggleSidebar: function() {
        document.getElementById('mySidebar').classList.toggle('active');
    },

    // 2. Loading Subjects (With correct file paths)
    loadMathChapters: function() {
        // Sirf example ke liye Sets wala link kiya hai
        const list = [
            { hi: "समुच्चय (Sets)", en: "Sets", file: "sets.json" },
            { hi: "संबंध और फलन", en: "Relations Functions", file: "sets.json" }, // Demo: same file
            { hi: "त्रिकोणमिति", en: "Trigonometry", file: "sets.json" }
        ];
        this.renderList(list, "Mathematics", "math");
    },
    loadPhysicsChapters: function() {
        const list = [
            { hi: "शुद्धगतिकी", en: "Kinematics", file: "kinematics.json" },
            { hi: "गति के नियम", en: "Laws of Motion", file: "kinematics.json" }
        ];
        this.renderList(list, "Physics", "physics");
    },
    loadPhysicalChem: function() {
        const list = [
            { hi: "परमाणु संरचना", en: "Atomic Structure", file: "atomic.json" }
        ];
        this.renderList(list, "Physical Chemistry", "chem");
    },

    renderList: function(list, title, folder) {
        const container = document.getElementById('chapter-list-container');
        container.innerHTML = '';
        document.getElementById('chapter-heading').innerText = title;

        list.forEach((chap, i) => {
            const div = document.createElement('div');
            div.className = 'card-3d';
            div.style.marginBottom = '15px';
            div.innerHTML = `
                <h4>${i+1}. ${chap.hi}</h4>
                <p>${chap.en}</p>
            `;
            // Click karne par Config screen khulegi
            div.onclick = () => this.openConfig(chap.en, `data/${folder}/${chap.file}`);
            container.appendChild(div);
        });
        this.showScreen('screen-chapters');
    },

    // 3. Exam Logic
    openConfig: function(name, path) {
        document.getElementById('config-chapter-name').innerText = name;
        document.getElementById('screen-config').dataset.path = path;
        this.showScreen('screen-config');
    },

    startActualTest: function() {
        const path = document.getElementById('screen-config').dataset.path;
        const qCount = document.getElementById('config-q-count').value;
        const time = document.getElementById('config-timer').value * 60;

        fetch(path)
            .then(res => res.json())
            .then(data => {
                currentQuestions = data.slice(0, qCount);
                if(!currentQuestions.length) { alert("No questions found!"); return; }
                
                userAnswers = {};
                currentQIndex = 0;
                this.startTimer(time);
                this.loadQuestion(0);
                this.showScreen('screen-exam');
            })
            .catch(err => alert("Error loading file: " + path + "\nMake sure you created the JSON file!"));
    },

    loadQuestion: function(idx) {
        if(idx < 0 || idx >= currentQuestions.length) return;
        currentQIndex = idx;
        const q = currentQuestions[idx];

        document.getElementById('current-q-no').innerText = idx + 1;
        document.getElementById('total-q-no').innerText = currentQuestions.length;
        document.getElementById('q-level').innerText = q.level;
        document.getElementById('q-text').innerHTML = q.text; // MathJax support

        // Image Handling
        const imgBox = document.getElementById('q-image-container');
        imgBox.innerHTML = '';
        if(q.image) {
            imgBox.innerHTML = `<img src="${q.image}" alt="Diagram">`;
        }

        // Options
        const optBox = document.getElementById('q-options');
        optBox.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = `option-btn ${userAnswers[idx] === i ? 'selected' : ''}`;
            btn.innerHTML = opt;
            btn.onclick = () => {
                userAnswers[idx] = i;
                this.loadQuestion(idx);
            };
            optBox.appendChild(btn);
        });

        // Refresh MathJax
        if(window.MathJax) MathJax.typeset();
    },

    nextQuestion: function() { this.loadQuestion(currentQIndex + 1); },
    prevQuestion: function() { this.loadQuestion(currentQIndex - 1); },

    startTimer: function(seconds) {
        clearInterval(timerInterval);
        const display = document.getElementById('time-remaining');
        timerInterval = setInterval(() => {
            seconds--;
            let m = Math.floor(seconds / 60);
            let s = seconds % 60;
            display.innerText = `${m}:${s<10?'0'+s:s}`;
            if(seconds <= 0) this.submitExam();
        }, 1000);
    },

    submitExam: function() {
        clearInterval(timerInterval);
        let correct = 0;
        currentQuestions.forEach((q, i) => {
            if(userAnswers[i] === q.correct) correct++;
        });
        document.getElementById('res-score').innerText = correct + "/" + currentQuestions.length;
        
        // Chart
        new Chart(document.getElementById('resultChart'), {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Wrong'],
                datasets: [{ data: [correct, currentQuestions.length-correct], backgroundColor:['#22c55e','#ef4444'] }]
            }
        });
        this.showScreen('screen-result');
    }
};
