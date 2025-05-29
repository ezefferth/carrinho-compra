import { createContext, useEffect, useState } from "react";
import { LerProdutos } from "../data/fetchProdutos";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const [aux, setAux] = useState(0);
  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  return (
    <DataContext.Provider value={{ produtos, setProdutos, setAux, aux }}>
      {children}
    </DataContext.Provider>
  );
}
