function user() {
    let userName = 'Mieszko';
    let userAge = 16;

    function showName() {
        console.log(`${userName}, ${canBuyBeer()}`);
    }

    function canBuyBeer() {
        return userAge >= 18 ? 'You can buy beer' : 'You can\'t buy beer';
    }

    return showName;
}

const mieszko = user();
mieszko();