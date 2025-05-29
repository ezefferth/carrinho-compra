import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  AtualizarProduto,
  LerProdutos,
} from "../../components/data/fetchProdutos";
import { DataContext } from "../../components/context/data";
export default function EditarProduto() {
  const location = useLocation();
  const produto = location.state;

  const { setProdutos } = React.useContext(DataContext);

  const navigate = useNavigate();

  const [id, setId] = React.useState(produto?.id || "");
  const [nome, setNome] = React.useState(produto?.nome || "");
  const [valor, setValor] = React.useState(produto?.valor || "");
  const [imagem, setImagem] = React.useState(produto?.imagem || "");

  const atualizar = async () => {
    try {
      await AtualizarProduto(id, nome, valor, imagem);
      navigate("/produtos");
      LerProdutos(setProdutos);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  if (produto) {
    return (
      <div>
        <button onClick={() => navigate(-1)}>VOltar</button>
        <input
          placeholder={nome}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder={valor}
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <input
          placeholder={imagem}
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <button onClick={atualizar}>Editar</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Produto não encontrado</h1>
    </div>
  );
}
