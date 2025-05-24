<<<<<<< HEAD
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
=======
import { useState } from "react";
import Routers from "./components/routers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routers />
    </>
>>>>>>> e55a8a880a6910d2412986dfb3946a826b94e131
  );
}

export default App;
