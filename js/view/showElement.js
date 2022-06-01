
export default function showHtmlElement(id){

    var htmlElement = document.getElementById(id);
    if(htmlElement != null)
        htmlElement.style.display = "block";
}