import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./protectedRouter";



//Pages
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Redefinir from "./pages/Redefinir/Redefinir"
import Validacao from "./pages/Validacao/Validacao"
import Validacao2 from "./pages/Validacao 2/Validacao2"
import Validacao3 from "./pages/Validacao 3/validacao3"
import Desfazer from "./pages/Desfazer/Desfazer1"
import Gerenciar from "./pages/Gerenciar-Equip/Gerenciar"
import GerenciarMemb from "./pages/Gerenciar-Memb/Gerenciar-memb"
import RemoverMemb from "./pages/Remover-Memb/Remover-Memb"
import CriarGrupo from "./pages/CriarGrupo/CriarGrupo"
import Perfil from "./pages/Perfil/Perfil"
import Tarefas from "./pages/Tarefas/Tarefas"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/redefinir" element={<Redefinir />} />
          <Route path="/validacao" element={<Validacao />} />
          <Route path="/validacao2" element={<Validacao2 />} />
          <Route path="/validacao3" element={<Validacao3 />} />
          <Route path="/desfazer" element={<Desfazer />} />
          <Route path="/gerenciar" element={<Gerenciar />} />
          <Route path="/gerenciarmemb" element={<GerenciarMemb />} />\
          <Route path="/removermemb" element={<RemoverMemb />} />
          <Route path="/criargrupo" element={<CriarGrupo />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tarefas" element={<Tarefas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
