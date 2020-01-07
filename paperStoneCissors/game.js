const button = document.querySelector('button.start');
const images = document.querySelectorAll('img');

const paperImg = document.querySelector('img.first');
const stoneImg = document.querySelector('img.second');
const cissorsImg = document.querySelector('img.third');

let selectedPaper = false;
let selectedStone = false;
let selectedCissors = false;

let conditions = [];

button.addEventListener('click', play);

function play() {
    checkCorrectNumberOfSelection(conditions);
    if(conditions.length === 1) {

    }
}

paperImg.addEventListener('click', (e)=> {
    e.target.classList.toggle("border")
    selectedPaper = !selectedPaper;
    if(selectedPaper) {
        conditions.push(selectedPaper);
    } else {
        conditions.pop();
    }
})

stoneImg.addEventListener('click', (e)=> {
    e.target.classList.toggle("border")
    selectedStone = !selectedStone;
    if(selectedStone) {
        conditions.push(selectedPaper);
    } else {
        conditions.pop();
    }

})

cissorsImg.addEventListener('click', (e)=> {
    e.target.classList.toggle("border")
    selectedCissors = !selectedCissors;
    if(selectedCissors) {
        conditions.push(selectedPaper);
    } else {
        conditions.pop();
    }
})

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function checkCorrectNumberOfSelection(number) {
    if(number.length === 0) {
        alert("Choose any picture!")
        return false;
    } else if(number.length > 1) {
        alert("Choose only one picture");
        return false;
    }
}

function showWinner(winner) {
    if(winner)
}

function roles(player, ai) { {
    if (player === 'paper' && ai === 'paper') {
        return 0;
    }
    if(player === 'paper' && ai === 'cissors') {
        return 2;
    }
    if (player === 'paper' && ai === 'stone') {
        return 1;
    }
    if(player === 'cissors' && ai === 'cissors') {
        return 0;
    }
    if(player === 'cissors' && ai === 'paper') {
        return 1;
    }
    if(player === 'cissors' && ai === 'stone') {
        return 2;
    }
    if(player === 'stone' && ai === 'stone') {
        return 0;
    }
    if (player === 'stone' && ai === 'paper') {
        return 2;
    }
    if(player === 'stone' && ai === 'cissors') {
        return 1;
    }

}

}