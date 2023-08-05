
const addition = document.getElementById('+');
const subtraction = document.getElementById('-');
const multiply = document.getElementById('x');
const divide = document.getElementById('/');
const ac = document.getElementById('ac');
const enter = document.getElementById('equal');
const display = document.getElementsByClassName('screen');


let num1 = undefined;
let num2 = undefined;
let operator = undefined;

let x =[];
let y =[];



// enter = document.addEventListener('click', )



function operation(num1 , num2, operator){
    switch(operator){
        case '+':
            add(num1, num2);
        break;

        case '-':
            sub(num1, num2);
        break;

        case '*':
            mul(num1, num2);
        break;

        case '/':
            div(num1, num2);
        break;

        default:
            return "fuck you";
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
    return b === 0 ? "OOPS" : a / b;
}


const button = document.querySelectorAll('.btn');
button.forEach(btn => btn.addEventListener('click', assign));


const operate = document.querySelectorAll('.operator');
operate.forEach(btn => btn.addEventListener('click', checkOperate));

function checkOperate(){
    if(this.textContent === '+'){
        operator = '+';
    }else if(this.textContent === '-'){
        operator = '-';
    }else if(this.textContent === 'x'){
        operator = '*';
    }else if(this.textContent === '/'){
        operator = '/'; 
    }else if(this.textContent === 'AC'){
        console.log('AC');
    }else if(this.textContent === 'Equal'){
        operation(num1, num2, operator);
    }
}




function assign(){
   x.push(this.textContent);
   window.addEventListener('click', )
   if(x.length > 0 && x.isEmtpy()){
     num1 = parseFloat(x.join(''));
     }else{
        y.push(this.textContent);
        num2 = parseFloat(y.join(''));
        console.log(num2);
    }
}


