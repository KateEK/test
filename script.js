'use strict';

var firstNumber = Math.round(+prompt('Введите целое число от 1 до 10', ''));

if (firstNumber > 10) {
    firstNumber = 10;
    alert('Вы ввели слишком большое число, число установлено 10.');
} else if (firstNumber < 1) {
    firstNumber = 1;
    alert('Вы ввели слишком маленькое число, число установлено 1.');
}

var secondNumber =  Math.round(+prompt('Введите целое число от 1 до 10', ''));

if (secondNumber > 10) {
    secondNumber = 10;
    alert('Вы ввели слишком большое число, число установлено 10.');
} else if (secondNumber < 1) {
    secondNumber = 1;
    alert('Вы ввели слишком маленькое число, число установлено 1.');
}


var answerNumber = firstNumber + secondNumber;

var firstArg = document.querySelector('.first-arg-js');
var firstArgRight = document.querySelector('.first-arg-right-js');
var firstNumberElement = document.querySelector('.first-number-js');
var firstArrow = document.querySelector('.first-arrow-js');
var firstPointer = document.querySelector('.border-first-arrow-pointer-js');

var secondArg = document.querySelector('.second-arg-js');
var secondArgRight = document.querySelector('.second-arg-right-js');
var secondNumberElement = document.querySelector('.second-number-js');
var secondArrow = document.querySelector('.second-arrow-js');

var answer = document.querySelector('.answer-js');
var answerIput = document.querySelector('.answer-input-js');
var answerRightElement = document.querySelector('.answer-right-js');

firstNumberElement.innerText = firstNumber;
secondNumberElement.innerText = secondNumber;
answerRightElement.innerText = firstNumber + secondNumber;
firstArrow.style.width = firstNumber * 39  + 'px';
firstArrow.style.height = firstNumber * 20  + 'px';
firstArrow.style.top = firstNumber * 16  + 'px';
firstPointer.style.top = firstNumber * 5 + 'px';

firstArrow.classList.remove('border-arrow-opacity');

function validateFirstArg(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== firstNumber) {
        firstNumberElement.classList.add('yellow');
        target.classList.add('error-input');
    } else {
        firstNumberElement.classList.remove('yellow');
        target.classList.add('hidden');
        firstArgRight.innerText = firstNumber;
        firstArgRight.classList.remove('hidden');
        secondArg.classList.remove('hidden');

        secondArg.focus();

        secondArrow.style.width = secondNumber * 39  + 'px';
        secondArrow.classList.remove('border-arrow-opacity');
    }
}

function validateSecondArg(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== secondNumber) {
        secondNumberElement.classList.add('yellow');
        target.classList.add('error-input');
    } else {
        secondNumberElement.classList.remove('yellow');
        target.classList.add('hidden');
        secondArgRight.innerText = secondNumber;
        secondArgRight.classList.remove('hidden');
        answer.classList.add('hidden');
        answerIput.classList.remove('hidden');
        answerIput.focus();
    }
}

function validateAnswer(event) {
    var target = event.target;
    var value = target.value;
    if (+value !== answerNumber) {
        target.classList.add('error-input');
    } else {
        target.classList.add('hidden');
        answerRightElement.classList.remove('hidden');
    }
}

firstArg.addEventListener('input', validateFirstArg);
secondArg.addEventListener('input', validateSecondArg);
answerIput.addEventListener('input', validateAnswer);


//недоработанные стрелки