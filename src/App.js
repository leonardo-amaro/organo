import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoCadastrar={(novoColaborador) => setColaboradores([...colaboradores, novoColaborador])} 
      />
    </div>
  );
}

export default App;
