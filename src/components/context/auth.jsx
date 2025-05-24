import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(true);

  const teste = () => {
    console.log("teste");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, teste }}>
      {children}
    </AuthContext.Provider>
  );
}
