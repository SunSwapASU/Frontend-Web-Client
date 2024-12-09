"use strict";

let session_info = JSON.parse(localStorage.getItem("session_info"));

document.getElementById('populate_username').innerText = session_info.username;
document.getElementById('populate_full_name').innerText = session_info.full_name;
document.getElementById('populate_preferred_contact').innerText = session_info.preferred_contact;
document.getElementById('populate_home_campus').innerText = session_info.home_campus;
document.getElementById('populate_major').innerText = session_info.major;
document.getElementById('populate_grad_year').innerText = session_info.grad_year;
document.getElementById('populate_bio').innerText = session_info.bio;