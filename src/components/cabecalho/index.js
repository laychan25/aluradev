import logo from "../../assets/image.png";
import icon from "../../assets/icon.jpg";
import styles from "./cabecaljo.module.scss";
import lupa from "../../assets/lupadois.png";
import hamburger from '../../assets/menu.png';
import iconeX from '../../assets/iconeX.png';

function Cabecalho({menu ,setMenu, setPesquisa, pesquisa }) {
  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const togglePesquisa = () => {
    setPesquisa((prevState) => !prevState);
  };

  const verificaTela = () => {
    if (window.innerWidth <= 1024) {
      toggleMenu();
    }
  };

  return (
    <div className={styles.header}>
      <div>
        <img src={logo} className={pesquisa ? styles.logo : styles.logo2} alt="logo da alura dev"/>
      </div>
      <div
        className={pesquisa ? styles.containerInput : styles.containerInputSize}
      >
        <input
          className={styles.inputPesquisa}
          placeholder="Busque por algo"
        ></input>
      </div>
      <img
        src={lupa}
        className={styles.lupa}
        onClick={() => togglePesquisa()}
        alt="icone lupa"
      />
      <div className={styles.icone} onClick={verificaTela}>
        <img className={styles.icones} src={!menu ? hamburger : iconeX} alt="icone menu" width="25" height="25"/>
        <img src={icon} className={styles.iconeFoto} alt="Foto de perfil" />
        <p>Harry</p>
        </div>
    </div>
  );
}

export default Cabecalho;
