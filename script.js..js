document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    if (window.scrollY > 100) { // Adjust the value as needed
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});