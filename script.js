const validateEmail = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const emailInput = document.getElementById("email").value;
    const input = emailInput.value.trim()
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(filter)) {
        document.querySelector(".success-state").style.display = "inline-block";
        document.querySelector(".desc-container").style.display = "none";
        document.querySelector(".email-form").style.display = "none";
        document.querySelector(".success-state").innerHTML = "THANKS FOR SUBSCRIBE!!!";
    } else {
        document.querySelector(".error-state").style.display = "inline-block";
        document.querySelector(".error-state").innerHTML = "Valid Email Required!";
        document.querySelector('input[type="text"]').style.backgroundColor = "#FFB4B4";
    }
}
