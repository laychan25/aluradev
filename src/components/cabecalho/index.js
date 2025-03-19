import logo from '../../assets/image.png'
import icon from '../../assets/icon.jpg'
import styles from './cabecaljo.module.scss'
import { useEffect } from 'react'

function Cabecalho({menu,setMenu}){

    const toggleMenu = ()=>{
        setMenu((prevState) => !prevState)
    }
    
    const verificaTela =()=>{
        if(window.innerWidth <= 450){
          toggleMenu()
        }
        
    }

    useEffect(()=>{
       verificaTela();
       window.addEventListener('resize',verificaTela);
       return ()=> window.removeEventListener('resize', verificaTela)
    },[])


    return (
        <div className={styles.header}>
        <div >
        <img src={logo} className={styles.logo} alt='logo da alura dev'/>
        </div>
        <div className={styles.containerInput}>
           <input className={styles.inputPesquisa}  placeholder='Busque por algo'></input>
        </div>
        <div className={styles.icone}  onClick={verificaTela} >
            <img src={icon} className={styles.iconeFoto}  alt='Foto de perfil'/> 
            <p>Harry</p>
        </div>
        </div>
       


    )
}


export default Cabecalho