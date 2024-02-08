import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá! Me chamo Pedro, tenho 30 anos e há 5 anos atuo como Engenheiro Civil.
      Com experiência nesta área pude desenvolver importantes habilidades
      pessoais como comunicação, disciplina, resolução de problemas,
      gerenciamento sob pressão e gestão de projetos de alta duração. Nesse
      sentido, desenvolvi meu perfil técnico e analítico nas diversas situações
      vivenciadas na rotina de gestão de projetos e obras. Gosto de ser
      desafiado e busco resolver problemas com objetividade. Possuo interesse na
      área da tecnologia desde muito cedo, tanto que meu início acadêmico foi na
      área da engenharia elétrica. Hoje busco novos desafios na minha carreira,
      e tenho me dedicado a desenvolver habilidades na área de tecnologia. Estou
      cursando Analise e Desenvolvimento de Sistema na Uniámerica, e estou muito
      entusiasmado com as novas oportunidades que a área oferece.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=phdalmas&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=phdalmas&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
