import coment from "../../assets/coment.svg";
import like from "../../assets/like.svg";
import icon from "../../assets/icon.jpg";
import styles from "./card.module.scss";
import { useInfos } from "../contextoInfos";

function Card() {

  const {publicacao }= useInfos()
 
  
 
  console.log(publicacao.codigo)
 
  return (
    <div className={styles.conteiner}>
      <div>
        <div style={{ backgroundColor: `${publicacao.cor}` }} >
          <div className={styles.div}>{publicacao? publicacao.codigo: ''}</div>
        </div>
      </div>
      <div className={styles.infos}>
      <h2>{publicacao ? publicacao.titulo : 'oi'}</h2>
        <p>{publicacao ? publicacao.desc : 'oii'}</p>
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
}

export default Card;
