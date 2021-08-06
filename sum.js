// var numbers = [10, 20, 30,40,50];
// // let sum = 0;

// // for( var i = 0; i < numbers.length ; i++){
// //    var element = numbers[i];
// //    sum = sum + element;
// //    console.log(sum);  
// // }

// //  function way 
// function arraySum (numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// const arryTotal  = arraySum([20, 30, 40, 50, 60]);
// console.log(arryTotal);

var totalNumbers = [10,20,30,40,50];
var sum = 0;
for(i = 0; i < totalNumbers.length; i++){
    var element = totalNumbers[i];
    sum = sum + element;
    // console.log(sum);
     
}

//  function way

function arraySum (number){
    let sum = 0;
    for( i = 0; i < number.length ; i++){
        var elem = number[i];
        sum = sum + elem;

    }
    return sum;
}
 arrayResult  =arraySum([10,20,30, 40]);
 console.log('total value is: ', arrayResult);