export default function Projetos({ lista }) {
  return (
    <div>
      {lista.map((p) => (
        <article className="projeto" key={p.nome}>
          <div>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <ul className="tecnologias">
              {p.tecnologias.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <a className="ver" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${p.nome} no GitHub`}>
            Ver no GitHub
          </a>
        </article>
      ))}
    </div>
  )
}
