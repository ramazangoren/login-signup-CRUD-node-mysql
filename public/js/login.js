
const btn = document.getElementById('btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errforemail = document.getElementById('errforemail');
const errforPass = document.getElementById('errforPass');

btn.addEventListener('click', function () {

    let emailList = !email.value.includes('@gmail.com') && !email.value.includes('@facebook.com');
    

    if (email.value === "") {
        errforemail.innerHTML = 'please enter your email';
        errforemail.classList.add('login-error')
        email.classList.add('login-error-input')
    }

    else if (emailList) {
        errforemail.innerHTML = 'please enter proper email';
        errforemail.classList.add('login-error')
        email.classList.add('login-error-input')
    }

    else {
        errforemail.classList.remove('login-error')
        email.classList.remove('login-error-input')
    }



    if (password.value === "") {
        errforPass.innerHTML = 'please enter your password';
        errforPass.classList.add('login-error')
        password.classList.add('login-error-input')
    }
    else if(password.value.length < 8) {
        errforPass.innerHTML = ' password must be 8 characters';
        // alert('Email or password is incorrect');
    }
    else if(email.value !== emailValues && password.value !== passwordValue) {
        errforPass.innerHTML = 'Email or password is incorrect';
        // alert('Email or password is incorrect');
    }


    else {
        errforPass.classList.remove('login-error')
        password.classList.remove('login-error-input')
    }

})

function showPassword() {

    const icon = document.getElementById('icon');
    if (password.type === 'password') {
       password.type = 'text';
       icon.style.color = 'blue';
    } 
    else {
        password.type = 'password';
        icon.style.color = 'rgb(166, 78, 169)';
    }
}





