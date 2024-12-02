async function loginSubmit(e) {
    e.preventDefault();

    // let email = document.getElementById('login_email').value;
    // let password = document.getElementById('login_password').value;

    // let res = await fetch('http://127.0.0.1:3000/auth/login', {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: "include",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // });

    // let resp_data = await res.json();

    // if (res.ok) {
    //     localStorage.setItem("session_info", JSON.stringify(resp_data))
    //     window.location.assign("profile.html");
    // } else {
    //     console.log(resp_data);
    //     alert(JSON.stringify(resp_data))
    // }

    window.location.assign("profile.html");
}

async function registerSubmit(e) {
    e.preventDefault();

    // let email = document.getElementById('register_email').value;
    // let username = document.getElementById('register_username').value;
    // let password = document.getElementById('register_password').value;

    // let res = await fetch('http://127.0.0.1:3000/auth/register', {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: "include",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, email, password }),
    // });

    // let resp_data = await res.json();

    // if (res.ok) {
    //     window.location.assign("setup_profile.html");
    // } else {
    //     console.log(resp_data);
    //     alert(JSON.stringify(resp_data))
    // }

    window.location.assign("setup_profile.html");

}

async function logoutUser(e) {
    e.preventDefault();

    // let res = await fetch('http://127.0.0.1:3000/auth/logout', {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: "include",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

    // let { message } = await res.json();

    // responseMessage.innerText = message;

    // console.log(message);

    window.location.assign("login.html")
}

// async function restricted(e) {
//     e.preventDefault();

//     responseMessage.innerText = "Loading...";

//     let res = await fetch('http://127.0.0.1:3000/private/user/getAll', {
//         method: 'GET',
//         mode: "cors",
//         credentials: "include",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     let resp_data = await res.json();

//     // ewedwed
// }