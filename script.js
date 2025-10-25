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
        if (arr[i] == 0){
            return 'ERROR';
        }
        result /= arr[i];        
    }
    return result;    
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
    }else if(sign == '*'){
        result = multiply([num1, num2]);
    }else if(sign == '/'){
        result = divide([num1, num2]);
    }
    return result;
}

console.log(add([3, 5, 7, 8]));
console.log(multiply([3, 5, 7, 8]));
console.log(subtract([15, 8, 2]));
console.log(divide([15, 8, 2]));


let numKeys = document.querySelectorAll(".dark-grey");
let display = document.querySelector(".display");
display.setAttribute("style", "display:flex; flex-direction: row;");
let clr = document.querySelector("#clear");

console.log(display.textContent);

numClicked = [];

//Get numbers from clicks
numKeyArr = Array.from(numKeys);
console.log(numKeyArr);
numKeyArr.forEach(key =>{
    key.addEventListener("click", ()=>{
        console.log(key.textContent);
        numClicked.push(key.textContent);
        console.log(numClicked);

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










// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduction(){
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }
// const person1 = new Person("Evans", 9);
// const person2 = new Person("Roy", 12);

// console.log(person2.introduction());





// function Book(title, author, pages, readingStatus){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readingStatus = readingStatus;
  
// }

// Book.prototype.giveInfo = function(){
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readingStatus}`
// }
   


// const book1 =  new Book("The subtle art of not giving a f*ck", "Mark Robinson", 300, "Not read yet");


// console.log(book1.giveInfo());
// console.log(Object.getPrototypeOf(book1) === Book.prototype);