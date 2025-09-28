document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        ['name', 'email', 'message'].forEach(id => {
            const input = document.getElementById(id);
            const errorMessage = document.getElementById(id + '-error');
            
            if (input.value.trim() === '') {
                errorMessage.textContent = 'This field is required.';
                isValid = false;
            } else {
                errorMessage.textContent = ''; 
            }
        });

        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() !== '' && !emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        const formStatus = document.getElementById('form-status');

        if (isValid) {
            formStatus.textContent = 'Thank you! Your message has been received (not actually sent due to static hosting).';
            formStatus.style.color = 'green';
            form.reset(); 
        } else {
            formStatus.textContent = 'Please correct the errors above and try again.';
            formStatus.style.color = 'red';
        }
    });
});