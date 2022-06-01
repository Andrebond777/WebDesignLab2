import display from "../view/displayElement.js";

    if(window.localStorage.getItem('LoggedInEmail') != 'null')
    {
        retrieveUser();
    }

    function retrieveUser(){

        console.log("retrieve user");
        var keyEmail = window.localStorage.getItem('LoggedInEmail');
        var user = JSON.parse(window.localStorage.getItem(keyEmail));
        
        display(keyEmail, "email");
        display(user.sex, "sex");
        display(user.password, "password");
        display(user.name, "name");
    }

    function logOut (){
        window.localStorage.setItem('LoggedInEmail', null); 
        location.reload();
    }
    
    window.onload =function(){

        document.getElementById("exit").onclick = logOut
        document.getElementById("removeButton").onclick = removeUser
    }

    function removeUser(){

        if(window.localStorage.getItem('LoggedInEmail') == 'null')
            return;

        var keyEmail = window.localStorage.getItem('LoggedInEmail');
        localStorage.removeItem(keyEmail)
        console.log("remove user");

        logOut();
    }

