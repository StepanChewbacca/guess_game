function displayHelpText() {
   helpText.innerText = `The hidden number is ${+input.value > randomNumber ? 'less' : 'bigger'} than this!`
}

function generateRandomNumber(first, second) {
   const lower = Math.ceil(Math.min(first, second));
   const upper = Math.floor(Math.max(first, second));
   const result = Math.random() * (upper - lower + 1) + lower;

   return Math.floor(result);
}

function tryNumber() {
   if (input.value === String(randomNumber)) {
      endGame(true);
   } else if (count.textContent === '1') {
      endGame(false);
   }
}

function endGame(success) {
   alert(success ? 'You Win!' : 'You lose!')
   setTimeout(btnReset.click(), 300);
   startCondition();
}

// Описает какие будут присвоения на первой странице после заполения полей и нажатия на кнопку
function setOptions() {
   minNumber = Math.round(Math.abs(+document.querySelector('.minNumber').value));
   maxNumber = Math.round(Math.abs(+document.querySelector('.maxNumber').value));
   randomNumber = generateRandomNumber(minNumber, maxNumber);
   numberOfAttempts = Math.round(Math.abs(+document.querySelector('.attempts').value));
   renderOptions();
}

function renderOptions() {
   backText.innerText = `What number between (${minNumber} - ${maxNumber})`;
   count.textContent = numberOfAttempts;
}

// Открывает основную страницу
function showBackSide() {
   front.classList.replace('show', 'hide');
   back.classList.replace('hide', 'show');
   input.focus();
}

function showFrontSide() {
   front.classList.replace('hide', 'show');
   back.classList.replace('show', 'hide');
}

function clickFrontBack() {
   const isNotEmpty = (id) => document.querySelector('.minNumber').value.trim().length > 0;
   const areFieldsValid = isNotEmpty('.minNumber') && isNotEmpty('.maxNumber') && isNotEmpty('.attempts');
   if (areFieldsValid) {
      if (minNumber > maxNumber) {
         alert('Error: MinValue is bigger then MaxValue');
         startCondition();
      }
      showBackSide();
   }
}

// Возвращает страницу в изначальное состояние(перезагружает)
function startCondition() {
   input.value = '';
   document.querySelector('.minNumber').value = '';
   document.querySelector('.maxNumber').value = '';
   document.querySelector('.attempts').value = '';
   document.querySelector('.back__user-number').textContent = '';
   usedNumbers.length = 0;
   green();
};

function decreaseGuess(number) {
   const num = parseInt(number.innerText);
   if (num > 0) {
      number.innerText = num - 1;
   }
}

function clickBtnReset(e) {
   e.preventDefault();
   showFrontSide();
   setTimeout(startCondition, 1000);
}

function clickBtnGuess(e){
   e.preventDefault();
   changeColor();
}