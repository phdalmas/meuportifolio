import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá. Me chamo Pedro, tenho 31 anos e sou de Passo Fundo/RS. Estou cursando
      Análise e Desenvolvimento de Sistema pela Uniámerica. Desde março de 2024
      trabalho na empresa Onbox Design, da Austrália. Tenho trabalhado com
      TypeScript, JavaScript, React, C# e outras linguagem na criação de um
      software para a área de engenharia/arquitetura. Tenho experiencia na parte
      de testes unitários e integração e também em PHP e Python por meio de
      projetos próprios. A experiência na área de engenharia, onde atuei por 5
      anos, acrescentou muito no meu desenvolvimento pessoal, como minha
      comunicação, a capacidade de resolução de problemas, gerenciamento sob
      pressão e gestão de projetos. Gosto de estar aprendendo novas habilidades
      e me desafiando. Hoje busco novas oportunidades para minha carreira, e
      tenho me desafiado na área de tecnologia.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=phdalmas&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=phdalmas&layout=compact&langs_count=5&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
