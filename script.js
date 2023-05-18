// Variaveis
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
let numRandom = Math.round(Math.random() * 10)
let tentativa = 1
let clickTentar = document.querySelector('.tentar')
let clickRefazer = document.querySelector('.refazer')

// Eventos
clickTentar.addEventListener('click', randomClick)
clickRefazer.addEventListener('click', resetClick)
document.addEventListener('keydown', keyEnter)

// Funções callBack
function randomClick(event) {
    event.preventDefault() // não faça o padrão
    
    const inputNumber = document.querySelector('.dig')

    if( inputNumber.value == numRandom ) {
        toogleCard()
        document.querySelector('span').innerText = tentativa
        // console.log('você acertou em ' + tentativa + 'tentativas')
    } 
    else if( inputNumber.value > 10 || inputNumber.value < 0 ) {
        alert('Número invalido!')
    } 

    inputNumber.value = ''
    tentativa++
}

function resetClick(event) {
    event.preventDefault() // não faça o padrão
    toogleCard()
    numRandom = Math.round(Math.random() * 10)
    tentativa = 1
}

function toogleCard(){
    card2.classList.toggle('hide')
    card1.classList.toggle('hide')
}

function keyEnter(e) {
    if (e.key == 'Enter' && card1.classList.contains('hide')) {
        resetClick(event)
    }
}