import './App.css';
import Avaliacao from './Components/Avaliacao';
import Botao from './Components/Botao';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import Grafico from './Components/Grafico';
import Rodape from './Components/Rodape';
import Subtitulo from './Components/Subtitulo';
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
        <Botao>Cadastrar Especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas}/>
        <Titulo imagem="gráfico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais}/>
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
