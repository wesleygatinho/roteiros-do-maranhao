import CardRoteiros from '../CardRoteiros';
import styles from './Roteiros.module.css';

const Roteiros = () => {
    return (
        <>
            <section className={styles.roteiros}>
                <h1 className={styles.roteirosH1}>Principais Lugares</h1>
                <div className={styles.conteudo}>
                    <CardRoteiros />

                </div>
            </section>
        </>
    )
}

export default Roteiros;