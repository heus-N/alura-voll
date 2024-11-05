import styled from 'styled-components';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`

const ItemEstilizado = styled.li<Props>`
  list-style-type: none;
`

interface Props{
  imagem?: string,
  children?: React.ReactNode
}

interface IImagens {
  facebook: string,
  google: string,
  instagram: string,
  whatsapp: string,
}

function Rodape(){
  const listaRedesSociais: IImagens={
    facebook: facebook,
    google: google,
    instagram: instagram,
    whatsapp: whatsapp
  }
  const redesSociais = ["facebook", "google", "instagram", "whatsapp"] as const;
  type RedeSocial = typeof redesSociais[number]
  return(
    <RodapeEstilizado>
      <ListaEstilizada>
        {redesSociais.map((imagem) => (
          <ItemEstilizado key={imagem} imagem={listaRedesSociais[imagem as RedeSocial]}>
            <a href="#">
              <img src={listaRedesSociais[imagem as RedeSocial]} alt={`logo do ${imagem}`}/> 
            </a>
          </ItemEstilizado>
        ))}
      </ListaEstilizada>
      <p>2024 Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </RodapeEstilizado>
  )
}

export default Rodape