// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Dynamic year update in footer
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Wilson Dacles. All rights reserved.`;


// Function to show the selected section and hide the others
 function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

// Show the selected section
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Optionally, show the About section by default on page load
    window.onload = function() {
        showSection('about');
    };
 