const names = [];
const div = document.querySelector('div');

document.querySelector('button').addEventListener('click', addName);

function addName(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if(checkConditions(newName)) {   
    names.push(newName);
    div.textContent += newName;
    input.value ='';
    } else if (checkDuplicate(newName)) {
        alert('This name is alredy create');
    } else {
        alert("Please enter name");
    }
}

function checkDuplicate(newName) {
    for(n of names) {
        if (n === newName) {
            return true;
        }
    }
    return false;
}

function checkConditions(newName) {
    return !checkDuplicate(newName) && newName != null;
}