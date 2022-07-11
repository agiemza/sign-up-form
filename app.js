const submitBtn = document.querySelector(".submit-button")
const pwd = document.querySelector("#password")
const pwdConfirm = document.querySelector("#confirm-password")

pwd.addEventListener("input", e => checkPasswordMatching(e))
pwdConfirm.addEventListener("input", e => checkPasswordMatching(e))

function setInputInvalid(element) {
    element.setCustomValidity("Please fill in this field")
    element.style.borderColor = "red"
}
function setInputValid(element) {
    element.setCustomValidity("")
    element.style.borderColor = "#0eb041"
}

function checkPasswordMatching() {
    const pwdPattern = /(?=.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    if (!pwd.value.match(pwdPattern) && !pwdConfirm.value.match(pwdConfirm)) {
        setInputInvalid(pwd)
        setInputInvalid(pwdConfirm)
        document.querySelector(".password-error").innerText = "Password must be at least 8 characters long, contain at least: 1 digit, one 1 special character, one uppercase and one lowercase letter"
    } else if ((pwd.value !== pwdConfirm.value)) {
        setInputInvalid(pwd)
        setInputInvalid(pwdConfirm)
        document.querySelector(".password-error").innerText = "Passwords do not match"
    }
    else if (pwd.value === "" && pwdConfirm.value === "") {
        pwd.style.borderColor = "gray"
        pwdConfirm.style.borderColor = "gray"
        document.querySelector(".password-error").innerText = ""
    } else {
        setInputValid(pwd)
        setInputValid(pwdConfirm)
        document.querySelector(".password-error").innerText = ""
    }
}

submitBtn.addEventListener("click", e => {
    if (pwd.value !== pwdConfirm.value)
        e.preventDefault()
})