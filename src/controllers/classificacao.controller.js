import prisma from "../lib/prisma.js";


export async function classificacaoGrupo(req, res) {

  const { grupo } = req.params;

  try {

    const selecoes = await prisma.selecao.findMany({
      where: {
        grupo
      },
      include: {
        partidasMandante: true,
        partidasVisitante: true
      }
    });


    const tabela = selecoes.map((selecao) => {

      let pontos = 0;
      let jogos = 0;
      let vitorias = 0;
      let empates = 0;
      let derrotas = 0;
      let golsPro = 0;
      let golsContra = 0;


      const partidas = [
        ...selecao.partidasMandante,
        ...selecao.partidasVisitante
      ];


      partidas.forEach((partida) => {

        if (!partida.realizada) return;

        jogos++;


        const souMandante = partida.mandanteId === selecao.id;


        const golsFeitos = souMandante
          ? partida.golsMandante
          : partida.golsVisitante;


        const golsSofridos = souMandante
          ? partida.golsVisitante
          : partida.golsMandante;


        golsPro += golsFeitos;
        golsContra += golsSofridos;


        if (golsFeitos > golsSofridos) {

          pontos += 3;
          vitorias++;

        } else if (golsFeitos === golsSofridos) {

          pontos++;
          empates++;

        } else {

          derrotas++;

        }

      });


      return {
        selecao: selecao.nome,
        sigla: selecao.sigla,
        bandeira: selecao.bandeira,
        pontos,
        jogos,
        vitorias,
        empates,
        derrotas,
        golsPro,
        golsContra,
        saldoGols: golsPro - golsContra
      };

    });


    tabela.sort((a,b) => {

      if (b.pontos !== a.pontos)
        return b.pontos - a.pontos;

      return b.saldoGols - a.saldoGols;

    });


    res.json(tabela);


  } catch(error) {

    res.status(500).json({
      erro: "Erro ao gerar classificação"
    });

  }

}