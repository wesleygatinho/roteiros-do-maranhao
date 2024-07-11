import styles from './Destino.module.css';

const Destino = () => {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.div_Container}>
                <div className={styles.fotoCapa}>

                </div>
                <div className={styles.textos}>
                    <h2 className={styles.titulo}>
                        Roma
                    </h2>

                    <div className={styles.postConteudoContainer}>
                        Italia
                    </div>
                </div>
            </div>

        </article>
    )
}

export default Destino;