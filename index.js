const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const emailField = document.getElementById('email');

const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const restrictedButton = document.getElementById('restrictedButton');
const logoutButton = document.getElementById('logoutButton');

const responseMessage = document.getElementById('response_message');


registerButton.addEventListener('click', registerUser);
loginButton.addEventListener('click', loginUser);
restrictedButton.addEventListener('click', restricted);
logoutButton.addEventListener('click', logout);


async function loginUser(e) {
    e.preventDefault();

    responseMessage.innerText = "Loading...";

    email = emailField.value;
    password = passwordField.value;

    let res = await fetch('http://127.0.0.1:3000/auth/login', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    let { message } = await res.json();

    responseMessage.innerText = message;

    console.log(message);
}
async function registerUser(e) {
    e.preventDefault();

    responseMessage.innerText = "Loading...";

    username = usernameField.value;
    password = passwordField.value;
    email = emailField.value;

    let res = await fetch('http://127.0.0.1:3000/auth/register', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    let { message } = await res.json();

    responseMessage.innerText = message;

    console.log(message);
}

async function restricted(e) {
    e.preventDefault();

    responseMessage.innerText = "Loading...";

    let res = await fetch('http://127.0.0.1:3000/private/user/getAll', {
        method: 'GET',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let msg = await res.json();

    responseMessage.innerText = JSON.stringify(msg);

    console.log(msg);
}

async function logout(e) {
    e.preventDefault();

    responseMessage.innerText = "Loading...";

    let res = await fetch('http://127.0.0.1:3000/auth/logout', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let { message } = await res.json();

    responseMessage.innerText = message;

    console.log(message);
}