
// Contact Form
let form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").innerText =
        "Thank you! Your message has been submitted.";

    form.reset();

});
