
const ac = document.getElementById('ac');
const display = document.getElementById('screen');
const reset = document.getElementById('ac');
reset.addEventListener('click', () => {
    display.value = '';
    console.log(display.value)
    num1 = '';
    num2 = '';
}
);
// let isOperator = false;

let num1 = '';
let num2 = '';
let operator = '';

// let arr =[];
function pushValue(e){
    const value = e.target.textContent;
    if(!operator){
        num1 += value;
    }else{
        num2 += value;
    }
    display.value += value;
}

// function to check when the operator is clicked to assign num1 and num2 respectively
function checkOperatorClicked(e){
    const value = e.target.textContent;
    if( value === '='){
        operation();
    }else{
        operator = value;
        display.value += value;
    } 
}


function operation(){
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    if(operator === '+'){
            display.value = add(num1Value, num2Value);
    }else if(operator === '-'){
            display.value = sub(num1Value, num2Value);
    }else if(operator === '*'){
            display.value = mul(num1Value, num2Value);
    }else if(operator === '/'){
            display.value = div(num1Value, num2Value);
    }

    console.log(display.value);
    num1 = '';
    num2 = '';
    operator = '';
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
    return b === 0 ? "OOPS" : a / b;
}
  
const button = document.querySelectorAll('.btn');
button.forEach(btn => btn.addEventListener('click', pushValue));
// button.forEach(btn => btn.addEventListener('click', checkOperatorClicked ));


const operate = document.querySelectorAll('.operator');
operate.forEach(btn => btn.addEventListener('click', checkOperatorClicked));
// operate.forEach(btn => btn.addEventListener('click', checkOperate));

const enter = document.getElementById('equal');
enter.addEventListener('click', operation);






