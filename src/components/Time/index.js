import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
  return (
    // Renderização condicional (se não houver colaborador na lista, o componente não é renderizado)
    props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>
        {props.nome}
      </h3>
      <div className='colaboradores'>
        {props.colaboradores.map((colaborador) => <Colaborador
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          corDeFundo={props.corPrimaria}
        />)}
      </div>
    </section>
  );
}

export default Time;