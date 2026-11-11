import { useState } from 'react'

// Matriz de risco interativa: probabilidade (colunas) x impacto (linhas).
// A nota do risco é probabilidade * impacto e define a cor e o texto.
const probabilidades = ['muito baixa', 'baixa', 'média', 'alta', 'muito alta']
const impactos = ['muito baixo', 'baixo', 'médio', 'alto', 'muito alto']

function nivel(nota) {
  if (nota <= 4) return { classe: 'nivel-baixo', texto: 'risco baixo' }
  if (nota <= 9) return { classe: 'nivel-medio', texto: 'risco médio' }
  if (nota <= 16) return { classe: 'nivel-alto', texto: 'risco alto' }
  return { classe: 'nivel-critico', texto: 'risco crítico' }
}

// Impacto 5 fica no topo; probabilidade 1 fica à esquerda
const celulas = []
for (let impacto = 5; impacto >= 1; impacto--) {
  for (let prob = 1; prob <= 5; prob++) {
    const nota = prob * impacto
    const n = nivel(nota)
    celulas.push({
      id: `${prob}-${impacto}`,
      classe: n.classe,
      rotulo: `Probabilidade ${probabilidades[prob - 1]}, impacto ${impactos[impacto - 1]}: ${n.texto}, nota ${nota}`,
      texto: `Probabilidade ${probabilidades[prob - 1]} e impacto ${impactos[impacto - 1]}: ${n.texto} (nota ${nota} de 25).`,
    })
  }
}

export default function MatrizRisco() {
  const [ativa, setAtiva] = useState(null)
  const [leitura, setLeitura] = useState('Escolha um quadrado para ler o nível de risco.')

  return (
    <div className="matriz-bloco">
      <div className="matriz" role="group" aria-label="Matriz de risco interativa, 5 por 5">
        {celulas.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`celula ${c.classe}${ativa === c.id ? ' ativa' : ''}`}
            aria-label={c.rotulo}
            onClick={() => {
              setAtiva(c.id)
              setLeitura(c.texto)
            }}
            onMouseEnter={() => {
              if (!ativa) setLeitura(c.texto)
            }}
          />
        ))}
      </div>
      <div className="eixos">
        <span>Probabilidade →</span>
        <span>Impacto ↑</span>
      </div>
      <p className="leitura" aria-live="polite">{leitura}</p>
    </div>
  )
}
