const submitBtn = document.querySelector(".submit-button")

submitBtn.addEventListener("click", e => {
    e.preventDefault()
    pwd = document.querySelector("#password")
    pwdConfirm = document.querySelector("#confirm-password")
    if(pwd.value === pwdConfirm.value) {
        console.log("all fine")
    }
    else {
        console.log("passwords do not match")
    }
})