// Language Toggle
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    alert('Language Switch Functionality Will Be Implemented Here');
});

// Tire Search Form Submission
const tireSearchForm = document.getElementById('tire-search-form');
tireSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const carInfo = document.getElementById('car-info').value;
    window.location.href = `search_results.html?carInfo=${carInfo}`;
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent! We will get back to you shortly.');
});
