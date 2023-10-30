const userName = document.getElementById("userName");
const password = document.getElementById("pswd");

function login() {
       
    //Storing username and password in local storage
    window.localStorage.setItem('usernmae', userName);
    window.localStorage.setItem('password', password);

    if (userName.value === 'username' && password.value === 'password') {
        window.location = 'resume.html'
    }else{
        document.getElementById('error').innerText = "Invalid Username/Password";
        userName.value = '';
        password.value = '';
    }
}

function preventBack() { 
   window.history.forward(); 
    function noBack() {
        window.history.forward();
    }    
} 

preventBack();
