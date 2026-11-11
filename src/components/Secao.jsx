// Estrutura comum das seções: título à esquerda e conteúdo à direita
export default function Secao({ id, titulo, children }) {
  return (
    <section id={id}>
      <div className="wrap secao-grade">
        <h2>{titulo}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
