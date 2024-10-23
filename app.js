let chosenNumber = parseInt(Math.random() * (50 - 1) + 1);
let yourGuesses = [];
const leftEye = document.getElementById('link__eye-left');
const rightEye = document.getElementById('link__eye-right');
const leftEyebrow = document.getElementById('link__eye-brow-left')
const rightEyebrow = document.getElementById('link__eye-brow-right');
const armLeft = document.getElementById('link__arms-left');
const cloudsUp = document.getElementById('clouds-up');
const cloudsDown = document.getElementById('clouds-down');
const mainThought = document.getElementById('main-thought');
const firstCircle = document.getElementById('first-circle');
const secondCircle = document.getElementById('second-circle');
const mobile = window.matchMedia("(max-width: 476px)")

console.log(chosenNumber)
number.addEventListener('keypress', (event) => {
    let numberGuess = Number(number.value);

    if (event.key == 'Enter')
        if (numberGuess == chosenNumber && yourGuesses.length < 5) {
            link__container_number.innerHTML = `<h1>Parabens! O número <strong>${numberGuess}</strong> esta certo</h1><strong><a href='index.html'>Jogue novamente!</a></strong>`;
            leftEyebrow.style.rotate = '10deg';
            rightEyebrow.style.rotate = '-10deg';
            link__mouth.style.backgroundColor = 'var(--eye-brow-color)';
            link__mouth.style.width = '14px';
            link__mouth.style.height = '16px';
            link__mouth.style.top = '84%';
            link__mouth.style.left = '42%';
            link__mouth.style.boxShadow = ''
            armLeft.style.top = '-40%';
            armLeft.style.left = '30%';
            armLeft.style.rotate = '115deg'
            leftEye.classList.add('disable');
            rightEye.classList.add('disable');
            link__mouth.style.transitionDuration = '0.5s'
            leftEye.style.transitionDuration = '0.5s'
            rightEye.style.transitionDuration = '0.5s'
            armLeft.style.transitionDuration = '0.5s'
            number.disabled = true;
            thinking.style.display = 'none';
            talking.style.display = 'block';
            right.style.display = 'block';
            thinking.style.display = 'none';
            cloudsUp.style.display = 'none';
            cloudsDown.style.display = 'none';
            mainThought.style.backgroundColor = 'transparent';
            firstCircle.style.display = 'none';
            secondCircle.style.display = 'none';
            talking.style.display = 'none';

            if (mobile.matches) {
                armLeft.style.top = '-40%';
                armLeft.style.left = '12%';
            }

        } else if (numberGuess != '' &&
        !yourGuesses.includes(numberGuess) &&
        numberGuess >= 1 &&
        numberGuess <= 50)
         {
        if (yourGuesses.length <= 3) {
            yourGuesses.push(numberGuess);
            guesses.innerHTML = yourGuesses;
            number.value = ''
            thinking.style.display = 'none';
            talking.style.display = 'block';
            link__container_number.innerHTML = `<h1>Quase lá! Voce ainda tem <strong>${5 - yourGuesses.length}</strong> chances</h1>`;
            leftEye.classList.add('disable');
            rightEye.classList.add('disable');
            rightEyebrow.style.transitionDuration = '500ms';
            link__mouth.style.transitionDuration = '500ms';
            guesses.style.display = 'block';
            guessingNumber(numberGuess, chosenNumber);
            


            if (yourGuesses.length == 2) {
                thinking.style.display = 'none';
                talking.style.display = 'block';
                rightEyebrow.style.top = '30%';
            } else if (yourGuesses.length == 3) {
                thinking.style.display = 'none';
                talking.style.display = 'block';
                link__mouth.style.boxShadow = '';
                link__mouth.style.backgroundColor = 'var(--eye-brow-color)';
                link__mouth.style.height = '12px';
                link__mouth.style.top = '90%';
                link__mouth.style.borderRadius = '40%';
            }

        } else if (yourGuesses.length == 4) {
            yourGuesses.push(numberGuess);
            guesses.innerHTML = yourGuesses;
            number.value = '';
            link__container_number.innerHTML = `<h1>Suas chances acabaram. <strong><a href='index.html'>Tente Outra vez!</a></strong></h1> <h3>O número era o <strong>${chosenNumber}</strong></h3>`;
            number.disabled = true;
            leftEyebrow.style.rotate = '-15deg';
            rightEyebrow.style.rotate = '15deg';
            rightEyebrow.style.top = '36%';
            link__mouth.style.boxShadow = '0px -1.5px var(--eye-brow-color)';
            link__mouth.style.backgroundColor = '';
            link__mouth.style.top = '92%';
            link__mouth.style.borderRadius = '50%';
            tear_drop.style.animation = 'tearDrop 2s  infinite';
            wrong.style.opacity = '100%';
            talking.style.display = 'none';
            thinking.style.display = 'none';

        } 
        } else {
            alert('Por favor, digite um valor valido ou nao repetido');
            number.value = '';

        }
    }
)

function guessingNumber(number, rightNumber) {
    if (rightNumber - number <= 5 && rightNumber - number >= 0) {
        talking.innerHTML = `<h4>Foi <strong>muito</strong> perto! Um pouco <strong>maior</strong></h4>`
    } else if (rightNumber - number >= -5 && rightNumber - number <= 0){
        talking.innerHTML = `<h4>Foi <strong>muito</strong> perto! Um pouco <strong>menor</strong></h4>`
    }else if (rightNumber - number <= 10 && rightNumber - number > 0) {
        talking.innerHTML = `<h4>Foi perto! Um pouco <strong>maior</strong></h4>`
    } else if (rightNumber - number >= -10 && rightNumber - number < 0) {
        talking.innerHTML = `<h4>Foi perto! Um pouco <strong>menor</strong></h4>`
    } else if (rightNumber - number < 10) {
        talking.innerHTML = `<h4>Foi longe! O número é <strong>menor</strong></h4>`
    } else {
        talking.innerHTML = `<h4>Foi longe! O número é <strong>maior
        </strong></h4>`
    }
}