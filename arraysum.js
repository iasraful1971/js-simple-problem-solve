

 function findLargestNumber (ages){
        largest = 0;
        for(i = 0; i < ages.length ; i++){
            var element = ages[i];
            if(element > largest){
                largest = element;
            }
        }
        return largest;
    }
     var ourAges = findLargestNumber([20, 10, 50, 504, 101]);
     console.log('the big ages is: ' ,ourAges);
      