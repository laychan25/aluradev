import styles from "./aside.module.scss";
import editar from "../../assets/editar.png";
import comunidade from "../../assets/comunidade.png";
import { useNavigate } from "react-router-dom";

function Aside({ menu }) {
  const navegar = useNavigate();

  const naveHome = () => {
    navegar("/");
  };

  const naveComunidade = () => {
    navegar("/comunidade");
  };

  
  return (
    <div className={!menu ? styles.container : styles.menuHamburger}>
      <p className={styles.menu}>MENU</p>
      <aside className={styles.aside}>
        <ul className={styles.lista}>
          <div onClick={naveHome} className={styles.div}>
            <img src={editar} alt="editar" />
            <li className={styles.item}>Editor de código</li>
          </div>
          <div onClick={naveComunidade} className={styles.div}>
            <img src={comunidade} alt="Comunidade" />
            <li className={styles.item}>Comunidade</li>
          </div>
        </ul>
      </aside>
    </div>
  );
}

export default Aside;
