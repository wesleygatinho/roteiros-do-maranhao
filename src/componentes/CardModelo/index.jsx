import styles from './CardModelo.module.css'
import { Link } from 'react-router-dom';
const CardModelo = ({ post }) => {
    return (
        <>


            <div key={post.id} className={styles.cardRoteiros}>
                <img className={styles.imagemCard} src={post.imagem} alt={post.descricao} />
                <div className={styles.infoCard}>
                    <p className={styles.nomeLugar}>{post.lugar}</p>
                    <div className={styles.valor}>
                        <p className={styles.valorPreco}>{post.atrativos}</p>
                    </div>
                    <div className={styles.botao}>
                        <Link to={`/destinos/${post.id}`} className={styles.botaoVerLugar} >
                            VER LUGAR
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CardModelo;