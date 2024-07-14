import React, { useState } from 'react';
import styles from './BannerRoteiros.module.css';

const BannerRoteiros = ({ searchTerm, setSearchTerm }) => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setIsSearchActive(true);
    };

    return (
        <>
            <section className={styles.bannerRoteiros}>
                <div className={styles.conteudos}>
                    <div className={styles.container_imagem}>
                        <img className={styles.imagem} src='imagens/capa.jpg' />
                    </div>
                    <div className={styles.textos}>
                        <h2 className={styles.textoh2}>Encontre o seu melhor destino</h2>
                        <div className={`${styles.pesquisar} ${isSearchActive ? styles.active : ''}`}>
                            <input
                                className={styles.pesquisarInput}
                                type="text"
                                placeholder='Pesquisar...'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <a className={styles.tagA}>
                                <img className={styles.loop_blue} src='imagens/loupe-blue.svg' />
                                <img className={styles.loop_white} src='imagens/loupe-white.svg' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BannerRoteiros;