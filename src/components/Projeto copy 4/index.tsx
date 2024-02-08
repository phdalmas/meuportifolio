import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto5 = () => {
  return (
    <Card>
      <Titulo>Projeto Loja de Instrumentos</Titulo>
      <Paragrafo tipo="secundario">
        Projeto feito em HTML, CSS, JS e responsivo
      </Paragrafo>
      <LinkBotao href="https://exercicio-css-responsivo-olive.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto5
