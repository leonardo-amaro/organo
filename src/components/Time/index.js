import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, deletarColaborador, mudaCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input type='color' className='muda-cor' value={time.corSecundaria} onChange={(evento) => mudaCor(evento.target.value, time.nome)} />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={deletarColaborador} />
                })}
            </div>
        </section>

    )
}

export default Time