// Todos os dados do portfólio ficam aqui.
// Para atualizar o site, basta editar este arquivo.

const GITHUB = 'https://github.com/laisbarbosaz'

export const perfil = {
  nome: 'Laís Barbosa',
  cargo: 'Analista de Dados de Crédito e Risco',
  resumo:
    'Estudante de Sistemas de Informação na UMC, com experiência em análise de dados, ' +
    'risco de crédito, dashboards e auditoria de sistemas.',
  sobre: [
    'Estou no último semestre do bacharelado em Sistemas de Informação na Universidade de Mogi das Cruzes. ' +
      'Comecei no técnico em Informática para Internet, passei por dados na Copa Energia e por auditoria de ' +
      'tecnologia no Itaú Unibanco, e hoje trabalho com risco de crédito na Sem Parar Corpay.',
    'No trabalho, crio políticas e indicadores de crédito, escrevo consultas SQL e monto dashboards em Power BI. ' +
      'Na faculdade, desenvolvo aplicações web com Java, Spring Boot, Python e Django, e agora também com React. ' +
      'Gosto de levar o olhar de risco e qualidade para o código.',
  ],
  email: 'laisbarbosa383@gmail.com',
  linkedin: 'https://linkedin.com/in/lais-bs',
  github: GITHUB,
}

export const experiencias = [
  {
    cargo: 'Analista de Dados de Crédito e Risco Júnior',
    empresa: 'Sem Parar Corpay',
    periodo: 'Ago/2026 – atual',
    atividades: [
      'Gestão e análise de riscos e acompanhamento da carteira de cartão de crédito para Pessoa Física e Pessoa Jurídica.',
      'Criação de novas políticas de crédito e indicadores a partir do acompanhamento da carteira.',
      'Scripts SQL e dashboards para estudos de risco de crédito com Databricks, Excel e Power BI.',
    ],
    destaque: null,
  },
  {
    cargo: 'Auditora de Tecnologia – Produtos de Crédito para Varejo PF',
    empresa: 'Itaú Unibanco (estágio)',
    periodo: 'Dez/2024 – Ago/2026',
    atividades: [
      'Testes de auditoria e avaliação da efetividade de controles, com riscos quantitativos e qualitativos.',
      'Testes em gestão de incidentes, governança de dados, monitoramento, APIs e resiliência sistêmica.',
      'Python, SQL, AWS Athena e dashboards em Power BI para os testes.',
      'Segurança da informação, LGPD, ISO e COBIT; IA aplicada à automação de testes, com criação de agentes.',
    ],
    destaque: 'Projeto de Matriz de Risco da Auditoria com IA.',
  },
  {
    cargo: 'Data & Analytics',
    empresa: 'Copa Energia (estágio)',
    periodo: 'Abr/2024 – Nov/2024',
    atividades: [
      'Gestão de acessos e publicação de painéis na plataforma de dados Copa Analytics.',
      'Databricks, SQL e automações em Python para extração e tratamento de dados.',
      'Gerenciamento de permissões com Azure e suporte técnico nível 1 a usuários.',
      'Catalogação de dados na migração para um datalake.',
    ],
    destaque: 'Dashboard automatizado de gestão de tarefas para a área de Inovação.',
  },
]

export const projetos = [
  {
    nome: 'Portfólio em React',
    descricao:
      'Este site. Comecei em HTML, CSS e JavaScript, passei para Spring Boot com Thymeleaf e agora reescrevi em React com Vite, publicado na Vercel.',
    tecnologias: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    url: GITHUB + '/portfolio-react',
  },
  {
    nome: 'Integração de Sistemas – produto-service',
    descricao: 'API em Java Spring com CRUD de produtos e integração com o ViaCEP para consulta de endereço.',
    tecnologias: ['Java', 'Spring Boot', 'API REST', 'ViaCEP'],
    url: GITHUB + '/integracao_sistemas',
  },
  {
    nome: 'Go Cash',
    descricao:
      'Plataforma de educação financeira feita em Django, com login, cadastro e verificação em duas etapas por e-mail.',
    tecnologias: ['Python', 'Django', '2FA'],
    url: GITHUB + '?tab=repositories',
  },
  {
    nome: 'Cotação do dólar',
    descricao: 'Página que consulta a AwesomeAPI com fetch e mostra a cotação USD/BRL, publicada no GitHub Pages.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'API'],
    url: GITHUB + '?tab=repositories',
  },
]

// Stacks trabalhadas no curso de Sistemas de Informação da UMC
export const stacksCurso = [
  { titulo: 'Front-end', itens: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'] },
  { titulo: 'Back-end', itens: ['Java', 'Spring Boot', 'Thymeleaf', 'Python', 'Django', 'PHP', 'APIs REST'] },
  { titulo: 'Banco de dados', itens: ['SQL', 'MySQL', 'MongoDB', 'Modelagem de dados'] },
  { titulo: 'Ferramentas e deploy', itens: ['Git', 'GitHub', 'Vercel', 'GitHub Pages', 'VS Code'] },
  { titulo: 'Engenharia e gestão', itens: ['Engenharia de Software', 'UML', 'Scrum', 'Kanban', 'Segurança da Informação'] },
]

export const competencias = [
  {
    titulo: 'Dados e risco',
    itens: ['SQL', 'Power BI', 'Databricks', 'AWS Athena', 'Excel', 'Análise de riscos', 'Políticas de crédito'],
  },
  {
    titulo: 'Métodos e pessoas',
    itens: ['Lean', 'Design Thinking', 'Matriz SWOT', 'Trabalho em times multifuncionais', 'Comunicação clara', 'Inglês avançado'],
  },
]

export const formacoes = [
  { titulo: 'Bacharelado em Sistemas de Informação', instituicao: 'Universidade de Mogi das Cruzes (UMC)', periodo: 'Fev/2023 – Dez/2026' },
  { titulo: 'Técnico em Informática para Internet', instituicao: 'Etec de Poá', periodo: 'Jan/2020 – Dez/2022' },
  { titulo: 'Análise de Dados', instituicao: 'Google (Coursera)', periodo: 'Em andamento' },
  { titulo: 'APIs', instituicao: 'Itaú Unibanco', periodo: '2025' },
  { titulo: 'AWS D&A Foundation', instituicao: 'Itaú Unibanco', periodo: '2024' },
  { titulo: 'Generative IA', instituicao: 'Itaú Unibanco', periodo: '2024' },
  { titulo: 'Python', instituicao: 'Curso em Vídeo', periodo: '2024' },
]
