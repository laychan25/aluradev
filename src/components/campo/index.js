import { useEffect, useState } from "react";
import { useCor } from "../cotextoCor";
import style from "./campo.module.scss";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useInfos } from "../contextoInfos";



function Campo() {
  const [code, setCode] = useState("");
  const [highlightCode, setHightLight] = useState(null);
  const [ativo, setAtivo] = useState(true);
  const {atualizaPublicacao}= useInfos()

  const toggleElemento = () => {
    setAtivo((prevState) => !prevState);
  };

  const guardaCodigo = () =>{
     atualizaPublicacao({
      codigo : highlightCode
     })
  }

  const { cor } = useCor();

  useEffect(() => {
    if (!ativo) {
      hljs.highlightAll();
    }
  }, [ativo]);

  const ativaHl = ({ code }) => {
    if (code) {
      const codigoString = code.toString();
      setHightLight(codigoString);
      return <p>{codigoString}</p>;
    }
  };

  return (
    <div className={style.container}>
      <div style={{ backgroundColor: `${cor}` }} className={style.cor}>
        {ativo ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            className={style.inputTexto}
          >
            {code}
          </textarea>
        ) : (
          <pre>
            <code className={style.code}>{highlightCode}</code>
          </pre>
        )}
      </div>
      <div className={style.containerBotao}>
        <button
          onClick={() => {
            ativaHl({ code }, toggleElemento(), guardaCodigo());
          }}
          className={style.botao}
        >
          {" "}
          {ativo ? <p>Vizualizar com highlight</p> : <p>Voltar a editar</p>}
        </button>
      </div>
    </div>
  );
}

export default Campo;
