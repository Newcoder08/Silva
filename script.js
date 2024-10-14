// Get elements
const subscribeBtn = document.getElementById('subscribe-btn');
const popup = document.getElementById('newsletter-popup');
const closeBtn = document.querySelector('.close');

// Show the popup when the button is clicked
subscribeBtn.onclick = function() {
    popup.style.display = 'block';
}

// Close the popup when the close button is clicked
closeBtn.onclick = function() {
    popup.style.display = 'none';
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
