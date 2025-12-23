const app = {
    // 1. Enter App Logic (Fix: Seedha Subject Page)
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex'; 
        
        // Yaha important hai: Pahle sab screens chupao, fir sirf 'Subject' wali dikhao
        this.showScreen('screen-subjects');
    },

    // 2. Logout Logic
    logout: function() {
        document.getElementById('app-dashboard').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
        window.scrollTo(0, 0);
    },

    // 3. Mobile Sidebar Toggle
    toggleSidebar: function() {
        const sidebar = document.getElementById('mySidebar');
        const overlay = document.querySelector('.mobile-overlay');
        sidebar.classList.toggle('active');
        if(overlay) overlay.classList.toggle('active');
    },

    // 4. Navigation Logic
    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    // ================= DATA SECTION =================

    // MATHS
    loadMathChapters: function() {
        const data = [
            { hi: "समुच्चय, संबंध और फलन", en: "Sets, Relations and Functions" },
            { hi: "सम्मिश्र संख्याएँ और द्विघात समीकरण", en: "Complex Numbers and Quadratic Equations" },
            { hi: "आव्यूह और सारणिक", en: "Matrices and Determinants" },
            { hi: "क्रमचय और संचय", en: "Permutations and Combinations" },
            { hi: "द्विपद प्रमेय", en: "Binomial Theorem" },
            { hi: "अनुक्रम तथा श्रेणी", en: "Sequence and Series" },
            { hi: "सीमा, सांतत्य तथा अवकलनीयता", en: "Limit, Continuity and Differentiability" },
            { hi: "समाकलन गणित", en: "Integral Calculus" },
            { hi: "अवकल समीकरण", en: "Differential Equations" },
            { hi: "निर्देशांक ज्यामिति", en: "Coordinate Geometry" },
            { hi: "त्रिविमीय ज्यामिति", en: "Three Dimensional Geometry" },
            { hi: "सदिश बीजगणित", en: "Vector Algebra" },
            { hi: "सांख्यिकी और प्रायिकता", en: "Statistics and Probability" },
            { hi: "त्रिकोणमिति", en: "Trigonometry" }
        ];
        this.renderChapterList(data, "Mathematics");
    },

    // PHYSICS
    loadPhysicsChapters: function() {
        const data = [
            { hi: "इकाई और मापन", en: "Units and Measurements" },
            { hi: "शुद्धगतिकी", en: "Kinematics" },
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
            { hi: "धारा का चुंबकीय प्रभाव", en: "Magnetic Effects of Current" },
            { hi: "विद्युत चुम्बकीय प्रेरण", en: "EMI and AC" },
            { hi: "विद्युत चुम्बकीय तरंगें", en: "Electromagnetic Waves" },
            { hi: "प्रकाशिकी", en: "Optics" },
            { hi: "विकिरण और द्रव्य की द्वैत प्रकृति", en: "Dual Nature of Matter" },
            { hi: "परमाणु और नाभिक", en: "Atoms and Nuclei" },
            { hi: "इलेक्ट्रॉनिक युक्तियाँ", en: "Electronic Devices" }
        ];
        this.renderChapterList(data, "Physics");
    },

    // CHEMISTRY 1
    loadPhysicalChem: function() {
        const data = [
            { hi: "रसायन की मूल अवधारणाएँ", en: "Basic Concepts" },
            { hi: "परमाणु संरचना", en: "Atomic Structure" },
            { hi: "रासायनिक आबंधन", en: "Chemical Bonding" },
            { hi: "रासायनिक ऊष्मगतिकी", en: "Thermodynamics" },
            { hi: "विलयन", en: "Solutions" },
            { hi: "साम्यावस्था", en: "Equilibrium" },
            { hi: "रेडॉक्स और वैद्युतरसायन", en: "Redox & Electrochemistry" },
            { hi: "रासायनिक बलगतिकी", en: "Chemical Kinetics" }
        ];
        this.renderChapterList(data, "Physical Chemistry");
    },

    // CHEMISTRY 2
    loadInorganicChem: function() {
        const data = [
            { hi: "तत्वों का वर्गीकरण", en: "Periodic Classification" },
            { hi: "p-ब्लॉक के तत्व", en: "p-Block Elements" },
            { hi: "d और f-ब्लॉक के तत्व", en: "d & f-Block Elements" },
            { hi: "उपसहसंयोजक यौगिक", en: "Coordination Compounds" }
        ];
        this.renderChapterList(data, "Inorganic Chemistry");
    },

    // CHEMISTRY 3
    loadOrganicChem: function() {
        const data = [
            { hi: "GOC", en: "General Organic Chemistry" },
            { hi: "हाइड्रोकार्बन", en: "Hydrocarbons" },
            { hi: "हैलोएल्केन और हैलोएरीन", en: "Haloalkanes & Haloarenes" },
            { hi: "ऑक्सीजन युक्त यौगिक", en: "Oxygen Compounds" },
            { hi: "नाइट्रोजन युक्त यौगिक", en: "Nitrogen Compounds" },
            { hi: "जैव अणु", en: "Biomolecules" }
        ];
        this.renderChapterList(data, "Organic Chemistry");
    },

    // RENDER LOGIC
    renderChapterList: function(list, title) {
        const container = document.getElementById('chapter-list-container');
        container.innerHTML = ''; 

        // Heading Change
        document.getElementById('chapter-heading').innerText = title;

        list.forEach((chap, i) => {
            const div = document.createElement('div');
            div.className = 'chap-card';
            div.innerHTML = `
                <div>
                    <h4 style="margin:0; color:#1e293b; font-size:1.05rem;">${i+1}. ${chap.hi}</h4>
                    <p style="margin:4px 0 0; color:#64748b; font-size:0.9rem;">${chap.en}</p>
                </div>
                <button class="btn-start" onclick="alert('Chapter selected: ${chap.en}')">Start Test</button>
            `;
            container.appendChild(div);
        });

        this.showScreen('screen-chapters');
    }
};

// Security: No F12
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 123) { return false; }
});
