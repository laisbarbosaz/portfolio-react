import Menu from './components/Menu.jsx'
import Abertura from './components/Abertura.jsx'
import Secao from './components/Secao.jsx'
import Experiencia from './components/Experiencia.jsx'
import Projetos from './components/Projetos.jsx'
import Grupos from './components/Grupos.jsx'
import Formacao from './components/Formacao.jsx'
import Contato from './components/Contato.jsx'
import { perfil, experiencias, projetos, stacksCurso, competencias, formacoes } from './dados.js'

export default function App() {
  return (
    <>
      <Menu nome={perfil.nome} />
      <main>
        <Abertura perfil={perfil} />

        <Secao id="sobre" titulo="Sobre mim">
          <div className="sobre">
            {perfil.sobre.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </Secao>

        <Secao id="experiencia" titulo="Experiência">
          <Experiencia lista={experiencias} />
        </Secao>

        <Secao id="projetos" titulo="Projetos">
          <Projetos lista={projetos} />
        </Secao>

        <Secao id="stacks" titulo="Stacks do curso">
          <p className="nota">O que uso e pratico no curso de Sistemas de Informação da UMC.</p>
          <Grupos lista={stacksCurso} />
        </Secao>

        <Secao id="competencias" titulo="Competências">
          <Grupos lista={competencias} />
        </Secao>

        <Secao id="formacao" titulo="Formação">
          <Formacao lista={formacoes} />
        </Secao>

        <Secao id="contato" titulo="Contato">
          <Contato perfil={perfil} />
        </Secao>
      </main>
      <footer>
        <p>Desenvolvido por {perfil.nome} · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
