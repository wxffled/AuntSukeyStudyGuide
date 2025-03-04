// script.js

function checkDabiInput() {
    const input = document.getElementById('dabiInput').value.trim();

    // Check if the user typed "DABI"
    if (input.toUpperCase() === 'DABI') {
        // Show confirmation message (optional)
        alert("Redirecting to your study tool...");

        // Redirect after button click
        window.location.href = "https://www.sukeystudy.site/proxy"; // Replace with your actual proxy URL
    } else {
        // Do nothing if "DABI" is incorrect (no feedback)
        console.log("Incorrect input (but do nothing).");
    }
}
