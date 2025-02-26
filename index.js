let text = "SALMA ABDIRASHID YAKUB";
let i = 0; // Declare a counter variable

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100); // Calls itself every 100ms
    }
}

window.onload = typeEffect; // Runs when the page loads
