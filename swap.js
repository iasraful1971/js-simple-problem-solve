var first = 5;
var second = 7;
console.log(first , ' , ',  second);
var temp = first ;
first = second;
second = temp;
console.log(first , ' , ',  second);


// my practice 

var numberOne = 50;
var numberTwo = 100;
console.log(numberOne ,  numberTwo);

const temporary = numberOne;
numberOne = numberTwo;
numberTwo = temporary;
console.log(numberOne ,  numberTwo);

//destructureing
const num = 22;
const nums = 44;
console.log(num , nums);
const result = [num , nums] = [nums , num];
console.log(result);

