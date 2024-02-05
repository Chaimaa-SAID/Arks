// methode 1
function sum(numbers){
    
    return numbers.reduce((total, current) => total + current, 0);
}
//le tet 1
 numbers=[1,2,3,4,5];
result =sum(numbers);
console.log(result);
//methode 2
function sum2(n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
      total += n[i];
    }
    return total;
  }
    // le test2
     numbersArray = [1, 2, 3, 4, 5];
     result = sum2(numbersArray);
    console.log(result); // Output will be 15 (1 + 2 + 3 + 4 + 5 = 15)