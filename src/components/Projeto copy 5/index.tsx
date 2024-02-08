import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto5 = () => {
  return (
    <Card>
      <Titulo>Projeto Clone Disney Plus</Titulo>
      <Paragrafo tipo="secundario">
        Clone da Landing page da Disney Plus
      </Paragrafo>
      <LinkBotao href="https://github-perfis-one.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto5
