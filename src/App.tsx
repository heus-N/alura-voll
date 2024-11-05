import './App.css';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import Rodape from './Components/Rodape';
import Tabela from './Components/Tabela';
import Titulo from './Components/Titulo';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const {dados, erro} = useDadosConsulta();
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={dados}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
