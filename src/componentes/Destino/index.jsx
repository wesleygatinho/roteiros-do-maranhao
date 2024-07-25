import styles from './Destino.module.css';
import MapComponent from '../MapaInterativo';

const Destino = ({ lugar, cidade, children, localizacao, fotoDestino, coords }) => {
    return (
        <>
            <article className={styles.postModeloContainer}>
                <div className={styles.div_Container}>
                <div className={styles.fotoCapa} style={{backgroundImage: `url(${fotoDestino})`}}>
                    
                    </div>
                    <div className={styles.textos}>
                        <h2 className={styles.titulo}>
                            {lugar}
                        </h2>

                        <div className={styles.subtitulo}>
                            {cidade}
                        </div>
                    </div>
                </div>

                <div className={styles.descricao}>
                    {children}
                </div>
                <div className={styles.localizacao}>
                    <MapComponent locations={localizacao} />
                </div>

            </article>
        </>
    )
}

export default Destino;