const passwordForm = document.getElementById("passwordForm");

passwordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    function validatePassword() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    const valid = validatePassword(password);


    if (valid) {
        passwordForm.submit();
    }
    else {
        error.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*).";
    }
});


