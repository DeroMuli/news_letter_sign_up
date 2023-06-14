var form = document.getElementById("form");
var email = document.getElementById("email");
var validation_text = document.getElementById("validation-text");
var sign_up_container = document.getElementById("sign-up-container");
var success_container = document.getElementById("success-message");
var email_adress_span = document.getElementById("email-address");
var dismiss_button = document.getElementById("dismiss_button");
var sign_up_img = document.getElementById("sign_up_img");

email.addEventListener("focus", (e) => {
    e.preventDefault();
    validation_text.style.color = "transparent";
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email_value = email.value;
    if(!email_value.match(mailformat)){
    //change to actual color
    validation_text.style.color = "red";
    }
    else{
        sign_up_container.style.display = "none";
        success_container.classList.remove("hidden");
        success_container.classList.add("success_container")
        email_adress_span.innerHTML = email_value;
    }
});
dismiss_button.addEventListener("click", (e) => {
    e.preventDefault();
    success_container.classList.remove("success_container");
    success_container.classList.add("hidden");
    sign_up_container.style.display = "flex";
}
);

if(window.outerWidth < 1000){
    sign_up_img.src = "assets/images/illustration-sign-up-mobile.svg";
}
