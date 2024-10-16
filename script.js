document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }
        // If the email is valid, you can submit the form or perform any other action here
        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
