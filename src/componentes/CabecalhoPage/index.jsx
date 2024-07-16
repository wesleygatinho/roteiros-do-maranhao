import { Link } from 'react-router-dom';
import styles from './CabecalhoPage.module.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const CabecalhoPage = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };
    return (
        <>
            <header className={styles.cabecalho}>
                <h2 className={styles.textoh2}>Roteiros do Maranhão</h2>
                <img className={styles.imagemBumbaBoi} src='/imagens/bumba.png' alt='Imagem bandeira do maranhão' />
                <nav className={styles.links__cabecalho}>
                    <FaBars className={styles.menuIcon} onClick={toggleMenu} />
                    <ul className={menuAberto ? styles.menuAberto : ''}>
                        <li>
                            <Link className={styles.links} to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className={styles.links} to='/roteiros'>Roteiros</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default CabecalhoPage;