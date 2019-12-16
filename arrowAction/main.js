let colour = 100;
document.body.style.backgroundColor = `rgb(${colour}, ${colour}, ${colour})`;

window.addEventListener("keydown", (e)=> {
    if (e.keyCode == 38) {
        colour++;
        
    }

    switch (e.keyCode){
        case 38:
            colour <= 255 ? colour++ : colour 
            document.body.style.backgroundColor = `rgb(${colour}, ${colour}, ${colour})`;
            break;
        case 40:
                colour <= 255 ? colour-- : colour 
            document.body.style.backgroundColor = `rgb(${colour}, ${colour}, ${colour})`;
            break;
    }
})