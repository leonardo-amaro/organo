import { IoIosCloseCircle } from "react-icons/io";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <IoIosCloseCircle size={25} className="deletar" onClick={aoDeletar} />
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador