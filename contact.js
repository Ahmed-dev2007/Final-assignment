document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelectorAll('.error-message').forEach(function (errorElement) {
        errorElement.textContent = '';
    });
    let isValid = true;

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
        isValid = false;
    }

    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
