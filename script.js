// फाइल का नाम: script.js

const app = {
    // स्क्रीन बदलना
    enterApp: function() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-dashboard').style.display = 'flex';
        this.loadMathChapters();
    },

    logout: function() {
        document.getElementById('app-dashboard').style.display = 'none';
        document.getElementById('landing-page').style.display = 'block';
        window.scrollTo(0, 0);
    },

    showScreen: function(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    // चैप्टर्स लोड करना (अभी डेमो डेटा है)
    loadMathChapters: function() {
        const chapters = [
            { name: "Sequence & Series", qCount: 50, time: "45 min" },
            { name: "Quadratic Equations", qCount: 30, time: "30 min" },
            { name: "Complex Numbers", qCount: 35, time: "35 min" }
        ];

        const container = document.getElementById('math-chapter-list');
        container.innerHTML = '';

        chapters.forEach(chap => {
            const div = document.createElement('div');
            div.className = 'dash-card';
            div.style.textAlign = 'left';
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.marginBottom = '15px';
            
            div.innerHTML = `
                <div>
                    <h3>${chap.name}</h3>
                    <p>${chap.qCount} Questions • Avg Time: ${chap.time}</p>
                </div>
                <button class="btn btn-primary" onclick="alert('Starting Test: ${chap.name}')">Start Test</button>
            `;
            container.appendChild(div);
        });
    }
};