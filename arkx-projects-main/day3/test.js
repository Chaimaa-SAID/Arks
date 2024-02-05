//Task 1 : Speed run !! 
  
// counteur
function countEven(numbers){
  
    return numbers.filter(num => num % 2 === 0).length;
} 
numbers=[1,2,3,4,5];
 c=countEven(numbers);
console.log(c);
//methode 2
function countEven2(num2){
  let cout=0;
    for (let i = 0; i < num2.length; i++) {

      if (num2[i] % 2 === 0) {
           cout++;
        
      }

                   }
                   return cout;
                  }

 numbersArray = [1, 2, 3, 4, 5];
 result = countEven2(numbersArray);
console.log(result);

