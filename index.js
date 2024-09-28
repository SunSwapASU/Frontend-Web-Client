const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const emailField = document.getElementById('email');

const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const restrictedButton = document.getElementById('restrictedButton');

registerButton.addEventListener('click', registerUser);
loginButton.addEventListener('click', loginUser);
restrictedButton.addEventListener('click', restricted);


async function loginUser(e) {
    e.preventDefault();

    username = usernameField.value;
    password = passwordField.value;
    email = emailField.value;

    let res = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    let msg = await res.json();

    console.log(msg);
}
async function registerUser(e) {
    e.preventDefault();

    username = usernameField.value;
    password = passwordField.value;
    email = emailField.value;

    let res = await fetch('http://127.0.0.1:3000/register', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    let msg = await res.json();

    console.log(msg);
}

async function restricted(e) {
    e.preventDefault();

    let res = await fetch('http://127.0.0.1:3000/restricted', {
        method: 'GET',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let msg = await res.json();

    console.log(msg);
}