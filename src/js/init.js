const frontBtn = document.querySelector('.front__btn');
const btnReset = document.querySelector('.btn_reset');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const btnGuess = document.querySelector('.btn-guess');
const count = document.querySelector('.count');
const input = document.querySelector('.input');
const helpText = document.querySelector('.help-text');
const toggle = document.querySelector('.checkbox');
const guessCount = document.querySelector('.guess-count');
let minNumber;
let maxNumber;
let randomNumber;
const usedNumbers = [];
let numberOfAttempts;
const backText = document.querySelector('.back__text');
const enableHints = true; 

