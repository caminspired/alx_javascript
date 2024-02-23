const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const valid = validateEmail(email);


    if (valid) {
        emailForm.submit();
    }
    else {
        error.textContent = "Please enter a valid email address.";
    }
});


