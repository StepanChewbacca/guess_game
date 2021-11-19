function userNumber() {
    if (input.value > maxNumber || input.value < minNumber || input.value === '' ) {
        alert(`Not valid number, try to put number ${minNumber} - ${maxNumber}`)
        input.value = ''
        console.log(count.textContent)
    } else {
        input.value = ''
    }
}

function getUsedNumbers() {
    if (!usedNumbers.includes(input.value) && input.value <= maxNumber && input.value >= minNumber && input.value !== '') {
        usedNumbers.push(input.value);
        document.querySelector('.back__user-number').innerHTML = usedNumbers;
        decreaseGuess(count);
        console.log(usedNumbers);
    }
}    