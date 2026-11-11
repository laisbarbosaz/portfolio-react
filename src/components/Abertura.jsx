import MatrizRisco from './MatrizRisco.jsx'

export default function Abertura({ perfil }) {
  return (
    <div className="abertura">
      <div className="wrap">
        <div>
          <h1>{perfil.nome}</h1>
          <p className="cargo">{perfil.cargo}</p>
          <p className="resumo">{perfil.resumo}</p>
          <div className="acoes">
            <a className="botao cheio" href={perfil.github} target="_blank" rel="noopener noreferrer">
              Ver GitHub
            </a>
            <a className="botao" href="#contato">
              Entrar em contato
            </a>
          </div>
        </div>
        <MatrizRisco />
      </div>
    </div>
  )
}
