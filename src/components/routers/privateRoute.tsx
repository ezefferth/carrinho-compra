import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/auth";

export default function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (auth === false) {
    // Redireciona para a página de login se o usuário não estiver autenticado
    return <Navigate to="/" />;
  }

  // Renderiza o componente filho se o usuário estiver autenticado
  return children;
}
