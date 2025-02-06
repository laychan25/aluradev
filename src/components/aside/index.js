import styles  from './aside.module.scss'
import editar from '../../assets/editar.png'
import comunidade from '../../assets/comunidade.png'

function Aside(){
    return (
        <div className={styles.container}>
          <p className={styles.menu}>Menu</p>
          <aside className={styles.aside}>
            <ul className={styles.lista}>
                <div className={styles.div} >
                 <img src={editar} alt='editar'/>
                <li className={styles.item}>Editar</li>
                </div>
                <div className={styles.div}>
                 <img src={comunidade} alt='Comunidade' />
                <li className={styles.item}>Comunidade</li>
                </div>
            </ul>
          </aside>
        </div>
    )
}

export default Aside