import styles from "./info.module.scss";
import { useCor } from "../cotextoCor";
import { useState } from "react";

function Infos() {
  const { cor, setCor } = useCor();
  const handleChange = (e) => {
    setCor(e.target.value); 
  };

  const [nome, setNome] = useState("");
  const [desq, setDesq] = useState("");

  const guardaNome = (evento) => {
    setNome(evento.target.value);
  };

  const guardaDescricao = (evento) => {
    setDesq(evento.target.value);
  };

  const [linguagem, setLinguagem] = useState("");

  const lista = [{}];

  const salva = (evento) => {
    evento.preventDefault();
    lista.push({ nome, desq });
    console.log(lista);
    console.log(linguagem);

    setNome("");
    setDesq("");
  };

  return (
    <div className={styles.div}>
      <form onSubmit={salva}>
        <p>SEU PROJETO</p>
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
        <div>
          <p>PERSONALIZACÃO</p>
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
          <input
            onChange={handleChange}
            className={styles.cor}
            value={cor}
            type="color"
          ></input>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Infos;
