    function checkAge() {
        let age = prompt("Please enter your age:");
        let message = "";

        if (age === null || age === "") {
        message = "You did not enter an age.";
        } else {
        age = parseInt(age);
        
        if (isNaN(age)) {
            message = "Invalid input. Please enter a valid number.";
        } else if (age < 0) {
            message = "The age is invalid. Age cannot be negative.";
        } else if (age >= 18) {
            message = "User is eligible to vote.";
        } else {
            message = "User is not eligible to vote.";
        }
        }

        document.getElementById("p1").innerText = message;
    }