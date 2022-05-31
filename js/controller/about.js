
function logOut (){
    window.localStorage.setItem('LoggedInEmail', null); 
    location.reload();
}

window.onload =function(){

    document.getElementById("exit").onclick = logOut
}