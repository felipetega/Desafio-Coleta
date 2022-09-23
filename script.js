var resposta1 = null
var resposta2 = null
var resposta3 = ''
var resposta4 = null
var quantidadePositiva = 0
var quantidadeNegativa = 0
var quantidadeNaoAvaliada = 0
var respostaFinal = null

//PERGUNTA1
function pergunta1(id) {
  let resposta = document.getElementById(id)
  let sim = document.getElementById('sim-1')
  let nao = document.getElementById('nao-1')
  if (resposta == sim) {
    sim.style.background = 'cornflowerblue'
    nao.style.background = 'white'
    //RESPOSTA 1
    resposta1 = 'Sim'
  } else {
    nao.style.background = 'cornflowerblue'
    sim.style.background = 'white'
    //RESPOSTA 1
    resposta1 = 'Não'
  }
}

//PERGUNTA 2
function pergunta2(id) {
  let resposta = document.getElementById(id)
  let sim = document.getElementById('sim-2')
  let nao = document.getElementById('nao-2')
  if (resposta == sim) {
    sim.style.background = 'cornflowerblue'
    nao.style.background = 'white'
    //RESPOSTA 2
    resposta2 = 'Sim'
  } else {
    nao.style.background = 'cornflowerblue'
    sim.style.background = 'white'
    //RESPOSTA 2
    resposta2 = 'Não'
  }
}

//Contador carácteres
function contador(value) {
  let contador = document.getElementById('contadorCaracteres')
  contador.innerHTML = `${value.length}/200`
  if (value.length > 200) {
    contador.style.color = 'red'
  } else {
    contador.style.color = 'black'
  }
}

//Validação formulário completo
function validarFormulario() {
  //RESPOSTA 3
  resposta3 = document.getElementById('select').value
  //RESPOSTA 4
  resposta4 = document.getElementById('textarea').value
  if (
    resposta1 != null &&
    resposta2 != null &&
    resposta3 != '' &&
    resposta4.length > 14 &&
    resposta4.length < 201
  ) {
    //Array para soma dos pontos
    let respostas = [resposta1, resposta2, resposta3, resposta4]
    somaPontos(respostas)
  }
}

//Soma dos pontos
function somaPontos(respostas) {
  for (let i = 0; i < 3; i++) {
    if (respostas[i] == 'Sim') {
      quantidadePositiva += 1
    } else if (respostas[i] == 'Não') {
      quantidadeNegativa += 1
    } else if (respostas[i] == 'Não Sei') {
      quantidadeNaoAvaliada += 1
    } else if (respostas[i] == 'Agora!!') {
      quantidadePositiva += 2
    }
  }
  resultadoJson()
}

//Resultado JSON
function resultadoJson() {
  respostaFinal = JSON.stringify({
    resposta1,
    resposta2,
    resposta3,
    resposta4,
    quantidadePositiva,
    quantidadeNegativa,
    quantidadeNaoAvaliada
  })
  console.log(respostaFinal)
}
