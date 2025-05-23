import Cabecalho from "./components/cabecalho";
import { useLocation } from "react-router-dom";
import style from "./app.module.scss";
import "./index.css";
import Aside from "./components/aside";
import { CorProvider } from "./contextos/cotextoCor";
import Editor from "./components/editor/Editor";
import {Route, Routes } from "react-router-dom";
import Comunidade from "./components/comunidade/index";
import { PublicacaoProvider } from "./contextos/contextoInfos";
import { useState } from "react";
function App() {
  const location = useLocation();

  const [code, setCode ]= useState("")
  const [menu , setMenu] = useState(false);
  const [pesquisa , setPesquisa] = useState(false)

  
  return (
    <div className={style.app}>
      <Cabecalho  menu={menu} setMenu={setMenu} setPesquisa={setPesquisa} pesquisa={pesquisa} />
      <div className={location.pathname === "/comunidade" ? style.comunidade : style.editor}>
        <CorProvider>
          <PublicacaoProvider>
            <Aside  menu={menu} setMenu={setMenu} />
            <Routes>
              <Route path="/" element={<Editor code={code} setCode={setCode} />} />
              <Route
                path="/comunidade"
                element={<Comunidade className={style.comunidade} />}
              />
            </Routes>
          </PublicacaoProvider>
        </CorProvider>
      </div>
    </div>
  );
}

export default App;
