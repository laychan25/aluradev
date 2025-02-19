import Cabecalho from "./components/cabecalho";
import style from "./app.module.scss";
import "./index.css";
import Aside from "./components/aside";
import Campo from "./components/campo";
import Infos from "./components/informaçoes";
import { CorProvider } from "./components/cotextoCor";



function App() {
  
  
  return (
    <div className={style.app}>
      <Cabecalho />
      <div className={style.container}>
        <Aside />
        <CorProvider>
        <Campo />
        <Infos  />
        </CorProvider>
      </div>
    </div>
  );
}

export default App;
