import hideHtmlElement from "./view/hideElement.js";

    function RedirectToHomePage() {
        window.location = "index.html";
    }

    if(window.localStorage.getItem('LoggedInEmail') != 'null')
    {
        hideHtmlElement("log");
        hideHtmlElement("reg");
    }
    else
    {
        hideHtmlElement("exit");
        hideHtmlElement("userInfo");
    }