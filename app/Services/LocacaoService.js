const { Locacao } = require('../Models')
const { adicionarDias, verificarDiaSemana } = require('../Utils/DataUtils')

class LocacaoService {
  alugarFilmes(usuario, filmes) {
		const locacao = new Locacao()
		
		locacao.filmes = filmes
		locacao.usuario = usuario
		locacao.dataLocacao = new Date()

		locacao.valor = this.calcularValor(filmes)

		const dataEntrega = adicionarDias(new Date(), 1)
		locacao.dataRetorno = verificarDiaSemana(dataEntrega, 'Domingo') ? adicionarDias(dataEntrega, 1) : dataEntrega
		locacao.status = 'criada'
		
    return locacao.store(usuario)
	}

	devolverFilmes(locacao) {
		locacao.status = 'finalizada'
		
    return locacao.save(locacao)
	}

	calcularValor(filmes) {
		let valor = 0

		const descontos = [0.25, 0.50, 0.75, 1.0]

		if (filmes.length > 2) {
			filmes.forEach((filme, i) => {
				if (i >= 2) {
					const desconto = filme.precoLocacao * descontos[i - 2]
					filme.precoLocacao = filme.precoLocacao - desconto
				}

				valor = valor + filme.precoLocacao
			})

			return valor
		}

		filmes.forEach(filme => valor = valor + filme.precoLocacao)

		return valor
	}
}

module.exports = LocacaoService
