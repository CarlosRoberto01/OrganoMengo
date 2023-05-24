import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';



function App() {

  const times = [ 
    {
      nome: "Goleiros",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    },
    {
      nome: "Zagueiros",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    }, 
    {
      nome: "Lateral Direito",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    }, 
    {
      nome: "Lateral Esquerdo",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    }, 
    {
      nome: "Volante",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    }, 
    {
      nome: "Meio campo",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"

    }, 
    {
      nome: "Atacante",
      corPrimaria:"#D2232A",
      corSecundaria:"#F2F2F2"
    },
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}
        aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(times => <Time 
        key={times.nome} 
        nome={times.nome} 
        corPrimaria={times.corPrimaria}
        corSecundaria={times.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.cargo === times.nome)}
       /> )}
      <Rodape />
    
      
    </div>
  );
}

export default App;
