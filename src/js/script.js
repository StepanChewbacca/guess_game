// Выводит подсказку в зависимости от того больше загаданное число или меньше
function displayHelpText() {
   if (enableHints) {
      if (+input.value > randomNumber) {
         helpText.innerText = 'The hidden number is less than this!'
      } else {
         helpText.innerText = 'The hidden number is bigger than this!'
      }
   }
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
   alert('You Win!')
   setTimeout(btnReset.click(), 300);
   startCondition();
}

// Вызывается при поражении
function ifLoose() {
   alert('You lose!')
   setTimeout(btnReset.click(), 300);
   startCondition();
}

// Описает какие будут присвоения на первой странице после заполения полей и нажатия на кнопку
function setOptions() {
   minNumber = Math.round(Math.abs(+document.querySelector('.minNumber').value));
   maxNumber = Math.round(Math.abs(+document.querySelector('.maxNumber').value));
   randomNumber = generateRandomNumber(minNumber, maxNumber);
   numberOfAttempts = Math.round(Math.abs(+document.querySelector('.attempts').value));
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
   function startCondition() {
      
      input.value = '';
      document.querySelector('.minNumber').value = '';
      document.querySelector('.maxNumber').value = '';
      document.querySelector('.attempts').value = '';
      document.querySelector('.back__user-number').textContent = '';
      usedNumbers.length = 0;
      green();
   };

   btnReset.addEventListener("click", (e) => {
      e.preventDefault();
      addClassTo(front, 'show');
      addClassTo(back, 'hide');
      removeClassTo(front, 'hide');
      removeClassTo(back, 'show');
      
      setTimeout(startCondition, 1000);
   });
}

function clickGuess() {
   if (!btnGuess) {
      return;
   }

   btnGuess.addEventListener("click", (e) => {
      e.preventDefault();
      changeColor();
   });
}
clickGuess();

function decreaseGuess(number) {
   if ((parseInt(number.innerText)) > 0) {
      --number.innerText;
   }
}
