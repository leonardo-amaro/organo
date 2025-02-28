import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";
import { v4 as uuidv4 } from "uuid";
import { MdAssignmentAdd } from "react-icons/md";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/colaboradores')
      .then((resposta) => resposta.json())
      .then((dados) => formatarColaboradores(dados));
  }, []);

  function formatarColaboradores(arrColaboradores) {
    setColaboradores(
      arrColaboradores.map((colaborador) => {
        let colaboradorFormatado = { ...colaborador, id: uuidv4() }
        return colaboradorFormatado;
      })
    );
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  function mudaCorTime(cor, idTime) {
    setTimes(times.map((time) => {
      if (time.id === idTime) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function criaTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ]);
  }

  function verificarFavorito(id) {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
        criarNovoTime={criaTime}
        visivel={visivel}
      />
      <section className="controle-formulario">
        <MdAssignmentAdd 
          size={50} 
          color="#6278F7" 
          onClick={() => setVisivel(!visivel)}
        />
      </section>
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            deletarColaborador={deletarColaborador}
            mudaCor={mudaCorTime}
            verificarFavorito={verificarFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
