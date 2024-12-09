"use strict";

function saveProfile(e) {
    e.preventDefault();

    let full_name = document.getElementById('fullname').value;
    let preferred_contact = document.getElementById('preferred_contact').value;
    let home_campus = document.getElementById('home_campus').value;
    let major = document.getElementById('major').value;
    let grad_year = document.getElementById('grad_year').value;
    let bio = document.getElementById('bio').value;
    // let status_indicator = document.getElementById('status_indicator');

    // status_indicator.innerText = "Saving your Profile...";
    // status_indicator.style.color = "white";
    // status_indicator.style.display = "block";

    // let res = await fetch('http://127.0.0.1:3000/user/setup_profile', {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: "include",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ full_name, preferred_contact, home_campus, major, grad_year, bio }),
    // });

    // let resp_data = await res.json();

    // if (res.ok) {
    // window.location.assign("profile.html");
    // } else {
    //     status_indicator.innerText = resp_data.message;
    //     status_indicator.style.color = "red";

    //     setTimeout(() => {
    //         status_indicator.style.display = "none";
    //     }, 4000);
    // }
    let session_info = JSON.parse(localStorage.getItem("session_info"));

    session_info["full_name"] = full_name;
    session_info["preferred_contact"] = preferred_contact;
    session_info["home_campus"] = home_campus;
    session_info["major"] = major;
    session_info["grad_year"] = grad_year;
    session_info["bio"] = bio;

    localStorage.setItem("session_info", JSON.stringify(session_info));

    window.location.assign("profile.html");
}

