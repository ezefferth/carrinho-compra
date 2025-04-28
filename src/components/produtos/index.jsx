import "./produtos.css";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import React from "react";
import { produtos } from "./produtos";
import Carrinho from "../carrinho";
import { FaX } from "react-icons/fa6";

export default function Produtos() {
  const [cartItems, setCartItems] = React.useState([]);

  const [showCart, setShowCart] = React.useState(false);

  function addItem(item) {
    setCartItems((prev) => [...prev, item]);
  }

  return (
    <div className="containerProdutos">
      <div className="cartButton">
        <button onClick={() => setShowCart(true)}>
          <FaShoppingCart size={25} />
        </button>
        <span className="cartCount">
          {cartItems.length > 0 && cartItems.length}
        </span>
      </div>
      {showCart && (
        <div className="carrinhoContainer show">
          <button
            className="closeCarrinho"
            onClick={() => setShowCart(false)}
          >
            <FaBeer />
          </button>
          <Carrinho
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}
      <div className="produtos">
        {produtos.map((item) => {
          return (
            <div
              key={item.nome}
              className="produto"
            >
              <img
                src={item.imagem}
                alt={item.nome}
              />
              <h4>{item.nome}</h4>
              <p>R$ {item.valor.toFixed(2)}</p>
              <button onClick={() => addItem(item)}>Comprar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
