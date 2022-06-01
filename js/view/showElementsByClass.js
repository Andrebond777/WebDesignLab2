export default function showHtmlElementsByClass(className){

    [].forEach.call(document.querySelectorAll("."+className), function (el) {
        el.style.display = "block";
      });
}