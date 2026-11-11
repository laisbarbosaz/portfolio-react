export default function Formacao({ lista }) {
  return (
    <>
      {lista.map((f) => (
        <article className="formacao" key={f.titulo}>
          <h3>{f.titulo}</h3>
          <span>{f.periodo}</span>
          <span>{f.instituicao}</span>
        </article>
      ))}
    </>
  )
}
