
export default function display (element, cellName) {

    var paragraph = document.createElement("p");
    var infor = document.createTextNode(element);
    paragraph.appendChild(infor);
    var cell = document.getElementById(cellName);
    cell.appendChild(paragraph);
}