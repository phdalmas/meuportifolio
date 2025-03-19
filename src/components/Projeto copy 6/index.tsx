import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from '../styles'

const Projeto6 = () => {
  return (
    <Card>
      <Titulo>Perfil Linkedin</Titulo>
      <Paragrafo tipo="secundario">Meu perfil no Linkedin</Paragrafo>
      <LinkBotao href="https://www.linkedin.com/in/pedro-dalmas/">
        Acessar
      </LinkBotao>
    </Card>
  )
}

export default Projeto6
