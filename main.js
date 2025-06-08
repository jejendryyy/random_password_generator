const btnEL = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

btnEL.addEventListener("click", ()=>{
    createPassword()
})

copyIcon.addEventListener("click", ()=>{
    copyPassword()
    if(inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active")
    }, 2000);
    }
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.random() * chars.length;
        password += chars[Math.floor(randomNum)];
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}