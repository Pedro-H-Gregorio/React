import React, { Component } from "react";
import TabelaBody from "./componets/tabelaBody";
import TabelaFoot from "./componets/tabelaFoot";
import TabelaHead from "./componets/tabelaHead";

class App extends Component {
  state = {
    livros: [],
  };
  componentDidMount() {
    fetch("/api/livros.json")
      .then((res) => res.json())
      .then((livros) => this.setState({ livros }))
      .catch(function (err) {
        console.error((Error.name = "Erro na requisição"));
      })
      .finally(function () {
        console.log("Sempre retorna");
      });
  }
  handlerRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id)
    this.setState({livros})
  };
  handlerOrdenarCrescente = () => {
    const livros = this.state.livros.sort((a,b) => a.titulo < b.titulo ? -1 : 0)
    this.setState({livros})
  }
  handlerOrdenarDecrescente = () => {
    const livros = this.state.livros.sort((a,b) => a.titulo < b.titulo ? -1 : 0)
    livros.reverse()
    this.setState({livros})
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead 
        ordernarCrescente={ this.handlerOrdenarCrescente }
        ordernarDecrescente= {this.handlerOrdenarDecrescente}
        />
        <TabelaBody
          livros={this.state.livros}
          removerLinha={this.handlerRemoverLinha}
        />
        <TabelaFoot qdeLivros={this.state.livros.length} />
      </table>
    );
  }
}

export default App;
