
// // const fibo = [0, 1];
// // for(let i = 2 ; i <= 100; i =i+1){
// //  fibo[i] = fibo[i -1] + fibo[i -2];
// // }
// // console.log(fibo);
// // function createFebonacciSeries (numbers){
// //     const fibo = [0 , 1];
// //     for(i =2 ; i <= numbers; i++){
// //         fibo[i] = fibo[i -1] + fibo[i -2]
// //     }
// //     return fibo;
// // }
// // const result = createFebonacciSeries(10);
// // console.log('series is: ', result);

// // var fibo = [0 , 1];

// // for(i = 2; i <= 20; i++){
// //     fibo[i] = fibo[i -1] + fibo[i -2];
// // }
// // console.log(fibo);

// // functional way 
// // function getfiboValue (num){
// //      var fibo = [0 ,1];
// //     for(var i = 2; i <=num ; i++){
// //      fibo[i] = fibo[i -1] + fibo[i -2];   
// //     }
// //     return fibo;
// // }
// // const fiboResult = getfiboValue(20);
// // console.log('the value is: ', fiboResult);

// //  fibo in while loop 

// function fibovalueIsGoingOn (nums){
//     if(typeof nums != 'number'){
//         return 'plase enter only number';
//     };
//      if(nums <= 2){
//          return 'enter a valid numbr';
//      }
//     var fibo = [0 , 1];
//     var i = 2;
//     while(i <= nums){
//         fibo[i] = fibo[i -1]+ fibo[i -2];
//         i =i +1;
//     }
//     return fibo;
// }
//  const theResult = fibovalueIsGoingOn(3);
//  console.log('the result is : ', theResult);



function getFiboValue (n){
    if(typeof n != 'number'){
        return 'please! enter a valid number';
    }
    if( n <= 2){
        return 'enter up to 2 value';
    }
    var fibo = [0 , 1];
    var i = 2;
    while( i <= n){
        fibo[i] = fibo[i -1] + fibo[i -2];
        i ++;
    }
    return fibo;
}

const myValue = getFiboValue(3);
console.log(myValue);