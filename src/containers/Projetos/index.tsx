import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import Projeto2 from '../../components/Projeto copy'

import { Lista } from './styles'
import Projeto3 from '../../components/Projeto copy 2'
import Projeto4 from '../../components/Projeto copy 3'
import Projeto5 from '../../components/Projeto copy 5'
import Projeto6 from '../../components/Projeto copy 6'

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
