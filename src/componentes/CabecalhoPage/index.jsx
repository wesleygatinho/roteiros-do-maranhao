import { Link } from 'react-router-dom';
import styles from './CabecalhoPage.module.css';

const CabecalhoPage = () => {
    return (
        <>
            <header className={styles.cabecalho}>

                <h2 className={styles.textoh2}>Roteiros do Maranhão</h2>

                <img src='/imagens/bumba.png' alt='Imagem bandeira do maranhão' />

                <nav className={styles.links__cabecalho}>
                    <ul>
                        <li>
                            <Link className={styles.links} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className={styles.links} to='/favoritos'>Favoritos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default CabecalhoPage;