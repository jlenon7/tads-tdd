const { usuarios, proximoId } = require('../../database/db')

class Usuario {
	constructor({ nome }) {
    this.json = {}

    this.json.nome = nome
  }

  toJSON() {
    return { ...this.json }
  }
	
	store() {
    const usuario = this.toJSON()
    usuario.id = proximoId()
    usuarios.push(usuario)

    return usuario
  }

  getNumeroLocacoes() {
    return usuarios.locacoes.filter(locacao => locacao.status === 'finalizada').length
  }

	get nome() {
		return this.json.nome
	}

	set nome(nome) {
		this.json.nome = nome
  }
  
  get locacoes() {
		return this.json.locacoes
  }
  
	set locacoes(locacoes) {
		this.json.locacoes = locacoes
  }
}

module.exports = Usuario
