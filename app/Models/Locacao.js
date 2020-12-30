const { locacoes, proximoId, usuarios } = require('../../database/db')

class Locacao {
  constructor() {
    this.json = {}
  }

  toJSON() {
    return { ...this.json }
  }

  store(usuario) {
    const locacao = this.toJSON()
    locacao.id = proximoId()

    // Banco de dados super relacional :D
    locacoes.push(locacao)
    usuario.locacoes = locacoes

    return locacao
  }

  save(locacao) {
    locacao = this.toJSON()
    const usuario = usuarios.find(u => u.id === locacao.usuario.id)

    const i = locacoes.findIndex(l => l.id === locacao.id)
    locacoes.splice(i, 1, locacao)
    
    usuario.save(locacoes)

    return locacao
  }

  get usuario() {
		return this.json.usuario
  }
  
	set usuario(usuario) {
		this.json.usuario = usuario
  }
  
	get dataLocacao() {
		return this.json.dataLocacao
  }
  
  set dataLocacao (dataLocacao) {
    this.json.dataLocacao = dataLocacao
  }

  get dataRetorno() {
    return this.json.dataRetorno
  }

  set dataRetorno(dataRetorno) {
    this.json.dataRetorno = dataRetorno
  }

	get valor() {
		return this.json.valor
  }
  
	set valor(valor) {
		this.json.valor = valor
  }
  
	get filmes() {
		return this.json.filmes
  }
  
	set filmes(filmes) {
		this.json.filmes = filmes
  }
  
  get status() {
    return this.json.status
  }

  set status(status) {
    this.json.status = status
  }
}

module.exports = Locacao
