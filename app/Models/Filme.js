const { filmes, proximoId } = require('../../database/db')

class Filme {
  constructor({ nome, estoque, precoLocacao }) {
    this.json = {}

    this.json.nome = nome
    this.json.estoque = estoque
    this.json.precoLocacao = precoLocacao
  }

  toJSON() {
    return { ...this.json }
  }

  store() {
    const filme = this.toJSON()
    filme.id = proximoId()
    filmes.push(filme)

    return filme
  }

  get nome() { 
    return this.json.nome 
  }

  set nome(nome) { 
    this.json.nome = nome 
  }

  get estoque() { 
    return this.json.estoque 
  }

  set estoque(estoque) { 
    this.json.estoque = estoque 
  }

  get precoLocacao() {
    return this.json.precoLocacao
  }

  set precoLocacao(precoLocacao) {
    this.json.precoLocacao = precoLocacao
  }
}

module.exports = Filme
