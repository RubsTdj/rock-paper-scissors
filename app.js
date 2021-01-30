const step1 = document.querySelector('.step1')
const step2 = document.querySelector('.step2')

const choicePlayer = document.querySelector('div.design-versus')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

const rockPaperScissors = []
rockPaperScissors.push(rock, paper, scissors)

const scoreBox = document.querySelector('.score .number')

const win = document.querySelector('.win')
const lose = document.querySelector('.lose')

const btnPlayAgain = document.querySelector('.btn-play')
const btnRules = document.querySelector('.btn-rules')

const imgPlayer = document.createElement("img")
const imgComputer = document.createElement("img")

let player1;
let player2;
let score = 0;


// PLAYER 1

for (let i = 0; i < rockPaperScissors.length; i++) {
    const element = rockPaperScissors[i];

    element.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.style.display = 'flex';

        // Choix player 1
        if (element === rock) {
            choicePlayer.classList.add('rock')
            imgPlayer.src = "images/icon-rock.svg"
            player1 = "rock"
        } else if (element === paper) {
            choicePlayer.classList.add('paper')
            imgPlayer.src = "images/icon-paper.svg"
            player1 = "paper"
        } else {
            choicePlayer.classList.add('scissors')
            imgPlayer.src = "images/icon-scissors.svg"
            player1 = "scissors"
        }
        choicePlayer.appendChild(imgPlayer)

        // Appelle de la fonction random() pour le choix du computer avec un delai de 1 seconde
        setTimeout(() => {
            random()
        }, 500)
        setTimeout(() => {
            rules()
        }, 1500)
    })

}



// PLAYER 2

// Choix au hasard adversaire
let computer = document.querySelector('div.design-circle-shadow');

const random = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        // 'rock';
        computer.classList.remove('design-circle-shadow')
        computer.classList.add('design-versus', 'rock')
        imgComputer.src = "images/icon-rock.svg"
        player2 = "rock"

    } else if (randomNumber === 1) {
        // 'paper';
        computer.classList.remove('design-circle-shadow')
        computer.classList.add('design-versus', 'paper')
        imgComputer.src = "images/icon-paper.svg"
        player2 = "paper"

    } else if (randomNumber === 2) {
        // 'scissors';
        computer.classList.remove('design-circle-shadow')
        computer.classList.add('design-versus', 'scissors')
        imgComputer.src = "images/icon-scissors.svg"
        player2 = "scissors"

    }
    computer.appendChild(imgComputer)
}


// RULES

const rules = () => {

    // console.log(player1, player2);

    if (player1 === 'rock' && player2 === 'scissors' ||
        player1 === 'scissors' && player2 === 'paper' ||
        player1 === 'paper' && player2 === 'rock') {
        // console.log('vous avez gagné !');
        win.style.display = "block"
        lose.style.display = "none"

        win.animate([{ // from
                transform: "scale(0)",
                opacity: 0
            },
            { // to
                transform: "scale(1)",
                opacity: 1
            }
        ], 500)

        score++

    } else if (player1 === 'rock' && player2 === 'paper' ||
        player1 === 'paper' && player2 === 'scissors' ||
        player1 === 'scissors' && player2 === 'rock') {
        // console.log('vous avez perdu !');
        lose.style.display = "block"
        win.style.display = "none"

        lose.animate([{ // from
                transform: "translateY(-50px)",
                opacity: 0
            },
            { // to
                transform: "translateY(0)",
                opacity: 1
            }
        ], 500)

        score--

    } else {
        // console.log('égalité');
        win.style.display = "none"
        lose.style.display = "none"
    }

    if (score < 0) {
        score = 0
    }

    scoreBox.textContent = score


    btnPlayAgain.style.display = "block"
    btnPlayAgain.animate([{
            transform: "translateY(50px)",
            opacity: 0
        },
        {
            transform: "translateY(0px)",
            opacity: 1
        }
    ], 1000)

}

// btn Play Again
btnPlayAgain.addEventListener('click', () => {
    document.location.reload()
})

// btn affichant les regles au click
const div = document.createElement('div')
const imgRules = document.createElement('img')

btnRules.addEventListener('click', () => {

    imgRules.src = "images/image-rules.svg";
    const classToglgle = div.classList.toggle('img-rules')

    if (classToglgle) {
        btnRules.after(div)
        div.append(imgRules)
    } else {
        btnRules.nextElementSibling.remove(div)
    }

})