import Login from "../src/paginas/Login"
import Erro from "../src/paginas/Erro"
import Usuarios from "./paginas/usuarios/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormularioUsuario from "./paginas/usuarios/FormularioUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/usuarios" element={<Usuarios/>}/>
                <Route path="/usuarios/novo" element={<FormularioUsuario/>}/>
                <Route path="/usuarios/:id" element={<FormularioUsuario/>}/>
                <Route path="/erro" element={<Erro/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
