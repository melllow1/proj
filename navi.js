document.addEventListener('DOMContentLoaded', function() {
    const themeToggler = document.getElementById('theme-toggler');
    const body = document.body;

    themeToggler.addEventListener('click', function() {
        
        if (body.classList.contains('light-theme')) {
            body.classList.toggle('dark-mode');
        } else if (body.classList.contains('dark-theme')) {
            body.classList.toggle('light-green-theme');
        }
    });

    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const destination = this.getAttribute('href');
            if (destination !== "#" && destination.trim() !== "") {
                window.location.href = destination;
            } else {
                console.log("No destination provided for", this.textContent);
            }
        });
    });
});
