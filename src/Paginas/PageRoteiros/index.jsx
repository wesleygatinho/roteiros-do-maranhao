import BannerRoteiros from '../../componentes/BannerRoteiros';
import CabecalhoPage from '../../componentes/CabecalhoPage';
import CardModelo from '../../componentes/CardModelo';
import Rodape from '../../componentes/Rodape';
import styles from './PageRoteiros.module.css';
import data from '../../../destinos.json';
import { useState } from 'react';

const PageRoteiros = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = data.filter((post) => {
        return post.lugar.toLowerCase().includes(searchTerm.toLowerCase()),
        post.atrativos.toLowerCase().includes(searchTerm.toLowerCase()),
        post.cidade.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <>
            <CabecalhoPage />
            <BannerRoteiros searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <section className={styles.roteiros}>
                {filteredData.length === 0 ? (
                    <h1 className={styles.roteirosH1}>Nenhum destino encontrado</h1>
                ) : (
                    <h1 className={styles.roteirosH1}>Conheça Nossos Principais Destinos</h1>
                )}
                <div className={styles.conteudo}>
                    <div className={styles.card}>
                        {filteredData.map((post) => (
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