document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) {
        return;
    }

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateIcon(true);
    } else {
        body.classList.remove('dark-mode');
        updateIcon(false);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateIcon(isDarkMode);
    });

    function updateIcon(isDarkMode) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
});