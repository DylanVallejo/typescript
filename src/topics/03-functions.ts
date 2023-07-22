

function addNumbers(a:number ,b :number):number{
    return a + b;
}

const addNumbersArrow = (a:number , b:number):string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

const result = addNumbers(2,2);
const resulArrow:string = addNumbersArrow(5,5);
const multiplyResult:number = multiply(6);
console.log({result, resulArrow,multiplyResult});

export{}