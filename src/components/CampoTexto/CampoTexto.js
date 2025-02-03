import './CampoTexto.css';

function CampoTexto(props) {

  const aoDigitar = (evento) => props.aoAlterado(evento.target.value);

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
        required={props.obrigatorio} 
        placeholder={props.placeholder} 
        value={props.valor}
        onChange={aoDigitar}
      />
    </div>
  );
}

export default CampoTexto;