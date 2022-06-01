
export default function hideHtmlElement(id){

    var htmlElement = document.getElementById(id);
    if(htmlElement != null)
        htmlElement.style.display = "none";
}
