import {useEffect, useState } from "react";
import { useCor } from "../cotextoCor";
import style from "./campo.module.scss";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';



function Campo() {
  const [code, setCode] = useState("");
  const [highlightCode , setHightLight] = useState(null)

  const { cor } = useCor();

 useEffect(()=>{
    hljs.highlightAll()
 },[highlightCode])

  const ativaHl = ({code}) => {
    if(code){
      const codigoString = code.toString();
      
      setHightLight(codigoString)
      console.log(codigoString)
      return <p>{codigoString}</p>;
    }
  };

  return (
    <div className={style.container}>
      <div style={{ backgroundColor: `${cor}` }} className={style.cor}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          className={style.inputTexto}
        ></textarea>
      </div>
      <pre>
       <code>{highlightCode}</code>
      </pre>
      <div className={style.containerBotao}>
        <button onClick={()=> ativaHl({code})} className={style.botao}>
          Visualizar com o highlight
        </button>
      </div>
    </div>
  );
}

export default Campo;
