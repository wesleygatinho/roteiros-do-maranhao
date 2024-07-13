import BannerRoteiros from '../../componentes/BannerRoteiros';
import CabecalhoPage from '../../componentes/CabecalhoPage';
import CardModelo from '../../componentes/CardModelo';
import Rodape from '../../componentes/Rodape';
import styles from './PageRoteiros.module.css';
import data from '../../../destinos.json';

const PageRoteiros = () => {
    return (
        <>
            <CabecalhoPage />
            <BannerRoteiros />
            <section className={styles.roteiros}>
                <h1 className={styles.roteirosH1}>Conheça Nossos Principais Destinos</h1>
                <div className={styles.conteudo}>
                    <div className={styles.card}>
                        {data.map((post) => (
                            <CardModelo post={post} />

                        ))}
                    </div>
                </div>
            </section>
            <Rodape />
        </>
    )
}

export default PageRoteiros;