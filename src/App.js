import Cabecalho from "./components/cabecalho";
import style from './app.module.scss'
import './index.css';
import Aside from "./components/aside";


function App() {
  return (
    <div className={style.app}>
    <Cabecalho/>
    <Aside/>
    </div>
  );
}

export default App;
