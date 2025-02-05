import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map((time) => time.nome)}
        aoCadastrar={(novoColaborador) => setColaboradores([...colaboradores, novoColaborador])} 
      />
      {times.map((time) => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)} 
      />)}
      <Rodape />
    </div>
  );
}

export default App;
