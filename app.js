const submitBtn = document.querySelector(".submit-button")

submitBtn.addEventListener("click", e => {
    pwd = document.querySelector("#password")
    pwdConfirm = document.querySelector("#confirm-password")
    if (pwd.value !== pwdConfirm.value) {
        pwd.setCustomValidity("invalid")
        pwd.style.borderColor="red"
        pwdConfirm.setCustomValidity("invalid")
        pwdConfirm.style.borderColor="red"
        document.querySelector(".password-error").innerText = "Passwords do not match"
        e.preventDefault()
    }
    else {
        pwd.style.borderColor="#0eb041"
        pwdConfirm.style.borderColor="#0eb041"
        document.querySelector(".password-error").innerText = ""
    }
})