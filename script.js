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
        ];

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
