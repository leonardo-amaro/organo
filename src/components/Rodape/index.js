import './Rodape.css';

const Rodape = () => {
  return (
    <footer className='footer'>
      <div className='item'>
        <img src='/imagens/fb.png' alt='Logo Facebook' />
        <img src='/imagens/tw.png' alt='Logo Twitter' />
        <img src='/imagens/ig.png' alt='Logo Instagram' />
      </div>
      <div className='item'>
        <img src='/imagens/logo.png' alt='Logo da plataforma Organo' />
      </div>
      <div className='item'>
        <p>Criado por Alura.</p>
      </div>
    </footer>
  )
}

export default Rodape;