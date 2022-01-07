let aHome = document.createElement("a");
let aLivro = document.createElement("a");
let aAutores = document.createElement("a");

aHome.setAttribute("href", "index.html");
aLivro.setAttribute("href", "livros.html");
aAutores.setAttribute("href", "autores.html");

let textHome = document.createTextNode("Home");
let textLivro = document.createTextNode("Livros");
let textAutores = document.createTextNode("Autores");

aHome.appendChild(textHome);
aLivro.appendChild(textLivro);
aAutores.appendChild(textAutores);

let liHome = document.createElement("li");
let liLivro = document.createElement("li");
let liAutores = document.createElement("li");

let ul = document.createElement("ul");

ul.appendChild(liHome).appendChild(aHome);
ul.appendChild(liLivro).appendChild(aLivro);
ul.appendChild(liAutores).appendChild(aAutores);

let nav = document.createElement("nav");
nav.setAttribute("class", "menu");
nav.appendChild(ul);

let root = document.getElementById("root");
root.appendChild(nav);
