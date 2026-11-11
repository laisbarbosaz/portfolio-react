export default function Contato({ perfil }) {
  return (
    <div className="contatos">
      <div>
        <span>GitHub</span>
        <a href={perfil.github} target="_blank" rel="noopener noreferrer">{perfil.github}</a>
      </div>
      <div>
        <span>LinkedIn</span>
        <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer">{perfil.linkedin}</a>
      </div>
      <div>
        <span>E-mail</span>
        <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
      </div>
    </div>
  )
}
