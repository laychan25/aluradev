import coment from '../../assets/coment.svg';
import like from '../../assets/like.svg'
import icon from '../../assets/icon.jpg'
import styles from './card.module.scss'
import { useCor } from '../cotextoCor';

function Card (){

    return(
        <div className={styles.conteiner}>
            <div>
            <div >
               <div className={styles.div}></div>
            </div>
            </div>
            <div className={styles.infos}>
                <h2>Titulo do projeto</h2>
                <p>Descriçao do projeto</p>
            </div>
            <div className={styles.secao}>
            <div className={styles.icones}>
                <img className={styles.img}src={coment} alt='comentar' />
                <img className={styles.img} src={like} alt='Curtir'/>
            </div>
            <div className={styles.perfil}>
                <img className={styles.imgPerfil} src={icon} alt='perfil '/>
                <p>@Harry</p>
            </div>
            </div>
        </div>
    )
}

export default Card