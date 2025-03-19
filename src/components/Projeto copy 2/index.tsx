import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from '../styles'

const Projeto3 = () => {
  return (
    <Card>
      <Titulo>Projeto EBAC TALKS</Titulo>
      <Paragrafo tipo="secundario">
        Projeto feito em HTML, CSS, JS e requisição AJAX
      </Paragrafo>
      <LinkBotao href="https://ebac-tech-talks-gamma-mocha.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto3
