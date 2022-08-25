const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const timer = document.querySelector('.timer');
const pipeScroe = document.querySelector('.scroe');

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
    console.log(pipePosition)
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); 

        setTimeout(() => {
        gameOver();
       }, 200);
    } else if (pipePosition < 50 && pipePosition > 0) {
        const currentScroe = Number(pipeScroe.innerHTML);
        pipeScroe.innerHTML = currentScroe + 50;
    }
}, 10)

function gameOver() {
    clearInterval(this.loopTimer);
    alert(`Parabéns, Seu tempo foi de: ${timer.innerHTML}`);
    window.location.reload();
}

function startTime() {
    this.loopTimer = setInterval(() => {
        const currentTimer = Number(timer.innerHTML);
        timer.innerHTML = currentTimer + 1;
    }, 1000);
}

onload = () => {    
    startTime();
    document.addEventListener('keydown', jump);
}

 