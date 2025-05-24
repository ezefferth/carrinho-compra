import { BrowserRouter } from "react-router";
import Routers from "./components/routers/routers.jsx";
import AuthProvider from "./components/context/auth.jsx";
import DataProvider from "./components/context/data.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routers />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
