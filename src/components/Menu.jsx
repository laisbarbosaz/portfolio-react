const links = [
  ['#sobre', 'Sobre'],
  ['#experiencia', 'Experiência'],
  ['#projetos', 'Projetos'],
  ['#stacks', 'Stacks'],
  ['#competencias', 'Competências'],
  ['#formacao', 'Formação'],
  ['#contato', 'Contato'],
]

export default function Menu({ nome }) {
  return (
    <header className="menu">
      <div className="wrap">
        <strong>{nome}</strong>
        <nav aria-label="Principal">
          <ul>
            {links.map(([href, texto]) => (
              <li key={href}>
                <a href={href}>{texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
