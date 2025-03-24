import Projeto from '../../components/project-task-list'
import Titulo from '../../components/Titulo'
import Projeto2 from '../../components/project-github-search'

import { Lista } from './styles'
import Projeto3 from '../../components/project-ebac'
import Projeto4 from '../../components/project-mtg'
import Projeto5 from '../../components/project-clone'
import Projeto6 from '../../components/project-linkedin'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto2 />
      </li>
      <li>
        <Projeto3 />
      </li>
      <li>
        <Projeto4 />
      </li>
      <li>
        <Projeto5 />
      </li>
      <li>
        <Projeto6 />
      </li>
    </Lista>
  </section>
)

export default Projetos
