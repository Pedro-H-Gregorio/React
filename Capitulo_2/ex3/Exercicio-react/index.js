const nav = React.creatElement(
  "nav",
  { className: "menu" },
  React.createElement(
    "ul",
    {},
    React.createElement(
      "li",
      {},
      React.createElement("a", { href: "index.html" }, "Home")
    ),
    React.createElement(
      "li",
      {},
      React.createElement("a", { href: "livros.html" }, "Livros")
    ),
    React.createElement(
      "li",
      {},
      React.createElement("a", { href: "autores.html" }, "Autores")
    )
  )
);
ReactDOM.render(nav, document.getElementById("root"));
