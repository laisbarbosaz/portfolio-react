export default function Experiencia({ lista }) {
  return (
    <div className="linha-tempo">
      {lista.map((e) => (
        <article className="exp" key={e.empresa + e.cargo}>
          <h3>{e.cargo}</h3>
          <p className="quem">
            {e.empresa} · {e.periodo}
          </p>
          <ul>
            {e.atividades.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          {e.destaque && <p className="destaque">Destaque: {e.destaque}</p>}
        </article>
      ))}
    </div>
  )
}
