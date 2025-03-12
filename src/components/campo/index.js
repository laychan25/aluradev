import { useEffect, useState } from "react";
import { useCor } from "../../contextos/cotextoCor";
import style from "./campo.module.scss";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

function Campo({code, setCode}) {
  const [highlightCode, setHightLight] = useState(null);
  const [ativo, setAtivo] = useState(true);

  const toggleElemento = () => {
    setAtivo((prevState) => !prevState);
  };

 
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

  const salva = () => {
    toggleElemento();
    console.log(code)
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
          <pre className={style.pre}>
            <code className={style.code}>{highlightCode}</code>
          </pre>
        )}
      </div>
      <div className={style.containerBotao}>
        <button
          onClick={() => {
            ativaHl({ code }, salva());
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
