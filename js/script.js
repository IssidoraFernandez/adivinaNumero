let randomNumber = Math.floor(Math.random() * 100) + 1 
/* numero ramdon calculado por algoritmo matemático */

const guesses = document.querySelector('.guesses')

const lastResult = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
/* estas tres constantes son para referenciar a los resultados en HTML */

const guessSubmit = document.querySelector('.guessSubmit')

const guessField = document.querySelector('.guessField')

/* acá se almacenan las referencia de entrada y el boton de ingresar una respuesta */

let guessCount = 1 /* conteo de intentos */

let resetButton /* boton de reinicio */

function checkGuess() {
    let userGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = 'Intentos previos: '
    }
    guesses.textContent += userGuess + ''
}

guessSubmit.addEventListener('click',checkGuess)


if (userGuess === randomNumber){
    lastResult.textContent = '¡Lo lograste, felicidades!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ""
    setGameOver()
} else if (guessCount === 10){
    lastResult.textContent = '¡Fin del juego!'
    setGameOver()
} else {
    lastResult.textContent = '¡Incorrecto!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
        lowOrHi.textContent = '¡El número es muy bajo!';
    } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '¡El número es muy grande!';
    }
    
  }

  guessCount++
  guessField.value = ''
  guessField.focus()

  function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Iniciar nuevo juego.'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
  }

  function resetGame() {
    guessCount = 1

    const resetParas = document.querySelectorAll('.resultParas')
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton)

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ''
    guessField.focus()

    lastResult.style.backgroundColor = 'white'
    randomNumber = Math.floor(Math.random() * 100 + 1)
  }