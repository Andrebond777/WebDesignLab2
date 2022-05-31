

    function RedirectToHomePage() {
        window.location = "index.html";
    }

    function showHtmlElement(id){

        var htmlElement = document.getElementById(id);
        if(htmlElement != null)
            htmlElement.style.display = "block";
    }

    function hideHtmlElement(id){

        var htmlElement = document.getElementById(id);
        if(htmlElement != null)
            htmlElement.style.display = "none";
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