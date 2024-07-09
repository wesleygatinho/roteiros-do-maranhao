import CabecalhoPage from '../../componentes/CabecalhoPage';
import Destaques from '../../componentes/Destaques';
import Rodape from '../../componentes/Rodape';
import Roteiros from '../../componentes/Roteiros';
import styles from './PageInicial.module.css';

const PageInicial = () => {
    return(
        <>
            <CabecalhoPage/>
            <Destaques/>
            <Roteiros/>
            <Rodape/>
        </>
    )
}

export default PageInicial;