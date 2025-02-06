import logo from '../../assets/image.png'
import icon from '../../assets/icon.jpg'
import styles from './cabecaljo.module.scss'

function Cabecalho(){
    return (
        <div className={styles.header}>
        <div >
        <img src={logo} className={styles.logo} alt='logo da alura dev'/>
        </div>
        <div>
           <input className={`${styles.inputPesquisa} ${styles.inputPesquisaCel} `}  placeholder='Busque por algo'></input>
        </div>
        <div className={styles.icone}>
            <img src={icon} className={styles.iconeFoto}  alt='Foto de perfil'/> 
            <p>Harry</p>
        </div>
        </div>
       

    )
}


export default Cabecalho