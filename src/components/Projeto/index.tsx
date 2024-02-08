import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkBotao href="https://todo-vue-five-pi.vercel.app/">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto
