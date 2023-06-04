const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const Hidden_ClassName = "hidden";
const Username_Key = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(Hidden_ClassName);
    localStorage.setItem(Username_Key, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(Hidden_ClassName);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(Username_Key)

if(savedUsername === null) {
    loginForm.classList.remove(Hidden_ClassName);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}