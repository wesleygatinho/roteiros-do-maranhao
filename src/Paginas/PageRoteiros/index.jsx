import BannerRoteiros from '../../componentes/BannerRoteiros';
import CabecalhoPage from '../../componentes/CabecalhoPage';
import Rodape from '../../componentes/Rodape';
import Roteiros from '../../componentes/Roteiros';
import styles from './PageRoteiros.module.css';

const PageRoteiros = () => {
    return(
        <>
            <CabecalhoPage/>
            <BannerRoteiros/>
            <Roteiros/>
            <Rodape/>
        </>
    )
}

export default PageRoteiros;