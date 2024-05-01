document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            const destination = this.getAttribute('href');

            if (destination !== "#" && destination.trim() !== "") {
                // Redirect to the link
                window.location.href = destination;
            } else {
                // Handle cases where no destination is provided
                console.log("No destination provided for", this.textContent);
            }
        });
    });
});
