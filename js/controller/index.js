    
import "../main.js";

    hideHtmlElement("removeAllFilters");

    function logOut (){

        window.localStorage.setItem('LoggedInEmail', null); 
        location.reload();
    }

    function showHtmlElementsByClass(className){

        [].forEach.call(document.querySelectorAll("."+className), function (el) {
            el.style.display = "block";
          });
    }
    
    function hideHtmlElementsByClass(className){

        [].forEach.call(document.querySelectorAll("."+className), function (el) {
            el.style.display = "none";
          });
    }

    function removeAllFilters(){
     
        hideHtmlElement("removeAllFilters");
        showHtmlElementsByClass("shoes");
        showHtmlElementsByClass("t-shirts");
        showHtmlElementsByClass("pants");
        showHtmlElementsByClass("jackets");
    }

    function filterShoes(){
        
        showHtmlElement("removeAllFilters");
        showHtmlElementsByClass("shoes");
        hideHtmlElementsByClass("t-shirts");
        hideHtmlElementsByClass("pants");
        hideHtmlElementsByClass("jackets");
    }

    function filterPants(){
                      
        showHtmlElement("removeAllFilters");
        showHtmlElementsByClass("pants");
        hideHtmlElementsByClass("t-shirts");
        hideHtmlElementsByClass("shoes");
        hideHtmlElementsByClass("jackets");
    }

    function filterTshirts(){
        
        showHtmlElement("removeAllFilters");
        showHtmlElementsByClass("t-shirts");
        hideHtmlElementsByClass("shoes");
        hideHtmlElementsByClass("pants");
        hideHtmlElementsByClass("jackets");
    }

    function filterJackets(){
        
        showHtmlElement("removeAllFilters");
        showHtmlElementsByClass("jackets");
        hideHtmlElementsByClass("shoes");
        hideHtmlElementsByClass("t-shirts");
        hideHtmlElementsByClass("pants");
    }
    

    window.onload =function(){
        
        document.getElementById("exit").onclick = logOut
        document.getElementById("removeAllFilters").onclick = removeAllFilters
        document.getElementById("filterShoes").onclick = filterShoes
        document.getElementById("filterPants").onclick = filterPants
        document.getElementById("filterT-shirts").onclick = filterTshirts
        document.getElementById("filterJackets").onclick = filterJackets
    }