const spnText = document.querySelector('.text');
const text = ['Good morning!!!', 'Nice to see you :)', 'Let\'s start'];

const sntParam = {
    indSen: 0,
    sentence: '',
    iter: 0,
}

const txtParam = {
    indTxt: 0,
    numInter: 0,
    iter: 0,
}

txtParam.iter = setInterval(writteSentence, 2000);

function writteSentence() {
    sntParam.sentence = text[txtParam.indTxt]; 
    spnText.textContent = '';

    sntParam.iter = setInterval(typingText, 50);

    txtParam.indTxt++;
    sntParam.indSen = 0;

    if(txtParam.indTxt == text.length) {
        clearInterval(txtParam.iter);
        const spnAction = document.querySelector('.cursor')
        spnAction.textContent = '|';
        setInterval(() => {
            spnAction.classList.toggle('action');
        }, 400)
    }
}

function typingText() {
    spnText.textContent += sntParam.sentence[sntParam.indSen];
    sntParam.indSen++;
    if(sntParam.indSen == sntParam.sentence.length) {
        clearInterval(sntParam.iter);

    }
}
