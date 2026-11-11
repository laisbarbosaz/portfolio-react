// Usado tanto para as stacks do curso quanto para as competências
export default function Grupos({ lista }) {
  return (
    <>
      {lista.map((g) => (
        <div className="grupo" key={g.titulo}>
          <h3>{g.titulo}</h3>
          <ul>
            {g.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
