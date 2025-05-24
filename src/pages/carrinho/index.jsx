import "./carrinho.css";
import React from "react";

export default function Carrinho({ cartItems, setCartItems }) {
  return (
    <>
      <div className="titulo">Seu carrinho tem {cartItems?.length} itens</div>
      <div className="itens">
        {cartItems?.map((item, index) => {
          return (
            <div
              className="item"
              key={index}
            >
              <img
                src={item.imagem}
                alt={item.nome}
              />
              <div>{item.nome}</div>
            </div>
          );
        })}
      </div>
      <div className="finalizar">
        <div className="topValor">
          <p>Total</p>
          <p>
            R${" "}
            {cartItems
              ?.reduce((total, item) => total + item.valor, 0)
              .toFixed(2)
              .replace(".", ",")}
          </p>
        </div>
        <button
          className="btn"
          onClick={() => setCartItems([])}
        >
          Carrinho
        </button>
      </div>
    </>
  );
}
