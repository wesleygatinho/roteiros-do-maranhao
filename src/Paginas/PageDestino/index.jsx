import { useParams } from 'react-router-dom';
import styles from './PageDestino.module.css';
import ReactMarkdown from 'react-markdown';
import destinos from '../../../destinos.json';
import CabecalhoPage from '../../componentes/CabecalhoPage';
import Rodape from '../../componentes/Rodape';
import Destino from '../../componentes/Destino';

const PageDestino = () => {
    const parametros = useParams();

    const destino = destinos.find((post) => {
        return post.id === Number(parametros.id);
    })

    return (
        <>
            <CabecalhoPage />
            <Destino lugar={destino.lugar}
                cidade={destino.cidade}
                localizacao={destino.localizacao}
                fotoDestino={destino.imagem}
                 >
                <div className={styles.post_markdown_container}>
                    <ReactMarkdown>
                        {destino.descricao}
                    </ReactMarkdown>
                </div>
            </Destino>
            <Rodape />
        </>
    )
}

export default PageDestino;