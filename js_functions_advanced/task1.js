function handleNum(number,even,odd) {
    return number % 2 === 0 ? even(number) : odd(number);
}

function handleEven(number) {
    console.log(`Number ${number} is even`);
}

function handleOdd(number) {
    console.log(`Number ${number} is odd`);
}

handleNum(35, handleEven, handleOdd);