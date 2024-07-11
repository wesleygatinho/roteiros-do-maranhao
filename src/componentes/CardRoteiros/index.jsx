import styles from './CardRoteiros.module.css';
import data from '../../../db.json';
import { Link } from 'react-router-dom';
const CardRoteiros = () => {
    return (
        <>
            <div className={styles.card}>
                {data.map(item => (
                    <div key={item.id} className={styles.cardRoteiros}>
                        <img className={styles.imagemCard} src={item.imagem} alt={item.descricao} />
                        <div className={styles.infoCard}>
                            <p className={styles.nomeLugar}>{item.descricao}</p>
                            <div className={styles.valor}>
                                <p className={styles.valorPreco}>{item.atrativo}</p>
                            </div>
                            <div className={styles.botao}>
                            <Link to='/destinos/1' className={styles.botaoVerLugar} >
                                    VER LUGAR
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CardRoteiros;