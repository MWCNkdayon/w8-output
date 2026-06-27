const form = document.querySelector("form");
const email = document.getElementById("text");
const password = document.getElementById("password");
const savedemail = localStorage.getItem("email");
const savedpassword = localStorage.getItem("password");

email.value = savedemail;
password.value = savedpassword;

form.addEventListener("submit", (click) => {
    click.preventDefault();
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
})



