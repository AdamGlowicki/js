

document.addEventListener('click', counter);

function add(start = 0) {
    let number = start;
    return () => {
        number++;
    }
}

const counter = add();