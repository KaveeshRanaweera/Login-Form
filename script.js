// Function to validate the login form before submitting
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Kaveesh" && password === "123") {
        window.location.href = "dashboard.html";
        return false; // Prevent actual form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Show the password
    } else {
        passwordField.type = "password"; // Hide the password
    }
}
