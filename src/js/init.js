const frontBtn = document.querySelector('.front__btn');
const btnReset = document.querySelector('.btn_reset'); 
const front = document.querySelector('.front'); 
const back = document.querySelector('.back'); 
const btnGuess = document.querySelector('.btn-guess'); 
const count = document.querySelector('.count'); 
const input = document.querySelector('.input'); 
const helpText = document.querySelector('.help-text'); 
const guessCount = document.querySelector('.guess-count'); 
const backText = document.querySelector('.back__text');

const store = {
    minNumber: null,
    maxNumber: null
}
let minNumber; 
let maxNumber; 
let randomNumber; 
const usedNumbers = []; 
let numberOfAttempts; 

const enableHints = true; 

const createStore = () =>{
    return {
        minNumber: '',
        maxNumber: '',
        randomNumber,
        usedNumbers: [],
        numberOfAttempts: '',
        enableHints,
        currentValue: '',
    }
}

let store = createStore();
renderData(store);
store.minNumber = '1'

function renderData(store){
    // input.value = store.currentValue;
    document.querySelector('.minNumber').value = store.minNumber;
    document.querySelector('.maxNumber').value = store.maxNumber;
    document.querySelector('.attempts').value = store.numberOfAttempts;
    document.querySelector('.back__user-number').textContent = ''; 
}