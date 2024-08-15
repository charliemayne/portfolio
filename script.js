document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const htmlClasses = document.documentElement.classList;
        if (htmlClasses.contains('dark')) {
            htmlClasses.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlClasses.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
});