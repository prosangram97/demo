let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}




document.addEventListener("DOMContentLoaded", () => {
    console.log("Structural Engineering Consultancy Website Loaded.");
});
