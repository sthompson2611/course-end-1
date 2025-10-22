
//defining form submit and clear buttons

const submitLogin = document.getElementById("login-submit");

submitLogin.addEventListener('click', function(e) {
            e.preventDefault();
           alert("Successful Login!")
            // const username = document.getElementById(username);
            // console.log(username)
})

const clearLogin = document.getElementById("clear-login");

//clicking the button will reload the form which will clear the form-- desired outcome
clearLogin.addEventListener('click', function(e){
    
})