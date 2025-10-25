document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // -------------------- 1. DARK/LIGHT MODE TOGGLE LOGIC --------------------

    // Saved preference या system preference की जाँच करें
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // थीम सेट करें और आइकन अपडेट करें
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            themeToggle.querySelector('.icon').textContent = '🌙'; // Dark Mode Icon
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.querySelector('.icon').textContent = '☀️'; // Light Mode Icon
            localStorage.setItem('theme', 'light');
        }
    };

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // टॉगल बटन इवेंट लिसनर
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(!isDark);
    });
    
    // -------------------- 2. LOGIN/SIGNUP TABS LOGIC (केवल login.html के लिए) --------------------
    
    // यह फ़ंक्शन लॉगिन फ़ाइल में इस्तेमाल होगा
    if (document.getElementById('loginForm')) {
        window.showForm = function(formType) {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const tabs = document.querySelectorAll('.tab-btn');

            tabs.forEach(btn => btn.classList.remove('active'));

            if (formType === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
                document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
                document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
            }
        }
    }

    // -------------------- 3. SEARCH LOGIC (DEMO) --------------------
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
         searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim().toLowerCase();
            // एक वास्तविक वेबसाइट में, यह कोड आपके बैकएंड से उत्पादों को फ़िल्टर/फ़ेच करेगा।
            // फ़िलहाल, यह केवल कंसोल में सर्च टर्म को प्रिंट करेगा।
            if (searchTerm.length > 2) {
                console.log("Live Search Query:", searchTerm);
            }
        });
    }
});