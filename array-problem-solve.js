// // array sum

// function arrySum (numbers){
//      let sum  = 0;
//      for(var i = 0; i < numbers.length; i++){
//          var element = numbers[i];
//          sum = sum + element;
//      }
//      return sum;
// }
// var result = arrySum([5,10,20]);
// console.log('result is: ' , result);

// // big number find 
// function findLargestNumber (ages){
//     largest = 0;
//     for(i = 0; i < ages.length ; i++){
//         var element = ages[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
//  var ourAges = findLargestNumber([20, 10, 50, 504, 101]);
//  console.log('the big ages is: ' ,ourAges);
  

//  again 
function findBig (ages){
    var largest = 0;
    for(var i = 0 ; i < ages.length ; i++){
        var element = ages[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
 var ages = findBig([10,20,80,500,30, 5000]);
 console.log('big ages is: ' , ages);

//  done 