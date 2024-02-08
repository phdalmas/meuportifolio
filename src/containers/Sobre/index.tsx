import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá. Me chamo Pedro, tenho 30 anos e sou de Passo Fundo/RS. Sou engenheiro
      civil de formação e atuo na área há 5 anos. A experiência nesta área
      acrescentou muito no meu desenvolvimento pessoal, como minha comunicação,
      a capacidade de resolução de problemas, gerenciamento sob pressão e gestão
      de projetos. Gosto de estar aprendendo novas habilidades e me desafiando.
      Para além da atuação como engenheiro civil, tenho interesse na área da
      tecnologia desde muito cedo, tanto que meu início acadêmico foi na área da
      engenharia elétrica. Hoje busco novas oportunidades para minha carreira, e
      tenho me desafiado na área de tecnologia. Estou cursando Analise e
      Desenvolvimento de Sistema pela Uniámerica, e também Desenvolvimento Full
      Stack em Python pela EBAC e procurando novos desafios profissionais.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=phdalmas&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=phdalmas&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
