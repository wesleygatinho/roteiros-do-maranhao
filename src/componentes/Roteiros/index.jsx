import CardRoteiros from '../CardRoteiros';
import styles from './Roteiros.module.css';
import data from '../../../db.json';
const Roteiros = () => {
    return (
        <>
            <section className={styles.roteiros}>
                <h1 className={styles.roteirosH1}>Principais Destinos</h1>
                <div className={styles.conteudo}>
                    <div className={styles.card}>
                        {data.map((post) => (
                            <CardRoteiros post={post} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Roteiros;