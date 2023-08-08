let operandOne = '';
let operandTwo = '';
let operator = '';
let doResetScreen = false;
const buttonbtns = document.querySelectorAll('.btn');
const operationbtns = document.querySelectorAll('.operator');
const equalbtn = document.getElementById('equal');
const clearbtn = document.getElementById('ac');
const deletebtn = document.getElementById('delete');
const currentDisplay = document.getElementById('cScreen');
const previousOperationScreen = document.getElementById('pScreen');

buttonbtns.forEach((btn) => btn.addEventListener('click', () => assignOperand(btn.textContent)));
operationbtns.forEach((btn) => btn.addEventListener('click', () => assignOperation(btn.textContent)));
equalbtn.addEventListener('click' , evaluate);
clearbtn.addEventListener('click', clear);
deletebtn.addEventListener('click', backSpace);

function assignOperand(number){
    resetScreen()
    currentDisplay.textContent += number;
    }

function assignOperation(){
    console.log('operation');
}

function resetScreen(){
    currentDisplay.textContent = '';
    doResetScreen = false;
}

function clear(){
    currentDisplay.textContent = '0';
    console.log('hello');
}

function evaluate(){
    console.log('nothing')
}

function backSpace(){
    console.log('hi');
}






function operate(operator, a , b){
    a = Number(a);
    b = Number(b);

    switch(operator){
        case '+':
            add(a , b);
        break;

        case '-':
            sub(a, b);
        break;
        
        case 'x':
            mul(a , b);
        break;

        case '/':
            div(a, b);
        break;

        default:
            console.log('operator not founc');
        break;
    }
}

function add(a , b){
    return a + b;
}

function sub(a , b){
    return a - b;
}

function mul(a , b){
    return a * b;
}

function div(a , b){
    return a / b;
}
