let id = 1

const proximoId = () => {
    return id++
}

const filmes = []
const usuarios = []
const locacoes = []

module.exports = {
  proximoId,
  filmes,
  usuarios,
  locacoes,
}
