const dadosCopa = {
  edicao: "Copa do Mundo 2026",
  fase: "Fase de Grupos",
  grupos: [
    {
      letra: "A",
      selecoes: [
        { nome: "Qatar",         sigla: "QAT", bandeira: "https://flagcdn.com/qa.svg" },
        { nome: "Equador",       sigla: "ECU", bandeira: "https://flagcdn.com/ec.svg" },
        { nome: "Senegal",       sigla: "SEN", bandeira: "https://flagcdn.com/sn.svg" },
        { nome: "Países Baixos", sigla: "NED", bandeira: "https://flagcdn.com/nl.svg" },
      ],
      partidas: [
        { mandante: "QAT", visitante: "ECU", golsMandante: 0, golsVisitante: 2, rodada: 1, realizada: true },
        { mandante: "SEN", visitante: "NED", golsMandante: 0, golsVisitante: 2, rodada: 1, realizada: true },
        { mandante: "QAT", visitante: "SEN", golsMandante: 1, golsVisitante: 3, rodada: 2, realizada: true },
        { mandante: "NED", visitante: "ECU", golsMandante: 1, golsVisitante: 1, rodada: 2, realizada: true },
        { mandante: "NED", visitante: "QAT", golsMandante: 2, golsVisitante: 0, rodada: 3, realizada: true },
        { mandante: "ECU", visitante: "SEN", golsMandante: 1, golsVisitante: 2, rodada: 3, realizada: true },
      ],
    },
    {
      letra: "B",
      selecoes: [
        { nome: "Inglaterra",    sigla: "ENG", bandeira: "https://flagcdn.com/gb-eng.svg" },
        { nome: "Irã",           sigla: "IRN", bandeira: "https://flagcdn.com/ir.svg" },
        { nome: "Estados Unidos",sigla: "USA", bandeira: "https://flagcdn.com/us.svg" },
        { nome: "Gales",         sigla: "WAL", bandeira: "https://flagcdn.com/gb-wls.svg" },
      ],
      partidas: [
        { mandante: "ENG", visitante: "IRN", golsMandante: 6, golsVisitante: 2, rodada: 1, realizada: true },
        { mandante: "USA", visitante: "WAL", golsMandante: 1, golsVisitante: 1, rodada: 1, realizada: true },
        { mandante: "WAL", visitante: "IRN", golsMandante: 0, golsVisitante: 2, rodada: 2, realizada: true },
        { mandante: "ENG", visitante: "USA", golsMandante: 0, golsVisitante: 0, rodada: 2, realizada: true },
        { mandante: "WAL", visitante: "ENG", golsMandante: 0, golsVisitante: 3, rodada: 3, realizada: true },
        { mandante: "IRN", visitante: "USA", golsMandante: 0, golsVisitante: 1, rodada: 3, realizada: true },
      ],
    },
    {
      letra: "G",
      selecoes: [
        { nome: "Brasil",   sigla: "BRA", bandeira: "https://flagcdn.com/br.svg" },
        { nome: "Sérvia",   sigla: "SRB", bandeira: "https://flagcdn.com/rs.svg" },
        { nome: "Suíça",    sigla: "SUI", bandeira: "https://flagcdn.com/ch.svg" },
        { nome: "Camarões", sigla: "CMR", bandeira: "https://flagcdn.com/cm.svg" },
      ],
      partidas: [
        { mandante: "BRA", visitante: "SRB", golsMandante: 2, golsVisitante: 0, rodada: 1, realizada: true },
        { mandante: "SUI", visitante: "CMR", golsMandante: 1, golsVisitante: 0, rodada: 1, realizada: true },
        { mandante: "BRA", visitante: "SUI", golsMandante: 1, golsVisitante: 0, rodada: 2, realizada: true },
        { mandante: "CMR", visitante: "SRB", golsMandante: 3, golsVisitante: 3, rodada: 2, realizada: true },
        { mandante: "CMR", visitante: "BRA", golsMandante: 1, golsVisitante: 0, rodada: 3, realizada: true },
        { mandante: "SRB", visitante: "SUI", golsMandante: 2, golsVisitante: 3, rodada: 3, realizada: true },
      ],
    },
  ],
};

export default dadosCopa;