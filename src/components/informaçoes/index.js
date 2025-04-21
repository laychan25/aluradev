import styles from "./info.module.scss";
import { useCor } from "../../contextos/cotextoCor";
import { useState } from "react";
import { useInfos } from "../../contextos/contextoInfos";

function Infos({code}) {
  const { cor, setCor } = useCor();
  const [nome, setNome] = useState("");
  const [desq, setDesq] = useState("");
  const [linguagem, setLinguagem] = useState("");

 
  const handleChange = (e) => {
    setCor(e.target.value);
  };

  const { atualizaPublicacao } = useInfos();

  const guardaValores = () => {
    atualizaPublicacao({
      titulo: nome,
      desc: desq,
      linguagemEscolhida: linguagem,
      cor: cor,
      codigo: code
    });
  };

 

  const guardaNome = (evento) => {
    setNome(evento.target.value);
  };

  const guardaDescricao = (evento) => {
    setDesq(evento.target.value);
  };

  const lista = [{}];

  const salva = (evento) => {
    evento.preventDefault();
    lista.push({ nome, desq, cor });
    guardaValores();
    setNome("");
    setDesq("");
  };

  return (
    <div className={styles.div}>
      <form onSubmit={salva}>
        <p className={styles.titulo}>SEU PROJETO</p>
        <div className={styles.desc}>
          <input
            type="text"
            value={nome}
            onChange={guardaNome}
            placeholder="Nome do seu projeto"
            className={styles.inputDesc}
          ></input>
          <input
            type="text"
            value={desq}
            onChange={guardaDescricao}
            placeholder="Descrição do seu projeto"
            className={styles.inputDesc}
          ></input>
        </div>
          <p className={styles.titulo}>PERSONALIZACÃO</p>
        <div className={styles.perso}>
          <select
            value={linguagem}
            onChange={(e) => setLinguagem(e.target.value)}
            className={styles.personalizacao}
          >
            <option value="javacript">Javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">React</option>
          </select>
          <div className={styles.borda}>
          <input
            onChange={handleChange}
            className={styles.cor}
            value={cor}
            type="color"
          ></input>
            </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Infos;
