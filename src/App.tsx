import './App.css';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import Grafico from './Components/Grafico';
import Rodape from './Components/Rodape';
import Tabela from './Components/Tabela';
import Titulo from './Components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const {dados: consultas, erro: consultasErro} = useDadosConsulta();
  const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional();

  if(consultasErro || profissionaisErro){
    console.log("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={consultas}/>
        <Grafico consultas={consultas} profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
