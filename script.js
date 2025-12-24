// Global Variables for Exam
let currentQuestions = [];
let userAnswers = {};
let currentQIndex = 0;
let timerInterval;
let examTimeSeconds = 0;

const app = {
    // === 1. NAVIGATION LOGIC (Corrected Flow) ===
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex';
        this.showScreen('screen-subjects'); // Seedha Subject Page dikhana
    },

    logout: function() {
        document.getElementById('app-dashboard').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
        window.scrollTo(0, 0);
    },

    toggleSidebar: function() {
        const sidebar = document.getElementById('mySidebar');
        const overlay = document.querySelector('.mobile-overlay');
        sidebar.classList.toggle('active');
        if(overlay) overlay.classList.toggle('active');
    },

    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        
        const sidebar = document.getElementById('mySidebar');
        if(sidebar && sidebar.classList.contains('active')) {
            this.toggleSidebar();
        }
    },

    // === 2. DATA LOADING (Subjects) ===
    loadMathChapters: function() {
        const data = [
            { hi: "समुच्चय, संबंध और फलन", en: "Sets, Relations and Functions", file: "sets.json" },
            { hi: "सम्मिश्र संख्याएँ और द्विघात समीकरण", en: "Complex Numbers and Quadratic Equations", file: "complex.json" },
            { hi: "आव्यूह और सारणिक", en: "Matrices and Determinants", file: "matrices.json" },
            { hi: "क्रमचय और संचय", en: "Permutations and Combinations", file: "pnc.json" },
            { hi: "द्विपद प्रमेय", en: "Binomial Theorem", file: "binomial.json" },
            { hi: "अनुक्रम तथा श्रेणी", en: "Sequence and Series", file: "sequence.json" },
            { hi: "सीमा, सांतत्य तथा अवकलनीयता", en: "Limit, Continuity and Differentiability", file: "lcd.json" },
            { hi: "समाकलन गणित", en: "Integral Calculus", file: "integral.json" },
            { hi: "अवकल समीकरण", en: "Differential Equations", file: "diff_eq.json" },
            { hi: "निर्देशांक ज्यामिति", en: "Coordinate Geometry", file: "coord.json" },
            { hi: "त्रिविमीय ज्यामिति", en: "Three Dimensional Geometry", file: "3d.json" },
            { hi: "सदिश बीजगणित", en: "Vector Algebra", file: "vector.json" },
            { hi: "सांख्यिकी और प्रायिकता", en: "Statistics and Probability", file: "stats.json" },
            { hi: "त्रिकोणमिति", en: "Trigonometry", file: "trigo.json" }
        ];
        this.renderChapterList(data, "Mathematics", "math");
    },

    loadPhysicsChapters: function() {
        const data = [
            { hi: "इकाई और मापन", en: "Units and Measurements", file: "units.json" },
            { hi: "शुद्धगतिकी", en: "Kinematics", file: "kinematics.json" },
            { hi: "गति के नियम", en: "Laws of Motion", file: "laws_motion.json" },
            { hi: "कार्य, ऊर्जा और शक्ति", en: "Work, Energy and Power", file: "wep.json" },
            { hi: "घूर्णी गति", en: "Rotational Motion", file: "rotational.json" },
            { hi: "गुरुत्वाकर्षण", en: "Gravitation", file: "gravitation.json" },
            { hi: "ठोस और द्रवों के गुण", en: "Properties of Solids and Liquids", file: "solids_fluids.json" },
            { hi: "ऊष्मागतिकी", en: "Thermodynamics", file: "thermo.json" },
            { hi: "गैस का अणुगति सिद्धांत", en: "Kinetic Theory of Gases", file: "ktg.json" },
            { hi: "दोलन और तरंगें", en: "Oscillations and Waves", file: "waves.json" },
            { hi: "स्थिर विद्युत", en: "Electrostatics", file: "electro.json" },
            { hi: "विद्युत धारा", en: "Current Electricity", file: "current.json" },
            { hi: "धारा का चुंबकीय प्रभाव", en: "Magnetic Effects of Current", file: "magnetism.json" },
            { hi: "विद्युत चुम्बकीय प्रेरण", en: "EMI and AC", file: "emi_ac.json" },
            { hi: "विद्युत चुम्बकीय तरंगें", en: "Electromagnetic Waves", file: "em_waves.json" },
            { hi: "प्रकाशिकी", en: "Optics", file: "optics.json" },
            { hi: "विकिरण और द्रव्य की द्वैत प्रकृति", en: "Dual Nature of Matter", file: "dual_nature.json" },
            { hi: "परमाणु और नाभिक", en: "Atoms and Nuclei", file: "atoms.json" },
            { hi: "इलेक्ट्रॉनिक युक्तियाँ", en: "Electronic Devices", file: "electronics.json" }
        ];
        this.renderChapterList(data, "Physics", "physics");
    },

    loadPhysicalChem: function() {
        const data = [
            { hi: "रसायन की मूल अवधारणाएँ", en: "Basic Concepts", file: "basic_chem.json" },
            { hi: "परमाणु संरचना", en: "Atomic Structure", file: "atomic.json" },
            { hi: "रासायनिक आबंधन", en: "Chemical Bonding", file: "bonding.json" },
            { hi: "रासायनिक ऊष्मगतिकी", en: "Thermodynamics", file: "chem_thermo.json" },
            { hi: "विलयन", en: "Solutions", file: "solutions.json" },
            { hi: "साम्यावस्था", en: "Equilibrium", file: "equilibrium.json" },
            { hi: "रेडॉक्स और वैद्युतरसायन", en: "Redox & Electrochemistry", file: "electrochem.json" },
            { hi: "रासायनिक बलगतिकी", en: "Chemical Kinetics", file: "kinetics.json" }
        ];
        this.renderChapterList(data, "Physical Chemistry", "chem");
    },

    loadInorganicChem: function() {
        const data = [
            { hi: "तत्वों का वर्गीकरण", en: "Periodic Classification", file: "periodic.json" },
            { hi: "p-ब्लॉक के तत्व", en: "p-Block Elements", file: "pblock.json" },
            { hi: "d और f-ब्लॉक के तत्व", en: "d & f-Block Elements", file: "dfblock.json" },
            { hi: "उपसहसंयोजक यौगिक", en: "Coordination Compounds", file: "coordination.json" }
        ];
        this.renderChapterList(data, "Inorganic Chemistry", "chem");
    },

    loadOrganicChem: function() {
        const data = [
            { hi: "GOC", en: "General Organic Chemistry", file: "goc.json" },
            { hi: "हाइड्रोकार्बन", en: "Hydrocarbons", file: "hydrocarbons.json" },
            { hi: "हैलोएल्केन और हैलोएरीन", en: "Haloalkanes & Haloarenes", file: "halo.json" },
            { hi: "ऑक्सीजन युक्त यौगिक", en: "Oxygen Compounds", file: "oxygen.json" },
            { hi: "नाइट्रोजन युक्त यौगिक", en: "Nitrogen Compounds", file: "nitrogen.json" },
            { hi: "जैव अणु", en: "Biomolecules", file: "bio.json" }
        ];
        this.renderChapterList(data, "Organic Chemistry", "chem");
    },

    // === 3. RENDER CHAPTER LIST ===
    renderChapterList: function(list, title, subjectFolder) {
        const container = document.getElementById('chapter-list-container');
        container.innerHTML = ''; 
        document.getElementById('chapter-heading').innerText = title;

        list.forEach((chap, i) => {
            const div = document.createElement('div');
            div.className = 'chap-card';
            
            // File path create karna
            const filePath = `data/${subjectFolder}/${chap.file}`;

            div.innerHTML = `
                <div>
                    <h4 style="margin:0; color:#1e293b; font-size:1.05rem;">${i+1}. ${chap.hi}</h4>
                    <p style="margin:4px 0 0; color:#64748b; font-size:0.9rem;">${chap.en}</p>
                </div>
                <button class="btn-start" onclick="app.setupExamConfig('${chap.en}', '${filePath}')">Start Test</button>
            `;
            container.appendChild(div);
        });
        this.showScreen('screen-chapters');
    },

    // === 4. EXAM LOGIC ===
    
    // Step A: Config Modal Open
    setupExamConfig: function(chapterName, jsonFile) {
        document.getElementById('config-chapter-name').innerText = chapterName;
        document.getElementById('screen-config').dataset.file = jsonFile;
        this.showScreen('screen-config');
    },

    // Step B: Start Actual Test (Fetch JSON)
    startActualTest: function() {
        const jsonFile = document.getElementById('screen-config').dataset.file;
        const qCount = parseInt(document.getElementById('config-q-count').value);
        const timeMin = parseInt(document.getElementById('config-timer').value);
        
        // Fetch Questions
        fetch(jsonFile)
            .then(response => {
                if (!response.ok) throw new Error("File nahi mili. Check folder structure.");
                return response.json();
            })
            .then(data => {
                // Shuffle & Slice
                currentQuestions = data.sort(() => 0.5 - Math.random()).slice(0, qCount);
                
                if(currentQuestions.length === 0) {
                    alert("Is file me questions nahi hain!");
                    return;
                }

                userAnswers = {};
                currentQIndex = 0;
                examTimeSeconds = timeMin * 60;
                
                this.startTimer();
                this.loadQuestionUI(0);
                this.showScreen('screen-exam');
            })
            .catch(err => {
                console.error(err);
                alert(`Error: ${jsonFile} file load nahi hui. \nMake sure 'data/math/sets.json' exists.`);
            });
    },

    // Step C: Timer
    startTimer: function() {
        clearInterval(timerInterval);
        const display = document.getElementById('time-remaining');
        
        timerInterval = setInterval(() => {
            examTimeSeconds--;
            let m = Math.floor(examTimeSeconds / 60);
            let s = examTimeSeconds % 60;
            display.innerText = `${m}:${s < 10 ? '0'+s : s}`;
            
            if(examTimeSeconds <= 0) {
                this.submitExam();
            }
        }, 1000);
    },

    // Step D: Show Question
    loadQuestionUI: function(index) {
        if(index < 0 || index >= currentQuestions.length) return;
        currentQIndex = index;

        const q = currentQuestions[index];
        
        // Update UI
        document.getElementById('current-q-no').innerText = index + 1;
        document.getElementById('total-q-no').innerText = currentQuestions.length;
        document.getElementById('q-level').innerText = q.level || 'Moderate';
        document.getElementById('q-text').innerText = q.text;

        // Image Handling
        const imgContainer = document.getElementById('q-image-container');
        imgContainer.innerHTML = '';
        if(q.image) {
            imgContainer.innerHTML = `<img src="${q.image}" alt="Diagram">`;
        }

        // Options
        const optsContainer = document.getElementById('q-options');
        optsContainer.innerHTML = '';
        
        q.options.forEach((opt, i) => {
            const btn = document.createElement('div');
            btn.className = `option-btn ${userAnswers[index] === i ? 'selected' : ''}`;
            btn.innerText = opt;
            btn.onclick = () => {
                userAnswers[index] = i;
                this.loadQuestionUI(index); 
            };
            optsContainer.appendChild(btn);
        });
        
        // Re-render MathJax (Equations ke liye)
        if(window.MathJax) MathJax.typeset();
    },

    nextQuestion: function() { this.loadQuestionUI(currentQIndex + 1); },
    prevQuestion: function() { this.loadQuestionUI(currentQIndex - 1); },

    // Step E: Submit & Analysis
    submitExam: function() {
        clearInterval(timerInterval);
        
        let correct = 0;
        let attempted = Object.keys(userAnswers).length;
        let total = currentQuestions.length;

        currentQuestions.forEach((q, i) => {
            if(userAnswers[i] === q.correct) correct++;
        });

        let accuracy = attempted > 0 ? ((correct/attempted)*100).toFixed(1) : 0;
        
        document.getElementById('res-score').innerText = `${correct} / ${total}`;
        document.getElementById('res-accuracy').innerText = `${accuracy}%`;

        this.renderChart(correct, total - correct - (total-attempted), total-attempted);
        this.showScreen('screen-result');
    },

    renderChart: function(c, w, s) {
        const ctx = document.getElementById('resultChart').getContext('2d');
        if(window.myChart) window.myChart.destroy();
        
        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Wrong', 'Skipped'],
                datasets: [{
                    data: [c, w, s],
                    backgroundColor: ['#22c55e', '#ef4444', '#cbd5e1']
                }]
            }
        });
    }
};

// Security: Disable F12
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 123) return false; 
});
