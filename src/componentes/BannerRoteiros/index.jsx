import styles from './BannerRoteiros.module.css';

const BannerRoteiros = () => {
    return (
        <>
            <section className={styles.bannerRoteiros}>
                <div className={styles.conteudos}>
                    <div className={styles.container_imagem}>
                        <img className={styles.imagem} src='imagens/capa.jpg' />
                    </div>
                    <div className={styles.textos}>
                        <h2 className={styles.textoh2}>Encontre o seu melhor destino</h2>
                        <div className={styles.pesquisar}>
                            <input className={styles.pesquisarInput} type="text" placeholder='Pesquisar...' />
                            <a className={styles.tagA}>
                                <img className={styles.loop_blue} src='imagens/loupe-blue.svg'/>
                                <img className={styles.loop_white} src='imagens/loupe-white.svg'/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerRoteiros;