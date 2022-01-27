import React from "react";

const TabelaHead = (props) => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>
    <tr>
      <th>ISBN</th>
      <th>Título
        <div class="container-setinhas">
          <div onClick={() => props.ordernarCrescente()}>&#129093;</div>
          <div onClick={() => props.ordernarDecrescente()}>&#129095;</div>
        </div>
      </th>
      <th>Autor</th>
      <th></th>
    </tr>
  </thead>
);

export default TabelaHead;
