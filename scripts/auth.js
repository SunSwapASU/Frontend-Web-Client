"use strict";

async function loginSubmit(e) {
    e.preventDefault();

    let email = document.getElementById('login_email').value;
    let password = document.getElementById('login_password').value;
    let status_indicator = document.getElementById('status_indicator');

    status_indicator.innerText = "Logging you in...";
    status_indicator.style.color = "white";
    status_indicator.style.display = "block";

    let res = await fetch('https://ssbe.brano.dev/auth/login', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    let resp_data = await res.json();

    if (res.ok) {
        localStorage.setItem("session_info", JSON.stringify(resp_data));
        window.location.assign("profile.html");
    } else {
        status_indicator.innerText = resp_data.message;
        status_indicator.style.color = "red";

        setTimeout(() => {
            status_indicator.style.display = "none";
        }, 4000);
    }
}

async function registerSubmit(e) {
    e.preventDefault();

    let username = document.getElementById('register_username').value;
    let email = document.getElementById('register_email').value;
    let password = document.getElementById('register_password').value;
    let status_indicator = document.getElementById('status_indicator');

    status_indicator.innerText = "Registering your account...";
    status_indicator.style.color = "white";
    status_indicator.style.display = "block";

    let res = await fetch('https://ssbe.brano.dev/auth/register', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    let resp_data = await res.json();

    if (res.ok) {
        localStorage.setItem("session_info", JSON.stringify(resp_data));
        window.location.assign("setup_profile.html");
    } else {
        status_indicator.innerText = resp_data.message;
        status_indicator.style.color = "red";

        setTimeout(() => {
            status_indicator.style.display = "none";
        }, 4000);
    }
}

function logoutUser(e) {
    e.preventDefault();

    fetch('https://ssbe.brano.dev/auth/logout', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    localStorage.clear();

    window.location.assign("login.html")
}
