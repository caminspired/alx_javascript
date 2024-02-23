const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("submit", function(event) {
    handleFormSubmit(event);
})

function handleFormSubmit(event) {
    event.preventDefault();

   const name = submitForm.elements["name"].value;
   const email = submitForm.elements["email"].value;
   
    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill in all required fields")
    }
    else {
        submitForm.submit();
        alert("Form submitted successfully!")
    }
}

