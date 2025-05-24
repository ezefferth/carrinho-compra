import "./produtos.css";
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import React from "react";
import Carrinho from "../carrinho";
import { FaX } from "react-icons/fa6";
import { AuthContext } from "../../components/context/auth";
import { DataContext } from "../../components/context/data";

export default function Produtos() {
  const [cartItems, setCartItems] = React.useState([]);

  const [showCart, setShowCart] = React.useState(false);

  const { produtos } = React.useContext(DataContext);

  function addItem(item) {
    setCartItems((prev) => [...prev, item]);
  }
  const { teste } = React.useContext(AuthContext);
  return (
    <div className="containerProdutos">
      <div
        className="cartButton"
        // onClick={() => setShowCart(true)}
        onClick={teste}
      >
        <button>
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
            <FaX />
          </button>
          <Carrinho
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}
      <div className="produtos">
        {produtos.map((item, index) => {
          return (
            <div
              key={index}
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
