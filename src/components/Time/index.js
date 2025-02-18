import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, deletarColaborador, mudaCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.3)}}>
            <input type='color' className='muda-cor' value={time.cor} onChange={(evento) => mudaCor(evento.target.value, time.nome)} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={deletarColaborador} />
                })}
            </div>
        </section>

    )
}

export default Time