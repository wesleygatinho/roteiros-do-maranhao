import { useParams } from 'react-router-dom';
import styles from './PageDestino.module.css';
import CabecalhoPage from '../../componentes/CabecalhoPage';
import Rodape from '../../componentes/Rodape';
import Destino from '../../componentes/Destino';

const PageDestino = () => {
    const parametros = useParams();

    return(
        <>
            <CabecalhoPage/>
            <Destino/>
            <Rodape/>
        </>
    )
}

export default PageDestino;