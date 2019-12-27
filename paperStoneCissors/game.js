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
    // const selectionNumber = checkNumberOfSelections(conditions);
    // console.log(selectionNumber);
    checkCorrectNumberOfSelection(conditions);
    console.log(conditions.length);

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