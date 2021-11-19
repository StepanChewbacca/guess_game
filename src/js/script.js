// Выводит подсказку в зависимости от того больше загаданное число или меньше
function displayHelpText() {
   helpText.innerText = `The hidden number is ${+input.value > randomNumber ? 'less' : 'bigger'} than this!`
}

// Функция для генерирования рандомного числа
function generateRandomNumber(first, second) {
   const lower = Math.ceil(Math.min(first, second));
   const upper = Math.floor(Math.max(first, second));
   const result = Math.random() * (upper - lower + 1) + lower;

   return Math.floor(result);
}

// Определяет условия победы и поражения
function tryNumber() {
   if (input.value === String(randomNumber)) {
      ifWin()
   } else if (count.textContent === '1') {
      ifLoose()
   }
}

// Вызывается при победе
function ifWin() {
   setTimeout(btnReset.click(), 300);
   showMessageSuccess()
}

// Вызывается при поражении
function ifLoose() {
   setTimeout(btnReset.click(), 300);
   showMessageError()
}

// Описает какие будут присвоения на первой странице после заполения полей и нажатия на кнопку
function setOptions() {
   minNumber = Math.round(Math.abs(+document.querySelector('.minNumber').value));
   maxNumber = Math.round(Math.abs(+document.querySelector('.maxNumber').value));
   numberOfAttempts = Math.round(Math.abs(+document.querySelector('.attempts').value));
   if ((minNumber === 0 && maxNumber === 0) || numberOfAttempts === 0) {
      startCondition()
   }
   randomNumber = generateRandomNumber(minNumber, maxNumber);
   backText.innerText = `What number between (${minNumber} - ${maxNumber})`;
   count.textContent = numberOfAttempts;
}

// Открывает основную страницу
function showBackSide() {
   addClassTo(front, 'hide');
   addClassTo(back, 'show');
   removeClassTo(front, 'show');
   removeClassTo(back, 'hide');
   input.focus();
}

function clickFrontBack() {
   if (Boolean(document.querySelector('.minNumber').value) && Boolean(document.querySelector('.maxNumber').value) && Boolean(document.querySelector('.attempts').value)) {
      if (minNumber > maxNumber) {
         alert('Error: MinValue is bigger then MaxValue');
         startCondition();
      }
      showBackSide();
   }

   // Возвращает страницу в изначальное состояние(перезагружает)


   btnReset.addEventListener("click", (e) => {
      e.preventDefault();
      addClassTo(front, 'show');
      addClassTo(back, 'hide');
      removeClassTo(front, 'hide');
      removeClassTo(back, 'show');

      setTimeout(startCondition, 1000);
   });
}
function startCondition() {
   input.value = '';
   document.querySelector('.minNumber').value = '';
   document.querySelector('.maxNumber').value = '';
   document.querySelector('.attempts').value = '';
   document.querySelector('.back__user-number').textContent = '';
   usedNumbers.length = 0;
   green();
};

function clickGuess() {
   btnGuess.addEventListener("click", (e) => {
      e.preventDefault();
      changeColor();
   });
}
clickGuess();

function decreaseGuess(number) {
   const num = parseInt(number.innerText);
   if (num > 0) {
      number.innerText = num - 1;
   }
}
