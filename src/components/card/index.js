import coment from "../../assets/coment.svg";
import like from "../../assets/like.svg";
import likeVermelho from "../../assets/coraçaoVermelho.png";
import icon from "../../assets/icon.jpg";
import styles from "./card.module.scss";
import { useInfos } from "../../contextos/contextoInfos";
import hljs from "highlight.js";
import { useEffect } from "react";

function Card() {
  const { publicacao,toglleCurtidas  } = useInfos([]);


 

  const cardCodigo = publicacao.map((value, index)=>{
    return(
        <pre key={index} className={styles.pre} >
          <code className={styles.code} >{value.codigo}</code>
        </pre>
      
    )
  })

  const publicaoes = publicacao.map((value, index) => {
   
    return (
      <div key={value.id } className={styles.conteiner}>
        <div  className={styles.divCor} style={{ backgroundColor: value.cor }}>
        <div className={styles.div}>{cardCodigo[index]} </div>
        </div>
          <div className={styles.infos}>
            <h2>{value.titulo}</h2>
            <p className={styles.p}>{value.desc}</p>
          </div>
          <div className={styles.secao}>
              <div className={styles.icones}>
                <img className={styles.img} src={coment} alt="comentar"  />
                <img
                className={styles.img}
                onClick={()=>toglleCurtidas(value.id)}
                src={value.curtido ? likeVermelho : like}
                alt="Curtir"
               />
              </div>
            <div className={styles.perfil}>
              <img className={styles.imgPerfil} src={icon} alt="perfil " />
              <p className={styles.p}>@Harry</p>
            </div>
        </div>
      </div>
    );
  });

  

  useEffect(() => {
    hljs.highlightAll();
    const manipuladom = document.querySelector(".hljs");
    manipuladom.style.backgroundColor = "transparent";
  }, [publicaoes]);

  return (
    <div className={styles.display}>
        <div className={styles.post2}>
         <div className={styles.post}>{publicaoes}</div>
        </div>
    </div>
  );
}

export default Card;
