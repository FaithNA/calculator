const add = function(arr){
    let result = 0;
    arr.forEach(num =>{
        result += num;
    });
    return result;
}

const subtract = function (arr){
    let result = arr[0];
    for(let i=1; i<arr.length; i++){
        result -= arr[i];
    }
    return result
}

const multiply = function(arr){
    let result = 1;
    arr.forEach(num =>{
        result *= num;
    });
    return result;
}

const divide = function(arr){
    
    let result = arr[0];
    for(let i=1; i<arr.length; i++){
        if (arr[i] === 0){
            return 'ERROR';
        }
        result /= arr[i];        
    }
    return result.toFixed(6);    
}

let firstNum;
let operator;
let secondNum;

const operate = function(num1, sign, num2){
    let result;
    if(sign == '+'){
        result = add([num1, num2]);
    }else if(sign == '-'){
        result = subtract([num1, num2]);
    }else if(sign == '×'){
        result = multiply([num1, num2]);
    }else if(sign == '÷'){
        result = divide([num1, num2]);
    }
    console.log(result);
    return result;
}



let numKeys = document.querySelectorAll(".dark-grey");
let display = document.querySelector(".display");
display.setAttribute("style", "display:flex; flex-direction: row;");
let clr = document.querySelector("#clear");

let shouldClearDisplay = false;

//Get numbers from clicks
numKeyArr = Array.from(numKeys);
console.log(numKeyArr);
numKeyArr.forEach(key =>{
    key.addEventListener("click", ()=>{
        console.log(key.textContent);

        if (shouldClearDisplay) {
            display.textContent = "";
            shouldClearDisplay = false;
        }

        display.textContent += key.textContent



    });
});



//Get operators from clicks
let opKey = document.querySelectorAll(".orange");
opKeyArr = Array.from(opKey);
console.log(opKeyArr);

opKeyArr.forEach(op =>{
    op.addEventListener("click", ()=>{

        
       if(op.textContent != "="){
        firstNum = Number(display.textContent);
        console.log (firstNum);

        display.textContent = "";

        operator = op.textContent;
       } else if(op.textContent == "="){

        secondNum = Number(display.textContent);
        result = operate(firstNum, operator, secondNum);

        display.textContent = "";
        display.textContent += result;
        firstNum = result;

        shouldClearDisplay = true;
        

    }
    });
});

//Clear display
function clearDisplay(){
    clr.addEventListener("click", ()=>{
        display.textContent = "";
    });
    
}

clearDisplay();

