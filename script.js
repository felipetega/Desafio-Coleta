function pergunta1(id) {
  let resposta = document.getElementById(id)
  let sim = document.getElementById('sim-1')
  let nao = document.getElementById('nao-1')
  if (resposta == sim) {
    sim.style.background = 'cornflowerblue'
    nao.style.background = 'white'
  } else {
    nao.style.background = 'cornflowerblue'
    sim.style.background = 'white'
  }
}

function pergunta2(id) {
  let resposta = document.getElementById(id)
  let sim = document.getElementById('sim-2')
  let nao = document.getElementById('nao-2')
  if (resposta == sim) {
    sim.style.background = 'cornflowerblue'
    nao.style.background = 'white'
  } else {
    nao.style.background = 'cornflowerblue'
    sim.style.background = 'white'
  }
}

function contador(value) {
  let contador = document.getElementById('contadorCaracteres')
  contador.innerHTML = `${value.length}/200`
  if (value.length > 200) {
    contador.style.color = 'red'
  } else {
    contador.style.color = 'black'
  }
}
