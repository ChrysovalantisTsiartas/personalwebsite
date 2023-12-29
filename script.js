document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('typed-text');
    const name = "CHRYSOVALANTIS TSIARTAS"; // Replace with your actual name
    const date= "04 DECEMBER 2002";

    // Set the initial text to an empty string
    typedText.innerHTML = name;
    typedText.innerHTML = date;

    // Function to simulate typing effect
    function typeEffect() {
        typedText.innerHTML = "";
        typedText.innerHTML = "";
        for (let i = 0; i < name.length; i++) {
            setTimeout(function() {
                typedText.innerHTML += name[i];
            }, 90 * i);
        }
    }

    setTimeout(function() {
                typeEffect(date, typedDate);
            }, 90 * name.length + 1000); // Add a delay of 1000 milliseconds (1 second)
        });
    // Call the typing function
    typeEffect();
    
});
