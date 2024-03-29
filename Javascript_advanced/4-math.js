function divideBy (firstNumber = Number) {
    return function (secondNumber = Number) {
        return secondNumber/firstNumber;
    };
}

function addBy (firstNumber = Number) {
    return function (secondNumber = Number) {
        return firstNumber + secondNumber;
    };
}

const addBy100 = addBy(100);

const addBy1000 = addBy(1000);

const divideBy10 = divideBy(10);

const divideBy100 = divideBy(100);
