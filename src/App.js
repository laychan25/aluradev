import Cabecalho from "./components/cabecalho";
import style from "./app.module.scss";
import "./index.css";
import Aside from "./components/aside";
import { CorProvider } from "./components/cotextoCor";
import Editor from "./components/editor/Editor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comunidade from "./components/comunidade/Comunidade";
import { PublicacaoProvider } from "./components/contextoInfos";
function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Cabecalho />
        <div className={style.container}>
          <CorProvider>
           <PublicacaoProvider>
            <Aside />
            <Routes>
              <Route path="/" element={<Editor />} />
              <Route path="/comunidade" element={<Comunidade />} />
            </Routes>
            </PublicacaoProvider>
          </CorProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
