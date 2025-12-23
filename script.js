const app = {
    // 1. Enter App Logic
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex'; // Use flex for layout
        this.loadMathChapters(); // Default load
    },

    // 2. Logout Logic
    logout: function() {
        document.getElementById('app-dashboard').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
        window.scrollTo(0, 0);
    },

    // 3. Navigation Logic
    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    // ================= DATA SECTION =================

    // MATHS (Updated)
    loadMathChapters: function() {
        const data = [
            { hi: "समुच्चय, संबंध और फलन", en: "Sets, Relations and Functions" },
            { hi: "सम्मिश्र संख्याएँ और द्विघात समीकरण", en: "Complex Numbers and Quadratic Equations" },
            { hi: "आव्यूह और सारणिक", en: "Matrices and Determinants" },
            { hi: "क्रमचय और संचय", en: "Permutations and Combinations" },
            { hi: "गणितीय आगमन (हटा दिया गया)", en: "Mathematical Induction (Removed)" }, 
            { hi: "द्विपद प्रमेय", en: "Binomial Theorem" },
            { hi: "अनुक्रम तथा श्रेणी", en: "Sequence and Series" },
            { hi: "सीमा, सांतत्य तथा अवकलनीयता", en: "Limit, Continuity and Differentiability" },
            { hi: "समाकलन गणित", en: "Integral Calculus" },
            { hi: "अवकल समीकरण", en: "Differential Equations" },
            { hi: "निर्देशांक ज्यामिति (सरल रेखा, वृत्त, शांकव)", en: "Coordinate Geometry (Lines, Circles, Conics)" },
            { hi: "त्रिविमीय ज्यामिति", en: "Three Dimensional Geometry" },
            { hi: "सदिश बीजगणित", en: "Vector Algebra" },
            { hi: "सांख्यिकी और प्रायिकता", en: "Statistics and Probability" },
            { hi: "त्रिकोणमिति", en: "Trigonometry" }
        ];
        this.renderChapterList(data, "Mathematics");
    },

    // PHYSICS (Updated from Syllabus)
    loadPhysicsChapters: function() {
        const data = [
            { hi: "इकाई और मापन", en: "Units and Measurements" },
            { hi: "शुद्धगतिकी (सरल रेखा और समतल)", en: "Kinematics (Straight Line & Plane)" },
            { hi: "गति के नियम", en: "Laws of Motion" },
            { hi: "कार्य, ऊर्जा और शक्ति", en: "Work, Energy and Power" },
            { hi: "घूर्णी गति", en: "Rotational Motion" },
            { hi: "गुरुत्वाकर्षण", en: "Gravitation" },
            { hi: "ठोस और द्रवों के गुण", en: "Properties of Solids and Liquids" },
            { hi: "ऊष्मागतिकी", en: "Thermodynamics" },
            { hi: "गैस का अणुगति सिद्धांत", en: "Kinetic Theory of Gases" },
            { hi: "दोलन और तरंगें", en: "Oscillations and Waves" },
            { hi: "स्थिर विद्युत", en: "Electrostatics" },
            { hi: "विद्युत धारा", en: "Current Electricity" },
            { hi: "धारा का चुंबकीय प्रभाव", en: "Magnetic Effects of Current and Magnetism" },
            { hi: "विद्युत चुम्बकीय प्रेरण और प्रत्यावर्ती धारा", en: "EMI and AC" },
            { hi: "विद्युत चुम्बकीय तरंगें", en: "Electromagnetic Waves" },
            { hi: "प्रकाशिकी (किरण और तरंग)", en: "Optics (Ray and Wave)" },
            { hi: "विकिरण और द्रव्य की द्वैत प्रकृति", en: "Dual Nature of Matter and Radiation" },
            { hi: "परमाणु और नाभिक", en: "Atoms and Nuclei" },
            { hi: "इलेक्ट्रॉनिक युक्तियाँ", en: "Electronic Devices" },
            { hi: "प्रायोगिक कौशल", en: "Experimental Skills" }
        ];
        this.renderChapterList(data, "Physics");
    },

    // CHEMISTRY 1: PHYSICAL (Updated from PDF)
    loadPhysicalChem: function() {
        const data = [
            { hi: "रसायन विज्ञान की कुछ मूल अवधारणाएँ", en: "Some Basic Concepts in Chemistry" },
            { hi: "परमाणु संरचना", en: "Atomic Structure" },
            { hi: "रासायनिक आबंधन और आणविक संरचना", en: "Chemical Bonding and Molecular Structure" },
            { hi: "रासायनिक ऊष्मगतिकी", en: "Chemical Thermodynamics" },
            { hi: "विलयन", en: "Solutions" },
            { hi: "साम्यावस्था", en: "Equilibrium" },
            { hi: "रेडॉक्स अभिक्रियाएँ और वैद्युतरसायन", en: "Redox Reactions and Electrochemistry" },
            { hi: "रासायनिक बलगतिकी", en: "Chemical Kinetics" }
        ];
        this.renderChapterList(data, "Physical Chemistry");
    },

    // CHEMISTRY 2: INORGANIC (Updated from PDF)
    loadInorganicChem: function() {
        const data = [
            { hi: "तत्वों का वर्गीकरण और गुणधर्मों में आवर्विता", en: "Classification of Elements and Periodicity" },
            { hi: "p-ब्लॉक के तत्व (Group 13-18)", en: "p- Block Elements" },
            { hi: "d और f-ब्लॉक के तत्व", en: "d and f- Block Elements" },
            { hi: "उपसहसंयोजक यौगिक", en: "Coordination Compounds" }
        ];
        this.renderChapterList(data, "Inorganic Chemistry");
    },

    // CHEMISTRY 3: ORGANIC (Updated from PDF)
    loadOrganicChem: function() {
        const data = [
            { hi: "कार्बनिक यौगिकों का शोधन और अभिलक्षणन", en: "Purification and Characterisation of Organic Compounds" },
            { hi: "कार्बनिक रसायन: कुछ आधारभूत सिद्धांत (GOC)", en: "Some Basic Principles of Organic Chemistry" },
            { hi: "हाइड्रोकार्बन", en: "Hydrocarbons" },
            { hi: "हैलोएल्केन और हैलोएरीन", en: "Organic Compounds Containing Halogens" },
            { hi: "ऑक्सीजन युक्त कार्बनिक यौगिक (Alcohol, Phenol, Ether, Aldehyde...)", en: "Organic Compounds Containing Oxygen" },
            { hi: "नाइट्रोजन युक्त कार्बनिक यौगिक (Amines)", en: "Organic Compounds Containing Nitrogen" },
            { hi: "जैव अणु", en: "Biomolecules" },
            { hi: "प्रायोगिक रसायन से संबंधित सिद्धांत", en: "Principles Related to Practical Chemistry" }
        ];
        this.renderChapterList(data, "Organic Chemistry");
    },

    // ================= RENDER LOGIC =================

    renderChapterList: function(list, title) {
        const container = document.getElementById('chapter-list-container');
        container.innerHTML = ''; // Clear old

        // Update Heading
        document.getElementById('chapter-heading').innerText = title;

        list.forEach((chap, i) => {
            const div = document.createElement('div');
            div.className = 'chap-card';
            div.innerHTML = `
                <div>
                    <h4 style="margin:0; color:#1e293b; font-size:1.05rem;">${i+1}. ${chap.hi}</h4>
                    <p style="margin:4px 0 0; color:#64748b; font-size:0.9rem;">${chap.en}</p>
                </div>
                <button class="btn-start" onclick="alert('Test Module for: ${chap.en} \\nLaunching Soon...')">Start Test</button>
            `;
            container.appendChild(div);
        });

        this.showScreen('screen-chapters');
    }
};

// SECURITY SCRIPT: Disable Inspect Element & Right Click
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 123) { return false; } // F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Ctrl+Shift+I
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { return false; } // Ctrl+Shift+C
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { return false; } // Ctrl+U
});
