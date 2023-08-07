let num1 = '';
let num2 = '';
let operator = '';
let runCalculation = false;
const ac = document.getElementById('ac');
const display = document.getElementById('screen');
const deleteBtn = document.getElementById('delete');

// AC - clears out entire value 
const reset = document.getElementById('ac');
reset.addEventListener('click', () => {
    display.value = '';
    console.log(display.value)
    num1 = '';
    num2 = '';
    operator = '';
});

function Backspace(){
    if(runCalculation) return; //Disable Backspace 

    if(operator){
        if(num2.length > 0){
            num2 = num2.substring(0, num2.length - 1);
            // display.value = display.value.slice(0, -1);
        }else{
            operator = "";
            // display.value = display.value.slice(0, -1);
        }
        console.log ('num2: ', num2);
    }else{
        if(num1.length > 0){ // 
        // num1 = num1.substring(0, num1.length - 1);
        // display.value = num1;
        }
        // console.log ('num1: ' , num1);
        display.value = num1 + operator + num2;

    }
}


deleteBtn.addEventListener('click', Backspace);
// let isOperator = false;



// let arr =[];
function pushValue(e){
    const value = e.target.textContent;

    if(runCalculation){
        num1 = value;
        num2 = '';
        operator = '';
        display.value = value;
        runCalculation = false;
    } else {
        if(!operator){
            num1 += value;
        }else{
            num2 += value;
        }
        // display.value += value;
    }
    display.value = num1 + operator + num2;
}

// function to check when the operator is clicked to assign num1 and num2 respectively
function checkOperatorClicked(e){
    const value = e.target.textContent;
    if( value === '='){
        operation();
    } else {
        operator = value;
        // display.value += value;
    } 
    display.value = num1 + operator + num2;
}
       


function operation(){
    let num1Value = parseFloat(num1).toFixed(2);
    console.log(num1Value);
    console.log(operator);
    let num2Value = parseFloat(num2).toFixed(2);
    console.log(num2Value);

    // if(isNaN(num1Value) || isNaN(num2Value) || !operator){
    //     display.value = "ERROR";
    //     return;
    // };

    if(operator === '+'){
            display.value = add(num1Value, num2Value);
    }else if(operator === '-'){
            display.value = sub(num1Value, num2Value);
    }else if(operator === '*'){
            display.value = mul(num1Value, num2Value).toFixed(2);
    }else if(operator === '/'){
            display.value = div(num1Value, num2Value).toFixed(2);
    }

    num1 = display.value;
    num2 = '';
    operator = '';

    runCalculation = true;
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






