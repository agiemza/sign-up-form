const submitBtn = document.querySelector(".submit-button")
const pwd = document.querySelector("#password")
const pwdConfirm = document.querySelector("#confirm-password")

pwd.addEventListener("input", e => checkPasswordMatching(e))
pwdConfirm.addEventListener("input", e => checkPasswordMatching(e))

function checkPasswordMatching() {
    if (pwd.value !== pwdConfirm.value) {
        pwd.setCustomValidity("invalid")
        pwd.style.borderColor = "red"
        pwdConfirm.setCustomValidity("invalid")
        pwdConfirm.style.borderColor = "red"
        document.querySelector(".password-error").innerText = "Passwords do not match"
    } else {
        pwd.style.borderColor = "#0eb041"
        pwdConfirm.style.borderColor = "#0eb041"
        document.querySelector(".password-error").innerText = ""
    }
}

submitBtn.addEventListener("click", e => {
    if (pwd.value !== pwdConfirm.value)
        e.preventDefault()
})
