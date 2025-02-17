import { useCor } from "../cotextoCor";
import style from "./campo.module.scss";
function Campo() {

  const {cor } = useCor()
 
  return (
    <div className={style.container}>
        <div style={{backgroundColor: `${cor}` }} className={style.cor}>
           <input type="text" className={style.inputTexto}></input>
      </div>
      <div className={style.containerBotao}>
      <button className={style.botao}>Visualizar com o highlight</button>
      </div>
    </div>
  );
}

export default Campo;
