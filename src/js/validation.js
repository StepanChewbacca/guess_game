function userNumber() {
    if (input.value > maxNumber || input.value < minNumber || input.value === '') {
        input.value = ''
        showMessageErrorInput()
    } else {
        input.value = ''
    }
}

function getUsedNumbers() {
    if (!usedNumbers.includes(input.value) && input.value <= maxNumber && input.value >= minNumber && input.value !== '') {
        usedNumbers.push(input.value);
        document.querySelector('.back__user-number').innerHTML = usedNumbers;
        decreaseGuess(count);
    }
}