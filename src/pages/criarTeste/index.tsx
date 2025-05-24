import React, { useContext, useState } from "react";
import { CriarProduto } from "../../components/data/fetchProdutos";
import { DataContext } from "../../components/context/data";

export default function CriarProdutoPage() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");

  const { aux, setAux } = useContext(DataContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await CriarProduto(nome, parseFloat(valor), imagem);
    // setAux(aux + 1);
    // console.log(aux);
    // Aqui você pode fazer um POST para sua API
    // ex: axios.post('/produtos', produto)

    // Limpar campos
    // setNome("");
    // setValor("");
    // setImagem("");
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Valor (R$):</label>
          <br />
          <input
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Imagem (URL):</label>
          <br />
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: 10 }}
        >
          Cadastrar
        </button>
      </form>

      {imagem && (
        <div style={{ marginTop: 20 }}>
          <p>Prévia da imagem:</p>
          <img
            src={imagem}
            alt="Prévia"
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
