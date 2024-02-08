import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto4 = () => {
  return (
    <Card>
      <Titulo>Projeto MTG Arts</Titulo>
      <Paragrafo tipo="secundario">
        Projeto feito em HTML, CSS, JS e responsivo
      </Paragrafo>
      <LinkBotao href="https://exercicio-modulo-14-two.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto4
