

import styles from './info.module.scss';
import { useCor } from '../cotextoCor';

function Infos(){
    const {cor , setCor} = useCor()
    const handleChange = (e) => {
        setCor(e.target.value); // Atualiza a cor com o valor do input
      };
    
    return(
       <div className={styles.div}>
        <p>SEU PROJETO</p>
        <div className={styles.desc}>
            <input type='text' placeholder='Nome do seu projeto' className={styles.inputDesc}></input>
            <input type='text' placeholder='Descrição do seu projeto' className={styles.inputDesc}></input>
        </div>
        <div>
            <p>PERSONALIZACÃO</p>
           <select className={styles.personalizacao}>
              <option>Javascript</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>React</option>
           </select>
            <input onChange={handleChange} className={styles.cor} value={cor} type='color'></input>
           
        </div>
            <button>Salvar</button>

       </div>
    )
}

export default Infos