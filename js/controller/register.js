import User from "../model/User.js";


    function addUser() {
        var keyEmail = document.getElementById('email').value;

        if(window.localStorage.getItem(keyEmail))
        {
            alert("Error! This Email is already in use.");
            return;
        }

        var name = document.getElementById('name').value;
        var sex = document.getElementById('sex').value;
        var password = document.getElementById('password').value;

        var user =  new User(name, sex, password);

        window.localStorage.setItem(keyEmail, JSON.stringify(user));
        window.localStorage.setItem('LoggedInEmail', keyEmail);
        alert("Registered Successfully!");
    }

    function logOut (){
        window.localStorage.setItem('LoggedInEmail', null);
        location.reload();
    }

    window.onload =function(){

        document.getElementById("register").onsubmit = addUser
        document.getElementById("exit").onclick = logOut
    }
