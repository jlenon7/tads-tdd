const adicionarDias = (data, dias) => {
  const timestamp = data.setDate(data.getDate() + dias)

  return new Date(timestamp)
}

const verificarDiaSemana = (data, diaSemana) => {
  const arrayDias = [
    'Domingo', 
    'Segunda', 
    'Terça', 
    'Quarta', 
    'Quinta', 
    'Sexta', 
    'Sábado',
  ]

  if (arrayDias.find(dia => dia === diaSemana) !== arrayDias[data.getDay()]) {
    return false
  }

  return true
}

module.exports = {
  adicionarDias,
  verificarDiaSemana,
}
