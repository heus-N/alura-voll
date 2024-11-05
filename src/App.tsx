import './App.css';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import Rodape from './Components/Rodape';
import Titulo from './Components/Titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
