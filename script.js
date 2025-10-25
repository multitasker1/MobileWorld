document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // 1. Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.querySelector('.icon').textContent = '🌙'; // Dark Mode Icon
    } else {
        themeToggle.querySelector('.icon').textContent = '☀️'; // Light Mode Icon
    }

    // 2. Toggle functionality
    themeToggle.addEventListener('click', () => {
        // Toggle the class on the body
        body.classList.toggle('dark-mode');

        // Update the icon and save the preference
        if (body.classList.contains('dark-mode')) {
            themeToggle.querySelector('.icon').textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.querySelector('.icon').textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // 3. Search Functionality (Basic client-side example)
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // In a real application, you would send this to a backend API.
        // For this example, we'll log the search term.
        console.log("Searching for:", searchTerm);
        
        // You can implement basic client-side filtering here if all products are loaded,
        // but for a large e-commerce site, backend search is essential.
    });
});