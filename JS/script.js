const usrFname = document.getElementById("usrFname");
const usrLname = document.getElementById("usrLname");
const usrEmail = document.getElementById("usrEmail");
const usrPass = document.getElementById("usrPass");

const usrFnameError = document.getElementById("usrFname-error");
const usrLnameError = document.getElementById("usrLname-error");
const usrFmailError = document.getElementById("usrEmail-error");
const usrPasswError = document.getElementById("usrPass-error");

const usrFnameErrorLabel = document.getElementById("usrFname-error-label");
const usrLnameErrorLabel = document.getElementById("usrLname-error-label");
const usrFmailErrorLabel = document.getElementById("usrEmail-error-label");
const usrPasswErrorLabel = document.getElementById("usrPass-error-label");

const submitBtn = document.getElementById("submitBtn");

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


submitBtn.addEventListener('click', () => {
    
    // For user first name
    if (usrFname.value == "") {
        usrFnameError.style.display = "initial"
        usrFnameErrorLabel.style.display = "initial"
    }
    else {
        usrFnameError.style.display = "none"
        usrFnameErrorLabel.style.display = "none"
    }

    // For user last name
    if (usrLname.value == "") {
        usrLnameError.style.display = "initial"
        usrLnameErrorLabel.style.display = "initial"
    }
    else {
        usrLnameError.style.display = "none"
        usrLnameErrorLabel.style.display = "none"
    }

    // For user Email
    if (emailRegExp.test(usrEmail.value)) {
        usrFmailError.style.display = "none"
        usrFmailErrorLabel.style.display = "none"
    }
    else if (usrEmail.value == "") {
        usrFmailError.style.display = "initial"
        usrFmailErrorLabel.style.display = "initial"
        usrFmailErrorLabel.innerHTML = "Email cannot be empty"
    }
    else {
        usrFmailError.style.display = "initial"
        usrFmailErrorLabel.style.display = "initial"
        usrFmailErrorLabel.innerHTML = "Looks like this is not an email"

    }

    // For user paassword
    if (usrPass.value == "") {
        usrPasswError.style.display = "initial"
        usrPasswErrorLabel.style.display = "initial"
    }
    else {
        usrPasswError.style.display = "none"
        usrPasswErrorLabel.style.display = "none"
    }

    //Login success alert


})
