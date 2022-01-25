import React, { Component } from "react";
import TabelaBody from "./componets/tabelaBody";
import TabelaFoot from "./componets/tabelaFoot";
import TabelaHead from "./componets/tabelaHead";

class App extends Component {
  state = {
    livros: [
      {
        id: "987-85-7522-632-2",
        titulo: "Css Grid Layout",
        autor: "Maurício Samy Silva",
      },
      {
        id: "987-85-7522-895-7",
        titulo: "Node Essencial",
        autor: "Ricardo R. Lecheta",
      },
      {
        id: "987-85-7522-512-7",
        titulo: "Aprendendo Material Desing",
        autor: "Kyle Mew",
      },
    ],
  };
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFoot />
      </table>
    );
  }
}

export default App;
