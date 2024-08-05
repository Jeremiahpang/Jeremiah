document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('mode-toggle');
    const body = document.body;

    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
        checkbox.checked = savedMode === 'light-mode';
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
