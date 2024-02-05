//Task 1 : Factorial
let num=5
let fact=1;
let i;
for ( i =1 ; i <= num; i++) {
  fact*=i;
}
console.log("factorial de "+num+" est: "+fact);

//Task 2 : How many digits ?
var num2 = 1235;
let j = 0;
while (num2!=0) {
    num2 = Math.floor(num2 / 10);
        j++;

}
console.log("le nombre de chiffre est: "+j);
//Task 3 :  Time to draw !
const num3=5;
    // la hauteur 
for (let k = 0; k < num3; k++) {
    let tree = '';
    // boucle pour les espace entre les etoiles
    for (let m = 0; m < num3 - k - 1; m++) {
        tree += ' ';
    }
    // boucle pour les etoiles
    for (let e = 0; e < 2 * k + 1; e++) {
        tree += '*';
    }
       
    console.log(tree);
}
    for (let i = 0; i < num3 - 1; i++) {
        console.log(' '.repeat(num3 - 1) + '|');
    }


