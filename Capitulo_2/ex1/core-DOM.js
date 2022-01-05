import "./styles-core-DOM.css";

var h1 = document.createElement("h1");
h1.setAttribute("class", "logo");
var text = document.createTextNode("Editora PedroTec");
h1.appendChild(text);
var root = document.getElementById("root");
root.appendChild(h1);
