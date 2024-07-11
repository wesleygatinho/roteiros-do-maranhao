import styles from './Destaques.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Destaques = () => {
        return (
        <>
            <section className={styles.destaques}>
                <div className={styles.conteudosdestaques}>
                    <div className={styles.video}>
                        <video src='imagens/videovideo.mp4' autoPlay loop></video>
                    </div>
                    <div className={styles.textos}>
                        <div className={styles.textoh1h2}>
                            <h2 className={styles.textoh2}>Hora da sua</h2>
                            <h1 className={styles.textoh1}>próxima aventura</h1>
                        </div>
                        <p>
                            Aqui você pode encontrar os melhores roteiros
                        </p>
                        <Link to="/roteiros" className={styles.link}>                            
                            VER ROTEIROS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destaques;