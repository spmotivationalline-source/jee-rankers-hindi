// फाइल का नाम: script.js

const app = {
    // 1. ऐप में एंटर करना
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex';
        this.loadMathChapters(); // मैथ्स के चैप्टर अपने आप लोड होंगे
    },

    // 2. लॉगआउट करना
    logout: function() {
        document.getElementById('app-dashboard').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
        window.scrollTo(0, 0);
    },

    // 3. स्क्रीन बदलना (Subject <-> Chapter)
    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    // 4. मैथ्स के चैप्टर्स लोड करने का असली लॉजिक
    loadMathChapters: function() {
        // इमेज से लिए गए सभी 30 चैप्टर्स की लिस्ट
        const mathChapters = [
            { hi: "गणित के मूलभूत सिद्धांत", en: "Fundamentals of Mathematics" },
            { hi: "द्विघात समीकरण", en: "Quadratic Equations" },
            { hi: "अनुक्रम तथा श्रेणी", en: "Sequences and Series" },
            { hi: "त्रिकोणमितीय फलन", en: "Trigonometric Functions" },
            { hi: "त्रिकोणमितीय समीकरण", en: "Trigonometric Equations" },
            { hi: "सारणी", en: "Determinants" },
            { hi: "आव्यूह", en: "Matrices" },
            { hi: "समुच्चय", en: "Sets" },
            { hi: "संबंध और फलन", en: "Relations and Functions" },
            { hi: "प्रतिलोम त्रिकोणमितीय फलन", en: "Inverse Trigonometric Functions" },
            { hi: "सीमा, सांतत्य तथा अवकलनीयता", en: "Limits, Continuity & Differentiability" },
            { hi: "अवकलन की विधियाँ", en: "Methods of Differentiation" },
            { hi: "अवकलज के अनुप्रयोग", en: "Applications of Derivatives" },
            { hi: "अनिश्चित समाकलन", en: "Indefinite Integration" },
            { hi: "निश्चित समाकलन", en: "Definite Integration" },
            { hi: "समाकलन के अनुप्रयोग", en: "Applications of Integrals" },
            { hi: "अवकल समीकरण", en: "Differential Equations" },
            { hi: "सरल रेखा", en: "Straight Line" },
            { hi: "वृत्त", en: "Circle" },
            { hi: "शंकु परिच्छेद : परवलय", en: "Conic Section: Parabola" },
            { hi: "शंकु परिच्छेद : दीर्घवृत्त", en: "Conic Section: Ellipse" },
            { hi: "शंकु परिच्छेद : अतिपरवलय", en: "Conic Section: Hyperbola" },
            { hi: "सदिश बीजगणित", en: "Vector Algebra" },
            { hi: "त्रिविमीय निर्देशांक ज्यामिति", en: "3D Coordinate Geometry" },
            { hi: "क्रमचय तथा संचय", en: "Permutation and Combination" },
            { hi: "द्विपद प्रमेय", en: "Binomial Theorem" },
            { hi: "प्रायिकता", en: "Probability" },
            { hi: "सांख्यिकी", en: "Statistics" },
            { hi: "सम्मिश्र संख्याएँ", en: "Complex Numbers" },
            { hi: "त्रिभुज के गुणधर्म", en: "Properties of Triangle" }
     },
            // script.js में 'loadMathChapters' के बाद कॉमा (,) लगाकर यह जोड़ें

    // 5. फिजिक्स के चैप्टर्स लोड करना (Updated from Image)
    loadPhysicsChapters: function() {
        // आपकी फोटो से निकाले गए चैप्टर्स
        const physicsChapters = [
            { hi: "मूलभूत गणित", en: "Basic Mathematics" },
            { hi: "सरल रेखा में गति", en: "Motion in a Straight Line" },
            { hi: "समतल में गति", en: "Motion in a Plane" },
            { hi: "गति के नियम", en: "Laws of Motion" },
            { hi: "कार्य, ऊर्जा, शक्ति", en: "Work, Energy and Power" },
            { hi: "वृत्तीय गति", en: "Circular Motion" },
            { hi: "द्रव्यमान केंद्र और कणों के निकाय", en: "Centre of Mass and System of Particles" },
            { hi: "घूर्णी गति", en: "Rotational Motion" },
            { hi: "ठोसों के यांत्रिक गुणधर्म", en: "Mechanical Properties of Solids" },
            { hi: "द्रवों के यांत्रिक गुणधर्म", en: "Mechanical Properties of Fluids" },
            { hi: "पदार्थ के ऊष्मीय गुण", en: "Thermal Properties of Matter" },
            { hi: "गतिशीलता का सिद्धांत (गैस का सिद्धांत)", en: "Kinetic Theory of Gases" },
            { hi: "ऊष्मागतिकी", en: "Thermodynamics" },
            { hi: "दोलन", en: "Oscillations" },
            { hi: "तरंगें", en: "Waves" },
            { hi: "स्थिर विद्युत", en: "Electrostatics" },
            { hi: "अर्धचालक पदार्थ, उपकरण और सरल परिचय", en: "Semiconductors, Devices and Simple Introduction" },
            { hi: "संधारित्र", en: "Capacitor" },
            { hi: "गुरुत्वाकर्षण", en: "Gravitation" },
            { hi: "विद्युत धारा", en: "Electric Current" },
            { hi: "गतिमान आवेश और चुंबकत्व", en: "Moving Charges and Magnetism" },
            { hi: "चुंबकीय पदार्थ", en: "Magnetic Materials" },
            { hi: "विद्युत चुम्बकीय प्रेरण", en: "Electromagnetic Induction" },
            { hi: "विकिरण तथा पदार्थ की द्वैत प्रकृति", en: "Dual Nature of Radiation and Matter" },
            { hi: "प्रत्यावर्ती धारा", en: "Alternating Current" },
            { hi: "परमाणु संरचना", en: "Structure of Atom" },
            { hi: "विद्युत चुम्बकीय तरंगें", en: "Electromagnetic Waves" },
            { hi: "किरण प्रकाशिकी और प्रकाशिक यंत्र", en: "Ray Optics and Optical Instruments" },
            { hi: "तरंग प्रकाशिकी", en: "Wave Optics" },
            { hi: "नाभिक", en: "Nucleus" },
            { hi: "इकाई और मापन", en: "Units and Measurements" }
        ];

        this.renderChapterList(physicsChapters, "Physics");
    },

    // 6. चैप्टर्स को स्क्रीन पर दिखाने का कॉमन फंक्शन (ताकि कोड छोटा रहे)
    renderChapterList: function(chapterList, subjectName) {
        const container = document.getElementById('math-chapter-list'); // हम उसी कंटेनर का यूज़ कर रहे हैं (Maths वाले का) या आप नया बना सकते हैं
        // नोट: index.html में id="math-chapter-list" को बदलकर id="chapter-list" कर देना बेहतर होगा, पर अभी के लिए यह भी चलेगा।
        
        container.innerHTML = ''; 
        
        // हेडिंग अपडेट करें (जुगाड़: हम JS से हेडिंग बदल रहे हैं)
        const heading = document.querySelector('#screen-chapters h2');
        if(heading) heading.innerText = `${subjectName} Chapters`;

        chapterList.forEach((chap, index) => {
            const div = document.createElement('div');
            div.className = 'dash-card';
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.marginBottom = '15px';
            div.style.padding = '20px';
            div.style.textAlign = 'left';

            div.innerHTML = `
                <div>
                    <h3 style="margin: 0; color: #1e3a8a; font-size: 1.1rem;">${index + 1}. ${chap.hi}</h3>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 0.9rem;">${chap.en}</p>
                </div>
                <button class="btn btn-primary" onclick="alert('Test Starting: ${chap.en}')">Start Test</button>
            `;
            container.appendChild(div);
        });
        
        this.showScreen('screen-chapters');
    }

        const container = document.getElementById('math-chapter-list');
        container.innerHTML = ''; // पुराना लिस्ट साफ़ करें

        mathChapters.forEach((chap, index) => {
            const div = document.createElement('div');
            div.className = 'dash-card';
            
            // स्टाइलिंग ताकि हिंदी और इंग्लिश अच्छे से दिखे
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.marginBottom = '15px';
            div.style.padding = '20px';
            div.style.textAlign = 'left';

            // कार्ड का HTML
            div.innerHTML = `
                <div>
                    <h3 style="margin: 0; color: #1e3a8a; font-size: 1.1rem;">${index + 1}. ${chap.hi}</h3>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 0.9rem;">${chap.en}</p>
                </div>
                <button class="btn btn-primary" onclick="alert('Test Starting: ${chap.en}')">Start Test</button>
            `;
            container.appendChild(div);
        });
    }
};

