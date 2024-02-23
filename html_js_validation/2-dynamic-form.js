document.addEventListener("DOMContentLoaded", function() {
    const dynamicForm = document.getElementById("dynamicForm");
    const inputContainer = document.getElementById("inputContainer");
    const numFields = document.getElementById("numFields");

    function generateInputFields(numFields) {
        inputContainer.innerHTML = "";

        for (let count = 1; count <= parseInt(numFields.value); count++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = "field" + count;
            inputContainer.appendChild(input);
        }
    }
    
    numFields.addEventListener("change", function() {
        generateInputFields(parseInt(numFields.value));
    });

    dynamicForm.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const allInputs = inputContainer.querySelectorAll("input[type='text']");
        let valid = true;

        allInputs.forEach(function(input) {
            if (input.value.trim() === "") {
                valid = false
            }
        });
        
        if (!valid) {
            alert("Please fill in all fields")
        }
        else {
            dynamicForm.submit();
        }
    }
})
