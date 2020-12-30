const { Usuario, Filme } = require('../Models')
const LocacaoService = require('./LocacaoService')

let filme
let usuario
let service

describe('[UNIT] LocacaoService', () => {
  beforeEach(() => {
    {
      transformers5 = new Filme({
        nome: 'Transformers 5', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers6 = new Filme({
        nome: 'Transformers 6', 
        estoque: 2, 
        precoLocacao: 10.00 
      }).store()
      transformers7 = new Filme({
        nome: 'Transformers 7', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers8 = new Filme({
        nome: 'Transformers 8', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers9 = new Filme({
        nome: 'Transformers 9', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers10 = new Filme({
        nome: 'Transformers 10', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers11 = new Filme({
        nome: 'Transformers 11', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
      transformers12 = new Filme({
        nome: 'Transformers 12', 
        estoque: 4, 
        precoLocacao: 10.00 
      }).store()
    }
    usuario = new Usuario({ nome: 'João Lenon' }).store()
    service = new LocacaoService()
  })

  it('Como um usuário, desejo locar o filme Transformers 5 e 6', () => {
    const locacao = service.alugarFilmes(usuario, [transformers5, transformers6])

    expect(locacao.valor).toBe(20.00)
    expect(locacao.filmes[0].nome).toBe('Transformers 5')
    expect(locacao.filmes[1].nome).toBe('Transformers 6')
  })

  it('Como um usuário, desejo receber um desconto de 25% no terceiro filme da locação', () => {
    const locacao = service.alugarFilmes(usuario, [transformers7, transformers8, transformers9])

    expect(locacao.valor).toBe(27.50)
    expect(locacao.filmes[0].nome).toBe('Transformers 7')
  })

  it('Como um usuário, desejo receber um desconto de 50% no quarto filme da locação', () => {
    const locacao = service.alugarFilmes(usuario, [transformers7, transformers8, transformers9, transformers10])

    expect(locacao.valor).toBe(32.50)
    expect(locacao.filmes[0].nome).toBe('Transformers 7')
  })

  it('Como um usuário, desejo receber um desconto de 75% no quinto filme da locação', () => {
    const locacao = service.alugarFilmes(usuario, [transformers7, transformers8, transformers9, transformers10, transformers11])

    expect(locacao.valor).toBe(35.00)
    expect(locacao.filmes[0].nome).toBe('Transformers 7')
  })

  it('Como um usuário, desejo receber um desconto de 100% no sexto filme da locação', () => {
    const locacao = service.alugarFilmes(usuario, [transformers7, transformers8, transformers9, transformers10, transformers11, transformers12])

    expect(locacao.valor).toBe(35.00)
    expect(locacao.filmes[0].nome).toBe('Transformers 7')
  })

  it('Como um usuário, desejo que a data de devolução da locação não seja em um domingo', () => {
    // Sábado
    const mockDate = new Date(2021, 0, 2, 13)
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    const locacao = service.alugarFilmes(usuario, [transformers7, transformers8])

    expect(locacao.valor).toBe(20.00)
    
    // Segunda-feira
    expect(locacao.dataRetorno.getTime()).toBe(1609776000000)
    expect(locacao.filmes[0].nome).toBe('Transformers 7')
  })
})


