// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Handle Form Submission
function submitForm(event) {
    event.preventDefault(); // Prevents the page from reloading
    alert("Thank you for reaching out to Janakalyan Bahuuddeshiy Sevabhavi Sanstha! We will get back to you shortly.");
    event.target.reset(); // Clears the form fields
}

// Simulate Donate Action
function openDonateModal() {
    alert("Thank you for your willingness to support our cause in Nashik! (This is a placeholder. Here you would link to a payment gateway like Razorpay, PayU, or UPI).");
}

// Add a slight shadow to the header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});
