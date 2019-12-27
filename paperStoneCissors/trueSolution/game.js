const gameSummary = {
    numbers : 0,
    wins : 0,
    losses : 0,
    draws : 0
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];
hands.forEach(h => h.addEventListener('click', handSelection));



function handSelection() {
    console.log(this.dataset.option);
    game.playerHand = this.dataset.option;
    clearImagesBorder();
    this.style.boxShadow = '0 0 0 4px red';
}

function clearImagesBorder() { 
    hands.forEach(h => h.style.boxShadow = '');
}

function clearImagesBorderAfrerRound() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
}

function startGame() {
    if(game.playerHand === "") {
        return alert("Choose please!!!")
    }

    game.aiHand = computerChoice(hands);
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
    
}

function endGame() {
clearImagesBorderAfrerRound();
}

document.querySelector('.start').addEventListener('click', startGame);


function computerChoice(hands) {
    return hands[Math.floor(Math.random() * hands.length)].dataset.option; 
}

function checkResult(player, ai) {
    if(player === ai) {
        return 'draw';
    } else if (playerWin(player, ai)) {
        return "win";
    } else {
        return 'loss';
    }
}

function playerWin(player, ai) {
    return ((player === 'paper' && ai === 'stone') || (player === 'stone' && ai === 'cissors') || (player === 'cissors' && ai === 'paper'));
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    checkWinner(result);
}

function checkWinner(result) {
    const winner = document.querySelector('[data-summary="who-win"]');
    if (result === 'win') {
        winner.textContent = "You Winn!";
        winner.style.color = 'green';
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    } else if(result === 'loss') {
        winner.textContent = "AI Winn!";
        winner.style.color = 'red';
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    } else {
        winner.textContent = "Draw!";
        winner.style.color = 'blue';
        console.log(gameSummary.draws);
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    }
}



