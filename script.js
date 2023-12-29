document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('typed-text');
    const name = "CHRYSOVALANTIS TSIARTAS"; // Replace with your actual name

    // Set the initial text to an empty string
    typedText.innerHTML = name;

    // Function to simulate typing effect
    function typeEffect() {
        typedText.innerHTML = "";
        for (let i = 0; i < name.length; i++) {
            setTimeout(function() {
                typedText.innerHTML += name[i];
            }, 90 * i);
        }
    }

    // Call the typing function
    typeEffect();
});
