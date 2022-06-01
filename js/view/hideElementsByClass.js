export default function hideHtmlElementsByClass(className){

    [].forEach.call(document.querySelectorAll("."+className), function (el) {
        el.style.display = "none";
      });
}