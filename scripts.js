let score = 0

const addButton = document.getElementById("add")
const resetButton = document.getElementById("reset")
const minusButton = document.getElementById("minus")

const scoreText = document.getElementById("score")

function add(){
    score++
    updateText()
}

function reset(){
    score = 0
    updateText()
}

function minus(){
    score--
    updateText()
}

function updateText(){
    if(score > 0){
        scoreText.style.color = 'green'
    } else if(score < 0){
        scoreText.style.color = 'red'
    } else{
        scoreText.style.color = 'black'
    }
    scoreText.innerText = 'Score ${score}'
}

addButton.addEventListener('click', add)
resetButton.addEventListener('click', reset)
minusButton.addEventListener('click', minus)