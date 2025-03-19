import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from '../styles'

const Projeto2 = () => {
  return (
    <Card>
      <Titulo>Projeto Pesquisa GitHub</Titulo>
      <Paragrafo tipo="secundario">Pesquisador de perfis do GitHub</Paragrafo>
      <LinkBotao href="https://github-perfis-one.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto2
