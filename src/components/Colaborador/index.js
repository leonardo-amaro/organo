import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, verificarFavorito }) => {
    function favoritar() {
        verificarFavorito(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <IoIosCloseCircle 
                    size={25} 
                    className="deletar" 
                    onClick={() => aoDeletar(colaborador.id)} 
                />
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                {
                    colaborador.favorito 
                    ? <IoIosHeart { ...propsFavorito } color="#ff0000" /> 
                    : <IoIosHeartEmpty { ...propsFavorito } />
                }
            </div>
            </div>
        </div>
    );
}

export default Colaborador