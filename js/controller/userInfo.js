

    if(window.localStorage.getItem('LoggedInEmail') != 'null')
    {
        console.log("retrieve user");
        var keyEmail = window.localStorage.getItem('LoggedInEmail');
        var user = JSON.parse(window.localStorage.getItem(keyEmail));
        
        var paragraph = document.createElement("p");
        var infor = document.createTextNode(keyEmail);
        paragraph.appendChild(infor);
        var cell = document.getElementById("email");
        cell.appendChild(paragraph);

        paragraph = document.createElement("p");
        infor = document.createTextNode(user.sex);
        paragraph.appendChild(infor);
        cell = document.getElementById("sex");
        cell.appendChild(paragraph);

        paragraph = document.createElement("p");
        infor = document.createTextNode(user.password);
        paragraph.appendChild(infor);
        cell = document.getElementById("password");
        cell.appendChild(paragraph);

        paragraph = document.createElement("p");
        infor = document.createTextNode(user.name);
        paragraph.appendChild(infor);
        cell = document.getElementById("name");
        cell.appendChild(paragraph);
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

