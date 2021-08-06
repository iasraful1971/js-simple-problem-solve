function largestElement(numbers){
    let largest = 0;
    for(let i = 0;  i< numbers.length; i++){
        let element = numbers[i];
        if(element >largest){
            largest = element;
        }

    }
    return largest;
   
}

const ages = [20,21,18,20, 55, 69, 89];
const oldAges = largestElement(ages);
console.log(oldAges);



const oldAges2 = largestElement([-5, -12,-89 , -5,])
console.log(oldAges2);

