import coment from "../../assets/coment.svg";
import like from "../../assets/like.svg";
import icon from "../../assets/icon.jpg";
import styles from "./card.module.scss";
import { useInfos } from "../../contextos/contextoInfos";
import hljs from "highlight.js";

function Card() {

  const { publicacao } = useInfos([]);

  const postagens = publicacao.map((value, index) => {
    return (

      <div  key={index} className={styles.conteiner}>
          <div className={styles.divCor} style={{ backgroundColor: value.cor }}>
            <div className={styles.div}>{value.codigo} </div>
          </div>
          <div className={styles.infos}>
            <h2>{value.titulo}</h2>
            <p>{value.desc}</p>
          </div>
          <div className={styles.secao}>
            <div className={styles.icones}>
              <img className={styles.img} src={coment} alt="comentar" />
              <img className={styles.img} src={like} alt="Curtir" />
            </div>
            <div className={styles.perfil}>
              <img className={styles.imgPerfil} src={icon} alt="perfil " />
              <p>@Harry</p>
            </div>
          </div>
      </div>
   
    );
  });

    hljs.highlightAll()

  return (
 
    <div className={styles.display}>
      <div className={styles.alo}>
      <pre className={styles.post2}>
        <code className={styles.post}>{postagens}</code>
      </pre>
      </div>
    </div>
  
  );
}

export default Card;
