import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCadastrar={(novoColaborador) => setColaboradores([...colaboradores, novoColaborador])} 
      />
      <Time nome="Programação" />
    </div>
  );
}

export default App;
