import { Route, Routes } from "react-router";
import Produtos from "../../pages/produtos";
import Login from "../../pages/login";
import PrivateRoute from "./privateRoute";
import CriarProdutoPage from "../../pages/criarTeste";
import Page1 from "../../pages/outlet/page1";
import Page2 from "../../pages/outlet/page2";
import Page3 from "../../pages/outlet/page3";

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/produtos"
        element={
          <PrivateRoute>
            <Produtos />
          </PrivateRoute>
        }
      />
      <Route
        path="/produtos/criar"
        element={
          <PrivateRoute>
            <CriarProdutoPage />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<h1>Not found</h1>}
      />
      <Route
        path="/page1"
        element={<Page1 />}
      >
        <Route
          path="/page1/page2"
          element={<Page2 />}
        />
        <Route
          path="/page1/page3"
          element={<Page3 />}
        />
      </Route>
    </Routes>
  );
}
