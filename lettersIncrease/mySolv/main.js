let size = 10;
let orderElement = 1;
let elementName = "Element";

function init() {
    const btn = document.createElement('button');
    
    btn.textContent = "Dodaj elementy";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        addElement();
    })
}

function addElement() {
    const li = document.createElement('li');
    document.body.appendChild(li);
    li.textContent = elementName + orderElement;
    li.style.fontSize = `${size}px`;

    orderElement++;
    size++
}

init();
