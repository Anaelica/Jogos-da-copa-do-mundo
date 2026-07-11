import {
  listarSelecoesService,
  buscarSelecaoService
} from "../services/selecoes.service.js";


export async function listarSelecoes(req, res) {

  try {

    const selecoes = await listarSelecoesService();

    return res.json(selecoes);


  } catch(error) {

    return res.status(500).json({
      erro: "Erro ao buscar seleções"
    });

  }

}



export async function buscarSelecao(req, res) {

  const { id } = req.params;


  try {

    const selecao = await buscarSelecaoService(id);


    if (!selecao) {
      return res.status(404).json({
        erro: "Seleção não encontrada"
      });
    }


    return res.json(selecao);


  } catch(error) {

    return res.status(500).json({
      erro: "Erro ao buscar seleção"
    });

  }

}