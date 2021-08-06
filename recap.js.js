// // // // // var number = 50;
// // // // // var number1 = 60;
// // // // // var number2 = 40;

// // // // // if(number > number1 && number1 > number2){
// // // // //     console.log('number is boro');
// // // // // }else if(number1 > number && number1 > number2){
// // // // //     console.log('number1 is big');
// // // // // }else{
// // // // //     console.log('number 2 is big');
// // // // // }

// // // // // var i = 600;
// // // // // function  maxNumberFind (n1, n2 ,n3){
// // // // //     if(n1 > n2 && n1 > n3){
// // // // //         return n1;
// // // // //     }else if(n2 > n1 && n2 > n3){
// // // // //         return n2;
// // // // //     }else{
// // // // //         return n3;
// // // // //     }
// // // // // }
// // // // //  const number = maxNumberFind(45 , 20, (i));
// // // // //  console.log('big number is : ', number);

// // // // // swap if else 
// // // // // var n1 =50;
// // // // // var n2 = 60;

// // // // // console.log(n1 , n2);

// // // // // var temp = n1;
// // // // // n1 = n2;
// // // // // n2 = temp;
// // // // // console.log(n1 ,  n2);


// // // // // arry sum 




// // // // function arrySum (numbers){
// // // //     let  sum = 0;
// // // //     for(i = 0;  i < numbers.length; i++){
// // // //         var element = numbers[i];
// // // //         sum = sum + element;
// // // //     }
// // // //     return sum;
// // // // }
// // // // var result = arrySum([20]);
// // // // console.log('result is: ' , result);

// // // function getHeigtVAlue (n){
// // //     var height = 0;
// // //     var i = 0;
// // //     while( i <= n.lenght){
// // //         var element =  n[i];
// // //         i++;

// // //         if(element > height){
// // //             height = element;
// // //         }
// // //     }
// // //     return height;
// // // }
// // // var myArray = getHeigtVAlue([20,10,30,]);
// // // console.log('the height value is: ' , myArray);
// // function getMaxAges(ages){
// //     var height = 0;
// //     for(var i = 0; i < ages.lenght ; i++){
// //         var element = ages[i];
// //         if(element > height){
// //             height = element;
// //         }
// //     }
// //     return height;
// // }
// //  var result = getMaxAges([50,20,60]);
// //  console.log('max ages is: ' , result);


// //  function findLargestNumber (ages){
// //        var largest = 0;
// //         for( var i = 0; i < ages.length ; i++){
// //             var element = ages[i];
// //             if(element > largest){
// //                 largest = element;
// //             }
// //         }
// //         return largest;
// //     }
// //      var ourAges = findLargestNumber([20, 10, 50, 504, 101]);
// //      console.log('the big ages is: ' ,ourAges);
//     //  ownway

//     //  function getAged (ages){
//     //      var height = 0;
//     //      for(var i = 0; i <= ages.length ; i++){
//     //          let element = ages[i];
//     //          if(element > height){
//     //              height = element;
//     //          }
//     //      }
//     //      return height;
//     //  }

//     //  var ourAges = getAged([20,888,10,100,2010]);
//     //  console.log('big is: ' ,ourAges);


//     // function getMinAges (ages){
//     //     var lowest = ages[0];
//     //     for(let i = 0; i <= ages.length; i++){
//     //         var element = ages[i];
//     //         if(element < lowest){
//     //             lowest = element;
//     //         }
//     //     }
//     //     return lowest;
//     // }
//     //  var myAges = getMinAges([10,20,50, 1, 50, 0]);
//     //  console.log('lowest is: ' ,myAges);



//     // fibonacci 

// //     var fibo = [ 0, 1];
// //     for(var i = 2; i <= 20; i++){
// //         fibo[i] = fibo[i -1] + fibo[ i -2];
// //     }
// //    console.log(fibo);
// // function getfibonacci (numbers){
// //     if(typeof numbers != 'number'){
// //         return 'enter a number';
// //     } 
// //     if(numbers <= 2){
// //         return 'enter up to 2 value';
// //     }
// //     var fibo = [0, 1];
// //     for(var i = 2; i < numbers; i++){

// //         fibo[i] = fibo[i -1] + fibo[i -2];

// //     }
// //     return fibo;
// // }

// // var myArray = getfibonacci(8);
// // console.log('the result is: ' , myArray);




// // function getFiboValue (n){
// //     if(typeof n != 'number'){
// //         return 'please! enter a valid number';
// //     }
// //     if( n <= 2){
// //         return 'enter up to 2 value';
// //     }
// //     var fibo = [0 , 1];
// //     var i = 2;
// //     while( i <= n){
// //         fibo[i] = fibo[i -1] + fibo[i -2];
// //         i ++;
// //     }
// //     return fibo;
// // }

// // const myValue = getFiboValue(3);
// // console.log(myValue);




// // new sum 
// // const numbers = [10, 20, 30, 40];
// // let sum = 0;

// // for(var i =0; i < numbers.length; i++){
// //     let element = numbers[i];
// //     sum = sum + element;
// // }
    
// // console.log(sum);


// function arraySum (numbers){
//     sum = 0;
//     for( var i = 0; i < numbers.length; i++){
//         let element = numbers[i];
//         sum = sum + element;

//     }
//     return sum;
// }
// var result = arraySum([10,20,60,10]);
// console.log(result);


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
      


