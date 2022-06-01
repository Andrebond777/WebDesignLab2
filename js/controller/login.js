
    function login() {

        var keyEmail = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var user = JSON.parse(window.localStorage.getItem(keyEmail));
        if(user == null)
        {
            alert("Error! User is not found.");
            return;
        }

        if(user.password == password)
        {
            alert("Logged in successfully!");
            window.localStorage.setItem('LoggedInEmail', keyEmail);  
        }
        else
        {
            alert("Incorrect password!");
        }
    }

    function logOut (){
        window.localStorage.setItem('LoggedInEmail', null); 
        location.reload();
    }

    window.onload =function(){

        document.getElementById("exit").onclick = logOut
        document.getElementById("login").onsubmit = login
    }
