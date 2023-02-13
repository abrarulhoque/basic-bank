// login Page

document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    const userEmail = emailField.value ;
    const userPassword = passwordField.value;
    if(userEmail === 'hello@abraar.dev' && userPassword === 'helloabrar'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid Login");
    }
})

